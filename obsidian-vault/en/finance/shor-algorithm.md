---
title: "Shor's Algorithm"
category: "Algorithms and ML"
order: 114
lang: "en"
---
# Shor's Algorithm

**Shor's Algorithm** is a quantum algorithm for integer factorization that runs in polynomial time $O((\log N)^3)$, compared to the best classical algorithm (General Number Field Sieve) which runs in sub-exponential time $O(\exp(c(\log N)^{1/3}(\log\log N)^{2/3}))$. Formulated by Peter Shor in 1994, it threatens the foundations of public-key cryptography and has profound implications for financial infrastructure security.

## Background

RSA encryption, the backbone of secure internet communications since 1977, derives its security from the computational hardness of factoring large integers. A 2048-bit RSA key requires factoring a number with ~617 decimal digits — practically infeasible for classical computers (estimated $10^{25}$ years). Shor demonstrated that a sufficiently large quantum computer reduces this to hours or days, triggering a global transition to post-quantum cryptography (PQC).

## Mathematical Framework

### Reduction to Order-Finding

Factoring $N$ reduces to finding the **multiplicative order** $r$ of a random integer $a$ coprime to $N$: the smallest positive integer such that:
$$
a^r \equiv 1 \pmod{N}
$$

If $r$ is even and $a^{r/2} \not\equiv -1 \pmod{N}$, then at least one of:
$$
p = \gcd(a^{r/2} - 1,\ N), \quad q = \gcd(a^{r/2} + 1,\ N)
$$
is a non-trivial factor of $N$. This follows from the factorization $a^r - 1 = (a^{r/2}-1)(a^{r/2}+1)$.

### Quantum Order-Finding via QFT

The quantum part prepares a superposition over all $x \in \{0, \dots, Q-1\}$ (where $Q = 2^q \approx N^2$):

$$
\frac{1}{\sqrt{Q}} \sum_{x=0}^{Q-1} |x\rangle |a^x \bmod N\rangle
$$

After measuring the second register (obtaining value $f_0 = a^{x_0} \bmod N$), the first register collapses to a superposition of all $x$ with $a^x \equiv f_0$, spaced $r$ apart:

$$
\frac{1}{\sqrt{Q/r}} \sum_{k=0}^{Q/r - 1} |x_0 + kr\rangle
$$

Applying the **Quantum Fourier Transform (QFT)**:
$$
\text{QFT}_Q|x\rangle = \frac{1}{\sqrt{Q}} \sum_{k=0}^{Q-1} e^{2\pi i xk/Q} |k\rangle
$$

The QFT maps the periodic state to amplitudes concentrated near multiples of $Q/r$. Measuring yields $k \approx jQ/r$ for random integer $j$. Using the **continued fraction algorithm**, we extract $r$ from the approximation $j/r \approx k/Q$.

### Quantum Fourier Transform

The QFT on $n$ qubits is the unitary:
$$
\text{QFT}|j\rangle = \frac{1}{\sqrt{2^n}} \sum_{k=0}^{2^n-1} e^{2\pi i jk/2^n}|k\rangle
$$

It can be implemented with $O(n^2)$ quantum gates (Hadamard + controlled phase rotations), versus the classical FFT's $O(n \cdot 2^n)$ operations. This exponential speedup is the core quantum advantage.

### Complexity Analysis

| Step | Classical Cost | Quantum Cost |
| :--- | :--- | :--- |
| GCD computation | $O((\log N)^2)$ | $O((\log N)^2)$ |
| Modular exponentiation | — | $O((\log N)^3)$ gates |
| QFT | — | $O((\log N)^2)$ gates |
| Continued fractions | $O((\log N)^2)$ | $O((\log N)^2)$ |
| **Total** | $O(\exp(N^{1/3}))$ | $O((\log N)^3)$ |

### Discrete Logarithm

Shor's technique extends to the **discrete logarithm problem** (DLP): given $g, h$ in a group, find $x$ such that $g^x = h$. This breaks **elliptic curve cryptography (ECC)** used in ECDSA signatures for Bitcoin, Ethereum, and TLS certificates.

## Key Properties

