---
title: "Singular Learning Theory"
category: "Statistical Learning"
order: 82
lang: "en"
slug: "singular-learning-theory"
---

# Singular Learning Theory

Singular Learning Theory (SLT), pioneered by Sumio Watanabe, provides a rigorous mathematical framework for analyzing learning models where the map from parameters to probability distributions is not identifiable. In such models—which include deep neural networks, mixture models, and hidden Markov models—the Fisher information matrix becomes degenerate, rendering classical statistical asymptotics (like the Cramér-Rao bound and AIC) invalid.

## The Free Energy and RLCT

In Bayesian inference, a central quantity is the free energy (or negative log marginal likelihood), defined as:
$$
\mathcal{F}_n = - \log Z_n = - \log \int \exp(-n L_n(w)) \varphi(w) dw
$$
where $L_n(w)$ is the empirical loss (e.g., negative log-likelihood), $\varphi(w)$ is the prior, and $n$ is the sample size.

Classical learning theory assumes that the true parameter $w_0$ is unique and regular, leading to the asymptotic expansion $\mathcal{F}_n \approx n L_n(w_0) + \frac{d}{2} \log n$, where $d$ is the number of parameters. 

In singular models, the set of true parameters $W_0 = \{ w : L(w) = L(w_0) \}$ is an analytic set with singularities. Watanabe utilized Hironaka's Resolution of Singularities theorem from algebraic geometry to resolve these singularities. By constructing a proper analytic map $g : \mathcal{M} \to \mathcal{W}$ such that the pullback of the Kullback-Leibler divergence $K(w)$ has normal crossings:
$$
K(g(u)) = u_1^{2k_1} u_2^{2k_2} \dots u_d^{2k_d}
$$
we can evaluate the integral asymptotically.

The resulting expansion for the free energy is:
$$
\mathcal{F}_n = n L_n(w_0) + \lambda \log n - (m - 1) \log \log n + O_p(1)
$$
where $\lambda$ is the **Real Log Canonical Threshold (RLCT)** and $m$ is its multiplicity. The RLCT is a birational invariant that measures the complexity of the singular model, effectively replacing the dimension $d/2$ in classical criteria (such as BIC). 

## Resolution of Singularities

To compute $\lambda$, one analyzes the geometry of the variety defined by $K(w)=0$. The RLCT is defined analytically as the infimum of the poles of the zeta function:
$$
\zeta(z) = \int K(w)^z \varphi(w) dw
$$
In algebraic geometry, $\lambda$ corresponds to the minimum of $\frac{h_i + 1}{k_i}$ over all coordinate charts $i$ in the resolved space, where $h_i$ arises from the Jacobian determinant of the resolution map $g$.

## Generalization Error

The generalization error in singular models is heavily influenced by the RLCT. The expected generalization error asymptotically scales as:
$$
\mathbb{E}[G_n] = \frac{\lambda}{n}
$$
Since $\lambda < d/2$ for singular models, SLT demonstrates that singular models inherently achieve a lower generalization error than would be naively expected from their parameter count, providing a profound theoretical justification for the success of heavily overparameterized models like deep neural networks.
