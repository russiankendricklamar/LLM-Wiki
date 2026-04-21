---
title: "Mixture of Experts (MoE)"
category: "Language Models"
order: 5
lang: "en"
slug: "mixture-of-experts"
---

# Mixture of Experts (MoE)

## Prerequisites

[[llm]], [[slm]]

## What Is It

Mixture of Experts is an architectural paradigm that decouples the number of parameters in a model from the amount of compute used per forward pass. A standard dense [[transformer-architecture|transformer]] uses every parameter for every token. An MoE transformer replaces some or all feed-forward layers with a bank of $N$ expert networks and a learned router that selects a small subset $k$ of them for each token. Only those $k$ experts perform computation; the rest are idle for that token.

The consequence is striking: you can have a model with, say, 200 billion total parameters but use only the compute equivalent of a 20 billion dense model at inference time, because only $k/N$ of the experts are active per token. This gives MoE models a favorable point on the quality-versus-compute curve: same FLOP budget as a dense model, but access to far more parameters, and therefore more representational capacity.

MoE is not a new idea — Jacobs et al. introduced it in 1991 — but it became practical for large-scale language modeling with Switch Transformer (2021) and has since become a dominant architecture for frontier models.

## Visualization

```chart
{
  "type": "bar",
  "xAxis": "model",
  "data": [
    {"model": "Dense 7B", "total_params": 7, "active_params": 7},
    {"model": "Dense 13B", "total_params": 13, "active_params": 13},
    {"model": "Dense 70B", "total_params": 70, "active_params": 70},
    {"model": "Mixtral 8×7B", "total_params": 47, "active_params": 13},
    {"model": "Mixtral 8×22B", "total_params": 141, "active_params": 39},
    {"model": "DeepSeek-V2", "total_params": 236, "active_params": 21},
    {"model": "Grok-1", "total_params": 314, "active_params": 86}
  ],
  "lines": [
    {"dataKey": "total_params", "stroke": "#ef4444", "name": "Total params (B)"},
    {"dataKey": "active_params", "stroke": "#10b981", "name": "Active params per token (B)"}
  ]
}
```

## Architecture

In a transformer MoE, each standard FFN layer is replaced by an **MoE layer** consisting of:

1. **$N$ expert FFNs**: each expert is an independent two-layer [[transformer-architecture|MLP]] with the same structure as a standard FFN, but they are initialized differently and learn to specialize.
2. **Router (gating network)**: a linear layer $W_g \in \mathbb{R}^{d \times N}$ followed by softmax that produces a probability distribution over experts for each token.

The routing and expert selection:

$$g(x) = \text{Softmax}\!\left(\text{TopK}\!\left(x W_g,\; k\right)\right)$$

where $\text{TopK}(z, k)$ keeps the top-$k$ logits and sets the rest to $-\infty$ before softmax, so only $k$ experts receive nonzero weight. The output of the MoE layer is the weighted sum of selected experts:

$$\text{MoE}(x) = \sum_{i \in \text{TopK}} g(x)_i \cdot \text{FFN}_i(x)$$

Typically $k = 1$ (Switch Transformer) or $k = 2$ (GShard, Mixtral). With $k = 1$, routing is a hard selection and the output is simply the single selected expert's output.

## Mathematical Framework

**Router logits and gating**:

$$h(x) = x W_g \in \mathbb{R}^N$$
$$g(x) = \text{Softmax}(\text{TopK}(h(x), k))$$

**Load balancing auxiliary loss** — the critical stability mechanism. Without it, the router collapses to always selecting the same one or two experts, leaving others undertrained. The auxiliary loss penalizes unequal expert utilization:

$$\mathcal{L}_{\text{aux}} = \alpha \cdot N \cdot \sum_{i=1}^{N} f_i \cdot P_i$$

where $f_i$ is the fraction of tokens dispatched to expert $i$ in the batch (the actual load), $P_i$ is the mean routing probability assigned to expert $i$ across the batch (the smooth surrogate), and $\alpha$ is a small weight coefficient (typically $10^{-2}$ to $10^{-4}$). The product $f_i P_i$ is differentiable with respect to the router parameters via $P_i$.

**Capacity factor** — each expert has a maximum token capacity $C = \text{CapacityFactor} \times \frac{\text{tokens\_per\_batch}}{N}$. Tokens routed to a full expert are dropped. The capacity factor trades memory for load balancing tolerance; a value of 1.25 is common.

**Expert utilization and load imbalance** are measured by the coefficient of variation of $\{f_i\}$; a well-balanced MoE has $f_i \approx 1/N$ for all $i$.

```chart
{
  "type": "bar",
  "xAxis": "expert_id",
  "data": [
    {"expert_id": "Exp 1", "unbalanced": 85, "balanced": 12.5},
    {"expert_id": "Exp 2", "unbalanced": 10, "balanced": 12.5},
    {"expert_id": "Exp 3", "unbalanced": 3, "balanced": 12.5},
    {"expert_id": "Exp 4", "unbalanced": 1, "balanced": 12.5},
    {"expert_id": "Exp 5", "unbalanced": 1, "balanced": 12.5},
    {"expert_id": "Exp 6", "unbalanced": 0, "balanced": 12.5},
    {"expert_id": "Exp 7", "unbalanced": 0, "balanced": 12.5},
    {"expert_id": "Exp 8", "unbalanced": 0, "balanced": 12.5}
  ],
  "lines": [
    {"dataKey": "unbalanced", "stroke": "#ef4444", "name": "Without Aux Loss (%)"},
    {"dataKey": "balanced", "stroke": "#10b981", "name": "With Aux Loss (%)"}
  ]
}
```
*Without an auxiliary load-balancing loss, the router typically collapses, sending almost all tokens to a single "winner-take-all" expert, rendering the others useless.*


