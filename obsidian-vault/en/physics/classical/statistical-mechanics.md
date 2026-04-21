---
title: "Statistical Mechanics"
category: "Physics"
order: 32
lang: "en"
slug: "statistical-mechanics"
growth: "seedling"
---

## Introduction

Statistical mechanics solves a fundamental problem: how to connect the microscopic dynamics of particles (equations of motion, quantum mechanics) to macroscopic observables (temperature, pressure, free energy)? The answer lies in probability theory. Instead of tracking the state of each of $10^{23}$ molecules, we describe a *probability distribution* over microscopic states and use it to compute expectation values.

Central postulate: **the macroscopic state of an equilibrium system is completely described by a probabilistic ensemble** — a set of possible microscopic states with their probabilities. All thermodynamic quantities are derived from this distribution.

## Ensembles and fundamental distributions

### Microcanonical ensemble
In an isolated system with fixed energy $E$, all microscopic states with energy $E$ are equally probable. The number of such states is denoted $\Omega(E)$ (density of states). [[gravitational-entropy|Entropy]] is defined as:

$$S = k \ln \Omega(E)$$

where $k$ is Boltzmann's constant. This fundamental relation connects microscopic information (number of states) to a macroscopic thermodynamic quantity.

### Canonical ensemble
More practical: the system is in thermal contact with a reservoir at temperature $T$. The probability of microscopic state $i$ with energy $E_i$ is given by the **Boltzmann distribution**:

$$p(i) = \frac{e^{-\beta E_i}}{Z}$$

where $\beta = 1/(kT)$ is the inverse temperature, and $Z$ is the **partition function** (statistical sum):

$$Z(\beta) = \sum_{i=1}^{\Omega} e^{-\beta E_i}$$

All thermodynamic quantities follow from $Z$:
- Mean energy: $\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta}$
- Helmholtz free energy: $F = -kT \ln Z$
- Entropy: $S = -\left(\frac{\partial F}{\partial T}\right)_V = k\beta^2 \frac{\partial F}{\partial \beta}$
- Pressure: $P = -\left(\frac{\partial F}{\partial V}\right)_T$

The beauty of this approach: all thermodynamics is encoded in a single function $Z$.

### Grand canonical ensemble
At fixed temperature $T$ and chemical potential $\mu$ (system exchanges particles):

$$p(i, N) = \frac{e^{-\beta(E_i - \mu N)}}{\mathcal{Z}}$$

where the grand partition function is $\mathcal{Z} = \sum_{N=0}^{\infty} \sum_{i=1}^{\Omega(N)} e^{-\beta(E_i(N) - \mu N)}$.

The choice of ensemble is dictated by physical boundary conditions, but all three give identical results in the thermodynamic limit ($N \to \infty$).

## Entropy and information

For a probability distribution over states, **Gibbs entropy** quantifies ignorance about the microscopic state:

$$S = -k \sum_{i=1}^{\Omega} p_i \ln p_i$$

This is exactly $k$ times the [[shannon-entropy|Shannon entropy]] of information theory. In the microcanonical ensemble, $p_i = 1/\Omega$ for all states with energy $E$, so:

$$S = -k \cdot \Omega \cdot \frac{1}{\Omega} \ln\frac{1}{\Omega} = k \ln \Omega$$

recovering Boltzmann's formula. This connection shows that entropy is the *information-theoretic uncertainty* about the microscopic configuration.

## The ergodic hypothesis

Why do probability distributions describe real systems? **The ergodic hypothesis** asserts: after sufficiently long observation, a system visits all accessible microscopic states with frequency proportional to the ensemble probability. Formally: time average equals ensemble average:

$$\lim_{T \to \infty} \frac{1}{T} \int_0^T A(q(t), p(t)) \, dt = \langle A \rangle_{\text{ensemble}}$$

[[ergodic-theorems-birkhoff|Ergodic theory]] shows this holds for "typical" Hamiltonian systems, but there are important exceptions (glasses, slow-relaxation systems). Violation of ergodicity is central to non-equilibrium physics and materials science.

## Wick rotation and connection to quantum mechanics

A surprising link: classical statistical mechanics and quantum field theory are connected via **Wick rotation** — analytic continuation to imaginary time:

$$\text{Quantum mechanics: } e^{iS/\hbar} \to \text{Statistical mechanics: } e^{-\beta E}$$

Under the substitution $\tau = it$ (imaginary time), the [[path-integral|path integral]] of quantum mechanics:

$$Z_{\text{QM}} = \int \mathcal{D}\phi \, e^{iS[\phi]/\hbar}$$

becomes the Euclidean path integral of statistical mechanics:

$$Z_{\text{SM}} = \int \mathcal{D}\phi \, e^{-S_E[\phi]/\hbar}$$

This explains why [[qft-basic|QFT]] methods (renormalization, Feynman diagrams) are used to compute critical exponents in statistical mechanics.

## Applications to machine learning

### Energy-based models
The probability of data $x$ in an energy-based model:

$$p(x) = \frac{e^{-E(x; \theta)}}{Z(\theta)}$$

All energy-based machine learning (from classical methods to modern diffusion models) rests on this structure.

### Boltzmann machines
A bipartite graph with visible and hidden variables, whose energy is:

$$E(v, h) = -\sum_{ij} w_{ij} v_i h_j - \sum_i b_i v_i - \sum_j c_j h_j$$

Training minimizes the Kullback-Leibler divergence between model and data using the contrastive divergence algorithm, grounded in statistical mechanics.

### Diffusion models
Generative models based on diffusion (DDPM, Score-Based) rely on the connection:

$$\text{score} = \nabla_x \ln p(x) = -\nabla_x E(x)$$

Training the score function via denoising is a direct application of statistical mechanics to deep learning.

### Annealing and optimization
Simulated annealing uses Langevin dynamics with decreasing "temperature" $T(t)$ to find global minima of energy landscapes:

$$\frac{dq}{dt} = -\nabla E(q) + \sqrt{2kT(t)} \, \xi(t)$$

where $\xi$ is white noise. As $T \to 0$, the system gets stuck in a local minimum; the right cooling schedule finds the global minimum with high probability.

## Free energy minimization as unifying principle

Everything in equilibrium statistical mechanics follows from the **principle of minimum free energy**:

$$F = \langle E \rangle - TS$$

At fixed $T$ and $V$, thermodynamic equilibrium is achieved at $F = \min$. This explains why systems evolve toward high-probability states — they minimize free energy. In machine learning, variational methods (variational autoencoders, variational inference) apply the same idea: learn parameters of a distribution by minimizing a free energy functional.

## Summary

Statistical mechanics transforms the many-body problem into a mathematical question: finding the right ensemble and computing its partition function. The three ensembles (microcanonical, canonical, grand canonical) describe different physical conditions, but the mathematics is unified. The connection via path integrals and Wick rotation to quantum field theory, the ergodic hypothesis, and applications in machine learning underscore that statistical mechanics is not merely a set of formulas but a fundamental way of thinking about uncertainty, information, and optimization.
