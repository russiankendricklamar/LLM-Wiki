---
title: "Gödel's Incompleteness Theorems"
category: "Mathematics"
order: 2
lang: "en"
---

# Gödel's Incompleteness Theorems

**Gödel's incompleteness theorems** (1931) are the deepest results in mathematical logic of the 20th century. They show that in any sufficiently powerful formal system there exist **true but unprovable** statements. Hilbert's program — to formalize all of mathematics — was proved impossible in principle.

## First Incompleteness Theorem

> Any consistent formal system $T$ containing Peano arithmetic is **incomplete**: there exists a sentence $G_T$ such that $T \nvdash G_T$ and $T \nvdash \neg G_T$.

$G_T$ is true (in the standard model) but $T$ cannot prove it.

## Gödel Numbering

Every formula is encoded as a natural number:

$$\ulcorner \varphi \urcorner \in \mathbb{N} \quad \text{— Gödel number of formula } \varphi$$

**Diagonalization lemma**: for any formula $\psi(x)$ there exists a sentence $G$ such that $T \vdash G \leftrightarrow \psi(\ulcorner G \urcorner)$.

## The Gödel Sentence

Let $\text{Prov}_T(x)$ express "$x$ is the Gödel number of a theorem of $T$". By the diagonalization lemma there exists $G$ such that:

$$T \vdash G \leftrightarrow \neg\text{Prov}_T(\ulcorner G \urcorner)$$

$G$ says: **"I am unprovable in $T$"** — a mathematical Liar's paradox.

- If $T \vdash G$: then $T$ proves $\neg\text{Prov}_T(\ulcorner G \urcorner)$ — contradiction.
- If $T \vdash \neg G$: then $T \vdash \text{Prov}_T(\ulcorner G \urcorner)$, so $T \vdash G$ — contradiction.

Therefore $G$ is true but unprovable. $\blacksquare$

## Second Incompleteness Theorem

> If $T$ is consistent and contains arithmetic, then $T$ **cannot prove its own consistency**: $T \nvdash \text{Con}(T)$.

## Python Demonstration

```python
def godel_encode(expression: str) -> int:
    """Simplified Gödel numbering via prime factorization."""
    def nth_prime(n: int) -> int:
        primes, c = [], 2
        while len(primes) < n:
            if all(c % p != 0 for p in primes): primes.append(c)
            c += 1
        return primes[-1]

    symbols = sorted(set(expression))
    encoding = {s: i + 1 for i, s in enumerate(symbols)}
    result = 1
    for i, char in enumerate(expression):
        result *= nth_prime(i + 1) ** encoding[char]
    return result


def self_reference_demo():
    """
    Illustrate self-reference: a statement about its own Gödel number.
    The fixed point of 'x is unprovable'.
    """
    def unprovable(code: int) -> str:
        return f"Statement #{code} is unprovable"

    # The Gödel sentence refers to its own code
    placeholder = "G = unprovable(godel_encode(G))"
    code = godel_encode(placeholder)
    G = unprovable(code)
    print(f"G = '{G}'")
    print(f"Gödel number of G: {godel_encode(G)}")
    print("G is true iff G is unprovable — neither provable nor disprovable.")
```

## Consequences

| Consequence | Meaning |
|-------------|---------|
| Hilbert's program impossible | Cannot finitistically prove consistency of arithmetic |
| Turing (1936) | Halting problem undecidable — follows from Gödel |
| Chaitin | Most mathematical truths are random and unprovable |
| AI limits | No algorithm can decide all mathematical truths |

## Related Articles

- [[cantor-diagonal|Cantor's Diagonal Argument]] — self-reference in set theory
- [[banach-tarski|Banach-Tarski Paradox]] — axiom of choice consequences
