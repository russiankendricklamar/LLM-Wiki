---
title: "Multiple Testing"
category: "Asymptotic Statistics"
order: 22
lang: "en"
slug: "/math/multiple-testing"
growth: "seedling"
---

# Multiple Testing

## The Multiple Testing Problem

When conducting $m$ simultaneous hypothesis tests, classical error control breaks down. Testing each hypothesis $H_1, \ldots, H_m$ at level $\alpha$ independently inflates the probability of spurious rejections. The **multiple testing problem** arises because:

$$P(\text{reject } H_i \text{ for some } i \mid \text{all } H_i \text{ true}) \approx 1 - (1-\alpha)^m \approx m\alpha \text{ for small } \alpha$$

This motivates two complementary error control frameworks.

## Family-Wise Error Rate (FWER)

The **FWER** is defined as:
$$\text{FWER} = P(V \geq 1)$$
where $V$ denotes the number of false rejections (Type I errors) across all $m$ tests.

### Bonferroni Correction

The simplest FWER control at level $\alpha$ rejects $H_i$ if:
$$p_i \leq \frac{\alpha}{m}$$

This is **uniformly valid** but conservative, especially when $m$ is large or tests are dependent. The Bonferroni bound follows from the union inequality:
$$P\left(\bigcup_{i=1}^m \{p_i \leq \alpha/m\}\right) \leq \sum_{i=1}^m P(p_i \leq \alpha/m) = m \cdot \frac{\alpha}{m} = \alpha$$

### Holm's Step-Down Procedure

**Holm (1979)** improves upon Bonferroni uniformly. Order p-values as $p_{(1)} \leq p_{(2)} \leq \cdots \leq p_{(m)}$. Reject $H_{(i)}$ if:
$$p_{(i)} \leq \frac{\alpha}{m+1-i}$$
and stop at the first failure to reject. This procedure is:
- **Valid**: Controls FWER at level $\alpha$
- **More powerful**: Rejects at least as many hypotheses as Bonferroni

The step-down logic exploits that if $H_{(i)}$ is not rejected, then $H_{(j)}$ for $j > i$ would require rejection at an even higher threshold, rendering rejection implausible.

## False Discovery Rate (FDR)

FWER control becomes prohibitively stringent in high-dimensional settings (genomics, fMRI, signal processing). The **False Discovery Rate**, introduced by Benjamini & Hochberg (1995), relaxes error control to the proportion of false discoveries among rejections:

$$\text{FDR} = E\left[\frac{V}{R} \cdot \mathbf{1}_{R > 0}\right]$$

where $V$ = number of false rejections and $R$ = total number of rejections. When $R = 0$, the ratio is defined as 0 by convention.

### Benjamini–Hochberg Procedure

Order p-values as before: $p_{(1)} \leq \cdots \leq p_{(m)}$. Define:
$$k^* = \max\left\{i : p_{(i)} \leq \frac{i\alpha}{m}\right\}$$

Reject all $H_{(i)}$ for $i \leq k^*$ (and reject nothing if the set is empty).

**Key property**: Under **positive regression dependence on subset (PRDS)** or **independence**, BH controls FDR at:
$$\text{FDR} \leq \frac{m_0}{m} \alpha$$
where $m_0$ is the number of true null hypotheses. When $m_0 = m$ (all nulls true), FDR control is exact at level $\alpha$.

**Advantages over FWER**:
- Far less conservative; rejects substantially more hypotheses
- Permits interpretable false discovery rate rather than single error threshold
- Scales gracefully to thousands of tests

## Extensions and Refinements

### Storey's $q$-Values

The $q$-value generalizes the FDR-controlling threshold to individual hypotheses. For hypothesis $i$, the $q$-value is:
$$q_i = \min_{j \geq i} \frac{p_{(j)} \cdot m}{\#\{k: p_{(k)} \leq p_{(j)}\}}$$

Rejecting all hypotheses with $q_i \leq \alpha$ controls FDR at level $\alpha$. This permits **per-hypothesis error rates** that adapt to the observed data.

### Adaptive and Modified FDR

**Benjamini & Hochberg (2000)** propose adaptive thresholding: estimate $\hat{m}_0$ (the number of true nulls), then reject $H_{(i)}$ if:
$$p_{(i)} \leq \frac{i\alpha}{m} \cdot \frac{m}{\hat{m}_0}$$

This increases power while preserving FDR control, though estimation of $\hat{m}_0$ requires care.

### Knockoff Filter (Candès et al.)

The **model-X knockoff** construction provides **FDR control without distributional assumptions**. For each original feature $X_j$, construct a synthetic knockoff $\tilde{X}_j$ with the same marginal distribution but conditionally independent of the response $Y$ given $X_j$. Apply a feature importance statistic to pairs $(X_j, \tilde{X}_j)$:
$$W_j = |S(X_j, Y)| - |S(\tilde{X}_j, Y)|$$
where $S$ is a score function. Reject $H_j$ (no association) using a data-dependent threshold that controls FDR asymptotically.

### Local False Discovery Rate

**Efron's local FDR** conditions on the p-value, giving the posterior probability that a rejection is false:
$$\text{lfdr}(p) = \frac{\pi_0 f_0(p)}{(1-\pi_0)f_1(p) + \pi_0 f_0(p)}$$
where $\pi_0$ is the prior probability that a hypothesis is null, $f_0$ the null p-value density, and $f_1$ the alternative density. Rejecting hypotheses with $\text{lfdr} < \alpha$ provides direct control of local false discovery proportions.

## Connections to Empirical Bayes

Under a **mixture model**:
$$p_i \sim \pi_0 \text{Unif}(0,1) + (1-\pi_0) F_1$$
where $F_1$ is the distribution of p-values under the alternative, FDR-controlling procedures are approximately **empirical Bayes** in the limit of large $m$. The BH procedure implicitly estimates $\pi_0$ from the empirical CDF of p-values and adaptively calibrates thresholds. This perspective unifies frequentist FDR control with Bayesian shrinkage and provides a principled way to combine information across tests.

## Summary Table

| Method | Error Control | Threshold | Condition |
|--------|---------------|-----------|-----------|
| **Bonferroni** | FWER $\leq \alpha$ | $p_i \leq \alpha/m$ | Always valid |
| **Holm** | FWER $\leq \alpha$ | $p_{(i)} \leq \alpha/(m+1-i)$ | Always valid, more powerful |
| **BH** | FDR $\leq \alpha$ | $p_{(i)} \leq i\alpha/m$ | Independence or PRDS |
| **Storey** | FDR $\leq \alpha$ | $q_i \leq \alpha$ | Adaptive, per-hypothesis |
| **Knockoff** | FDR $\leq \alpha$ | Data-dependent | Model-X, no distributional assumption |

---

## Related Topics

- [[neyman-pearson]]
- [[sequential-hypothesis-testing]]
- [[empirical-processes]]
- [[concentration-inequalities]]
- [[high-dimensional-statistics]]
- [[exponential-families]]
- [[bootstrap]]
