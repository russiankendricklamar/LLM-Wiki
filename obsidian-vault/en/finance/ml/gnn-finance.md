---
slug: "/finance/gnn-finance"
title: "Graph Neural Networks in Finance"
category: "Algorithms and ML"
order: 114
lang: "en"
---

# Graph Neural Networks in Finance

**GNNs (Graph Neural Networks)** process graph-structured data. In finance, they apply to asset correlation networks, interbank networks, and transaction graphs for fraud detection.

## Graph Convolutional Networks (GCN)

For graph $G = (V, E)$ with feature matrix $X \in \mathbb{R}^{N \times F}$ and normalized adjacency $\tilde{A}$:

$$
H^{(l+1)} = \sigma\!\left(\tilde{D}^{-1/2}\tilde{A}\tilde{D}^{-1/2} H^{(l)} W^{(l)}\right)
$$

$\tilde{A} = A + I$ (with self-loops), $\tilde{D}_{ii} = \sum_j \tilde{A}_{ij}$.

## Graph [[attention-mechanisms|Attention]] Networks (GAT)

Learnable attention weights over neighbors:

$$
\alpha_{ij} = \frac{\exp(\text{LeakyReLU}(\mathbf{a}^\top[W h_i \| W h_j]))}{\sum_{k\in\mathcal{N}(i)}\exp(\text{LeakyReLU}(\mathbf{a}^\top[W h_i \| W h_k]))}
$$

$$
h_i' = \sigma\!\left(\sum_{j\in\mathcal{N}(i)} \alpha_{ij} W h_j\right)
$$

## Implementation

```python
import numpy as np
import pandas as pd

def build_correlation_graph(returns: pd.DataFrame,
                              threshold: float = 0.3) -> tuple:
    """Build asset graph from correlation matrix. Returns (edge_index, edge_weight)."""
    corr = returns.corr().values
    n = corr.shape[0]
    edges, weights = [], []
    for i in range(n):
        for j in range(i+1, n):
            if abs(corr[i, j]) > threshold:
                edges += [[i, j], [j, i]]
                weights += [corr[i, j], corr[i, j]]
    return np.array(edges).T, np.array(weights)


def gcn_layer_numpy(H: np.ndarray, A: np.ndarray, W: np.ndarray) -> np.ndarray:
    """Single GCN layer (numpy, for illustration)."""
    A_tilde = A + np.eye(len(A))
    D = np.diag(A_tilde.sum(axis=1))
    D_inv_sqrt = np.diag(1.0 / np.sqrt(np.diag(D)))
    A_norm = D_inv_sqrt @ A_tilde @ D_inv_sqrt
    return np.maximum(0, A_norm @ H @ W)


def compute_node_features(returns: pd.DataFrame, window: int = 60) -> np.ndarray:
    """Asset node features: [mean return, vol, momentum, avg correlation]."""
    ret = returns.iloc[-window:]
    feats = np.column_stack([
        ret.mean().values,
        ret.std().values,
        ret.sum().values,
        ret.corr().mean().values
    ])
    return (feats - feats.mean(axis=0)) / (feats.std(axis=0) + 1e-8)


def systemic_risk_gnn(adjacency: np.ndarray,
                       node_features: np.ndarray,
                       n_layers: int = 3) -> np.ndarray:
    """
    Systemic risk scores via graph message passing (DebtRank-like).
    """
    H = node_features.copy()
    A_norm = adjacency / (adjacency.sum(axis=1, keepdims=True) + 1e-8)
    for _ in range(n_layers):
        H = 0.5 * H + 0.5 * A_norm @ H
    risk_score = np.abs(H).sum(axis=1)
    return risk_score / risk_score.sum()
```

## Financial Applications

| Task | Graph Type | GNN |
|------|-----------|-----|
| Return prediction | Correlation network | GCN / GAT |
| Systemic risk | Interbank network | GNN + DebtRank |
| Fraud detection | Transaction network | GCN (semi-supervised) |
| Sector classification | Supply chain network | GraphSAGE |

## Related Articles

- [[systemic-contagion-debtrank|DebtRank]] — risk propagation on graphs
- [[fraud-detection|Fraud Detection]] — transaction classification
- [[transformer-timeseries|Transformers]] — attention in neural networks
- [[eigenportfolio-rmt|Eigenportfolio and RMT]] — asset correlation matrices
