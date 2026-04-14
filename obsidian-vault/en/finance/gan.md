---
title: "GANs in Finance"
category: "Algorithms and ML"
order: 74
lang: "en"
---
# Generative Adversarial Networks (GANs)

**Generative Adversarial Networks (GANs)** are a class of machine learning frameworks designed by Ian Goodfellow and colleagues in 2014. In quantitative finance, GANs have emerged as a powerful tool for generating high-fidelity synthetic financial time series — crucial for backtesting strategies when historical data is scarce, for stress-testing tail scenarios, and for training reinforcement learning agents in simulated market environments.

## Background

Financial data has a fundamental scarcity problem: a single market regime may last years, giving only a handful of independent observations. GANs address this by learning the full joint distribution of the data — including temporal autocorrelation structure, fat tails, and volatility clustering — and then sampling from it to produce unlimited synthetic paths that are statistically indistinguishable from history.

## GAN Architecture

A GAN consists of two neural networks competing in a zero-sum game:

1. **The Generator ($G$)**: Takes random noise $z \sim p_z(z)$ as input and maps it to a structured output (e.g., a multivariate return series). Its goal is to fool the Discriminator.
2. **The Discriminator ($D$)**: Takes either real historical data or Generator output and outputs the probability that the input is real. Its goal is to correctly classify real vs. synthetic.

At Nash equilibrium, $G$ has learned the true data distribution $p_{\text{data}}$ and $D$ outputs $1/2$ everywhere — it can no longer distinguish real from fake.

## Mathematical Concept: Minimax Game

Training a GAN is modelled as finding a Nash equilibrium for the value function $V(D, G)$:

$$
\min_G \max_D V(D, G) = \mathbb{E}_{x \sim p_{\text{data}}(x)}[\log D(x)] + \mathbb{E}_{z \sim p_z(z)}[\log(1 - D(G(z)))]
$$

Where:
- $D(x)$ is the probability that $x$ came from the real data distribution.
- $G(z)$ is the sample generated from noise $z$.

At the optimal discriminator $D^*_G(x) = \frac{p_{\text{data}}(x)}{p_{\text{data}}(x) + p_g(x)}$, the generator objective reduces to minimising the Jensen-Shannon divergence between $p_{\text{data}}$ and $p_g$.

## Stylised Facts the GAN Must Capture

For a financial GAN to be useful, the synthetic series must reproduce:
- **Fat tails**: Kurtosis significantly above 3 in daily returns.
- **Volatility clustering**: Large moves tend to follow large moves (GARCH-like autocorrelation in $|r_t|$).
- **Leverage effect**: Negative correlation between returns and future volatility ($\rho(r_t, \sigma_{t+1}) < 0$).
- **Cross-asset dependencies**: Correlation structure including tail dependence.
- **Absence of linear autocorrelation**: Daily returns are near-uncorrelated.

Verification uses statistical tests: Kolmogorov-Smirnov for marginals, Ljung-Box for autocorrelation, and visual inspection of quantile-quantile plots.

## Python: Conceptual Training Loop

```python
import torch
import torch.nn as nn
import numpy as np

class Generator(nn.Module):
    def __init__(self, noise_dim: int, seq_len: int, n_features: int):
        super().__init__()
        self.net = nn.Sequential(
            nn.Linear(noise_dim, 128),
            nn.ReLU(),
            nn.Linear(128, 256),
            nn.ReLU(),
            nn.Linear(256, seq_len * n_features),
        )
        self.seq_len = seq_len
        self.n_features = n_features

    def forward(self, z: torch.Tensor) -> torch.Tensor:
        return self.net(z).view(-1, self.seq_len, self.n_features)


class Discriminator(nn.Module):
    def __init__(self, seq_len: int, n_features: int):
        super().__init__()
        self.net = nn.Sequential(
            nn.Flatten(),
            nn.Linear(seq_len * n_features, 256),
            nn.LeakyReLU(0.2),
            nn.Linear(256, 128),
            nn.LeakyReLU(0.2),
            nn.Linear(128, 1),
            nn.Sigmoid(),
        )

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        return self.net(x)


def train_financial_gan(
    real_data: np.ndarray,
    noise_dim: int = 32,
    n_epochs: int = 500,
    batch_size: int = 64,
    lr: float = 2e-4,
):
    """
    real_data: shape (N, seq_len, n_features) — normalised return windows
    """
    _, seq_len, n_features = real_data.shape
    device = torch.device("cpu")

    G = Generator(noise_dim, seq_len, n_features).to(device)
    D = Discriminator(seq_len, n_features).to(device)
    opt_G = torch.optim.Adam(G.parameters(), lr=lr, betas=(0.5, 0.999))
    opt_D = torch.optim.Adam(D.parameters(), lr=lr, betas=(0.5, 0.999))
    criterion = nn.BCELoss()

    data_tensor = torch.tensor(real_data, dtype=torch.float32)

    for epoch in range(n_epochs):
        # Sample real batch
        idx = np.random.randint(0, len(data_tensor), batch_size)
        real_batch = data_tensor[idx].to(device)

        # --- Train Discriminator ---
        z = torch.randn(batch_size, noise_dim, device=device)
        fake_batch = G(z).detach()
        loss_D = criterion(D(real_batch), torch.ones(batch_size, 1, device=device)) + \
                 criterion(D(fake_batch), torch.zeros(batch_size, 1, device=device))
        opt_D.zero_grad(); loss_D.backward(); opt_D.step()

        # --- Train Generator ---
        z = torch.randn(batch_size, noise_dim, device=device)
        loss_G = criterion(D(G(z)), torch.ones(batch_size, 1, device=device))
        opt_G.zero_grad(); loss_G.backward(); opt_G.step()

        if (epoch + 1) % 100 == 0:
            print(f"Epoch {epoch+1}: D_loss={loss_D.item():.4f}, G_loss={loss_G.item():.4f}")

    return G, D
```

