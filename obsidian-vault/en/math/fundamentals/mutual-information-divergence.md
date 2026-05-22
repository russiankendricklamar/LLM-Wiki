---
title: "Mutual Information & Divergence"
category: "Math Foundations"
order: 69
lang: "en"
slug: "mutual-information-divergence"
---

# Mutual Information & Divergence

Information theory provides rigorous metrics to quantify uncertainty, dependency, and the difference between probability distributions.

## Kullback-Leibler (KL) Divergence
KL Divergence measures how much a probability distribution $P$ differs from a reference distribution $Q$:
$$ D_{KL}(P \| Q) = \sum_{x} P(x) \log \frac{P(x)}{Q(x)} = \mathbb{E}_{P}\left[ \log \frac{P(X)}{Q(X)} \right] $$
For continuous variables, the sum becomes an integral.
- **Asymmetry:** $D_{KL}(P \| Q) \neq D_{KL}(Q \| P)$. It is not a true metric (distance).
- **Gibbs' Inequality:** $D_{KL}(P \| Q) \ge 0$, with equality if and only if $P = Q$ almost everywhere.
KL divergence is the driving force behind Variational Inference and the [[em-algorithm|Evidence Lower Bound (ELBO)]].

## Mutual Information
Mutual Information (MI) quantifies the amount of information obtained about one random variable by observing another. It measures non-linear dependence, unlike correlation.
$$ I(X; Y) = \sum_{x, y} P(x, y) \log \frac{P(x, y)}{P(x)P(y)} $$
This can be expressed using KL Divergence or Entropy ($H$):
$$ I(X; Y) = D_{KL}(P(X,Y) \| P(X)P(Y)) $$
$$ I(X; Y) = H(X) - H(X|Y) = H(Y) - H(Y|X) $$
MI is symmetric: $I(X; Y) = I(Y; X)$.

## Data Processing Inequality
A fundamental result in information theory. If random variables form a Markov chain $X \to Y \to Z$ (meaning $Z$ only depends on $X$ through $Y$), then:
$$ I(X; Z) \le I(X; Y) $$
**Interpretation:** Post-processing cannot increase information. No matter how you manipulate $Y$ to get $Z$, the information $Z$ contains about the original signal $X$ can never exceed the information $Y$ contained about $X$. This places fundamental bounds on representation learning.
