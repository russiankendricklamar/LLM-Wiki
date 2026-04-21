---
title: "Correlation and Association"
category: "Asymptotic Statistics"
order: 13
lang: "en"
slug: "correlation-association"
---

# Correlation and Association Measures

Correlation measures the strength and direction of a relationship between two variables. However, "Correlation is not Causation," and more importantly, "Lack of Linear Correlation is not Lack of Independence."

## 1. Pearson Product-Moment Correlation ($\rho$)

The standard measure of **linear** association between continuous variables $X$ and $Y$:

$$\rho_{X,Y} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y} = \frac{\mathbb{E}[(X-\mu_X)(Y-\mu_Y)]}{\sigma_X \sigma_Y}$$

- **Range**: $[-1, 1]$.
- **Limitation**: It only captures linear relationships. $\rho$ can be 0 for variables that are perfectly dependent in a non-linear way (e.g., $Y = X^2$ where $X \sim \mathcal{N}(0,1)$).

## 2. Spearman's Rank Correlation ($r_s$)

A non-parametric measure that assesses how well the relationship between two variables can be described using a **monotonic function**. It is simply the Pearson correlation applied to the **ranks** of the data.

- **Robustness**: It is much less sensitive to outliers than Pearson.
- **Use case**: When data is ordinal or the relationship is non-linear but monotonic.

## 3. Kendall's Tau ($\tau$)

Measures the ordinal association based on **concordant** and **discordant** pairs.
$$\tau = \frac{(\text{number of concordant pairs}) - (\text{number of discordant pairs})}{\binom{n}{2}}$$
- **Best for**: Small datasets or when there are many tied ranks. It has better statistical properties than Spearman for hypothesis testing.

## 4. Distance Correlation (dCor)

A modern measure (Szekely, 2007) that equals 0 **if and only if** the variables are independent. Unlike Pearson, it can detect any type of dependency (circular, sinusoidal, etc.).

## 5. Partial Correlation

Measures the association between $X$ and $Y$ while **controlling for** the influence of one or more additional variables $Z$.
$$\rho_{XY \cdot Z} = \frac{\rho_{XY} - \rho_{XZ}\rho_{YZ}}{\sqrt{(1-\rho_{XZ}^2)(1-\rho_{YZ}^2)}}$$
This is essential for distinguishing between direct relationships and those caused by a common factor (confounder).

## Visualization: Correlation vs. Dependence

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": -2, "linear": -2, "quadratic": 4},
    {"x": -1, "linear": -1, "quadratic": 1},
    {"x": 0,  "linear": 0,  "quadratic": 0},
    {"x": 1,  "linear": 1,  "quadratic": 1},
    {"x": 2,  "linear": 2,  "quadratic": 4}
  ],
  "lines": [
    {"dataKey": "linear", "stroke": "#3b82f6", "name": "Linear (ρ=1)"},
    {"dataKey": "quadratic", "stroke": "#ef4444", "name": "Non-linear (ρ=0)"}
  ]
}
```
*The red line (Y=X²) has a Pearson correlation of 0, yet $Y$ is perfectly determined by $X$. This illustrates why relying solely on linear correlation can be dangerous.*

## Related Topics

[[copulas]] — the ultimate way to model dependence  
[[causal-inference]] — moving from correlation to causation  
[[mutual-information]] — an information-theoretic measure of dependence
---
