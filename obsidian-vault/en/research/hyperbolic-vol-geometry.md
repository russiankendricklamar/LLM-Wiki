---
title: "Correlation Is a Hyperbolic Distance"
slug: "hyperbolic-vol-geometry"
date: 2026-07-25
status: "completed"
type: "research"
category: "research"
tags: [stochastic-volatility, sabr, differential-geometry, quantitative-finance]
---

## Objective
To demonstrate that correlation in stochastic volatility models (such as SABR and SPD(2)) can be exactly identified as a hyperbolic distance. The research proves this geometric interpretation symbolically, validates it numerically, categorizes curvature taxonomy across models, and identifies limits of geodesic averaging.

## Context
This builds on fundamental concepts in [[stochastic-volatility]], the [[sabr-model]], and the [[heston-model]]. It leverages concepts from [[differential-geometry]] to establish an affine-invariant metric space for financial covariance matrices.

## Methodology
- **Theoretical:** Symbolic proofs and derivations of geodesics, McKean kernels, and H^2 heat kernels.
- **Numerical:** Monte Carlo simulations with accuracy control (log-Euler/Milstein, antithetics, control variates, importance sampling).
- **Tools:** Python (`numpy`, `scipy`, `sympy`, `pandas`). Computational modules map directly to geometric components (e.g., hypercycle distance, Fisher metric spectrum, Heston geodesic shooting).

## Current Findings
- Exact symbolic identity established: $\rho = \tanh(\delta)$. The distance constant is accurate to $1.6 \times 10^{-15}$.
- Verified the decomposition of SPD(2) distance, checking isometry.
- Established that covariance averaging under flat metrics under-reports risk by 26-37%.
- Derived the McKean kernel and volume factor asymptotics for exact transition densities.
- Demonstrated that Heston model curvature depends on the state variable: $K_{Heston} = -\xi^2 / (2v)$.

## Insights for AI
For an AI agent mapping volatility surfaces: traditional Euclidean interpolation of correlation matrices severely misprices tail events because the true geometry of covariance matrices is negatively curved (hyperbolic). Recognizing correlation as a hyperbolic distance allows agents to apply invariant Riemannian metrics, thereby preventing arbitrage and the "stress-path distortion" commonly found in flat interpolations.

## Open Questions
- Does this geometric identification extend gracefully to rough volatility models or infinite-dimensional forward variance curve dynamics?
- Are there computationally tractable approximations for the transition density in higher-dimensional hyperbolic manifolds for multi-asset stochastic volatility?

## References
- Repository: [russiankendricklamar/hyperbolic-vol-geometry](https://github.com/russiankendricklamar/hyperbolic-vol-geometry)
