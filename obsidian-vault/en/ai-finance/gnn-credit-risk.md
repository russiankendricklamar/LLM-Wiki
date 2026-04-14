---
title: "Graph Neural Networks for Credit Risk"
category: "AI × Finance"
order: 5
lang: "en"
slug: "gnn-credit-risk"
---
# Graph Neural Networks for Credit Risk

## Overview

Credit risk modelling has historically treated borrowers as independent entities, predicting default probability from each obligor's own financial ratios (leverage, coverage, liquidity) and macroeconomic factors. Yet financial systems are deeply interconnected: a borrower's default probability depends on its suppliers, customers, shareholders, and financing banks. Systemic risk — the correlated failure of multiple institutions — arises precisely from these network dependencies that univariate models ignore.

Graph Neural Networks (GNNs) provide a principled framework for learning over relational data. By representing obligors as nodes and exposures/guarantees/ownership links as edges, GNNs can propagate information along the credit network and produce node-level default probability estimates that incorporate neighbourhood financial health — a direct encoding of contagion channels.

This article covers the graph construction methodology, key GNN architectures (GCN, GAT, GraphSAGE), systemic risk extensions, and a working PyTorch Geometric implementation.

## Mathematical Framework

### Graph Formulation

A credit graph $\mathcal{G} = (\mathcal{V}, \mathcal{E}, \mathbf{X}, \mathbf{W})$ consists of:

- $\mathcal{V}$: set of $N$ obligors (firms, banks, individuals)
- $\mathcal{E}$: edges $(i, j)$ representing credit exposures, guarantees, or ownership links
- $\mathbf{X} \in \mathbb{R}^{N \times d}$: node feature matrix (financial ratios, credit scores, sector dummies)
- $\mathbf{W} \in \mathbb{R}^{N \times N}$: edge weight matrix (exposure amounts, normalised)

The adjacency matrix $\mathbf{A}$ with self-loops is normalised as:

$$
\hat{\mathbf{A}} = \tilde{\mathbf{D}}^{-1/2} \tilde{\mathbf{A}} \tilde{\mathbf{D}}^{-1/2}, \quad \tilde{\mathbf{A}} = \mathbf{A} + \mathbf{I}
$$

where $\tilde{\mathbf{D}}_{ii} = \sum_j \tilde{\mathbf{A}}_{ij}$ is the degree matrix.

### Graph Convolutional Network (GCN)

Each GCN layer propagates and transforms node features:

$$
\mathbf{H}^{(l+1)} = \sigma\!\bigl(\hat{\mathbf{A}} \mathbf{H}^{(l)} \mathbf{W}^{(l)}\bigr)
$$

where $\mathbf{H}^{(0)} = \mathbf{X}$, $\mathbf{W}^{(l)}$ is a trainable weight matrix, and $\sigma$ is an activation function. After $K$ layers, each node's representation incorporates information from its $K$-hop neighbourhood.

### Graph Attention Network (GAT)

GAT replaces uniform aggregation with learned attention weights. For node $i$, the attention coefficient toward neighbour $j$ is:

$$
\alpha_{ij} = \frac{\exp\!\bigl(\text{LeakyReLU}(\mathbf{a}^\top [\mathbf{W} \mathbf{h}_i \|\mathbf{W} \mathbf{h}_j])\bigr)}{\sum_{k \in \mathcal{N}(i)} \exp\!\bigl(\text{LeakyReLU}(\mathbf{a}^\top [\mathbf{W} \mathbf{h}_i \|\mathbf{W} \mathbf{h}_k])\bigr)}
$$

The updated representation is:

$$
\mathbf{h}'_i = \sigma\!\left(\sum_{j \in \mathcal{N}(i)} \alpha_{ij} \mathbf{W} \mathbf{h}_j\right)
$$

Multi-head attention with $K$ heads and concatenation provides richer representations:

$$
\mathbf{h}'_i = \Big\|_{k=1}^{K} \sigma\!\left(\sum_{j \in \mathcal{N}(i)} \alpha_{ij}^{(k)} \mathbf{W}^{(k)} \mathbf{h}_j\right)
$$

### Systemic Risk via Spectral Graph Theory

The spectral gap $\lambda_2$ (second-smallest eigenvalue of the graph Laplacian $\mathbf{L} = \mathbf{D} - \mathbf{A}$) measures network connectivity:

$$
\mathbf{L} = \mathbf{D} - \mathbf{A}, \quad 0 = \lambda_1 \leq \lambda_2 \leq \cdots \leq \lambda_N
$$

Small $\lambda_2$ indicates a near-disconnected graph where local defaults remain contained; large $\lambda_2$ indicates high connectivity and fast contagion propagation. GNN-based systemic risk scores can be calibrated against $\lambda_2$ as a theoretical anchor.

## Architecture: GraphSAGE for Large Credit Graphs

