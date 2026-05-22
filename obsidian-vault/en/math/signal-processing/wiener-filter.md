---
title: 'Signal Processing: Wiener Filter'
category: Advanced Math and Stats
order: 183
lang: en
slug: wiener-filter
---

The Wiener filter minimizes the mean square error between the estimated random process and the desired true process.

### Orthogonality Principle
Let $x(t) = s(t) + n(t)$ be the observed signal (signal + noise). We seek an LTI filter $h(t)$ such that the estimate $\hat{s}(t) = h(t) * x(t)$ minimizes $\mathbb{E}[(s(t) - \hat{s}(t))^2]$.
The orthogonality principle states that the error must be orthogonal to the data:
$\mathbb{E}[ (s(t) - (h * x)(t)) x(t-\tau) ] = 0 \quad \forall \tau$

### Wiener-Hopf Equation
In the frequency domain, assuming stationary processes, the transfer function is:
$H(f) = \frac{S_{sx}(f)}{S_{xx}(f)}$
If signal and noise are uncorrelated, $S_{sx}(f) = S_{ss}(f)$ and $S_{xx}(f) = S_{ss}(f) + S_{nn}(f)$, leading to:
$H(f) = \frac{S_{ss}(f)}{S_{ss}(f) + S_{nn}(f)}$
where $S$ denotes the Power Spectral Density (PSD).
