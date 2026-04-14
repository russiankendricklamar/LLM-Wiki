---
title: "Markov Chain Monte Carlo (MCMC)"
category: "Algorithms and ML"
order: 25
lang: "en"
featured: true
image: "/featured/mcmc.jpg"
growth: "budding"
---
# Markov Chain Monte Carlo (MCMC)

**Markov Chain Monte Carlo (MCMC)** is a class of algorithms for sampling from a probability distribution. By constructing a Markov chain that has the desired distribution as its equilibrium distribution, one can obtain a sample of the desired distribution by observing the chain after a number of steps.

## Visualization

```chart
{
  "type": "line",
  "xAxis": "iteration",
  "data": [
    {"iteration": 0,    "chain1": 1.0,  "chain2": 3.5,  "true": 2.0},
    {"iteration": 200,  "chain1": 1.4,  "chain2": 3.1,  "true": 2.0},
    {"iteration": 400,  "chain1": 1.9,  "chain2": 2.7,  "true": 2.0},
    {"iteration": 600,  "chain1": 2.3,  "chain2": 2.4,  "true": 2.0},
    {"iteration": 800,  "chain1": 2.1,  "chain2": 2.2,  "true": 2.0},
    {"iteration": 1000, "chain1": 1.8,  "chain2": 2.1,  "true": 2.0},
    {"iteration": 1200, "chain1": 2.2,  "chain2": 1.9,  "true": 2.0},
    {"iteration": 1400, "chain1": 2.0,  "chain2": 2.0,  "true": 2.0},
    {"iteration": 1600, "chain1": 2.1,  "chain2": 2.1,  "true": 2.0},
    {"iteration": 1800, "chain1": 1.9,  "chain2": 2.0,  "true": 2.0},
    {"iteration": 2000, "chain1": 2.0,  "chain2": 1.9,  "true": 2.0},
    {"iteration": 2200, "chain1": 2.1,  "chain2": 2.1,  "true": 2.0},
    {"iteration": 2400, "chain1": 1.9,  "chain2": 2.0,  "true": 2.0}
  ],
  "lines": [
    {"dataKey": "chain1", "stroke": "#3b82f6", "name": "Chain 1 (θ)"},
    {"dataKey": "chain2", "stroke": "#ef4444", "name": "Chain 2 (θ)"},
    {"dataKey": "true",   "stroke": "#10b981", "name": "True θ = 2.0"}
  ]
}
```

## Background and Motivation

MCMC was developed during the Manhattan Project (Metropolis et al., 1953) for computing high-dimensional integrals in statistical physics. It was later extended by Hastings (1970) and became central to Bayesian statistics in the 1990s when Gelfand and Smith demonstrated its applicability to posterior inference in hierarchical models.

In quantitative finance, MCMC is indispensable wherever the posterior distribution of model parameters cannot be computed in closed form — which describes almost every realistic model. Stochastic volatility models (Heston, SABR), jump-diffusion models (Merton, Kou), and regime-switching models all require MCMC or related methods for calibration and risk assessment.

## Theoretical Foundation

The power of MCMC lies in its ability to sample from complex, high-dimensional distributions where direct sampling is intractable. The "Markov Chain" part ensures that the next state depends only on the current state, while the "Monte Carlo" part refers to the random sampling process.

Key concepts include:
- **Stationary Distribution**: The target distribution $\pi(x)$ that the Markov chain converges to.
- **Ergodicity**: The property that the chain will eventually visit all parts of the state space, ensuring the sample is representative.
- **Detailed Balance**: A condition often used to ensure $\pi(x)$ is the stationary distribution: $\pi(x)P(x \to y) = \pi(y)P(y \to x)$.
- **Burn-in**: The initial transient period before the chain approaches stationarity. Samples from this period are discarded.
- **Autocorrelation**: Successive samples are correlated. The effective sample size (ESS) measures how many truly independent samples the chain has produced.

