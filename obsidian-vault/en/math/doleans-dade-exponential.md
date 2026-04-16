---
title: "Doleans-Dade Stochastic Exponential"
category: "Martingale Theory"
order: 4
lang: "en"
---

# Doleans-Dade Stochastic Exponential

In ordinary calculus, the solution of $dZ = Z \, dX$ is $Z = e^X$. In stochastic calculus, the presence of the quadratic variation term in Ito's formula means the naive exponential $e^X$ does **not** solve the stochastic differential equation $dZ = Z_{-} \, dX$. The correct solution is the **stochastic exponential** (or Doleans-Dade exponential) $\mathcal{E}(X)$, which plays a central role in Jacod and Shiryaev's "Limit Theorems for Stochastic Processes" as the universal density process for changes of measure.

Every [[girsanov-semimartingales|Girsanov density]] is a stochastic exponential. Every [[geometric-brownian-motion|geometric Brownian motion]] is a stochastic exponential. The stochastic exponential is to semimartingale theory what the ordinary exponential is to linear algebra: the map from the additive group to the multiplicative group.

## Definition and the Equation

**Definition.** Let $X$ be a [[semimartingale-models|semimartingale]] with $X_0 = 0$. The **stochastic exponential** $\mathcal{E}(X)$ is the unique solution of the SDE:

$$Z_t = 1 + \int_0^t Z_{s-} \, dX_s.$$

Equivalently, $\mathcal{E}(X)$ is the unique semimartingale $Z$ satisfying $dZ = Z_{-} \, dX$ with $Z_0 = 1$.

The key point is $Z_{s-}$ (the left limit), not $Z_s$: the integrand is **predictable**, which ensures the stochastic integral is well-defined.

## Explicit Formula

**Theorem.** The stochastic exponential has the explicit form:

$$\mathcal{E}(X)_t = \exp\!\left(X_t - \frac{1}{2}\langle X^c \rangle_t\right) \prod_{0 < s \leq t} (1 + \Delta X_s) \, e^{-\Delta X_s},$$

where $X^c$ is the continuous martingale part of $X$, $\langle X^c \rangle$ is its quadratic variation, and the product is over all jump times of $X$ up to $t$.

**Proof sketch.** Apply Ito's formula to $f(X_t, \langle X^c \rangle_t) = \exp(X_t - \frac{1}{2}\langle X^c \rangle_t)$. For the continuous part, the quadratic variation correction in Ito's formula produces exactly the $-\frac{1}{2}\langle X^c \rangle$ term, so the continuous part works out. For each jump $\Delta X_s$, the exponential $e^{\Delta X_s}$ must be corrected to $(1 + \Delta X_s)$ because the SDE uses the left limit $Z_{s-}$: we need $Z_s = Z_{s-}(1 + \Delta X_s)$, but $e^{\Delta X_s} \neq 1 + \Delta X_s$ in general. The compensating factor $e^{-\Delta X_s}$ in the product fixes this.

## Special Cases

**Continuous semimartingale.** If $X$ has no jumps, the formula simplifies to:

$$\mathcal{E}(X)_t = \exp\!\left(X_t - \frac{1}{2}\langle X \rangle_t\right).$$

This is the form that appears in the classical Girsanov theorem for Brownian motion: if $X_t = \int_0^t \theta_s \, dW_s$, then $\mathcal{E}(X)$ is the Radon-Nikodym density.

**Pure jump process.** If $X$ is purely discontinuous with $X^c = 0$:

$$\mathcal{E}(X)_t = \prod_{0 < s \leq t} (1 + \Delta X_s).$$

This is a product of multiplicative increments, the natural analogue of the geometric random walk.

**Brownian motion with drift.** If $X_t = \theta W_t + \mu t$, then $\langle X^c \rangle_t = \theta^2 t$ and:

$$\mathcal{E}(X)_t = \exp\!\left(\theta W_t + \mu t - \frac{\theta^2}{2} t\right).$$

With $\mu = 0$ this is the classical exponential martingale, which is a true martingale if $\theta$ is bounded.

## Positivity and Strict Positivity

