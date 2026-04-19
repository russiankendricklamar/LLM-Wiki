---
title: "Survival Analysis"
category: "Asymptotic Statistics"
order: 23
lang: "en"
slug: "/math/survival-analysis"
growth: "seedling"
---

# Survival Analysis

Survival analysis is a branch of statistics for analyzing the time until an event of interest occurs, such as death, failure, recovery, or relapse. The central challenge is **censoring**: we often observe only a lower bound on the true event time (e.g., a patient is still alive at the end of follow-up). This dependence structure fundamentally changes the asymptotics compared to classical independent data.

## Survival function and hazard rate

Let $T$ denote the (positive, continuous) time to event, with CDF $F(t) = P(T \leq t)$ and PDF $f(t)$. The **survival function** is:
$$S(t) = P(T > t) = 1 - F(t).$$

The **hazard rate** (or **hazard function**) measures the instantaneous failure rate:
$$\lambda(t) = \lim_{\Delta t \to 0} \frac{P(T \leq t + \Delta t \mid T > t)}{\Delta t} = \frac{f(t)}{S(t)} = -\frac{d\log S(t)}{dt}.$$

The **cumulative hazard** integrates the hazard over time:
$$\Lambda(t) = \int_0^t \lambda(s) \, ds = -\log S(t).$$

These three functions (survival, hazard, cumulative hazard) are one-to-one transformations of each other and contain equivalent information. The relationship $\Lambda(t) = -\log S(t)$ shows that survival decays exponentially in cumulative hazard:
$$S(t) = \exp(-\Lambda(t)).$$

## Right-censoring mechanism

The observed data consist of tuples $(T_i^{\text{obs}}, \delta_i, X_i)$ where:
- $T_i^{\text{obs}} = \min(T_i, C_i)$ is the observed time (event or censoring, whichever comes first).
- $\delta_i = \mathbf{1}_{T_i \leq C_i}$ is the event indicator (1 if event, 0 if censored).
- $C_i$ is the censoring time, which we assume is independent of $T_i$ given covariates (noninformative censoring).
- $X_i$ are covariates.

Under independent right-censoring, the likelihood for one observation is:
$$L_i(\theta) = [f(T_i^{\text{obs}}; \theta)]^{\delta_i} \cdot [S(T_i^{\text{obs}}; \theta)]^{1-\delta_i} = [\lambda(T_i^{\text{obs}}; \theta)]^{\delta_i} \cdot \exp(-\Lambda(T_i^{\text{obs}}; \theta)).$$

This separates into a **discrete component** at the event times and a **continuous component** over the risk intervals.

## Kaplan–Meier estimator

The **Kaplan–Meier (KM) estimator** is a nonparametric estimator of the survival function under right-censoring. It is the de facto standard for univariate survival curves.

Suppose we have $n$ individuals with ordered event times $0 < t_1 < t_2 < \cdots < t_k < \infty$. At time $t_j$, let:
- $d_j$ = number of events at time $t_j$.
- $n_j$ = number at risk (alive and uncensored) just before $t_j$.

The **Kaplan–Meier estimator** is:
$$\hat{S}(t) = \prod_{t_j \leq t} \left(1 - \frac{d_j}{n_j}\right).$$

This product-limit formula arises from a simple intuition: $S(t) = P(T > t) = \prod_{j : t_j \leq t} P(T > t_j \mid T \geq t_j)$, and we estimate each conditional survival probability nonparametrically. When there is no censoring ($d_j = 1$ or $0$ for each $j$, $n_j = n - j + 1$), the KM estimator reduces to the empirical survival function.

### Greenwood's formula for variance

The asymptotic variance of the KM estimator is estimated by **Greenwood's formula**:
$$\widehat{\text{Var}}[\hat{S}(t)] = \hat{S}(t)^2 \sum_{t_j \leq t} \frac{d_j}{n_j(n_j - d_j)}.$$

This gives a variance that accounts for the risk set shrinkage (as $n_j$ decreases with time, variance compounds). The term $d_j / (n_j(n_j - d_j))$ is the estimated variance of each product term under a hypergeometric model.

Under regularity conditions (finite expected number of events in finite time, no ties in the limit), the KM estimator is asymptotically normal:
$$\sqrt{n}[\hat{S}(t) - S(t)] \xrightarrow{d} N(0, S(t)^2 v(t)),$$
where $v(t)$ is given by Greenwood's formula normalized by $n$.

