---
title: "Stratonovich Integral"
category: "Stochastic Calculus"
order: 26
lang: "en"
slug: "/math/stratonovich-integral"
growth: "seedling"
---

# Stratonovich Integral

The Stratonovich integral, denoted $\int_0^T H_t \circ dW_t$, is an alternative to the Itô integral $\int_0^T H_t dW_t$ that differs fundamentally in how it **subdivides the Brownian increments**. Where Itô uses left endpoints of each subinterval, Stratonovich uses **midpoints**—a seemingly technical distinction with profound consequences. The Stratonovich choice makes the classical **chain rule** hold exactly, recovering the simplicity of deterministic calculus at the cost of losing the martingale property. This article explores the definition, conversion formulas, applications, and the geometric intuition behind Stratonovich integration.

## Definition via Midpoint Riemann Sums

Let $W = (W_t)_{t \in [0,T]}$ be a Wiener process and $H = (H_t)_{t \in [0,T]}$ a suitably adapted or progressively measurable process. Fix a partition $\Pi_n : 0 = t_0^n < t_1^n < \cdots < t_{k_n}^n = T$ with mesh $\|\Pi_n\| \to 0$.

**Definition.** The **Stratonovich integral** is the limit in probability:

$$\int_0^T H_t \circ dW_t := \lim_{n \to \infty} \sum_{i=0}^{k_n-1} \frac{H_{t_i^n} + H_{t_{i+1}^n}}{2} \left(W_{t_{i+1}^n} - W_{t_i^n}\right),$$

provided the limit exists and is independent of the choice of partition.

Contrast this with the Itô integral, which uses $H_{t_i^n}$ (left endpoint) rather than the midpoint $\frac{H_{t_i^n} + H_{t_{i+1}^n}}{2}$. For deterministic $H$, both integrals coincide with the Lebesgue-Stieltjes integral. For random $H$, the choice of evaluation point produces a **$O(1)$ difference**, asymptotically equivalent to the quadratic covariation $[H, W]_T$.

## Conversion Formula: Stratonovich to Itô

The fundamental formula relating the two integrals is:

$$\int_0^T H_t \circ dW_t = \int_0^T H_t \, dW_t + \frac{1}{2} [H, W]_T,$$

where $[H, W]_T = \lim_{n \to \infty} \sum_{i=0}^{k_n-1} (H_{t_{i+1}^n} - H_{t_i^n})(W_{t_{i+1}^n} - W_{t_i^n})$ is the **quadratic covariation** of $H$ and $W$.

For a semimartingale $H_t = \int_0^t \sigma_s \, dW_s + \int_0^t b_s \, ds$ (Brownian and drift parts), the covariation simplifies to

$$[H, W]_T = \int_0^T \sigma_t \, d[W, W]_t = \int_0^T \sigma_t \, dt,$$

so the conversion becomes explicit:

$$\int_0^T H_t \circ dW_t = \int_0^T H_t \, dW_t + \frac{1}{2}\int_0^T \sigma_t \, dt.$$

The second term vanishes if $H$ is deterministic, but is crucial when $H$ has a Brownian component.

## The Stratonovich Chain Rule

The deepest distinction between Itô and Stratonovich lies in **calculus**. Under Itô, the chain rule acquires an extra second-order correction:

$$df(X_T) = f'(X_T) \, dX_T + \frac{1}{2} f''(X_T) \, d[X, X]_T.$$

Under Stratonovich, the classical chain rule holds **without correction**:

$$f(X_T) = f(X_0) + \int_0^T f'(X_t) \circ dX_t,$$

provided $f$ is continuously differentiable. This is not a coincidence: the midpoint Riemann sum naturally encodes the second-order terms into the integral itself, so no separate correction is needed.

**Proof sketch:** Write $\Delta f_i = f(X_{t_{i+1}}) - f(X_{t_i}) = f'(\xi_i) \Delta X_i$ by the mean value theorem, where $\xi_i \in [X_{t_i}, X_{t_{i+1}}]$ is some intermediate point. For Stratonovich, $\xi_i$ is approximately the midpoint of the interval, which is why the midpoint evaluation in the integral definition recovers exactly the first-order chain rule.

## Stochastic Differential Equations: Stratonovich Form

Consider a **Stratonovich [[stochastic-differential-equations|SDE]]**:

$$dX_t = a(X_t) \, dt + b(X_t) \circ dW_t, \quad X_0 = x_0.$$

Via the conversion formula, this is equivalent to the Itô form

