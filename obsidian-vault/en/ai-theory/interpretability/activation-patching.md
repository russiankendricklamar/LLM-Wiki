---
title: "Activation Patching"
category: "AI Theory"
order: 3
lang: "en"
slug: "activation-patching"
growth: "seedling"
---

# Activation Patching

**Activation patching** is the primary experimental technique in mechanistic interpretability for causally localising computations in neural networks. By replacing the activations of a specific component with values from a different forward pass, we can determine whether that component is causally responsible for a particular behaviour.

## The Clean/Corrupted Paradigm

A patching experiment uses two inputs:

- **Clean input** $x^*$: produces the correct behaviour (e.g., the model names "Mary" given "John and Mary went to the store. John gave a book to ___")
- **Corrupted input** $x$: produces wrong behaviour (e.g., a scrambled version where the model can't identify the indirect object)

We run both forward passes and then **patch** activations from the clean run into the corrupted run at specific positions and layers, measuring how much the output recovers toward the clean answer.

## Formalisation

Let $a_l^i(x)$ be the activation at layer $l$, position $i$, for input $x$. Define:

$$
\Delta_{\text{patch}}(l, i) = \mathbb{E}\!\left[\text{logit}(y^*; x \text{ with } a_l^i \leftarrow a_l^i(x^*))\right] - \mathbb{E}\!\left[\text{logit}(y^*; x)\right],
$$

where $y^*$ is the correct output token. A large $\Delta_{\text{patch}}(l,i)$ means layer $l$, position $i$ is critical for the task.

## Path Patching vs Activation Patching

**Activation patching** patches a single site (layer + position) and re-runs everything downstream. It identifies *where* information is stored.

**Path patching** patches a specific edge (output of component $A$ flowing into input of component $B$), holding all other inputs to $B$ fixed. It identifies *how* information flows — more precise but exponentially many paths to test.

## The IOI Task

The **Indirect Object Identification (IOI)** task (Wang et al. 2022) is the canonical patching benchmark. Given "John and Mary went to the store. John gave a book to ___", the correct answer is "Mary".

Patching experiments revealed a circuit of ~28 [[attention-mechanisms|attention]] heads responsible for the task:
- **Duplicate Token Heads** (layers 0–3): detect repeated names
- **S-Inhibition Heads** (layers 7–10): suppress the subject name
- **Name Mover Heads** (layers 9–10): copy the indirect object to the output

```chart
{
  "type": "bar",
  "xAxis": "layer",
  "data": [
    {"layer": "0-3", "effect": 0.8, "role": "Duplicate detection"},
    {"layer": "4-6", "effect": 0.3, "role": "Background"},
    {"layer": "7-10", "effect": 1.2, "role": "S-inhibition"},
    {"layer": "9-10", "effect": 1.8, "role": "Name mover"},
    {"layer": "11", "effect": 0.4, "role": "Background"}
  ],
  "bars": [
    {"dataKey": "effect", "fill": "#10b981", "name": "Patch effect (logit diff)"}
  ]
}
```

## Factual Recall Patching

Meng et al. (ROME, 2022) used activation patching to localise where GPT models store factual associations. Patching experiments on "The Eiffel Tower is in ___" revealed that early [[transformer-architecture|MLP]] layers (layers 5–8 in GPT-2-XL) are the primary storage site — not [[attention-mechanisms|attention]] heads. This motivated the ROME/MEMIT model editing approach.

## Limitations

**Correlation ≠ causation.** High patch effect means the component *mediates* the computation, not necessarily that it *computes* the key transformation.

**Symmetry assumption.** Clean→corrupted patching assumes the corrupted context doesn't interfere with the clean activations. Violations (e.g., very different token lengths) confound results.

**Nonlinearity.** Patching is a linear intervention in activation space; interactions between components are missed.

**Combinatorial explosion.** Testing all pairs of components is $O(n^2)$ in depth × width.

## Related Topics

- [[mechanistic-interpretability]] — the broader programme
- [[circuit-discovery]] — automated methods for finding circuits
- attention-head-analysis — anatomy of attention head roles
- [[transformer-architecture]] — architecture being analysed
