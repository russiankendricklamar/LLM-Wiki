---
title: "Statistics of Sharpe Ratios"
category: "Risk"
order: 54
lang: "en"
slug: "sharpe-ratio-statistics"
---
# Statistics of Sharpe Ratios

The **Sharpe Ratio (SR)** is the most ubiquitous measure of risk-adjusted return in finance, yet it is routinely misinterpreted as a precise performance statistic rather than a noisy sample estimate. Understanding its statistical properties — sampling error, distributional corrections for non-normality, and the multiple-testing problem in strategy selection — is essential for separating genuine skill from luck.

## Background

William Sharpe introduced the reward-to-variability ratio in 1966. Lo (2002) derived its asymptotic distribution under IID returns. Mertens (2002) extended this to non-normal returns. Bailey and López de Prado (2012) formalized the Deflated Sharpe Ratio and the Probability of Backtest Overfitting, addressing the inflation of SRs from exhaustive strategy search.

## Mathematical Framework

### Definition

The annualized Sharpe Ratio is:
$$
SR = \frac{\mu - r_f}{\sigma} \cdot \sqrt{T_{annual}}
$$
where $\mu$ is the mean excess return over risk-free rate $r_f$, $\sigma$ is the return standard deviation, and $T_{annual}$ is the number of periods per year (252 for daily, 52 for weekly, 12 for monthly).

The sample estimator from $T$ observations:
$$
\widehat{SR} = \frac{\bar{r} - r_f}{\hat{\sigma}} \cdot \sqrt{T_{annual}}
$$

### Asymptotic Distribution

Under IID returns, $\sqrt{T}(\widehat{SR} - SR)$ is asymptotically normal (Lo 2002):
$$
\sqrt{T}\,(\widehat{SR} - SR) \xrightarrow{d} \mathcal{N}(0, V)
$$

For normally distributed returns, $V = 1 + \frac{1}{2}SR^2$, giving standard error:
$$
SE(\widehat{SR}) \approx \sqrt{\frac{1 + \frac{1}{2}SR^2}{T}}
$$

### Mertens Correction for Non-Normal Returns

When returns have skewness $\gamma_3$ and excess kurtosis $\gamma_4$, the asymptotic variance expands:
$$
SE(\widehat{SR}) = \sqrt{\frac{1}{T}\!\left(1 + \frac{SR^2}{2} - \gamma_3 \cdot SR + \frac{\gamma_4}{4} SR^2\right)}
$$

High positive kurtosis (fat tails) inflates the SE, meaning the same observed SR is less statistically significant for fat-tailed strategies.

### Minimum Track Record Length

Given a desired SR* and significance level $\alpha$, the minimum number of observations required to achieve statistical significance:
$$
T^* = \left\lceil \frac{(z_\alpha \cdot SE_0)^2}{(SR^* - SR_{benchmark})^2} \right\rceil
$$

For $SR^* = 1.0$, $SR_{benchmark} = 0$, $\alpha = 0.05$: $T^* \approx 6.5$ years of monthly data.

### Probabilistic Sharpe Ratio (PSR)

The **PSR** (Bailey & López de Prado 2012) is the probability that the true SR exceeds a benchmark $SR^*$:
$$
\widehat{PSR}(SR^*) = \Phi\!\left(\frac{(\widehat{SR} - SR^*)\sqrt{T-1}}{\sqrt{1 - \gamma_3\widehat{SR} + \frac{\gamma_4 - 1}{4}\widehat{SR}^2}}\right)
$$
A high PSR indicates that the observed SR is unlikely to be a statistical fluke relative to a benchmark.

### Deflated Sharpe Ratio

When $N$ independent strategies are tested, the expected maximum SR grows with $N$. The **Deflated SR** adjusts for this selection bias:
$$
\widehat{DSR} = \Phi\!\left(\frac{(\widehat{SR} - \mathbb{E}[\max SR])\sqrt{T-1}}{\sqrt{1 - \gamma_3\widehat{SR} + \frac{\gamma_4-1}{4}\widehat{SR}^2}}\right)
$$

where the expected maximum SR under the null of no skill is:
$$
\mathbb{E}[\max SR] \approx \sqrt{V} \cdot \left[(1 - \gamma) z^{-1}\!\left(1 - \frac{1}{N}\right) + \gamma z^{-1}\!\left(1 - \frac{1}{Ne}\right)\right]
$$
with $\gamma \approx 0.5772$ (Euler-Mascheroni constant). A $\widehat{DSR} < 0.95$ indicates the strategy is likely a product of data mining.

### Jobson-Korkie Test