$\mathcal{E}(X)_t \geq 0$ for all $t$ if and only if $\Delta X_t > -1$ for all $t$ (no jump drives $X$ down by more than 1). If additionally $\Delta X_t > -1$ strictly, then $\mathcal{E}(X) > 0$ everywhere.

This condition is essential for Girsanov's theorem: the density process must be strictly positive for the new measure to be equivalent (not just absolutely continuous).

## Yor's Formula

**Theorem (Yor).** For two semimartingales $X, Y$:

$$\mathcal{E}(X) \cdot \mathcal{E}(Y) = \mathcal{E}(X + Y + [X, Y]),$$

where $[X, Y]$ is the quadratic covariation.

**Proof idea.** Apply Ito's product rule to $Z = \mathcal{E}(X)\mathcal{E}(Y)$:

$$dZ = \mathcal{E}(X)_{-} \mathcal{E}(Y)_{-} \, dX + \mathcal{E}(X)_{-} \mathcal{E}(Y)_{-} \, dY + \mathcal{E}(X)_{-} \mathcal{E}(Y)_{-} \, d[X,Y]$$
$$= Z_{-} \, d(X + Y + [X,Y]).$$

So $Z$ solves the SDE for $\mathcal{E}(X + Y + [X,Y])$, and uniqueness gives the result.

**Consequence.** The inverse of $\mathcal{E}(X)$ is $\mathcal{E}(\tilde{X})$, where $\tilde{X}$ is the unique semimartingale satisfying $X + \tilde{X} + [X, \tilde{X}] = 0$. For a continuous $X$, this gives $\tilde{X}_t = -X_t + \langle X \rangle_t$.

## Connection to Girsanov's Theorem

The [[girsanov-semimartingales|Girsanov theorem]] states: if $L = \mathcal{E}(M)$ for a local martingale $M$ with $\Delta M > -1$, and if $L$ is a true martingale, then one can define a new probability measure $Q$ by $dQ/dP|_{\mathcal{F}_t} = L_t$. Under $Q$, the predictable characteristics of every semimartingale change according to explicit formulas involving $M$.

The stochastic exponential is thus the **bridge** between additive objects (local martingales $M$ that parameterize the change of measure) and multiplicative objects (density processes $L$ that define the new measure).

## Applications

**Geometric Levy models.** The price process $S_t = S_0 \mathcal{E}(X)_t$ for a [[levy-processes|Levy process]] $X$ is the standard exponential Levy model. The explicit formula shows that $S$ remains positive when $\Delta X > -1$, i.e., when jumps cannot cause the price to become negative.

**Exponential martingales.** In the theory of large deviations (see [[large-deviations-cramer]]), one studies the exponential martingale $\mathcal{E}(\lambda M)$ where $M$ is a martingale and $\lambda$ is a parameter. The behavior of this family as $\lambda$ varies gives information about tail probabilities.

**Likelihood ratios in statistics.** The log-likelihood ratio for point process observations is the stochastic integral of the log-intensity ratio against the compensated point process. The likelihood ratio itself is the stochastic exponential of this integral.

**Novikov's condition.** A sufficient condition for $\mathcal{E}(M)$ to be a true (uniformly integrable) martingale when $M_t = \int_0^t \theta_s \, dW_s$:

$$\mathbb{E}\!\left[\exp\!\left(\frac{1}{2}\int_0^T \theta_s^2 \, ds\right)\right] < \infty.$$

This is the standard tool for verifying that a Girsanov change of measure is well-defined.

## Related Articles

- [[girsanov-semimartingales]] — change of measure via stochastic exponentials.
- [[semimartingale-models]] — the semimartingale framework and predictable characteristics.
- [[geometric-brownian-motion]] — the continuous special case $S = S_0 \mathcal{E}(\sigma W + \mu t)$.
- [[levy-processes]] — exponential Levy models use $\mathcal{E}(X)$ for Levy $X$.
- [[brownian-motion]] — the continuous local martingale driving the exponential.
- [[large-deviations-cramer]] — exponential martingales in large deviation theory.
- [[discrete-martingales]] — discrete analogues of the stochastic exponential.