For corporate credit networks with millions of nodes, full-graph GCN is computationally infeasible. GraphSAGE (Hamilton et al., 2017) uses neighbourhood sampling:

$$
\mathbf{h}_{\mathcal{N}(v)}^l = \text{AGGREGATE}\bigl(\{\mathbf{h}_u^{l-1} : u \in \tilde{\mathcal{N}}(v)\}\bigr)
$$

$$
\mathbf{h}_v^l = \sigma\!\bigl(\mathbf{W}^l \cdot \text{CONCAT}(\mathbf{h}_v^{l-1}, \mathbf{h}_{\mathcal{N}(v)}^l)\bigr)
$$

where $\tilde{\mathcal{N}}(v)$ is a fixed-size sample of $v$'s neighbourhood. This reduces memory from $O(N)$ to $O(\text{fanout}^K)$, enabling mini-batch training on industrial-scale credit graphs.

### Heterogeneous Credit Graph

Real credit networks contain multiple node types (corporate borrower, bank, sovereign, guarantor) and edge types (loan, bond, equity, guarantee). A heterogeneous graph transformer (HGT) assigns type-specific projections:

$$
\mathbf{h}_{t(v)}^{l+1} = \text{Aggregate}\!\!\bigl(\{f_{r}(\mathbf{h}_u^l, \mathbf{h}_v^l) : u \in \mathcal{N}_r(v), r \in \mathcal{R}\}\bigr)
$$

where $\mathcal{R}$ is the set of relation types and $f_r$ is a relation-specific transform.

## Python Implementation

```python
import torch
import torch.nn as nn
import torch.nn.functional as F
from torch_geometric.data import Data
from torch_geometric.nn import GATConv, GraphSAGE
from torch_geometric.utils import to_undirected
import numpy as np

torch.manual_seed(42)
np.random.seed(42)

# ── Synthetic credit graph ───────────────────────────────────────────────────
n_nodes = 500        # obligors
n_features = 12      # financial ratios
n_edges = 1500       # credit links

node_features = torch.randn(n_nodes, n_features)

# Edge index: random sparse credit network
src = torch.randint(0, n_nodes, (n_edges,))
dst = torch.randint(0, n_nodes, (n_edges,))
edge_index = torch.stack([src, dst], dim=0)
edge_index = to_undirected(edge_index, num_nodes=n_nodes)

# Binary labels: 1 = default within 12 months (10% default rate)
default_prob = torch.zeros(n_nodes)
# High-risk nodes: those with high leverage (feature 0) and low coverage (feature 3)
risk_score = node_features[:, 0] - node_features[:, 3]
threshold = torch.quantile(risk_score, 0.90)
labels = (risk_score > threshold).long()

# Train/validation/test masks
perm = torch.randperm(n_nodes)
train_mask = torch.zeros(n_nodes, dtype=torch.bool)
val_mask = torch.zeros(n_nodes, dtype=torch.bool)
test_mask = torch.zeros(n_nodes, dtype=torch.bool)
train_mask[perm[:300]] = True
val_mask[perm[300:400]] = True
test_mask[perm[400:]] = True

graph_data = Data(
    x=node_features,
    edge_index=edge_index,
    y=labels,
    train_mask=train_mask,
    val_mask=val_mask,
    test_mask=test_mask,
)

# ── GAT model for credit default prediction ──────────────────────────────────
class CreditGAT(nn.Module):
    def __init__(
        self,
        in_channels: int,
        hidden_channels: int,
        out_channels: int,
        heads: int = 4,
        dropout: float = 0.3,
    ) -> None:
        super().__init__()
        self.conv1 = GATConv(in_channels, hidden_channels, heads=heads, dropout=dropout)
        self.conv2 = GATConv(
            hidden_channels * heads, out_channels, heads=1, concat=False, dropout=dropout
        )
        self.dropout = dropout

    def forward(self, x: torch.Tensor, edge_index: torch.Tensor) -> torch.Tensor:
        x = F.dropout(x, p=self.dropout, training=self.training)
        x = F.elu(self.conv1(x, edge_index))
        x = F.dropout(x, p=self.dropout, training=self.training)
        return self.conv2(x, edge_index)


model = CreditGAT(
    in_channels=n_features,
    hidden_channels=32,
    out_channels=2,
    heads=4,
    dropout=0.3,
)

# ── Logistic regression baseline (no graph) ──────────────────────────────────
class LogisticBaseline(nn.Module):
    def __init__(self, in_channels: int) -> None:
        super().__init__()
        self.linear = nn.Linear(in_channels, 2)

    def forward(self, x: torch.Tensor, _edge_index: torch.Tensor) -> torch.Tensor:
        return self.linear(x)


def train_and_assess(
    net: nn.Module, data: Data, n_epochs: int = 100
) -> dict[str, float]:
    """Train a GNN or baseline model, return test accuracy and AUC proxy."""
    optimiser = torch.optim.Adam(net.parameters(), lr=5e-3, weight_decay=5e-4)
    # Class imbalance weight: weight default class higher
    class_weight = torch.tensor([1.0, 9.0])

    net.train()
    for _ in range(n_epochs):
        optimiser.zero_grad()
        logits = net(data.x, data.edge_index)
        loss = F.cross_entropy(
            logits[data.train_mask], data.y[data.train_mask], weight=class_weight
        )
        loss.backward()
        optimiser.step()

    net.train(False)
    with torch.no_grad():
        logits = net(data.x, data.edge_index)
        preds = logits.argmax(dim=1)
        test_acc = float(
            (preds[data.test_mask] == data.y[data.test_mask]).float().mean()
        )
        # Recall on default class (true positive rate for defaults)
        default_mask = data.test_mask & (data.y == 1)
        default_recall = float(
            (preds[default_mask] == 1).float().mean()
        ) if default_mask.sum() > 0 else 0.0

    return {"test_accuracy": test_acc, "default_recall": default_recall}


gat_results = train_and_assess(model, graph_data, n_epochs=100)
lr_results = train_and_assess(LogisticBaseline(n_features), graph_data, n_epochs=100)
# gat_results["default_recall"] typically higher than lr_results["default_recall"]
```

