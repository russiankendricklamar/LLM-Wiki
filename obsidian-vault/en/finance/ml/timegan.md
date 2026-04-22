---
title: "TimeGAN: Generating Time Series"
category: "Algorithms and ML"
order: 40
lang: "en"
slug: "timegan"
---

# TimeGAN: Generating Synthetic Financial Data

In quantitative finance, the biggest limitation is that **there is only one history**. You cannot backtest a trading algorithm on 10,000 different 2008 Financial Crises to see how it performs under variance. To solve this, researchers generate synthetic data. However, standard Generative Adversarial Networks (GANs) fail for finance because they do not respect the **temporal dynamics** of the data. 

**TimeGAN** (Yoon et al., 2019) solves this by combining the unsupervised power of GANs with the supervised training of autoregressive models.

## The Flaw of Standard GANs

If you train a standard GAN on daily stock prices, it learns the *static distribution* (e.g., it knows that a 5% drop is rare). But it fails to learn the *transition dynamics* (e.g., a 5% drop is usually followed by highly volatile days). A standard GAN generates time series that look realistic at any single snapshot but exhibit impossible behaviors when analyzed over time (no volatility clustering, no mean reversion).

## The TimeGAN Architecture

TimeGAN uses four neural networks to capture both static and dynamic properties:
1.  **Embedder (Encoder)**: Maps the raw financial data into a lower-dimensional latent space.
2.  **Recovery (Decoder)**: Maps the latent space back to the original financial data.
3.  **Generator**: Uses an RNN/LSTM to generate synthetic sequences *in the latent space*.
4.  **Discriminator**: Tries to distinguish between real latent sequences and synthetic latent sequences.

## The Magic: Three Loss Functions

TimeGAN trains using three distinct loss functions simultaneously:
1.  **Reconstruction Loss**: Ensures the Embedder and Decoder can perfectly translate data back and forth.
2.  **Adversarial Loss**: The standard GAN game between Generator and Discriminator.
3.  **Supervised Loss (The Key)**: The Generator is explicitly trained to predict the *next step* in the real latent sequence. This forces the Generator to learn the exact transition probabilities (the step-by-step conditional dynamics) of the market, ensuring volatility clustering and autocorrelation are preserved.

## Why Quants Use It

- **Data Augmentation**: Training Deep RL trading agents requires massive amounts of data. TimeGAN provides infinite variations of historical regimes without repeating the exact same path.
- **Privacy**: Banks can share TimeGAN-generated datasets with external researchers or vendors without revealing proprietary trade secrets or violating client privacy.

## Visualization: Autocorrelation Preservation

```chart
{
  "type": "line",
  "xAxis": "lag",
  "data": [
    {"lag": 1, "real": 0.80, "timegan": 0.78, "standard_gan": 0.10},
    {"lag": 2, "real": 0.60, "timegan": 0.58, "standard_gan": 0.05},
    {"lag": 5, "real": 0.30, "timegan": 0.29, "standard_gan": 0.02},
    {"lag": 10,"real": 0.10, "timegan": 0.12, "standard_gan": -0.01}
  ],
  "lines": [
    {"dataKey": "real", "stroke": "#3b82f6", "name": "Real Market Autocorrelation"},
    {"dataKey": "timegan", "stroke": "#10b981", "name": "TimeGAN (Preserves Dynamics)"},
    {"dataKey": "standard_gan", "stroke": "#ef4444", "name": "Standard GAN (Fails)"}
  ]
}
```
*A standard GAN (red) generates noise that has no memory. TimeGAN (green) perfectly maps the "long memory" and structural autocorrelation of the real market (blue).*

## Related Topics

[[gan]] — the foundational architecture  
[[neural-sdes-finance]] — a continuous-time alternative to TimeGAN  
[[probability-of-backtest-overfitting]] — the problem TimeGAN helps mitigate
---
