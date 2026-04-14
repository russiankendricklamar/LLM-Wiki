---
title: "Convolutional Volatility Resolution Clustering (CVRC)"
category: "Algorithms and ML"
order: 73
lang: "en"
slug: "convolutional-volatility-resolution-clustering"
---
# Convolutional Volatility Resolution Clustering (CVRC)

**Convolutional Volatility Resolution Clustering (CVRC)** is a deep learning approach that leverages Convolutional Neural Networks (CNNs) to extract multi-resolution spatial features from volatility surfaces. By treating the time-frequency representation of volatility as a "volatility map" (image), CVRC identifies latent regime clusters through unsupervised learning, enabling more robust tail-risk estimation and adaptive trading strategies.

## Prerequisites

[[spectral-analysis]], [[wavelet-transform]], [[garch-models]]

## Overview & Background

Classical volatility regime detection uses threshold-based methods: rolling standard deviation above/below a fixed level, GARCH state-space models, or Hidden Markov Models with 2–3 discrete states. These approaches assume a fixed parametric structure for regime transitions and cannot capture the rich multi-scale texture of real volatility surfaces.

CVRC is motivated by the analogy between volatility surfaces and images. A volatility surface $V(k, \tau)$ (as a function of log-moneyness $k$ and maturity $\tau$) is a two-dimensional object whose local structure — steep smiles, flat term structures, inverted surfaces — contains rich information about market regime. CNNs, which were developed precisely for learning hierarchical spatial features in images, are a natural tool for decomposing this structure.

The approach draws on developments in self-supervised representation learning (autoencoders, contrastive learning) and deep clustering (Deep Embedding Clustering, DEC) to map the high-dimensional volatility surface into a low-dimensional regime manifold without requiring labeled training data.

## Mathematical Framework

### Volatility Surface as an Image

Define the discretized volatility surface at time $t$ as a matrix $V_t \in \mathbb{R}^{M \times N}$ where:
- Rows index $M$ log-moneyness values $k_1 < \cdots < k_M$
- Columns index $N$ maturities $\tau_1 < \cdots < \tau_N$

Entry $V_t(m, n) = \sigma_{impl}(k_m, \tau_n, t)$ is the Black-Scholes implied volatility.

### Convolutional Feature Extraction

The convolution operation on volatility map $V$ with filter $K$ is:

$$
y_{i,j} = \sigma_{act} \left( \sum_{m=0}^{F-1} \sum_{n=0}^{F-1} V_{i+m, j+n} \cdot K_{m,n} + b \right)
$$

where:
- $V$ is the input volatility surface (Time $\times$ Frequency or Moneyness $\times$ Maturity)
- $K \in \mathbb{R}^{F \times F}$ is a learnable filter capturing specific volatility patterns
- $\sigma_{act}$ is a non-linear activation (ReLU, GELU)
- $b$ is a bias term

By stacking $L$ convolutional layers with increasing receptive fields, the network learns a hierarchy:
- **Layer 1**: Local features — sharp spikes, gentle smiles at a single maturity
- **Layer 2**: Medium-range features — smile term structure shape, vol-of-vol clustering
- **Layer 3**: Global features — entire surface topology (inverted vs. normal vs. crisis)

### Variational Autoencoder Bottleneck

After convolutional encoding, a **Variational Autoencoder (VAE)** compresses the feature map into a low-dimensional latent space $z \in \mathbb{R}^d$ ($d \approx 8$–$16$):

$$
q_\phi(z | V) = \mathcal{N}(\mu_\phi(V), \text{diag}(\sigma_\phi^2(V)))
$$

The VAE objective (ELBO):

$$
\mathcal{L}_{VAE} = \mathbb{E}_{q_\phi}[\ln p_\theta(V | z)] - D_{KL}(q_\phi(z|V) \| p(z))
$$

This forces the latent space to be smooth and continuous — nearby points in $z$-space correspond to similar volatility regimes.

### Deep Embedding Clustering (DEC)

With trained encoder $q_\phi$, cluster assignments $\{c_1, \dots, c_K\}$ are learned by jointly optimizing encoder and cluster centers $\{\mu_k\}$:

