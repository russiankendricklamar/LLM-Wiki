---
title: "Empirical Processes"
category: "Asymptotic Statistics"
order: 10
lang: "en"
slug: "empirical-processes"
growth: "seedling"
---

## Definition and Core Object

Let $X_1, \ldots, X_n$ be i.i.d. observations from an unknown probability measure $P$, and let $\mathcal{F}$ be a class of measurable functions $f: \mathcal{X} \to \mathbb{R}$. The **empirical process** is defined as:

$$G_n(f) = \frac{1}{\sqrt{n}} \sum_{i=1}^n \left( f(X_i) - \mathbb{E}[f(X_i)] \right), \quad f \in \mathcal{F}$$

This is a random element of $\ell^\infty(\mathcal{F})$, the space of bounded functions on $\mathcal{F}$ equipped with the supremum norm. The core innovation: instead of studying individual statistics asymptotically, we study the process $G_n$ as a whole object in a function space, yielding **uniform** results simultaneously for all $f \in \mathcal{F}$. This abstraction is the foundation of modern statistical learning theory.

## Glivenko–Cantelli Theorem

For a function class $\mathcal{F}$, define the empirical measure $P_n = \frac{1}{n}\sum_{i=1}^n \delta_{X_i}$. A uniform law of large numbers holds:

$$\sup_{f \in \mathcal{F}} \left| P_n(f) - P(f) \right| \xrightarrow{a.s.} 0$$

**A class $\mathcal{F}$ is called Glivenko–Cantelli (GC-class)** if this holds. The archetypal example is $\mathcal{F} = \{1_{(-\infty, t]}: t \in \mathbb{R}\}$, where convergence reduces to:

$$\sup_{t \in \mathbb{R}} |F_n(t) - F(t)| \xrightarrow{a.s.} 0$$

the classical result on the empirical distribution function. Being GC is weaker than being Donsker (below), and describes when empirical risk uniformly estimates population risk across a function class.

## Donsker's Theorem and Functional CLT

**Donsker's theorem** is the functional central limit theorem for empirical processes. If $\mathcal{F}$ is a **Donsker class**, then:

$$G_n \Rightarrow G_P \quad \text{in } \ell^\infty(\mathcal{F})$$

where $G_P$ is a **Gaussian process** (zero-mean, weakly continuous) with covariance:

$$\mathrm{Cov}(G_P(f), G_P(g)) = \mathbb{E}[f(X)g(X)] - \mathbb{E}[f(X)]\mathbb{E}[g(X)] = P(fg) - P(f)P(g)$$

For indicator functions $\mathcal{F} = \{1_{(-\infty, t]}: t \in \mathbb{R}\}$, the limiting Gaussian process is the **Brownian bridge**:

$$G_P(t) = B(F(t))$$

where $B$ is a standard Brownian bridge on $[0,1]$. This unified treatment explains why the Kolmogorov–Smirnov statistic, KL divergence, and neural network loss all exhibit similar asymptotic behaviour.

## Metric [[shannon-entropy|Entropy]] and Bracketing Numbers

The behaviour of $G_n$ is controlled by the **complexity** of $\mathcal{F}$, measured via covering numbers and bracketing numbers in the $L^2(P)$ semimetric.

**Covering number** $N(\mathcal{F}, L^2(P), \varepsilon)$ is the minimum number of $L^2(P)$-balls of radius $\varepsilon$ needed to cover $\mathcal{F}$:

$$N(\mathcal{F}, L^2(P), \varepsilon) = \min\left\{ k: \exists f_1, \ldots, f_k \in \mathcal{F}, \text{ such that } \mathcal{F} \subseteq \bigcup_{j=1}^k B_\varepsilon(f_j) \right\}$$

**Bracketing number** $N_{[\,]}(\varepsilon, \mathcal{F}, L^2(P))$ counts the minimum number of brackets $[l_j, u_j]$ with $l_j \le f \le u_j$ and $\|u_j - l_j\|_{L^2(P)} \le \varepsilon$ that cover $\mathcal{F}$. Bracketing is finer and more useful for empirical process control.

The logarithm of these quantities controls the modulus of continuity of $G_n$ in $\ell^\infty(\mathcal{F})$.

## Donsker Condition via [[shannon-entropy|Entropy]] Integral

A **sufficient condition** for a class to be Donsker is:

$$\int_0^\infty \sqrt{\log N_{[\,]}(\varepsilon, \mathcal{F}, L^2(P))} \, d\varepsilon < \infty$$

