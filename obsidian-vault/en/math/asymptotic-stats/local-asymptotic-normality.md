---
slug: "/math/local-asymptotic-normality"
title: "Local Asymptotic Normality (LAN)"
category: "Asymptotic Statistics"
order: 3
lang: "en"
---

# Local Asymptotic Normality (LAN)

The central question of asymptotic statistics is: how well can one estimate a parameter $\theta$ from $n$ observations as $n \to \infty$? Le Cam's theory of **Local Asymptotic Normality** (LAN) provides the definitive answer. When a statistical model is LAN, the log-likelihood ratio between nearby parameter values behaves like a Gaussian shift experiment, and this single structural property implies sharp bounds on the performance of all estimators and tests. Jacod and Shiryaev develop the LAN framework in the context of semimartingale experiments, extending Le Cam's classical i.i.d. theory to processes observed in continuous time.

## The LAN Condition

**Definition.** A sequence of statistical experiments $\mathcal{E}_n = (\Omega_n, \mathcal{F}_n, \{P^n_\theta : \theta \in \Theta\})$ is **locally asymptotically normal** (LAN) at $\theta_0 \in \Theta \subset \mathbb{R}^d$ if for every $h \in \mathbb{R}^d$:

$$\log \frac{dP^n_{\theta_0 + h/\sqrt{n}}}{dP^n_{\theta_0}} = h^\top \Delta_n - \frac{1}{2} h^\top I(\theta_0)\, h + o_{P^n_{\theta_0}}(1),$$

where:
- $\Delta_n$ is the **central sequence**, satisfying $\Delta_n \xrightarrow{d} \mathcal{N}(0, I(\theta_0))$ under $P^n_{\theta_0}$,
- $I(\theta_0)$ is a **deterministic** positive definite matrix (the Fisher information).

The LAN condition says that locally (at scale $1/\sqrt{n}$ around $\theta_0$), the statistical experiment looks like observing $\Delta_n \sim \mathcal{N}(I(\theta_0)h, I(\theta_0))$ and trying to estimate the shift $h$. This is the **Gaussian shift approximation**.

## LAMN and LAQ Extensions

Not all experiments are LAN. Jacod and Shiryaev emphasize two natural generalizations:

**LAMN (Locally Asymptotically Mixed Normal).** The log-likelihood ratio has the same quadratic form, but the Fisher information $I_n$ is now **random** (measurable with respect to the data):

$$\log \frac{dP^n_{\theta_0 + h/r_n}}{dP^n_{\theta_0}} = h^\top \Delta_n - \frac{1}{2} h^\top I_n\, h + o_{P}(1),$$

where $(\ \Delta_n, I_n) \xrightarrow{d} (\Delta, I)$ jointly, with $\Delta \mid I \sim \mathcal{N}(0, I)$. The rate $r_n$ may differ from $\sqrt{n}$. LAMN arises for non-ergodic models, such as a diffusion $dX_t = \theta\, dW_t$ observed on $[0, T]$ where the diffusion coefficient itself is the parameter.

**LAQ (Locally Asymptotically Quadratic).** The most general form:

$$\log \frac{dP^n_{\theta_0 + h/r_n}}{dP^n_{\theta_0}} = h^\top \Delta_n - \frac{1}{2} h^\top \Gamma_n\, h + o_{P}(1),$$

where $(\Delta_n, \Gamma_n)$ converge jointly in distribution. LAQ includes both LAN and LAMN. It arises in models at the boundary between ergodic and non-ergodic regimes, such as unit-root autoregressive processes.

## Le Cam's Third Lemma and Contiguity

The LAN expansion immediately implies that $P^n_{\theta_0 + h/\sqrt{n}}$ is [[contiguity-measures|contiguous]] to $P^n_{\theta_0}$. Le Cam's third lemma then gives the distribution of any statistic $T_n$ under the local alternative:

If $\binom{T_n}{\Delta_n} \xrightarrow{d} \binom{T}{\Delta}$ under $P^n_{\theta_0}$ with $\Delta \sim \mathcal{N}(0, I)$, and $\text{Cov}(T, \Delta) = \Sigma_{T\Delta}$, then under $P^n_{\theta_0 + h/\sqrt{n}}$:

