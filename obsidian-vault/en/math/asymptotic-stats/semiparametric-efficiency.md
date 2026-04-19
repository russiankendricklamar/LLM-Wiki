---
title: "Semiparametric Efficiency"
category: "Asymptotic Statistics"
order: 21
lang: "en"
slug: "/math/semiparametric-efficiency"
growth: "seedling"
---

# Semiparametric Efficiency

Many statistical models contain a finite-dimensional parameter of interest $\theta \in \mathbb{R}^k$ alongside an infinite-dimensional nuisance parameter (a distribution, a function). Classical parametric efficiency—the Cramér–Rao bound—applies only when the nuisance parameter is known. **Semiparametric efficiency theory**, developed by Bickel, Klaassen, Ritov, and Wellner (BKRW), establishes the fundamental efficiency bound for estimating $\theta$ when the nuisance parameter is estimated from the data. The bound is expressed through the **semiparametric efficiency bound** and achieved by estimators based on **efficient influence functions**, extending Le Cam's convolution theorem to infinite-dimensional nuisance parameter spaces.

## The Semiparametric Model

Consider a semiparametric model:

$$\mathcal{P} = \{P_{\theta,\eta} : \theta \in \mathbb{R}^k, \eta \in \mathcal{H}\},$$

where $\theta$ is the parameter of interest and $\eta$ is an infinite-dimensional nuisance parameter living in a function space $\mathcal{H}$ (e.g., all density functions, all regression functions, all hazard rates). The true data-generating process is $P_{\theta_0, \eta_0}$.

The central question is: what is the smallest asymptotic variance an estimator $\hat{\theta}_n$ of $\theta_0$ can achieve, when $\eta_0$ is unknown and must be estimated alongside $\theta_0$?

## Pathwise Differentiability and the Tangent Set

To answer this question rigorously, one must first characterize how much "information" about $\theta$ is available along smooth perturbations of $(\theta, \eta)$. This is done through **pathwise differentiability**.

**Definition.** The model is **pathwise differentiable** at $(\theta_0, \eta_0)$ with respect to directions $\dot{\eta} \in T_{\eta_0}(\mathcal{H})$ (the tangent space to $\mathcal{H}$ at $\eta_0$) if there exist paths:

$$\eta_t = \eta_0 + t\dot{\eta} + o(t), \quad \theta_t = \theta_0 + t\dot{\theta} + o(t),$$

such that the log-likelihood ratio satisfies:

$$\log \frac{dP_{\theta_t, \eta_t}}{dP_{\theta_0, \eta_0}} = t \cdot s(\dot{\theta}, \dot{\eta}) + O(t^2),$$

where $s(\dot{\theta}, \dot{\eta})$ is the **canonical gradient** (or influence function) at $(\theta_0, \eta_0)$ for the direction $(\dot{\theta}, \dot{\eta})$.

For a parametric submodel where only $\theta$ varies ($\dot{\eta} = 0$), the canonical gradient is $s(\dot{\theta}, 0) = \dot{\theta}^\top \dot{\ell}_\theta$, where $\dot{\ell}_\theta$ is the score function. For directions in which only $\eta$ varies ($\dot{\theta} = 0$), the gradient depends on how $\eta$ enters the log-density.

## The Tangent Space and the Nuisance Tangent Space

**Tangent space $\mathcal{T}_{\theta_0, \eta_0}$.** The set of all canonical gradients as $(\dot{\theta}, \dot{\eta})$ ranges over $\mathbb{R}^k \times T_{\eta_0}(\mathcal{H})$ forms the **tangent space** to the model:

$$\mathcal{T}_{\theta_0, \eta_0} = \left\{ \dot{\theta}^\top \dot{\ell}_\theta + \dot{\ell}_\eta : \dot{\theta} \in \mathbb{R}^k, \dot{\eta} \in T_{\eta_0}(\mathcal{H}) \right\}.$$

Here, $\dot{\ell}_\theta$ is the score in the $\theta$ direction, and $\dot{\ell}_\eta$ (ranging over all perturbations of $\eta$) represents the **nuisance tangent space** $\mathcal{T}_{\eta_0}$. Crucially:

$$\mathcal{T}_{\theta_0, \eta_0} = \mathbb{R}^k \otimes \dot{\ell}_\theta \oplus \mathcal{T}_{\eta_0},$$

where the direct sum is understood in an $L^2(P_{\theta_0, \eta_0})$ sense.

## The Efficient Influence Function

Since $\eta_0$ is unknown, any estimator of $\theta$ must be robust to perturbations of $\eta$ in the tangent space $\mathcal{T}_{\eta_0}$. Define the **subspace of nuisance-orthogonal directions**:

$$\mathcal{T}_{\eta_0}^\perp = \left\{ f \in L^2(P_{\theta_0, \eta_0}) : E[f \cdot \dot{\ell}_\eta] = 0 \text{ for all } \dot{\ell}_\eta \in \mathcal{T}_{\eta_0} \right\}.$$

