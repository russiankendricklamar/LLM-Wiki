---
title: "Shor's Algorithm"
category: "Algorithms and ML"
order: 114
lang: "en"
---
# Shor's Algorithm

**Shor's Algorithm** is a quantum algorithm for integer factorization. Formulated by Peter Shor in 1994, it solves the factorization problem in polynomial time, whereas the best-known classical algorithms require super-polynomial time.

## Theoretical Foundation

The algorithm's significance lies in its ability to break widely used public-key cryptography systems, such as RSA, which rely on the difficulty of factoring large integers. Shor's algorithm utilizes quantum properties like **superposition** and **interference** to find the period of a periodic function, which is the key to factoring.

The algorithm consists of two parts:
1. **Classical Reduction**: Reducing the factorization problem to the problem of order-finding.
2. **Quantum Order-Finding**: Using the Quantum Fourier Transform (QFT) to find the period of the function $f(x) = a^x \pmod N$.

## Mathematical Formulation

To factor an integer $N$:
1. Pick a random integer $a < N$ such that $\gcd(a, N) = 1$.
2. Find the period $r$ of the function $f(x) = a^x \pmod N$, i.e., the smallest $r$ such that $a^r \equiv 1 \pmod N$.
3. If $r$ is even and $a^{r/2} \not\equiv -1 \pmod N$, then the factors of $N$ are $\gcd(a^{r/2} - 1, N)$ and $\gcd(a^{r/2} + 1, N)$.

The quantum part finds $r$ by preparing a superposition of states:
$$ \frac{1}{\sqrt{Q}} \sum_{x=0}^{Q-1} |x\rangle |a^x \pmod N\rangle $$
And then applying the inverse QFT to the first register.

## Practical Relevance in Finance

While large-scale quantum computers do not yet exist, Shor's algorithm has profound implications for the future of financial systems:
- **Threat to RSA**: Most banking transactions, secure communications, and digital signatures currently rely on RSA. Shor's algorithm makes these systems vulnerable.
- **Post-Quantum Cryptography (PQC)**: Financial institutions are actively researching and transitioning to quantum-resistant algorithms (e.g., lattice-based or code-based cryptography).
- **Blockchain Security**: Many blockchain protocols use elliptic curve cryptography (ECDSA), which is also vulnerable to quantum attacks based on Shor's logic (solving the discrete log problem).
- **Strategic Planning**: Quants and security officers use "Quantum Risk" assessments to determine when encrypted historical data might be decrypted by future quantum adversaries ("Harvest Now, Decrypt Later").

## Pseudo-code: Quantum Order Finding

```python
# Conceptual Pseudo-code for Shor's Quantum Step
def quantum_order_finding(a, N):
    # 1. Initialize two quantum registers
    # 2. Put the first register in superposition
    # 3. Apply the modular exponentiation: |x>|0> -> |x>|a^x mod N>
    # 4. Measure the second register (collapses the first to states with same f(x))
    # 5. Apply Inverse Quantum Fourier Transform (IQFT) to the first register
    # 6. Measure the first register to obtain an approximation of k/r
    # 7. Use continued fractions to extract the period r
    return r

def factorize(N):
    a = random.randint(2, N-1)
    if gcd(a, N) > 1: return gcd(a, N)
    r = quantum_order_finding(a, N)
    if r % 2 == 0:
        candidate = gcd(a**(r//2) - 1, N)
        if candidate > 1: return candidate
    return None
```

## Related Topics
- [[sha-256]]
- [[mcmc]]
- [[spectral-analysis]]
- [[monte-carlo-method]]
