---
title: "Markov Chain Monte Carlo (MCMC)"
category: "Algorithms and ML"
order: 111
lang: "en"
featured: true
image: "/featured/mcmc.jpg"
growth: "budding"
---
# Markov Chain Monte Carlo (MCMC)

**Markov Chain Monte Carlo (MCMC)** is a class of algorithms for sampling from a probability distribution. By constructing a Markov chain that has the desired distribution as its equilibrium distribution, one can obtain a sample of the desired distribution by observing the chain after a number of steps.

## Theoretical Foundation

The power of MCMC lies in its ability to sample from complex, high-dimensional distributions where direct sampling is intractable. The "Markov Chain" part ensures that the next state depends only on the current state, while the "Monte Carlo" part refers to the random sampling process.

Key concepts include:
- **Stationary Distribution**: The target distribution $\pi(x)$ that the Markov chain converges to.
- **Ergodicity**: The property that the chain will eventually visit all parts of the state space, ensuring the sample is representative.
- **Detailed Balance**: A condition often used to ensure $\pi(x)$ is the stationary distribution: $\pi(x)P(x \to y) = \pi(y)P(y \to x)$.

## Mathematical Formulation

The most famous MCMC algorithm is the **Metropolis-Hastings** algorithm. To sample from $\pi(x)$:
1. Propose a new state $y$ from a proposal distribution $q(y|x)$.
2. Calculate the acceptance probability $\alpha$:
   $$ \alpha = \min\left(1, \frac{\pi(y)q(x|y)}{\pi(x)q(y|x)}\right) $$
3. Accept $y$ with probability $\alpha$; otherwise, stay at $x$.

For Bayesian inference, where $\pi(\theta|D) \propto P(D|\theta)P(\theta)$, MCMC allows sampling from the posterior without calculating the normalizing constant (evidence).

## Practical Relevance in Finance

MCMC is a cornerstone of modern quantitative finance:
- **Bayesian Parameter Estimation**: Estimating parameters for complex models like [[heston-model]] or [[sabr-model]].
- **Risk Management**: Calculating [[value-at-risk]] (VaR) and Expected Shortfall for portfolios with non-linear dependencies.
- **Stochastic Volatility**: Fitting models where volatility is a latent variable.
- **Credit Scoring**: Estimating default probabilities in hierarchical Bayesian models.

## Python: Metropolis-Hastings Sketch

```python
import numpy as np

def metropolis_hastings(target_pdf, iterations, initial_state, proposal_std):
    x = initial_state
    samples = []
    
    for _ in range(iterations):
        # Propose new state
        x_prop = x + np.random.normal(0, proposal_std)
        
        # Calculate acceptance ratio
        acceptance_ratio = target_pdf(x_prop) / target_pdf(x)
        
        # Accept or reject
        if np.random.rand() < acceptance_ratio:
            x = x_prop
            
        samples.append(x)
        
    return np.array(samples)

# Example: Sampling from a normal distribution
target = lambda x: np.exp(-0.5 * x**2)
samples = metropolis_hastings(target, 10000, 0, 0.5)
```

## Related Topics
- [[monte-carlo-method]]
- [[hidden-markov-models]]
- [[particle-filter]]
- [[bayesian-inference]]
