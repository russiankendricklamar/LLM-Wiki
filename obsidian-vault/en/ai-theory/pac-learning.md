---
title: "PAC Learning & VC Dimension"
category: "AI Theory"
order: 1
lang: "en"
slug: "pac-learning"
---

# PAC Learning & VC Dimension

## Overview

Probably Approximately Correct (PAC) learning, introduced by Leslie Valiant in 1984, is the foundational framework for understanding when and why machine learning algorithms generalise from finite training data to unseen examples. PAC theory answers the question: _how many training examples are sufficient to guarantee that a learned hypothesis is probably approximately correct on new data?_

The framework formalises statistical learning in a distribution-free setting and underpins the theory behind deep learning, SVMs, and decision trees. Its core contribution is translating informal notions of "learning" into precise mathematical guarantees involving error rate $\epsilon$ and confidence $1-\delta$.

## Mathematical Framework

**PAC learning definition.** Let $\mathcal{X}$ be an input space, $\mathcal{Y} = \{0,1\}$ labels, $\mathcal{H}$ a hypothesis class, and $\mathcal{D}$ an unknown distribution over $\mathcal{X} \times \mathcal{Y}$.

A learning algorithm $\mathcal{A}$ PAC-learns $\mathcal{H}$ if for all $\epsilon, \delta \in (0,1)$ and all distributions $\mathcal{D}$, given sample size:

$$m \geq \frac{1}{\epsilon}\left(\ln\frac{|\mathcal{H}|}{\delta}\right)$$

$\mathcal{A}$ returns $h \in \mathcal{H}$ such that with probability at least $1-\delta$:

$$R(h) = \Pr_{(x,y)\sim\mathcal{D}}[h(x) \neq y] \leq \epsilon$$

For infinite hypothesis classes, the bound uses VC dimension instead of $|\mathcal{H}|$.

**VC Dimension.** The VC (Vapnik-Chervonenkis) dimension of $\mathcal{H}$ is:

$$\text{VC}(\mathcal{H}) = \max\{|S| : \Pi_{\mathcal{H}}(S) = 2^{|S|}\}$$

where $\Pi_{\mathcal{H}}(S) = |\{h|_S : h \in \mathcal{H}\}|$ is the number of distinct labellings that $\mathcal{H}$ induces on a set $S$. A set $S$ is **shattered** by $\mathcal{H}$ if $\Pi_{\mathcal{H}}(S) = 2^{|S|}$ (every labelling is achievable).

**Sauer's Lemma.** The growth function is bounded:

$$\Pi_{\mathcal{H}}(m) \leq \sum_{i=0}^{d} \binom{m}{i} \leq \left(\frac{em}{d}\right)^d$$

where $d = \text{VC}(\mathcal{H})$.

**Fundamental Theorem of Statistical Learning.** The following are equivalent:
1. $\mathcal{H}$ is PAC learnable (finite sample complexity)
2. $\text{VC}(\mathcal{H}) < \infty$
3. $\mathcal{H}$ satisfies the Uniform Convergence Property

**Sample complexity with VC dimension:**

$$m \geq \frac{C}{\epsilon^2}\left(d \ln\frac{1}{\epsilon} + \ln\frac{1}{\delta}\right)$$

where $d = \text{VC}(\mathcal{H})$ and $C$ is an absolute constant.

## How It Works

**Generalisation bounds.** The union bound over $\mathcal{H}$ and Hoeffding's inequality give:

$$R(h_S) \leq \hat{R}(h_S) + \sqrt{\frac{\ln|\mathcal{H}| + \ln(1/\delta)}{2m}}$$

where $\hat{R}$ is empirical risk, $h_S$ is the ERM hypothesis. This quantifies the gap between training error and true error.

**Rademacher complexity.** A tighter, data-dependent measure:

$$\mathcal{R}_m(\mathcal{H}) = \mathbb{E}_{S, \sigma}\left[\sup_{h \in \mathcal{H}} \frac{1}{m}\sum_{i=1}^m \sigma_i h(x_i)\right]$$

where $\sigma_i$ are Rademacher variables ($\pm 1$ with equal probability). The generalisation bound:

$$R(h) \leq \hat{R}(h) + 2\mathcal{R}_m(\mathcal{H}) + \sqrt{\frac{\ln(1/\delta)}{2m}}$$

**Bias-variance decomposition.** In PAC language: complex $\mathcal{H}$ (high VC dim) has low bias but high variance; simple $\mathcal{H}$ has high bias but low variance. Optimal $\mathcal{H}$ minimises their sum.

**Agnostic PAC learning.** When no $h \in \mathcal{H}$ achieves zero error (noisy labels or model misspecification), the goal is to find $h$ with error at most $\epsilon$ above the best $h^*$ in $\mathcal{H}$. The sample complexity increases.

**MDL and Occam's Razor.** PAC theory formalises Occam's razor: the hypothesis that achieves low training error with short description (small $\ln|\mathcal{H}|$ or small VC dim) is preferred. This connects to Minimum Description Length and [[kolmogorov-complexity]].

## Python Implementation

