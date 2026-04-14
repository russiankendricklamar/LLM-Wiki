---
title: "Kolmogorov Complexity"
category: "AI Theory"
order: 2
lang: "en"
slug: "kolmogorov-complexity"
---

# Kolmogorov Complexity

## Prerequisites

[[pac-learning]]

## Overview

Kolmogorov complexity is the algorithmic measure of information content in a string or object: the length of the shortest program that produces it on a universal Turing machine. Developed independently by Solomonoff (1960), Kolmogorov (1963), and Chaitin (1966), it provides the foundation for algorithmic information theory — a theory of information that makes no reference to probability distributions, encoding schemes, or ensembles.

Unlike Shannon entropy, which measures average information over a probability distribution, Kolmogorov complexity measures the information in a single string. This makes it the most fundamental measure of randomness and compressibility, at the cost of incomputability.

## Mathematical Framework

**Definition.** Fix a universal Turing machine $U$. The Kolmogorov complexity of a binary string $x$ is:

$$K(x) = \min\{|p| : U(p) = x\}$$

where $p$ ranges over all binary programs. $K(x)$ measures the length (in bits) of the shortest program that outputs $x$.

**Invariance theorem.** For any two universal Turing machines $U_1, U_2$:

$$|K_{U_1}(x) - K_{U_2}(x)| \leq c_{U_1, U_2}$$

The difference is bounded by a constant independent of $x$, so $K$ is well-defined up to an additive constant. This is the fundamental justification for the definition's universality.

**Incomputability.** There is no algorithm that, given $x$, computes $K(x)$. Proof: If such an algorithm existed, it would solve the halting problem (enumerate programs of increasing length; the first one that halts and outputs $x$ gives $K(x)$ — but we cannot decide which programs halt).

**Conditional complexity:**
$$K(x|y) = \min\{|p| : U(p, y) = x\}$$

**Mutual information (algorithmic):**
$$I(x:y) = K(x) - K(x|y) = K(y) - K(y|x) + O(\log K(x))$$

**Solomonoff's algorithmic probability:**
$$\mathbf{m}(x) = \sum_{p: U(p) \text{ starts with } x} 2^{-|p|}$$

This is the a priori probability assigned to $x$ by the universal prior. It satisfies $\mathbf{m}(x) \geq 2^{-K(x)}$, making it a semi-computable universal prior that dominates all computable probability measures.

## How It Works

**Compressibility and randomness.** A string $x$ of length $n$ is:
- **Compressible:** $K(x) \ll n$ (a pattern exists; $x$ is non-random)
- **Kolmogorov-random:** $K(x) \geq n - c$ (incompressible; $x$ is random)

At least $2^n - 2^{n-c}$ strings of length $n$ are $c$-incompressible (most strings are random).

**Connection to Shannon entropy.** For i.i.d. sequences $x^n = x_1\ldots x_n$ drawn from distribution $P$ with entropy $H$:

$$K(x^n) \approx n H(X) + O(\log n)$$

More precisely, $K(x^n)/n \to H(X)$ with probability 1 as $n \to \infty$.

**Minimum Description Length (MDL).** The MDL principle for model selection:

$$\text{MDL}(\text{model}, \text{data}) = K(\text{data} | \text{model}) + K(\text{model})$$

Choose the model minimising total description length. This is the algorithmic Occam's razor. For PAC learning (see [[pac-learning]]), MDL provides sample complexity bounds: models with shorter description lengths generalise better.

**Normalized Information Distance (NID):**
$$\text{NID}(x, y) = \frac{\max(K(x|y), K(y|x))}{\max(K(x), K(y))}$$

$\text{NID} \approx 0$: $x$ and $y$ contain the same information. $\text{NID} \approx 1$: they share no information. In practice, NID is approximated using standard compressors (gzip, bzip2), giving the Normalised Compression Distance (NCD).

## Python Implementation

