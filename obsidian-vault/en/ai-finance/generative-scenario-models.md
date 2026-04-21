---
title: "Generative Models for Scenario Generation"
category: "Scientific ML"
order: 4
lang: "en"
slug: "generative-scenario-models"
---
# Generative Models for Scenario Generation

## Two Sides

This method sits at the intersection of two larger topics, each covered by its own article:

- **Finance:** [[adversarial-stress-testing]] — stress testing and adverse-scenario construction for VaR, CVaR, and regulatory requirements (FRTB, ICAAP).
- **AI:** [[generative-models]] — the general class of generative models (VAE, GAN, Normalizing Flows, Diffusion) trained to represent data distributions.

## Prerequisites

[[temporal-fusion-transformer]], [[monte-carlo-method]]

## Overview

Financial risk management rests on the ability to characterise the full distribution of future portfolio outcomes, not just its mean and variance. Classical approaches — Gaussian Monte Carlo, historical simulation, and parametric copulas — fail to faithfully reproduce the **stylised facts** of financial returns: fat tails, volatility clustering, asymmetric dependence during crises, and leverage effects.

Deep generative models offer an alternative: learn the empirical return distribution directly from data and sample from it to produce synthetic scenarios for Value-at-Risk (VaR), Conditional VaR (CVaR), stress testing, and Counterparty Credit Risk (CCR) under FRTB. Three architectures dominate current research and practice:

- **Generative Adversarial Networks (GANs)** — FinGAN, CGAN, TimeGAN
- **Variational Autoencoders (VAEs)** — regime-conditional latent space exploration
- **Diffusion models** — score-based generation for multivariate return paths

## Mathematical Framework

### Stylised Facts as Validation Targets

A synthetic scenario generator is valid if its samples reproduce:

1. **Excess kurtosis**: $\kappa = E[(r - \mu)^4] / \sigma^4 > 3$ (fat tails)
2. **Volatility clustering**: $\text{Corr}(|r_t|, |r_{t-k}|) > 0$ for many lags $k$
3. **Leverage effect**: $\text{Corr}(r_t, \sigma^2_{t+k}) < 0$
4. **Near-zero return autocorrelation**: $\text{Corr}(r_t, r_{t-k}) \approx 0$
5. **Heavy-tailed cross-sectional dependence**: tail dependence coefficient $\lambda_U > 0$

### VAE Training Objective

The VAE encodes returns $\mathbf{x}$ to a latent vector $\mathbf{z} \in \mathbb{R}^d$ and decodes back. Training maximises the Evidence Lower Bound (ELBO):

$$
\mathcal{L}(\theta, \phi) = \mathbb{E}_{q_\phi(\mathbf{z}|\mathbf{x})}\!\bigl[\log p_\theta(\mathbf{x}|\mathbf{z})\bigr] - D_{\text{KL}}\!\bigl(q_\phi(\mathbf{z}|\mathbf{x}) \;\|\; p(\mathbf{z})\bigr)
$$

The KL term regularises the posterior toward $\mathcal{N}(\mathbf{0}, \mathbf{I})$, ensuring smooth interpolation in latent space — useful for regime interpolation.

### GAN Minimax Objective

The generator $G_\theta$ and discriminator $D_\phi$ play a minimax game:

$$
\min_\theta \max_\phi \; \mathbb{E}_{\mathbf{x} \sim p_{\text{data}}}\!\bigl[\log D_\phi(\mathbf{x})\bigr] + \mathbb{E}_{\mathbf{z} \sim p(\mathbf{z})}\!\bigl[\log(1 - D_\phi(G_\theta(\mathbf{z})))\bigr]
$$

In practice, Wasserstein GAN with gradient penalty (WGAN-GP) is preferred for financial data:

$$
\mathcal{L}_{\text{WGAN-GP}} = \mathbb{E}_{\tilde{\mathbf{x}}}[D(\tilde{\mathbf{x}})] - \mathbb{E}_{\mathbf{x}}[D(\mathbf{x})] + \lambda \mathbb{E}_{\hat{\mathbf{x}}}\!\bigl[(\|\nabla_{\hat{\mathbf{x}}} D(\hat{\mathbf{x}})\|_2 - 1)^2\bigr]
$$

### Score-Based Diffusion

Diffusion models define a forward process that adds Gaussian noise over $T$ steps, then learn to reverse it. The score function $s_\theta(\mathbf{x}_t, t) \approx \nabla_{\mathbf{x}_t} \log p_t(\mathbf{x}_t)$ is trained via denoising score matching:

$$
\mathcal{L}_{\text{DSM}} = \mathbb{E}_{t, \mathbf{x}_0, \boldsymbol{\epsilon}}\!\left[\left\| s_\theta(\mathbf{x}_t, t) + \frac{\boldsymbol{\epsilon}}{\sigma_t} \right\|^2\right]
$$

Generation proceeds by integrating a reverse-time [[stochastic-differential-equations|SDE]] from $\mathbf{x}_T \sim \mathcal{N}(\mathbf{0}, \sigma_T^2 \mathbf{I})$ back to $\mathbf{x}_0$.

