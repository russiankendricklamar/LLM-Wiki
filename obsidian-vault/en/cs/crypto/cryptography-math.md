---
title: 'Cryptography: RSA and Elliptic Curves'
category: Advanced CS and Graphs
order: 154
lang: en
slug: cryptography-math
---

Modern public-key cryptography relies on computationally hard number-theoretic problems.

### RSA (Rivest-Shamir-Adleman)
Security relies on integer factorization.
1. Choose primes $p, q$. Let $n = pq$.
2. Compute Euler's totient $\phi(n) = (p-1)(q-1)$.
3. Choose $e$ such that $\gcd(e, \phi(n)) = 1$.
4. Compute $d \equiv e^{-1} \pmod{\phi(n)}$.
Encryption: $C \equiv M^e \pmod{n}$. Decryption: $M \equiv C^d \pmod{n}$.

### Elliptic Curve Cryptography (ECC)
ECC uses the algebraic structure of elliptic curves over finite fields $\mathbb{F}_p$:
$y^2 \equiv x^3 + ax + b \pmod{p}$
Points on the curve form an Abelian group. The security relies on the Elliptic Curve Discrete Logarithm Problem (ECDLP): given $G$ and $Q = kG$, finding $k$ is computationally intractable. ECC achieves equivalent security to RSA with significantly smaller keys.