$$dX_t = \left(a(X_t) + \frac{1}{2} b'(X_t) b(X_t)\right) dt + b(X_t) \, dW_t.$$

The extra drift term $\frac{1}{2} b'(X_t) b(X_t)$ (the **Itô correction**) is added automatically when translating from Stratonovich to Itô.

**Example: Geometric Brownian Motion.** In Stratonovich form:

$$dS_t = \mu S_t \, dt + \sigma S_t \circ dW_t.$$

The equivalent Itô SDE is

$$dS_t = \left(\mu + \frac{\sigma^2}{2}\right) S_t \, dt + \sigma S_t \, dW_t,$$

which matches the standard lognormal model (the $\frac{\sigma^2}{2}$ adjustment ensures the correct drift of $\log S_t$).

## The Wong-Zakai Theorem

A central theorem motivating Stratonovich integration is **Wong-Zakai**, which states that SDEs driven by smooth (Lipschitz continuous) approximations to Brownian motion converge to the **Stratonovich SDE**, not the Itô SDE.

**Theorem (Wong-Zakai).** Let $W^\varepsilon$ be a smooth approximation to $W$ (e.g., $W^\varepsilon_t = \int_0^t K^\varepsilon(t-s) \, dW_s$ with smooth kernel $K^\varepsilon$). Let $X^\varepsilon$ satisfy the Itô SDE

$$dX^\varepsilon_t = a(X^\varepsilon_t) \, dt + b(X^\varepsilon_t) \, dW^\varepsilon_t.$$

Then $X^\varepsilon \to X$ in probability, where $X$ solves the **Stratonovich SDE**

$$dX_t = a(X_t) \, dt + b(X_t) \circ dW_t.$$

This theorem is profound: it says that Stratonovich is the "natural" integral for physically realizable rough driving signals that are smooth at microscopic scales. Only in the idealized limit do we recover Itô's white-noise picture.

## Physical Interpretation and Langevin Equations

In physics, particularly **statistical mechanics** and **nonequilibrium dynamics**, the Stratonovich convention is standard. A classical Langevin equation for particle velocity with colored (non-white) noise is

$$m \, dv = -\gamma v \, dt + \sqrt{2\gamma k_B T} \, d\eta,$$

where $\eta$ is Gaussian white noise. When $\eta$ is interpreted as the limit of smoothed noise, the natural calculus is Stratonovich. The Itô interpretation introduces spurious drift corrections that do not appear in the physical system.

More precisely, the Stratonovich form preserves **geometric structure**. If the drift and diffusion satisfy certain compatibility conditions ([[manifold-learning|manifold]] structure, symplectic form), Stratonovich integration respects these geometric constraints more faithfully than Itô integration.

## Rough Paths and the Stratonovich Lift

In **rough paths theory**, paths are enhanced with iterated integrals (signatures). For a smooth path $\gamma$, the **Stratonovich lift** is

$$\Gamma = (\gamma, \int_0^t \gamma \circ d\gamma) = (\gamma, \int_0^t d\gamma \otimes d\gamma),$$

where the double integral uses Stratonovich convention. This lift provides a canonical way to define differential equations on paths, independent of parameterization choice.

The Stratonovich convention appears naturally because it is **coordinate-invariant**. Under a smooth change of variables, Stratonovich integrals transform like one-forms in differential geometry, while Itô integrals require extra Jacobian corrections. For geometric and infinite-dimensional integration problems, Stratonovich is the right choice.

## Malliavin Calculus and Functional Derivatives

In **Malliavin calculus**, the Stratonovich integral appears naturally in the definition of the Malliavin derivative. For a smooth functional $F(X)$ where $X$ solves a Stratonovich SDE, the directional derivatives with respect to perturbations align cleanly with Stratonovich increments:

$$D_H F = \int_0^T \frac{\delta F}{\delta X_t} \circ dH_t,$$

where $H$ is an $\mathcal{H}$-valued perturbation (Cameron-Martin space). The absence of a correction term reflects the fundamental compatibility of Stratonovich integration with the tangent-space structure of Wiener space.

## The Onsager-Machlup Functional

For a diffusion $X$ solving the Stratonovich SDE $dX = a(X) \, dt + b(X) \circ dW$, the **Onsager-Machlup functional**

$$S[\phi] = \int_0^T \frac{1}{2} |b^{-1}(\dot{\phi} - a)|^2 \, dt$$

gives the action (in the Freidlin-Wentzell sense) for the path $\phi$ in the large deviations scaling. The use of Stratonovich form ensures that $S[\phi]$ has a clean interpretation as the **kinetic energy cost** relative to the drift field, without spurious second-order corrections.

## Comparison Table: Itô vs. Stratonovich

| Aspect | Itô | Stratonovich |
|--------|-----|--------------|
| **Evaluation point** | Left endpoint | Midpoint |
| **Chain rule** | Requires $\frac{1}{2}f''(X) d[X,X]_T$ correction | Classical: $f(X_T) = f(X_0) + \int f'(X) \circ dX$ |
| **Martingale property** | $\int H \, dW$ is martingale | $\int H \circ dW$ is **not** a martingale |
| **Quadratic covariation** | Used in chain rule explicitly | Absorbed in integral definition |
| **Wong-Zakai limit** | Limit of smooth approximations **not** Itô | Limit of smooth approximations **is** Stratonovich |
| **Geometry** | Tangent-space structure requires corrections | Preserves geometric structure |
| **Finance** | Standard (lognormal models) | Less common (physics-oriented) |
| **Physics** | Requires Itô correction to match physical laws | Natural for Langevin equations |

## Related Articles

- itô-integral — the standard Itô integral and its properties
- [[stochastic-differential-equations]] — SDEs and their solutions
- [[quadratic-variation]] — covariation and bracket notation
- [[malliavin-calculus]] — functional derivatives and Clark-Ocone formula
- [[rough-paths]] — signature-based approach to pathwise integration
- [[cameron-martin-formula]] — tangent space of Wiener space
- [[feynman-kac]] — PDE-probability connections
- [[sde-numerical-methods]] — discretization schemes and Wong-Zakai
- [[brownian-motion]] — the Wiener process
- semimartingales — general processes and their structure
