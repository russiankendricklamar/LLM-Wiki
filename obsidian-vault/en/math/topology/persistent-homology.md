---
title: Persistent Homology
category: Topology
order: 61
lang: en
slug: persistent-homology
---

# Persistent Homology

## Topology of Data
Persistent homology provides a multi-scale approach to studying the topological features of data. Let $X$ be a point cloud. We build a filtered simplicial complex $\emptyset = K_0 \subseteq K_1 \subseteq \dots \subseteq K_m = K$.

## Filtration and Homology
Applying the homology functor over a field $\mathbb{F}$ yields a persistence module:
$$ H_k(K_0) \to H_k(K_1) \to \dots \to H_k(K_m) $$
The $p$-th persistent homology groups are:
$$ H_k^{i,p} = Z_k(K_i) / (B_k(K_{i+p}) \cap Z_k(K_i)) $$

## Barcodes and Persistence Diagrams
By the structure theorem of finitely generated modules over a PID, a persistence module decomposes into interval modules:
$$ M \cong \bigoplus_{j=1}^n I[b_j, d_j) $$
This multiset of intervals is called a *barcode*. A persistence diagram plots the points $(b_j, d_j) \in \overline{\mathbb{R}}^2$.

## Stability Theorem
Let $f, g: X \to \mathbb{R}$ be tame functions. The bottleneck distance between their persistence diagrams is bounded by the $L_\infty$ distance:
$$ W_\infty(D(f), D(g)) \le \| f - g \|_\infty $$
where $W_\infty(D_1, D_2) = \inf_{\gamma} \sup_{x \in D_1} \| x - \gamma(x) \|_\infty$.