$$T_n \xrightarrow{d} T + \Sigma_{T\Delta}\, I^{-1} \cdot I\, h = T + \Sigma_{T\Delta}\, h.$$

The mean shifts by $\Sigma_{T\Delta}\, h$; the variance is unchanged. This is the master formula for computing the **asymptotic power** of tests against local alternatives.

## Asymptotic Efficiency

The deepest consequence of LAN is the **Hajek-Le Cam convolution theorem**.

**Theorem.** In a LAN model, let $\hat{\theta}_n$ be any **regular** estimator of $\theta$ (meaning $\sqrt{n}(\hat{\theta}_n - \theta_0 - h/\sqrt{n})$ has a limit distribution under $P^n_{\theta_0 + h/\sqrt{n}}$ that does not depend on $h$). Then the limit distribution $L$ satisfies:

$$L = \mathcal{N}(0, I(\theta_0)^{-1}) * R,$$

where $R$ is some distribution and $*$ denotes convolution. In particular,

$$\text{Var}(L) \geq I(\theta_0)^{-1}.$$

This is the **asymptotic Cramer-Rao bound**. The MLE achieves it (with $R = \delta_0$), making it **asymptotically efficient**. No regular estimator can have smaller asymptotic variance.

**Minimax optimality.** Le Cam's theory also establishes that the MLE is asymptotically minimax: it minimizes the maximum asymptotic risk over local neighborhoods of $\theta_0$, for any bowl-shaped loss function.

## LAN for Diffusion Models

For a diffusion $dX_t = b(X_t, \theta)\,dt + \sigma(X_t)\,dW_t$ observed continuously on $[0,T]$, the **Girsanov** log-likelihood is:

$$\log \frac{dP_\theta}{dP_{\theta_0}} = \int_0^T \frac{b(X_s, \theta) - b(X_s, \theta_0)}{\sigma^2(X_s)}\,dX_s - \frac{1}{2}\int_0^T \frac{(b(X_s, \theta))^2 - (b(X_s, \theta_0))^2}{\sigma^2(X_s)}\,ds.$$

Expanding around $\theta_0$ at the local scale $h/\sqrt{T}$:

$$\log \frac{dP_{\theta_0 + h/\sqrt{T}}}{dP_{\theta_0}} = h \cdot \Delta_T - \frac{1}{2} h^2 I_T + o_P(1),$$

where $\Delta_T = T^{-1/2}\int_0^T \dot{b}(X_s, \theta_0)/\sigma^2(X_s)\,dW_s$ and $I_T = T^{-1}\int_0^T (\dot{b}(X_s, \theta_0))^2/\sigma^2(X_s)\,ds$. Under ergodicity, $I_T \to I(\theta_0)$ deterministically, yielding LAN. Without ergodicity (e.g., $T$ fixed, or explosive drift), $I_T$ remains random, giving LAMN or LAQ.

## Optimal Tests

LAN also characterizes optimal testing. For testing $H_0: \theta = \theta_0$ against $H_1: \theta = \theta_0 + h/\sqrt{n}$:

- The **Neyman-Pearson test** based on the log-likelihood ratio is asymptotically most powerful.
- Its power equals $\Phi\left(\sqrt{h^\top I h} - z_\alpha\right)$, where $\Phi$ is the standard normal CDF and $z_\alpha$ is the $\alpha$-quantile.
- No other level-$\alpha$ test can achieve higher asymptotic power against this sequence of alternatives.

For composite alternatives (testing $H_0: \theta_1 = 0$ in a multiparameter model), the **Rao score test** and the **Wald test** are both asymptotically equivalent to the likelihood ratio test, all achieving the optimal power envelope.

## Related Articles

- [[contiguity-measures]] — contiguity of local alternatives, Le Cam's lemmas.
- [[hellinger-processes]] — information-theoretic measures underpinning LAN.
- [[central-limit-theorem]] — the Gaussian limit at the core of LAN.
- [[girsanov-semimartingales]] — the change-of-measure formula driving diffusion likelihoods.
- [[convergence-semimartingales]] — the convergence machinery for process-level LAN.
- [[functional-limit-theorems]] — weak convergence framework for LAN in continuous time.
- [[stable-convergence]] — the mode of convergence relevant to LAMN (random Fisher information).
- [[law-of-large-numbers]] — ergodic theorems that make Fisher information deterministic.
