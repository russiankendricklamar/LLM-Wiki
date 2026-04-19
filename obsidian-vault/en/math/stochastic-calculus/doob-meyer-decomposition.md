---
slug: "/math/doob-meyer-decomposition"
title: "Doob-Meyer Decomposition"
category: "Martingale Theory"
order: 5
lang: "en"
---

# Doob-Meyer Decomposition

The Doob-Meyer decomposition theorem is one of the foundational results of modern stochastic analysis. It states that every submartingale of class (D) can be uniquely written as the sum of a martingale and a predictable increasing process. This result is the theoretical engine behind the definition of the **compensator**, which in turn makes the entire theory of stochastic integration for [[semimartingale-models|semimartingales]] possible.

Before Doob-Meyer, one could only decompose discrete-time submartingales (Doob's decomposition, which is elementary). The passage to continuous time required entirely new ideas, developed by Meyer in the 1960s. Jacod and Shiryaev's "Limit Theorems for Stochastic Processes" builds the semimartingale calculus on this foundation: the predictable characteristics triplet $(B, C, \nu)$ is defined through compensators, and compensators exist because of Doob-Meyer.

## Discrete-Time Doob Decomposition

**Theorem (Doob).** Let $(X_n)_{n \geq 0}$ be a [[discrete-martingales|submartingale]] adapted to $(\mathcal{F}_n)$. Then there exists a unique decomposition:

$$X_n = M_n + A_n,$$

where $M$ is a martingale and $A$ is a **predictable** increasing process with $A_0 = 0$.

The construction is explicit: $A_n = \sum_{k=1}^n \mathbb{E}[X_k - X_{k-1} \mid \mathcal{F}_{k-1}]$, and $M_n = X_n - A_n$.

Predictability in discrete time means $A_n$ is $\mathcal{F}_{n-1}$-measurable: the value at time $n$ is determined by information available at time $n-1$. This elementary result generalizes to continuous time, but the proof becomes substantially harder.

## Class (D) and Uniform Integrability

**Definition.** A process $X$ is of **class (D)** if the family $\{X_\tau : \tau \text{ is a finite stopping time}\}$ is uniformly integrable.

Class (D) is the correct integrability condition for the continuous-time Doob-Meyer theorem. It is stronger than being a submartingale (which only requires $\mathbb{E}[|X_t|] < \infty$ for each $t$) but weaker than being $L^p$-bounded.

**Examples:** Every non-negative submartingale bounded in $L^1$ is of class (D). Every uniformly integrable martingale is of class (D). The process $|W_t|$ (absolute value of Brownian motion) is a submartingale of class (D) on any bounded interval $[0,T]$.

## The Continuous-Time Theorem

**Theorem (Doob-Meyer).** Let $X$ be a cadlag submartingale of class (D) with respect to a filtration $(\mathcal{F}_t)$ satisfying the **usual conditions** (right-continuity and completeness). Then there exists a unique decomposition:

$$X_t = M_t + A_t,$$

where $M$ is a uniformly integrable cadlag martingale and $A$ is a **predictable**, increasing, cadlag process with $A_0 = 0$ and $\mathbb{E}[A_\infty] < \infty$.

**Uniqueness** is the key: if $X = M + A = M' + A'$ are two such decompositions, then $M - M' = A' - A$ is simultaneously a martingale and a predictable process of bounded variation, hence zero.

The proof of existence is deep. Meyer's original argument used the theory of natural increasing processes and a delicate approximation by discrete-time decompositions. Modern proofs use the Hahn-Banach theorem or the projection theory of optional and predictable processes.

## The Compensator

**Definition.** The predictable increasing process $A$ in the Doob-Meyer decomposition of a submartingale $X$ is called the **compensator** (or **dual predictable projection**) of $X$.

The compensator captures the "deterministic trend" of the submartingale in a predictable way. It is the unique predictable increasing process such that $X - A$ is a martingale.

**Key examples:**

- For a Poisson process $N_t$ with intensity $\lambda$, the compensator is $A_t = \lambda t$, and $M_t = N_t - \lambda t$ is the compensated Poisson process (a martingale).
- For the submartingale $|W_t|$ (Brownian motion), the compensator is the local time $L_t^0$ at zero, by Tanaka's formula.
- For the squared martingale $M_t^2$ (where $M$ is a continuous $L^2$-martingale), the compensator is the **quadratic variation** $\langle M \rangle_t$. This is the fundamental link between Doob-Meyer and Ito's formula.

## Connection to Semimartingale Theory

Every semimartingale $X$ admits the canonical decomposition relative to a truncation function $h$:

$$X = X_0 + B + X^c + (x \mathbb{1}_{|x| \leq 1}) * (\mu - \nu) + (x \mathbb{1}_{|x| > 1}) * \mu,$$

where $B$ is predictable of bounded variation, $X^c$ is a continuous local martingale, $\mu$ is the jump measure, and $\nu$ is its compensator. The compensator $\nu$ exists precisely because Doob-Meyer guarantees that one can compensate the submartingale structure of the counting measure of jumps.

Without Doob-Meyer, the predictable characteristics triplet $(B, C, \nu)$ — the cornerstone of Jacod and Shiryaev's framework — could not be defined.

## Lenglart's Domination Property

A powerful extension of the Doob-Meyer philosophy is **Lenglart's inequality**, which controls a process through its compensator.

**Theorem (Lenglart).** Let $X$ be a non-negative adapted cadlag process and $A$ a predictable increasing process such that for every bounded stopping time $\tau$:

$$\mathbb{E}[X_\tau] \leq \mathbb{E}[A_\tau].$$

Then for every $\varepsilon, \eta > 0$:

$$P\!\left(\sup_{t \leq T} X_t \geq \eta\right) \leq \frac{\varepsilon}{\eta} + P(A_T \geq \varepsilon).$$

**Why this matters:** Lenglart's inequality gives control over the supremum of a process (a difficult object) in terms of the terminal value of its compensator (a much simpler object). It is used throughout Jacod and Shiryaev's proofs of limit theorems: to show that a sequence of processes converges to zero in probability, it suffices to show that the compensators converge to zero.

## The Optional Decomposition

A related but distinct result: the **optional decomposition** (Kramkov, El Karoui-Quenez) states that every supermartingale under a family of equivalent measures decomposes as $X = M - A$ where $M$ is a local martingale and $A$ is increasing and **optional** (not necessarily predictable). This is the foundation of superhedging in mathematical finance and requires Doob-Meyer as a starting point.

## Beyond Submartingales: Local Martingales

Dropping the class (D) assumption, one can still decompose: every **special semimartingale** (one whose jump process is locally integrable) has a unique decomposition $X = M + A$ where $M$ is a local martingale and $A$ is predictable of bounded variation. This is the "local" version of Doob-Meyer, established by working with a localizing sequence of stopping times and applying the classical theorem on each stopped process.

## Historical Remark

Doob proved the discrete-time version in the 1950s. Meyer established the continuous-time result in 1962-1963, initially under the assumption that the filtration satisfies the "usual conditions." The theory was subsequently refined by Dellacherie, who clarified the role of predictable and optional $\sigma$-algebras, giving the decomposition its modern form. The Doob-Meyer theorem remains one of the landmark achievements of the general theory of processes.

## Related Articles

- [[discrete-martingales]] — Doob's discrete decomposition and submartingale theory.
- [[semimartingale-models]] — the predictable characteristics built on compensators.
- [[girsanov-semimartingales]] — change of measure modifies the compensator.
- [[conditional-expectation-sigma]] — conditional expectation as the projection underlying the decomposition.
- [[sigma-algebra-measurability]] — the predictable $\sigma$-algebra and measurability.
- [[brownian-motion]] — quadratic variation as the compensator of $W_t^2$.
- [[levy-processes]] — compensated Poisson processes via Doob-Meyer.
