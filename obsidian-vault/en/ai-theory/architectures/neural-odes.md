---
title: "Neural ODEs"
category: "AI Theory"
order: 7
lang: "en"
slug: "neural-odes"
---

# Neural Ordinary Differential Equations

**Neural Ordinary Differential Equations (Neural ODEs)** are a family of deep learning architectures in which a sequence of discrete layers is replaced by a continuous dynamical process. Instead of writing $h_{t+1} = h_t + f_\theta(h_t)$ (as in ResNet), a Neural ODE defines

$$
\frac{dh(t)}{dt} = f_\theta(h(t), t),
$$

and the forward pass becomes numerical integration of this ODE from the initial state $h(0) = x$ to the final state $h(T) = \text{logits}$. Introduced by Chen, Rubanova, Bettencourt, and Duvenaud (NeurIPS 2018), the idea opened up an entire area of research at the intersection of deep learning and numerical analysis.

## Visualization

The chart below shows how a Neural ODE solver adaptively allocates function evaluations (NFE) across training epochs: complex examples require more steps while easy ones need fewer, illustrating the adaptive compute property.

```chart
{
  "type": "line",
  "xAxis": "epoch",
  "data": [
    {"epoch": 1, "nfe_hard": 142, "nfe_easy": 48, "nfe_avg": 95},
    {"epoch": 5, "nfe_hard": 138, "nfe_easy": 44, "nfe_avg": 88},
    {"epoch": 10, "nfe_hard": 131, "nfe_easy": 40, "nfe_avg": 82},
    {"epoch": 20, "nfe_hard": 118, "nfe_easy": 36, "nfe_avg": 74},
    {"epoch": 30, "nfe_hard": 106, "nfe_easy": 32, "nfe_avg": 67},
    {"epoch": 40, "nfe_hard": 98, "nfe_easy": 29, "nfe_avg": 61},
    {"epoch": 50, "nfe_hard": 92, "nfe_easy": 27, "nfe_avg": 57},
    {"epoch": 60, "nfe_hard": 88, "nfe_easy": 26, "nfe_avg": 54},
    {"epoch": 70, "nfe_hard": 85, "nfe_easy": 25, "nfe_avg": 52},
    {"epoch": 80, "nfe_hard": 83, "nfe_easy": 24, "nfe_avg": 51},
    {"epoch": 90, "nfe_hard": 82, "nfe_easy": 24, "nfe_avg": 50},
    {"epoch": 100, "nfe_hard": 81, "nfe_easy": 23, "nfe_avg": 49}
  ],
  "lines": [
    {"dataKey": "nfe_hard", "stroke": "#ef4444", "name": "Hard examples (NFE)"},
    {"dataKey": "nfe_easy", "stroke": "#10b981", "name": "Easy examples (NFE)"},
    {"dataKey": "nfe_avg", "stroke": "#3b82f6", "name": "Average NFE"}
  ]
}
```

## From ResNet to continuous depth

A **ResNet** can be viewed as an Euler discretisation of a continuous dynamical system:

$$
h_{t+1} = h_t + f_\theta(h_t) \quad \Longleftrightarrow \quad \frac{dh}{dt} \approx f_\theta(h).
$$

Shrinking the step size $\Delta t$, we reach the limit of an infinitely deep network — a **Neural ODE**. 

```chart
{
  "type": "line",
  "xAxis": "depth",
  "data": [
    {"depth": 0, "resnet": 0.5, "ode": 0.5},
    {"depth": 1, "resnet": 0.65, "ode": 0.58},
    {"depth": 2, "resnet": 0.65, "ode": 0.72},
    {"depth": 3, "resnet": 0.85, "ode": 0.88},
    {"depth": 4, "resnet": 0.85, "ode": 0.98},
    {"depth": 5, "resnet": 1.0, "ode": 1.0}
  ],
  "lines": [
    {"dataKey": "resnet", "stroke": "#ef4444", "name": "ResNet (Discrete Jumps)"},
    {"dataKey": "ode", "stroke": "#10b981", "name": "Neural ODE (Continuous Flow)"}
  ]
}
```

"Depth" is no longer a count of layers but the length of the integration interval. A numerical integrator (RK4, Dopri5, Adams-Bashforth) chooses steps adaptively: smaller steps where the function varies rapidly, larger steps where it is smooth. This gives **adaptive compute**: the network spends more work on "difficult" examples.


