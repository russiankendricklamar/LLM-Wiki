---
title: "Модели GARCH"
category: "Стохастические процессы"
order: 11
lang: "ru"
slug: "garch-models"
---
# Модели GARCH

**Обобщённая авторегрессионная модель с условной гетероскедастичностью (GARCH)**, предложенная Тимом Болерслевом в 1986 году как расширение ARCH Роберта Энгла (1982), является основным инструментом прогнозирования волатильности в количественных финансах. Модель захватывает ключевой эмпирический факт: волатильность доходностей активов кластеризуется — крупные движения следуют за крупными, а спокойные периоды — за спокойными.

## Необходимые знания

[[arch-models]]

## История

Роберт Энгл ввёл ARCH в 1982 году для моделирования изменяющейся во времени волатильности британской инфляции, за что получил Нобелевскую премию по экономике в 2003 году. Модель ARCH($q$) выражает текущую дисперсию как взвешенную сумму прошлых квадратов остатков. Болерслев (1986) обобщил её, добавив лаговые условные дисперсии, что дало более экономную модель GARCH($p, q$).

## Основа ARCH

Модель ARCH($q$):

$$
\epsilon_t = \sigma_t z_t, \quad z_t \sim \mathcal{N}(0,1)
$$
$$
\sigma_t^2 = \omega + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2
$$

ARCH требует большого $q$ для хорошей подгонки. GARCH(1,1) достигает той же экономности при $p = q = 1$.

## Определение GARCH(p, q)

Модель $\text{GARCH}(p, q)$:

$$
\sigma_t^2 = \omega + \sum_{i=1}^q \alpha_i \epsilon_{t-i}^2 + \sum_{j=1}^p \beta_j \sigma_{t-j}^2
$$

Ограничения для неотрицательности и стационарности:
- $\omega > 0$, $\alpha_i \geq 0$, $\beta_j \geq 0$
- **Ковариационная стационарность**: $\sum_{i=1}^q \alpha_i + \sum_{j=1}^p \beta_j < 1$

Наиболее распространённая спецификация — GARCH(1,1):

$$
\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2
$$

## Персистентность и возврат к среднему

**Персистентность** шоков волатильности измеряется суммой $\alpha + \beta$. Для рынков акций типичные оценки: $\alpha \approx 0.09$, $\beta \approx 0.90$, персистентность $\approx 0.99$.

При $\alpha + \beta < 1$ безусловная (долгосрочная) дисперсия:

$$
\bar{\sigma}^2 = \frac{\omega}{1 - \alpha - \beta}
$$

**Период полураспада** шока волатильности:

$$
t_{1/2} = -\frac{\ln 2}{\ln(\alpha + \beta)}
$$

При $\alpha + \beta = 0.99$ получаем $t_{1/2} \approx 69$ торговых дней.

## Асимметричные расширения

Стандартный GARCH симметрично реагирует на положительные и отрицательные шоки. Эмпирически отрицательные доходности увеличивают волатильность сильнее (**эффект рычага**). Два основных асимметричных варианта:

**GJR-GARCH (Glosten-Jagannathan-Runkle, 1993)**:

$$
\sigma_t^2 = \omega + \alpha \epsilon_{t-1}^2 + \gamma \epsilon_{t-1}^2 \mathbf{1}[\epsilon_{t-1} < 0] + \beta \sigma_{t-1}^2
$$

где $\gamma > 0$ — дополнительное влияние отрицательных шоков.

**EGARCH (Nelson, 1991)**:

$$
\ln \sigma_t^2 = \omega + \alpha \left(\frac{|\epsilon_{t-1}|}{\sigma_{t-1}} - \sqrt{2/\pi}\right) + \gamma \frac{\epsilon_{t-1}}{\sigma_{t-1}} + \beta \ln \sigma_{t-1}^2
$$

EGARCH моделирует логарифм дисперсии, гарантируя положительность без ограничений на параметры. Член $\gamma$ захватывает знаковую асимметрию.

## Таргетирование дисперсии

**Variance targeting** заменяет $\omega$ на $\bar{\sigma}^2(1 - \alpha - \beta)$, где $\bar{\sigma}^2$ — выборочная дисперсия. Это фиксирует долгосрочную дисперсию на историческом уровне и уменьшает пространство параметров на единицу, улучшая численную устойчивость:

$$
\sigma_t^2 = \bar{\sigma}^2(1-\alpha-\beta) + \alpha \epsilon_{t-1}^2 + \beta \sigma_{t-1}^2
$$

## Оценка методом максимального правдоподобия

Параметры $\theta = (\omega, \alpha, \beta)$ оцениваются максимизацией логарифма правдоподобия при гауссовых инновациях:

$$
\ell(\theta) = -\frac{T}{2}\ln(2\pi) - \frac{1}{2}\sum_{t=1}^T \left[\ln \sigma_t^2(\theta) + \frac{\epsilon_t^2}{\sigma_t^2(\theta)}\right]
$$

Для тяжёлохвостых инноваций предпочтительно правдоподобие распределения Стьюдента:

$$
\ell_t(\theta, \nu) = \ln\Gamma\!\left(\frac{\nu+1}{2}\right) - \ln\Gamma\!\left(\frac{\nu}{2}\right) - \frac{1}{2}\ln(\pi(\nu-2)\sigma_t^2) - \frac{\nu+1}{2}\ln\!\left(1+\frac{\epsilon_t^2}{(\nu-2)\sigma_t^2}\right)
$$

