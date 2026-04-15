---
title: "Генератор сценариев «чёрного лебедя»"
category: "Управление рисками"
order: 88
lang: "ru"
---

# Генератор сценариев «чёрного лебедя»

**Генератор сценариев «чёрного лебедя»** — аналитический инструмент для конструирования экстремальных, но правдоподобных рыночных сценариев. Цель — покрыть хвосты распределения, выходящие за пределы стандартного VaR (99%-ный горизонт), и ответить на вопрос: *«Что происходит с портфелем при движениях рынка, которых никогда не было в обучающей выборке?»*

## Теоретическая основа

### Теория экстремальных значений (EVT)

Распределение максимума $M_n = \max(X_1, \ldots, X_n)$ при $n \to \infty$ сходится к **обобщённому распределению экстремальных значений (GEV)**:

$$
G_{\xi, \mu, \sigma}(x) = \exp\!\left[-\left(1 + \xi \cdot \frac{x - \mu}{\sigma}\right)^{-1/\xi}\right]
$$

- $\xi > 0$: распределение Фреше (тяжёлые хвосты, типично для акций)
- $\xi = 0$: распределение Гумбеля (лёгкие хвосты)
- $\xi < 0$: распределение Вейбулла (ограниченный хвост)

**GPD (Generalized Pareto Distribution)** для превышений порога $u$:

$$
H_{\xi, \sigma}(y) = 1 - \left(1 + \frac{\xi y}{\sigma}\right)^{-1/\xi}, \quad y > 0
$$

Оценивается на хвостах (Peaks Over Threshold — POT).

## Три источника сценариев

### 1. EVT-сценарии (статистические)

Экстраполяция хвоста за пределы исторической выборки:

$$
\hat{Q}_{p} = u + \frac{\hat{\sigma}}{\hat{\xi}}\left[\left(\frac{n}{N_u}(1-p)\right)^{-\hat{\xi}} - 1\right]
$$

где $n$ — размер выборки, $N_u$ — число превышений порога $u$, $p$ — уровень квантиля.

### 2. Исторические сценарии

Реплика известных кризисов с масштабированием:
- Крах 1987 (Black Monday): S&P -20.5% за день
- Азиатский кризис 1997
- LTCM 1998
- Доткомы 2000–2002
- GFC 2008–2009
- COVID-19 март 2020

Масштабирование по текущей волатильности:

$$
\text{Scaled return} = r_{\text{hist}} \cdot \frac{\sigma_{\text{current}}}{\sigma_{\text{hist}}}
$$

### 3. Гипотетические сценарии

Конструирование по нарративу (narrative-based):
- «ФРС поднимает ставку на 300 bps за квартал»
- «Дефолт крупного EM-эмитента»
- «Кибератака на платёжную систему»

## Корреляции в кризисных условиях

Стандартная ошибка: использовать обычные корреляции в стрессовых сценариях. В кризис корреляции резко растут.

**Модель корреляций в стрессе (Stressed DCC):**

$$
Q_t = (1-a-b)\bar{Q} + a \varepsilon_{t-1}\varepsilon_{t-1}^\top + b Q_{t-1}
$$

Параметры $a, b$ переоцениваются на кризисных периодах.

**Метод Vines/Copula**: использование T-копулы со степенями свободы $\nu = 3$–$5$ для захвата хвостовых зависимостей.

## Практическая реализация