## Nelson–Aalen estimator

The **Nelson–Aalen estimator** targets the cumulative hazard directly:
$$\hat{\Lambda}(t) = \sum_{t_j \leq t} \frac{d_j}{n_j}.$$

This is simply the sum of empirical hazard increments. Unlike the KM estimator (which is a product), this is additive. Since $S(t) = \exp(-\Lambda(t))$, we can recover a survival estimate as:
$$\hat{S}(t) = \exp(-\hat{\Lambda}(t)),$$
which is slightly different from the KM estimator but asymptotically equivalent.

**Key advantages:**
- The NA estimator is more natural for the hazard scale and easier to use in Cox models.
- The logarithmic transformation in $\hat{S}(t) = \exp(-\hat{\Lambda}(t))$ can be more stable at the extremes of the survival curve.
- The NA estimator is an [[m-estimators|M-estimator]] (or more precisely, a Z-estimator of the cumulative hazard).

The asymptotic variance of the NA estimator is:
$$\widehat{\text{Var}}[\hat{\Lambda}(t)] = \sum_{t_j \leq t} \frac{d_j}{n_j^2}.$$

## Log-rank test for comparing groups

To test whether two survival curves are equal, the **log-rank test** (also called the **Mantel–Haenszel test**) compares the observed and expected number of events in each group.

Suppose we have two groups $A$ and $B$. At each event time $t_j$, we build a $2 \times 2$ table:

|        | Event | No event | Risk set |
|--------|-------|----------|----------|
| Group A | $d_j^A$ | $n_j^A - d_j^A$ | $n_j^A$ |
| Group B | $d_j^B$ | $n_j^B - d_j^B$ | $n_j^B$ |
| Total  | $d_j$ | $n_j - d_j$ | $n_j$ |

The expected number of events in group $A$ under the null hypothesis (no difference) is:
$$E_j^A = \frac{n_j^A \cdot d_j}{n_j}.$$

The **log-rank test statistic** is:
$$Z = \frac{\sum_j (d_j^A - E_j^A)}{\sqrt{\sum_j V_j}},$$
where $V_j$ is the hypergeometric variance of $d_j^A$:
$$V_j = \frac{n_j^A n_j^B d_j (n_j - d_j)}{n_j^2(n_j - 1)}.$$

Under the null hypothesis of equal survival curves, $Z \xrightarrow{d} N(0,1)$.

## Cox proportional hazards model

The **Cox proportional hazards model** (or **Cox model**) is the most widely used **semiparametric** model for survival data. It specifies the hazard as:
$$\lambda(t \mid X) = \lambda_0(t) e^{\beta^T X},$$
where:
- $\lambda_0(t)$ is an unspecified **baseline hazard** (the nonparametric component).
- $\beta \in \mathbb{R}^p$ is the coefficient vector for covariates $X \in \mathbb{R}^p$.

The term $e^{\beta^T X}$ is called the **hazard ratio**. An increase of one unit in covariate $X_j$ multiplies the hazard by $e^{\beta_j}$, independently of the value of $\lambda_0(t)$. This **proportionality assumption** means the covariate effect is constant over time.

### Partial likelihood

Cox's key insight was that $\beta$ can be estimated without specifying $\lambda_0(t)$. The **partial likelihood** is:
$$\ell_P(\beta) = \sum_{i=1}^n \delta_i \left[ \beta^T X_i - \log \sum_{j \in R(T_i^{\text{obs}})} e^{\beta^T X_j} \right],$$
where $R(t) = \{j : T_j^{\text{obs}} \geq t\}$ is the risk set at time $t$.

This is a clever construction: at each event time $T_i^{\text{obs}}$, we condition on the event happening to one person in the risk set $R(T_i^{\text{obs}})$, but we do not specify the joint distribution or the baseline hazard. The partial likelihood is maximized at $\hat{\beta}$, which is a [[m-estimators|M-estimator]] (or Z-estimator via its score).

**Asymptotic normality of $\hat{\beta}$:**
$$\sqrt{n}(\hat{\beta} - \beta_0) \xrightarrow{d} N(0, V^{-1}),$$
where $V = \mathbb{E}[\ddot{\ell}_P(\beta_0)]$ (the Hessian of the partial log-likelihood). The variance is typically estimated via the **empirical information matrix**:
$$\hat{V}^{-1} = \left( -\frac{1}{n} \sum_i \delta_i \frac{\partial^2 \log \ell_P}{\partial \beta^2}\bigg|_{\hat{\beta}} \right)^{-1}.$$

