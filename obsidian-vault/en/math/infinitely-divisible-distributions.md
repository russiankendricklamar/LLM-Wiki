---
title: "Infinitely Divisible Distributions"
category: "Limit Theorems"
order: 7
lang: "en"
---

# Infinitely Divisible Distributions

A probability distribution $\mu$ on $\mathbb{R}^d$ is **infinitely divisible** (ID) if for every $n \geq 1$ it can be written as the $n$-fold convolution of some distribution $\mu_n$ with itself: $\mu = \mu_n^{*n}$. Equivalently, a random variable $X$ is ID if for every $n$ it can be represented as $X = X_1^{(n)} + \cdots + X_n^{(n)}$ where $X_k^{(n)}$ are i.i.d. This class is far richer than it first appears: it contains the Gaussian, Poisson, Gamma, stable, and compound Poisson distributions, and it is precisely the class of distributions that can appear as marginals of [[levy-processes|Levy processes]] and processes with independent increments. In Jacod and Shiryaev's framework, ID distributions are the fundamental building blocks: the general convergence theorem for semimartingales produces processes with independent increments as limits, and every such process has ID marginals described by the Levy-Khintchine formula.

## The Levy-Khintchine Representation

The complete characterization of ID distributions is given by their [[characteristic-functions|characteristic functions]].

**Theorem (Levy-Khintchine).** A probability distribution $\mu$ on $\mathbb{R}$ is infinitely divisible if and only if its characteristic function has the form

$$\hat{\mu}(u) = \exp\!\left( i\gamma u - \frac{\sigma^2 u^2}{2} + \int_{\mathbb{R}} \left( e^{iux} - 1 - iux\,\mathbf{1}_{|x| \leq 1} \right) \nu(dx) \right)$$

where $\gamma \in \mathbb{R}$, $\sigma^2 \geq 0$, and $\nu$ is a measure on $\mathbb{R} \setminus \{0\}$ satisfying the integrability condition $\int_{\mathbb{R}} \min(1, x^2)\, \nu(dx) < \infty$.

The triple $(\gamma, \sigma^2, \nu)$ is called the **canonical triplet** (or Levy-Khintchine triplet). It uniquely determines $\mu$. The parameter $\gamma$ is the drift, $\sigma^2$ is the Gaussian variance, and $\nu$ is the **Levy measure** governing the jump structure. The truncation function $h(x) = x\,\mathbf{1}_{|x| \leq 1}$ in the exponent is a centering device; different truncation functions yield different values of $\gamma$ but represent the same distribution.

## The Levy Measure

The Levy measure $\nu$ encodes the intensity of jumps. It satisfies $\nu(\{0\}) = 0$ and $\int \min(1, x^2)\, \nu(dx) < \infty$. This integrability condition says: large jumps ($|x| > 1$) must be summable ($\int_{|x|>1} \nu(dx) < \infty$, so there are finitely many per unit time), while small jumps ($|x| \leq 1$) may arrive at infinite rate, but their squared magnitudes must be summable. The condition $\int \min(1, x^2)\, \nu(dx) < \infty$ is exactly what is needed for the stochastic integral defining the jump part of the Levy process to converge.

When $\nu(\mathbb{R}) < \infty$, the jumps form a compound Poisson process: finitely many jumps in any interval. When $\nu(\mathbb{R}) = \infty$, the process has infinitely many small jumps in every interval — this is the case for Gamma processes, inverse Gaussian processes, and stable processes with index $\alpha < 2$.

## Kolmogorov's Formula and De Finetti's Theorem

**Kolmogorov's formula.** When $\nu = 0$ (no jumps), the Levy-Khintchine formula reduces to $\hat{\mu}(u) = \exp(i\gamma u - \sigma^2 u^2 / 2)$: $\mu$ is Gaussian. Thus the Gaussian distributions are precisely the ID distributions with no jump component.

**De Finetti's theorem (for ID distributions).** An ID distribution $\mu$ is the weak limit of compound Poisson distributions. Specifically, if $(\gamma, \sigma^2, \nu)$ is the canonical triplet of $\mu$, then one can construct a sequence of compound Poisson distributions $\mu_n$ (with Levy measures $\nu_n$ satisfying $\nu_n(\mathbb{R}) < \infty$) such that $\mu_n \to \mu$ weakly and $(\gamma_n, \sigma^2_n, \nu_n) \to (\gamma, \sigma^2, \nu)$. This is the approximation principle: every ID distribution, no matter how complex its jump structure, is a limit of distributions with finitely many jumps.

