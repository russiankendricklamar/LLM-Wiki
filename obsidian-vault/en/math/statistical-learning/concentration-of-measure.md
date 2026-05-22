---
title: Concentration of Measure
category: Statistical Learning
order: 62
lang: en
slug: concentration-of-measure
---

# Concentration of Measure

## The Phenomenon
Concentration of measure studies how functions of many independent random variables tend to take values close to their expectation. 

## McDiarmid's Inequality
Let $X_1, \dots, X_n$ be independent and $f: \mathcal{X}^n \to \mathbb{R}$ satisfy the bounded differences property:
$$ \sup_{x, x_i'} |f(x_1, \dots, x_i, \dots, x_n) - f(x_1, \dots, x_i', \dots, x_n)| \le c_i $$
Then for any $t > 0$:
$$ \mathbb{P}(|f(X) - \mathbb{E}f(X)| \ge t) \le 2 \exp\left(-\frac{2t^2}{\sum_{i=1}^n c_i^2}\right) $$

## Talagrand's Concentration Inequality
Talagrand established concentration for empirical processes. If $Z = \sup_{f \in \mathcal{F}} \sum_{i=1}^n f(X_i)$, where $\mathcal{F}$ is a class of bounded functions, then $Z$ concentrates around its mean $\mathbb{E}Z$.

## Rademacher Complexity and Generalization
The empirical Rademacher complexity of a hypothesis class $\mathcal{H}$ on a sample $S$ is:
$$ \hat{\mathcal{R}}_S(\mathcal{H}) = \mathbb{E}_\sigma \left[ \sup_{h \in \mathcal{H}} \frac{1}{n} \sum_{i=1}^n \sigma_i h(x_i) \right] $$
where $\sigma_i$ are independent Rademacher variables. By McDiarmid's inequality, with probability $1 - \delta$, the expected error $L(h)$ is bounded by the empirical error $\hat{L}(h)$ as:
$$ L(h) \le \hat{L}(h) + 2\hat{\mathcal{R}}_S(\mathcal{H}) + 3\sqrt{\frac{\log(2/\delta)}{2n}} $$