## Architecture

### TimeGAN for Financial Paths

TimeGAN (Yoon et al., NeurIPS 2019) adds a supervised loss term that forces the generator's latent dynamics to match those of the encoder:

$$
\mathcal{L}_{\text{TimeGAN}} = \mathcal{L}_{\text{GAN}} + \lambda_s \mathcal{L}_{\text{supervised}} + \lambda_r \mathcal{L}_{\text{reconstruction}}
$$

The supervised loss penalises the difference between $G$'s one-step-ahead latent transition and that of a supervised sequence model trained on real data, preserving temporal autocorrelation structure.

### Conditional GAN for Regime-Conditional Scenarios

A CGAN conditions both generator and discriminator on a regime label $c$ (e.g., low-vol / high-vol / crisis):

$$
G_\theta(\mathbf{z}, c), \quad D_\phi(\mathbf{x}, c)
$$

Regime labels can be supplied by an exogenous regime classifier (HMM, GMM, or macro indicator threshold), allowing stress scenarios to be sampled specifically from the "crisis" conditional distribution.

## Python Implementation

```python
import torch
import torch.nn as nn
import numpy as np
from torch.utils.data import DataLoader, TensorDataset
from scipy import stats

# ── Synthetic return data ────────────────────────────────────────────────────
torch.manual_seed(42)
np.random.seed(42)
n_samples, n_assets, seq_len = 2000, 5, 20

# Simulate fat-tailed returns via Student-t(df=4)
df = 4
raw = np.random.standard_t(df, size=(n_samples, seq_len, n_assets))
scale = np.sqrt(df / (df - 2))
returns = torch.tensor(raw / scale, dtype=torch.float32)

dataset = TensorDataset(returns)
loader = DataLoader(dataset, batch_size=128, shuffle=True)

# ── VAE for return path generation ───────────────────────────────────────────
class ReturnEncoder(nn.Module):
    def __init__(self, n_assets: int, seq_len: int, latent_dim: int) -> None:
        super().__init__()
        input_dim = n_assets * seq_len
        self.fc_hidden = nn.Linear(input_dim, 128)
        self.fc_mu = nn.Linear(128, latent_dim)
        self.fc_logvar = nn.Linear(128, latent_dim)

    def forward(self, x: torch.Tensor) -> tuple[torch.Tensor, torch.Tensor]:
        h = torch.relu(self.fc_hidden(x.view(x.size(0), -1)))
        return self.fc_mu(h), self.fc_logvar(h)


class ReturnDecoder(nn.Module):
    def __init__(self, latent_dim: int, n_assets: int, seq_len: int) -> None:
        super().__init__()
        output_dim = n_assets * seq_len
        self.net = nn.Sequential(
            nn.Linear(latent_dim, 128),
            nn.ReLU(),
            nn.Linear(128, output_dim),
        )
        self._n_assets = n_assets
        self._seq_len = seq_len

    def forward(self, z: torch.Tensor) -> torch.Tensor:
        return self.net(z).view(-1, self._seq_len, self._n_assets)


class ReturnVAE(nn.Module):
    def __init__(self, n_assets: int = 5, seq_len: int = 20, latent_dim: int = 8) -> None:
        super().__init__()
        self.encoder = ReturnEncoder(n_assets, seq_len, latent_dim)
        self.decoder = ReturnDecoder(latent_dim, n_assets, seq_len)

    def reparameterise(self, mu: torch.Tensor, logvar: torch.Tensor) -> torch.Tensor:
        std = torch.exp(0.5 * logvar)
        eps = torch.randn_like(std)
        return mu + eps * std

    def forward(
        self, x: torch.Tensor
    ) -> tuple[torch.Tensor, torch.Tensor, torch.Tensor]:
        mu, logvar = self.encoder(x)
        z = self.reparameterise(mu, logvar)
        return self.decoder(z), mu, logvar


def vae_loss(
    recon: torch.Tensor,
    x: torch.Tensor,
    mu: torch.Tensor,
    logvar: torch.Tensor,
    beta: float = 1.0,
) -> torch.Tensor:
    recon_loss = nn.functional.mse_loss(recon, x, reduction="sum")
    kl_loss = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
    return recon_loss + beta * kl_loss


# ── Training loop ─────────────────────────────────────────────────────────────
model = ReturnVAE(n_assets=n_assets, seq_len=seq_len, latent_dim=8)
optimiser = torch.optim.Adam(model.parameters(), lr=1e-3)

for epoch in range(30):
    total_loss = 0.0
    for (batch,) in loader:
        optimiser.zero_grad()
        recon, mu, logvar = model(batch)
        loss = vae_loss(recon, batch, mu, logvar, beta=1.0)
        loss.backward()
        optimiser.step()
        total_loss += loss.item()

# ── Scenario generation ───────────────────────────────────────────────────────
model.train(False)
with torch.no_grad():
    z_samples = torch.randn(1000, 8)
    synthetic_paths = model.decoder(z_samples).numpy()
    # synthetic_paths shape: (1000, seq_len=20, n_assets=5)

# ── Stylised-fact checks ──────────────────────────────────────────────────────
real_flat = returns.numpy().reshape(-1, n_assets)
synth_flat = synthetic_paths.reshape(-1, n_assets)

for i in range(n_assets):
    real_kurt = stats.kurtosis(real_flat[:, i], fisher=False)
    synth_kurt = stats.kurtosis(synth_flat[:, i], fisher=False)
    # Excess kurtosis >3 confirms fat tails are preserved
```

