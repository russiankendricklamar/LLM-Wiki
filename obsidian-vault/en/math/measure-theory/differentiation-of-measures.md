---
title: "Differentiation of Measures"
category: "Measure Theory"
order: 15
lang: "en"
slug: "/math/differentiation-of-measures"
growth: "seedling"
---

# Differentiation of Measures

**Differentiation of measures** is a classical topic in harmonic analysis and measure theory, establishing a profound connection between the integral of a function and its pointwise value. The central result—the **Lebesgue differentiation theorem**—asserts that for a locally integrable function, the average value over balls shrinking to a point converges to the function's value at that point almost everywhere.

## The Lebesgue Differentiation Theorem

For $f \in L^1_{loc}(\mathbb{R}^d)$, we have:
$$\lim_{r\to 0} \frac{1}{|B(x,r)|}\int_{B(x,r)} f(y)\,dy = f(x) \quad \text{a.e. } x \in \mathbb{R}^d$$

where $B(x,r)$ denotes the open ball of radius $r$ centred at $x$, and $|B(x,r)|$ is its Lebesgue measure.

This theorem embodies a fundamental principle: differentiation of a function can be realized as local averaging. It demonstrates that for a function in $L^1_{loc}$, its integral representation via measure contains complete information about its pointwise values almost everywhere. In other words, the "smoothed" notion of function (via integration) recovers the pointwise definition whenever the latter exists.

## The Hardy–Littlewood Maximal Function

The technical engine for proving Lebesgue's theorem is the **Hardy–Littlewood maximal function**:
$$Mf(x) = \sup_{r>0} \frac{1}{|B(x,r)|}\int_{B(x,r)}|f(y)|\,dy$$

This function measures the supremum of averages of $|f|$ over all balls centred at $x$. The defining property of the maximal function is:

**Weak-type $(1,1)$ bound:** for every $\lambda > 0$,
$$\left|\{Mf > \lambda\}\right| \leq \frac{C}{\lambda}\|f\|_1$$

where $C$ is an absolute constant. This states that the level set $\{Mf > \lambda\}$ shrinks at rate $O(\lambda^{-1})$.

For $p > 1$, a strong $L^p$ bound holds:
$$\|Mf\|_p \leq C_p\|f\|_p$$

with a constant $C_p$ depending on $p$ and dimension. This strong bound is derived from the weak $(1,1)$ inequality via **Marcinkiewicz interpolation**, a powerful technique for upgrading weak bounds to strong ones.

## Proof of the Lebesgue Theorem via the Maximal Function

The Lebesgue differentiation theorem follows from properties of $Mf$. Define the **upper density**:
$$L_*f(x) = \limsup_{r\to 0} \frac{1}{|B(x,r)|}\int_{B(x,r)} |f(y) - f(x)|\,dy$$

The key observation is that $L_*f(x) = 0$ almost everywhere. This is shown by noting that the maximal function of $|f - f(x)|$ vanishes a.e., which follows from the weak $(1,1)$ bound applied to suitable truncations of $f$. The conclusion is that the pointwise convergence holds a.e.

## The Besicovitch Covering Lemma

All maximal function inequalities rest on the **Besicovitch covering lemma**, a combinatorial result of independent interest: If $\mathcal{F}$ is a family of closed balls covering a set $E$, then there exists a countable subfamily $\mathcal{F}'$ with the following properties:

- The balls in $\mathcal{F}'$ are **pairwise almost disjoint** (their pairwise intersections have measure zero)
- $\mathcal{F}'$ still covers $E$
- $\sum_{B \in \mathcal{F}'} |B| \leq C|E|$ for a constant $C$ depending only on dimension

Without this lemma, the passage from local bounds on individual balls to global integral estimates becomes impossible. It is one of the deepest tools in metric geometry.

## The Calderón–Zygmund Decomposition

The **Calderón–Zygmund decomposition** is a bridge between pointwise bounds and integral estimates. Given $f \in L^1(\mathbb{R}^d)$ and $\lambda > 0$, the level set $\{|f| > \lambda\}$ can be covered by balls such that:
- Outside the balls, $|f(x)| \leq \lambda$ almost everywhere
- Inside the balls, the integral of $f$ is controlled by $\lambda$ times the ball measure

This decomposition is the mechanism underlying the proof of the weak $(1,1)$ bound. It allows one to isolate the "bad" set where $f$ is large and show that its contribution to $\|Mf\|_1$ is bounded by $\|f\|_1$.

## Differentiation of General Measures

The notion of differentiation extends naturally to arbitrary signed measures. For a signed measure (charge) $\nu$, the **symmetric derivative** with respect to Lebesgue measure is defined as:
$$D\nu(x) = \lim_{r\to 0} \frac{\nu(B(x,r))}{|B(x,r)|}$$

when this limit exists. A generalization of the Lebesgue theorem states: if $\nu$ is absolutely continuous with respect to Lebesgue measure, then $D\nu$ exists a.e. and equals the Radon–Nikodym derivative $\frac{d\nu}{d\lambda}$.

This connects the analytic notion of differentiation (as a limit of difference quotients) with the measure-theoretic concept of absolute continuity.

## The Radon–Nikodym Theorem as Differentiation

While the **Radon–Nikodym theorem** is typically proved via functional analysis (polar decomposition, projection properties), it admits a differentiation-theoretic interpretation: If $\nu$ is absolutely continuous with respect to $\mu$, then there exists a locally integrable function $f$ such that
$$\nu(E) = \int_E f\,d\mu$$
for all measurable sets $E$. This representation can be derived by showing that the symmetric derivative of $\nu$ with respect to $\mu$ exists a.e. and furnishes the required density $f$.

The relationship between differentiation and Radon–Nikodym highlights the deep unity between measure theory and classical analysis.

## The Vitali Covering Theorem

A companion result to the Besicovitch lemma is the **Vitali covering theorem**, which provides a selectable subfamily with control on gaps:

**Theorem:** If $\mathcal{V}$ is a family of closed balls covering a set $E \subseteq \mathbb{R}^d$, then there exists a countable subfamily $\{B_n\}$ of pairwise disjoint balls such that $\left|E \setminus \bigcup_{n=1}^\infty B_n\right| = 0$.

While weaker than Besicovitch (since it cannot afford density control), Vitali's theorem is more elementary and suffices for many classical applications, including direct proofs of the Lebesgue differentiation theorem without invoking the maximal function.

## Applications and Connections

Differentiation of measures finds deep applications in:

- **Several-variable theory** (regularity of harmonic functions, boundary behaviour)
- **Harmonic analysis** (singular integral operators, Littlewood–Paley theory)
- **Geometric measure theory** (density of sets, rectifiability, Hausdorff measure)
- **Stochastic calculus** (quadratic variation, local times, occupation density)

The Hardy–Littlewood maximal function became a prototype for a vast family of operators in modern analysis. Its weak-type bounds and interpolation properties are now standard techniques, extended to weighted spaces, multiple operators, and fractional variants. The Calderón–Zygmund machinery is equally ubiquitous, underlying much of contemporary PDE and harmonic analysis.

---

**Core concepts:** maximal function, weak-type $(1,1)$, Marcinkiewicz interpolation, differentiation, absolute continuity, symmetric derivative, Besicovitch covering.

**Related topics:** [[radon-nikodym]], [[lebesgue-integral]], [[lp-spaces]], [[functional-analysis]], [[sigma-algebra-measurability]], [[absolute-continuity-process-measures]]
