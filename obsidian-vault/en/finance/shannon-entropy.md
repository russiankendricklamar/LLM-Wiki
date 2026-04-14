---
title: "Shannon Entropy in Finance"
category: "Algorithms and ML"
order: 35
lang: "en"
---
# Shannon Entropy in Finance

**Shannon Entropy** is the foundational quantity of information theory, introduced by Claude Shannon in his 1948 paper "A Mathematical Theory of Communication." It measures the average uncertainty or information content of a random variable. In quantitative finance, entropy has evolved from a theoretical curiosity into a practical tool for regime detection, feature selection, market efficiency measurement, and order flow analysis.

## Mathematical Framework

### Axiomatic Derivation

Shannon (1948) showed that the unique function satisfying three axioms — continuity in probabilities, maximum at uniform distribution, and additivity for independent events — must be:

$$
H(X) = -\sum_{i=1}^{n} p_i \log_b p_i
$$

where $p_i = P(X = x_i)$, and $b$ is the logarithm base (2 for bits, $e$ for nats, 10 for hartleys). The convention $0 \log 0 = 0$ applies. For a continuous random variable with density $f(x)$, the **differential entropy** is:

$$
h(X) = -\int_{-\infty}^{\infty} f(x) \ln f(x) \, dx
$$

### Key Properties

- **Maximality**: $H(X) \le \log_b n$, with equality iff $X$ is uniformly distributed.
- **Non-negativity**: $H(X) \ge 0$ for discrete variables; differential entropy can be negative.
- **Chain rule**: $H(X, Y) = H(X) + H(Y \mid X)$
- **Data processing inequality**: $H(f(X)) \le H(X)$ for any function $f$.

### Relative Entropy (KL Divergence)

The **Kullback-Leibler divergence** measures how much distribution $P$ differs from reference distribution $Q$:

$$
D_{KL}(P \| Q) = \sum_i p_i \ln \frac{p_i}{q_i} = \mathbb{E}_P\left[\ln \frac{P}{Q}\right]
$$

