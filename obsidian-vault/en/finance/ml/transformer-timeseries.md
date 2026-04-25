---
slug: "/finance/transformer-timeseries"
title: "Transformers for Time Series"
category: "Algorithms and ML"
order: 106
lang: "en"
---

# Transformers for Time Series

**Transformers** — the self-[[attention-mechanisms|attention]] architecture from Vaswani et al. (2017) — have become the dominant approach for financial time-series forecasting, capturing long-range dependencies and cross-asset patterns that LSTMs and classical models miss.

## Self-[[attention-mechanisms|Attention]] Mechanism

For a sequence of embeddings $\mathbf{X} = [x_1, \ldots, x_L]$:

$$
\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right) V
$$

Projections: $Q = XW_Q$, $K = XW_K$, $V = XW_V$. Each time step attends to all others — no exponential decay as in RNNs.

## Key Architectures

### Temporal Fusion [[transformer-architecture|Transformer]] (TFT, Lim et al. 2021)
- **Gate Residual Networks** — adaptive depth
- **Variable Selection**: per-feature importance weights
- **Temporal Self-Attention**: quantile probabilistic outputs (10/50/90th percentile)

### Informer (Zhou et al. 2021)
ProbSparse Attention reduces $O(L^2)$ to $O(L \log L)$:

$$
\hat{A}(Q, K, V) = \text{softmax}\!\left(\frac{\bar{Q}K^\top}{\sqrt{d_k}}\right) V
$$

Only $\ln L$ dominant queries; the rest are averaged.

### PatchTST (Nie et al. 2023)
Splits the series into non-overlapping patches (like ViT): $\text{patches} = [x_{1:P}, x_{P+1:2P}, \ldots]$. SOTA on most benchmarks with $16 \leq P \leq 64$.

## Implementation

```python
import torch
import torch.nn as nn
import numpy as np

class GatedResidualNetwork(nn.Module):
    def __init__(self, d: int, dropout: float = 0.1):
        super().__init__()
        self.fc1   = nn.Linear(d, d)
        self.fc2   = nn.Linear(d, d)
        self.gate  = nn.Linear(d, d)
        self.norm  = nn.LayerNorm(d)
        self.drop  = nn.Dropout(dropout)
        self.elu   = nn.ELU()

    def forward(self, x):
        h = self.elu(self.fc1(x))
        h = self.drop(self.fc2(h))
        g = torch.sigmoid(self.gate(x))
        return self.norm(x + g * h)


class TemporalSelfAttention(nn.Module):
    def __init__(self, d_model: int, n_heads: int, dropout: float = 0.1):
        super().__init__()
        self.attn = nn.MultiheadAttention(d_model, n_heads,
                                           dropout=dropout, batch_first=True)
        self.norm = nn.LayerNorm(d_model)

    def forward(self, x, mask=None):
        out, _ = self.attn(x, x, x, attn_mask=mask)
        return self.norm(x + out)


class SimpleTFT(nn.Module):
    """Simplified TFT for single-step prediction."""
    def __init__(self, n_features: int, d_model: int = 64,
                 n_heads: int = 4, n_layers: int = 2,
                 dropout: float = 0.1):
        super().__init__()
        self.embed = nn.Linear(n_features, d_model)
        self.grns  = nn.ModuleList([
            GatedResidualNetwork(d_model, dropout) for _ in range(n_layers)
        ])
        self.attn  = TemporalSelfAttention(d_model, n_heads, dropout)
        self.out   = nn.Linear(d_model, 1)

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        """x: (batch, seq_len, n_features)"""
        h = self.embed(x)
        for grn in self.grns:
            h = grn(h)
        h = self.attn(h)
        return self.out(h[:, -1, :]).squeeze(-1)


def train_tft(model: nn.Module, X_train: np.ndarray, y_train: np.ndarray,
              n_epochs: int = 50, lr: float = 1e-3) -> list[float]:
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = model.to(device)
    opt = torch.optim.Adam(model.parameters(), lr=lr)
    X_t = torch.tensor(X_train, dtype=torch.float32, device=device)
    y_t = torch.tensor(y_train, dtype=torch.float32, device=device)
    losses = []
    for _ in range(n_epochs):
        model.train()
        opt.zero_grad()
        loss = nn.MSELoss()(model(X_t), y_t)
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        opt.step()
        losses.append(loss.item())
    return losses
```

## Practical Advice

- **Positional encoding**: for irregular (tick) data use temporal embeddings instead of sinusoidal
- **Normalization**: normalize per-window, not globally (data leakage)
- **Lookback**: 60–252 days for daily; 30–100 bars for HF data
- **Gradient clipping**: required for stable training

## Related Articles

- [[lob-prediction|LOB Prediction]] — [[transformer-architecture|transformer]] for microstructure
- [[hidden-markov-models|HMM]] — alternative for regime detection
- [[lightgbm-xgboost|LightGBM/XGBoost]] — gradient boosting alternative
- [[kalman-filter|Kalman Filter]] — linear predictor baseline