$$
s_{ik} = \frac{(1 + \|z_i - \mu_k\|^2 / \nu)^{-\frac{\nu+1}{2}}}{\sum_j (1 + \|z_i - \mu_j\|^2 / \nu)^{-\frac{\nu+1}{2}}}
$$

This is a Student-$t$ kernel soft assignment. The target distribution sharpens assignments:

$$
p_{ik} = \frac{s_{ik}^2 / \sum_i s_{ik}}{\sum_k s_{ik}^2 / \sum_i s_{ik}}
$$

The cluster loss $\mathcal{L}_{cluster} = D_{KL}(P \| S)$ drives the model to commit to confident cluster assignments.

## Volatility Regime Clusters

Once features are extracted, CVRC identifies distinct **volatility resolution clusters**:

1. **Low-Frequency Equilibrium**: Dominant long-term stability with minimal high-frequency noise. Flat smile, gently upward-sloping term structure.
2. **Transient Turbulence**: High-frequency energy bursts with rapid mean-reversion. Steep short-dated smile, inverted term structure.
3. **Structural Contagion**: Multi-scale energy amplification indicating systemic risk. Extremely steep smile across all maturities, smile broadening.

## Key Properties

- **Unsupervised**: No labeled regime data required; clusters emerge from the geometry of the volatility surface.
- **Multi-scale**: Convolutional layers simultaneously capture local (single-maturity) and global (full-surface) features.
- **Interpretable latent space**: VAE ensures smooth manifold; interpolating between cluster centers reveals regime transition paths.
- **Online updating**: The encoder can be updated incrementally as new volatility surfaces arrive.

## Python Implementation

```python
import torch
import torch.nn as nn
import numpy as np

class VolatilityEncoder(nn.Module):
    """CNN encoder for volatility surfaces."""
    def __init__(self, latent_dim: int = 16):
        super().__init__()
        self.conv_layers = nn.Sequential(
            nn.Conv2d(1, 16, kernel_size=3, padding=1),
            nn.BatchNorm2d(16),
            nn.GELU(),
            nn.MaxPool2d(2),
            nn.Conv2d(16, 32, kernel_size=3, padding=1),
            nn.BatchNorm2d(32),
            nn.GELU(),
            nn.MaxPool2d(2),
            nn.Conv2d(32, 64, kernel_size=3, padding=1),
            nn.GELU(),
        )
        self.fc_mu = nn.Linear(64 * 4 * 4, latent_dim)
        self.fc_logvar = nn.Linear(64 * 4 * 4, latent_dim)

    def forward(self, x: torch.Tensor) -> tuple:
        h = self.conv_layers(x)
        h = h.view(h.size(0), -1)
        return self.fc_mu(h), self.fc_logvar(h)

class VolatilityDecoder(nn.Module):
    """CNN decoder for volatility surface reconstruction."""
    def __init__(self, latent_dim: int = 16):
        super().__init__()
        self.fc = nn.Linear(latent_dim, 64 * 4 * 4)
        self.deconv_layers = nn.Sequential(
            nn.ConvTranspose2d(64, 32, kernel_size=4, stride=2, padding=1),
            nn.GELU(),
            nn.ConvTranspose2d(32, 16, kernel_size=4, stride=2, padding=1),
            nn.GELU(),
            nn.ConvTranspose2d(16, 1, kernel_size=3, padding=1),
            nn.Softplus()  # Ensure positive volatility output
        )

    def forward(self, z: torch.Tensor) -> torch.Tensor:
        h = self.fc(z).view(-1, 64, 4, 4)
        return self.deconv_layers(h)

def vae_loss(recon: torch.Tensor, target: torch.Tensor,
             mu: torch.Tensor, logvar: torch.Tensor,
             beta: float = 1.0) -> torch.Tensor:
    """Beta-VAE ELBO loss."""
    recon_loss = nn.functional.mse_loss(recon, target, reduction='sum')
    kl_loss = -0.5 * torch.sum(1 + logvar - mu.pow(2) - logvar.exp())
    return recon_loss + beta * kl_loss

def cluster_soft_assignment(z: torch.Tensor, centroids: torch.Tensor,
                             nu: float = 1.0) -> torch.Tensor:
    """Student-t kernel soft assignment for DEC clustering."""
    dists = torch.cdist(z, centroids)
    q = (1 + dists.pow(2) / nu).pow(-(nu + 1) / 2)
    return q / q.sum(dim=1, keepdim=True)

# Conceptual usage
encoder = VolatilityEncoder(latent_dim=16)
decoder = VolatilityDecoder(latent_dim=16)

# vol_surface: (batch, 1, 16, 16) — 16 moneyness × 16 maturity grid
vol_surface = torch.randn(32, 1, 16, 16).abs() * 0.05 + 0.20
mu, logvar = encoder(vol_surface)
z = mu + torch.exp(0.5 * logvar) * torch.randn_like(logvar)
recon = decoder(z)
loss = vae_loss(recon, vol_surface, mu, logvar, beta=0.5)
```