$D_{KL} \ge 0$ with equality iff $P = Q$ (Gibbs' inequality). It is not symmetric: $D_{KL}(P \| Q) \ne D_{KL}(Q \| P)$ in general. In finance, KL divergence measures how much the empirical return distribution deviates from a benchmark (e.g., Gaussian), quantifying model misspecification risk.

### Mutual Information

The **mutual information** $I(X; Y)$ measures the reduction in uncertainty about $X$ given knowledge of $Y$:

$$
I(X; Y) = H(X) - H(X \mid Y) = \sum_{x,y} p(x,y) \ln \frac{p(x,y)}{p(x)p(y)}
$$

It equals zero iff $X$ and $Y$ are independent. Unlike correlation, mutual information captures nonlinear dependence. **Channel capacity** $C = \max_{p(x)} I(X; Y)$ is the maximum mutual information achievable over a noisy channel.

### Transfer Entropy

**Transfer entropy** (Schreiber 2000) measures the directional information flow from process $Y$ to process $X$, controlling for $X$'s own history:

$$
T_{Y \to X} = \sum p(x_{t+1}, x_t^{(k)}, y_t^{(l)}) \ln \frac{p(x_{t+1} \mid x_t^{(k)}, y_t^{(l)})}{p(x_{t+1} \mid x_t^{(k)})}
$$

where $x_t^{(k)}$ denotes the $k$-lag history. $T_{Y \to X} > T_{X \to Y}$ indicates that $Y$ Granger-causes $X$ in an information-theoretic sense, without assuming linearity.

### Von Neumann Entropy

The quantum generalization replaces the probability vector with a density matrix $\rho$:

$$
S(\rho) = -\text{Tr}(\rho \ln \rho) = -\sum_i \lambda_i \ln \lambda_i
$$

where $\lambda_i$ are eigenvalues of $\rho$. Von Neumann entropy is used in quantum portfolio models and entanglement measures in multi-asset systems.

## Financial Entropy Applications

### Market Efficiency via Entropy

In an efficient market (EMH), price changes are unpredictable — returns should have **maximum entropy** given their variance (Gaussian distribution achieves this). Deviations from maximum entropy indicate exploitable structure. The **entropy ratio**:

$$
\eta = \frac{H(X)}{H_{max}(X)} \in [0, 1]
$$

measures relative efficiency. Low $\eta$ implies predictable patterns; high $\eta$ implies near-random behavior.

### Approximate Entropy and Sample Entropy

**Approximate Entropy (ApEn)** (Pincus 1991) quantifies regularity in short, noisy time series by measuring the logarithmic frequency with which patterns repeat:

$$
\text{ApEn}(m, r, N) = \phi^m(r) - \phi^{m+1}(r)
$$

where $\phi^m(r) = \frac{1}{N-m+1}\sum_{i} \ln C_i^m(r)$ counts template matches within tolerance $r$. **Sample Entropy (SampEn)** improves on ApEn by excluding self-matches, making it more consistent for shorter series.

## Python Implementation

```python
import numpy as np
from scipy.stats import entropy as scipy_entropy
from scipy.special import entr

def shannon_entropy_discrete(returns: np.ndarray, bins: int = 20) -> float:
    """Shannon entropy from histogram approximation of return distribution."""
    hist, _ = np.histogram(returns, bins=bins)
    probs = hist / hist.sum()
    probs = probs[probs > 0]
    return float(-np.sum(probs * np.log2(probs)))

def kl_divergence(p: np.ndarray, q: np.ndarray) -> float:
    """KL divergence D(P||Q), adding small epsilon for numerical stability."""
    eps = 1e-12
    p = np.asarray(p, dtype=float) + eps
    q = np.asarray(q, dtype=float) + eps
    p /= p.sum()
    q /= q.sum()
    return float(np.sum(p * np.log(p / q)))

def mutual_information(x: np.ndarray, y: np.ndarray, bins: int = 15) -> float:
    """Mutual information via joint histogram."""
    joint_hist, _, _ = np.histogram2d(x, y, bins=bins)
    joint_prob = joint_hist / joint_hist.sum()
    px = joint_prob.sum(axis=1, keepdims=True)
    py = joint_prob.sum(axis=0, keepdims=True)
    mask = joint_prob > 0
    mi = np.sum(joint_prob[mask] * np.log(joint_prob[mask] / (px * py)[mask]))
    return float(mi)

def transfer_entropy(source: np.ndarray, target: np.ndarray,
                     lag: int = 1, bins: int = 10) -> float:
    """
    Bivariate transfer entropy T(source -> target).
    Uses histogram-based probability estimation.
    """
    x = target[lag:]
    x_past = target[:-lag]
    y_past = source[:-lag]

    def hist3d(a, b, c):
        data = np.column_stack([a, b, c])
        mins, maxs = data.min(0), data.max(0)
        edges = [np.linspace(mn, mx, bins + 1) for mn, mx in zip(mins, maxs)]
        h, _ = np.histogramdd(data, bins=edges)
        return h / h.sum()

    p_xyz = hist3d(x, x_past, y_past)
    p_xy = p_xyz.sum(axis=2, keepdims=True)
    p_xz = p_xyz.sum(axis=1, keepdims=True)
    p_x = p_xyz.sum(axis=(1, 2), keepdims=True)

    mask = p_xyz > 0
    te = np.sum(p_xyz[mask] * np.log(
        (p_xyz[mask] * p_x.broadcast_to(p_xyz.shape)[mask]) /
        (p_xy.broadcast_to(p_xyz.shape)[mask] *
         p_xz.broadcast_to(p_xyz.shape)[mask] + 1e-300)
    ))
    return float(te)

def rolling_entropy(returns: np.ndarray, window: int = 60, bins: int = 15) -> np.ndarray:
    """Rolling Shannon entropy over a sliding window."""
    result = np.full(len(returns), np.nan)
    for i in range(window, len(returns)):
        result[i] = shannon_entropy_discrete(returns[i - window:i], bins=bins)
    return result

# ---- Example ----
np.random.seed(42)
normal_returns = np.random.normal(0, 0.01, 500)
laplace_returns = np.random.laplace(0, 0.01, 500)

print(f"Normal distribution entropy:  {shannon_entropy_discrete(normal_returns):.4f} bits")
print(f"Laplace distribution entropy: {shannon_entropy_discrete(laplace_returns):.4f} bits")

# KL divergence from normal to Laplace
from scipy.stats import norm, laplace
x_vals = np.linspace(-0.05, 0.05, 200)
p_norm = norm.pdf(x_vals, 0, 0.01)
p_lap  = laplace.pdf(x_vals, 0, 0.01)
print(f"KL(Normal || Laplace): {kl_divergence(p_norm, p_lap):.4f} nats")
```

## Entropy Over Market Regimes

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "T1", "price": 100, "entropy": 3.2},
    {"time": "T2", "price": 102, "entropy": 3.1},
    {"time": "T3", "price": 104, "entropy": 2.8},
    {"time": "T4", "price": 107, "entropy": 2.3},
    {"time": "T5", "price": 98,  "entropy": 1.8},
    {"time": "T6", "price": 91,  "entropy": 1.5},
    {"time": "T7", "price": 93,  "entropy": 2.2},
    {"time": "T8", "price": 96,  "entropy": 2.9}
  ],
  "lines": [
    {"dataKey": "price",   "stroke": "#3b82f6", "name": "Asset Price"},
    {"dataKey": "entropy", "stroke": "#ef4444", "name": "Shannon Entropy"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $H(X)$ | Shannon entropy | Average uncertainty in bits/nats | 0 – $\log_2 n$ bits |
| $D_{KL}$ | KL divergence | Information gain / model misfit | 0 – $\infty$ |
| $I(X;Y)$ | Mutual information | Shared information between two variables | 0 – $\min(H(X), H(Y))$ |
| $T_{Y \to X}$ | Transfer entropy | Directed information flow | 0 – $H(X)$ |
| $\eta$ | Entropy ratio | Relative market efficiency | 0 (predictable) – 1 (random) |
| $m$ | Embedding dim | ApEn/SampEn template length | 1 – 3 |
| $r$ | Tolerance | ApEn/SampEn matching threshold | 0.1–0.25 $\times$ std |

## Limitations and Extensions

- **Binning sensitivity**: Histogram-based entropy estimates depend on bin count; kernel density or k-NN estimators are more robust.
- **Curse of dimensionality**: Mutual information estimation in high dimensions requires large samples; copula-based or neural MI estimators scale better.
- **Non-stationarity**: Rolling entropy assumes stationarity within the window; adaptive kernel bandwidths improve estimates under regime changes.
- **Maximum Entropy Portfolios**: Rather than minimizing variance, one can maximize entropy of portfolio weights subject to return constraints, producing more diversified allocations.
- **Topological entropy**: Extends classical entropy to dynamical systems, measuring chaotic complexity in price trajectories.

## Practical Applications

1. **Regime detection**: Sudden drops in rolling entropy precede crashes by acting as a "synchronization alarm" when market participants begin herding.
2. **Feature selection**: Mutual information between factors and forward returns is a non-linear, model-free selection criterion that captures what correlation misses.
3. **Market microstructure**: Transfer entropy between order flow imbalance and mid-price changes quantifies the causal channel without linearity assumptions.
4. **Information-theoretic portfolio construction**: Maximum entropy portfolios subject to return constraints yield naturally diversified weights without requiring a covariance matrix.
5. **Model validation**: KL divergence between simulated and empirical return distributions quantifies generative model quality for Monte Carlo scenario generation.

## Related Topics
- [[lempel-ziv-complexity]]
- [[hidden-markov-models]]
- [[quantum-entanglement]]
- [[random-matrix-theory]]
- [[transfer-entropy]]
