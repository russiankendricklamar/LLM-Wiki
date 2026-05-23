---
title: Occupation Measures and Local Times of Lévy Processes
category: Stochastic Processes
order: 155
lang: en
slug: occupation-measures-local-times
---

# Occupation Measures and Local Times of Lévy Processes

The local time of a stochastic process quantifies the amount of time the process spends at a particular spatial level. For general Lévy processes, the existence and regularity of local times depend delicately on the characteristic exponent.

## Occupation Measure

For a Lévy process $X_t$, the occupation measure up to time $t$ is a random measure defined by:
$$ \mu_t(A) = \int_0^t \mathbf{1}_A(X_s) ds \quad \text{for Borel sets } A \subset \mathbb{R}^d $$
If $\mu_t$ is absolutely continuous with respect to the Lebesgue measure, its Radon-Nikodym derivative $L_t^x = \frac{d\mu_t}{dx}$ is the local time at level $x$.

## Fourier Analytic Conditions

The existence of local time $L_t^x$ for a Lévy process is intimately tied to the integrability of the real part of its characteristic exponent $\Psi(\xi)$, where $\mathbb{E}[e^{i\xi X_t}] = e^{-t\Psi(\xi)}$.
By Plancherel's theorem and the [[fourier-transform]], a local time exists if and only if:
$$ \int_{\mathbb{R}^d} \text{Re} \left( \frac{1}{\lambda + \Psi(\xi)} \right) d\xi < \infty \quad \text{for } \lambda > 0 $$

## Tanaka's Formula and Discontinuities

For processes with jumps, Tanaka's formula involves the jump measure:
$$ |X_t - x| = |X_0 - x| + \int_0^t \text{sgn}(X_{s-} - x) dX_s + L_t^x + \sum_{0 < s \le t} (|X_s - x| - |X_{s-} - x| - \text{sgn}(X_{s-} - x)\Delta X_s) $$
The interplay between local time and jump measures is central to studying the potential theory of [[levy-processes]].
