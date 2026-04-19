---
title: "Speculative Decoding"
category: "LLM Infrastructure"
order: 5
lang: "en"
slug: "speculative-decoding"
---

# Speculative Decoding

## Overview

Speculative decoding is an inference acceleration technique that achieves 2–4x speedup in autoregressive language model generation without any change to output quality. The core idea is simple: a fast, cheap "draft" model generates a short sequence of candidate tokens speculatively, and the large "target" model verifies all of them in a single parallel forward pass rather than generating them one by one.

The technique was independently introduced by Leviathan et al. (Google Brain, 2022) in "Fast Inference from Transformers via Speculative Decoding" and Chen et al. (DeepMind, 2023) in "Accelerating Large Language Model Decoding with Speculative Sampling." Both papers proved that the accept/reject sampling scheme preserves the exact token distribution of the target model — meaning there is zero quality degradation relative to standard greedy or temperature sampling from the target model.

The bottleneck that speculative decoding addresses is well understood: large autoregressive models are memory-bandwidth bound, not compute bound, during single-sequence generation. Each token requires loading all model weights from HBM into compute units to produce a single output token. A model with 70B parameters at fp16 requires loading ~140 GB per token step. By batching the verification of $k$ draft tokens into one forward pass, the memory transfer cost is amortized over $k$ tokens rather than incurred once per token.

## How It Works

**Step 1 — Draft generation:** A small draft model $M_q$ generates $k$ tokens autoregressively: $\tilde{x}_1, \tilde{x}_2, \ldots, \tilde{x}_k$ starting from the current context. The draft model is fast because it is small (e.g., 7B parameters vs. 70B target).

**Step 2 — Parallel verification:** The target model $M_p$ runs a single forward pass over the full context plus all $k$ draft tokens simultaneously, computing the probability distributions $p(\cdot \mid \text{context}, \tilde{x}_{<i})$ for each position $i$ in parallel.

**Step 3 — Accept/reject sampling:** For each draft token $\tilde{x}_i$, compare the target probability $p(\tilde{x}_i)$ to the draft probability $q(\tilde{x}_i)$. Accept with probability $\min\!\left(1, \frac{p(\tilde{x}_i)}{q(\tilde{x}_i)}\right)$. If rejected, sample a corrected token from the adjusted distribution and stop.

**Step 4 — Bonus token:** After all $k$ draft tokens are accepted, the target's output at position $k+1$ is used as an additional free token (since the target already computed it during the verification pass).

**Effective throughput:** If on average $\alpha$ out of $k$ draft tokens are accepted (acceptance rate), each "round" produces $\alpha k + 1$ tokens with the cost of one target forward pass plus $\alpha k$ draft forward passes. When draft generation is cheap, this is substantially faster than $\alpha k + 1$ separate target passes.

## Mathematical / Formal Framework

Let $p(x \mid \text{ctx})$ be the target distribution and $q(x \mid \text{ctx})$ the draft distribution. The accept/reject scheme samples from a modified distribution:

$$
\tilde{p}(x) = \begin{cases}
q(x) & \text{with probability } \min\!\left(1, \frac{p(x)}{q(x)}\right) \\
\text{reject, resample from } p'(x) & \text{otherwise}
\end{cases}
$$

where the corrective residual distribution is:

$$p'(x) = \frac{\max(0,\; p(x) - q(x))}{\sum_{x'} \max(0,\; p(x') - q(x'))}$$

The key theorem (Leviathan et al.) proves that the resulting distribution over accepted tokens equals $p(x)$ exactly:

$$\mathbb{E}[\tilde{p}(x)] = p(x) \quad \forall x$$

This means speculative decoding is a lossless approximation — not a compression or distillation. It accelerates sampling without changing what is sampled.

The expected number of accepted draft tokens per round is:

$$\mathbb{E}[\alpha] = \sum_{x} \min(p(x), q(x)) = 1 - \text{TV}(p, q)$$

where $\text{TV}(p, q)$ is the total variation distance between target and draft distributions. The closer the draft is to the target, the higher the acceptance rate and the greater the speedup.

Wallclock speedup factor $S$ is approximately:

$$S \approx \frac{1 + \mathbb{E}[\alpha]}{1 + c \cdot \mathbb{E}[\alpha]}$$

where $c = t_{\text{draft}} / t_{\text{target}}$ is the ratio of draft to target per-token generation time. For $c \approx 0.1$ and $\mathbb{E}[\alpha] = 3$, $S \approx 3.6\times$.

## Implementation

The following pseudocode captures the accept/reject loop at the core of speculative decoding. In practice this is implemented inside a model-serving framework (vLLM, TGI, TensorRT-LLM) rather than exposed directly to application code.

```python
import torch
import torch.nn.functional as F


def speculative_decode_step(
    context_ids: torch.Tensor,
    target_model,
    draft_model,
    k: int = 4,
    temperature: float = 1.0,
) -> torch.Tensor:
    """
    One speculative decoding round.
    Returns new tokens to append to context_ids.

    Args:
        context_ids: (1, seq_len) token ids of current context.
        target_model: large verifier model (e.g. 70B).
        draft_model:  small proposal model (e.g. 7B).
        k:            number of tokens to draft per round.
        temperature:  sampling temperature (1.0 = no scaling).

    Returns:
        accepted_tokens: (1, m) tensor where 1 <= m <= k+1.
    """
    draft_ids = context_ids.clone()
    draft_token_list: list[torch.Tensor] = []
    draft_prob_list: list[float] = []

    # Phase 1: draft model generates k tokens autoregressively
    with torch.no_grad():
        for _ in range(k):
            out = draft_model(draft_ids)
            logits = out.logits[:, -1, :] / max(temperature, 1e-5)
            probs = F.softmax(logits, dim=-1)
            token = torch.multinomial(probs, num_samples=1)
            draft_token_list.append(token)
            draft_prob_list.append(probs[0, token.item()].item())
            draft_ids = torch.cat([draft_ids, token], dim=-1)

    # Phase 2: target model verifies all k tokens in ONE forward pass
    verify_ids = torch.cat([context_ids] + draft_token_list, dim=-1)
    with torch.no_grad():
        target_out = target_model(verify_ids)

    ctx_len = context_ids.shape[1]
    # target_logits[i] is the distribution for position ctx_len + i
    target_logits = target_out.logits[0, ctx_len - 1 :, :]
    target_probs_all = F.softmax(target_logits / max(temperature, 1e-5), dim=-1)

    # Phase 3: accept/reject each draft token
    accepted: list[torch.Tensor] = []
    for i, (tok, q_prob) in enumerate(zip(draft_token_list, draft_prob_list)):
        p_prob = target_probs_all[i, tok.item()].item()
        accept_prob = min(1.0, p_prob / (q_prob + 1e-8))
        if torch.rand(1).item() < accept_prob:
            accepted.append(tok)
        else:
            # Resample from residual distribution to preserve target dist.
            residual = torch.clamp(
                target_probs_all[i] - F.softmax(
                    draft_model(context_ids).logits[0, -1, :] / max(temperature, 1e-5),
                    dim=-1,
                ),
                min=0.0,
            )
            residual = residual / residual.sum().clamp(min=1e-8)
            corrected = torch.multinomial(residual.unsqueeze(0), num_samples=1)
            accepted.append(corrected)
            break  # stop at first rejection

    # Phase 4: bonus token — target already computed it for free
    bonus_pos = len(accepted)
    bonus = torch.multinomial(target_probs_all[bonus_pos].unsqueeze(0), num_samples=1)
    accepted.append(bonus)

    return torch.cat(accepted, dim=-1)
```

Production note: frameworks like **vLLM** (v0.4+) and **TensorRT-LLM** include optimized speculative decoding kernels. The above captures the algorithm; for real deployments, use those libraries.

## Draft Model Options

| Draft Strategy | Description | Acceptance Rate | Overhead |
|---|---|---|---|
| Smaller model (same family) | Llama-7B drafts for Llama-70B | 0.70–0.85 | Low |
| N-gram model | Retrieves likely continuations from prompt cache | 0.50–0.70 | Minimal |
| MEDUSA heads | Extra FFN heads on top of target model | 0.65–0.80 | In-process |
| EAGLE | Feature-level draft using target's hidden states | 0.80–0.90 | Moderate |