## Adjoint method for [[automatic-differentiation|backpropagation]]

Naive [[automatic-differentiation|backpropagation]] through an integrator stores all intermediate states and requires $O(T)$ memory. Chen et al. proposed using the **adjoint sensitivity method** from optimal control theory: the backpropagation problem is formulated as another ODE that can be integrated backwards in time without storing forward activations.

Let $\mathcal{L}(h(T))$ be the loss. Define the adjoint state $a(t) = \partial \mathcal{L}/\partial h(t)$. It obeys:

$$
\frac{da(t)}{dt} = -a(t)^\top \frac{\partial f_\theta(h(t), t)}{\partial h}.
$$

Integrating this ODE backwards from $a(T) = \partial \mathcal{L}/\partial h(T)$ gives $a(0)$. The parameter gradient is

$$
\frac{d\mathcal{L}}{d\theta} = -\int_T^0 a(t)^\top \frac{\partial f_\theta(h(t), t)}{\partial \theta} dt.
$$

Memory cost: **$O(1)$** (only the current state and adjoint are needed). Computation: roughly double the forward pass.

## Advantages of the continuous formulation

**Adaptive compute.** The solver chooses how many steps to take. More steps for hard examples, fewer for easy ones.

**Continuous normalising flows (CNFs).** If $f_\theta$ defines a reversible transformation, the density Jacobian evolves as $d\log p/dt = -\text{tr}(\partial f_\theta / \partial h)$. This enables density modelling with a free choice of topology.

**Irregularly sampled time series.** For time series with gaps, Neural ODEs naturally continue the hidden state between observations, without interpolation or imputation.

**Invertibility.** The flow can be run forward and backward, providing an elegant route to invertible neural networks.

## Variants and extensions

**Neural SDEs.** Replacing the ODE with a stochastic differential equation $dh = f_\theta dt + g_\theta dW$ adds noise and makes the model probabilistic. Used in latent models and Bayesian variants.

**Latent ODE.** The latent state evolves along an ODE between sparse observations; a decoder maps it to predictions. Effective for irregular time series in medicine and finance.

**ODE-RNN / GRU-ODE-Bayes.** Combine an ODE for predictions between points with discrete RNN-like updates at observation times.

**[[hamiltonian-nn|Hamiltonian Neural Networks (HNNs)]]** and Lagrangian Neural Networks are specialised Neural ODEs in which the right-hand side is given as the gradient of a physically motivated scalar ([[hamiltonian-mechanics|the Hamiltonian]]). The architecture conserves energy by construction and stays on the constant-energy surface over long horizons.

**Neural PDEs.** Generalising Neural ODEs to partial differential equations — closely related to [[pinns]], with explicit temporal dynamics.

## Limitations

**Stiff dynamics.** Systems with separated timescales need implicit integrators, which are harder to differentiate. Work by Kelly et al. (2020) and Finlay et al. (2020) mitigates this via regularisation.

**Cost.** Despite $O(1)$ memory, the number of forward/backward evaluations of $f_\theta$ can be large (hundreds per sample). On modern GPUs ResNets are often faster.

**Training difficulty.** The loss depends on the number of solver steps, which complicates optimisation. Solver drift can accumulate.

## Applications

- **Physics and scientific models.** Learning laws of motion from trajectory data, especially in combination with [[hamiltonian-nn|HNNs]] for conservative systems.
- **Time series.** Financial data sampled at irregular frequencies; electronic health records.
- **Generative modelling.** Continuous Normalising Flows and FFJORD for sampling from complex distributions.
- **Control and reinforcement learning.** Continuous environment modelling for model-based RL.
- **Computer vision.** ODE blocks as drop-in replacements for dense blocks in classifiers.

## Related Topics

- [[hamiltonian-nn]] — Neural ODE with a physics-constrained right-hand side
- [[pinns]] — complementary approach: solving PDEs instead of ODEs
- [[hamiltonian-mechanics]] — the physical theory underlying HNN
- [[automatic-differentiation]] — the core technology without which Neural ODEs would not exist
- [[brownian-motion]] — stochastic counterpart of deterministic ODE dynamics
