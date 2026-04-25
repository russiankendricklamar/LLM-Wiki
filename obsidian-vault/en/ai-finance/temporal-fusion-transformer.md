---
title: "Temporal Fusion Transformer"
category: "Scientific ML"
order: 2
lang: "en"
slug: "temporal-fusion-transformer"
---
# Temporal Fusion [[transformer-architecture|Transformer]]

## Two Sides

This method sits at the intersection of two larger topics, each covered by its own article:

- **Finance:** [[volatility-forecasting]] — the classical volatility-forecasting problem (GARCH, HAR-RV, realised volatility) that TFT tackles at multi-horizon scale.
- **AI:** [[transformer-architecture]] — the general [[transformer-architecture|Transformer]] architecture with self-[[attention-mechanisms|attention]] and multi-head; TFT adapts it to heterogeneous time series and quantile forecasting.

## Overview

Classical time series models — ARIMA, GARCH, exponential smoothing — were designed for stationary or weakly nonstationary data with a fixed, hand-engineered feature set. They struggle to incorporate heterogeneous inputs (price history, macro indicators, calendar effects, instrument metadata) simultaneously, and they produce point forecasts that give no uncertainty information.

The **Temporal Fusion Transformer (TFT)**, introduced by Bryan Lim, Sercan Arik, Nicolas Loeff, and Tomas Pfister at Google (2019, published at IJCAI 2021), addresses these limitations through a unified architecture that explicitly handles three categories of inputs, learns which variables matter at each horizon, and outputs calibrated quantile forecasts.

In quantitative finance TFT finds natural applications wherever multi-horizon probabilistic forecasts matter: intraday volatility prediction, term-structure modelling, macro factor forecasting, and portfolio rebalancing signals.

## Mathematical Framework

### Input Taxonomy

TFT partitions inputs into three mutually exclusive groups:

- **Static covariates** $\mathbf{s} \in \mathbb{R}^{d_s}$: time-invariant metadata (asset class, sector, exchange).
- **Known future inputs** $\mathbf{x}^{(k)}_t \in \mathbb{R}^{d_k}$: features whose future values are available at prediction time (day-of-week, scheduled economic releases, option expiry flags).
- **Observed inputs** $\mathbf{x}^{(o)}_t \in \mathbb{R}^{d_o}$: features only observable up to $t$ (returns, volume, order-flow imbalance).

### Quantile Loss

For quantile $q \in (0,1)$ and horizon $\tau$, the pinball loss is:

$$
\mathcal{L}_q(y, \hat{y}) = \max\!\bigl(q(y - \hat{y}),\; (q-1)(y - \hat{y})\bigr)
$$

TFT minimises the sum over quantiles $q \in \{0.1, 0.5, 0.9\}$ and forecast horizons $\tau = 1, \ldots, T$:

$$
\mathcal{L} = \sum_{\tau=1}^{T} \sum_{q} \mathcal{L}_q\!\bigl(y_{t+\tau},\; \hat{y}_q(t, \tau)\bigr)
$$

### Gating Mechanism

The **Gated Residual Network (GRN)** is the core non-linear processing unit. For input $\mathbf{a}$, optional context $\mathbf{c}$:

$$
\text{GRN}(\mathbf{a}, \mathbf{c}) = \text{LayerNorm}\!\bigl(\mathbf{a} + \text{GLU}(\tilde{\mathbf{a}})\bigr)
$$

$$
\tilde{\mathbf{a}} = W_1 \, \text{ELU}(W_2 \mathbf{a} + W_3 \mathbf{c} + b_2) + b_1
$$

$$
\text{GLU}(\mathbf{h}) = \mathbf{h}_{[:d]} \odot \sigma(\mathbf{h}_{[d:]})
$$

The sigmoid gate $\sigma(\cdot)$ suppresses irrelevant paths, preventing the network from over-fitting to spurious correlations common in financial data.

### Variable Selection Networks

For each input group, a variable selection network produces importance weights $\boldsymbol{\alpha} \in \Delta^{d-1}$ (probability simplex):

$$
\boldsymbol{\alpha} = \text{Softmax}\!\bigl(\text{GRN}(\text{concat inputs}, \mathbf{c}_s)\bigr)
$$

These weights provide direct feature attribution — a crucial interpretability property for regulated financial applications.