## Mathematical Formulation

The most famous MCMC algorithm is the **Metropolis-Hastings** algorithm. To sample from $\pi(x)$:
1. Propose a new state $y$ from a proposal distribution $q(y|x)$.
2. Calculate the acceptance probability $\alpha$:
   $$ \alpha = \min\left(1, \frac{\pi(y)q(x|y)}{\pi(x)q(y|x)}\right) $$
3. Accept $y$ with probability $\alpha$; otherwise, stay at $x$.

For Bayesian inference, where $\pi(\theta|D) \propto P(D|\theta)P(\theta)$, MCMC allows sampling from the posterior without calculating the normalizing constant (evidence):

$$
\pi(\theta | D) \propto \underbrace{\mathcal{L}(D|\theta)}_{\text{likelihood}} \cdot \underbrace{\pi(\theta)}_{\text{prior}}
$$

## Hamiltonian Monte Carlo (HMC)

Standard Metropolis-Hastings performs a random walk, which is inefficient in high dimensions. **Hamiltonian Monte Carlo** introduces auxiliary momentum variables and uses Hamiltonian dynamics to make large, directed jumps in parameter space:

$$
H(\theta, p) = -\log \pi(\theta) + \frac{1}{2} p^T M^{-1} p
$$

where $p$ is the momentum and $M$ is the mass matrix. Leapfrog integration of Hamilton's equations produces proposals that are accepted with high probability. NUTS (No-U-Turn Sampler), implemented in Stan and PyMC, adaptively tunes the step size and path length.

## Key Properties

- **Convergence diagnostic (Gelman-Rubin $\hat{R}$)**: Run multiple chains; $\hat{R} \approx 1$ means chains have mixed and converged.
- **Effective Sample Size (ESS)**: $\text{ESS} = N / (1 + 2\sum_{k=1}^\infty \rho_k)$ where $\rho_k$ is the lag-$k$ autocorrelation.
- **Acceptance rate**: Optimal acceptance rate is ~23% for random-walk Metropolis in high dimensions; ~65% for HMC.

## Practical Relevance in Finance

MCMC is a cornerstone of modern quantitative finance:
- **Bayesian Parameter Estimation**: Estimating parameters for complex models like [[heston-model]] or [[sabr-model]].
- **Risk Management**: Calculating [[value-at-risk]] (VaR) and Expected Shortfall for portfolios with non-linear dependencies.
- **Stochastic Volatility**: Fitting models where volatility is a latent variable.
- **Credit Scoring**: Estimating default probabilities in hierarchical Bayesian models.
- **Pairs Trading**: Estimating time-varying OU process parameters for spread trading signals.

## Python: Full Metropolis-Hastings with Diagnostics

