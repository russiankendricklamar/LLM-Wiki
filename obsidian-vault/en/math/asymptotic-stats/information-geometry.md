---
slug: "/math/information-geometry"
title: "Information Geometry"
category: "Asymptotic Statistics"
order: 30
lang: "en"
---

# Information Geometry

Information geometry applies classical differential geometry to the space of probability distributions. The core idea: the set of all distributions $p(x; \theta)$ parametrized by $\theta \in \mathbb{R}^d$ forms a Riemannian manifold, and the metric is defined by the **Fisher information matrix**. This perspective converts classical statistical inequalities (Cramér-Rao, KL divergence) into geometric statements about the curvature of parameter space, and opens new algorithms in machine learning via the **natural gradient**.

## Fisher metric and statistical manifolds

The Fisher information matrix is defined as
$$F_{ij}(\theta) = \mathbb{E}_p\left[\frac{\partial \log p(x; \theta)}{\partial \theta_i} \cdot \frac{\partial \log p(x; \theta)}{\partial \theta_j}\right] = -\mathbb{E}_p\left[\frac{\partial^2 \log p(x; \theta)}{\partial \theta_i \partial \theta_j}\right],$$
where both expressions coincide under regularity conditions. The matrix $F(\theta)$ is positive semi-definite and non-singular for regular families. It defines a Riemannian metric on parameter space:
$$ds^2 = d\theta^T F(\theta) d\theta.$$

This metric is not arbitrary—it emerges from the geometry of Kullback-Leibler divergence. For nearby distributions $p(x; \theta)$ and $p(x; \theta + d\theta)$:
$$KL(p_\theta \| p_{\theta+d\theta}) \approx \frac{1}{2} d\theta^T F(\theta) d\theta.$$

Thus the Fisher metric naturally encodes the local distance between distributions in terms of their KL divergence.

## Cramér-Rao bound as geometry

The Cramér-Rao inequality states that for an unbiased estimator $\hat{\theta}$ of parameter $\theta$:
$$\text{Var}(\hat{\theta}) \geq F(\theta)^{-1}.$$

In information-geometric language: the radius of uncertainty in an estimate cannot be smaller than the inverse Fisher distance. For maximum likelihood, asymptotically (under [[local-asymptotic-normality|LAN]]):
$$\sqrt{n}(\hat{\theta}_n - \theta) \xrightarrow{d} N(0, F(\theta)^{-1}).$$

The Fisher metric determines the "natural" convergence rate of parameter estimation. The geometric interpretation: geodesics on the statistical manifold measure the width of parameter neighborhoods accessible from the observed data.

## α-Connections and duality

The statistical manifold admits a family of affine connections parametrized by a real scalar $\alpha$. Amari showed that the Fisher metric can be supplemented by a pair of mutually dual connections: the $(+1)$-connection (exponential) and $(-1)$-connection (mixture). For an exponential family
$$p(x; \theta) = h(x) \exp(\theta \cdot T(x) - A(\theta)),$$
both connections are flat (zero curvature)—the manifold is simultaneously flat in two complementary directions. This flatness property is essential for practical algorithms.

For general curves, the $\alpha$-connection is defined via the Christoffel symbols:
$$\Gamma_{ij,k}^{(\alpha)} = (1 - \alpha) \Gamma_{ij,k}^{(0)} + (1 + \alpha) \Gamma_{ij,k}^{(-1)},$$
where the $(0)$-connection is Levi-Civita (metric-compatible, torsion-free) and the $(±1)$-connections are the exponential and mixture families. The self-dual case $\alpha = 0$ recovers Riemannian geometry.

## Natural gradient descent

Classical gradient descent moves in the direction of $\nabla L(\theta)$ in Euclidean space. On a curved statistical manifold, the natural direction of steepest descent is along a **geodesic**, weighted by the metric. Amari (1998) proposed the **natural gradient**:
$$\theta_{t+1} = \theta_t - \eta F(\theta_t)^{-1} \nabla L(\theta_t).$$

The Fisher-weighted gradient $F^{-1} \nabla L$ is the steepest descent direction in the metric-induced topology. In practice:

- For MLE problems, the natural gradient often coincides with Newton's method direction and converges in far fewer steps than vanilla SGD;
- In deep neural networks, the **K-FAC** method (Kronecker-factored approximate curvature) approximates $F^{-1}$ using block-diagonal Kronecker structure, making the method computationally tractable;
- Hybrid methods (KFAC-Adam, natural SGD with bias correction) are competitive with Adam in convergence speed and solution quality.

The natural gradient bridges differential geometry and optimization: it says that the right notion of "steepness" depends on the geometry of the loss surface.

## Exponential families: canonical coordinates

For the exponential family
$$p(x; \theta) = h(x) \exp(\theta \cdot T(x) - A(\theta)),$$
where $A(\theta) = \log \int h(x) \exp(\theta \cdot T(x)) dx$ is the log-partition function, the Fisher matrix has a remarkable form:
$$F(\theta) = \nabla^2 A(\theta).$$

The sufficient statistics $T(x)$ are the natural (canonical) coordinates on the manifold. Geodesics on such manifolds have closed-form solutions. The **EM algorithm** can be interpreted as natural gradient descent on the manifold of mixture models, and this geometric view explains why EM converges and how to accelerate it.

## Applications in machine learning

**Variational inference** can be formulated as orthogonal projection onto a submanifold of exponential family in the KL metric. The choice between forward KL and reverse KL corresponds to choosing the $\alpha$-connection: forward KL is reverse-mode (mixture family), reverse KL is forward-mode (exponential family). Understanding this clarifies the bias of approximate posterior families.

**Policy gradient methods and RLHF** (reinforcement learning from human feedback) can be reformulated using natural gradients on the manifold of action distributions. The Fisher metric interprets the distance between policies as expected KL divergence and naturally encodes local trust in approximations—this is why natural policy gradient converges better than vanilla policy gradient.

**Scaling to high dimensions** requires structured approximations of $F$. Beyond K-FAC (block-wise Kronecker factorization), practical methods include Kronecker-factored + low-rank corrections, sketched Fisher, and diagonal approximations, each trading expressivity for computational cost.

## Related concepts

- [[local-asymptotic-normality|Local asymptotic normality (LAN)]] — asymptotic theory foundation.
- [[large-deviations-cramer|Large deviations]] — complementary asymptotic regime.
- [[automatic-differentiation|Automatic differentiation]] — computing gradients and Hessians.
- [[kolmogorov-probability-axioms|Kolmogorov probability axioms]] — formal framework.
- [[statistical-mechanics|Statistical mechanics]] — thermodynamic analogues of information geometry.
- [[rlhf|RLHF]] — policy learning via reward feedback.
- [[characteristic-functions|Characteristic functions]] — Fourier tools for studying distributions.
