---
title: "MCMC (Markov Chain Monte Carlo)"
category: "Applied Probability"
order: 15
lang: "en"
slug: "mcmc"
---

# MCMC: Markov Chain Monte Carlo

Markov Chain Monte Carlo (MCMC) is a class of algorithms for sampling from complex probability distributions where direct sampling is impossible. It is the computational engine of **Bayesian Statistics** and **Statistical Physics**.

## 1. The Core Idea: Sampling by Walking

Imagine you want to know the shape of a high-dimensional landscape, but you can only see the ground directly beneath your feet. 
In MCMC, you start a "Random Walker" (a Markov Chain). At every step, the walker decides where to move next. If designed correctly, the walker will spend more time in "high probability" regions. Over thousands of steps, the history of the walker's positions becomes a representative **Sample** of the entire distribution.

## 2. Key Algorithms

### A. Metropolis-Hastings
The most famous MCMC algorithm. To move from point $x$ to $x'$:
1.  Propose a move to $x'$ using a simple distribution (like a Gaussian).
2.  Calculate the **Acceptance Ratio**: $\alpha = \min\left(1, \frac{P(x')}{P(x)}\right)$.
3.  Accept the move with probability $\alpha$. If $x'$ is more probable, you always move. If it's less probable, you might still move (to avoid getting stuck in local peaks).

### B. Gibbs Sampling
A special case used for multi-dimensional variables. Instead of moving all dimensions at once, you update one variable at a time, conditioned on the current values of all others. It is highly efficient for **Bayesian Hierarchical Models**.

### C. Hamiltonian Monte Carlo (HMC)
The "Citadel" level of MCMC. It uses the physics of [[hamiltonian-mechanics|Hamiltonian dynamics]] (simulating a ball rolling on the probability surface) to take much larger, more intelligent steps than Metropolis. This is the engine behind the **Stan** and **PyMC** programming languages.

## 3. Crucial Concepts for Practitioners

- **Burn-in**: The first few thousand steps are discarded because the walker needs time to reach the "high probability" area from its random starting point.
- **Mixing**: How fast the chain explores the whole distribution. If mixing is poor, the samples will be highly correlated and misleading.
- **Stationary Distribution**: The target distribution $P(x)$ that the Markov Chain is designed to converge to.

## 4. Why it Matters for AI and Finance

- **Bayesian Neural Networks**: MCMC allows us to find the distribution of neural network weights, providing a measure of **Uncertainty** instead of a single point estimate.
- **Derivative Pricing**: In complex models like [[lsv-model]], MCMC is used to simulate paths that satisfy difficult boundary conditions.

## Related Topics

[[asymptotic-stats/bayesian-inference]] — the primary use case  
[[hmm-particle-filters]] — the sequential version of MCMC  
[[hamiltonian-mechanics]] — the physics engine for HMC
---