---
title: "Covariance, Correlation, and Independence"
category: "Math Foundations"
order: 25
lang: "en"
slug: "covariance-correlation"
---

# Covariance, Correlation, and Independence

These concepts quantify the relationship between random variables. While they are related, they capture different aspects of dependency.

## 1. Covariance

**Covariance** measures the direction of the linear relationship between two variables.
$$ \text{Cov}(X, Y) = \mathbb{E}[(X - \mathbb{E}[X])(Y - \mathbb{E}[Y])] = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] $$

- **Positive Covariance**: $X$ and $Y$ tend to increase together.
- **Negative Covariance**: One increases as the other decreases.
- **Units**: The units of $\text{Cov}(X, Y)$ are the product of the units of $X$ and $Y$, making it hard to interpret the magnitude.

## 2. Pearson Correlation Coefficient

Correlation is a normalized version of covariance that is dimensionless and bounded.
$$ \rho_{X,Y} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y} $$

### 2.1 Properties
- $-1 \leq \rho_{X,Y} \leq 1$.
- $|\rho| = 1$ implies a perfect linear relationship.
- $\rho = 0$ implies no **linear** relationship.

## 3. Pearson vs. Spearman Correlation

- **Pearson**: Measures **linear** relationship. Sensitive to outliers.
- **Spearman ($\rho_s$)**: Measures **monotonic** relationship. It is the Pearson correlation applied to the **ranks** of the data.
  - Robust to outliers.
  - Can capture non-linear relationships as long as they are monotonic.

## 4. Independence vs. Zero Correlation

A common pitfall is assuming that zero correlation implies independence.
- **Independence $\implies$ Zero Correlation**: If $X$ and $Y$ are independent, $\text{Cov}(X, Y) = 0$.
- **Zero Correlation $\not\implies$ Independence**: Two variables can have zero correlation but be highly dependent through a non-linear relationship.

**Example**: Let $X \sim \mathcal{N}(0, 1)$ and $Y = X^2$.
$\mathbb{E}[X] = 0$, $\mathbb{E}[XY] = \mathbb{E}[X^3] = 0$.
$\text{Cov}(X, Y) = \mathbb{E}[XY] - \mathbb{E}[X]\mathbb{E}[Y] = 0 - 0 = 0$.
The correlation is zero, but $Y$ is perfectly determined by $X$.

## 5. Independence

$X$ and $Y$ are independent if $P(X \in A, Y \in B) = P(X \in A)P(Y \in B)$ for all sets $A, B$.
This is a much stronger condition than zero correlation, as it requires all moments and non-linear transformations to be uncorrelated.

## Related Topics

[[joint-distributions]] — the context for covariance  
[[linear-regression-ols]] — where correlation determines fit  
[[mutual-information]] — a more general measure of dependence
---
