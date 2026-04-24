---
title: "ML for Options Pricing"
category: "AI Finance"
order: 6
lang: "en"
slug: "ml-options-pricing"
growth: "seedling"
---
# ML for Options Pricing

## Overview

The Black-Scholes model (1973) gave derivatives traders an analytic pricing formula under a set of convenient but empirically violated assumptions: constant volatility, log-normal returns, no jumps, frictionless markets. Four decades of practice have exposed each assumption as a simplification — volatility smiles, heavy tails, stochastic volatility regimes, and discrete hedging all create systematic mispricings that no closed-form formula fully corrects for.

Machine learning offers a complementary route: learn the pricing function directly from market-quoted option prices, or learn a hedging strategy end-to-end from simulated or historical data. The two most influential frameworks are **neural network pricing** (fitting implied vol surfaces and option prices) and **deep hedging** (Buehler et al., 2019), which optimises a hedging strategy without assuming a particular model for the underlying dynamics.

## Mathematical Framework

### Black-Scholes Baseline

Under risk-neutral measure $\mathbb{Q}$, the European call price is:

$$
C^{BS}(S, K, T, r, \sigma) = S\,\Phi(d_1) - K e^{-rT}\Phi(d_2)
$$

$$
d_1 = \frac{\ln(S/K) + (r + \frac{1}{2}\sigma^2)T}{\sigma\sqrt{T}}, \quad d_2 = d_1 - \sigma\sqrt{T}
$$

where $\Phi$ is the standard normal CDF. The model collapses all option information into a single scalar $\sigma$ — but the market quotes a different $\sigma$ for each $(K, T)$ pair, the **implied volatility surface** $\hat{\sigma}(K, T)$.

### Neural Network Pricing

A pricing network $f_\theta$ maps option features to price or implied vol:

$$
\hat{C} = f_\theta(S_t, K, T-t, r, q, \hat{\sigma}_{\text{ATM}}, \text{skew})
$$

Training minimises mean-squared pricing error on market quotes:

$$
\mathcal{L}(\theta) = \frac{1}{N}\sum_{i=1}^{N}\bigl(f_\theta(x_i) - C_i^{\text{mkt}}\bigr)^2 + \lambda_{\text{arb}}\,\mathcal{R}_{\text{arb}}(\theta)
$$

where $\mathcal{R}_{\text{arb}}$ is a no-arbitrage regularisation term enforcing calendar spread monotonicity and butterfly positivity.

### No-Arbitrage Constraints as Regularisation

Static arbitrage conditions translate into differentiable penalties:

$$
\mathcal{R}_{\text{arb}} = \sum_{K_1 < K_2 < K_3} \max\!\bigl(0,\; \lambda C(K_2) - C(K_1) - (1-\lambda)C(K_3)\bigr)^2
$$

(butterfly non-negativity, where $\lambda = (K_3 - K_2)/(K_3 - K_1)$). Calendar spread monotonicity requires $\partial C / \partial T \geq 0$, enforced as a soft constraint via automatic differentiation.

### Deep Hedging (Buehler et al., 2019)

Rather than pricing, deep hedging learns the optimal replication strategy $\delta_t = \phi_\theta(s_t)$ directly. The agent minimises a convex risk measure $\rho$ of the hedging P&L:

$$
\min_\theta\; \rho\!\left(C_T - \sum_{t=0}^{T-1}\delta_t \Delta S_{t+1} - \sum_t c(\delta_t)\right)
$$

where $C_T$ is the option payoff, $\Delta S_{t+1}$ is the asset move, and $c(\delta_t)$ are transaction costs. Using CVaR at level $\alpha$ as risk measure $\rho$ connects the framework to risk capital management.

### Gaussian Process Pricing

GP priors over the implied vol surface provide uncertainty quantification:

$$
\hat{\sigma}(K, T) \sim \mathcal{GP}\bigl(\mu(K,T),\; k\bigl((K,T),(K',T')\bigr)\bigr)
$$

The posterior mean gives a smoothed arbitrage-free surface; the posterior variance quantifies extrapolation uncertainty near the boundary of quoted strikes.

## Volatility Surface Interpolation with LSTMs

The vol surface evolves daily. An LSTM models the joint dynamics of the surface across tenors:

$$
h_t = \text{LSTM}(h_{t-1},\; \hat{\sigma}_t)
$$

$$
\hat{\sigma}_{t+1}(K, T) = W_{\text{out}}\,h_t + b
$$

where $\hat{\sigma}_t$ is a discretised grid of implied vols. PCA compression of the surface to 3–5 factors (level, slope, curvature) is common before feeding to the LSTM, reducing dimensionality from hundreds to a handful of state variables.

## Pricing Accuracy Comparison

```chart
{
  "type": "line",
  "xAxis": "strike",
  "data": [
    {"strike": "0.80", "BS": 4.2, "NN": 2.1, "GP": 1.8, "market": 0},
    {"strike": "0.85", "BS": 3.1, "NN": 1.4, "GP": 1.2, "market": 0},
    {"strike": "0.90", "BS": 2.0, "NN": 0.9, "GP": 0.8, "market": 0},
    {"strike": "0.95", "BS": 1.1, "NN": 0.5, "GP": 0.4, "market": 0},
    {"strike": "1.00", "BS": 0.3, "NN": 0.2, "GP": 0.2, "market": 0},
    {"strike": "1.05", "BS": 1.4, "NN": 0.6, "GP": 0.5, "market": 0},
    {"strike": "1.10", "BS": 2.8, "NN": 1.2, "GP": 1.0, "market": 0},
    {"strike": "1.15", "BS": 4.5, "NN": 1.9, "GP": 1.6, "market": 0},
    {"strike": "1.20", "BS": 6.3, "NN": 2.7, "GP": 2.3, "market": 0}
  ],
  "lines": [
    {"dataKey": "BS", "stroke": "#dc2626", "name": "Black-Scholes error (bps)"},
    {"dataKey": "NN", "stroke": "#3b82f6", "name": "Neural Net error (bps)"},
    {"dataKey": "GP", "stroke": "#10b981", "name": "GP error (bps)"}
  ]
}
```