- **Probabilistic success**: Each run of the quantum order-finding succeeds with probability $\ge 1/2$ (over random $a$ and measurement outcomes). A constant number of repetitions gives exponentially high success probability.
- **Qubit requirements**: Factoring a 2048-bit RSA key requires approximately $4096$ logical qubits with full error correction. Current quantum computers have $\sim 1000$ noisy physical qubits — a gap of several orders of magnitude in quality.
- **Error correction overhead**: Fault-tolerant factoring of 2048-bit RSA is estimated to require $\sim 4$ million physical qubits (surface code, Google/IBM estimates 2024). Current hardware: $\sim 1000$ qubits.
- **Harvest Now, Decrypt Later (HNDL)**: Adversaries can record encrypted traffic today and decrypt it once a sufficiently powerful quantum computer exists — a threat relevant to long-lived sensitive financial data.

## Python Implementation

```python
import math
import random
from fractions import Fraction
from typing import Optional

def gcd(a: int, b: int) -> int:
    """Euclidean GCD."""
    while b:
        a, b = b, a % b
    return a

def modular_exponentiation(base: int, exp: int, mod: int) -> int:
    """Fast modular exponentiation O((log exp)^2)."""
    result = 1
    base %= mod
    while exp > 0:
        if exp % 2 == 1:
            result = (result * base) % mod
        exp //= 2
        base = (base * base) % mod
    return result

def classical_order_finding(a: int, N: int, max_r: int = 10_000) -> Optional[int]:
    """
    Classically find the multiplicative order r of a mod N.
    Exponentially slow — used here only to simulate the quantum step.
    """
    if gcd(a, N) != 1:
        return None
    val = a % N
    for r in range(1, max_r + 1):
        if val == 1:
            return r
        val = (val * a) % N
    return None

def continued_fraction_expansion(num: int, denom: int, max_terms: int = 20) -> list[int]:
    """Compute continued fraction coefficients of num/denom."""
    coeffs = []
    for _ in range(max_terms):
        if denom == 0:
            break
        coeffs.append(num // denom)
        num, denom = denom, num % denom
    return coeffs

def convergents(coeffs: list[int]) -> list[tuple[int, int]]:
    """Compute convergents (numerator, denominator) of a continued fraction."""
    convs = []
    h_prev, h_curr = 1, coeffs[0]
    k_prev, k_curr = 0, 1
    convs.append((h_curr, k_curr))
    for c in coeffs[1:]:
        h_prev, h_curr = h_curr, c * h_curr + h_prev
        k_prev, k_curr = k_curr, c * k_curr + k_prev
        convs.append((h_curr, k_curr))
    return convs

def shor_factor(N: int, n_attempts: int = 20) -> Optional[int]:
    """
    Classical simulation of Shor's algorithm structure.
    Uses classical order-finding in place of the quantum QFT step.
    For demonstration only — exponentially slow classically.

    Returns a non-trivial factor of N, or None if unsuccessful.
    """
    if N % 2 == 0:
        return 2
    if N == 1:
        return None

    # Check perfect power
    for k in range(2, int(math.log2(N)) + 1):
        root = round(N ** (1 / k))
        for candidate in [root - 1, root, root + 1]:
            if candidate > 1 and candidate**k == N:
                return candidate

    for _ in range(n_attempts):
        a = random.randint(2, N - 1)

        # Step 1: Classical GCD check
        g = gcd(a, N)
        if 1 < g < N:
            return g

        # Step 2: Find order (quantum step in real Shor's)
        r = classical_order_finding(a, N)
        if r is None or r % 2 != 0:
            continue

        # Step 3: Extract factor candidates
        x = modular_exponentiation(a, r // 2, N)
        if x == N - 1:   # a^(r/2) ≡ -1 mod N — failure case
            continue

        for candidate in [gcd(x - 1, N), gcd(x + 1, N)]:
            if 1 < candidate < N:
                return candidate

    return None


def quantum_fourier_transform_matrix(n: int) -> list[list[complex]]:
    """
    Return the QFT unitary matrix for n qubits (2^n x 2^n).
    For educational purposes — actual QFT is implemented as a circuit.
    """
    dim = 2 ** n
    omega = complex(math.cos(2 * math.pi / dim), math.sin(2 * math.pi / dim))
    return [
        [omega ** (j * k) / math.sqrt(dim) for k in range(dim)]
        for j in range(dim)
    ]


# ---- Example ----
random.seed(42)
test_cases = [15, 21, 35, 77, 143]
for N in test_cases:
    factor = shor_factor(N)
    if factor:
        print(f"N={N}: factor={factor}, other={N//factor}, verify={factor*(N//factor)==N}")
    else:
        print(f"N={N}: factorization failed (increase attempts)")

# Demonstrate QFT structure for 2 qubits
qft_2 = quantum_fourier_transform_matrix(2)
print("\nQFT matrix for 2 qubits (4x4):")
for row in qft_2:
    print("  ", [f"{v.real:+.3f}{v.imag:+.3f}j" for v in row])
```

