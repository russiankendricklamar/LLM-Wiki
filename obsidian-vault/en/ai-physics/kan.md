---
title: "Kolmogorov-Arnold Networks (KAN)"
category: "Scientific ML"
order: 4
lang: "en"
slug: "kan"
---

# Kolmogorov-Arnold Networks (KAN)

## Prerequisites

[[pinns]]

## Overview

Kolmogorov-Arnold Networks (KANs), introduced by Liu et al. (2024), are a neural network architecture inspired by the Kolmogorov-Arnold representation theorem. Instead of placing fixed nonlinear activation functions at nodes (as in MLPs), KANs place **learnable activation functions on edges**. This seemingly minor shift produces networks that are more interpretable, capable of symbolic regression, and often achieve comparable accuracy with fewer parameters than MLPs on scientific tasks.

KANs attracted widespread [[attention-mechanisms|attention]] because they promised a path toward _neural networks that discover mathematical formulas_ — a long-standing goal in scientific machine learning. The architecture is closely tied to function approximation theory and provides a natural interface for extracting symbolic expressions from trained models.

## Visualization

```chart
{
  "type": "bar",
  "xAxis": "task",
  "data": [
    {"task": "f = sin(πx)+y²", "KAN_params": 85, "MLP_params": 320},
    {"task": "f = exp(x)·cos(y)", "KAN_params": 110, "MLP_params": 480},
    {"task": "Feynman I.12.1", "KAN_params": 140, "MLP_params": 560},
    {"task": "Feynman I.34.8", "KAN_params": 165, "MLP_params": 640},
    {"task": "Feynman II.11.3", "KAN_params": 195, "MLP_params": 720},
    {"task": "Heat equation", "KAN_params": 230, "MLP_params": 890},
    {"task": "Wave equation", "KAN_params": 275, "MLP_params": 1050}
  ],
  "lines": [
    {"dataKey": "KAN_params", "stroke": "#8b5cf6", "name": "KAN parameters"},
    {"dataKey": "MLP_params", "stroke": "#ef4444", "name": "[[transformer-architecture|MLP]] parameters (same accuracy)"}
  ]
}
```

## Mathematical Framework

**Kolmogorov-Arnold Theorem (1957).** Every continuous multivariate function $f: [0,1]^n \to \mathbb{R}$ can be written as:

$$f(x_1, \ldots, x_n) = \sum_{q=0}^{2n} \Phi_q\!\left(\sum_{p=1}^{n} \varphi_{q,p}(x_p)\right)$$

where $\Phi_q: \mathbb{R} \to \mathbb{R}$ and $\varphi_{q,p}: [0,1] \to \mathbb{R}$ are continuous univariate functions. This is a two-layer representation with $2n+1$ inner nodes.

**KAN architecture.** A KAN layer transforms an $n$-dimensional input to an $m$-dimensional output via:

$$(\text{KAN layer})_j(x_1, \ldots, x_n) = \sum_{i=1}^{n} \phi_{i,j}(x_i), \quad j = 1, \ldots, m$$

Each $\phi_{i,j}$ is a **learnable univariate function** parameterised as a B-spline:

$$\phi(x) = w_b \cdot b(x) + w_s \cdot \sum_{k} c_k B_k(x)$$

where $b(x) = x / (1 + e^{-x})$ (SiLU basis), $B_k$ are B-spline basis functions, and $c_k, w_b, w_s$ are learnable parameters. The grid of the spline can be **refined adaptively** during training.

A KAN of depth $L$ composes multiple KAN layers:

$$\text{KAN}(\mathbf{x}) = (\Phi_{L-1} \circ \cdots \circ \Phi_1 \circ \Phi_0)(\mathbf{x})$$

## How It Works

**B-spline activations.** B-splines of order $k$ with $G$ grid points have $G+k$ basis functions. Higher $G$ gives finer resolution; increasing $G$ refines the function without adding layers. This is analogous to $h$-refinement in finite element methods.

**Grid extension.** Training starts on a coarse grid for fast convergence and is progressively extended ("grid extension") to capture fine detail. This multi-resolution strategy avoids over-fitting to noise early in training.

**Sparsification and pruning.** After training, edges with small $L_1$ norms of their activation function are pruned. The remaining sparse network is interpretable: one can read off which inputs connect to which outputs and through which nonlinearity.

**Symbolic regression interface.** After pruning, individual $\phi_{i,j}$ can be replaced with symbolic candidates ($\sin$, $\exp$, $x^2$, etc.) by fitting the activation plot visually or via automatic formula search. The network can then be exported as a closed-form expression.

