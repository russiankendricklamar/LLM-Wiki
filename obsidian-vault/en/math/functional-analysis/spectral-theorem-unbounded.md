---
title: "Spectral Theorem for Unbounded Operators"
category: "Functional Analysis"
order: 4
lang: "en"
slug: "spectral-theorem-unbounded"
---

# Spectral Theorem for Unbounded Operators

In finite dimensions, the spectral theorem says that any symmetric matrix can be diagonalized. In infinite dimensions, many critical operators in physics (like the Momentum or Hamiltonian operators in quantum mechanics) are **unbounded** and not defined on the whole space. The spectral theorem for unbounded operators is the rigorous extension of diagonalization to these "difficult" operators.

## Self-Adjointness: The Key Requirement

For a bounded operator, being symmetric ($A=A^*$) is enough. For an unbounded operator, we need the domain of the operator $D(A)$ to be exactly equal to the domain of its adjoint $D(A^*)$. This is called **Self-Adjointness**. 

Only self-adjoint operators have a real spectrum and generate unitary evolutions (via [[operator-semigroups|Semigroups]]).

## The Spectral Decomposition

The theorem states that for every self-adjoint operator $A$, there exists a unique **Spectral Measure** $E$ such that:

$$A = \int_{-\infty}^{\infty} \lambda \, dE(\lambda)$$

Instead of a sum over discrete eigenvalues ($\sum \lambda_i v_i v_i^*$), we have an integral over a continuous spectrum. $E(\lambda)$ acts as a "projection-valued" measure that tells you which part of the Hilbert space corresponds to which range of "eigenvalues."

## Functional Calculus

The spectral theorem allows us to define functions of an operator $f(A)$ by simply applying the function to the spectral values:
$$f(A) = \int f(\lambda) \, dE(\lambda)$$
This is how we define the matrix exponential $e^{itA}$ for differential operators, which is the basis for solving the **Schrödinger equation**.

## Why It Matters in Physics and AI

1.  **Quantum Mechanics**: Every physical observable (Energy, Position, Spin) is a self-adjoint operator. The spectral theorem provides the possible outcomes of measurements.
2.  **Stochastic PDEs**: The analysis of the Laplacian on complex domains requires the spectral theorem to define fractional powers of the operator (e.g., $(-\Delta)^{1/2}$), which appear in **Stable Processes**.
3.  **Kernel Methods**: The "feature maps" in infinite-dimensional RKHS are often derived from the spectral decomposition of integral operators.

## Visualization: Discrete vs. Continuous Spectrum

```chart
{
  "type": "line",
  "xAxis": "lambda",
  "data": [
    {"lambda": 0, "discrete": 0, "continuous": 0.0},
    {"lambda": 1, "discrete": 1, "continuous": 0.2},
    {"lambda": 2, "discrete": 0, "continuous": 0.8},
    {"lambda": 3, "discrete": 1, "continuous": 0.5},
    {"lambda": 4, "discrete": 0, "continuous": 0.1}
  ],
  "lines": [
    {"dataKey": "discrete", "stroke": "#ef4444", "name": "Discrete Eigenvalues (Matrix)"},
    {"dataKey": "continuous", "stroke": "#3b82f6", "name": "Continuous Spectrum (Operator)"}
  ]
}
```
*In finite dimensions, the spectrum is a set of points (red). In infinite dimensions, an operator can have a continuous "smear" of spectral values (blue), representing a much richer range of possible states.*

## Related Topics

[[functional-analysis]] — the core framework  
[[operator-semigroups]] — the dynamic consequence of spectral theory  
quantum-mechanics — the primary physical application
---