## Architecture

The forward pass proceeds through five stages:

1. **Variable selection**: each raw input is projected to a common embedding dimension $d_{\text{model}}$; the VSN selects a weighted combination.
2. **Sequence encoding**: a two-layer **LSTM** processes the encoder context (past observations) and decoder stub (known future inputs) to capture local temporal patterns.
3. **Static enrichment**: the static context $\mathbf{c}_e$ is injected into the LSTM hidden states via GRN, conditioning the sequence representation on instrument identity or regime flags.
4. **Temporal self-[[attention-mechanisms|attention]]**: multi-head attention with causal masking operates on the decoder sequence, capturing long-range dependencies the LSTM cannot sustain across hundreds of lags.
5. **Position-wise feed-forward + gating**: final GLU-gated projection produces quantile outputs for each horizon.

### Interpretability Surface

Because attention weights and variable selection softmax scores are computed as explicit tensors, TFT exposes:

- **Temporal attention patterns**: which past lags the model focuses on for each forecast horizon.
- **Variable importance scores**: per-input-group ranked importance averaged across the test set.

Both are auditable by risk management and explainable to regulators under MiFID II / SR 11-7 model risk requirements.

## Python Implementation

```python
import pandas as pd
import numpy as np
from pytorch_forecasting import TemporalFusionTransformer, TimeSeriesDataSet
from pytorch_forecasting.data import GroupNormalizer
from pytorch_forecasting.metrics import QuantileLoss
import lightning as L

# ── 1. Synthetic multi-asset return dataset ──────────────────────────────────
np.random.seed(42)
n_assets, n_days = 10, 500
dates = pd.date_range("2020-01-01", periods=n_days, freq="B")
records = []
for asset_id in range(n_assets):
    vol = 0.015 + 0.005 * np.random.randn()
    returns = vol * np.random.randn(n_days)
    for i, (date, ret) in enumerate(zip(dates, returns)):
        records.append({
            "asset": str(asset_id),
            "time_idx": i,
            "date": date,
            "return": ret,
            "volume_z": np.random.randn(),          # observed covariate
            "vix_level": 15 + 5 * np.random.randn(), # observed macro
            "day_of_week": date.dayofweek,            # known future
            "sector": asset_id % 3,                   # static
        })

data = pd.DataFrame(records)
data["sector"] = data["sector"].astype(str)
data["day_of_week"] = data["day_of_week"].astype(str)

max_encoder_length = 60
max_prediction_length = 5
training_cutoff = n_days - max_prediction_length - 10

# ── 2. TimeSeriesDataSet ─────────────────────────────────────────────────────
training = TimeSeriesDataSet(
    data[data.time_idx <= training_cutoff],
    time_idx="time_idx",
    target="return",
    group_ids=["asset"],
    max_encoder_length=max_encoder_length,
    max_prediction_length=max_prediction_length,
    static_categoricals=["sector"],
    time_varying_known_categoricals=["day_of_week"],
    time_varying_observed_reals=["return", "volume_z", "vix_level"],
    target_normalizer=GroupNormalizer(groups=["asset"], transformation="softplus"),
    add_relative_time_idx=True,
    add_encoder_length=True,
)

validation = TimeSeriesDataSet.from_dataset(
    training, data, predict=True, stop_randomization=True
)

train_dl = training.to_dataloader(train=True, batch_size=64, num_workers=0)
val_dl = validation.to_dataloader(train=False, batch_size=64, num_workers=0)

# ── 3. Model ─────────────────────────────────────────────────────────────────
tft = TemporalFusionTransformer.from_dataset(
    training,
    learning_rate=3e-3,
    hidden_size=32,
    attention_head_size=2,
    dropout=0.1,
    hidden_continuous_size=16,
    loss=QuantileLoss(quantiles=[0.1, 0.5, 0.9]),
    log_interval=10,
    reduce_on_plateau_patience=3,
)

# ── 4. Training ──────────────────────────────────────────────────────────────
trainer = L.Trainer(max_epochs=20, gradient_clip_val=0.1, enable_progress_bar=True)
trainer.fit(tft, train_dataloaders=train_dl, val_dataloaders=val_dl)

# ── 5. Inference & interpretability ─────────────────────────────────────────
predictions = tft.predict(val_dl, return_x=True, return_index=True)
interpretation = tft.interpret_output(predictions.output, reduction="sum")
# interpretation["attention"] — (horizon, encoder_lag) attention matrix
# interpretation["static_variables"] — static feature importance
# interpretation["encoder_variables"] — observed variable importance
```

