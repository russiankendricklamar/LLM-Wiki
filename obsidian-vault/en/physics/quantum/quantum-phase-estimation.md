---
title: "Quantum Phase Estimation & Shor's Algorithm"
category: "Quantum"
order: 86
lang: "en"
slug: "quantum-phase-estimation"
---

# Quantum Phase Estimation & Shor's Algorithm

Quantum Phase Estimation (QPE) is a foundational quantum subroutine used to estimate the eigenvalue (phase) of a unitary operator. It provides the crucial exponential speedup in Shor's algorithm for integer factorization.

## Quantum Fourier Transform (QFT)

The Discrete Fourier Transform on $N=2^n$ basis states acts as:
$$
|j\rangle \mapsto \frac{1}{\sqrt{N}} \sum_{k=0}^{N-1} e^{2\pi i j k / N} |k\rangle
$$
The Quantum Fourier Transform (QFT) implements this unitary transformation exponentially faster than the classical FFT, using $O(n^2)$ gates. The key insight is the product representation of the transformed state. Using the binary fraction representation $j = j_1 2^{n-1} + \dots + j_n 2^0$, the state can be factored into a tensor product of single qubits:
$$
\text{QFT}|j\rangle = \frac{1}{2^{n/2}} \left(|0\rangle + e^{2\pi i 0.j_n}|1\rangle\right) \otimes \left(|0\rangle + e^{2\pi i 0.j_{n-1}j_n}|1\rangle\right) \otimes \dots \otimes \left(|0\rangle + e^{2\pi i 0.j_1\dots j_n}|1\rangle\right)
$$
This allows the QFT to be constructed using Hadamard gates and controlled-phase rotations $R_k = \text{diag}(1, e^{2\pi i / 2^k})$.

## Quantum Phase Estimation

Let $U$ be a unitary operator and $|\psi\rangle$ be an eigenvector such that $U|\psi\rangle = e^{2\pi i \theta} |\psi\rangle$ with $\theta \in [0, 1)$. We wish to estimate $\theta$ using $n$ qubits.

1. **Initialization**: Start with a state $|0\rangle^{\otimes n} |\psi\rangle$. Apply Hadamard gates to the first register:
$$
\frac{1}{2^{n/2}} \sum_{j=0}^{2^n-1} |j\rangle |\psi\rangle
$$
2. **Controlled Unitaries**: Apply controlled-$U^j$ operations. Since $U^j|\psi\rangle = e^{2\pi i \theta j} |\psi\rangle$, this kicks back the phase into the first register:
$$
\frac{1}{2^{n/2}} \sum_{j=0}^{2^n-1} e^{2\pi i \theta j} |j\rangle |\psi\rangle
$$
3. **Inverse QFT**: We notice that the first register is in the state $\text{QFT}|\tilde{\theta}\rangle$, where $\tilde{\theta}$ is the closest $n$-bit approximation to $\theta \cdot 2^n$. Applying the inverse QFT yields $|\tilde{\theta}\rangle$, allowing us to read off the phase.

## Shor's Algorithm

Shor's algorithm reduces the problem of factoring an integer $N$ to finding the period $r$ of the modular exponentiation function $f(x) = a^x \pmod N$.

1. Construct the unitary operator $U_a |x\rangle = |a x \pmod N\rangle$.
2. The eigenstates of $U_a$ are $|u_s\rangle = \frac{1}{\sqrt{r}} \sum_{k=0}^{r-1} e^{-2\pi i s k / r} |a^k \pmod N\rangle$ for $s \in \{0, \dots, r-1\}$.
3. The corresponding [[spectral-theory-operators|eigenvalues]] are $e^{2\pi i s / r}$.
4. By applying QPE to $U_a$ with the input state $|1\rangle = \frac{1}{\sqrt{r}} \sum_{s=0}^{r-1} |u_s\rangle$, the algorithm outputs an approximation to $s/r$.
5. Using continued fractions on the measured phase, one can extract the exact period $r$, which then trivially leads to the factors of $N$ via $\gcd(a^{r/2} \pm 1, N)$.
