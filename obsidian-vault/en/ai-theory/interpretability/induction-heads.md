---
title: "Induction Heads"
category: "AI Theory"
order: 7
lang: "en"
slug: "induction-heads"
---

# Induction Heads

Induction heads are a specific type of circuit found in Transformers that are responsible for the model's ability to perform **In-Context Learning (ICL)**. Discovered by Anthropic researchers (Olsson et al., 2022), they represent one of the most successful examples of **mechanistic interpretability**.

## What Is It

An induction head is a circuit that implements a simple "copy-paste" logic. If the model sees a sequence like `[A][B] ... [A]`, the induction head predicts that the next token should be `[B]`. 

Specifically, an induction head:
1.  **Searches** for previous occurrences of the current token.
2.  **Identifies** the token that followed it in the past.
3.  **Increases** the probability of that subsequent token.

## The Two-Layer Mechanism

Induction heads typically require at least **two layers** to function:

### Layer 1: Previous Token Head
A head in the first layer attends to the token immediately preceding the current one. It essentially "labels" the current position with information about the previous token.

### Layer 2: Induction Head
A head in the second layer uses the information from Layer 1 to look back at earlier instances of the current token and see what came after them.

## Mathematical Formulation

Consider the [[attention-mechanisms|Attention]] mechanism:
$$\text{Attn}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V$$

In an induction head:
- The **Query (Q)** represents the current token.
- The **Key (K)** represents the *previous* token at some earlier position.
- The **Value (V)** carries the identity of the token at that earlier position.

The circuit is completed when the attention score is high for positions where the token at $t-1$ matches the current token.

## Phase Transition in Training

One of the most striking findings is that induction heads do not appear gradually. Instead, they form during a sudden **phase transition** early in training. At the exact moment these heads form, the model's loss on in-context tasks drops sharply, and its ability to generalize to new patterns emerges.

## Visualization: The "Aha!" Moment

```chart
{
  "type": "line",
  "xAxis": "step",
  "data": [
    {"step": 0, "loss": 10.5, "induction_strength": 0.0},
    {"step": 1000, "loss": 8.2, "induction_strength": 0.05},
    {"step": 2000, "loss": 7.8, "induction_strength": 0.1},
    {"step": 2500, "loss": 5.4, "induction_strength": 0.85},
    {"step": 3000, "loss": 5.1, "induction_strength": 0.95}
  ],
  "lines": [
    {"dataKey": "loss", "stroke": "#ef4444", "name": "Validation Loss"},
    {"dataKey": "induction_strength", "stroke": "#10b981", "name": "Induction Head Strength"}
  ]
}
```
*The sharp drop in loss coincides with the sudden emergence of induction heads, marking the transition from simple memorization to context-aware reasoning.*

## Why It Matters

1.  **Understanding ICL**: Induction heads are the primary engine behind few-shot prompting.
2.  **Model Scaling**: Larger models have more induction heads, making them better at complex pattern matching.
3.  **Circuit Discovery**: They serve as a proof-of-concept that we can find human-understandable algorithms inside "black box" neural networks.

## Related Topics

[[mechanistic-interpretability]] — the field studying these circuits  
[[in-context-learning]] — the capability they enable  
[[transformer-architecture]] — the structural requirement
---
