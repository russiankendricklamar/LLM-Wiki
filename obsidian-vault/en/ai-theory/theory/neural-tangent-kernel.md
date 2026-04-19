---
title: "Neural Tangent Kernel"
category: "AI Theory"
order: 10
lang: "en"
slug: "/ai-theory/neural-tangent-kernel"
growth: "seedling"
---

# Neural Tangent Kernel

The Neural Tangent Kernel (NTK) is a theoretical framework that characterizes the training dynamics of infinite-width neural networks and reveals a surprising equivalence to kernel methods. Introduced by Jacot et al. (2018), NTK provides a bridge between the nonparametric world of kernel regression and the parametric learning of deep networks, explaining when and why neural networks behave like classical machine learning algorithms.

## Motivation: The Infinite-Width Limit

A neural network is fundamentally a parametrized function $f_\theta(x)$ with weights $\theta \in \mathbb{R}^p$. During training, gradient descent updates weights: $\dot{\theta}_t = -\eta \nabla_\theta \mathcal{L}(\theta_t)$ where $\eta$ is the learning rate and $\mathcal{L}$ is the loss. The function itself evolves indirectly through its parameters.

The central question: **what happens to the function dynamics as the network width (number of hidden units) $m \to \infty$?**

Remarkably, as $m \to \infty$, the weights move infinitesimally in parameter space—they stay locked near initialization. Yet the function $f_\theta(x)$ can still fit the data. This frozen-weight regime is captured precisely by kernel methods.

## The NTK Definition

Define the **Neural Tangent Kernel** as:
$$\Theta(x, x') = \langle \nabla_\theta f_\theta(x), \nabla_\theta f_\theta(x') \rangle$$

where the inner product is over all parameters. This measures the correlation between the gradient vectors of the function output with respect to parameters, evaluated at two inputs $x$ and $x'$.

