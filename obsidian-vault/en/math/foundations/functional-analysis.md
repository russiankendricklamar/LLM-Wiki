---
title: "Functional Analysis"
category: "Foundations"
order: 10
lang: "en"
slug: "/math/functional-analysis"
---

# Functional Analysis

Functional analysis studies infinite-dimensional vector spaces (function spaces) and the operators acting upon them. It is the mathematical language of quantum mechanics and the theoretical foundation for many machine learning techniques.

## Core Spaces

1. **Normed Spaces:** Spaces where each function has a measurable "length" (norm $\|f\|$).
2. **Banach Spaces:** Complete normed spaces where every Cauchy sequence converges.
3. **Hilbert Spaces ($\mathcal{H}$):** Spaces equipped with an inner product $\langle f, g \rangle$, allowing for concepts of **orthogonality** and **projection**. $L^2$ is the most common example.

## Operators and Spectrum

A **linear operator** $A: \mathcal{H} \to \mathcal{H}$ maps one function to another.
- **Eigenfunctions:** Functions satisfying $Af = \lambda f$. In quantum physics, eigenvalues of operators represent measurable physical quantities.
- **Spectral Theorem:** Generalizes matrix decomposition to infinite-dimensional operators, allowing them to be decomposed into a spectrum of simpler components.

## Applications in Machine Learning

**Reproducing Kernel Hilbert Spaces (RKHS):**
- **Kernel Trick:** Mapping data into an infinite-dimensional Hilbert space to turn complex non-linear dependencies into simple linear planes (fundamental for SVMs and Gaussian Processes).
- **Stability Analysis:** Using operator norms to evaluate the robustness of neural networks against perturbations.

## Related Topics
[[hilbert-banach-spaces|Hilbert and Banach Spaces]] | [[linear-algebra|Linear Algebra]] | [[quantum-mechanics|Quantum Mechanics]]
