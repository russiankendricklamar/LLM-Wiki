---
title: "Статистика коэффициентов Шарпа"
category: "Управление рисками"
order: 54
lang: "ru"
slug: "sharpe-ratio-statistics"
---
# Статистика коэффициентов Шарпа

**Коэффициент Шарпа (SR)** — наиболее распространённая мера доходности с поправкой на риск. Однако он является точечной оценкой, подверженной значительной ошибке выборки. Понимание его статистических свойств критически важно для разграничения мастерства и везения, особенно при множественном тестировании стратегий.

## Математический аппарат

### Асимптотическое распределение

Для IID нормально распределённых доходностей $\sqrt{T}(\widehat{SR} - SR) \xrightarrow{d} \mathcal{N}(0, V)$ с асимптотической дисперсией:

$$
V = 1 + \frac{SR^2}{2}
$$

### Коррекция Мертенса

При ненормальных доходностях (асимметрия $\gamma_3$, эксцесс $\gamma_4$) стандартная ошибка расширяется:

$$
SE(\widehat{SR}) = \sqrt{\frac{1}{T}\!\left(1 + \frac{SR^2}{2} - \gamma_3\,SR + \frac{\gamma_4 - 3}{4}\,SR^2\right)}
$$

Отрицательная асимметрия (жёсткие левые хвосты) завышает видимый SR, так как стандартное отклонение недооценивает риск.

### Минимальная длина трека (Min TRL)

Минимальное число наблюдений для отклонения $H_0: SR = SR^*$ на уровне $\alpha$:

$$
\text{Min TRL} = \left(\frac{z_{1-\alpha} \cdot SE(\widehat{SR})}{\widehat{SR} - SR^*}\right)^2
$$

### Вероятностный коэффициент Шарпа (PSR)

**PSR** — вероятность того, что истинный SR превышает эталон $SR^*$:

$$
\text{PSR}(SR^*) = \Phi\!\left(\frac{(\widehat{SR} - SR^*)\sqrt{T-1}}{\sqrt{1 - \gamma_3\,\widehat{SR} + \frac{\gamma_4-1}{4}\,\widehat{SR}^2}}\right)
$$

### Дефлированный коэффициент Шарпа (DSR)

Поправка на множественное тестирование при $N$ стратегиях (Бейли-Лопес-де-Прадо 2014):

$$
\widehat{SR}^* = \sqrt{V}\!\left[(1-\gamma)\,\Phi^{-1}\!\left(1 - \frac{1}{N}\right) + \gamma\,\Phi^{-1}\!\left(1 - \frac{1}{N}\,e^{-1}\right)\right]
$$

где $\gamma \approx 0{,}5772$ — постоянная Эйлера-Маскерони, $V = 1 + SR^2/2$ при нормальных доходностях.

### Тест Джобсона-Корки

Сравнение двух SR зависимых портфелей (тестовая статистика $z$):

$$
\theta = \frac{1}{T}\!\left(\hat{\sigma}_1^2\hat{\sigma}_2^2 - \hat{\sigma}_{12}^2 + \frac{\hat{\mu}_1^2\hat{\sigma}_2^2}{2} + \frac{\hat{\mu}_2^2\hat{\sigma}_1^2}{2} - \frac{\hat{\mu}_1\hat{\mu}_2\hat{\sigma}_{12}}{\hat{\sigma}_1\hat{\sigma}_2}\right)
$$

$$
z_{JK} = \frac{\widehat{SR}_1 - \widehat{SR}_2}{\sqrt{\hat{\theta}}}, \quad p\text{-значение} = 2\Phi(-|z_{JK}|)
$$

## Python-реализация

