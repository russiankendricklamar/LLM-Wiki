---
title: "Bayes' Theorem"
category: "Fundamentals"
order: 5
lang: "en"
slug: "bayes-theorem"
aliases:
  - Bayesian Inference
---

# Bayes' Theorem

Bayes' Theorem is a fundamental principle of probability theory that describes how to update the probability of a hypothesis as more evidence or information becomes available. It is the logical foundation of Bayesian statistics and modern AI.

## The Formula

$$ P(A|B) = \frac{P(B|A) P(A)}{P(B)} $$

- **$P(A|B)$ (Posterior):** The probability of hypothesis $A$ given evidence $B$.
- **$P(B|A)$ (Likelihood):** The probability of evidence $B$ given hypothesis $A$.
- **$P(A)$ (Prior):** Our initial belief in hypothesis $A$ before seeing the evidence.
- **$P(B)$ (Evidence):** The total probability of observing evidence $B$.

## Applications in AI

1. **Bayesian Inference:** Iteratively updating model weights. Unlike frequentist statistics, the Bayesian approach allows for quantifying **uncertainty** and incorporating prior knowledge.
2. **Naive Bayes Classifier:** A simple yet effective algorithm for spam filtering and text classification.
3. **Bayesian Neural Networks:** Networks where weights are probability distributions rather than point estimates. This helps in uncertainty estimation and prevents overfitting.
4. **Variational Autoencoders (VAE):** Using Bayesian principles to map data into a latent space.

## Logical Pitfalls
Humans often suffer from **Base Rate Fallacy**, ignoring the prior probability. For a rare disease (0.1%) and a 99% accurate test, a positive result only means a ~9% chance of actually having the disease, as false positives among the healthy population vastly outnumber true positives.

## Related Topics
[[variational-inference|Variational Inference]] | [[prm|PRM]] | [[naive-bayes|Naive Bayes]]