**vs MLP:**
| Feature | MLP | KAN |
|---|---|---|
| Activations | Fixed at nodes | Learnable on edges |
| Parameters per layer | $n \times m$ weight matrix | $n \times m$ spline functions |
| Interpretability | Low | High (symbolic regression) |
| Scaling | Efficient | Currently slower |
| Inductive bias | Universal approximator | KAT factorisation |

## Python Implementation

```python
# pip install pykan
import torch
from kan import KAN

# KAN for the symbolic regression of f(x,y) = exp(sin(pi*x) + y^2)
# Architecture: [2, 5, 1] means 2 inputs -> 5 hidden nodes -> 1 output

model = KAN(width=[2, 5, 1], grid=5, k=3, seed=0)

# Generate synthetic training data
torch.manual_seed(42)
x_train = torch.rand(1000, 2) * 2 - 1   # Uniform on [-1, 1]^2
y_train = torch.exp(
    torch.sin(torch.pi * x_train[:, 0]) + x_train[:, 1] ** 2
).unsqueeze(1)

dataset = {
    "train_input": x_train,
    "train_label": y_train,
    "test_input": x_train[:100],
    "test_label": y_train[:100],
}

# Train
results = model.train(dataset, opt="LBFGS", steps=200, lamb=0.001)

# Plot the learned activation functions (requires matplotlib)
# model.plot()

# Attempt symbolic regression
model.suggest_symbolic(0, 0, 0)   # layer 0, from node 0, to node 0
model.suggest_symbolic(0, 1, 0)

# Automatic formula extraction
model.auto_symbolic()
formula = model.symbolic_formula()
print("Discovered formula:", formula)

# Grid extension for higher accuracy
model = model.refine(grid=10)
results2 = model.train(dataset, opt="LBFGS", steps=100)
```

## Key Results & Properties

- **Scientific discovery benchmark.** On Feynman symbolic regression benchmarks, KANs recover known physical formulas in several cases where MLPs plateau.
- **Representation efficiency.** For smooth scientific functions, KANs with $O(n)$ parameters per layer can match or exceed MLP accuracy requiring $O(n^2)$.
- **Compositional structure.** KANs naturally represent functions that decompose as compositions of simpler functions — a common pattern in physical laws.
- **Theorem:** A KAN of shape $[n, 2n+1, 1]$ can represent any continuous function on $[0,1]^n$ (direct KAT realisation).
- **Extrapolation:** B-spline activations can be extended outside the training domain by the spline's polynomial continuation; empirically better extrapolation than ReLU MLPs.

## Limitations

**Training speed.** KANs are currently 10-100x slower to train than equivalent-capacity MLPs. B-spline evaluation is not as hardware-optimised as matrix multiplications.

**Scalability to high dimensions.** The number of edges grows as $\prod_\ell n_\ell$. For high-dimensional problems (e.g., images), the KAT decomposition is not obviously practical.

**Grid resolution choice.** Choosing the initial grid size and extension schedule is an additional hyperparameter. Coarse grids miss fine structure; fine grids are slow.

**Symbolic regression fragility.** Automatic symbolic assignment depends on activation plots that can be noisy for complex functions. Human inspection often required.

**Still maturing.** The architecture was published in 2024; the software ecosystem is less mature than PyTorch-native MLP stacks. Many best practices are still being established.

## Applications

- **Physics equation discovery:** Recovering known physical laws (Feynman equations, conservation laws) from simulation data.
- **Symbolic regression in finance:** Discovering closed-form pricing formulas for exotic derivatives from Monte Carlo data.
- **Scientific interpolation:** Compact, interpretable surrogate models for expensive simulations.
- **Differential equations:** Combining KANs with the PINN framework (KAN-PINNs) for interpretable PDE solutions.
- **Neuroscience:** Modelling neural tuning curves with interpretable parametric forms.
- **Spectral analysis:** Discovering spectral relationships in physical systems.

## The two sides of KAN

A KAN is the meeting point of two large topics, each with its own standalone article:

- **Mathematics:** [[kolmogorov-arnold-theorem]] — the 1957 theorem representing multivariate continuous functions as a finite superposition of univariate ones, which resolved Hilbert's thirteenth problem.
- **AI:** [[learnable-activations]] — learnable B-spline activations as a general technique beyond KAN, including connections to normalising flows and interpretability.

## Related Topics

- [[kolmogorov-arnold-theorem]] — mathematical foundation of KAN
- [[learnable-activations]] — the broader learnable-activation pattern that KAN belongs to
- [[qft-basic]] — physics domain where symbolic equation discovery is valuable
- [[conformal-field-theory]] — symmetry-constrained theories where KAT decompositions may reveal structure
- [[spectral-analysis]] — spectral methods related to B-spline approximation
- [[pinns]] — KANs used as the network in PINN frameworks
- [[equivariant-nn]] — complementary approach: symmetry constraints instead of interpretability
