---
title: "Mechanistic Interpretability"
category: "AI Theory"
order: 4
lang: "en"
slug: "mechanistic-interpretability"
aliases:
  - MI
  - Circuits
---

# Mechanistic Interpretability

Mechanistic Interpretability (MI) aims to reverse-engineer the internal computations of neural networks into human-understandable algorithms. It treats a model as "compiled code" that needs to be decompiled back into its source logic.

## Mathematical Core

1. **Residual Stream:** The $d$-dimensional space where information is stored and modified by attention and MLP blocks.
2. **Superposition Hypothesis:** The idea that models pack more features than they have dimensions by using near-orthogonal directions. This causes **polysemanticity** (neurons firing for multiple unrelated concepts).
3. **Induction Heads:** Specific circuits that enable in-context learning.

## Key Methodology

- **Circuit Analysis:** Identifying subgraphs of neurons and attention heads that implement specific tasks (e.g., indirect object identification).
- **Activation Patching:** Swapping activations between different runs to establish causal links between components and outputs.
- **Logit Lens:** Projecting internal states back into the vocabulary space to see how predictions evolve layer by layer.
- **Sparse Autoencoders (SAE):** Decomposing polysemantic activations into clean, monosemanic features.

## Importance for AI Safety

MI serves as a "lie detector" for AI:
1. **Detecting Deception:** Identifying deceptive intent internally before it manifests in output.
2. **Alignment Verification:** Providing mathematical proof that a model is using the intended reasoning.
3. **Model Editing (ROME/MEMIT):** Surgically updating factual beliefs or removing harmful behaviors without full retraining.

## Implementation Snippet
```python
from transformer_lens import HookedTransformer
model = HookedTransformer.from_pretrained("gpt2-small")

# Logit Lens
logits, cache = model.run_with_cache("The capital of France is")
resid = cache["blocks.11.hook_resid_post"]
top_token = model.unembed(model.ln_final(resid))[0, -1].argmax()
print(model.to_string(top_token)) # ' Paris'
```

## Related Topics
[[sparse-autoencoders|SAE]] | [[transformer-architecture|Transformer Architecture]] | [[constitutional-ai|Constitutional AI]]