The **efficient influence function** for $\theta$ is the unique element of $\mathcal{T}_{\eta_0}^\perp$ that maximizes information about $\theta$. It is obtained by projecting the score $\dot{\ell}_\theta$ onto $\mathcal{T}_{\eta_0}^\perp$:

$$\tilde{\ell}_\theta = \dot{\ell}_\theta - \Pi_{\mathcal{T}_{\eta_0}}(\dot{\ell}_\theta),$$

where $\Pi_{\mathcal{T}_{\eta_0}}$ is the $L^2$ projection onto $\mathcal{T}_{\eta_0}$. This is the **Riesz representor** for the linear functional $\dot{\theta} \mapsto d\theta / d(\dot{\theta}, 0)$ on the orthogonal complement.

In explicit form, when the nuisance tangent space is spanned by score-type functions, the projection is:

$$\Pi_{\mathcal{T}_{\eta_0}}(\dot{\ell}_\theta) = E[\dot{\ell}_\theta \cdot \dot{\ell}_\eta^\top] \, E[\dot{\ell}_\eta \dot{\ell}_\eta^\top]^{-1} \cdot \dot{\ell}_\eta,$$

summed (integrated) over all nuisance directions. Thus:

$$\tilde{\ell}_\theta = \dot{\ell}_\theta - E[\dot{\ell}_\theta \dot{\ell}_\eta^\top] \, E[\dot{\ell}_\eta \dot{\ell}_\eta^\top]^{-1} \cdot \dot{\ell}_\eta.$$

## The Semiparametric Efficiency Bound

**Theorem (BKRW Efficiency Bound).** Under regularity conditions (pathwise differentiability, existence of the efficient influence function), any regular [[m-estimators|$\sqrt{n}$-consistent and asymptotically normal]] estimator $\hat{\theta}_n$ of $\theta_0$ satisfies:

$$\sqrt{n}(\hat{\theta}_n - \theta_0) \xrightarrow{d} \mathcal{N}(0, V),$$

where the **semiparametric efficiency bound** is:

$$V = \left[ E[\tilde{\ell}_\theta \tilde{\ell}_\theta^\top] \right]^{-1}.$$

By definition of $\tilde{\ell}_\theta$ (orthogonal to the nuisance tangent space), we have:

$$V = \left[ P(\tilde{\ell}_\theta \tilde{\ell}_\theta^\top) \right]^{-1}.$$

This bound is invariant to the choice of parametrization of $\eta$ and accounts for the cost of estimating the infinite-dimensional nuisance parameter. **An estimator is semiparametrically efficient if its asymptotic variance equals $V$.**

## One-Step Estimators and Efficient Estimating Equations

A direct and simple path to semiparametric efficiency is via **one-step estimators** based on efficient influence functions.

**One-step estimator.** Given a preliminary $\sqrt{n}$-consistent estimator $(\hat{\theta}^{(0)}, \hat{\eta}^{(0)})$, the one-step estimator is:

$$\hat{\theta}_{\text{one-step}} = \hat{\theta}^{(0)} - \left[ P_n(\tilde{\ell}_\theta \tilde{\ell}_\theta^\top) \big|_{(\hat{\theta}^{(0)}, \hat{\eta}^{(0)})} \right]^{-1} P_n(\tilde{\ell}_\theta) \big|_{(\hat{\theta}^{(0)}, \hat{\eta}^{(0)})},$$

where $P_n$ denotes the empirical average. If $\tilde{\ell}_\theta$ is the efficient influence function and the preliminary estimators are $\sqrt{n}$-consistent, then $\hat{\theta}_{\text{one-step}}$ is semiparametrically efficient.

**Efficient estimating equations.** More broadly, an estimator solving:

$$P_n(\tilde{\ell}_\theta) = 0$$

(with appropriate regularity conditions on the rate of convergence of $\tilde{\ell}_\theta$ to its population limit) is asymptotically efficient. These are the **efficient estimating equations**. The power of this approach is that one need only identify the efficient influence function, not solve a difficult optimization problem.

## Profile Likelihood

For **likelihood-based** semiparametric models, the efficient estimator can often be obtained by **profile likelihood**. The idea is to replace $\eta$ with its maximum likelihood estimator $\hat{\eta}(\theta)$ as a function of $\theta$, then maximize:

$$\ell_p(\theta) = \log L(\theta, \hat{\eta}(\theta)),$$

where $L(\theta, \eta)$ is the likelihood. Under regularity conditions, the profile likelihood score satisfies:

$$\frac{d\ell_p(\theta)}{d\theta} \big|_{\theta_0} = \tilde{\ell}_\theta + o_P(n^{-1/2}),$$

where $\tilde{\ell}_\theta$ is the efficient influence function. Thus, the MLE from the profiled likelihood is semiparametrically efficient.

## Examples