```python
import numpy as np

def metropolis_hastings(log_target, iterations, initial_state, proposal_std, burn_in=1000):
    """
    Generic Metropolis-Hastings sampler.

    log_target: function returning log of (unnormalized) target density
    iterations: total number of iterations
    initial_state: starting point (scalar or array)
    proposal_std: standard deviation of Gaussian proposal
    burn_in: number of initial samples to discard
    Returns (samples, acceptance_rate).
    """
    x = np.atleast_1d(np.array(initial_state, dtype=float))
    dim = len(x)
    samples = []
    n_accepted = 0

    for i in range(iterations):
        x_prop = x + np.random.normal(0, proposal_std, dim)
        log_alpha = log_target(x_prop) - log_target(x)

        if np.log(np.random.rand()) < log_alpha:
            x = x_prop
            n_accepted += 1

        if i >= burn_in:
            samples.append(x.copy())

    samples = np.array(samples)
    acceptance_rate = n_accepted / iterations
    return samples, acceptance_rate


def effective_sample_size(samples):
    """Estimate ESS from autocorrelation of 1D sample chain."""
    n = len(samples)
    mean = np.mean(samples)
    var = np.var(samples)
    if var == 0:
        return n
    acf = np.correlate(samples - mean, samples - mean, mode='full')
    acf = acf[n-1:] / (var * n)
    # Sum autocorrelations until they become negative
    ess_sum = 1.0
    for k in range(1, n):
        if acf[k] < 0:
            break
        ess_sum += 2 * acf[k]
    return n / ess_sum


# Finance application: Bayesian estimation of OU process parameters
# Observed spread returns: dX = theta*(mu - X)*dt + sigma*dW
# Posterior over (theta, mu, sigma) using synthetic data
np.random.seed(42)
true_theta, true_mu, true_sigma = 2.0, 0.5, 0.3
dt = 1/252
n_obs = 200

# Simulate OU observations
X = np.zeros(n_obs)
X[0] = true_mu
for i in range(1, n_obs):
    X[i] = X[i-1] + true_theta * (true_mu - X[i-1]) * dt + \
           true_sigma * np.sqrt(dt) * np.random.normal()

def log_posterior(params):
    theta, mu, sigma = params
    if theta <= 0 or sigma <= 0:
        return -np.inf
    # Log-likelihood of OU discretization
    resid = X[1:] - X[:-1] - theta * (mu - X[:-1]) * dt
    log_lik = -0.5 * np.sum(resid**2) / (sigma**2 * dt) - \
              n_obs * np.log(sigma * np.sqrt(dt))
    # Weakly informative priors
    log_prior = -0.5 * (theta/5)**2 - 0.5 * (mu/2)**2 - 0.5 * (sigma/2)**2
    return log_lik + log_prior

init = np.array([1.0, 0.0, 0.5])
samples, acc_rate = metropolis_hastings(log_posterior, 20000, init, 0.05, burn_in=2000)

print(f"Acceptance rate: {acc_rate:.2%}")
print(f"theta: {np.mean(samples[:,0]):.3f} ± {np.std(samples[:,0]):.3f} (true: {true_theta})")
print(f"mu:    {np.mean(samples[:,1]):.3f} ± {np.std(samples[:,1]):.3f} (true: {true_mu})")
print(f"sigma: {np.mean(samples[:,2]):.3f} ± {np.std(samples[:,2]):.3f} (true: {true_sigma})")
print(f"ESS (theta): {effective_sample_size(samples[:,0]):.0f}")
```

## Parameter Table

| Symbol | Name | Description | Typical Value |
|:---|:---|:---|:---|
| $\hat{R}$ | Gelman-Rubin statistic | Convergence diagnostic; 1 = converged | $< 1.01$ |
| ESS | Effective sample size | Independent-equivalent sample count | $> 100$ |
| $\rho_k$ | Lag-$k$ autocorrelation | Chain mixing quality | $< 0.1$ for $k>10$ |
| Acceptance rate | MH acceptance fraction | Too high = slow mixing; too low = stuck | $20\% – 40\%$ |
| Burn-in | Warmup period | Samples discarded before stationarity | $10\% – 50\%$ of total |

## Limitations and Extensions

- **Slow mixing in multimodal distributions**: Chains can get stuck in one mode. Parallel tempering (running chains at different "temperatures") addresses this.
- **High dimensionality**: Standard random-walk Metropolis scales as $O(d^{1/3})$ in acceptance rate. HMC scales much better: $O(d^{1/4})$ leapfrog steps needed.
- **Gradient requirements**: HMC requires gradients of the log-posterior. For black-box financial models, numerical differentiation or probabilistic programming (Stan, PyMC) is needed.
- **Alternatives for speed**: Variational Bayes approximates the posterior analytically and is much faster but sacrifices accuracy for complex posteriors.

## Related Topics
- [[monte-carlo-method]]
- [[hidden-markov-models]]
- [[particle-filter]]
- [[bayesian-inference]]
- [[heston-model]]
- [[pairs-trading]]