## Training Paradigm

MoE training is standard autoregressive next-token prediction (same objective as a dense [[llm]]) with the added auxiliary load balancing loss:

$$\mathcal{L}_{\text{total}} = \mathcal{L}_{\text{LM}} + \mathcal{L}_{\text{aux}}$$

The key challenges are:

- **Router initialization**: the router must not collapse early in training. Uniform or small-noise initialization of $W_g$ helps.
- **Expert dropout**: randomly dropping expert outputs during training acts as regularization and prevents over-reliance on any single expert.
- **Expert parallelism**: in distributed training, different experts are placed on different devices. The all-to-all communication required to dispatch tokens to their assigned experts is the main overhead vs. dense training.
- **Gradient flow**: gradients flow back through the gating weights only for the top-$k$ selected experts, creating sparsity in the gradient graph. This makes MoE training less stable than dense models and requires careful tuning of learning rates and warmup.

## Key Properties & Capabilities

- **Parameter efficiency**: same quality as a dense model at a fraction of the per-token compute cost, or higher quality at the same compute budget.
- **Expert specialization**: experts learn to handle different subsets of the input distribution — different languages, syntactic structures, or topic domains — though this specialization is partial and emergent, not designed.
- **Scaling**: MoE scales the effective model capacity without scaling FLOPs proportionally, enabling a different regime of the scaling law.
- **Memory cost**: all $N$ experts must reside in memory even though only $k$ are used per token. The memory footprint grows with $N$, which is the primary deployment challenge.
- **Token dropping**: tokens dispatched to over-capacity experts are silently dropped, introducing a potential accuracy degradation that is hard to detect.

## Trade-offs vs Other Types

| Dimension | Dense LLM | MoE LLM | SLM |
|---|---|---|---|
| Total parameters | N | N × experts | Small |
| Active params per token | N | N / experts × k | Small |
| FLOPs per token | High | Low | Low |
| Memory footprint | N | N × experts | Small |
| Training stability | High | Moderate | High |
| Expert load balance | N/A | Requires tuning | N/A |
| Best for | Quality | Quality/cost | Edge |

## Python Usage Pattern

```python
import torch
import torch.nn as nn
import torch.nn.functional as F


class TopKRouter(nn.Module):
    def __init__(self, d_model: int, num_experts: int, top_k: int):
        super().__init__()
        self.gate = nn.Linear(d_model, num_experts, bias=False)
        self.num_experts = num_experts
        self.top_k = top_k

    def forward(self, x: torch.Tensor):
        logits = self.gate(x)  # (B, T, N)
        top_k_logits, top_k_indices = logits.topk(self.top_k, dim=-1)
        zeros = torch.full_like(logits, float("-inf"))
        sparse_logits = zeros.scatter(-1, top_k_indices, top_k_logits)
        router_probs = F.softmax(sparse_logits, dim=-1)

        # Auxiliary load-balancing loss
        f = (top_k_indices.unsqueeze(-1) == torch.arange(
            self.num_experts, device=x.device
        )).float().mean(dim=(0, 1))  # fraction per expert
        p = F.softmax(logits, dim=-1).mean(dim=(0, 1))
        aux_loss = self.num_experts * (f * p).sum()

        return router_probs, top_k_indices, aux_loss


class MoELayer(nn.Module):
    def __init__(self, d_model: int, d_ff: int, num_experts: int, top_k: int = 2):
        super().__init__()
        self.router = TopKRouter(d_model, num_experts, top_k)
        self.experts = nn.ModuleList([
            nn.Sequential(nn.Linear(d_model, d_ff), nn.GELU(), nn.Linear(d_ff, d_model))
            for _ in range(num_experts)
        ])
        self.top_k = top_k

    def forward(self, x: torch.Tensor):
        B, T, D = x.shape
        x_flat = x.view(B * T, D)
        router_probs, indices, aux_loss = self.router(x_flat.unsqueeze(0))
        router_probs = router_probs.squeeze(0)
        indices = indices.squeeze(0)

        output = torch.zeros_like(x_flat)
        for k in range(self.top_k):
            expert_idx = indices[:, k]  # (B*T,)
            for i, expert in enumerate(self.experts):
                mask = (expert_idx == i)
                if mask.any():
                    output[mask] += (
                        router_probs[mask, expert_idx[mask]].unsqueeze(-1)
                        * expert(x_flat[mask])
                    )
        return output.view(B, T, D), aux_loss
```

## Limitations

- **Memory vs. compute asymmetry**: the full expert bank must fit in device memory even though each token uses only $k/N$ of it. Serving a 200B MoE model requires infrastructure designed for 200B parameters, even though each token consumes only ~20B-equivalent FLOPs.
- **Expert routing instability**: early in training, the router can collapse to a few experts. Recovery from collapse is slow and unreliable; prevention requires careful hyperparameter tuning.
- **Communication overhead**: expert parallelism requires all-to-all token dispatch across devices, adding communication latency that reduces the effective throughput advantage.
- **Token dropping and inconsistency**: dropped tokens receive no processing from the dropped expert, introducing silent errors that are hard to diagnose from the loss curve alone.
- **[[fine-tuning]] difficulty**: fine-tuning MoE models on small datasets is harder than dense models because the sparse routing creates uneven gradient updates across experts.

## Related Topics

[[llm]] — dense transformers that MoE extends  
[[slm]] — MoE can also be applied to small models to extend their effective capacity  
[[neural-scaling-laws]] — MoE shifts the parameter-compute trade-off curve  
[[mechanistic-interpretability]] — studying expert specialization is an active area of interpretability research
