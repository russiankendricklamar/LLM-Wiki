---
title: 'Logic: Formal Proof Techniques'
category: Math Foundations
order: 88
lang: en
slug: formal-proof-techniques
---

Mathematical truths are established through rigorous proofs.

### Direct Proof
Assuming hypothesis $P$, logically deduce conclusion $Q$.

### Proof by Contradiction
Assume $P \land \neg Q$. Show that this assumption leads to a logical impossibility (a contradiction). Since the assumption is false, $P \implies Q$ must be true.

### Mathematical Induction
Used to prove statements for all natural numbers:
1. **Base Case:** Prove true for $n=1$.
2. **Inductive Step:** Assume true for $k$, prove true for $k+1$.

These foundations are critical for proving the [[lln-proofs|Law of Large Numbers]] and algorithm correctness.
