---
title: "Graph Curvature & Over-squashing"
category: "Analysis & Geometry"
order: 102
lang: "en"
slug: "graph-curvature-oversquashing"
---

# Graph Curvature & Over-squashing

## What Is It

The geometry of a graph profoundly influences the information flow within Graph Neural Networks (GNNs). **Over-squashing** is a phenomenon where the fixed-size hidden state of a node becomes a bottleneck when aggregating information from an exponentially growing number of neighbors in the receptive field. Recent research has linked this bottleneck to the **Ricci curvature** of the graph, showing that negatively curved edges (bridges) are the primary culprits for information loss.

## Ollivier-Ricci Curvature

Ollivier-Ricci curvature (ORC) discretizes the concept of Ricci curvature by comparing the optimal transport distance between two probability measures (random walk distributions) to the distance between the nodes themselves.

Let $m_x$ be the probability measure for a one-step random walk from node $x$:
$$m_x(z) = \begin{cases} \alpha & \text{if } z=x \\ (1-\alpha)/d(x) & \text{if } z \sim x \\ 0 & \text{otherwise} \end{cases}$$
The **Ollivier-Ricci curvature** $\kappa(x, y)$ of an edge $(x, y)$ is:
$$\kappa(x, y) = 1 - \frac{W_1(m_x, m_y)}{d(x, y)}$$
where $W_1$ is the $L_1$ Wasserstein distance (Earth Mover's Distance).
- **Positive curvature** ($\kappa > 0$): Nodes have many common neighbors (cliques).
- **Negative curvature** ($\kappa < 0$): The edge is a bridge between two poorly connected clusters.

## Over-squashing and Sensitivity

Over-squashing is formally quantified by the sensitivity of node $i$'s features at layer $h+1$ to node $j$'s features at layer 0: $\left| \frac{\partial h_i^{(L)}}{\partial h_j^{(0)}} \right|$.
In graphs with bottleneck edges, this sensitivity decays exponentially with the distance, even if the graph diameter is small.

Toews et al. showed that the Jacobian of the message passing operation is bounded by a term related to the spectral gap and the curvature. Specifically, edges with $\kappa \ll 0$ lead to poor mixing and information bottlenecks.

## Spectral Gap and Cheeger Constant

The spectral gap $\lambda_2$ (second eigenvalue of the [[spectral-graph-theory|Laplacian]]) and the Cheeger constant $h(G)$ are global measures of graph connectivity. Negatively curved edges directly contribute to a small $\lambda_2$, as seen in the Buser-type inequalities for graphs.

## Graph Rewiring (SDRF)

To alleviate over-squashing, one can perform **Stochastic Discrete Ricci Flow (SDRF)**. This process iteratively:
1. Identifies edges with the most negative ORC.
2. Adds edges in the vicinity to create triangles and "fill" the curvature hole.
3. Optionally removes edges with high positive curvature to maintain sparsity.

This transforms the graph into a more "geometrically flat" or "positively curved" structure, facilitating better long-range communication.

## MATHEMATICAL DERIVATION: ORC on a Triangle

Consider an edge $(x, y)$ in a graph. Assume $\alpha=0$ and the edge is part of $k$ triangles.
Let $d_x, d_y$ be the degrees. The transport cost $W_1(m_x, m_y)$ involves:
- Moving mass between shared neighbors (cost 0).
- Moving mass between $x$ and $y$.
- Moving mass between non-shared neighbors.

For a regular graph of degree $d$ where $(x, y)$ belongs to $k$ triangles:
$$\kappa(x, y) = \frac{k+1}{d} - 1 + \dots$$ (simplified).
If $k \approx d$, $\kappa$ is positive. If $k=0$, $\kappa \approx 1/d - 1$, which is strongly negative for large $d$.

## Related Topics
[[spectral-graph-theory|Spectral Graph Theory]] — [[spectral-theory-operators|eigenvalues]] and connectivity  
[[graph-neural-networks|Graph Neural Networks]] — the architectural context  
[[optimal-transport|Optimal Transport]] — defining Wasserstein distances  
[[ricci-flow|Ricci Flow]] — the continuous inspiration  
[[geometric-deep-learning|Geometric Deep Learning]] — the broader field