## Connection to Processes with Independent Increments

**Theorem.** A cadlag process $X = (X_t)_{t \geq 0}$ with $X_0 = 0$ has independent increments if and only if for each $t > 0$, $X_t$ has an infinitely divisible distribution. Moreover, the law of $X_t$ has canonical triplet $(\gamma(t), \sigma^2(t), \nu_t)$ where the functions $t \mapsto \gamma(t)$, $t \mapsto \sigma^2(t)$, $t \mapsto \nu_t$ are deterministic and increasing in the sense of positive-definiteness.

When the increments are also stationary, $X$ is a [[levy-processes|Levy process]] and $(\gamma(t), \sigma^2(t), \nu_t) = (\gamma t, \sigma^2 t, t\nu)$: the triplet scales linearly in time.

This is the bridge between the distributional theory (ID distributions) and the process theory (Levy processes, semimartingales). In Jacod and Shiryaev's convergence theorem (see [[convergence-semimartingales]]), the limit processes have independent increments, so the ID structure is inherited by all marginals.

## Relation to Stable Distributions

A distribution is [[stable-distributions|stable]] if it is closed under convolution with rescaling: $X_1 + X_2 \stackrel{d}{=} aX + b$ for i.i.d. copies $X_1, X_2$. Every stable distribution is ID, with Levy measure of the form $\nu(dx) = c_+ x^{-1-\alpha}\,\mathbf{1}_{x > 0}\,dx + c_- |x|^{-1-\alpha}\,\mathbf{1}_{x < 0}\,dx$ for $\alpha \in (0,2)$. The Gaussian ($\alpha = 2$) is the unique stable distribution with $\nu = 0$. The Cauchy distribution has $\alpha = 1$, $c_+ = c_-$.

Stable distributions arise as the only possible limits in the [[central-limit-theorem|generalized CLT]] when the classical variance assumption fails. They occupy a distinguished position in the ID class: they are the fixed points of the renormalization group for sums of i.i.d. variables.

## Key Examples

| Distribution | $\gamma$ | $\sigma^2$ | $\nu(dx)$ |
|---|---|---|---|
| $\mathcal{N}(\mu, \sigma^2)$ | $\mu$ | $\sigma^2$ | $0$ |
| $\text{Poisson}(\lambda)$ | $0$ | $0$ | $\lambda\,\delta_1(dx)$ |
| $\text{Gamma}(a, b)$ | centering term | $0$ | $a\,x^{-1} e^{-bx}\,\mathbf{1}_{x>0}\,dx$ |
| Compound Poisson | drift | $0$ | $\lambda F(dx)$, $\nu(\mathbb{R}) < \infty$ |
| $\alpha$-Stable | centering | $0$ ($\alpha<2$) | $c_\pm |x|^{-1-\alpha}\,dx$ |

## Role in Jacod-Shiryaev's Limit Theory

The [[convergence-semimartingales|main convergence theorem]] states that $X^n \Rightarrow X$ in $D$ when the [[predictable-compensator|predictable triplets]] $(B^n, C^n, \nu^n)$ converge to those of $X$, provided $X$ has independent increments. Since every PII has ID marginals, the Levy-Khintchine formula is the tool that translates triplet convergence into convergence of finite-dimensional distributions. In the proof, one shows that the characteristic functions $\mathbb{E}[e^{iu X^n_t}]$ converge to $\exp(\psi_t(u))$ where $\psi_t$ is the Levy-Khintchine exponent — and this is enough because an ID distribution is determined by its characteristic function.

The [[functional-limit-theorems|functional limit theorems]] (Donsker, Rebolledo, compound Poisson limits) all ultimately reduce to checking that the limiting triplet satisfies the Levy-Khintchine conditions and that tightness holds in the [[skorokhod-topology|Skorokhod space]].

## Related Articles

- [[levy-processes]] — processes with stationary independent increments, the canonical ID processes.
- [[characteristic-functions]] — the analytic tool underlying the Levy-Khintchine formula.
- [[stable-distributions]] — the scale-invariant subfamily of ID distributions.
- [[convergence-semimartingales]] — the main theorem where ID limits appear.
- [[functional-limit-theorems]] — classical limit theorems as special cases.
- [[predictable-compensator]] — the triplet $(B, C, \nu)$ for semimartingales.
- [[central-limit-theorem]] — Gaussian ID distributions as classical limits.
- [[weak-convergence-prokhorov]] — tightness and weak convergence in the proof.