### Cox Proportional Hazards Model

In the **Cox model**, one observes right-censored survival times $(T_i, \Delta_i)$ under the proportional hazards assumption:

$$h(t | Z) = h_0(t) e^{\theta Z},$$

where $\theta$ is the log-hazard ratio, $Z$ is a scalar covariate, and $h_0(t)$ is the baseline hazard (the infinite-dimensional nuisance parameter). The partial likelihood and Breslow's estimator of $h_0$ automatically implement semiparametric efficiency. The efficient influence function is:

$$\tilde{\ell}_\theta = \left[ Z - \frac{E[Z e^{\theta Z} \cdot \mathbf{1}_{Y \geq t}]}{E[e^{\theta Z} \cdot \mathbf{1}_{Y \geq t}]} \right] dM_c(t),$$

where $M_c(t)$ is the counting process for the event times, and the integral is over the support of $h_0$.

### Partially Linear Model

The **partially linear model** is:

$$Y = \theta X + g(U) + \varepsilon,$$

where $\theta$ is of interest, $g$ is an unknown smooth function, and $\varepsilon \perp (X, U)$. One can use nonparametric regression (e.g., kernel or spline) to estimate $g$, then solve:

$$P_n \left[ (Y - \hat{g}(U)) - \theta X \right] \cdot X_c = 0,$$

where $X_c = X - E[X | U]$ is the residual of $X$ after partialling out $U$. This leads to the **Robinson estimator**, which is semiparametrically efficient if $\hat{g}$ converges at the nonparametric rate.

### Instrumental Variables Estimation

In the **IV model** with endogenous regressor:

$$Y = \theta X + \varepsilon, \quad X = \pi(W) + \eta,$$

where $W$ is an instrument and $\pi(W)$ is the unknown first-stage regression, semiparametric efficiency bounds depend on the nuisance tangent space of $\pi$. The efficient influence function exhibits the **debiased machine learning** structure:

$$\tilde{\ell}_\theta \propto (Y - \theta \hat{X}) \cdot (X - E[X | W]),$$

where the term $E[X | W]$ is estimated at a (potentially) slower nonparametric rate.

## Doubly Robust Estimation and AIPW

**Doubly robust estimators** achieve semiparametric efficiency by combining two nuisance parameter estimates: one of a propensity score and one of an outcome regression. In causal inference, the **augmented inverse-probability-weighted** (AIPW) estimator has the form:

$$\hat{\tau}_{\text{AIPW}} = \frac{1}{n}\sum_{i=1}^n \left[ \frac{Y_i A_i}{\hat{\pi}(X_i)} - \frac{\hat{\mu}_1(X_i) A_i}{\hat{\pi}(X_i)} + \hat{\mu}_1(X_i) - \frac{Y_i(1 - A_i)}{1 - \hat{\pi}(X_i)} + \frac{\hat{\mu}_0(X_i)(1 - A_i)}{1 - \hat{\pi}(X_i)} - \hat{\mu}_0(X_i) \right],$$

where $\hat{\pi}$ is the estimated propensity score, $\hat{\mu}_1, \hat{\mu}_0$ are outcome regression estimates, and $A_i$ is the treatment assignment. The magic of AIPW is that it is semiparametrically efficient **even if one of** $\hat{\pi}$ or $\hat{\mu}$ is estimated at rate $o_P(n^{-1/4})$. This is because the efficient influence function for the treatment effect is the sum of two orthogonal pieces—one depends on the propensity, one on the regression—and the union of their nuisance tangent spaces captures all flexibility in the model.

## Connections to Causal Inference

Semiparametric efficiency is foundational to modern causal inference. Estimators for [[causal-inference|causal parameters]] (treatment effects, policy values, optimal treatment rules) are semiparametrically efficient when they:

1. Use an **efficient influence function** that is orthogonal (Neyman orthogonal) to the nuisance parameters (propensity scores, outcome models, etc.).
2. Allow the nuisance parameters to be estimated at possibly slower rates (e.g., using flexible machine learning).
3. Employ **debiased** or **orthogonalized** empirical processes that remove first-order bias from plugging in estimated nuisances.

These principles have driven the development of **debiased machine learning**, **doubly robust** methods, and **orthogonal/Neyman-robust** estimation.

## Related Articles

- [[local-asymptotic-normality]] — the foundational Le Cam theory on which semiparametric efficiency builds.
- [[cramer-rao-bound]] — the classical parametric efficiency bound; semiparametric bounds generalize it.
- [[m-estimators]] — the framework for studying consistency and asymptotic normality of solution estimators.
- [[empirical-processes]] — the stochastic process tools underlying efficiency proofs.
- [[causal-inference]] — modern applications to treatment effects and doubly robust estimation.
- [[bayesian-asymptotics]] — Bernstein-von Mises results for semiparametric models.
- [[exponential-families]] — the natural setting for pathwise differentiability and efficient influence functions.
