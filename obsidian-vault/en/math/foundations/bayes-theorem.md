---
title: "Bayes' Theorem"
category: "Foundations"
order: 24
lang: "en"
slug: "bayes-theorem"
---

# Bayes' Theorem

Bayes' theorem is a mathematical formula that describes how to update the probability of a hypothesis as more evidence or information becomes available. It is the logical foundation of **Bayesian Statistics** and is essential for understanding conditional probability.

## The Formula

The theorem relates the **conditional probability** $P(A \mid B)$ to its inverse $P(B \mid A)$:

$$P(A \mid B) = \frac{P(B \mid A) P(A)}{P(B)}$$

Where:
- **$P(A \mid B)$ (Posterior)**: Probability of hypothesis $A$ given evidence $B$.
- **$P(B \mid A)$ (Likelihood)**: Probability of evidence $B$ given hypothesis $A$.
- **$P(A)$ (Prior)**: Our initial belief about $A$ before seeing $B$.
- **$P(B)$ (Evidence)**: Total probability of the evidence, often calculated as $\sum P(B \mid A_i) P(A_i)$.

## Logic and Paradoxes

Bayes' theorem often produces results that are counter-intuitive to human psychology.

### 1. The False Positive Paradox
Suppose a rare disease affects 0.1% of the population. A test is 99% accurate (1% false positive rate). If you test positive, what is the chance you have the disease?
- Common guess: 99%.
- **Bayesian result**: ~9%. 
The probability is low because the "prior" (disease rarity) is so small that a 1% false positive rate from the 99.9% healthy people produces many more positive results than the real cases.

### 2. The Monty Hall Paradox
In a game show, there are 3 doors. Behind one is a car, others have goats. You pick Door 1. The host (who knows what's behind) opens Door 3 to reveal a goat. Should you switch to Door 2?
- **Bayesian Logic**: Yes. Your initial choice had 1/3 chance. The remaining 2/3 probability "collapsed" onto Door 2 when the host eliminated Door 3. Switching doubles your odds.

## Why It Matters for AI

1.  **Bayesian Networks**: Representing complex dependencies between variables.
2.  **Inference serving**: Predicting the most likely intent of a user given their past queries.
3.  **Active Learning**: Deciding which new data point would most update the model's "beliefs" (posterior).

## Visualization: Probability Update

```chart
{
  "type": "bar",
  "xAxis": "state",
  "data": [
    {"state": "Prior Belief", "val": 10},
    {"state": "Strong Evidence", "val": 85},
    {"state": "New Posterior", "val": 78}
  ],
  "lines": [
    {"dataKey": "val", "stroke": "#10b981", "name": "Probability (%)"}
  ]
}
```
*A strong prior belief (red) requires very strong evidence (yellow) to be shifted into a new posterior (green). Bayes' theorem provides the exact mathematical rule for this shift.*

## Related Topics

[[bayesian-inference]] — the statistical application  
[[total-probability-variance]] — used to calculate the denominator $P(B)$  
[[naive-bayes]] — classifier based on this theorem
---