## Выбор модели: AIC и BIC

Для сравнения спецификаций GARCH:

$$
\text{AIC} = -2\ell(\hat\theta) + 2k, \qquad \text{BIC} = -2\ell(\hat\theta) + k\ln T
$$

где $k$ — число параметров. Меньшее значение лучше. BIC сильнее штрафует сложность и обычно отдаёт предпочтение GARCH(1,1).

## Python: Оценка и прогнозирование

```python
import numpy as np
import pandas as pd
from arch import arch_model

def fit_and_forecast_garch(
    returns: pd.Series,
    p: int = 1,
    q: int = 1,
    dist: str = "t",
    horizon: int = 10,
    model_type: str = "Garch",
):
    """
    Подгонка GARCH(p,q) и многошаговый прогноз дисперсии.
    """
    model = arch_model(
        returns * 100,
        vol=model_type,
        p=p,
        q=q,
        dist=dist,
        rescale=False,
    )
    result = model.fit(disp="off", options={"maxiter": 500})

    forecast = result.forecast(horizon=horizon, reindex=False)
    var_forecast = forecast.variance.values[-1] / 1e4

    params = result.params
    persistence = params.get("alpha[1]", 0) + params.get("beta[1]", 0)
    long_run_vol = np.sqrt(252 * params["omega"] / (1 - persistence)) \
        if persistence < 1 else np.nan

    return {
        "params": params.to_dict(),
        "persistence": persistence,
        "long_run_annualised_vol": long_run_vol,
        "aic": result.aic,
        "bic": result.bic,
        "variance_forecast": var_forecast,
        "conditional_vol": result.conditional_volatility / 100,
    }

# Пример: подгонка GARCH(1,1) на симулированных доходностях
np.random.seed(0)
returns_sim = pd.Series(np.random.normal(0, 0.01, 1000), name="returns")
out = fit_and_forecast_garch(returns_sim, p=1, q=1)
print(f"Персистентность:        {out['persistence']:.4f}")
print(f"Долгосрочная год. вол.: {out['long_run_annualised_vol']:.4f}")
print(f"AIC / BIC:              {out['aic']:.1f} / {out['bic']:.1f}")
```

## Динамика условной волатильности

```chart
{
  "type": "line",
  "xAxis": "day",
  "data": [
    {"day": "1",  "vol": 0.012},
    {"day": "10", "vol": 0.011},
    {"day": "20", "vol": 0.018},
    {"day": "30", "vol": 0.025},
    {"day": "40", "vol": 0.032},
    {"day": "50", "vol": 0.028},
    {"day": "60", "vol": 0.022},
    {"day": "70", "vol": 0.017},
    {"day": "80", "vol": 0.014},
    {"day": "90", "vol": 0.013}
  ],
  "lines": [
    {"dataKey": "vol", "stroke": "#ef4444", "name": "Условная волатильность GARCH(1,1)"}
  ]
}
```

## Таблица параметров

| Символ | Название | Описание | Типичное значение |
|--------|----------|----------|-------------------|
| $\omega$ | Константа | Вклад в долгосрочную дисперсию | $>0$, малое |
| $\alpha$ | Коэффициент ARCH | Вес квадрата лаговых остатков | 0.05–0.15 |
| $\beta$ | Коэффициент GARCH | Вес лаговой дисперсии | 0.80–0.95 |
| $\gamma$ | Асимметрия (GJR) | Доп. влияние отрицательных шоков | 0.05–0.15 |
| $\nu$ | Степени свободы | Параметр хвоста Student-$t$ | 4–10 |
| $\alpha + \beta$ | Персистентность | Скорость возврата к среднему | <1 для стационарности |

## Ограничения и расширения

- **Симметричный отклик**: базовый GARCH не захватывает эффект рычага; нужны GJR-GARCH или EGARCH.
- **Одномерность**: многомерные расширения (DCC-GARCH, BEKK) моделируют изменяющиеся корреляции.
- **Гауссовы инновации**: тяжёлые хвосты лучше захватываются инновациями Student-$t$ или скошенного $t$.
- **IGARCH**: при $\alpha + \beta = 1$ процесс интегрирован по дисперсии; шоки перманентны, безусловная дисперсия бесконечна.
- **Realized GARCH**: включает реализованную волатильность из внутридневных данных как вспомогательное уравнение, улучшая дневной прогноз.

## Практическое применение

1. **VaR и ES**: GARCH-фильтрованный VaR — стандарт внутренних моделей рыночного риска (Базель III/IV).
2. **Оценка опционов**: модель ценообразования опционов GARCH (Duan 1995) согласована с дискретной GARCH-динамикой под риск-нейтральной мерой.
3. **Риск портфеля**: DCC-GARCH обеспечивает матрицы корреляций для динамической ребалансировки и стратегий risk parity.
4. **Торговля волатильностью**: прогнозы GARCH информируют позиционирование в variance swap, фьючерсах на VIX и стрэддлах.

## Связанные темы
- [[volatility-forecasting]]
- [[arch-models]]
- [[black-scholes]]
- [[mcmc]]
- [[extreme-value-theory]]
- [[heston-model]]
