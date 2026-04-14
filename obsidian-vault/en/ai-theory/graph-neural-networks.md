---
title: "Graph Neural Networks"
category: "AI Theory"
order: 12
lang: "en"
slug: "graph-neural-networks"
---

# Graph Neural Networks

**Graph Neural Networks (GNN)** are a family of architectures that operate on graphs: nodes connected by edges. Unlike convolutions on regular grids (CNN) or sequences (RNN), GNNs generalise the idea of **message passing** to arbitrary relational structure. This generality makes GNNs a natural language for molecules, social networks, citation networks, transport networks, and credit exposures — anything most easily described as a graph.

## Formulation and Notation

A graph is a tuple $G = (\mathcal{V}, \mathcal{E})$, where:

- $\mathcal{V}$ — set of nodes, $|\mathcal{V}| = N$
- $\mathcal{E} \subseteq \mathcal{V} \times \mathcal{V}$ — edges
- Each node $v$ has features $x_v \in \mathbb{R}^d$
- Each edge $(u, v)$ may have features $e_{uv} \in \mathbb{R}^{d'}$

GNN tasks fall into:

- **Node classification** — predict a label for each node (e.g., detect fraud among transactions).
- **Edge prediction** — the probability of a link between two nodes (link prediction).
- **Graph classification** — a label for the whole graph (e.g., whether a molecule is active).
- **Regression on graph properties** — continuous predictions (molecular energy, melting point).

## Message Passing Paradigm (MPNN)

Most modern GNNs fit the abstraction of **Message Passing Neural Networks** (Gilmer et al. 2017):

$$
m_v^{(k+1)} = \sum_{u \in \mathcal{N}(v)} M_k(h_v^{(k)}, h_u^{(k)}, e_{uv}),
$$

$$
h_v^{(k+1)} = U_k(h_v^{(k)}, m_v^{(k+1)}).
$$

At each layer every node **aggregates messages** from its neighbours and updates its hidden state $h_v$. After $K$ layers information propagates $K$ hops across the graph. The final representation $h_v^{(K)}$ is used for predictions; **pooling** (sum, mean, attention) is applied for graph-level tasks.

## Architectural Variants

**Graph Convolutional Network (GCN, Kipf & Welling 2017).** A convolution in the spectral domain approximated by the first Chebyshev expansion:

$$
H^{(k+1)} = \sigma\left(\tilde D^{-1/2} \tilde A \tilde D^{-1/2} H^{(k)} W^{(k)}\right),
$$

where $\tilde A = A + I$ and $\tilde D$ is the degree matrix of $\tilde A$. Simple, fast, works for transductive tasks.

**GraphSAGE (Hamilton et al. 2017).** An inductive method with learned aggregators (mean/max/LSTM) and neighbour sampling. Suitable for large graphs where training on the full adjacency matrix is infeasible.

**Graph Attention Network (GAT, Veličković et al. 2018).** Weighted aggregation with learned attention:

$$
\alpha_{uv} = \frac{\exp(\text{LeakyReLU}(a^\top [W h_v \| W h_u]))}{\sum_{u' \in \mathcal{N}(v)} \exp(\ldots)}.
$$

GAT does not require the global graph structure and provides interpretable neighbour weights.

**Message Passing Neural Networks (MPNN).** A general abstraction of which GCN, GraphSAGE and GAT are special cases. Allows edge features to be part of the message.

**Graph Isomorphism Network (GIN, Xu et al. 2019).** Proven to be as expressive as the Weisfeiler-Lehman 1-WL test; simple and powerful.

**Graph Transformer (Dwivedi & Bresson 2020, Graphormer 2021).** Attention over all pairs of nodes with a positional encoding (e.g., Laplacian eigenvectors). More expressive but $O(N^2)$.

**Equivariant GNNs.** [[equivariant-nn|$E(3)$-equivariant networks]] — a specialised class for 3D molecules, where features transform as irreducible representations of $SO(3)$.

## Over-smoothing and Over-squashing

Two central pathologies of deep GNNs:

**Over-smoothing.** As depth grows, node representations converge to a single vector (the Laplacian spectrum): information is lost. Solutions include residual connections, DropEdge, GCNII, PairNorm.

**Over-squashing.** For tasks with long-range dependencies, information is squeezed through graph bottlenecks. Recent work uses graph rewiring, Ricci flow, and positional encodings.

## Scaling to Large Graphs

A full forward pass through a GNN on a graph with millions of nodes (social networks, derivatives) is impractical. Strategies:

- **Neighbour mini-batches** (GraphSAGE) — sample a subgraph for each batch.
- **Cluster-GCN** — partition the graph into clusters and train on each.
- **Graph Attention Diffusion (GRAND)** — continuous propagation via an [[neural-odes|ODE]].
- **LazyGNN / pre-computation** — pre-computing feature parts.

## Applications

- **Pharmacology and materials.** Predicting molecule and protein properties; generative GNNs for molecular design.
- **Finance.** [[gnn-credit-risk|Credit modelling with network structure]], money-laundering detection through transaction graphs, systemic risk in interbank networks.
- **Recommender systems.** PinSage (Pinterest), LightGCN — user-item graphs.
- **Particle physics.** Track reconstruction in LHC detectors.
- **Knowledge graphs.** Link prediction in knowledge bases, question answering.
- **Transport.** ETA prediction in Google Maps via heterogeneous transport graphs.

## Limitations

**Expressiveness.** 1-WL-based GNNs cannot distinguish certain non-isomorphic graphs. More powerful architectures exist (3-WL GNNs) but are expensive.

**Structural dependence.** Prediction quality drops sharply when graph structure is very noisy or incomplete.

**Training complexity.** Large heterogeneous graphs require careful engineering of sampling, negative examples and regularisation.

## Related Topics

- [[gnn-credit-risk]] — GNN applied to credit risk and systemic contagion
- [[equivariant-nn]] — specialisation of GNN for 3D molecules with symmetry
- [[copula-models]] — the classical default-correlation model that GNN extends
- [[fraud-detection]] — transaction graph for fraud detection
- [[neural-odes]] — continuous GNN via an ODE diffusion
