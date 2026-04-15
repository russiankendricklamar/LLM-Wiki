---
title: "Kolmogorov's Probability Axioms"
category: "Mathematics"
order: 5
lang: "en"
---

# Kolmogorov's Probability Axioms

In 1933 Andrey Nikolaevich Kolmogorov published "Grundbegriffe der Wahrscheinlichkeitsrechnung" (Foundations of the Theory of Probability), in which he **rigorously** axiomatized the notion of probability via measure theory. Before this, probability was a collection of heuristics and paradoxes; after it became a branch of analysis as rigorous as geometry after Euclid or algebra after Hilbert.

This axiomatization fills §§1-3 of Chapter II of Shiryaev's [[shiryaev-probability|"Probability"]] textbook, and it underlies everything I have already written about martingales, Girsanov, FTAP, and stochastic calculus. Without it the terms "event," "probability," "random variable" would not be rigorously defined.

## The basic construction

A **probability space** is a triple $(\Omega, \mathcal{F}, \mathbb{P})$, where:

- $\Omega$ — the **sample space**. The set of all "possible outcomes" of the experiment. For a coin toss $\Omega = \{H, T\}$; for time-to-failure of a bulb $\Omega = [0, \infty)$.
- $\mathcal{F}$ — a **σ-algebra of events**. A subset of $2^\Omega$ closed under countable unions and complements, containing $\Omega$ and $\varnothing$. Each $A \in \mathcal{F}$ is an **event** to which a probability can be assigned.
- $\mathbb{P}$ — a **probability measure**. A function $\mathcal{F} \to [0, 1]$ satisfying three axioms:

## The axioms

**Axiom 1 (non-negativity).** $\mathbb{P}(A) \geq 0$ for every $A \in \mathcal{F}$.

**Axiom 2 (normalization).** $\mathbb{P}(\Omega) = 1$.

**Axiom 3 (countable additivity, σ-additivity).** For any countable sequence of **pairwise disjoint** events $A_1, A_2, \ldots \in \mathcal{F}$:

$$\mathbb{P}\!\left( \bigcup_{i=1}^\infty A_i \right) = \sum_{i=1}^\infty \mathbb{P}(A_i).$$

That is all. From these three axioms the **entire** theory of probability is derived.

## What follows

Simple consequences:

- $\mathbb{P}(\varnothing) = 0$. Proof: $\Omega = \Omega \cup \varnothing \cup \varnothing \cup \ldots$, by Axiom 3 the sum $\mathbb{P}(\Omega) + \mathbb{P}(\varnothing) + \ldots = 1$, forcing $\mathbb{P}(\varnothing) = 0$.
- $\mathbb{P}(A^c) = 1 - \mathbb{P}(A)$. From $A \cup A^c = \Omega$ and Axioms 2-3.
- $A \subset B \Rightarrow \mathbb{P}(A) \leq \mathbb{P}(B)$. Monotonicity.
- $\mathbb{P}(A \cup B) = \mathbb{P}(A) + \mathbb{P}(B) - \mathbb{P}(A \cap B)$. Inclusion-exclusion.
- **Continuity from above and below:** for an increasing sequence $A_n \uparrow A$ we have $\mathbb{P}(A_n) \to \mathbb{P}(A)$ (and similarly for decreasing).

Continuity of probability measure is one of the most useful consequences of Axiom 3 and is what fundamentally distinguishes countable from merely finite additivity.

## Why a σ-algebra

In the **discrete** case ($\Omega$ finite or countable) the σ-algebra can be the maximal one — $\mathcal{F} = 2^\Omega$. No problem: every subset is an event, every event has a probability.

In the **continuous** case this is **impossible**. Example: on $\Omega = [0, 1]$ with the "uniform-by-length" probability one cannot assign a probability to every subset of $[0,1]$ — the existence of "bad" sets is guaranteed by the Axiom of Choice (Vitali sets). So $\mathcal{F}$ is chosen **smaller** than $2^\Omega$, typically as the **Borel σ-algebra** $\mathcal{B}([0,1])$ — the smallest σ-algebra containing all intervals.

This is a technical but **crucial** point: the σ-algebra is not just a formality but a non-trivial object, without which a correct definition of "uniform distribution on an interval" is impossible.

See [[sigma-algebra-measurability]] for details.

## Random variable

A random variable is a **measurable map**

$$X : (\Omega, \mathcal{F}) \to (\mathbb{R}, \mathcal{B}(\mathbb{R})),$$

i.e. a function whose preimage of every Borel set lies in $\mathcal{F}$. "Measurability" ensures that expressions like $\mathbb{P}(X \leq a) = \mathbb{P}(\{ \omega : X(\omega) \leq a \})$ make sense — because $\{X \leq a\} \in \mathcal{F}$.

**Distribution of a random variable:** the measure $\mu_X$ on $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$ defined by $\mu_X(B) = \mathbb{P}(X \in B)$. This is the rigorous form of the "distribution function" $F_X(a) = \mathbb{P}(X \leq a)$.

## Expectation

Defined as the **Lebesgue integral** of the random variable against $\mathbb{P}$:

$$\mathbb{E}[X] = \int_\Omega X(\omega) \, d\mathbb{P}(\omega).$$

This generalizes the Riemann integral: for a discrete random variable $\mathbb{E}[X] = \sum_i x_i \mathbb{P}(X = x_i)$, for a continuous one with density $f$, $\mathbb{E}[X] = \int x f(x) \, dx$. The Lebesgue construction unifies both cases and extends to arbitrary measurable functions.

## Historical significance

Before Kolmogorov, probability theory was half mathematics, half philosophy: what is "randomness," what does "probability 1/2" mean, how to ground the frequentist definition. Kolmogorov **separated** the mathematical part: a probability space is an abstract object for which "frequency," "frequency limit," and "independence" are **derivable** properties, not definitions.

This is the same role Hilbert's axiomatization played for geometry: instead of "a line as a visual object," "a line as one of the objects satisfying the axioms." Axiomatization makes the theory **invariant under interpretation**: the same mathematics applies to coin tossing, Brownian motion of stock prices, radio noise, and quantum-mechanical measurement.

## Connection to mathematical modernism

Kolmogorov's axiomatization is part of the broader modernist movement in 1920s-30s mathematics: Hilbert's formalism, Zermelo-Fraenkel set theory, von Neumann's spectral theory, Cartan's differential geometry. They are united by the idea of **separating formal structure from interpretation**.

In this sense Kolmogorov's theory is the final step in turning probability from "reasoning about chance" into a branch of pure mathematics.

## Related Articles

- [[sigma-algebra-measurability]] — formal apparatus of events and measurability.
- [[conditional-expectation-sigma]] — generalization of expectation through σ-algebras.
- [[characteristic-functions]] — Fourier transform of a probability measure.
- [[law-of-large-numbers]] — theorem for which Kolmogorov's axiomatization was developed.
- [[central-limit-theorem]] — the foundational theorem stated in these terms.
- [[brownian-motion]] — simplest continuous stochastic process on a Kolmogorov space.
- [[ftap-first-fundamental-theorem]] — financial theorem stated on $(\Omega, \mathcal{F}, \mathbb{P})$.
- [[godel-incompleteness]] — parallel example of formal axiomatization (in number theory).
