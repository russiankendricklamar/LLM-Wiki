---
title: "Number Theory and Cryptography"
category: "Fundamentals"
order: 12
lang: "en"
slug: "number-theory-basics"
---

# Number Theory: Modular Arithmetic and the Foundation of Crypto

**Number Theory** is the study of the properties of integers. Long considered "pure" mathematics with no practical use, it became the backbone of the digital age with the advent of **Public Key Cryptography**. Without modular arithmetic and prime numbers, there would be no secure internet, no banking apps, and no [[cedefi-mechanics|blockchain]].

## 1. Divisibility and Prime Numbers

A **Prime Number** is an integer $> 1$ divisible only by 1 and itself.
- **Fundamental Theorem of Arithmetic**: Every integer $> 1$ has a unique factorization into primes (e.g., $12 = 2^2 \times 3$).
- **The Difficulty of Factoring**: Multiplying two large primes is easy for a computer, but finding the factors of a 2048-bit number is practically impossible. This asymmetry is the core of **RSA encryption**.

## 2. Modular Arithmetic (Clock Math)

In **Modular Arithmetic**, numbers "wrap around" when they reach a certain value (the **Modulus** $n$).
$$ a \equiv b \pmod n \iff n \text{ divides } (a - b) $$
- **The Discrete Logarithm Problem**: While $g^x \pmod n$ is easy to calculate, finding $x$ given $g$ and $n$ is extremely hard. This powers the **Diffie-Hellman Key Exchange** and **Elliptic Curve Cryptography (ECC)** used in Bitcoin and Ethereum.

## 3. Fermat's Little Theorem

A cornerstone of modular arithmetic: if $p$ is prime, then for any integer $a$:
$$ a^p \equiv a \pmod p $$
This theorem allows us to perform fast primality tests, ensuring that the keys we generate for our [[cedefi-gateway-architecture|CeDeFi projects]] are secure.

## 4. The Euclidean Algorithm

The **Euclidean Algorithm** is an ancient and efficient method for finding the **Greatest Common Divisor (GCD)** of two numbers.
- **Extended Version**: Used to find **Modular Inverses** ($a^{-1} \pmod n$). This is required to perform "division" in modular arithmetic, which is a necessary step for signing blockchain transactions.

## 5. Hash Functions and Collisions

While not strictly pure number theory, **Cryptographic Hash Functions** (like SHA-256) use number-theoretic properties to map data of any size to a fixed-size string.
- **Collision Resistance**: Based on the [[combinatorics-induction|Pigeonhole Principle]], collisions must exist, but number theory ensures they are impossible to find in a human lifetime.

## Visualization: Modular Cycles

```mermaid
graph TD
    0((0)) --> 1((1))
    1 --> 2((2))
    2 --> 3((3))
    3 --> 4((4))
    4 --> 5((5))
    5 --> 0
    
    Note over 0,5: Arithmetic Modulo 6
    style 0 fill:#ef4444,color:#fff
```

## Related Topics

[[cedefi-mechanics]] — practical application of cryptography  
[[combinatorics-induction]] — logic of counting and collisions  
quantum-computing — how Shor's algorithm threatens number-theoretic crypto
---
