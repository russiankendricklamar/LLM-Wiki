---
title: "Quasi-Monte Carlo Methods"
category: "Algorithms and ML"
order: 41
lang: "en"
---

# Quasi-Monte Carlo Methods

Classical Monte Carlo (MC) integration uses random points and converges at rate $O(1/\sqrt{N})$, independent of dimension. **Quasi-Monte Carlo (QMC)** replaces random points with deterministic **low-discrepancy sequences** and achieves convergence up to $O((\log N)^d / N)$ — vastly faster for moderate dimensions. QMC has become the method of choice for high-dimensional integration in computational finance: option pricing, risk aggregation, and CVA computation, where each basis point of accuracy translates to real capital.

## From random to deterministic: discrepancy

The quality of a point set $\{x_1, \ldots, x_N\} \subset [0,1)^d$ is measured by its **star discrepancy**:

$$D_N^* = \sup_{B \in \mathcal{B}} \left|\frac{1}{N}\sum_{i=1}^{N} \mathbf{1}\{x_i \in B\} - \text{Vol}(B)\right|,$$

where $\mathcal{B}$ is the family of all axis-aligned boxes $[0, u_1) \times \cdots \times [0, u_d)$. Low discrepancy means the points fill the space more uniformly than random samples. Random points have $D_N^* = O(\sqrt{\log\log N / N})$ by the [[law-of-large-numbers|law of the iterated logarithm]]; low-discrepancy sequences achieve $D_N^* = O((\log N)^d / N)$.

## The Koksma-Hlawka inequality

The fundamental theorem of QMC is the **Koksma-Hlawka inequality**:

$$\left|\frac{1}{N}\sum_{i=1}^{N} f(x_i) - \int_{[0,1]^d} f(x)\, dx\right| \leq V_{\text{HK}}(f) \cdot D_N^*,$$

where $V_{\text{HK}}(f)$ is the **variation of $f$ in the sense of Hardy and Krause**. The error is bounded by the product of function regularity and point-set quality. For smooth $f$ with bounded variation, QMC error is $O((\log N)^d / N)$, which for moderate $d$ dramatically beats the MC rate $O(1/\sqrt{N})$.

## Low-discrepancy sequences

**Halton sequence.** Based on radical-inverse functions in different prime bases. Point $i$ in dimension $j$ uses the van der Corput sequence in base $p_j$ (the $j$-th prime). Simple to implement, but deteriorates in high dimensions due to correlations between coordinates for large primes. Effective for $d \leq 10$.

**Sobol' sequence.** Uses primitive polynomials over $\text{GF}(2)$ and carefully chosen direction numbers. The most widely used QMC sequence in finance. Sobol' sequences with "good" direction numbers (Joe-Kuo, 2010) maintain low discrepancy up to $d \approx 20000$, covering even the most demanding path-dependent derivatives.

**Niederreiter-Xing.** Algebraic-geometry constructions achieving optimal asymptotic discrepancy bounds. Theoretically superior for very high $d$ but more complex to implement.

## QMC vs MC convergence

| Method | Error rate | Practical sweet spot |
|---|---|---|
| MC | $O(N^{-1/2})$ | Very high $d$, irregular $f$ |
| QMC | $O(N^{-1}(\log N)^d)$ | Moderate $d$, smooth $f$ |
| Scrambled QMC | $O(N^{-3/2+\varepsilon})$ (RQMC) | Best of both worlds |

For a European option in 10 dimensions, QMC with $N = 10^4$ often matches MC with $N = 10^6$ — a 100x speedup.

## Scrambled QMC and error estimation

Pure QMC is deterministic: it produces a single number with no error estimate. **Scrambled (randomized) QMC** applies a random digital shift or scramble to the low-discrepancy sequence, preserving its equidistribution properties while enabling:

1. An unbiased estimator (same expectation as MC).
2. A practical variance estimate from $R$ independent scrambles: $\hat{\sigma}^2 = \frac{1}{R-1}\sum_{r=1}^R (\hat{I}_r - \bar{I})^2$.

Owen (1997) showed that scrambled Sobol' sequences achieve variance $O(N^{-3+\varepsilon})$ for smooth integrands — much faster than both MC and deterministic QMC bounds.

## Effective dimension and ANOVA

Why does QMC work in hundreds of dimensions when the Koksma-Hlawka bound suggests $(\log N)^d$ should explode? The answer is **effective dimension**. The **ANOVA decomposition** of $f$ writes:

$$f(x) = f_0 + \sum_j f_j(x_j) + \sum_{j < k} f_{jk}(x_j, x_k) + \cdots$$

The **effective dimension in the superposition sense** at proportion $p$ is the smallest $d_s$ such that the sum of variances from terms involving at most $d_s$ variables accounts for proportion $p$ of total variance. For many financial integrands, $d_s \leq 5$ even when the nominal dimension $d$ is in the thousands. QMC exploits this low effective dimension because low-discrepancy sequences are optimized for projections onto low-dimensional faces.

## Brownian bridge construction

For path-dependent options, the naive approach simulates a Brownian path at times $t_1 < \cdots < t_d$ sequentially. The **Brownian bridge construction** instead generates the path hierarchically: first the terminal value $W(T)$, then the midpoint $W(T/2) \mid W(T)$, then $W(T/4) \mid W(T/2), W(0)$, etc.

This concentrates most of the variance into the first few QMC dimensions, dramatically reducing effective dimension. Combined with Sobol' sequences, the Brownian bridge makes QMC practical for Asian options, barrier options, and other path-dependent derivatives with $d = 250$ (daily steps over a year).

## Applications in finance

**Option pricing.** QMC with Sobol' sequences and Brownian bridge is the standard numerical method at major derivatives desks. For a basket option on 50 underlyings with 50 time steps ($d = 2500$), QMC achieves 10x-100x variance reduction over MC.

**Risk aggregation.** Computing portfolio-level [[value-at-risk|VaR]] or ES requires integrating over thousands of risk factors. QMC makes the inner simulation (conditional on scenarios) fast enough for overnight batch runs.

**CVA/XVA computation.** Credit valuation adjustment requires nested simulation: outer scenarios times inner revaluations. QMC on the outer level, possibly combined with MC on the inner level, reduces the computational cost from days to hours.

**Calibration.** Model calibration via least-squares minimization of pricing errors benefits from QMC's lower variance in the objective function, leading to more stable parameter estimates.

## Related Articles

- [[value-at-risk]] — risk aggregation as a high-dimensional integration problem.
- [[brownian-motion]] — the stochastic process underlying financial QMC applications.
- [[central-limit-theorem]] — MC error analysis rests on the CLT; QMC bypasses it.
- [[law-of-large-numbers]] — MC consistency; QMC achieves faster deterministic convergence.
- [[copula-models]] — dependence modelling in risk aggregation where QMC is applied.
- [[shannon-entropy]] — connections between discrepancy and information-theoretic uniformity.
- [[kalman-filter]] — sequential estimation where QMC particle filters improve over MC.
