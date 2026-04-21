---
title: "Math of Quantum Computing"
category: "Foundations"
order: 29
lang: "en"
slug: "quantum-math"
---

# The Mathematics of Quantum Computing

Quantum computing is not just about physics; it is a specific extension of **Linear Algebra** over complex numbers. By understanding a few key mathematical structures, one can derive the behavior of quantum algorithms without needing a laboratory.

## 1. The Qubit as a Hilbert Space Vector

A qubit is a unit vector in a 2-dimensional complex Hilbert space $\mathbb{C}^2$. In Dirac notation:
$$|\psi\rangle = \alpha |0\rangle + \beta |1\rangle$$
where $\alpha, \beta \in \mathbb{C}$ and $|\alpha|^2 + |\beta|^2 = 1$ (the normalization condition).
- **Superposition**: The ability to be in a linear combination of states.

## 2. Tensor Products and Entanglement

To describe a system of $n$ qubits, we use the **tensor product** of their individual spaces:
$$\mathcal{H}_{total} = \mathcal{H}_1 \otimes \mathcal{H}_2 \otimes \dots \otimes \mathcal{H}_n$$
The dimension grows exponentially: $2^n$. 
**Entanglement** occurs when a state in $\mathcal{H}_{total}$ cannot be factored into individual qubit states. The classic example is the Bell State:
$$|\Phi^+\rangle = \frac{1}{\sqrt{2}}(|00\rangle + |11\rangle)$$

## 3. Unitary Operators (Gates)

Every quantum gate is a **Unitary Matrix** $U$ ($U^\dagger U = I$). Unitary operators preserve the length of vectors, ensuring that total probability remains 1.
- **Hadamard Gate ($H$)**: Creates superposition.
- **CNOT**: Creates entanglement between two qubits.

## 4. Measurement as Projection

Measurement is a non-unitary operation. It projects a state onto an eigenbasis of an observable. The probability of an outcome is given by the **Born Rule**:
$$P(\text{outcome } i) = |\langle i \mid \psi \rangle|^2$$

## Visualization: The Bloch Sphere

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": 0, "y": 1, "label": "|0> North Pole"},
    {"x": 0, "y": -1, "label": "|1> South Pole"},
    {"x": 1, "y": 0, "label": "|+> Equator"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#3b82f6", "name": "Qubit States"}
  ]
}
```
*The state of a single qubit can be visualized as a point on the surface of a unit sphere (the Bloch Sphere). Pure states are on the surface, while mixed states (uncertainty) are in the interior.*

## Key Algorithms

1.  **Shor's Algorithm**: Uses the Quantum Fourier Transform to factor integers in polynomial time.
2.  **Grover's Algorithm**: Provides a quadratic speedup for searching unsorted databases.

## Related Topics

[[linear-algebra]] — the fundamental language  
[[spectral-theorem-unbounded]] — the math of measurement and observables  
[[information-theory]] — quantum entropy (Von Neumann entropy)
---