To compare two correlated strategies with SRs $\widehat{SR}_1$ and $\widehat{SR}_2$ from the same return history:
$$
z_{JK} = \frac{\widehat{SR}_1 - \widehat{SR}_2}{\sqrt{\hat{\theta}/T}}
$$
$$
\hat{\theta} = 2 - 2\hat{\rho}_{12}\widehat{SR}_1\widehat{SR}_2 + \frac{\widehat{SR}_1^2 + \widehat{SR}_2^2}{2}(1 - \hat{\rho}_{12}^2)
$$
where $\hat{\rho}_{12}$ is the sample correlation between strategy returns.

## Key Properties

- **Estimation error dominates at short horizons**: 1-year of daily returns gives $SE \approx 0.6$ for a true SR of 1.0 — the 95% CI spans $(−0.2, 2.2)$.
- **Serial correlation inflates SR**: Returns with positive autocorrelation $\rho_1$ at lag 1 inflate the observed SR by approximately $\sqrt{1 + 2\rho_1/(1-\rho_1)}$ (Lo 2002 adjustment).
- **Non-normality matters**: Strategies with negative skewness and high kurtosis (e.g., short gamma) appear to have high SRs but carry underestimated tail risk.
- **Multiple testing inflation**: Testing 100 uncorrelated strategies, the expected maximum SR is $\approx 2.5\times$ the true mean SR under the null.

## Python Implementation

```python
import numpy as np
from scipy import stats
from scipy.special import ndtr   # CDF of standard normal

def annualized_sharpe(returns: np.ndarray, freq: int = 252) -> float:
    """Annualized Sharpe Ratio (assumes zero risk-free rate)."""
    mu = returns.mean()
    sigma = returns.std(ddof=1)
    if sigma < 1e-12:
        return 0.0
    return float(mu / sigma * np.sqrt(freq))

def sharpe_se(returns: np.ndarray, sr_annualized: float, freq: int = 252) -> float:
    """
    Mertens (2002) corrected standard error of annualized SR.
    Accounts for skewness and excess kurtosis.
    """
    T = len(returns)
    sr_daily = sr_annualized / np.sqrt(freq)
    skew = float(stats.skew(returns))
    kurt = float(stats.kurtosis(returns, fisher=True))   # excess kurtosis

    V = 1.0 + 0.5 * sr_daily**2 - skew * sr_daily + (kurt / 4.0) * sr_daily**2
    se_daily = np.sqrt(V / T)
    return float(se_daily * np.sqrt(freq))   # annualize

def probabilistic_sharpe_ratio(
    returns: np.ndarray,
    sr_benchmark: float = 0.0,
    freq: int = 252
) -> float:
    """
    Bailey & López de Prado (2012) Probabilistic Sharpe Ratio.
    Returns P(true SR > sr_benchmark).
    """
    T = len(returns)
    sr_hat = annualized_sharpe(returns, freq)
    sr_daily = sr_hat / np.sqrt(freq)
    sr_bench_daily = sr_benchmark / np.sqrt(freq)

    skew = float(stats.skew(returns))
    kurt = float(stats.kurtosis(returns, fisher=True))

    denom = np.sqrt(
        1 - skew * sr_daily + (kurt - 1) / 4.0 * sr_daily**2
    )
    if denom < 1e-12:
        return float(ndtr(0))

    z = (sr_daily - sr_bench_daily) * np.sqrt(T - 1) / denom
    return float(ndtr(z))

def deflated_sharpe_ratio(
    returns: np.ndarray,
    n_trials: int,
    freq: int = 252
) -> float:
    """
    Deflated SR: adjusts PSR for selection bias over n_trials strategies.
    """
    import math
    gamma_em = 0.5772156649   # Euler-Mascheroni constant

    T = len(returns)
    sr_hat = annualized_sharpe(returns, freq)
    se = sharpe_se(returns, sr_hat, freq)

    # Expected max SR under null (no skill), n_trials independent strategies
    e_max = se * (
        (1 - gamma_em) * stats.norm.ppf(1 - 1.0 / n_trials)
        + gamma_em * stats.norm.ppf(1 - 1.0 / (n_trials * math.e))
    )

    skew = float(stats.skew(returns))
    kurt = float(stats.kurtosis(returns, fisher=True))
    sr_daily = sr_hat / np.sqrt(freq)
    e_max_daily = e_max / np.sqrt(freq)

    denom = np.sqrt(
        1 - skew * sr_daily + (kurt - 1) / 4.0 * sr_daily**2
    )
    z = (sr_daily - e_max_daily) * np.sqrt(T - 1) / max(denom, 1e-12)
    return float(ndtr(z))

def jobson_korkie_test(
    returns1: np.ndarray,
    returns2: np.ndarray,
    freq: int = 252
) -> dict:
    """Jobson-Korkie (1981) / Memmel (2003) test for SR equality."""
    T = len(returns1)
    sr1 = annualized_sharpe(returns1, freq)
    sr2 = annualized_sharpe(returns2, freq)

    r12 = float(np.corrcoef(returns1, returns2)[0, 1])
    sr1_d = sr1 / np.sqrt(freq)
    sr2_d = sr2 / np.sqrt(freq)

    theta = (2 - 2 * r12 * sr1_d * sr2_d
             + 0.5 * (sr1_d**2 + sr2_d**2) * (1 - r12**2))
    se_diff = np.sqrt(theta / T) * np.sqrt(freq)
    z = (sr1 - sr2) / max(se_diff, 1e-12)
    p_value = 2 * (1 - ndtr(abs(z)))

    return {"z": z, "p_value": p_value, "sr1": sr1, "sr2": sr2,
            "reject_equal_sr": p_value < 0.05}


# ---- Example ----
np.random.seed(42)
# Strategy 1: SR ≈ 1.0 (annualized)
r1 = np.random.normal(0.0004, 0.01, 756)   # 3 years daily
# Strategy 2: SR ≈ 0.8
r2 = np.random.normal(0.00032, 0.01, 756)

sr1 = annualized_sharpe(r1)
se1 = sharpe_se(r1, sr1)
psr1 = probabilistic_sharpe_ratio(r1, sr_benchmark=0.5)
dsr1 = deflated_sharpe_ratio(r1, n_trials=50)

print(f"SR1: {sr1:.2f} ± {1.96*se1:.2f} (95% CI)")
print(f"PSR (vs SR*=0.5): {psr1:.3f}")
print(f"Deflated SR (50 trials): {dsr1:.3f}")

jk = jobson_korkie_test(r1, r2)
print(f"JK test SR1 vs SR2: z={jk['z']:.2f}, p={jk['p_value']:.3f}, "
      f"reject: {jk['reject_equal_sr']}")
```

