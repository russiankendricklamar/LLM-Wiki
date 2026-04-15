---
title: "Граф-нейронные сети в финансах"
category: "Алгоритмы и ML"
order: 114
lang: "ru"
---

# Граф-нейронные сети в финансах

**GNN (Graph Neural Networks)** — класс нейронных сетей для работы с графовыми данными. В финансах применяются к рыночным сетям (корреляции активов), межбанковским связям, транзакционным сетям для выявления мошенничества.

## Граф-свёрточные сети (GCN)

Для графа $G = (V, E)$ с матрицей признаков $X \in \mathbb{R}^{N \times F}$ и нормализованной матрицей смежности $\tilde{A}$:

$$
H^{(l+1)} = \sigma\!\left(\tilde{D}^{-1/2}\tilde{A}\tilde{D}^{-1/2} H^{(l)} W^{(l)}\right)
$$

где $\tilde{A} = A + I$ (с самосвязями), $\tilde{D}_{ii} = \sum_j \tilde{A}_{ij}$.

## Механизм внимания (GAT)

**Graph Attention Network** взвешивает соседей по обучаемым вниманиям:

$$
\alpha_{ij} = \frac{\exp(\text{LeakyReLU}(\mathbf{a}^\top[W h_i \| W h_j]))}{\sum_{k\in\mathcal{N}(i)}\exp(\text{LeakyReLU}(\mathbf{a}^\top[W h_i \| W h_k]))}
$$

$$
h_i' = \sigma\!\left(\sum_{j\in\mathcal{N}(i)} \alpha_{ij} W h_j\right)
$$

```python
import numpy as np
import pandas as pd

def build_correlation_graph(returns: pd.DataFrame,
                              threshold: float = 0.3) -> tuple:
    """
    Построение графа активов по корреляционной матрице.
    Ребро i-j если |corr| > threshold.
    Возвращает (edge_index, edge_weight) для PyG.
    """
    corr = returns.corr().values
    n = corr.shape[0]
    edges, weights = [], []
    for i in range(n):
        for j in range(i+1, n):
            if abs(corr[i, j]) > threshold:
                edges.append([i, j])
                edges.append([j, i])
                weights.extend([corr[i, j], corr[i, j]])
    return np.array(edges).T, np.array(weights)


def gcn_layer_numpy(H: np.ndarray, A: np.ndarray, W: np.ndarray) -> np.ndarray:
    """
    Один слой GCN без PyTorch (для демонстрации).
    H: (N, F_in) признаки узлов
    A: (N, N) матрица смежности
    W: (F_in, F_out) веса
    """
    # Нормализация: D^{-1/2} A D^{-1/2}
    A_tilde = A + np.eye(len(A))
    D = np.diag(A_tilde.sum(axis=1))
    D_inv_sqrt = np.diag(1.0 / np.sqrt(np.diag(D)))
    A_norm = D_inv_sqrt @ A_tilde @ D_inv_sqrt
    return np.maximum(0, A_norm @ H @ W)  # ReLU


def compute_node_features(returns: pd.DataFrame,
                            window: int = 60) -> np.ndarray:
    """
    Признаки узлов графа (активов):
    [доходность, волатильность, моментум, бета к индексу]
    """
    ret = returns.iloc[-window:]
    feats = np.column_stack([
        ret.mean().values,
        ret.std().values,
        ret.sum().values,
        ret.corr().mean().values  # средняя корреляция с рынком
    ])
    # Нормализация
    feats = (feats - feats.mean(axis=0)) / (feats.std(axis=0) + 1e-8)
    return feats


class SimpleGCNRegressor:
    """
    Упрощённый GCN (numpy) для прогноза доходностей.
    Не использует autograd — только для иллюстрации прямого прохода.
    """
    def __init__(self, in_dim: int, hidden: int = 32, out_dim: int = 1):
        rng = np.random.default_rng(0)
        self.W1 = rng.normal(0, 0.1, (in_dim, hidden))
        self.W2 = rng.normal(0, 0.1, (hidden, out_dim))

    def forward(self, X: np.ndarray, A: np.ndarray) -> np.ndarray:
        h = gcn_layer_numpy(X, A, self.W1)
        return gcn_layer_numpy(h, A, self.W2)


def systemic_risk_gnn(adjacency: np.ndarray,
                       node_features: np.ndarray,
                       n_layers: int = 3) -> np.ndarray:
    """
    Оценка системного риска через распространение по графу.
    Аналог DebtRank с обучаемыми весами.
    """
    H = node_features.copy()
    A_norm = adjacency / (adjacency.sum(axis=1, keepdims=True) + 1e-8)
    for _ in range(n_layers):
        H = 0.5 * H + 0.5 * A_norm @ H  # message passing
    risk_score = np.abs(H).sum(axis=1)
    return risk_score / risk_score.sum()
```

## Применения в финансах

| Задача | Тип графа | GNN |
|--------|-----------|-----|
| Прогноз доходностей | Корреляционная сеть | GCN / GAT |
| Системный риск | Межбанковские связи | GNN + DebtRank |
| Детектор мошенничества | Транзакционная сеть | GCN (semi-supervised) |
| Отраслевая классификация | Сеть поставщиков | GraphSAGE |

## Связанные статьи

- [[systemic-contagion-debtrank|DebtRank]] — распространение риска по графу
- [[fraud-detection|Обнаружение мошенничества]] — классификация транзакций
- [[transformer-timeseries|Трансформеры]] — attention в нейросетях
- [[eigenportfolio-rmt|Eigenportfolio и RMT]] — корреляционные матрицы активов