```python
import numpy as np
from scipy import stats
from scipy.special import ndtr

def annualized_sharpe(returns: np.ndarray, rf: float = 0.0,
                      periods: int = 252) -> float:
    """Годовой коэффициент Шарпа."""
    excess = returns - rf / periods
    return float(excess.mean() / excess.std(ddof=1) * np.sqrt(periods))

def sharpe_se(returns: np.ndarray, sr_annual: float,
              periods: int = 252) -> float:
    """Стандартная ошибка SR с коррекцией Мертенса."""
    T   = len(returns)
    sr  = sr_annual / np.sqrt(periods)
    sk  = float(stats.skew(returns))
    ku  = float(stats.kurtosis(returns, fisher=False))
    v   = 1 + sr**2 / 2 - sk * sr + (ku - 3) / 4 * sr**2
    return float(np.sqrt(v / T) * np.sqrt(periods))

def probabilistic_sharpe_ratio(returns: np.ndarray, sr_benchmark: float = 0.0,
                                periods: int = 252) -> float:
    """
    Вероятностный SR: P(SR_true > sr_benchmark).
    """
    T   = len(returns)
    sr  = annualized_sharpe(returns, periods=periods)
    sk  = float(stats.skew(returns))
    ku  = float(stats.kurtosis(returns, fisher=False))
    denom = np.sqrt((1 - sk * sr / np.sqrt(periods) +
                     (ku - 1) / 4 * (sr / np.sqrt(periods))**2) / (T - 1))
    z = (sr - sr_benchmark) / (denom * np.sqrt(periods) + 1e-300)
    return float(ndtr(z))

def deflated_sharpe_ratio(returns: np.ndarray, n_trials: int,
                          periods: int = 252) -> dict:
    """
    Дефлированный SR с поправкой на множественное тестирование.

    Returns:
        dict с 'sr', 'sr_star', 'dsr', 'passes_test'
    """
    T  = len(returns)
    sr = annualized_sharpe(returns, periods=periods)
    se = sharpe_se(returns, sr, periods=periods)
    euler_gamma = 0.5772156649
    sr_daily = sr / np.sqrt(periods)
    V = 1 + sr_daily**2 / 2

    sr_star = np.sqrt(V) * (
        (1 - euler_gamma) * stats.norm.ppf(1 - 1 / n_trials) +
        euler_gamma       * stats.norm.ppf(1 - 1 / n_trials / np.e)
    ) * np.sqrt(periods)

    dsr = probabilistic_sharpe_ratio(returns, sr_benchmark=sr_star,
                                     periods=periods)
    return {"sr": sr, "sr_star": sr_star, "dsr": dsr,
            "passes_test": dsr > 0.95}

def jobson_korkie_test(r1: np.ndarray, r2: np.ndarray,
                       periods: int = 252) -> dict:
    """Тест Джобсона-Корки для сравнения двух SR."""
    T = len(r1)
    mu1, mu2 = r1.mean(), r2.mean()
    s1, s2   = r1.std(ddof=1), r2.std(ddof=1)
    s12      = np.cov(r1, r2)[0, 1]

    theta = (1/T) * (s1**2 * s2**2 - s12**2
                     + mu1**2 * s2**2 / 2 + mu2**2 * s1**2 / 2
                     - mu1 * mu2 * s12)
    sr1 = mu1 / s1 * np.sqrt(periods)
    sr2 = mu2 / s2 * np.sqrt(periods)
    z   = (sr1 - sr2) / (np.sqrt(theta / s1**2 / s2**2) * np.sqrt(periods) + 1e-300)
    return {"sr1": sr1, "sr2": sr2, "z": z,
            "p_value": 2 * (1 - ndtr(abs(z)))}

# ---- Пример ----
np.random.seed(42)
r1 = np.random.normal(0.0006, 0.012, 1000)
r2 = np.random.normal(0.0004, 0.010, 1000)

sr   = annualized_sharpe(r1)
se   = sharpe_se(r1, sr)
psr  = probabilistic_sharpe_ratio(r1, sr_benchmark=1.0)
dsr  = deflated_sharpe_ratio(r1, n_trials=50)
jk   = jobson_korkie_test(r1, r2)

print(f"SR: {sr:.2f} ± {1.96*se:.2f} (95% ДИ)")
print(f"PSR(SR*=1.0): {psr:.3f}")
print(f"DSR (50 стратегий): {dsr['dsr']:.3f}, SR*={dsr['sr_star']:.2f}")
print(f"JK-тест: z={jk['z']:.2f}, p={jk['p_value']:.3f}")
```

## Распределение SR при множественном тестировании

```chart
{
  "type": "line",
  "xAxis": "n_trials",
  "data": [
    {"n_trials": "1",   "sr_star": 1.96, "expected_max": 1.96},
    {"n_trials": "10",  "sr_star": 2.58, "expected_max": 2.33},
    {"n_trials": "50",  "sr_star": 3.09, "expected_max": 2.80},
    {"n_trials": "100", "sr_star": 3.29, "expected_max": 3.03},
    {"n_trials": "500", "sr_star": 3.72, "expected_max": 3.52}
  ],
  "lines": [
    {"dataKey": "sr_star",      "stroke": "#ef4444", "name": "SR* (порог DSR)"},
    {"dataKey": "expected_max", "stroke": "#3b82f6", "name": "E[max SR] при H0"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $\widehat{SR}$ | Оценка SR | Точечная оценка по выборке | 0,5 – 3,0 (годовой) |
| $SE(SR)$ | Стандартная ошибка SR | Неопределённость оценки | 0,1 – 0,5 |
| $\text{PSR}$ | Вероятностный SR | $P(SR_{true} > SR^*)$ | 0 – 1 |
| $SR^*$ | Порог DSR | Минимальный SR с учётом $N$ попыток | 1,5 – 4,0 |
| $T$ | Длина выборки | Число наблюдений | 252 – 5040 |

## Ограничения и расширения

- **Автокорреляция:** Для стратегий с серийной корреляцией доходностей (трендовые системы) используется поправка Ло (2002): $SR_{adj} = SR \cdot \sqrt{1 + 2\sum_{k=1}^q \rho_k}$.
- **Нелинейные стратегии:** Опционные стратегии имеют жёсткие левые хвосты; SR сильно завышает качество из-за отрицательной асимметрии. Коэффициент Сортино или Кальмара предпочтительнее.
- **Краткая история:** При $T < 252$ PSR и DSR неустойчивы; MIN TRL помогает оценить необходимую длину трека для статистически значимого вывода.

## Практические применения

1. **Отбор стратегий:** DSR с поправкой на число попыток защищает от выбора случайно удачных стратегий в бэктесте.
2. **Распределение капитала:** PSR используется как вес при kelly-оптимальном распределении между стратегиями.
3. **Рейтинг управляющих:** Тест JK сравнивает SR двух управляющих при зависимости их портфелей.

## Связанные темы
- [[black-scholes]]
- [[mcmc]]
- [[hidden-markov-models]]
- [[probability-of-backtest-overfitting]]
- [[hierarchical-risk-parity]]