*Absolute pricing error in basis points versus market mid, across moneyness (spot/strike), 3-month SPX options.*

## Python Implementation

```python
import numpy as np
import torch
import torch.nn as nn
from scipy.stats import norm

# ── Black-Scholes baseline ───────────────────────────────────────────────────
def bs_call(S: float, K: float, T: float, r: float, sigma: float) -> float:
    """Black-Scholes European call price."""
    if T <= 0 or sigma <= 0:
        return max(S - K * np.exp(-r * T), 0.0)
    d1 = (np.log(S / K) + (r + 0.5 * sigma**2) * T) / (sigma * np.sqrt(T))
    d2 = d1 - sigma * np.sqrt(T)
    return float(S * norm.cdf(d1) - K * np.exp(-r * T) * norm.cdf(d2))


# ── No-arbitrage neural network ──────────────────────────────────────────────
class ArbitrageFreePricer(nn.Module):
    """Feed-forward network with butterfly-spread regularisation."""

    def __init__(self, n_features: int = 6, hidden: int = 64) -> None:
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(n_features, hidden),
            nn.SiLU(),
            nn.Linear(hidden, hidden),
            nn.SiLU(),
            nn.Linear(hidden, hidden),
            nn.SiLU(),
            nn.Linear(hidden, 1),
            nn.Softplus(),  # guarantees non-negative price output
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.net(x).squeeze(-1)


def butterfly_penalty(
    model: ArbitrageFreePricer,
    S: torch.Tensor,
    strikes: torch.Tensor,
    T: torch.Tensor,
    r: torch.Tensor,
) -> torch.Tensor:
    """Penalise violations of butterfly spread non-negativity."""
    K1, K2, K3 = strikes[:, 0], strikes[:, 1], strikes[:, 2]
    lam = (K3 - K2) / (K3 - K1)

    def price(K: torch.Tensor) -> torch.Tensor:
        features = torch.stack([S, K, T, r, K / S, T.sqrt()], dim=-1)
        return model(features)

    spread = lam * price(K2) - price(K1) - (1 - lam) * price(K3)
    return torch.relu(-spread).pow(2).mean()


def train_step(
    model: ArbitrageFreePricer,
    optimizer: torch.optim.Optimizer,
    features: torch.Tensor,
    targets: torch.Tensor,
    butterfly_triples: torch.Tensor,
    arb_weight: float = 0.1,
) -> float:
    optimizer.zero_grad()
    preds = model(features)
    mse = nn.functional.mse_loss(preds, targets)
    # Unpack butterfly triples: (S, K1|K2|K3, T, r) shape [B, 4+3]
    S_b = butterfly_triples[:, 0]
    Ks = butterfly_triples[:, 1:4]
    T_b = butterfly_triples[:, 4]
    r_b = butterfly_triples[:, 5]
    arb = butterfly_penalty(model, S_b, Ks, T_b, r_b)
    loss = mse + arb_weight * arb
    loss.backward()
    optimizer.step()
    return float(loss)
```

## Key Results

**Buehler et al. (2019) — Deep Hedging**: Under realistic transaction costs and stochastic volatility, the deep hedging agent achieves 15–30% lower CVaR of hedging P&L versus Black-Scholes delta hedging. The gap grows with transaction cost magnitude.

**Horvath et al. (2021) — Rough vol surface fitting**: Neural networks calibrated to rough Bergomi model surfaces achieve < 1 bp pricing error across the entire SPX smile, reducing calibration time from minutes (classical optimisation) to milliseconds (neural network forward pass).

**Cohen et al. (2023) — No-arbitrage neural vol surface**: Enforcing static arbitrage constraints reduces extrapolation failures by over 80% compared to unconstrained networks in out-of-sample strike regions.

| Method | ATM error (bps) | Wing error (bps) | Calibration time |
|---|---|---|---|
| Black-Scholes | 0 (by construction) | 15–80 | instant |
| SVI parametric | 2–5 | 5–15 | 2–10 s |
| Neural network | 1–3 | 2–8 | < 10 ms |
| GP with no-arb | 1–4 | 2–10 | 50–200 ms |

## Limitations

**Data sparsity at wings**: Deep out-of-the-money options are illiquid; neural networks can overfit to noisy quotes and produce unreliable extrapolations beyond quoted strikes.

**Regime shifts**: A network trained on a low-vol regime will misprice in a vol spike. Online [[fine-tuning]] or regime-conditional networks are active research areas.

**Interpretability**: A neural pricer is a black box. Traders and risk managers require Greeks (delta, gamma, vega) which can be computed via automatic differentiation, but the network gives no economic intuition for why a particular price is quoted.

**Deep hedging simulation dependency**: The quality of the deep hedging strategy depends critically on the realism of the price simulator used during training — a variant of the simulator gap problem in [[deep-rl-execution]].

## Related Topics

[[black-scholes]] — foundational model whose limitations motivate ML pricing

generative-models-scenario — generative simulators for training deep hedging agents

[[temporal-fusion-transformer]] — multi-horizon vol forecasting feeding surface dynamics

[[llm-financial-analysis]] — [[llm]]-based analysis complementing quantitative pricing models