For a fully-connected ReLU network of width $m$ with initialization via He scaling, the NTK can be computed recursively layer-by-layer using implicit differentiation. The key insight: **at infinite width, this kernel becomes deterministic and constant in time**, denoted $\Theta^*(x, x')$.

## Gradient Flow in Function Space

Under gradient flow (continuous-time limit of gradient descent) starting from initialization $\theta_0$ and loss $\mathcal{L}(y_{\text{pred}}) = \frac{1}{2}(y_{\text{pred}} - y)^2$, the change in function values evolves linearly:

$$\partial_t f_\theta(x) = -\nabla_\theta f_\theta^T(x) \cdot \dot{\theta}_t = \eta \nabla_\theta f_\theta^T(x) \cdot \nabla_\theta \mathcal{L}$$

For $n$ training samples with target labels $\mathbf{y}$, the function vector $\mathbf{f}_t = (f_\theta(x_1), \ldots, f_\theta(x_n))$ satisfies:

$$\partial_t \mathbf{f}_t = -\Theta(\mathbf{f}_t - \mathbf{y})$$

where $\Theta$ is the NTK matrix with entries $\Theta_{ij} = \Theta(x_i, x_j)$. This is a linear ODE in function space:

$$\mathbf{f}(t) = \mathbf{f}(0) - \int_0^t \Theta(\mathbf{f}(s) - \mathbf{y}) \, ds$$

Solving:
$$\mathbf{f}(t) = \mathbf{y} + \exp(-t\Theta)(\mathbf{f}(0) - \mathbf{y})$$

If $\Theta$ is positive definite (which holds for networks with sufficient width and appropriate initialization), the error **decays exponentially**: $\|\mathbf{f}(t) - \mathbf{y}\| \leq \exp(-\lambda_{\min}(\Theta) \cdot t) \|\mathbf{f}(0) - \mathbf{y}\|$ where $\lambda_{\min}(\Theta) > 0$ is the smallest eigenvalue.

## Kernel Regime vs. Feature Learning Regime

The NTK describes the **lazy training regime**: the network computes with features fixed at initialization. This regime occurs when:
- Width $m$ is very large (typically $m \gg n$ where $n$ is number of samples)
- Learning rate is small ($\eta \to 0$)
- Training time is finite (not asymptotically large)

In contrast, the **feature learning regime** occurs when the network width is moderate or learning is slow enough that feature representations adapt. Recent work (Allen-Zhu et al., 2019; Chizat et al., 2019) shows that feature learning requires either:
- Explicit regularization (e.g., $\ell_2$ weight decay)
- Mean field scaling where all parameters change at the same rate

Most practical deep learning operates between these extremes, making NTK a limiting case—useful theoretically but not fully predictive of real training.

## Convergence Guarantees and Over-Parameterization

The NTK framework provides **PAC-style guarantees**: if $\Theta$ is positive definite with minimum eigenvalue $\lambda$, and the network is sufficiently over-parameterized (width $m \gtrsim \text{poly}(n, d, \|y\|_{\infty}) / \lambda^2$), then gradient descent converges to zero training loss in polynomial time with polynomial width.

This explains the *interpolation* phenomenon: sufficiently wide networks can fit arbitrary labels, and NTK predicts this is feasible without overfitting when regularized appropriately.

## Connection to Gaussian Processes

At infinite width, the distribution of $f_\theta(x)$ becomes a [[gaussian-processes|Gaussian process]] (NNGP—Neural Network Gaussian Process). The posterior mean of this GP exactly matches the NTK predictor:

$$\hat{f}(x) = f_0(x) + \mathbf{k}(x)^T (\Theta + \lambda \mathbf{I})^{-1} (\mathbf{y} - \mathbf{f}_0)$$

where $\mathbf{k}(x) = (\Theta(x, x_1), \ldots, \Theta(x, x_n))$ and $\lambda$ is noise/regularization level. The kernel is determined entirely by the network architecture and initialization distribution, offering interpretability: a neural network of infinite width reduces to nonparametric kernel regression with a learned kernel.

## Finite-Width Corrections and Mean Field Theory

Real networks are finite. When width $m$ is large but finite, NTK receives corrections. **Mean field theory** (Mei et al., 2018) models this: divide all weights by $\sqrt{m}$ so the neural tangent kernel stays $O(1)$. Under mean field scaling:

$$\partial_t \theta_j^{(l)} = -\eta \frac{1}{m} \sum_i \nabla_{\theta_j^{(l)}} f_\theta(x_i) (f_\theta(x_i) - y_i)$$

Individual parameters change by $O(1/m)$ but collectively drive learning. The NTK still governs the function evolution, with corrections that decay as $O(1/m)$.

## NTK for Transformers and Modern Architectures

NTK extends beyond fully-connected networks. For **transformer architectures**, the NTK kernel has been computed for attention mechanisms (Yang et al., 2020). The kernel encodes interaction patterns:
- Self-attention preserves position-dependent correlations
- Cross-entropy loss couples inputs nonlinearly
- Residual connections promote kernel stability

However, transformers in practical settings are not in the NTK regime—they adapt features substantially during training, explaining why scaling laws (see [[neural-scaling-laws]]) rather than NTK dynamics govern performance.

## Practical Implications

**Learning rate scaling:** In the NTK regime with loss MSE, optimal learning rate scales as $\eta^* \sim 1 / \lambda_{\max}(\Theta)$. Too large and the solver diverges; too small and convergence is slow. This guides hyperparameter tuning for over-parameterized models.

**Width requirements:** To achieve loss $\epsilon$ in regression, networks need width $m \gtrsim (n + \sqrt{n \log(1/\epsilon)}) / \epsilon^2$. This poly-nominal over-parameterization is necessary for theoretical guarantees but often pessimistic in practice.

**Limitations:** NTK assumes fixed features and cannot explain phenomena like [[in-context-learning]] or sharp phase transitions observed in practice. Modern deep learning often departs from the NTK regime where features are learned dynamically.

## Further Reading

- Jacot, Gabriel, Hongler (2018)—the definitive NTK paper.
- Connection to [[automatic-differentiation]] and efficient kernel computation.
- [[gaussian-processes|Gaussian processes]] via NNGP limit.
- [[neural-scaling-laws|Neural scaling laws]] beyond the NTK regime.
- [[pac-learning|PAC learning]] bounds for over-parameterized networks.
- [[concentration-inequalities|Concentration inequalities]] ensure finite-width convergence.
- Mean field theory: Mei, Montanari, Nguyen (2018).
