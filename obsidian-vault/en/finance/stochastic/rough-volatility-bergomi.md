---
title: Rough Volatility: The Rough Bergomi Model
category: Stochastic Calculus
order: 155
lang: en
slug: rough-volatility-bergomi
---

# Rough Volatility: The Rough Bergomi Model

Empirical studies of high-frequency market data show that historical volatility exhibits fractal scaling consistent with fractional Brownian motion where $H \approx 0.1$. This "roughness" is dramatically different from classical diffusive models ($H=0.5$).

## The Rough Bergomi (rBergomi) Model

The rBergomi model posits that the variance process $v_t$ is driven by a fractional Brownian motion with a very short memory (anti-persistent):
$$ v_t = \xi_0(t) \exp\left( \eta \sqrt{2H} B_t^H - \frac{\eta^2}{2} t^{2H} \right) $$
where $\xi_0(t)$ is the initial forward variance curve, $\eta$ is volatility-of-volatility, and $B_t^H$ is an fBm constructed via the Volterra representation:
$$ B_t^H = \int_0^t (t-s)^{H - 1/2} dW_s $$

## The Volatility Smile

Standard stochastic volatility models struggle to fit the explosive near-maturity ATM skew observed in options markets, $\lim_{T \to 0} |\text{Skew}(T)| \propto T^{-1/2}$.
The rBergomi model naturally reproduces this power-law behavior precisely because $H < 1/2$. The explosion in the skew is a direct manifestation of the singularity in the Volterra kernel.

## Computational Challenges

Because fBm is non-Markovian, pricing and calibration require specialized techniques, such as hybrid PDE approaches, rational approximations of the Volterra kernel, or [[neural-networks]] trained on high-performance Monte Carlo simulators, pushing the boundaries of [[computational-finance]].
