---
title: Sobolev Spaces & Weak Solutions
category: Functional Analysis
order: 65
lang: en
slug: sobolev-spaces
---

# Sobolev Spaces & Weak Solutions

## Weak Derivatives
A locally integrable function $u \in L^1_{loc}(\Omega)$ has a weak derivative $v = D^\alpha u$ if for all test functions $\phi \in C_c^\infty(\Omega)$:
$$ \int_\Omega u D^\alpha \phi \,dx = (-1)^{|\alpha|} \int_\Omega v \phi \,dx $$

## Sobolev Spaces $W^{k,p}$
The Sobolev space $W^{k,p}(\Omega)$ consists of functions in $L^p(\Omega)$ whose weak derivatives up to order $k$ also belong to $L^p(\Omega)$. The norm is:
$$ \|u\|_{W^{k,p}(\Omega)} = \left( \sum_{|\alpha| \le k} \|D^\alpha u\|_{L^p(\Omega)}^p \right)^{1/p} $$
For $p=2$, $H^k(\Omega) = W^{k,2}(\Omega)$ is a Hilbert space.

## Sobolev Embeddings
The Gagliardo-Nirenberg-Sobolev inequality states that for $1 \le p < n$, $W^{1,p}(\mathbb{R}^n)$ is continuously embedded in $L^{p^*}(\mathbb{R}^n)$, where $p^* = \frac{np}{n-p}$.
If $p > n$, $W^{1,p}(\Omega)$ embeds into Hölder spaces $C^{0,\gamma}(\bar{\Omega})$.

## Rellich-Kondrachov Theorem
On a bounded domain $\Omega$ with Lipschitz boundary, the embedding $W^{1,p}(\Omega) \hookrightarrow L^q(\Omega)$ is *compact* for $1 \le q < p^*$.

## Physics-Informed Neural Networks (PINNs)
In modern computational mechanics, weak solutions are approximated via Neural Networks. PINNs often solve variational formulations in Sobolev spaces (e.g., Deep Ritz Method), minimizing the energy functional:
$$ J(u) = \frac{1}{2} \int_\Omega |\nabla u|^2 dx - \int_\Omega f u \,dx $$
which is well-posed in $H^1_0(\Omega)$ by the Lax-Milgram theorem.

