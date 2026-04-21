---
title: "Curriculum Learning"
category: "LLM Infrastructure"
order: 14
lang: "en"
slug: "curriculum-learning"
---

# Curriculum Learning

**Curriculum Learning** is a training strategy inspired by the way humans learn: starting with simple concepts and gradually increasing the difficulty of the material. In Machine Learning, it involves ordering the training data such that the model sees "easy" examples first and "hard" ones later.

## Why Ordering Matters

In standard training, data is shuffled randomly (i.i.d. assumption). However, for complex tasks like reasoning or coding, showing a model a high-dimensional, noisy example early on can lead to unstable gradients and poor local minima. 

A curriculum helps by:
1.  **Faster Convergence**: The model finds the basic structure of the task quickly.
2.  **Better Generalization**: By learning simple features first, the model builds a more robust foundation.

## Mathematical Formulation

Let $\mathcal{D}$ be the training set. A curriculum is a sequence of distributions $\mathcal{D}_1, \mathcal{D}_2, \dots, \mathcal{D}_T$ such that:
- Early distributions $\mathcal{D}_1$ focus on examples with low **complexity** (e.g., shorter sequences, common words).
- Later distributions converge to the full data distribution $\mathcal{D}$.

The "Hardness" of an example $x$ can be defined using:
- **Heuristics**: Length of the text, vocabulary rarity.
- **Model-based**: Loss of a smaller "proxy" model (examples with high loss are hard).
- **Competence Scaling**: A function $c(t)$ that controls the proportion of hard examples allowed at time $t$.

## Types of Curricula

### 1. Predefined Curriculum
A human expert defines the difficulty (e.g., in math: Arithmetic $\to$ Algebra $\to$ Calculus).

### 2. Automated Curriculum Learning (ACL)
The model (or a "teacher" model) dynamically monitors the training progress and selects data that is "just right" — not too easy to be boring, not too hard to be confusing (the **Zone of Proximal Development**).

## Visualization: Learning Dynamics

```chart
{
  "type": "line",
  "xAxis": "step",
  "data": [
    {"step": 0, "random": 10.0, "curriculum": 10.0},
    {"step": 1000, "random": 8.0, "curriculum": 6.5},
    {"step": 2000, "random": 6.8, "curriculum": 4.2},
    {"step": 3000, "random": 5.5, "curriculum": 3.8},
    {"step": 5000, "random": 4.1, "curriculum": 3.5}
  ],
  "lines": [
    {"dataKey": "random", "stroke": "#ef4444", "name": "Random Shuffling"},
    {"dataKey": "curriculum", "stroke": "#3b82f6", "name": "Curriculum Learning"}
  ]
}
```
*Curriculum learning often leads to a faster initial drop in loss and can reach a lower final error by avoiding "noisy" gradients in the early stages of training.*

## Applications in LLMs

- **Reasoning**: Training on 1-step problems before moving to 5-step chains.
- **Coding**: Learning Python syntax and basic loops before complex system design.
- **Context Length**: Training on 2k tokens, then 8k, then 32k (e.g., Llama 2 Long-context [[fine-tuning]]).

## Related Topics

[[training-dynamics]] — what happens during the process  
[[fine-tuning]] — where curricula are most often applied  
[[neural-scaling-laws]] — how data quality/order affects scaling
---
