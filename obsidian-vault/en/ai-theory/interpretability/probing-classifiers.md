---
title: "Probing Classifiers"
category: "AI Theory"
order: 4
lang: "en"
slug: "probing-classifiers"
growth: "seedling"
---

# Probing Classifiers

**Probing classifiers** (or **probes**) are lightweight models trained on top of frozen neural network representations to test whether specific information is linearly decodable from internal activations. If a linear probe achieves high accuracy predicting syntactic structure from layer $l$'s representations, we conclude that layer $l$ encodes syntactic information.

## Setup

Given a pretrained model $f$ and a property of interest $y$ (e.g., part-of-speech tag, sentence sentiment, number agreement), a probe $g_\phi$ is trained on:

$$
\mathcal{L}_\text{probe} = \mathbb{E}_{(x,y)\sim\mathcal{D}}\!\left[\ell(g_\phi(f_l(x)), y)\right],
$$

where $f_l(x)$ is the activation at layer $l$ for input $x$, and $\ell$ is cross-[[shannon-entropy|entropy]]. $f$ is frozen; only $g_\phi$ is trained.

## Linear vs Nonlinear Probes

**Linear probes** ($g_\phi(z) = Wz + b$) are the standard. Key argument: if a property requires a nonlinear probe to decode, it may be an artifact of the probe's capacity rather than genuine encoding in the representation.

**Nonlinear probes** (MLPs) provide an upper bound on what information is *present* in activations, but their accuracy cannot be attributed to the representational structure — a powerful enough probe could extract anything.

The **probing selectivity** principle: linear probes tell us about the geometry of representation, not just presence.

## Layer-Wise Analysis in BERT

Classic finding (Tenney et al. 2019): different NLP tasks peak at different BERT layers.

```chart
{
  "type": "line",
  "xAxis": "layer",
  "data": [
    {"layer": 0, "pos": 65, "constituency": 48, "ner": 55, "coref": 42},
    {"layer": 2, "layer_label": 2, "pos": 80, "constituency": 60, "ner": 65, "coref": 50},
    {"layer": 4, "pos": 88, "constituency": 70, "ner": 72, "coref": 58},
    {"layer": 6, "pos": 90, "constituency": 76, "ner": 78, "coref": 65},
    {"layer": 8, "pos": 89, "constituency": 80, "ner": 82, "coref": 70},
    {"layer": 10, "pos": 87, "constituency": 79, "ner": 83, "coref": 75},
    {"layer": 12, "pos": 85, "constituency": 77, "ner": 80, "coref": 72}
  ],
  "lines": [
    {"dataKey": "pos", "stroke": "#10b981", "name": "POS tagging"},
    {"dataKey": "constituency", "stroke": "#3b82f6", "name": "Constituency parsing"},
    {"dataKey": "ner", "stroke": "#f59e0b", "name": "NER"},
    {"dataKey": "coref", "stroke": "#8b5cf6", "name": "Coreference"}
  ]
}
```

Shallow layers capture surface features (POS); deeper layers capture semantic/discourse structure (coreference).

## Representational Geometry

Probing reveals *where* information is; it doesn't tell us *how* the model uses it. Two complementary perspectives:

**CKA (Centered Kernel Alignment):** Measures representational similarity between layers or models. Tracks how representations evolve layer-by-layer.

**LEACE (Least-squares Concept Erasure):** A technique to linearly erase a concept from representations, then test whether downstream task performance degrades. This moves from probing (passive) to intervention (active causality).

## Limitations

**The MDL probe** (Voita & Titov 2020): standard probing accuracy is a poor measure of encoding strength because a sufficiently expressive probe can decode random labels at high accuracy. Minimum Description Length probes instead measure how *efficiently* a concept is encoded — shorter codes = stronger encoding.

**Causality gap.** High probe accuracy means information is present in the representation, not that the model uses it for prediction. A layer might encode POS tags as a byproduct without ever relying on them.

**Representation vs computation.** Probing identifies stored properties; activation patching identifies used properties.

## Applications

- **Linguistic structure in LLMs.** Do large models learn syntax? Probing shows yes, implicitly, even without syntactic training signal.
- **Bias detection.** Linear probes on gender/ethnicity reveal how strongly these are encoded, and can guide debiasing interventions.
- **Multitask representations.** Testing which tasks share representations across model components.
- **Representation quality metrics.** Probing accuracy as a proxy for learned feature quality.

## Related Topics

- [[mechanistic-interpretability]] — broader interpretability programme
- [[activation-patching]] — causal complement to probing
- [[sparse-autoencoders]] — monosemantic decomposition of representations
- [[attention-mechanisms|attention]]-head-analysis — head-level probing of [[attention-mechanisms|attention]] patterns