## Regime Cluster Characteristics

```chart
{
  "type": "bar",
  "xAxis": "cluster",
  "data": [
    {"cluster": "Equilibrium", "avg_vol": 18, "skew": 2, "term_slope": 3},
    {"cluster": "Turbulence", "avg_vol": 28, "skew": 8, "term_slope": -5},
    {"cluster": "Contagion", "avg_vol": 45, "skew": 15, "term_slope": -12}
  ],
  "bars": [
    {"dataKey": "avg_vol", "fill": "#3b82f6", "name": "Avg ATM Vol (%)"},
    {"dataKey": "skew", "fill": "#ef4444", "name": "25d Risk Reversal"},
    {"dataKey": "term_slope", "fill": "#10b981", "name": "1m-1y Term Slope"}
  ]
}
```

## Parameter Table

| Symbol | Name | Description | Typical Range |
|:---|:---:|:---|:---|
| $d$ | Latent dimension | Size of regime embedding vector | 8 – 32 |
| $K$ | Number of clusters | Distinct volatility regimes | 3 – 8 |
| $\beta$ | KL weight | Beta-VAE regularization strength | 0.1 – 4.0 |
| $F$ | Filter size | CNN kernel size | 3 × 3 to 7 × 7 |
| $L$ | Encoder depth | Number of convolutional layers | 3 – 6 |
| $\nu$ | Student-t degrees | Cluster assignment kernel width | 1.0 – 5.0 |

## Limitations & Extensions

**Limitations:**
- **Data requirements**: Training requires a long history of daily volatility surfaces; sparse histories in emerging markets limit applicability.
- **Interpretability**: Deep network clusters may be statistically coherent but economically difficult to label.
- **Non-stationarity**: Regime boundaries shift over time; periodic retraining or online learning is required.
- **Overfitting**: With small datasets, the VAE may memorize surfaces rather than learning general structure.

**Extensions:**
- **Temporal CNN (TCN)**: Adds temporal convolutions to model how regimes evolve over time.
- **Graph neural networks**: Model the option surface as a graph where nodes are (strike, maturity) pairs connected by no-arbitrage constraints.
- **Adversarial regime generation**: Use [[gan]] to generate synthetic stressed surfaces within identified cluster boundaries for stress testing.

## Practical Applications

1. **Regime-Adaptive Trading**: Automatically switch between mean-reversion and momentum strategies based on detected volatility regime.
2. **Adaptive Denoising**: Use the CNN's learned filters to isolate "signal" from "noise" based on the current resolution cluster.
3. **Non-Stationary Risk Modeling**: Build more accurate stress-testing scenarios by sampling from specific volatility regime clusters.
4. **Exotic Options Pricing**: Regime-conditional local volatility models improve barrier option pricing during surface dislocations.
5. **Vol Surface Imputation**: The VAE decoder reconstructs missing strikes/maturities on incomplete observed surfaces.

## Related Topics
- [[wavelet-transform]]
- [[volatility-forecasting]]
- [[gan]]
- [[volatility-modulated-spectral-surface]]
- [[arch-models]]