## RSA Key Size vs. Required Logical Qubits

```chart
{
  "type": "line",
  "xAxis": "rsa_bits",
  "data": [
    {"rsa_bits": "512",  "logical_qubits": 1024,  "classical_years": 0.001},
    {"rsa_bits": "1024", "logical_qubits": 2048,  "classical_years": 3000},
    {"rsa_bits": "2048", "logical_qubits": 4096,  "classical_years": 300000000},
    {"rsa_bits": "3072", "logical_qubits": 6144,  "classical_years": 999999999},
    {"rsa_bits": "4096", "logical_qubits": 8192,  "classical_years": 999999999}
  ],
  "lines": [
    {"dataKey": "logical_qubits", "stroke": "#3b82f6", "name": "Logical Qubits Needed"},
    {"dataKey": "classical_years","stroke": "#ef4444", "name": "Classical Years (approximate)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Notes |
| :--- | :--- | :--- | :--- |
| $N$ | Composite integer | Number to factor | RSA modulus |
| $a$ | Random base | Chosen uniformly from $[2, N-1]$ | Must be coprime to $N$ |
| $r$ | Order | Smallest $r$ with $a^r \equiv 1 \pmod{N}$ | Found by QFT |
| $Q$ | Register size | $Q \approx N^2$, must be power of 2 | $q = \lceil 2\log_2 N \rceil$ qubits |
| $n$ | Qubit count | $n = \log_2 Q$ qubits in first register | $\approx 2\log_2 N$ |
| $k/Q$ | QFT outcome | Approximates $j/r$ for integer $j$ | Input to continued fractions |

## Limitations and Extensions

- **Fault tolerance gap**: Current NISQ devices lack the error rates needed for fault-tolerant Shor's. Surface code overhead means ~4M physical qubits for 2048-bit RSA.
- **Post-quantum cryptography (PQC)**: NIST standardized CRYSTALS-Kyber (lattice-based KEM) and CRYSTALS-Dilithium (lattice-based signatures) in 2022–2024 as quantum-resistant replacements for RSA/ECC.
- **Elliptic curve extension**: Shor's discrete log variant breaks ECDSA with similar qubit counts; Bitcoin addresses derived from ECDSA are vulnerable once public keys are exposed.
- **Symmetric key safety**: AES-256 and SHA-256 remain secure against quantum attacks (Grover only halves effective security, leaving 128-bit security for AES-256).
- **Timeline uncertainty**: Expert estimates for a cryptographically relevant quantum computer range from 10 to 30 years; financial institutions with long-lived secrets (pension records, sovereign debt terms) should begin migration now.

## Practical Applications

1. **Cryptographic migration planning**: Banks and clearing houses assess which systems use RSA/ECC and prioritize migration to CRYSTALS-Kyber for key exchange and CRYSTALS-Dilithium for signatures.
2. **Blockchain quantum risk**: Bitcoin UTXOs with exposed public keys (P2PK format, ~1.7M BTC as of 2024) are theoretically vulnerable; quantum-resistant signature schemes (XMSS, FALCON) are under consideration for protocol upgrades.
3. **Long-term data security**: Regulatory data (MiFID II trade reports retained 5 years, pension records 50+ years) encrypted today with RSA is at risk from HNDL attacks.
4. **Quantum risk premium**: Quantitative models incorporate a "Q-day" scenario — the day a cryptographically relevant quantum computer appears — as a tail risk in operational risk frameworks.
5. **Secure multi-party computation**: Quantum-safe MPC protocols for dark pool trading and privacy-preserving clearing use lattice-based or hash-based commitments immune to Shor's attack.

## Related Topics
- [[sha-256]]
- [[mcmc]]
- [[spectral-analysis]]
- [[monte-carlo-method]]
- [[shannon-entropy]]
