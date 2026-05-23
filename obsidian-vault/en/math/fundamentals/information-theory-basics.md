---
title: "Information Theory Basics"
category: "Math Fundamentals"
order: 8
lang: "en"
slug: "information-theory-basics"
---

# Information Theory Basics: Measuring Surprise

Information theory, founded by Claude Shannon, provides the mathematical framework for quantifying communication, compression, and the "uncertainty" in data. In AI, it is the language we use to define loss functions like Cross-[[shannon-entropy|Entropy]].

## 1. Entropy: The Measure of Uncertainty

**Entropy ($H$)** measures the average amount of "surprise" or uncertainty in a random variable $X$.
$$H(X) = -\sum_{i} p(x_i) \log p(x_i)$$
- If an event is certain ($p=1$), entropy is 0.
- If all events are equally likely (uniform distribution), entropy is maximized.

**Intuition**: Entropy is the minimum average number of bits needed to encode outcomes from a distribution.

## 2. KL Divergence: Comparing Distributions

**Kullback-Leibler (KL) Divergence** measures how one probability distribution $q$ differs from a reference distribution $p$.
$$D_{KL}(p \| q) = \sum_{i} p(x_i) \log \frac{p(x_i)}{q(x_i)}$$
- It is always $\ge 0$.
- It is **not symmetric**: $D_{KL}(p \| q) \neq D_{KL}(q \| p)$.
- In ML, $p$ is usually the "true" data distribution, and $q$ is our model's approximation. We want to minimize $D_{KL}(p \| q)$.

## 3. Cross-Entropy: The ML Loss Function

**Cross-Entropy ($H(p, q)$)** measures the total "cost" of using distribution $q$ to encode events that actually come from $p$.
$$H(p, q) = H(p) + D_{KL}(p \| q)$$
In most ML tasks, $H(p)$ (the entropy of the real world) is constant, so minimizing Cross-Entropy is mathematically identical to minimizing KL Divergence.

**Binary Cross-Entropy (BCE)**:
$$L = -[y \log \hat{y} + (1-y) \log (1-\hat{y})]$$
Where $y$ is the true label (0 or 1) and $\hat{y}$ is the predicted probability.

## 4. Mutual Information

**Mutual Information ($I(X; Y)$)** measures how much knowing one variable reduces uncertainty about another.
$$I(X; Y) = H(X) - H(X|Y)$$
- If $X$ and $Y$ are independent, $I(X; Y) = 0$.
- In AI, we use this to ensure that embeddings capture meaningful features about the input data.

## 5. Summary of Terms

| Term | Meaning | Formula (Simple) |
| :--- | :--- | :--- |
| **Entropy** | Surprise in $p$ | $-p \log p$ |
| **KL Divergence** | "Distance" from $p$ to $q$ | $p \log(p/q)$ |
| **Cross-Entropy** | Total cost (bits) | $-p \log q$ |

## Related Topics
[[probability-distributions|Probability Distributions]] — The inputs to these formulas  
[[maximum-entropy|Maximum Entropy]] — A principle for model selection  
[[variational-autoencoders|VAEs]] — Using KL Divergence for latent space regularizing
