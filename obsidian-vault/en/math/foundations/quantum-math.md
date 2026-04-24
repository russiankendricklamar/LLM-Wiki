---
title: "Math of Quantum Computing"
category: "Foundations"
order: 29
lang: "en"
slug: "quantum-math"
---

# The Mathematics of Quantum Computing

Quantum computing is not just about physics; it is a specific extension of **Linear Algebra** over the field of complex numbers $\mathbb{C}$. By understanding a few key mathematical structures, one can derive the behavior of quantum algorithms without needing a laboratory.

## 1. The Qubit as a Hilbert Space Vector

A qubit is a unit vector in a 2-dimensional complex [[hilbert-banach-spaces|Hilbert Space]] $\mathbb{C}^2$. In Dirac notation:
$$|\psi\rangle = \alpha |0\rangle + \beta |1\rangle$$
where $\alpha, \beta \in \mathbb{C}$ and $|\alpha|^2 + |\beta|^2 = 1$ (the normalization condition).
- **Superposition**: The ability to be in a linear combination of states. Mathematically, this is just vector addition.

## 2. Tensor Products and Entanglement

To describe a system of $n$ qubits, we use the **tensor product** of their individual spaces:
$$\mathcal{H}_{total} = \mathcal{H}_1 \otimes \mathcal{H}_2 \otimes \dots \otimes \mathcal{H}_n$$
The dimension grows exponentially: $2^n$. 
**Entanglement** occurs when a state in $\mathcal{H}_{total}$ cannot be factored into individual qubit states ($|\psi\rangle \neq |\psi_1\rangle \otimes |\psi_2\rangle$). This is equivalent to saying the state has a high **Schmidt Rank**.

## 3. Unitary Operators (Quantum Gates)

Every quantum gate is a **Unitary Matrix** $U$ ($U^\dagger U = I$). Unitary operators preserve the $L^2$ norm of vectors, ensuring that the total probability remains exactly 1.
- **Reversibility**: Because $U$ is unitary, its inverse $U^\dagger$ always exists. All quantum computations (except measurement) are reversible.
- **Hadamard Gate ($H$)**: Creates superposition by mapping $|0\rangle \to \frac{|0\rangle+|1\rangle}{\sqrt{2}}$.

## 4. Measurement as Projection

Measurement is a non-unitary, non-reversible operation. It projects a state onto an eigenbasis of an observable. The probability of an outcome is given by the **Born Rule**:
$$P(\text{outcome } i) = |\langle i \mid \psi \rangle|^2$$
This collapses the superposition into a single classical state.

## 5. Key Quantum Algorithms

1.  **Shor's Algorithm**: Uses the Quantum Fourier Transform to find periods of functions, allowing the factoring of large integers in polynomial time. It breaks RSA encryption.
2.  **Grover's Algorithm**: A search algorithm that provides a quadratic speedup ($O(\sqrt{N})$) by rotating the state vector toward the desired solution.
3.  **QAE**: Used in finance for fast risk estimation (see [[quantum-amplitude-estimation]]).

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
*The state of a single qubit lives on the surface of the Bloch Sphere. Every possible unitary operation is simply a rotation of this sphere.*

## Related Topics

linear-algebra — the fundamental language  
[[spectral-theorem-unbounded]] — the math of measurement and observables  
[[quantum-information-entropy]] — measuring the information in qubits  
[[quantum-amplitude-estimation]] — financial application
---