### Breslow estimator for baseline hazard

After estimating $\hat{\beta}$ from the partial likelihood, the baseline cumulative hazard $\Lambda_0(t)$ can be estimated via the **Breslow estimator**:
$$\hat{\Lambda}_0(t) = \sum_{T_i^{\text{obs}} \leq t} \frac{\delta_i}{\sum_{j \in R(T_i^{\text{obs}})} e^{\hat{\beta}^T X_j}}.$$

This is the Nelson–Aalen estimator applied to weighted "hazards" where the weight at each event time is inversely proportional to the risk-adjusted hazard in the risk set. The estimated survival function is then:
$$\hat{S}(t \mid X) = \exp(-\hat{\Lambda}_0(t) e^{\hat{\beta}^T X}).$$

## Counting process and martingale formulation

A rigorous treatment of survival analysis uses **counting processes** and **martingales**. Let $N_i(t)$ be the indicator that person $i$ experiences an event by time $t$, and $Y_i(t) = \mathbf{1}_{T_i^{\text{obs}} \geq t}$ be the indicator that person $i$ is at risk at time $t$.

The **fundamental martingale** is:
$$M_i(t) = N_i(t) - \int_0^t Y_i(s) \lambda_0(s|X_i) \, ds,$$
which represents the "surprise" in the event counting process: the actual increments minus the expected increments under the true intensity.

In the Cox model, the intensity is $Y_i(s) \lambda_0(s) e^{\beta^T X_i}$, so:
$$M_i(t) = N_i(t) - e^{\beta^T X_i} \int_0^t Y_i(s) \lambda_0(s) \, ds.$$

Under the true parameters, each $M_i(t)$ is a martingale with respect to the filtration generated by the data. **Martingale residuals** measure the predictability of each observation:
$$\hat{M}_i(t) = N_i(t) - e^{\hat{\beta}^T X_i} \hat{\Lambda}_0(t \wedge T_i^{\text{obs}}).$$

These residuals are used in model diagnostics (testing proportional hazards, detecting outliers).

## Semiparametric efficiency and influence functions

The Cox model is **semiparametric**: $\beta$ is finite-dimensional, while $\lambda_0$ is infinite-dimensional. The theory of [[semiparametric-efficiency|semiparametric efficiency]] shows that the partial likelihood estimator $\hat{\beta}$ achieves the **semiparametric efficiency bound** — it has the smallest asymptotic variance among all semiparametric estimators that do not use the true form of $\lambda_0$.

The **influence function** for the Cox partial likelihood estimator relates to the score of the partial likelihood:
$$\text{IF}(t, \delta, X; \hat{\beta}) \propto \delta \left[ X - \frac{\sum_{j \in R(t)} X_j e^{\beta^T X_j}}{\sum_{j \in R(t)} e^{\beta^T X_j}} \right],$$
which shows that unobserved covariates at event times have the largest influence.

## Connection to local asymptotic normality and nonparametric theory

The asymptotic theory of survival analysis can be understood through the lens of [[local-asymptotic-normality|local asymptotic normality (LAN)]] when the baseline hazard is assumed smooth. Under LAN, the log-likelihood ratio for a local perturbation of $\beta$ converges to a normal random variable, implying asymptotic normality of the MLE/partial likelihood estimator.

For [[point-processes|counting processes]], the theory uses **martingale central limit theorems**, which generalize classical CLT to martingale increments. These allow us to handle the complex dependence induced by censoring and time-varying risk sets.

## Related topics

- [[m-estimators|M-estimators and Z-estimators]] — General framework for Cox's partial likelihood.
- [[local-asymptotic-normality|Local asymptotic normality]] — Theoretical foundation for asymptotics.
- [[semiparametric-efficiency|Semiparametric efficiency]] — Cox estimator is semiparametrically efficient.
- [[empirical-processes|Empirical processes]] — Uniform convergence of counts over risk sets.
- [[point-processes|Point processes]] — Counting processes as marked point processes.
- [[neyman-pearson|Neyman-Pearson lemma]] — Foundation for likelihood-based inference.
- [[causal-inference|Causal inference]] — Survival analysis in observational studies; confounding and identifiability.