This single integral subsumes an enormous variety of function classes:
- Finite-dimensional parametric families
- Monotone functions
- Functions of bounded variation
- **VC-classes** (below)
- Smooth classes and Besov classes

This explains why Donsker classes are so common in practice: entropy growth is usually sub-exponential.

## VC-Classes and Vapnik–Chervonenkis Dimension

For a class of **sets** $\mathcal{C} = \{C \subseteq \mathcal{X}\}$, the **VC dimension** is the cardinality of the largest set that is **shattered**:

$$\text{VC}(\mathcal{C}) = \max\{d: \exists x_1, \ldots, x_d \text{ such that } |\{C \cap \{x_1, \ldots, x_d\}: C \in \mathcal{C}\}| = 2^d\}$$

A $d$-VC class satisfies the polynomial bound:

$$\log N(\mathcal{C}, L^2(P), \varepsilon) \le d \log\left(\frac{c}{\varepsilon}\right)$$

**The fundamental result**: **VC-classes are Donsker classes**. Consequently:

$$\sqrt{n}(P_n - P) \Rightarrow G_P \quad \text{in } \ell^\infty(\mathcal{C})$$

Uniformly over all sets in $\mathcal{C}$. This ensures that when the empirical risk $\frac{1}{n}\sum_{i=1}^n \ell(h(X_i), Y_i)$ is small, the true risk $\mathbb{E}[\ell(h(X), Y)]$ is also small with high probability—the foundation of [[pac-learning|PAC-learning bounds]].

## Rademacher Complexity and Generalization

A finer tool than VC dimension is **Rademacher complexity**:

$$\mathcal{R}_n(\mathcal{F}) = \mathbb{E}_\sigma\left[\sup_{f \in \mathcal{F}} \left|\frac{1}{n}\sum_{i=1}^n \sigma_i f(X_i)\right|\right]$$

where $\sigma_i$ are independent Rademacher variables (uniform on $\{-1, +1\}$). By **symmetrization**:

$$\mathbb{E}\left[\sup_{f \in \mathcal{F}} G_n(f)\right] \le 2\sqrt{n} \cdot \mathcal{R}_n(\mathcal{F})$$

This translates directly to **generalization bounds** in statistical learning. For any function class $\mathcal{F}$:

$$\mathbb{E}[\hat{R}_n(f^*)] \le \inf_{f \in \mathcal{F}} R(f) + O(2\mathcal{R}_n(\mathcal{F})) + O\left(\sqrt{\frac{\log(1/\delta)}{n}}\right)$$

where $\hat{R}_n$ is empirical risk and $R$ is population risk. This bound is **uniform** over all $f \in \mathcal{F}$ and holds with probability $1 - \delta$.

## Connection to Machine Learning Generalization

Empirical process theory is the mathematical substrate for understanding why learning succeeds. For a hypothesis class $\mathcal{H}$ with VC dimension $d$ and sample size $n$:

$$\text{Generalization gap} = O\left(\sqrt{\frac{d \log n}{n}}\right)$$

If the empirical risk is small and the class is not too complex (low VC dimension or bounded Rademacher complexity), then the true risk is close with high probability. This principle extends to modern deep learning: when trained networks have small empirical loss on finite samples, implicit regularization (often through SGD or architecture constraints) effectively reduces complexity, ensuring generalization.

## Bootstrap for Empirical Processes

The distribution of $G_n$ can be estimated without knowing $P$. Draw a **bootstrap sample** $X_1^*, \ldots, X_n^*$ with replacement from $\{X_1, \ldots, X_n\}$, and let $P_n^*$ be the empirical measure of the bootstrap sample. Then:

$$G_n^* := \sqrt{n}(P_n^* - P_n) \Rightarrow G_P$$

conditionally on the data. This consistency—convergence to the same limit as $G_n$—justifies using the bootstrap distribution to construct confidence sets for functionals of $P$, critical for high-dimensional regression and the study of influence functions.

## Related Concepts

Empirical process theory extends via [[weak-convergence-prokhorov|weak convergence]] to dependent data and infinite-dimensional spaces. [[local-asymptotic-normality|Local asymptotic normality (LAN)]] refines the behavior of likelihood ratios through empirical processes. For dependent sequences, mixing conditions replace entropy integrals. The [[central-limit-theorem|functional CLT]] for empirical processes is the continuous-time analogue of the classical CLT, with the [[brownian-bridge|Brownian bridge]] as the canonical limiting object.