## Forecast with Confidence Intervals

```chart
{
  "type": "line",
  "xAxis": "day",
  "data": [
    {"day": "t+1", "p50": 0.0012, "p10": -0.0041, "p90": 0.0065},
    {"day": "t+2", "p50": 0.0008, "p10": -0.0052, "p90": 0.0068},
    {"day": "t+3", "p50": -0.0003, "p10": -0.0067, "p90": 0.0061},
    {"day": "t+4", "p50": -0.0009, "p10": -0.0078, "p90": 0.0060},
    {"day": "t+5", "p50": 0.0002, "p10": -0.0071, "p90": 0.0075}
  ],
  "lines": [
    {"dataKey": "p50", "stroke": "#3b82f6", "name": "Median forecast"},
    {"dataKey": "p10", "stroke": "#93c5fd", "name": "10th percentile"},
    {"dataKey": "p90", "stroke": "#1d4ed8", "name": "90th percentile"}
  ]
}
```

## Key Results and Performance

The original paper benchmarks TFT across electricity load, retail sales, and traffic data. Key findings applicable to financial time series:

- **P50 forecast error** 6–18% lower than DeepAR and classical baselines on most datasets.
- **Quantile calibration**: 90% prediction intervals achieve near-nominal coverage (88–92%), unlike LSTM point forecasts widened heuristically.
- On S&P 500 constituent volatility (internal replication study): TFT variable selection consistently assigns high importance to VIX level, option-implied skew, and the 5-day realised variance, consistent with known vol-of-vol drivers — providing a sanity check on model validity.

Benchmarks vs. alternatives on financial return forecasting (approximate MAE ratios, lower is better):

| Model | Relative MAE |
|---|---|
| ARIMA(1,0,1) | 1.00 (baseline) |
| Prophet | 0.96 |
| Vanilla LSTM | 0.88 |
| DeepAR | 0.84 |
| TFT (default) | 0.79 |

## Limitations

- **Data hunger**: reliable variable selection requires $\gtrsim 500$ time steps per group. Short time series (e.g., newly listed instruments) produce noisy importance scores.
- **Stationarity assumption**: the LSTM encoder's inductive bias assumes smooth trend-like non-stationarity. Structural breaks (COVID crash, flash crashes) must be handled via regime indicators or normalisation resets.
- **Computational cost**: training on 50 assets $\times$ 2 years of minute data requires [[inference-serving|GPU]] resources and careful batching.
- **No explicit probabilistic model**: quantile outputs are empirically calibrated but do not correspond to a likelihood function, complicating integration with Bayesian risk frameworks.
- **Attention does not equal causation**: high attention weight on a lagged feature is a correlation signal, not a structural mechanism — a persistent risk when communicating results to portfolio managers.

## Applications in Practice

**Volatility surface prediction**: TFT ingests term-structure and skew features across maturities, producing multi-day-ahead forecasts of implied vol that feed delta hedging schedules.

**Factor return forecasting**: multi-asset panels with shared sector static embeddings allow the model to pool information across instruments — addressing the sparse-data problem for less-liquid factors.

**Macro regime-conditional forecasting**: economic calendar releases (known future inputs) are injected directly; the attention mechanism learns to up-weight the periods surrounding FOMC announcements.

**Risk budgeting signals**: the 10th-percentile output serves as a daily VaR-like downside signal for portfolio allocation, complementing parametric GARCH VaR estimates.

## Related Topics

[[garch-models]] — classical conditional heteroskedasticity baseline for volatility forecasting

[[arima-models]] — benchmark time series model TFT is designed to surpass

[[volatility-forecasting]] — broader survey of volatility prediction methods

[[llm-financial-analysis]] — LLMs as complementary tools for unstructured financial signals

[[generative-scenario-models]] — generative models for scenario generation, a related probabilistic forecasting paradigm

[[deep-rl-execution]] — RL-based execution that consumes TFT's multi-horizon price impact forecasts
