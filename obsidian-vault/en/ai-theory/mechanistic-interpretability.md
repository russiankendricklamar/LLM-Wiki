---
title: "Mechanistic Interpretability"
category: "AI Theory"
order: 4
lang: "en"
slug: "mechanistic-interpretability"
---

# Mechanistic Interpretability

## Prerequisites

[[pac-learning]], [[neural-scaling-laws]]

## Overview

Mechanistic interpretability (MI) is the subfield of AI alignment and interpretability that aims to reverse-engineer the internal computations of neural networks into human-readable algorithms. Where behavioural interpretability asks "what does the model do?", MI asks "how does it do it at the level of weights and activations?".

Pioneered by Elhage, Olah, and colleagues at Anthropic and OpenAI (2021–2024), MI draws on concepts from circuits in neuroscience, linear algebra, and information theory. Its practical motivation is safety: if we understand exactly what computation a model is performing, we can verify it is not pursuing hidden objectives, detect deceptive reasoning, and surgically edit incorrect beliefs.

## Mathematical Framework

**Residual stream.** Transformer hidden states are vectors $x \in \mathbb{R}^d$ that live in a shared **residual stream**. Each attention head and MLP layer reads from and writes to this stream via residual connections:

$$x^{(l+1)} = x^{(l)} + \text{Attn}^{(l)}(x^{(l)}) + \text{MLP}^{(l)}(x^{(l)})$$

The residual stream is the fundamental unit of analysis in MI.

**Attention head decomposition.** Each attention head $h$ contributes:

$$\text{Attn}_h(x) = \sum_{\text{pos}} \alpha_h(\text{pos}) (W_{OV}^h x_{\text{pos}})$$

where $W_{OV}^h = W_O^h W_V^h$ is the OV (output-value) circuit and $\alpha_h$ is the attention pattern. This factorisation allows separate analysis of "what to attend to" ($\alpha_h$) and "what to write" ($W_{OV}^h$).

**Superposition hypothesis.** A network with $d$ dimensions can represent $n \gg d$ near-orthogonal "features" by exploiting the fact that random vectors in $\mathbb{R}^d$ are nearly orthogonal with high probability (Johnson-Lindenstrauss). The interference between features is:

$$\text{interference}(i, j) = (\mathbf{f}_i \cdot \mathbf{f}_j)^2 \leq \epsilon$$

Feature $i$ is in superposition if $||\mathbf{f}_i|| < 1$; it shares its neuron basis with other features. This explains why neurons are often polysemantic (respond to multiple unrelated concepts).

**Induction heads.** An induction head is an attention head that implements the algorithm: "if you see token $B$ and the previous token was $A$, and earlier in context you saw $AB$, predict $B$". Formally, layer-$l$ induction head = (previous-token head in layer $l-1$) composed with (key-query product that matches $B_{\text{current}}$ to $B_{\text{previous}}$). This is the main mechanism behind few-shot in-context learning.

## How It Works

**Circuits analysis.** A "circuit" is a minimal subgraph of the computational graph that implements a specific capability. Circuit analysis workflow:
1. Identify a behaviour (e.g., indirect object identification: "Mary gave John a ball; Mary told...")
2. Ablate (zero out) each component and measure performance drop
3. Identify the minimal set of components needed (key-query circuits, OV circuits, MLP layers)
4. Reverse-engineer what each component computes

**Activation patching / causal tracing.** Given a clean input $x$ and a corrupted input $x'$, patch activations from clean to corrupted and measure which positions restore model behaviour. Formally:

$$\text{effect}(l, \text{pos}) = f(x'_{\text{patched at } (l, \text{pos})}) - f(x')$$

Used in the ROME paper (Meng et al. 2022) to locate where factual associations are stored in GPT (mid-layer MLP modules at the subject token).

**Probing classifiers.** Train a linear classifier on internal representations $h^{(l)}$ to predict some property $y$ (syntax, world knowledge, sentiment). If a linear probe achieves high accuracy at layer $l$, that property is linearly represented at that layer.

**Logit lens.** Project the residual stream at each layer $l$ through the final unembedding matrix $W_U$:

$$\text{logit lens}(l) = \text{softmax}(W_U x^{(l)})$$

This shows how the model's token prediction evolves layer by layer.

**Sparse autoencoders as decomposition tools.** Because neurons are polysemantic, SAEs decompose residual stream vectors into monosemantic features. See [[sparse-autoencoders]] for details.

## Python Implementation

