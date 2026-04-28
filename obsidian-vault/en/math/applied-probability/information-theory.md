---
title: "Information Theory"
category: "Applied Probability"
order: 25
lang: "en"
slug: "/math/information-theory"
---

# Information Theory

Founded by Claude Shannon in 1948, Information Theory formalizes the concept of information as a measurable quantity of uncertainty. It defines the fundamental limits of data compression and communication over noisy channels.

## Core Concepts

### 1. Shannon Entropy $H(X)$
The measure of uncertainty in a random variable $X$:
$$H(X) = -\sum_{x \in \mathcal{X}} p(x) \log p(x)$$

### 2. Mutual Information $I(X;Y)$
The amount of information that $Y$ reveals about $X$:
$$I(X;Y) = H(X) - H(X|Y) = D_{\text{KL}}(P_{X,Y} \| P_X \otimes P_Y)$$

### 3. Kullback-Leibler (KL) Divergence
A measure of the "distance" or dissimilarity between two distributions $P$ and $Q$:
$$D_{\text{KL}}(P \| Q) = \sum_x p(x) \log \frac{p(x)}{q(x)}$$

## Fundamental Theorems

1. **Source Coding Theorem:** Entropy $H(X)$ is the absolute limit for lossless data compression.
2. **Channel Capacity Theorem:** For any transmission rate $R < C$ (where $C = \max I(X;Y)$), there exists a coding scheme with vanishing error probability.
3. **Data Processing Inequality:** $I(X;Z) \leq I(X;Y)$ for a Markov chain $X \to Y \to Z$. Information can only be lost or preserved during processing, never created.

## Applications in AI

- **Cross-Entropy Loss:** Used in classification tasks to minimize the divergence between ground truth and model predictions.
- **ELBO (Variational Inference):** Using KL-divergence to approximate complex posterior distributions.
- **Information Bottleneck:** A framework for understanding deep learning as a trade-off between compression and predictive power.

## Related Topics
[[shannon-entropy|Shannon Entropy]] | [[variational-inference|Variational Inference]] | [[fisher-information|Fisher Information]]
