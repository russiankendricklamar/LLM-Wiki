---
title: 'Functional Analysis: Hilbert Spaces & Operators'
category: Advanced Theory
order: 148
lang: en
slug: functional-analysis
---

Functional analysis studies infinite-dimensional vector spaces and operators acting upon them, forming the mathematical bedrock of quantum mechanics.

### Hilbert Spaces and Riesz Representation
A Hilbert space $\mathcal{H}$ is a complete metric space induced by an inner product $\langle \cdot, \cdot \rangle$. The **Riesz Representation Theorem** states that every continuous linear functional $f \in \mathcal{H}^*$ can be uniquely written as $f(x) = \langle x, y \rangle$ for some $y \in \mathcal{H}$.

### Spectral Theorem
For a compact self-adjoint operator $T: \mathcal{H} \to \mathcal{H}$, there exists an orthonormal basis of $\mathcal{H}$ consisting entirely of eigenvectors of $T$. We can write $T = \sum \lambda_n P_n$, where $P_n$ are orthogonal projections. This generalizes diagonalization to infinite dimensions, critical for understanding observable spectra in physics.
