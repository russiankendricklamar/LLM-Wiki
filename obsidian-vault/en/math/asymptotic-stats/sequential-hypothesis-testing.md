---
slug: "/math/sequential-hypothesis-testing"
title: "Sequential Hypothesis Testing"
category: "Asymptotic Statistics"
order: 5
lang: "en"
---

# Sequential Hypothesis Testing

Classical hypothesis testing fixes the sample size in advance, but Abraham Wald's **Sequential Probability Ratio Test (SPRT)** allows the statistician to keep collecting data until the evidence is decisive — and achieves any prescribed error probabilities with the **smallest expected sample size**. Liptser and Shiryaev develop the continuous-time generalization of the SPRT for observed diffusion processes, connecting it to optimal stopping of likelihood ratio martingales. This framework unifies sequential testing, change-point detection, and quickest detection problems, with applications ranging from quality control to regime-change detection in financial markets.

## The Sequential Testing Problem

Consider a diffusion observation

$$d\xi_t = \mu \, dt + dW_t, \quad t \geq 0,$$

where $W$ is a standard [[brownian-motion|Brownian motion]] and the drift $\mu$ is unknown. The testing problem is:

- $H_0$: $\mu = \mu_0$ (null hypothesis),
- $H_1$: $\mu = \mu_1$ (alternative), with $\mu_0 \neq \mu_1$.

Under $H_i$, the law of $\xi$ is $\mathbb{P}_i$. A **sequential test** is a pair $(\tau, d)$: a stopping time $\tau$ (when to stop) and a terminal decision $d \in \{0, 1\}$ (which hypothesis to accept).

## The Likelihood Ratio Process

The [[density-processes|likelihood ratio]] $Z_t = \frac{d\mathbb{P}_1}{d\mathbb{P}_0}\bigg|_{\mathcal{F}_t}$ is computed via the [[cameron-martin-formula|Cameron-Martin formula]]:

$$Z_t = \exp\!\left((\mu_1 - \mu_0)\xi_t - \frac{\mu_1^2 - \mu_0^2}{2}\,t\right).$$

Under $\mathbb{P}_0$, the log-likelihood ratio $\Lambda_t = \log Z_t$ is a Brownian motion with drift $-\frac{(\mu_1-\mu_0)^2}{2}$; under $\mathbb{P}_1$, it has drift $+\frac{(\mu_1-\mu_0)^2}{2}$. The process $Z_t$ is a $(\mathbb{P}_0, \mathcal{F}_t)$-martingale, and $1/Z_t$ is a $(\mathbb{P}_1, \mathcal{F}_t)$-martingale.

## The SPRT

**Definition.** The **Sequential Probability Ratio Test** with thresholds $A < 1 < B$ is:

$$\tau = \inf\{t \geq 0 : Z_t \notin (A, B)\}, \quad d = \begin{cases} 1 & \text{if } Z_\tau \geq B, \\ 0 & \text{if } Z_\tau \leq A. \end{cases}$$

The error probabilities are controlled by the thresholds:

$$\alpha = \mathbb{P}_0(d = 1) \leq \frac{A}{B-A+AB^{-1}}, \quad \beta = \mathbb{P}_1(d = 0) \leq \frac{B^{-1}}{A^{-1}-B^{-1}+1}.$$

In practice, the Wald approximations $A \approx \beta/(1-\alpha)$ and $B \approx (1-\beta)/\alpha$ are used to calibrate thresholds from desired error levels.

## Optimality: The Wald-Wolfowitz Theorem

**Theorem (Wald-Wolfowitz).** Among all sequential tests $(\tau', d')$ satisfying $\mathbb{P}_0(d' = 1) \leq \alpha$ and $\mathbb{P}_1(d' = 0) \leq \beta$, the SPRT minimizes both $\mathbb{E}_0[\tau]$ and $\mathbb{E}_1[\tau]$ simultaneously.

This is a remarkable optimality: the SPRT is optimal under **both** hypotheses at once, not just in a Bayes or minimax sense. The proof relies on the martingale structure of $Z$ and properties of optimal stopping (see [[discrete-martingales|martingale optional stopping]]).

## Wald's Identities

For the SPRT stopping time $\tau$:

$$\mathbb{E}_0[\Lambda_\tau] \approx \alpha \log B + (1-\alpha) \log A,$$

$$\mathbb{E}_0[\tau] \approx \frac{\alpha \log B + (1-\alpha) \log A}{-(\mu_1-\mu_0)^2/2}.$$

These identities give **closed-form expressions** for the expected sample size (observation duration) under each hypothesis, enabling precise comparison with fixed-sample tests. For small error probabilities, the SPRT typically requires far less data than the Neyman-Pearson test.

## Connection to Optimal Stopping

The SPRT is an instance of optimal stopping for the process $Z_t$ on the interval $(A, B)$. The general theory of optimal stopping for [[discrete-martingales|martingales]] and diffusions provides the framework: the value function satisfies a free-boundary problem, and the optimal boundaries are the SPRT thresholds. The Bayesian version (Shiryaev's problem) replaces the frequentist error constraints with a prior over hypotheses and minimizes the Bayes risk.

## Change-Point Detection

A natural extension is the **quickest detection problem**: the drift changes from $\mu_0$ to $\mu_1$ at an unknown time $\theta$, and the goal is to detect the change as quickly as possible after it occurs, while controlling false alarms.

**CUSUM procedure.** The cumulative sum statistic $C_t = \Lambda_t - \min_{s \leq t} \Lambda_s$ is monitored; an alarm is raised when $C_t$ exceeds a threshold. CUSUM is optimal in a minimax sense (Lorden's criterion).

**Shiryaev-Roberts procedure.** The statistic $R_t = \int_0^t Z_t / Z_s \, ds$ accumulates evidence across all possible change points. It is optimal in an average-run-length sense and plays a central role in the Shiryaev-Roberts theory of quickest detection.

Both procedures reduce to optimal stopping problems for specific processes and are closely related to the SPRT through the underlying [[doleans-dade-exponential|exponential martingale]] structure.

## Applications

**Quality control.** Sequential sampling plans in manufacturing: test items one by one, stop as soon as the evidence for acceptable/defective quality is conclusive. The SPRT minimizes inspection cost.

**Clinical trials.** Sequential analysis allows early stopping of a trial when treatment effect (or lack thereof) is established, reducing patient exposure to inferior treatments. Group-sequential methods are discrete-time approximations.

**Regime detection in finance.** Detecting shifts in asset return distributions (e.g., from bull to bear market) is a continuous-time change-point problem. The Shiryaev-Roberts statistic applied to [[geometric-brownian-motion|GBM]] with switching drift gives real-time regime indicators. The [[hidden-markov-models|HMM]] approach is a discrete-state version of the same idea.

**Signal processing.** Detecting the onset of a signal in noise (radar, communications) is a quickest detection problem with the SPRT/CUSUM as the optimal detector.

## Related Articles

- [[contiguity-measures]] — asymptotic equivalence and testing
- [[hellinger-processes]] — error exponents for hypothesis testing
- [[density-processes]] — likelihood ratio processes
- [[local-asymptotic-normality]] — LAN and efficient testing
- [[cameron-martin-formula]] — the likelihood ratio for Gaussian shifts
- [[discrete-martingales]] — optional stopping and martingale identities
- [[doleans-dade-exponential]] — exponential martingales in the SPRT
- [[hidden-markov-models]] — discrete-state regime detection
- [[kalman-filter]] — sequential estimation companion to sequential testing
- [[brownian-motion]] — the observation noise process