**MEDUSA** (Cai et al., 2024) attaches multiple "heads" to the frozen target model that each predict tokens $k$ steps ahead. This eliminates the need for a separate draft model but requires fine-tuning the extra heads.

**EAGLE** (Li et al., 2024) uses the target model's penultimate hidden states as input to the draft model, achieving very high alignment between draft and target distributions.

## Key Trade-offs

- **Zero quality loss:** mathematically guaranteed to match the target distribution — not an approximation.
- **Hardware dependency:** speedup is most pronounced on memory-bandwidth-bound hardware (A100, H100). TPUs with different memory hierarchies may see less benefit.
- **Batch size sensitivity:** speculative decoding benefits single-sequence or small-batch inference. Large batch inference is already compute-bound, so the benefit shrinks.
- **Draft model maintenance:** using a separate draft model adds operational complexity (two model versions to deploy and update together).
- **Prompt sensitivity:** acceptance rate varies with text type. Code and structured text tend to have higher acceptance rates; creative text with wide token diversity has lower rates.

## Variants & Extensions

**Self-speculative decoding:** the target model itself generates drafts by skipping certain layers (layer-skip drafting), eliminating the need for a separate draft model entirely.

**Batch speculative decoding:** extends the algorithm to batched inference by maintaining a shared verification structure across batch elements.

**SpecInfer:** extends speculative decoding to tree-structured drafts, proposing multiple candidate continuations simultaneously and verifying them all in one tree-attention forward pass.

**DistillSpec:** uses knowledge distillation to train the draft model specifically to mimic the target model's next-token distribution, maximizing acceptance rate.

## Practical Applications

- **Long-form generation:** research summaries, code generation — the longer the output, the more speedup compounds. Particularly valuable for chain-of-thought reasoning where hundreds of reasoning tokens are generated.
- **Interactive assistants:** speculative decoding reduces both first-token latency and per-token latency, improving perceived responsiveness.
- **On-device inference:** mobile and edge deployments where a tiny on-device draft model proposes tokens that a cloud target model verifies in one call, amortizing network round-trip cost.
- **Cost reduction:** cloud inference pricing is often per-token of compute. Speculative decoding can reduce billed compute for long outputs by amortizing target model passes.

## Where this sits in the broader inference stack

Speculative decoding is one of three orthogonal levers for cheaper / faster transformer inference, all of which exploit different bottlenecks of the underlying [[transformer-architecture|transformer architecture]]:

- **Architecture-level**: [[mixture-of-experts|Mixture-of-Experts]] activates only a fraction of model weights per token, trading parameter count for compute per token. Speculative decoding is fully compatible with MoE — both can stack.
- **Algorithm-level**: speculative decoding amortises memory-bandwidth cost across $k$ candidate tokens at constant model weight transfer.
- **Compute-economics level**: [[neural-scaling-laws|neural scaling laws]] dictate the optimum compute/parameter ratio at a given budget. Speculative decoding shifts the cost curve at the inference end without retraining.

The three levers are typically combined in production stacks: an MoE target model verifies drafts produced by a dense small model, on hardware whose memory bandwidth is the binding constraint that speculative decoding was designed to beat.

For [[chain-of-thought|extended-thinking models]] that emit hundreds of internal reasoning tokens before any user-visible output, speculative decoding is doubly valuable — the speedup compounds linearly with reasoning length, which is why production reasoning models (Claude extended thinking, o1/o3) lean on it heavily.

## Related Topics

- [[transformer-architecture]] — the autoregressive bottleneck speculative decoding exists to relieve.
- [[mixture-of-experts]] — orthogonal architectural lever, fully stackable with speculative decoding.
- [[neural-scaling-laws]] — compute-economics frame for inference-time optimisations.
- [[chain-of-thought]] — extended-thinking models generate long reasoning traces; the speedup compounds linearly with chain length.
- [[rag]] — RAG and speculative decoding stack cleanly in production inference stacks.
- [[mcp]] — MCP-heavy agents have long contexts where the speedup matters most.

