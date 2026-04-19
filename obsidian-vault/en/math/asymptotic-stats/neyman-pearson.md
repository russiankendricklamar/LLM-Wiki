---
title: "Neyman–Pearson Theory"
category: "Asymptotic Statistics"
order: 12
lang: "en"
slug: "/math/neyman-pearson"
growth: "seedling"
---

# Neyman–Pearson Theory

The **Neyman–Pearson theory** is the mathematical foundation of optimal hypothesis testing, developed by Jerzy Neyman and Egon Pearson in the 1930s. It answers the fundamental question: given a significance level $\alpha$, what is the most powerful test for distinguishing between two hypotheses? The answer—expressed in the **Neyman–Pearson Lemma**—is that the likelihood ratio test is optimal, a profound result that shaped all of frequentist statistical inference.

## Simple vs. Composite Hypotheses

A **hypothesis** is a probabilistic assumption about the data-generating mechanism. Formally, we partition the parameter space $\Theta$ into two disjoint sets: the null hypothesis $H_0: \theta \in \Theta_0$ and the alternative $H_1: \theta \in \Theta_1$.

- **Simple hypotheses**: $H_0: \theta = \theta_0$ and $H_1: \theta = \theta_1$. Both specify a single parameter value; the likelihood ratio is exactly computable.
- **Composite hypotheses**: $\Theta_0$ or $\Theta_1$ contain multiple parameter values. Composite nulls are standard in practice (e.g., $H_0: \mu \leq \mu_0$ in a normal mean test), but the likelihood ratio becomes a function of unknown parameters.

## Size and Power

A test $\phi: \mathcal{X} \to [0, 1]$ (where $\phi(x) \in [0,1]$ is the probability of rejecting $H_0$ given observation $x$) has two critical properties:

- **Type I error (size)**: $\alpha = \Pr_{\theta_0}(\text{reject } H_0) = \mathbb{E}_{\theta_0}[\phi(X)]$. We control this to a pre-specified level, e.g., $\alpha = 0.05$.
- **Type II error (power)**: $\beta = \Pr_{\theta_1}(\text{accept } H_0) = 1 - \mathbb{E}_{\theta_1}[\phi(X)]$. The **power** is $1 - \beta = \mathbb{E}_{\theta_1}[\phi(X)]$, the probability of correctly detecting the alternative.

The Neyman–Pearson framework fixes size at $\alpha$ and maximizes power: find the test that rejects $H_0$ as often as possible under $H_1$ while keeping false rejections rare.

## The Neyman–Pearson Lemma

**Theorem**: For testing $H_0: \theta = \theta_0$ vs. $H_1: \theta = \theta_1$ with size $\alpha$, the most powerful test is the **likelihood ratio test**:

$$\phi^*(x) = \begin{cases} 1 & \text{if } \frac{L(\theta_1; x)}{L(\theta_0; x)} > c \\ \gamma & \text{if } \frac{L(\theta_1; x)}{L(\theta_0; x)} = c \\ 0 & \text{if } \frac{L(\theta_1; x)}{L(\theta_0; x)} < c \end{cases}$$

where $c$ and $\gamma \in [0, 1]$ are chosen so that $\Pr_{\theta_0}(\phi^*(X) = 1) + \gamma \Pr_{\theta_0}(\phi^*(X) = \gamma) = \alpha$.

**Proof sketch**: Suppose another test $\psi$ achieves size $\alpha$ and power $\mathbb{E}_{\theta_1}[\psi(X)] > \mathbb{E}_{\theta_1}[\phi^*(X)]$. Define the set $A = \{x : \phi^*(x) = 1\}$ (the rejection region). By construction of $\phi^*$, 
$$\mathbb{E}[\psi(X) - \phi^*(X)] \leq c \mathbb{E}[\phi^*(X) - \psi(X)]$$
under $\theta_0$. But both have size $\alpha$, so this inequality becomes an equality, contradicting $\mathbb{E}_{\theta_1}[\psi(X)] > \mathbb{E}_{\theta_1}[\phi^*(X)]$ unless $\psi = \phi^*$ almost surely.

## Composite Hypotheses: Uniformly Most Powerful Tests

When hypotheses are composite, we seek a **uniformly most powerful (UMP)** test: a rejection region that maximizes power simultaneously for all parameters under $H_1$.

**Monotone Likelihood Ratio Property**: A family of densities $\{f_\theta\}$ has a monotone likelihood ratio (MLR) in a sufficient statistic $T(X)$ if 
$$\frac{f_{\theta_1}(x)}{f_{\theta_0}(x)} \text{ is monotone increasing in } T(x)$$
for any $\theta_1 > \theta_0$.

