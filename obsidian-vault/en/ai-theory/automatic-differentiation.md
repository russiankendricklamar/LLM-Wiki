---
title: "Automatic Differentiation"
category: "AI Theory"
order: 6
lang: "en"
slug: "automatic-differentiation"
---

# Automatic Differentiation

**Automatic differentiation (AD, autodiff)** is a family of techniques for computing exact derivatives of an arbitrary program at essentially the same cost as evaluating the function itself. Unlike numerical differentiation (finite differences, $O(\epsilon)$ error) and symbolic differentiation (formula blowup), AD works on the computational graph and yields machine-precision gradients. It is the foundation of modern deep learning: without AD there would be no backpropagation, no PyTorch, no PINNs.

## The idea: function as a computational graph

Any software function $f: \mathbb{R}^n \to \mathbb{R}^m$ can be decomposed into a composition of elementary operations $+, -, \times, /, \sin, \exp, \log, \dots$. This decomposition forms a **directed acyclic graph (DAG)**: nodes are intermediate values, edges are elementary operations.

For example, $f(x_1, x_2) = \sin(x_1 x_2) + x_1^2$ becomes:

```
x1 ──┬─→ * ──→ sin ──┐
     └─→ ^2 ─────────┴─→ +  = f
x2 ──┘
```

AD applies the chain rule to this graph.

## Two modes: forward and reverse

### Forward mode

For every elementary operation $v = g(u)$ we carry a pair $(v, \dot v)$, where $\dot v = g'(u) \dot u$ is the derivative with respect to one input coordinate. Walking the graph from inputs to outputs, we compute the function value and its tangent simultaneously.

Cost per pass: roughly 2-3× the forward evaluation. To obtain the full Jacobian $J \in \mathbb{R}^{m \times n}$ we need $n$ passes (one per input column). **Efficient when $n \ll m$** — few inputs, many outputs.

### Reverse mode

Reverse mode is **backpropagation** in full generality. First a forward pass records all intermediate values on a tape. Then a backward pass: starting from a unit gradient at the output, it propagates **adjoints** $\bar v = \partial f / \partial v$ back through the graph.

One reverse pass yields **an entire row of the Jacobian** — the gradient of a single output with respect to all inputs. Cost: about 3-4× the forward evaluation. **Efficient when $n \gg m$** — many parameters, one scalar loss. This is exactly the regime of neural network training.

## Dual numbers and operator overloading

The cleanest implementation of forward mode uses **dual numbers** $x + \epsilon \dot x$ with $\epsilon^2 = 0$. Arithmetic:

$$
(a + \epsilon \dot a)(b + \epsilon \dot b) = ab + \epsilon(a\dot b + b \dot a)
$$

so value and derivative fall out together. Libraries like JAX and Julia's ForwardDiff implement this via operator overloading.

## Source-to-source vs tracing

**Tracing (dynamic AD).** PyTorch builds the graph on the fly as the user code executes. Flexible and convenient for research, but each run re-builds the graph.

**Source-to-source.** A compiler (JAX, Tapenade, Enzyme) reads the function source and emits new source code for the gradient. Faster, allows aggressive optimisation, but constrains the language.

## Numerical considerations

**Checkpointing.** Reverse mode must store all forward-pass intermediates — $O(T)$ memory for a depth-$T$ network. Checkpointing trades computation for memory by recomputing some values, reducing memory to $O(\sqrt{T})$. Essential for training very deep models.

**Mixed precision.** Gradients are held in FP32 while activations live in FP16/BF16. Speeds up GPU training but requires dynamic loss scaling to prevent underflow.

**Stop-gradient.** Sometimes we want to cut gradient flow through part of the graph — e.g. target networks in RL, or frozen layers. `tensor.detach()` / `jax.lax.stop_gradient` handle this.

## Higher-order derivatives

AD composes easily: applying reverse mode to a function that is itself the output of reverse mode yields second derivatives. This enables:

- **Hessian-vector products** $Hv$ at 2× the gradient cost, used by Newton-CG optimisers.
- **PDE residuals in [[pinns]]:** for $u_t = \alpha u_{xx}$ one needs $\partial_t u$ and $\partial^2_x u$, both via nested AD.
- **Implicit differentiation** through optimisation: differentiating the solution of an inner problem.

## Applications

- **Training neural networks.** Backpropagation is exactly reverse-mode AD on the forward computation graph.
- **Bayesian inference.** Variational methods, Hamiltonian Monte Carlo (NUTS) and stochastic gradient Langevin dynamics require gradients of log densities.
- **Scientific ML.** [[pinns]] and Neural ODEs use AD to form [[partial-differential-equations|PDE]] residuals without finite-difference approximations.
- **Differentiable physics.** Rigid body, fluid, and graphics simulators are made differentiable so inverse problems can be solved by gradient descent.
- **Meta-learning.** MAML and related algorithms differentiate through inner gradient descent steps.
- **Portfolio optimisation.** Modern [[black-scholes|derivative]] pricers use AD to compute Greeks.

## Example: PyTorch

```python
import torch

x = torch.tensor(2.0, requires_grad=True)
y = torch.tensor(3.0, requires_grad=True)

f = torch.sin(x * y) + x ** 2

# One backward pass yields gradients w.r.t. both variables
f.backward()

print(x.grad.item())  # cos(6) * 3 + 2*2 = 4 + 3*cos(6)
print(y.grad.item())  # cos(6) * 2
```

## Related Topics

- [[pinns]] — autodiff computes [[partial-differential-equations|PDE]] residuals without a mesh
- [[neural-scaling-laws]] — AD underpins modern ML, where these laws are observed
- [[monte-carlo-method]] — gradient-based MC methods rely on AD
