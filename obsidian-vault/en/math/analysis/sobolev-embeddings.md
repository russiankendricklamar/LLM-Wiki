---
title: 'Functional Analysis: Sobolev Embeddings'
category: Advanced Math and Stats
order: 172
lang: en
slug: sobolev-embeddings
---

Sobolev spaces $W^{k,p}(\Omega)$ consist of functions whose weak derivatives up to order $k$ lie in $L^p$.

### The Spaces
The norm is $\|u\|_{W^{k,p}} = \sum_{|\alpha| \le k} \|D^\alpha u\|_{L^p}$. These spaces are crucial for the rigorous theory of Partial Differential Equations (PDEs).

### Sobolev Embedding Theorems
If $\Omega \subset \mathbb{R}^n$ has a sufficiently regular boundary, we have continuous embeddings:
1. If $k < \frac{n}{p}$, then $W^{k,p}(\Omega) \hookrightarrow L^q(\Omega)$ for any $q \le p^* = \frac{np}{n-kp}$.
2. If $k > \frac{n}{p}$, then functions in $W^{k,p}$ are continuous (Morrey's inequality): $W^{k,p}(\Omega) \hookrightarrow C^{k-\lfloor n/p \rfloor - 1, \gamma}(\Omega)$.
Rellich-Kondrachov and Poincare inequalities further refine the relationship between integrability of derivatives and the smoothness of the function itself.
