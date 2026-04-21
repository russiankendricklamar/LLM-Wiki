---
title: "Local Time and Tanaka Formula"
category: "Stochastic Calculus"
order: 19
lang: "en"
slug: "local-time-tanaka"
growth: "seedling"
---

## Local Time: Definition and Intuition

Local time $L_t^a$ of Brownian motion $W_t$ at level $a \in \mathbb{R}$ measures the cumulative time the process spends in a neighborhood of $a$. The formal definition is given by a limit:

$$L_t^a = \lim_{\varepsilon \to 0^+} \frac{1}{2\varepsilon} \int_0^t \mathbf{1}_{\{|W_s - a| < \varepsilon\}} \, ds$$

The limit exists in probability and $L_t^a$ is a nonnegative, nondecreasing, continuous process. Intuitively: for small $\varepsilon$, the expression $\frac{1}{2\varepsilon} \int_0^t \mathbf{1}_{\{|W_s - a| < \varepsilon\}} ds$ counts the fraction of time in the band $[a - \varepsilon, a + \varepsilon]$, rescaled by $\frac{1}{2\varepsilon}$. Crucially, $L_t^a$ increases only when $W_t = a$. 

The process $(L_t^a)_{a \in \mathbb{R}}$ is called the *local time function*. For fixed $t$, $L_t^a$ is a random function of the level $a$, and for fixed $a$, it is an increasing process in time.

## Occupation Time Formula

A fundamental identity connects integral functionals of the path to local time:

$$\int_0^t f(W_s) \, ds = \int_{-\infty}^{\infty} f(a) L_t^a \, da$$

for any measurable $f \geq 0$. This **occupation time formula** states that every functional of the path decomposes into contributions from each level, weighted by local time at that level. For instance:
- $\int_0^t \mathbf{1}_{\{W_s \in [a, b]\}} ds = \int_a^b L_t^a \, da$
- $\int_0^t (W_s^+)^p ds = \int_0^{\infty} p a^{p-1} L_t^a \, da$ for $p > 0$.

The occupation time formula reveals that local time completely encodes the "geometry" of the path—how the Brownian motion is distributed across space.

## Tanaka Formula

Tanaka's formula extends Itô's formula to non-smooth functions. For $f(x) = |x - a|$, which is not differentiable at $a$, Tanaka proved:

$$|W_t - a| = |W_0 - a| + \int_0^t \operatorname{sgn}(W_s - a) \, dW_s + L_t^a$$

where $\operatorname{sgn}(x) = \begin{cases} +1 & x > 0 \\ -1 & x < 0 \\ 0 & x = 0 \end{cases}$ is the sign function.

This formula is precisely analogous to the standard Itô formula, but with an additional term $L_t^a$ — the **local time**, which compensates for the lack of a second derivative at $a$. The classical Itô formula for a smooth function reads:

$$f(W_t) = f(W_0) + \int_0^t f'(W_s) \, dW_s + \frac{1}{2} \int_0^t f''(W_s) \, ds$$

For $f(x) = |x - a|$, the term $\frac{1}{2} \int_0^t f''(W_s) ds$ "materializes" as local time: the second derivative $f''(x)$ behaves like $2\delta(x - a)$, so integrating against it yields $L_t^a$.

From Tanaka's formula follows that $L_t^a$ is a nondecreasing process, and $dL_t^a \geq 0$ in the sense of measures—it is a singular measure supported on the set $\{s : W_s = a\}$.

## Lévy's Theorem and the Reflection Principle

The reflection principle for the maximum relates to local time at zero. **Paul Lévy's theorem** states:

$$(|W_t|, L_t^0) \stackrel{d}{=} (M_t - W_t, M_t)$$

where $M_t = \max_{s \leq t} W_s$ is the running maximum. The distribution of local time at zero equals the distribution of the maximum! In particular:

$$P(L_t^0 > x) = P(M_t > x) = P(|W_t| > x) = 2 \Phi(-x/\sqrt{t})$$

where $\Phi$ is the standard normal CDF.

More generally, $L_t^0 \stackrel{d}{=} |W_t| + 2(M_t - |W_t|)$, which reflects the balance between time spent near zero and excursions away from it. This beautiful identity shows that the amount of time a Brownian motion has spent at zero is distributed like its current distance from zero plus twice the overshoot of its maximum.

## Excursion Decomposition

Each time $W_t$ crosses level $a$, a new *excursion* begins—a piece of the trajectory that departs from $a$ and returns to $a$. Itô's excursion theory shows that:

1. Excursions are independent and identically distributed
2. The departure times (when $L_t^a$ increases) form a random set with no atoms but full Hausdorff dimension
3. The "intensity" of excursions is tied to local time; more precisely, the measure $dL_t^a$ is the intensity measure for the Poisson point process of excursions

This structure allows efficient analysis of path properties through independent excursions, and is central to many deep results in probability theory.

## Applications

**Yamada-Watanabe theorem**: The proof that [[stochastic-differential-equations|SDEs]] have unique strong solutions under Hölder continuity relies on local time. If drift and diffusion satisfy $\alpha$-Hölder continuity with $\alpha \geq 1/2$ (plus a small perturbation), uniqueness holds in the strong sense.

**Sticky Brownian motion**: One can define processes that "stick" to a boundary by conditioning on local time reaching certain levels. These arise naturally in optimal control and boundary value problems.

**Finance applications**:
- **Dupire local volatility**: The call/put prices determine the local volatility surface $\sigma(t, x)$, which governs the density of the diffusion's marginal distribution—local time connects marginal densities to realized paths
- **Optimal stopping**: The expected hitting time of a boundary in [[optimal-stopping-markov|optimal stopping problems]] is expressed through local time
- **Sequential testing**: CUSUM (Cumulative Sum Control Chart) processes used for change-point detection evolve via local time dynamics; the stopping rule's expected duration involves local time

**[[stochastic-differential-equations|SDE]] regularity**: Solutions to SDEs with singular coefficients (e.g., the square-root process) require local time to construct rigorously. The Feller test and boundary classification depend on local time behavior.

## Connections

Local time is a central object in [[stochastic-differential-equations|stochastic calculus]], unifying:
- The [[doob-meyer-decomposition|Doob-Meyer decomposition]] of semimartingales
- [[martingale-representation|Martingale representation theorems]]
- The theory of reflected Brownian motion and [[brownian-bridge|Brownian bridges]]
- Jump measure decompositions in finite-variation processes
- [[dupire-local-vol|Local volatility models]] in quantitative finance
- The [[doleans-dade-exponential|Doléans-Dade exponential]] in multiplicative decompositions