## Visualization: Real vs. Synthetic Paths

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "1", "real": 100, "fake": 100.2},
    {"time": "2", "real": 101.5, "fake": 101.1},
    {"time": "3", "real": 100.8, "fake": 101.4},
    {"time": "4", "real": 102.3, "fake": 102.0},
    {"time": "5", "real": 101.9, "fake": 102.5},
    {"time": "6", "real": 103.1, "fake": 102.8},
    {"time": "7", "real": 102.4, "fake": 103.2},
    {"time": "8", "real": 104.0, "fake": 103.7}
  ],
  "lines": [
    {"dataKey": "real", "stroke": "#3b82f6", "name": "Historical Data"},
    {"dataKey": "fake", "stroke": "#ef4444", "name": "GAN Synthetic", "strokeDasharray": "5 5"}
  ]
}
```

## Key Variants for Finance

| Variant | Key Innovation | Finance Use Case |
|---------|---------------|-----------------|
| **TimeGAN** | Supervised loss for temporal dynamics | Faithful autocorrelation replication |
| **WGAN** | Wasserstein distance, no mode collapse | Stable training on small datasets |
| **CGAN** | Conditional on regime/factor | "Generate a crisis scenario" |
| **FinGAN** | Market microstructure constraints | LOB data generation |
| **CTGAN** | Tabular data with mixed types | Risk factor generation |

## Parameter Reference

| Symbol | Name | Description | Typical Value |
|--------|------|-------------|---------------|
| $z$ | Latent noise | Input to generator | $\mathcal{N}(0, I_{d})$, $d=32$–$128$ |
| `seq_len` | Sequence length | Length of generated return series | 20–252 bars |
| `n_epochs` | Training epochs | Generator/discriminator update rounds | 500–5000 |
| `lr` | Learning rate | Adam optimizer step size | $1$–$4 \times 10^{-4}$ |

## Limitations and Extensions

- **Mode collapse**: The generator may learn to produce a limited variety of outputs (e.g., only calm-market paths). WGAN and spectral normalization mitigate this.
- **Training instability**: The minimax objective is a saddle-point problem; gradient updates can oscillate. Techniques: progressive growing, gradient penalty, spectral norm.
- **Evaluation difficulty**: Unlike supervised models, there is no scalar loss to track; evaluation requires battery of statistical tests on generated data.
- **Data requirements**: Standard GANs need thousands of samples; financial data (especially crisis episodes) is scarce. Transfer learning and physics-informed priors can compensate.
- **Distributional shift**: A GAN trained on pre-2020 data will not generate COVID-style volatility spikes without explicit conditioning or retraining.

## Applications in Quant Finance

1. **Synthetic time series generation**: Create thousands of alternative market scenarios to train RL agents or validate trading strategies without overfitting to a single historical path.
2. **Data augmentation**: Enhance datasets for rare events (e.g., generating variations of the 2008 crash or 2020 COVID-19 volatility spikes).
3. **Risk management (VaR/ES)**: Use GANs to generate realistic fat tails and non-linear dependencies that traditional parametric models often miss.
4. **Missing data imputation**: Reconstruct gaps in historical limit order books or price feeds.
5. **Privacy-preserving analytics**: Share synthetic datasets that match statistical properties of proprietary data without leaking client information.

## Related Topics
- [[monte-carlo-method]]
- [[value-at-risk]]
- [[fraud-detection]]
- [[heston-model]]