## SR Confidence Interval by Track Record Length

```chart
{
  "type": "line",
  "xAxis": "years",
  "data": [
    {"years": "0.5", "ci_width": 2.80},
    {"years": "1",   "ci_width": 1.98},
    {"years": "2",   "ci_width": 1.40},
    {"years": "3",   "ci_width": 1.14},
    {"years": "5",   "ci_width": 0.88},
    {"years": "7",   "ci_width": 0.75},
    {"years": "10",  "ci_width": 0.63}
  ],
  "lines": [
    {"dataKey": "ci_width", "stroke": "#ef4444", "name": "95% CI Width (SR units)"}
  ]
}
```

## Parameter Reference

| Symbol | Name | Description | Typical Range |
| :--- | :--- | :--- | :--- |
| $SR$ | Sharpe Ratio | Annualized risk-adjusted return | 0 – 3.0 |
| $T$ | Sample size | Number of return observations | 252 – 5000 |
| $\gamma_3$ | Skewness | Third standardized moment | $-$2 – $+$2 |
| $\gamma_4$ | Excess kurtosis | Fourth standardized moment minus 3 | 0 – 20 |
| $SE$ | Standard error | Sampling uncertainty of $\widehat{SR}$ | 0.1 – 1.0 |
| $N$ | Trials | Number of strategies tested | 1 – 10000 |
| $PSR$ | Prob. SR | Prob. true SR exceeds benchmark | 0 – 1 |
| $DSR$ | Deflated SR | Selection-bias-adjusted PSR | 0 – 1 |

## Limitations and Extensions

- **IID assumption**: Real returns exhibit autocorrelation and volatility clustering; HAC standard errors (Newey-West) or block bootstrap improve inference.
- **Short samples**: For strategies with weekly/monthly rebalancing, achieving statistical significance requires 5–10 years minimum track record.
- **Non-spherical distributions**: Omega ratio, Sortino ratio, and Calmar ratio capture tail properties ignored by SR; they do not have similarly clean statistical theory.
- **Walk-forward validation**: Cross-validated SR (CSCV method, Bailey & López de Prado 2015) provides an out-of-sample estimate of true performance.
- **Hierarchical testing**: Benjamini-Hochberg FDR correction controls false discovery rate when testing large factor libraries.

## Practical Applications

1. **Strategy evaluation**: PSR and DSR provide objective go/no-go criteria for strategy deployment, accounting for both track record length and strategy search breadth.
2. **Capital allocation**: SR-based Kelly fractions determine optimal leverage; incorporating SE uncertainty prevents over-leveraging noisy estimates.
3. **Performance attribution**: Jobson-Korkie tests determine whether a new model meaningfully outperforms a benchmark after accounting for correlation.
4. **Regulatory reporting**: UCITS and SEC performance disclosures require SR statistics; understanding SE ensures honest interpretation.
5. **Research pipeline**: Deflated SR thresholds integrated into factor research pipelines prevent publication of spurious factors.

## Related Topics
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
- [[value-at-risk]]