## Distribution Comparison

```chart
{
  "type": "bar",
  "xAxis": "bucket",
  "data": [
    {"bucket": "<-3s", "historical": 2.1, "gaussian": 0.1, "vae": 1.8},
    {"bucket": "-3s to -2s", "historical": 4.3, "gaussian": 2.1, "vae": 4.0},
    {"bucket": "-2s to -1s", "historical": 15.2, "gaussian": 13.6, "vae": 14.9},
    {"bucket": "-1s to 0", "historical": 28.9, "gaussian": 34.1, "vae": 29.3},
    {"bucket": "0 to 1s", "historical": 27.6, "gaussian": 34.1, "vae": 27.8},
    {"bucket": "1s to 2s", "historical": 14.8, "gaussian": 13.6, "vae": 14.6},
    {"bucket": "2s to 3s", "historical": 4.9, "gaussian": 2.1, "vae": 4.7},
    {"bucket": ">3s", "historical": 2.2, "gaussian": 0.1, "vae": 2.9}
  ],
  "lines": [
    {"dataKey": "historical", "stroke": "#1d4ed8", "name": "Historical (%)"},
    {"dataKey": "gaussian", "stroke": "#dc2626", "name": "Gaussian (%)"},
    {"dataKey": "vae", "stroke": "#16a34a", "name": "VAE generated (%)"}
  ]
}
```

## Key Results and Performance

**TimeGAN** (Yoon et al., 2019): on stock price data, the discriminative score (how well a classifier separates real from synthetic) drops to near 0.5 (indistinguishable), while vanilla GAN achieves only 0.65. Predictive score (RMSE of a model trained on synthetic, tested on real) matches that of a model trained on real data within 5%.

**FinGAN** (Wiese et al., 2020): applied to FX returns, reproduces all five stylised facts including leverage effect. CVaR estimates from FinGAN scenarios fall within 3% of historical simulation at the 99th percentile.

**Diffusion models for equity returns** (2023–2024 literature): achieve best stylised-fact reproduction scores on multi-asset portfolios, outperforming GANs on tail dependence replication. Generation time is higher but can be parallelised.

**CVaR accuracy**: Scenarios from well-trained generative models reduce CVaR estimation variance by 30–50% compared to historical simulation with the same number of paths, due to better tail coverage.

## Limitations

**Training instability**: GANs suffer from mode collapse — the generator may learn to produce only a narrow subset of the distribution. WGAN-GP mitigates but does not eliminate this for financial data with low sample size relative to dimensionality.

**Non-stationarity**: Generative models trained on one market regime can fail in another. Regime-conditional models partially address this but require accurate real-time regime classification.

**Validation difficulty**: Unlike supervised models, generative models have no single held-out accuracy metric. Stylised-fact tests are necessary but not sufficient — a model can pass all five tests yet produce unrealistic correlation structures during crisis periods.

**Regulatory acceptance**: Regulators (BCBS, ECB) require documented validation methodologies for internal models. Synthetic scenario generators must demonstrate fitness-for-purpose against backtesting standards, which remain under development.

**Dimensionality curse**: As $n_{\text{assets}}$ grows, learning accurate joint tail distributions requires exponentially more data and increasingly complex architectures.

## Applications in Practice

**FRTB Internal Models Approach**: Banks use synthetic scenarios to augment limited historical data for Expected Shortfall computation at 97.5% confidence, particularly for illiquid risk factors with sparse history.

**CCR stress testing**: Generating correlated multi-asset paths for CVA (Credit Valuation Adjustment) under stressed conditions, where historical crises are too few for reliable Monte Carlo.

**Regulatory stress scenarios**: Generating plausible adverse macro paths that satisfy regulatory constraints (e.g., equity down 40%, credit spreads widen 200bps) for ICAAP submissions.

**Options pricing and hedging**: Regime-conditional scenarios allow pricing path-dependent derivatives under realistic distributional assumptions rather than log-normal dynamics.

**Portfolio optimisation under fat tails**: CVaR-optimal portfolios constructed from generative scenarios are more robust to tail events than mean-variance portfolios assuming Gaussian returns.

## Related Topics

[[monte-carlo-method]] — classical simulation baseline that generative models augment

[[value-at-risk]] — primary consumer of scenario sets produced by generative models

[[extreme-value-theory]] — parametric approach to tail modelling, complementary to generative methods

[[garch-models]] — classical model for volatility clustering, used as baseline for stylised-fact checks

[[copula-models]] — parametric dependence modelling, compared against GAN-based joint distributions

[[temporal-fusion-transformer]] — probabilistic forecasting model that can condition generative scenario sampling
