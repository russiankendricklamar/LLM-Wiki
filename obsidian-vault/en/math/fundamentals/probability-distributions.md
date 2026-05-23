---
title: "Probability Distributions Encyclopedia"
category: "Math Fundamentals"
order: 4
lang: "en"
slug: "probability-distributions"
---

# Probability Distributions Encyclopedia: The Shapes of Randomness

In AI and statistics, we model uncertainty using **Probability Distributions**. A distribution tells us how likely different outcomes are. Understanding these "shapes" is crucial for generative models, risk management, and hypothesis testing.

## 1. Discrete Distributions

### Bernoulli Distribution
The simplest distribution: a single trial with two outcomes (Success/Failure, 1/0).
- **Parameters**: $p$ (probability of success)
- **PMF**: $P(X=k) = p^k(1-p)^{1-k}$ for $k \in \{0, 1\}$
- **Use**: Modeling a single coin flip or a binary classification output.

### Binomial & Multinomial
**Binomial**: Sum of $n$ independent Bernoulli trials.
**Multinomial**: Generalization of Binomial to more than two outcomes (e.g., rolling a die or predicting the next word in a vocabulary).

### Poisson Distribution
Models the number of events occurring in a fixed interval of time/space.
- **Parameters**: $\lambda$ (average rate)
- **PMF**: $P(X=k) = \frac{\lambda^k e^{-\lambda}}{k!}$
- **Use**: Traffic flow, request arrivals in a server, or website clicks.

## 2. Continuous Distributions

### Normal (Gaussian) Distribution
The most important distribution in nature due to the Central Limit Theorem.
- **Parameters**: $\mu$ (mean), $\sigma^2$ (variance)
- **PDF**: $f(x) = \frac{1}{\sigma\sqrt{2\pi}} e^{-\frac{1}{2}(\frac{x-\mu}{\sigma})^2}$
- **Use**: Modeling noise, heights, measurement errors, and the foundation of VAEs and Diffusion models.

### Beta Distribution
A distribution over probabilities (the interval $[0, 1]$).
- **Parameters**: $\alpha, \beta$ (shape parameters)
- **Use**: Modeling your *belief* about a probability. It is the conjugate prior for the Bernoulli distribution in Bayesian inference.

## 3. Moments of a Distribution

Moments describe the characteristics of the distribution's shape:
1. **First Moment (Mean)**: The center of mass. $E[X] = \int x f(x) dx$.
2. **Second Moment (Variance)**: The spread. $Var(X) = E[X^2] - (E[X])^2$.
3. **Third Moment (Skewness)**: Asymmetry.
4. **Fourth Moment (Kurtosis)**: "Tailedness" (how likely extreme values are).

## 4. Key Relationships

- **Central Limit Theorem**: The sum of many independent random variables tends toward a Normal distribution, regardless of the original distribution.
- **[[shannon-entropy|Entropy]]**: Distributions like the Uniform (maximum uncertainty) or Normal (maximum entropy for a given variance) play key roles in [[information-theory-basics|Information Theory]].

## Related Topics
[[bayes-theorem|Bayes' Theorem]] — Updating distributions with data  
[[lln-clt|LLN & CLT]] — Why the Normal distribution is everywhere  
[[information-theory-basics|Information Theory]] — Measuring the surprise in a distribution