**Karlin–Rubin Theorem**: If $\{f_\theta\}$ has monotone likelihood ratio in $T(X)$, then for testing $H_0: \theta \leq \theta_0$ vs. $H_1: \theta > \theta_0$, the test
$$\phi(x) = \begin{cases} 1 & \text{if } T(x) > c \\ 0 & \text{if } T(x) \leq c \end{cases}$$
is UMP at level $\alpha$ (where $c$ satisfies $\Pr_{\theta_0}(T(X) > c) = \alpha$).

## UMP Unbiased Tests and Exponential Families

For [[exponential-families]], the Neyman–Pearson framework extends naturally. An exponential family 
$$f_\theta(x) = h(x) \exp\left\{\eta(\theta) T(x) - A(\theta)\right\}$$
admits UMP unbiased tests for two-sided hypotheses on $\eta(\theta)$. The rejection region is typically constructed by inverting a likelihood ratio that involves both the sufficient statistic $T(X)$ and a nuisance parameter, leading to exact tests (e.g., Fisher's exact test for $2 \times 2$ tables).

## Randomized Tests and Discrete Distributions

For discrete distributions, the boundary case where the likelihood ratio equals the threshold $c$ may have positive probability. The Neyman–Pearson Lemma accommodates this via **randomized tests**: with probability $\gamma$, we randomly reject or accept when the likelihood ratio equals $c$. While randomization seems artificial, it is necessary to achieve exact size $\alpha$—an unrestricted non-randomized test may only achieve size $\leq \alpha$.

## P-values as Test Statistics

A key realization in modern practice: any test statistic $S(X)$ induces a **p-value** 
$$p(X) = \inf\{\alpha : \text{the level-}$\alpha$ test rejects } H_0\}$$
or equivalently, for a likelihood ratio test, $p(X) = \Pr_{\theta_0}(S(X') \geq S(X))$ where the inequality is in the direction favoring $H_1$. The p-value itself becomes the basis for inference: if $p(X) < \alpha$, reject; if $p(X) \geq \alpha$, fail to reject. This converts the Neyman–Pearson recipe into a decision rule parameterized by a single observable.

## Test Efficiency and Power Asymptotics

In the limit as sample size $n \to \infty$, tests' power properties are governed by information-theoretic quantities.

**Bahadur efficiency** measures the rate at which the likelihood ratio diverges under the alternative:
$$\limsup_{n \to \infty} \frac{\log p_n}{\log p^*_n}$$
where $p_n$ is the p-value for a given test and $p^*_n$ is the p-value for the best possible test. The Kullback–Leibler divergence $D_{\text{KL}}(\theta_1 || \theta_0)$ governs this rate.

**Pitman efficiency** compares the sample sizes required to achieve fixed power. Under [[local-asymptotic-normality]], it depends on the Fisher information $I(\theta)$ and is often computed via the limiting power of the test under a local alternative $\theta = \theta_0 + c/\sqrt{n}$.

## Relation to [[Information-Geometry]]

The geometry of hypothesis testing emerges from the Neyman–Pearson framework: the Fisher information metric encodes the "distance" between parameter values in a way that dictates optimal testing. Contraction rates and asymptotic power are intimately tied to the geometry of the model. Tests that achieve the fastest contraction rates relative to the Kullback–Leibler distance to the truth are optimal in a strong sense.

## Connections to [[Sequential-Hypothesis-Testing]] and [[Cramer-Rao-Bound]]

The [[Cramer-Rao-Bound]] provides a lower bound on the variance of any unbiased estimator; dually, it sets a lower bound on the information content needed to distinguish hypotheses. Sequential testing generalizes Neyman–Pearson theory to stopping times, allowing the sample size itself to be random while preserving size and power guarantees—Wald's SPRT is the canonical example.

## Limitations and Extensions

Classical Neyman–Pearson theory assumes:
- Exact knowledge of the null distribution.
- A clear specification of the alternative.
- Independence of observations.

Modern extensions address:
- **Composite nulls** with nuisance parameters via conditional likelihood or profile methods.
- **High-dimensional regimes** where $p \gg n$, where [[empirical-processes]] and [[local-asymptotic-normality]] become central.
- **Non-regular models** (e.g., change-point detection, mixture models) where classical asymptotics break down.

Despite its age, the Neyman–Pearson framework remains foundational: every statistical test is evaluated relative to the ideal of maximizing power at fixed size, and the likelihood ratio principle it enshrines is universal in scientific inference.
