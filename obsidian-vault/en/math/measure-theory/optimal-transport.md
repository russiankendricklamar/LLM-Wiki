---
title: "Optimal Transport"
category: "Measure Theory"
order: 40
lang: "en"
slug: "optimal-transport"
growth: "seedling"
---

Optimal transport is a foundational framework in probability theory and functional analysis that defines distances between probability measures and recovers structure in measure-coupling problems. Beginning with Monge's classical 1781 formulation, the theory has evolved into a powerful computational apparatus woven throughout machine learning, mathematical physics, and quantitative finance.

## Monge's Problem and Its Limitations

The classical formulation: given two probability measures $\mu$ and $\nu$ on $\mathbb{R}^d$, find a transport map $T: \mathbb{R}^d \to \mathbb{R}^d$ minimizing

$$\int_{\mathbb{R}^d} c(x, T(x)) \, d\mu(x),$$

where $c: \mathbb{R}^d \times \mathbb{R}^d \to \mathbb{R}_+$ is a cost function, subject to the pushforward constraint $T_\# \mu = \nu$ (the image of $\mu$ under $T$ equals $\nu$).

Critical limitation: a deterministic transport map does not always exist. If $\mu$ is atomic (a sum of Dirac masses) and $\nu$ is absolutely continuous, no map can satisfy both marginal constraints simultaneously. Monge could not resolve this impasse.

## Kantorovich's Relaxation

Kantorovich (1942) achieved a revolutionary pivot from deterministic to probabilistic: instead of a map $T$, seek a coupling $\gamma$—a joint distribution with prescribed marginals $\mu$ and $\nu$:

$$\gamma \in \Gamma(\mu, \nu) = \{\gamma \in \mathcal{P}(\mathbb{R}^d \times \mathbb{R}^d) : \text{pr}_1 \# \gamma = \mu, \, \text{pr}_2 \# \gamma = \nu\}.$$

Kantorovich's problem:

$$W_p(\mu, \nu) = \left( \inf_{\gamma \in \Gamma(\mu,\nu)} \int_{\mathbb{R}^d \times \mathbb{R}^d} c(x,y)^p \, d\gamma(x,y) \right)^{1/p}.$$

Core advantage: the set $\Gamma(\mu, \nu)$ is always nonempty and convex; the problem becomes a linear program in measure space. Existence of a minimizer is guaranteed by compactness and lower semicontinuity.

## Wasserstein-1 Distance and Duality

The Wasserstein-1 distance (cost $c(x,y) = |x-y|$) admits an elegant dual characterization. By the Kantorovich-Rubinstein duality theorem:

$$W_1(\mu, \nu) = \sup_{\|f\|_{\text{Lip}} \leq 1} \left| \mathbb{E}_\mu[f] - \mathbb{E}_\nu[f] \right|,$$

where the supremum ranges over all 1-Lipschitz functions $f: \mathbb{R}^d \to \mathbb{R}$. This outperforms Kullback-Leibler divergence: $W_1$ is properly defined for measures with disjoint support, whereas $\text{KL}(\mu \| \nu) = \infty$ in such cases.

The duality reveals why $W_1$ is geometrically meaningful: it measures the worst-case expectation gap under all slowly-varying functions, a robust notion of distributional distance.

## Wasserstein-2 and Brenier's Theorem

For quadratic cost $c(x,y) = |x-y|^2$, the optimal transport map is uniquely recovered via Brenier's theorem:

**Brenier's Theorem.** If $\mu$ is absolutely continuous with respect to Lebesgue measure, the unique optimal Monge transport is $T = \nabla \varphi$, where $\varphi$ is convex and satisfies $T_\# \mu = \nu$.

The function $\varphi$ solves the Monge-Ampere equation:

$$\det(\nabla^2 \varphi(x)) = \frac{\mu(x)}{\nu(\nabla \varphi(x))}.$$

This equation links optimal transport to convex analysis. The Hessian $\nabla^2 \varphi$ governs measure stretching: where $\mu$ has high density, $\nabla^2 \varphi$ is small (spreading); where $\nu$ is high, compression occurs.

The solution is gradient flow of a potential. Brenier's insight transforms a combinatorial matching problem into nonlinear PDE, merging probability and geometry.

## Sliced Wasserstein Distance

Computing exact $W_2$ in high dimensions becomes intractable: it requires solving Monge-Ampere. An effective alternative is the sliced Wasserstein distance:

$$\text{SW}_p(\mu, \nu) = \left( \int_{S^{d-1}} W_p(\pi_u \# \mu, \pi_u \# \nu)^p \, d\sigma(u) \right)^{1/p},$$

where $\pi_u(x) = \langle x, u \rangle$ projects onto direction $u \in S^{d-1}$, and $\sigma$ is the uniform measure on the unit sphere. In 1D, Wasserstein has closed form (monotone rearrangement).

Computational cost: $O(N \log N)$ versus $O(N^3)$ for exact transport. The sliced variant approximates the full distance with theoretical guarantees and is widely used in deep learning.

## Sinkhorn's Algorithm

For numerical solution, add entropic regularization:

$$W_p^\varepsilon(\mu, \nu) = \inf_{\gamma \in \Gamma(\mu,\nu)} \int c(x,y)^p \, d\gamma - \varepsilon H(\gamma),$$

where $H(\gamma)$ is the entropy of $\gamma$. The problem remains convex but becomes differentiable and tractable.

Sinkhorn's algorithm solves this via alternating scaling updates. For discrete measures ($\mu = \sum_i a_i \delta_{x_i}$, $\nu = \sum_j b_j \delta_{y_j}$), construct the cost matrix $K_{ij} = \exp(-c(x_i, y_j)/\varepsilon)$ and iterate:

$$u^{(t+1)}_i = \frac{a_i}{\sum_j K_{ij} v^{(t)}_j}, \quad v^{(t+1)}_j = \frac{b_j}{\sum_i K_{ij} u^{(t+1)}_i}.$$

Convergence is guaranteed; the result is differentiable with respect to parameters—critical for backpropagation in neural networks.

## Machine Learning Applications

**Wasserstein GANs.** The discriminator (critic) is trained as a 1-Lipschitz function, estimating $W_1$ between real and generated distributions via Kantorovich-Rubinstein duality. This eliminates the vanishing gradient problem endemic to standard GANs.

**Interpolation and geodesics.** The optimal transport plan $\gamma^*$ defines meaningful pathways between distributions. Wasserstein geodesics, parametrized as $\mu_t = ((1-t) \text{id} + t \nabla \varphi)_\# \mu$, minimize path energy and respect the geometry of probability space.

**Point matching and alignment.** The optimal plan reveals correspondences between point clouds, useful in computer vision and shape analysis. Unlike Euclidean matching, OT accounts for the entire distribution.

## Quantitative Finance Applications

Portfolio optimization under model ambiguity reduces to a robust OT problem: the portfolio manager minimizes worst-case loss across all models consistent with observations. This yields Kantorovich duality in action—the hedge ratio is the value of an optimal coupling.

**Martingale optimal transport** imposes martingality constraints: find $\gamma$ in the family of martingale couplings minimizing an expected payoff, yielding model-free option price bounds. The Monge-Ampere equation governs the no-arbitrage envelope.

Rebalancing costs and transaction delays embed as additional marginal constraints in extended OT problems. [[convex-optimization-trading|Convex optimization]] machinery directly applies.

## Connections to Measure Theory

Optimal transport exists on any Polish space within [[sigma-algebra-measurability|measure theory]] foundations. [[weak-convergence-prokhorov|Weak convergence]] of measures coincides with convergence in Wasserstein metric with $p=1$.

**Completeness.** The space of probability measures on a compact set, equipped with the Wasserstein metric, forms a complete metric space. This enables functional analytic machinery: spectral theory, fixed-point theorems, and calculus on measure spaces.

The framework extends to generative modeling: [[diffusion-models|diffusion]] and [[variational-autoencoders|VAE]] training often use OT-based losses, and [[generative-models|generative models]] benefit from stable, geometric distance metrics that OT provides.
