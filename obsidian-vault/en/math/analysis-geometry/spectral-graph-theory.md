---
title: Spectral Graph Theory
category: Analysis & Geometry
order: 68
lang: en
slug: spectral-graph-theory
---

# Spectral Graph Theory

## Graph Laplacian
For a simple, undirected graph $G=(V,E)$, the unnormalized Laplacian is $L = D - A$, where $D$ is the degree matrix and $A$ is the adjacency matrix. The normalized Laplacian is:
$$ \mathcal{L} = I - D^{-1/2} A D^{-1/2} $$
For any vector $x \in \mathbb{R}^{|V|}$:
$$ x^T L x = \sum_{(u,v) \in E} (x_u - x_v)^2 $$
This shows $L$ is positive semi-definite. The eigenvalues of $L$ are $0 = \lambda_1 \le \lambda_2 \le \dots \le \lambda_n$.

## Cheeger's Inequality
The algebraic connectivity $\lambda_2$ (Fiedler value) is intimately related to the graph's bottleneck or isoperimetric number $h(G)$:
$$ h(G) = \min_{S \subset V, 0 < |S| \le \frac{n}{2}} \frac{|E(S, \bar{S})|}{|S|} $$
Cheeger's inequality bounds $h(G)$ using the spectrum of the normalized Laplacian (with eigenvalues $\mu_i$):
$$ \frac{\mu_2}{2} \le h(G) \le \sqrt{2\mu_2} $$
This forms the basis of spectral clustering algorithms.

## Expander Graphs
A family of $d$-regular graphs is a family of expanders if there is a uniform lower bound on the spectral gap: $\lambda_2 \ge \epsilon > 0$. By Cheeger's inequality, they are highly connected but sparse, making them crucial in theoretical computer science, error-correcting codes, and cryptography.