```python
import numpy as np
import pandas as pd
from scipy.stats import genpareto, genextreme
from scipy.optimize import minimize_scalar
from dataclasses import dataclass
from typing import Optional

@dataclass
class BlackSwanScenario:
    name: str
    returns: np.ndarray          # вектор доходностей по активам
    probability: float           # субъективная вероятность
    correlation_stressed: Optional[np.ndarray] = None


def fit_gpd_tail(returns: np.ndarray,
                 tail: str = 'left',
                 threshold_quantile: float = 0.95) -> dict:
    """
    POT-метод: подгонка GPD на хвосте распределения.

    tail: 'left' (убытки) или 'right' (прибыль)
    """
    r = -returns if tail == 'left' else returns
    u = np.quantile(r, threshold_quantile)
    exceedances = r[r > u] - u

    if len(exceedances) < 10:
        raise ValueError("Недостаточно наблюдений для GPD")

    xi, loc, sigma = genpareto.fit(exceedances, floc=0)
    n = len(r)
    Nu = len(exceedances)

    return {
        'xi': xi, 'sigma': sigma, 'threshold': u,
        'n': n, 'Nu': Nu, 'tail': tail
    }


def evt_quantile(gpd_params: dict, p: float) -> float:
    """
    EVT-оценка квантиля уровня p (p близко к 1).
    """
    xi = gpd_params['xi']
    sigma = gpd_params['sigma']
    u = gpd_params['threshold']
    n = gpd_params['n']
    Nu = gpd_params['Nu']

    if xi == 0:
        return u - sigma * np.log(Nu / (n * (1 - p)))
    return u + sigma / xi * ((n / Nu * (1 - p))**(-xi) - 1)


class BlackSwanGenerator:
    """
    Генератор сценариев чёрного лебедя для мультиактивного портфеля.
    """
    def __init__(self, returns: pd.DataFrame):
        """
        returns: DataFrame (T, n_assets), дневные доходности.
        """
        self.returns = returns
        self.assets = list(returns.columns)
        self.n = len(self.assets)
        self._gpd_params: dict = {}
        self._normal_corr = returns.corr().values

    def fit_tails(self, threshold_q: float = 0.95) -> None:
        """Подгонка GPD для каждого актива."""
        for asset in self.assets:
            r = self.returns[asset].dropna().values
            self._gpd_params[asset] = fit_gpd_tail(r, threshold_q=threshold_q)

    def evt_scenario(self, p: float = 0.999) -> BlackSwanScenario:
        """
        Сценарий: каждый актив принимает значение на уровне квантиля p.
        Корреляции — исторические (оптимистично).
        """
        returns = np.array([
            -evt_quantile(self._gpd_params[a], p)
            for a in self.assets
        ])
        return BlackSwanScenario(
            name=f'EVT p={p:.3f}',
            returns=returns,
            probability=1 - p
        )

    def historical_scenario(self,
                             crisis_returns: dict[str, float],
                             current_vol: dict[str, float],
                             hist_vol: dict[str, float]) -> BlackSwanScenario:
        """
        Масштабированный исторический сценарий.

        crisis_returns: {asset: return_during_crisis}
        current_vol / hist_vol: текущая и историческая волатильности
        """
        scaled = {}
        for asset in self.assets:
            if asset in crisis_returns:
                scale = current_vol.get(asset, 1) / hist_vol.get(asset, 1)
                scaled[asset] = crisis_returns[asset] * scale
            else:
                scaled[asset] = 0.0

        returns = np.array([scaled[a] for a in self.assets])
        return BlackSwanScenario(
            name='Scaled Historical',
            returns=returns,
            probability=0.005
        )

    def stressed_correlation(self,
                              crisis_periods: list[tuple[str, str]]
                             ) -> np.ndarray:
        """
        Оценка корреляций на кризисных периодах.
        """
        crisis_data = []
        for start, end in crisis_periods:
            subset = self.returns.loc[start:end]
            crisis_data.append(subset)
        combined = pd.concat(crisis_data)
        return combined.corr().values

    def portfolio_loss(self,
                       scenario: BlackSwanScenario,
                       weights: np.ndarray) -> float:
        """
        P&L портфеля при сценарии.
        weights: веса активов (сумма = 1)
        """
        return float(np.dot(weights, scenario.returns))

    def generate_all_scenarios(self,
                                weights: np.ndarray) -> pd.DataFrame:
        """Генерирует все сценарии и считает P&L."""
        scenarios = []

        # EVT-сценарии
        for p in [0.999, 0.9999, 0.99999]:
            try:
                sc = self.evt_scenario(p)
                loss = self.portfolio_loss(sc, weights)
                scenarios.append({
                    'scenario': sc.name,
                    'probability': sc.probability,
                    'portfolio_return': loss
                })
            except Exception:
                pass

        return pd.DataFrame(scenarios).sort_values('portfolio_return')
```

## Форматы сценарного отчёта

| Сценарий | P&L (%) | Вероятность | Допущение по корреляциям |
|---------|---------|------------|--------------------------|
| GFC 2008 (масштаб) | -32.1% | ~0.5% в год | Stressed: ρ avg=0.85 |
| COVID-19 (март 2020) | -18.7% | ~1% в год | Stressed: ρ avg=0.79 |
| EVT 99.9% | -22.5% | 0.1% в год | Исторические |
| EVT 99.99% | -41.3% | 0.01% в год | Исторические |
| Нарратив: ФРС +300bps | -15.8% | 2% | Умеренный стресс |

## Практические рекомендации

1. **Не полагайтесь только на VaR**: регуляторный VaR 99% «не видит» 0.1%-хвоста
2. **Кризисные корреляции**: используйте stressed-корреляции, а не исторические средние
3. **Обновляйте EVT-параметры**: каждый квартал с новыми данными
4. **Обратное тестирование**: проверяйте, покрываются ли исторические кризисы вашими сценариями

## Связанные статьи

- [[extreme-value-theory|Теория экстремальных значений]] — GPD и GEV-распределения
- [[value-at-risk|Value at Risk]] — стандартная метрика, которую дополняют сценарии
- [[cornish-fisher-cvar|CVaR и методы Корниша-Фишера]] — аналитические хвостовые метрики
- [[systemic-contagion-debtrank|Системный риск и DebtRank]] — сетевая передача шоков
- [[monte-carlo-method|Метод Монте-Карло]] — симуляция для сценарного анализа
- [[copula-models|Копульные модели]] — моделирование хвостовых зависимостей