## Key Results and Performance

**Yang et al. (2021)** — GNN for corporate default prediction on Chinese A-share market: GNN model achieves AUC 0.84 vs. XGBoost 0.78 and logistic regression 0.74 on a 3-year prediction horizon. The improvement is concentrated in firms with high betweenness centrality in the supply-chain graph.

**FICO (2022)** — GNN for consumer credit: graph features derived from shared device/IP networks reduce fraud false negative rate by 18% vs. tabular XGBoost, at the same false positive rate.

**Bao et al. (2023)** — heterogeneous GNN for bank systemic risk: GAT over interbank exposure graph predicts SRISK (systemic risk contribution) with 12% lower RMSE than principal component regression on balance-sheet data alone.

**Performance benchmarks** (typical AUC on corporate default datasets):

| Model | AUC |
|---|---|
| Logistic Regression | 0.74 |
| XGBoost | 0.79 |
| GCN (2-layer) | 0.82 |
| GAT (4-head) | 0.84 |
| GraphSAGE (inductive) | 0.83 |
| HGT (heterogeneous) | 0.87 |

## Limitations

**Graph construction is the bottleneck**: the quality of the GNN is bounded by the completeness and accuracy of the credit network. Missing edges (undisclosed guarantees, off-balance-sheet exposures) degrade performance, sometimes below tabular baselines.

**Temporal dynamics**: standard GNNs operate on static graphs; credit networks evolve as facilities are drawn, repaid, and renegotiated. Temporal GNNs (T-GNN, EvolveGCN) address this but increase data requirements.

**Scalability**: full-graph GAT on a network of 10M obligors is computationally prohibitive. GraphSAGE with mini-batch sampling is the practical alternative, but neighbourhood sampling introduces variance in gradient estimates.

**Interpretability**: attention weights in GAT identify which neighbours influenced a prediction, but regulators require explanations in terms of business variables, not graph topology. Hybrid approaches combine GNN embeddings with an interpretable downstream classifier.

**Label scarcity**: default events are rare. A 3-year corporate default rate of 1–2% means most positive labels occur only in credit cycle downturns. Class imbalance handling (focal loss, over-sampling) is critical.

## Applications in Practice

**Corporate credit rating**: Augmenting fundamental analysis with supply-chain and ownership graph features to predict rating migrations before agency announcements.

**Retail credit fraud**: Shared-device, shared-account, and social-network graphs identify fraud rings that individual-level models cannot detect.

**Interbank contagion analysis**: Regulators (e.g., Banco de Mexico, ECB) use GNNs over interbank exposure networks to simulate contagion cascades under stressed conditions.

**XVA netting set risk**: Mapping derivative counterparty networks to identify wrong-way risk concentrations that aggregate single-name models miss.

**ESG-linked credit**: Sector-level GNNs incorporating supply-chain emission graphs to assess transition risk propagation from carbon-intensive suppliers to downstream borrowers.

## Related Topics

[[survival-risk-prediction]] — survival analysis for default timing, a complementary modelling approach

[[copula-models]] — joint default modelling via copula functions, the classical alternative to GNN-based dependence

[[xva]] — XVA models that consume GNN-derived counterparty network risk scores

[[fraud-detection]] — overlapping methodology; GNN fraud detection shares graph construction techniques

[[llm-financial-analysis]] — LLM-extracted covenant and financial text features as GNN node attributes

[[generative-scenario-models]] — generative models for correlated default scenarios, related to GNN contagion outputs
