---
title: "Superposition & Linear Representation"
category: "AI Theory"
order: 6
lang: "en"
slug: "superposition"
---

# Superposition and Linear Representation

## What Is It

The **Linear Representation Hypothesis** suggests that neural networks represent concepts as directions in a high-dimensional vector space. For example, there might be a "Paris" direction and a "Capital City" direction in an [[llm]]'s activation space.

**Superposition** is the phenomenon where a model stores **more features than it has dimensions** by taking advantage of the fact that features are sparse (they don't all appear at once). This allows a model with, say, 512 dimensions to store thousands of distinct concepts.

## The Toy Model of Superposition

Anthropic researchers (Elhage et al., 2022) demonstrated this using a toy model. If you have $n$ dimensions and $m$ features (where $m > n$), and the features are sparse (probability of any feature being active is $p \ll 1$), the model can represent these features as non-orthogonal vectors.

When the features are sparse, the interference between them (the "noise" created by non-orthogonality) is low enough that the model can still distinguish them.

## Mathematical Framework

Consider a hidden state $h \in \mathbb{R}^n$ and features $f_i \in \mathbb{R}$ with directions $w_i \in \mathbb{R}^n$:

$$h = \sum_i f_i w_i$$

If $w_i$ were orthogonal ($w_i \cdot w_j = \delta_{ij}$), the model could store exactly $n$ features. In superposition, the model chooses $w_i$ such that the interference $w_i \cdot w_j$ is minimized for all $i, j$, often forming geometric structures like **polytopes** (e.g., a pentagon in 2D space can represent 5 features better than any other 2D arrangement).

## Polysemanticity

Because of superposition, individual neurons in a network often become **polysemantic**—they fire for multiple unrelated concepts (e.g., a single neuron might fire for "cats" and "prime numbers"). This is why interpreting raw neural activations is so difficult.

**Sparse Autoencoders (SAE)** are used to "disentangle" these features by projecting the activations into a much higher-dimensional space where features are no longer in superposition.

## Visualizing Dimension vs. Features

```chart
{
  "type": "line",
  "xAxis": "sparsity",
  "data": [
    {"sparsity": 0.0, "features_per_dim": 1.0},
    {"sparsity": 0.5, "features_per_dim": 1.4},
    {"sparsity": 0.8, "features_per_dim": 2.5},
    {"sparsity": 0.9, "features_per_dim": 5.0},
    {"sparsity": 0.99, "features_per_dim": 20.0}
  ],
  "lines": [
    {"dataKey": "features_per_dim", "stroke": "#8b5cf6", "name": "Effective Capacity (m/n)"}
  ]
}
```

As the features become sparser (moving right on the X-axis), the model's ability to store them in a fixed number of dimensions increases exponentially.

## Implications for AI Safety

Understanding superposition is critical for:
1. **Model Steerability**: If we know the exact direction for a concept, we can "nudge" the model to be more helpful or safer.
2. **Detecting Deception**: We can monitor for "deceptive" directions that might not be visible through the model's final output.
3. **Uncovering Hidden Capabilities**: Finding circuits that the model learned but hasn't explicitly shown.

## Related Topics

[[mechanistic-interpretability]] — the field studying these structures  
[[sparse-autoencoders]] — the tool for solving superposition  
[[activation-patching]] — how we test if a direction actually matters
