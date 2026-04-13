---
title: "Adversarial Stress Testing"
category: "Risk Management"
order: 107
lang: "en"
---
# Adversarial Stress Testing via Generative Models

**Adversarial Stress Testing** is a modern risk management technique that uses generative models (like GANs or VAEs) to identify the "worst-case" scenarios that are both plausible and damaging to a specific portfolio. Unlike traditional stress tests (e.g., "replaying 2008"), adversarial tests adapt to the portfolio's specific vulnerabilities.

## How it Works

The process can be framed as an optimization problem:
$$
\max_{s \in \mathcal{S}} \text{Loss}(P, s) \quad \text{subject to } \mathcal{D}(s, \text{Historical}) < \epsilon
$$
Where:
- $P$ is the current portfolio.
- $s$ is a generated market scenario.
- $\mathcal{S}$ is the space of possible scenarios.
- $\mathcal{D}$ is a distance metric (e.g., Wasserstein distance) ensuring the scenario is statistically plausible given historical data.

Generative Adversarial Networks ([[gan]]) are often used, where the **Generator** tries to find scenarios that crash the portfolio, and a **Critic** ensures these scenarios look like "real" market data (e.g., they preserve volatility clustering and fat tails).

## Financial Application

1. **Portfolio Robustness**: Identifying "hidden" correlations that only appear during specific extreme events.
2. **Regulatory Compliance**: Going beyond standard Basel III/IV stress tests to demonstrate proactive risk management.
3. **Model Validation**: Testing if a trading algorithm's stop-losses and risk limits actually work in unprecedented but realistic market regimes.

## Python: Conceptual Adversarial Search

```python
import numpy as np

def adversarial_loss(scenario, weights):
    # Simplified loss: negative return
    return -np.dot(scenario, weights)

def generate_adversarial_scenario(current_weights, history, epsilon=0.01):
    # Start with a random historical scenario
    idx = np.random.randint(0, len(history))
    base_scenario = history[idx]
    
    # Simple gradient ascent to find 'worst' scenario
    # In practice, use a trained GAN or VAE
    perturbation = -current_weights * epsilon
    worst_scenario = base_scenario + perturbation
    
    return worst_scenario

# History of 100 days for 3 assets
hist_data = np.random.normal(0, 0.02, (100, 3))
my_weights = np.array([0.4, 0.4, 0.2])

bad_day = generate_adversarial_scenario(my_weights, hist_data)
print(f"Standard VaR Scenario: {np.percentile(hist_data, 1, axis=0)}")
print(f"Adversarial Scenario: {bad_day}")
```

## Related Topics
- [[gan]]
- [[value-at-risk]]
- [[extreme-value-theory]]
---
