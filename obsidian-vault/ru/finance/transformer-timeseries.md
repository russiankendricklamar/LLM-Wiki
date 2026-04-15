---
title: "Трансформеры для временных рядов"
category: "Алгоритмы и ML"
order: 106
lang: "ru"
---

# Трансформеры для временных рядов

**Трансформеры** — архитектура на основе механизма self-attention, изначально разработанная для NLP (Vaswani et al., 2017). В применении к финансовым временным рядам они позволяют захватывать долгосрочные зависимости и кросс-активные паттерны, часто превосходя LSTM и классические модели.

## Self-Attention в временных рядах

Для последовательности вложений $\mathbf{X} = [x_1, \ldots, x_L]$ (L — длина окна):

$$
\text{Attention}(Q, K, V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right) V
$$

- $Q = X W_Q$, $K = X W_K$, $V = X W_V$ — проекции
- $d_k$ — размерность ключей (нормировка)

**Интерпретация**: каждый момент времени $t$ «смотрит» на все другие моменты и взвешивает их по релевантности — нет экспоненциального затухания как в RNN.

## Ключевые архитектуры

### Temporal Fusion Transformer (TFT, Lim et al. 2021)

Специализирован для многошаговых прогнозов с ковариатами:
- **Gate Residual Networks** — адаптивная глубина
- **Variable Selection**: веса важности каждого признака
- **Temporal Self-Attention**: отдельно по temporal dimension
- **Quantile outputs**: вероятностный прогноз (10/50/90 персентили)

### Informer (Zhou et al. 2021)

Решает проблему $O(L^2)$ attention для длинных рядов через **ProbSparse Attention**:

$$
\hat{A}(Q, K, V) = \text{softmax}\!\left(\frac{\bar{Q}K^\top}{\sqrt{d_k}}\right) V
$$

где $\bar{Q}$ — только $\ln L$ доминирующих запросов, остальные усредняются. Сложность $O(L \log L)$.

### PatchTST (Nie et al. 2023)

Разбивает ряд на **патчи** (непересекающиеся окна):
$$
\text{patches} = [x_{1:P}, x_{P+1:2P}, \ldots]
$$
Аналог Vision Transformer (ViT) для временных рядов. Достигает SOTA на большинстве бенчмарков при $16 \leq P \leq 64$.

## Реализация TFT (упрощённая)

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
    """
    Упрощённый TFT для одношагового прогноза.
    """
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
    """
    X_train: (N, seq_len, n_features)
    y_train: (N,)
    """
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
    model = model.to(device)
    opt   = torch.optim.Adam(model.parameters(), lr=lr)
    loss_fn = nn.MSELoss()
    losses = []

    X_t = torch.tensor(X_train, dtype=torch.float32, device=device)
    y_t = torch.tensor(y_train, dtype=torch.float32, device=device)

    for epoch in range(n_epochs):
        model.train()
        opt.zero_grad()
        pred = model(X_t)
        loss = loss_fn(pred, y_t)
        loss.backward()
        torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
        opt.step()
        losses.append(loss.item())
    return losses
```

## Применение в финансах

| Задача | Вход | Выход |
|-------|------|-------|
| Прогноз цены | OHLCV + факторы | Доходность t+1..t+h |
| Детектор режима | Returns + vol | Вероятности режима |
| Прогноз волатильности | Realized vol + OFI | RV_{t+1} |
| Кредитный скор | Транзакционная история | PD |

## Практические советы

- **Positional encoding**: для нерегулярных данных (тики) используйте временные embedding вместо синусоидальных
- **Feature normalization**: нормируйте per-window, а не по всей выборке (утечка данных)
- **Lookback**: 60–252 дня типично для дневных данных; 30–100 баров для HF
- **Gradient clipping**: обязателен для стабильного обучения

## Связанные статьи

- [[lob-prediction|Прогнозирование LOB]] — применение нейросетей к микроструктуре
- [[hidden-markov-models|HMM]] — альтернатива для режимного обнаружения
- [[kalman-filter|Фильтр Калмана]] — классический линейный фильтр-предиктор
- [[lightgbm-xgboost|LightGBM/XGBoost]] — градиентный бустинг как альтернатива