```python
import numpy as np
from itertools import combinations

def vc_dim_threshold_classifiers(n_points=10):
    """
    VC dimension of threshold classifiers h_t(x) = 1[x > t] on R is 1.
    VC dimension of interval classifiers h_{a,b}(x) = 1[a < x < b] is 2.
    Verify by checking shattering.
    """
    # Generate candidate points
    points = np.linspace(0, 1, n_points)

    def can_shatter_with_thresholds(subset):
        """Check if threshold classifiers shatter the subset."""
        labellings_achieved = set()
        for threshold in np.linspace(-0.1, 1.1, 1000):
            labelling = tuple((points[i] > threshold) for i in subset)
            labellings_achieved.add(labelling)
        return len(labellings_achieved) == 2 ** len(subset)

    def can_shatter_with_intervals(subset):
        """Check if interval classifiers shatter the subset."""
        labellings_achieved = set()
        for a in np.linspace(-0.1, 1.1, 50):
            for b in np.linspace(a, 1.1, 50):
                labelling = tuple((a < points[i] < b) for i in subset)
                labellings_achieved.add(labelling)
        return len(labellings_achieved) == 2 ** len(subset)

    print("=== Threshold classifiers h_t(x) = 1[x > t] ===")
    for k in range(1, 4):
        shattered = False
        for subset in combinations(range(n_points), k):
            if can_shatter_with_thresholds(subset):
                shattered = True
                break
        print(f"  Can shatter {k} points: {shattered}")
    # VC dim = 1

    print("\n=== Interval classifiers h_{a,b}(x) = 1[a < x < b] ===")
    for k in range(1, 5):
        shattered = False
        for subset in combinations(range(n_points), k):
            if can_shatter_with_intervals(subset):
                shattered = True
                break
        print(f"  Can shatter {k} points: {shattered}")
    # VC dim = 2


def pac_sample_complexity(vc_dim, epsilon, delta):
    """PAC sample complexity upper bound."""
    return (8 / epsilon**2) * (vc_dim * np.log(16 / epsilon) + np.log(2 / delta))


vc_dim_threshold_classifiers()

print("\n=== Sample complexity bounds ===")
for d in [1, 10, 100, 1000]:
    m = pac_sample_complexity(d, epsilon=0.05, delta=0.05)
    print(f"  VC dim={d:4d}: need ~{int(m):,} samples (eps=0.05, delta=0.05)")

# Rademacher complexity for linear classifiers on unit ball
# R_m(H) = E[max over w with ||w||<=1: (1/m) sum sigma_i w.x_i]
#         = E[||mean(sigma_i x_i)||] / m (by Cauchy-Schwarz)
def empirical_rademacher(X, n_trials=1000):
    """Empirical Rademacher complexity for linear classifiers."""
    m = X.shape[0]
    rads = []
    for _ in range(n_trials):
        sigma = np.random.choice([-1, 1], size=m)
        # Max over unit ball: ||mean(sigma * X)||
        rad = np.linalg.norm(sigma @ X) / m
        rads.append(rad)
    return np.mean(rads)

X = np.random.randn(100, 10)
X_norm = X / np.linalg.norm(X, axis=1, keepdims=True)
print(f"\nEmpirical Rademacher complexity: {empirical_rademacher(X_norm):.4f}")
```

## Key Results & Properties

- **Fundamental theorem:** $\mathcal{H}$ is PAC learnable $\iff$ $\text{VC}(\mathcal{H}) < \infty$. This is one of the cleanest results in learning theory.
- **Tight bounds for SVMs:** VC dimension of linear classifiers in $\mathbb{R}^d$ is exactly $d+1$; margin-based SVM bounds are tighter via fat-shattering dimension.
- **Deep learning paradox:** Modern neural networks have VC dimension far exceeding sample size yet generalise well — implying standard PAC bounds are loose; this motivates studying algorithm-dependent bounds, uniform stability, and PAC-Bayes.
- **Lower bounds:** Information-theoretic lower bounds show PAC sample complexity is $\Omega(d/\epsilon)$, so VC dimension is tight up to log factors.

## Limitations

**Worst-case nature.** PAC bounds are distribution-free and worst-case, which makes them loose for structured distributions. Average-case learning theory (Bayesian, PAC-Bayes) gives tighter practical predictions.

**Realizable assumption.** Classic PAC theory requires the target to lie in $\mathcal{H}$. Agnostic PAC is more realistic but requires more samples.

**Deep learning gap.** PAC bounds for overparameterised neural networks are vacuously large in practice. [[neural-scaling-laws]] empirically characterise generalisation beyond classical VC theory.

**Computational complexity.** PAC learnability says nothing about efficiency. Many PAC-learnable classes require exponential time to learn unless $\text{P} = \text{NP}$.

## Applications

- **Theoretical foundation for SVMs:** Structural risk minimisation explicitly minimises the VC-bound.
- **Boosting:** AdaBoost and PAC analysis — combining weak learners with slightly above $1/2$ accuracy into a strong learner.
- **Active learning:** PAC theory guides when label queries reduce sample complexity.
- **Differential privacy:** DP-PAC learning combines privacy constraints with generalisation guarantees.
- **Scientific learning:** Bounds on when a learned physical model generalises to novel conditions.

## Related Topics

- [[kolmogorov-complexity]] — MDL principle as the algorithmic counterpart to PAC Occam's razor
- [[neural-scaling-laws]] — empirical scaling laws beyond classical VC theory
- [[shannon-entropy]] — information-theoretic foundations; entropy rate and VC dimension relate through Sauer's lemma
- [[mechanistic-interpretability]] — reverse-engineering what a learned hypothesis class actually computes
