---
title: "Circuit Discovery"
category: "AI Theory"
order: 5
lang: "en"
slug: "circuit-discovery"
growth: "seedling"
---

# Circuit Discovery

**Circuit discovery** is the process of identifying the minimal subgraph of a [[transformer-architecture|transformer]] — a **circuit** — that causally implements a specific capability. The goal is to reduce a full model with billions of parameters to a small, interpretable computational graph that fully explains a given behaviour.

## The Circuits Hypothesis

Olah et al. (2020) proposed that neural networks consist of **features** (directions in activation space corresponding to human-interpretable concepts) connected by **circuits** (subgraphs that implement algorithms). Under this hypothesis, understanding a model reduces to understanding its circuits — analogous to reading assembly code rather than treating the model as a black box.

## [[attention-mechanisms|Attention]] Head Roles

Before finding circuits, individual attention heads must be characterised. Key roles discovered in GPT-2 and similar models:

**Induction heads** (Olsson et al. 2022). Given pattern `[A][B]...[A]`, predict `[B]`. Composed of two heads: a "previous token head" (attends to token at position $-1$) and an "induction head" (attends to the token after the previous occurrence of the current token). Responsible for in-context learning.

**Copy heads.** Attend to specific token positions and copy their values to the output — a simpler, more direct computation.

**Name mover heads.** In the IOI task: attend to the indirect object name and copy it to the output position.

**Negative heads.** Actively suppress specific tokens — an inhibitory role.

## The OV and QK Circuits

Every attention head decomposes into two circuits:

**QK circuit** (what to attend to):
$$
A = \text{softmax}\!\left(\frac{(x W_Q)(x W_K)^\top}{\sqrt{d_k}}\right).
$$

**OV circuit** (what to write given attention pattern):
$$
\text{output} = A \cdot (x W_V) W_O.
$$

The OV circuit is a linear map from attended positions to output residual stream. For copy heads, $W_V W_O \approx I$ (identity — attending means copying). The QK circuit determines *which* position to attend to; the OV circuit determines *what* gets written.

## Circuit Discovery Methodology

**Step 1: Task definition.** Define a clean/corrupted pair and a metric (logit difference between correct and incorrect tokens).

**Step 2: Activation patching.** Identify which components (attention heads, [[transformer-architecture|MLP]] layers, token positions) matter.

**Step 3: Path patching.** Identify which edges (connections between components) matter.

**Step 4: Verification.** Ablate all components *not* in the hypothesised circuit; verify performance is maintained.

## The IOI Circuit

Wang et al. (2022) fully characterised the IOI circuit in GPT-2 Small:

```chart
{
  "type": "bar",
  "xAxis": "head_group",
  "data": [
    {"head_group": "Dup. Token", "contribution": 1.4},
    {"head_group": "Induction", "contribution": 0.6},
    {"head_group": "S-Inhibition", "contribution": 1.8},
    {"head_group": "Name Mover", "contribution": 2.5},
    {"head_group": "Backup NM", "contribution": 0.9},
    {"head_group": "Neg. Name Mover", "contribution": -0.7}
  ],
  "bars": [
    {"dataKey": "contribution", "fill": "#10b981", "name": "Logit diff contribution"}
  ]
}
```

Circuit accounts for >90% of model performance on IOI despite using only 26 of 144 attention heads.

## Automated Circuit Discovery (ACDC)

Manual circuit discovery is slow and expert-intensive. **ACDC** (Conmy et al. 2023) automates it via iterative threshold patching: start with the full computation graph, then greedily remove edges that don't change performance above a threshold $\tau$.

**Edge Attribution Patching (EAP)** uses gradient information to efficiently attribute importance to every edge in $O(\text{model forward passes})$ rather than $O(\text{edges})$.

## Superposition and Polysemanticity

A challenge for circuit discovery: transformer neurons are **polysemantic** — a single neuron activates for multiple unrelated concepts. This is a consequence of **superposition**: networks represent more features than they have dimensions by encoding features as near-orthogonal directions rather than basis vectors.

This makes circuits harder to read — a single neuron participating in a circuit may be implementing multiple features simultaneously.

**Sparse autoencoders (SAEs)** decompose polysemantic neurons into monosemantic features, enabling cleaner circuit analysis.

## Related Topics

- [[mechanistic-interpretability]] — the broader programme
- [[activation-patching]] — primary experimental tool
- [[attention-head-analysis]] — characterising individual heads
- [[sparse-autoencoders]] — decomposing polysemantic neurons
