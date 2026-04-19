---
slug: "/math/borel-cantelli-zero-one"
title: "Borel-Cantelli Lemmas and Zero-One Laws"
category: "Measure Theory"
order: 4
lang: "en"
---

# Borel-Cantelli Lemmas and Zero-One Laws

The Borel-Cantelli lemmas and the related **zero-one laws** are the main technical tools for working with **infinite** events: "infinitely often," "eventually," "always after some moment." They state that for a wide class of such events the probability takes only the values 0 or 1 — no "intermediate" $0.42$ ever occurs. of Shiryaev's "Probability" is devoted to zero-one laws, and the Borel-Cantelli lemmas are used in to prove the strong [[law-of-large-numbers|Law of Large Numbers]].

It is the "zen of probability theory": some events **inevitably happen always or never**, and the role of the theorem is to determine which of the two occurs.

## The Borel-Cantelli lemmas

For a sequence of events $A_1, A_2, \ldots$ define the **$\limsup$**:

$$\{A_n \text{ infinitely often}\} = \limsup_n A_n = \bigcap_{n=1}^\infty \bigcup_{k \geq n} A_k.$$

This is the event "$\omega$ belongs to infinitely many $A_n$."

**Lemma 1 (Borel-Cantelli).** If $\sum_{n=1}^\infty \mathbb{P}(A_n) < \infty$, then

$$\mathbb{P}(\limsup_n A_n) = 0.$$

So "the events $A_n$ happen infinitely often" has probability zero.

**Proof** — direct: for any $N$,

$$\mathbb{P}(\limsup_n A_n) \leq \mathbb{P}\!\left(\bigcup_{k \geq N} A_k \right) \leq \sum_{k \geq N} \mathbb{P}(A_k) \to 0.$$

**Lemma 2 (reverse Borel-Cantelli).** If the $A_n$ are **independent** and $\sum_{n=1}^\infty \mathbb{P}(A_n) = \infty$, then

$$\mathbb{P}(\limsup_n A_n) = 1.$$

Under independence "$A_n$ infinitely often" happens **almost surely**.

The proof is more subtle: one uses $1 - x \leq e^{-x}$ for $\mathbb{P}(\bigcap_n A_n^c)$ via the product $\prod (1 - p_n) \leq e^{-\sum p_n} \to 0$ when the sum diverges.

## The 0/1 dichotomy

The two lemmas together give a **dichotomy**:

$$\mathbb{P}(\limsup_n A_n) = \begin{cases} 0 & \text{if } \sum \mathbb{P}(A_n) < \infty \text{ (no independence needed)} \\ 1 & \text{if } \sum \mathbb{P}(A_n) = \infty \text{ (under independence)} \end{cases}$$

Under independence either $A_n$ happens infinitely often surely or never (after some moment). No intermediate values.

## Kolmogorov's zero-one law

**Tail σ-algebra.** For a sequence of random variables $X_1, X_2, \ldots$ define

$$\mathcal{T} = \bigcap_{n=1}^\infty \sigma(X_n, X_{n+1}, \ldots).$$

This is the **tail σ-algebra** — events that "do not depend on the first $n$ variables for any finite $n$." Examples of tail events:

- $\{ X_n \text{ converges } \}$,
- $\{ \limsup X_n / n > c \}$,
- $\{ \sum X_n \text{ converges } \}$.

**Theorem (Kolmogorov 0-1 law, 1933).** If $X_1, X_2, \ldots$ are independent, then every $A \in \mathcal{T}$ has probability $0$ or $1$.

So **tail events have no "intermediate" probabilities**. The very fact of their "independence from early steps" makes them deterministic in the sense of occurrence.

**Example.** Convergence of $\sum X_n$ for independent $X_n$ is a tail event. By the 0-1 law the series either converges almost surely or diverges almost surely. There is no third possibility.

## Hewitt-Savage zero-one law

Kolmogorov's law is about tail events. **Hewitt and Savage (1955)** proved a stronger version:

**Theorem.** If $X_1, X_2, \ldots$ are i.i.d., then every event **symmetric** under permutations (the property does not depend on the order of $X_i$) has probability $0$ or $1$.

**Example.** $\{S_n > 0 \text{ infinitely often}\}$ for a random walk is symmetric under permutations, so by Hewitt-Savage its probability is 0 or 1. It turns out for centred walks it equals 1.

This is stronger than Kolmogorov because permutation-symmetric events need not be tail events (they can depend on each $X_n$, not just the tail).

## Application to the strong LLN

Borel-Cantelli is the main technical step in proving the strong LLN:

1. We want $S_n/n \to \mu$ almost surely.
2. Equivalent to: for every $\varepsilon$, $|S_n/n - \mu| > \varepsilon$ holds for only finitely many $n$.
3. That is, $\mathbb{P}(\{|S_n/n - \mu| > \varepsilon \text{ i.o.}\}) = 0$.
4. By Lemma 1, it suffices to show $\sum_n \mathbb{P}(|S_n/n - \mu| > \varepsilon) < \infty$.
5. This is done via Kolmogorov's inequality.

Without Borel-Cantelli there is no elegant route from the weak to the strong LLN.

## Application to the law of the iterated logarithm

The strong LLN gives $S_n/n \to \mu$. The law of the iterated logarithm sharpens this: $S_n - n\mu$ is of order $\sqrt{2 n \sigma^2 \log\log n}$. Its proof uses both Borel-Cantelli lemmas and Kolmogorov's 0-1 law actively.

See [[law-iterated-logarithm]].

## The "monkey and typewriter" paradox

The famous illustration of Lemma 2. If a monkey randomly hits keys forever, what is the probability it eventually types out "War and Peace"?

Let $A_n$ be the event "the keystrokes $1+10^6 n, \ldots, 10^6(n+1)$ produce the text of WaP." Each $A_n$ has very small (but positive) probability $p > 0$, and they are independent. The sum $\sum p = \infty$, so by Lemma 2 $\mathbb{P}(A_n \text{ i.o.}) = 1$.

So the monkey **almost surely** types out "War and Peace" infinitely many times. (Given infinite time.)

## Connection to ergodic theory

Zero-one laws are a special case of the more general **ergodicity** principle: for an ergodic dynamical system, invariant events (those preserved by the system) have probability 0 or 1. See [[ergodic-theorems-birkhoff]].

Concretely: **Bernoulli shifts** (i.i.d. sequences) are the simplest ergodic system, and Kolmogorov's 0-1 law is the statement of their ergodicity.

## Connection to information theory

The 0-1 law has an "information-theoretic" interpretation: tail events carry **zero information** about the initial $n$ variables for any $n$ (by construction). Lack of information means determinism: either "always happens" or "never." An intermediate probability would be a sign of partial information, which by construction is absent.

In machine learning this becomes the concept of **"stationary" features**: features invariant under the length of training data behave deterministically (rather than randomly).

## Related Articles

- [[kolmogorov-probability-axioms]] — framework in which 0-1 laws are stated.
- [[law-of-large-numbers]] — main application of Borel-Cantelli.
- [[law-iterated-logarithm]] — another classical application.
- [[sigma-algebra-measurability]] — tail σ-algebra as the subject of the 0-1 law.
- [[ergodic-theorems-birkhoff]] — generalization via ergodicity.
- [[characteristic-functions]] — parallel technique for limit theorems.
- [[brownian-motion]] — Blumenthal's 0-1 law as the continuous analogue.
- [[glivenko-cantelli]] — uniform convergence of the empirical CDF, a consequence of Borel-Cantelli.