```python
# TransformerLens: mechanistic interpretability library
# pip install transformer_lens

import torch
from transformer_lens import HookedTransformer

# Load GPT-2 small with hooks
model = HookedTransformer.from_pretrained("gpt2")
model.train(False)

# --- Logit Lens: residual stream projection at each layer ---
prompt = "The Eiffel Tower is located in the city of"
tokens = model.to_tokens(prompt)

with torch.no_grad():
    logits, cache = model.run_with_cache(tokens)

# Project each layer's residual stream through the unembedding
logit_lens_results = []
for layer in range(model.cfg.n_layers):
    resid = cache[f"blocks.{layer}.hook_resid_post"]
    logits_at_layer = model.unembed(model.ln_final(resid))
    top_token = logits_at_layer[0, -1].argmax()
    logit_lens_results.append(model.to_string(top_token))

print("Logit lens predictions by layer:")
for i, tok in enumerate(logit_lens_results):
    print(f"  Layer {i:2d}: {repr(tok)}")

# --- Activation patching: compare clean vs corrupted ---
clean_prompt = "The Eiffel Tower is in Paris"
corrupt_prompt = "The Colosseum is in Paris"

clean_tokens = model.to_tokens(clean_prompt)
corrupt_tokens = model.to_tokens(corrupt_prompt)

with torch.no_grad():
    clean_logits, clean_cache = model.run_with_cache(clean_tokens)
    corrupt_logits, corrupt_cache = model.run_with_cache(corrupt_tokens)

target_token = model.to_tokens(" Paris", prepend_bos=False)[0, 0]
patch_effects = []

for layer in range(model.cfg.n_layers):
    saved_clean = clean_cache[f"blocks.{layer}.hook_resid_post"].clone()

    def patch_hook(value, hook, clean_act=saved_clean):
        return clean_act

    with torch.no_grad():
        patched_logits = model.run_with_hooks(
            corrupt_tokens,
            fwd_hooks=[(f"blocks.{layer}.hook_resid_post", patch_hook)],
        )

    effect = (
        patched_logits[0, -1, target_token].item()
        - corrupt_logits[0, -1, target_token].item()
    )
    patch_effects.append(effect)

print("\nActivation patching effect (logit diff restored by layer):")
for i, e in enumerate(patch_effects):
    print(f"  Layer {i:2d}: {e:+.3f}")


# --- Linear probing: detect factual properties ---
import torch.nn as nn

class LinearProbe(nn.Module):
    def __init__(self, d_model, n_classes):
        super().__init__()
        self.linear = nn.Linear(d_model, n_classes)

    def forward(self, x):
        return self.linear(x)


def train_probe(activations, labels, n_epochs=100, lr=1e-2):
    """Train a linear probe on layer activations."""
    probe = LinearProbe(activations.shape[-1], labels.max().item() + 1)
    optimizer = torch.optim.Adam(probe.parameters(), lr=lr)
    criterion = nn.CrossEntropyLoss()

    for _ in range(n_epochs):
        optimizer.zero_grad()
        logits = probe(activations)
        loss = criterion(logits, labels)
        loss.backward()
        optimizer.step()

    preds = probe(activations).argmax(dim=-1)
    accuracy = (preds == labels).float().mean().item()
    return probe, accuracy
```

## Key Results & Properties

- **Induction heads:** Appear in all transformers larger than 2 layers; provide the mechanistic explanation for in-context learning (Olsson et al. 2022).
- **Superposition is ubiquitous:** Toy models show networks routinely encode more features than neurons, especially for sparse features (Elhage et al. 2022).
- **ROME:** Factual associations in GPT-style LLMs are stored in specific mid-layer MLP layers and can be surgically edited (Meng et al. 2022).
- **Indirect object identification circuit:** A complete mechanistic account of how GPT-2 solves "Mary gave John a ball; __ told..." — 26 attention heads identified (Wang et al. 2023).
- **Monosemantic features via SAEs:** Anthropic's SAE decomposition of Claude activations reveals interpretable features including concepts, persons, and even "Assistant" identity tokens.

## Limitations

**Scalability.** Manual circuit analysis of GPT-2 (125M parameters) takes months of researcher time. Automated circuit discovery tools exist but are still imprecise.

**Polysemanticity.** Even after SAE decomposition, some features remain polysemantic. The "true" atomic features may not correspond to any clean human concept.

**Functional decomposition ambiguity.** The same function can be implemented by different circuits; MI focuses on what a specific model does, not what it must do.

**Superlinear interactions.** MI tends to focus on linear structure in the residual stream. Nonlinear MLP interactions and attention-MLP coupling are harder to analyse.

**Causal faithfulness.** Activation patching measures correlational influence; it does not guarantee that the patched component causes the behaviour in a counterfactual sense.

## Applications

- **Alignment verification:** Checking that a model reasons about goals in expected ways before deployment.
- **Model editing:** ROME and MEMIT surgically update factual beliefs without full retraining.
- **Adversarial robustness:** Identifying circuits exploited by adversarial examples.
- **Model distillation:** Extracting the essential circuit that performs a task for targeted compression.
- **Neuroscience analogy:** MI provides a computational-level model of what computations brains might perform, inspiring neuroscience hypotheses.

## Related Topics

- [[sparse-autoencoders]] — primary tool for decomposing superimposed features
- [[neural-scaling-laws]] — how mechanistic structure changes with scale
- [[pac-learning]] — theoretical framework for what computations are learnable