```python
import zlib
import bz2
import lzma
import math

def compress_length(data: bytes, method: str = "zlib") -> int:
    """Get compressed length as a proxy for Kolmogorov complexity."""
    if method == "zlib":
        return len(zlib.compress(data, level=9))
    elif method == "bz2":
        return len(bz2.compress(data, compresslevel=9))
    elif method == "lzma":
        return len(lzma.compress(data, preset=9))
    raise ValueError(f"Unknown method: {method}")


def ncd(x: bytes, y: bytes, method: str = "zlib") -> float:
    """Normalised Compression Distance as approximation to NID."""
    kx = compress_length(x, method)
    ky = compress_length(y, method)
    kxy = compress_length(x + y, method)
    return (kxy - min(kx, ky)) / max(kx, ky)


# Compare randomness of different strings
strings = {
    "zeros":        b"\x00" * 1000,
    "alternating":  b"\x00\xff" * 500,
    "pi_digits":    str(math.pi).replace(".", "").encode()[:1000].ljust(1000, b"\x00"),
    "random":       __import__("os").urandom(1000),
    "english_text": b"The quick brown fox jumps over the lazy dog. " * 22,
    "source_code":  b"def f(x): return x**2 + 2*x + 1\n" * 30,
}

print("Kolmogorov complexity proxies (compressed sizes for 1000 bytes):")
print(f"{'String':<15} | {'raw':>6} | {'zlib':>6} | {'bz2':>6} | {'lzma':>6}")
print("-" * 50)
for name, s in strings.items():
    raw = len(s)
    print(f"{name:<15} | {raw:>6} | "
          f"{compress_length(s, 'zlib'):>6} | "
          f"{compress_length(s, 'bz2'):>6} | "
          f"{compress_length(s, 'lzma'):>6}")

# NCD-based clustering
languages = {
    "english":  b"The cat sat on the mat. The fat rat had a hat." * 10,
    "spanish":  b"El gato se sento en la alfombra. El raton gordo." * 10,
    "french":   b"Le chat s'est assis sur le tapis. Le rat gras." * 10,
    "german":   b"Die Katze sas auf der Matte. Die fette Ratte." * 10,
    "base64":   __import__("base64").b64encode(__import__("os").urandom(200)) * 2,
}

print("\nNCD matrix (lower = more similar):")
names = list(languages.keys())
print(f"{'':12}", end="")
for n in names:
    print(f"{n:12}", end="")
print()
for n1 in names:
    print(f"{n1:12}", end="")
    for n2 in names:
        if n1 == n2:
            print(f"{'0.000':>12}", end="")
        else:
            dist = ncd(languages[n1], languages[n2])
            print(f"{dist:>12.3f}", end="")
    print()

# Price series complexity (financial application)
import random
random.seed(42)
random_walk = bytes([int(128 + sum(random.choice([-1, 1]) for _ in range(i)) % 50)
                     for i in range(1, 501)])
trending = bytes([min(255, 100 + i // 2) for i in range(500)])
periodic = bytes([int(128 + 50 * math.sin(2 * math.pi * i / 20)) for i in range(500)])

for name, series in [("random_walk", random_walk), ("trending", trending), ("periodic", periodic)]:
    c = compress_length(series, "bz2")
    print(f"Price series '{name}': {c} bytes compressed (of {len(series)} raw)")
```

## Key Results & Properties

- **Incompressible strings are "random."** Martin-Löf randomness: $x$ is ML-random $\iff$ $K(x^n) \geq n - O(1)$.
- **Kolmogorov-Levin theorem:** $K(x, y) = K(x) + K(y|x) + O(\log K(x))$ — the joint complexity equals the sum of marginal and conditional.
- **Coding theorem:** $-\log \mathbf{m}(x) = K(x) + O(1)$, relating algorithmic probability to complexity.
- **Shannon-Kolmogorov duality:** $H(X) = E[K(x)]$ for computable $P$ (up to constants) — Shannon entropy is the expected Kolmogorov complexity.
- **NCD works in practice:** NCD using gzip successfully clusters languages, species (from DNA), music styles, and market regimes.

## Limitations

**Incomputability.** $K(x)$ cannot be computed; all practical applications use upper bounds via actual compression algorithms. Results hold "up to constants" but constants can be large.

**Constant dependence on UTM.** The choice of reference UTM changes $K(x)$ by a constant; for short strings this is significant. Only for long strings does the choice not matter.

**Compressor-dependence.** NCD results depend on which compressor is used. Different compressors capture different structure (dictionary compression vs. context modelling).

**No finite-sample guarantees.** Unlike Shannon entropy, there is no law of large numbers for $K$ — it is defined on individual strings.

## Applications

- **Anomaly detection:** Market microstructure anomalies detected via sudden drops in compression ratio of price series (related to [[lempel-ziv-complexity]]).
- **Bioinformatics:** NCD-based phylogenetic trees from DNA sequences without explicit sequence alignment.
- **Language identification:** Classifying text language via NCD against reference corpora.
- **Model selection:** MDL principle for selecting neural network architectures; connections to [[pac-learning]] via Occam's razor bounds.
- **Financial complexity:** Information content of return series; random-walk hypothesis as $K(\text{prices}) \approx K(\text{random})$.
- **Compression-based AGI:** Solomonoff induction as theoretical ideal for general prediction; AIXI as the optimal reinforcement learning agent.

## Related Topics

- [[lempel-ziv-complexity]] — computable approximation to Kolmogorov complexity
- [[shannon-entropy]] — probabilistic information theory; dual to algorithmic complexity
- [[pac-learning]] — MDL principle connects Kolmogorov complexity to PAC generalisation bounds
