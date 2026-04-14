---
title: "Вероятность переобучения бэктеста"
category: "Алгоритмы и ML"
order: 55
lang: "ru"
---
# Вероятность переобучения бэктеста (PBO)

**Вероятность переобучения бэктеста (Probability of Backtest Overfitting, PBO)** — это статистическая методология для количественной оценки риска того, что результаты стратегии объясняются систематической ошибкой отбора (selection bias), а не реальной альфой. Методология разработана Лопесом де Прадо и Бейли для решения «кризиса воспроизводимости» в количественных финансах.

## История и мотивация

Бейли, Борвейн, Лопес де Прадо и Чжу (2014) ввели CSCV и PBO как формальный инструмент. Лопес де Прадо (2018) обобщил методологию в книге «Advances in Financial Machine Learning», добавив дефлированный коэффициент Шарпа (DSR). Проблема приобретает особую остроту при машинном поиске стратегий: перебор миллиона вариаций гарантированно найдёт «прибыльную» случайную стратегию.

## Ошибка отбора при множественном тестировании

При тестировании $N$ независимых стратегий ожидаемый максимальный коэффициент Шарпа:

$$
\mathbb{E}\!\left[\max_{n=1..N} \hat{SR}_n\right] \approx (1 - \gamma_E)\Phi^{-1}\!\left(1 - \frac{1}{N}\right) + \gamma_E \Phi^{-1}\!\left(1 - \frac{1}{Ne}\right)
$$

где $\gamma_E \approx 0.5772$ — постоянная Эйлера, $\Phi^{-1}$ — обратная функция нормального распределения.

## Дефлированный коэффициент Шарпа (DSR)

DSR корректирует наблюдаемый коэффициент Шарпа $\hat{SR}$ с учётом числа испытанных стратегий $N$, длины ряда $T$ и некоторых статистических свойств:

$$
DSR = \hat{PSR}(\hat{SR}^*) = \Phi\!\left(\frac{(\hat{SR} - \hat{SR}^*)\sqrt{T-1}}{\sqrt{1 - \hat{\gamma}_3\hat{SR} + \frac{\hat{\gamma}_4 - 1}{4}\hat{SR}^2}}\right)
$$

где $\hat{SR}^* = \mathbb{E}[\max_{n} \hat{SR}_n]$ — ожидаемый максимальный Шарп при нулевой альфе, $\hat{\gamma}_3$ — коэффициент асимметрии, $\hat{\gamma}_4$ — эксцесс.

## Комбинаторно-симметричная кросс-валидация (CSCV)

1. Разбить $T$ наблюдений на $S$ равных блоков.
2. Сформировать все $\binom{S}{S/2}$ разбиений на тренировочное (IS) и тестовое (OOS) множества.
3. Для каждого разбиения $c$: найти $n^* = \arg\max_n SR_{n,IS}^{(c)}$.
4. Вычислить относительный ранг $n^*$ на OOS: $\omega_c = \text{rank}(SR_{n^*,OOS}^{(c)}) / (N+1)$.
5. $PBO = C^{-1}\sum_c \mathbf{1}[\omega_c < 0.5]$.

## Python: DSR и полный расчёт PBO

```python
import numpy as np
import pandas as pd
from itertools import combinations
from scipy.stats import norm


def deflated_sharpe_ratio(sharpe: float, n_trials: int, T: int,
                           skew: float = 0.0, kurt: float = 3.0) -> float:
    """
    Вычисляет дефлированный коэффициент Шарпа (DSR).
    sharpe  : наблюдаемый annualized SR
    n_trials: число опробованных стратегий
    T       : длина ряда (периоды)
    Возвращает вероятность того, что SR > ожидаемого максимума при нулевой альфе.
    """
    gamma_e = 0.5772156649
    # Ожидаемый максимальный SR при нулевой альфе (формула Бейли-Прадо)
    sr_star = (1 - gamma_e) * norm.ppf(1 - 1.0 / n_trials) + \
              gamma_e * norm.ppf(1 - 1.0 / (n_trials * np.e))

    # Знаменатель (поправка на некоторые статистические свойства распределения)
    denom = np.sqrt((1 - skew * sharpe + (kurt - 1) / 4 * sharpe ** 2) / (T - 1))
    if denom <= 0:
        return 0.0
    return float(norm.cdf((sharpe - sr_star) / denom))


def calculate_pbo(returns: pd.DataFrame, S: int = 16) -> dict:
    """
    Вычисляет PBO с помощью CSCV.
    returns: DataFrame (T x N) — доходности N вариаций стратегии
    S: число блоков (чётное)
    """
    T, N = returns.shape
    block_size = T // S
    blocks = [returns.iloc[i * block_size:(i + 1) * block_size] for i in range(S)]

    combos = list(combinations(range(S), S // 2))
    oos_ranks = []
    logit_vals = []

    for train_idx in combos:
        test_idx = [i for i in range(S) if i not in train_idx]

        is_set = pd.concat([blocks[i] for i in train_idx])
        oos_set = pd.concat([blocks[i] for i in test_idx])

        is_sharpe = is_set.mean() / (is_set.std() + 1e-12)
        oos_sharpe = oos_set.mean() / (oos_set.std() + 1e-12)

        best_n = is_sharpe.idxmax()
        omega = float(oos_sharpe.rank(pct=True)[best_n])
        oos_ranks.append(omega)

        # Логит для оценки PBO по непрерывному распределению
        omega_clipped = np.clip(omega, 1e-6, 1 - 1e-6)
        logit_vals.append(np.log(omega_clipped / (1 - omega_clipped)))

    pbo = float(np.mean(np.array(oos_ranks) < 0.5))
    return {"pbo": pbo, "oos_ranks": oos_ranks, "mean_logit": float(np.mean(logit_vals))}


# Пример: N=50 стратегий, T=1000 наблюдений
np.random.seed(42)
rets = pd.DataFrame(np.random.normal(0, 0.01, (1000, 50)),
                    columns=[f"s{i}" for i in range(50)])

result = calculate_pbo(rets, S=8)
print(f"PBO:               {result['pbo']:.2%}")
print(f"Средний logit ω:   {result['mean_logit']:.4f}  (< 0 → переобучение)")

# DSR для лучшей in-sample стратегии
best_sr = float((rets.mean() / rets.std()).max() * np.sqrt(252))
dsr = deflated_sharpe_ratio(best_sr, n_trials=50, T=1000)
print(f"\nЛучший IS Sharpe:  {best_sr:.4f}")
print(f"DSR (p-value):     {dsr:.4f}")
print(f"Интерпретация: {'значимый сигнал' if dsr > 0.95 else 'вероятно переобучение'}")
```

## Таблица параметров

| Параметр | Описание | Типичное значение |
|:---|:---|:---|
| $S$ | Число блоков CSCV | 8–16 |
| $N$ | Число испытанных стратегий | >10 — проблема |
| DSR порог | Уровень значимости | 0.95 |
| $\hat{SR}^*$ | Ожидаемый максимальный Шарп | Растёт с $\ln N$ |
| Длина ряда $T$ | Число наблюдений | >252 рекомендуется |

## «Тихий убийца» квант-фондов

Переобучение бэктеста называют **«тихим убийцей»**, потому что оно не проявляется в стандартных отчётах. Фонд может представить бэктест с SR=3.0, но если результат выбран из 1 000 000 итераций, DSR может быть близок к 0.5 или отрицательным. Именно этот разрыв между «бумажной» и реальной доходностью часто приводит к краху систематических фирм.

## Ограничения и расширения

- **Зависимость наблюдений**: CSCV предполагает независимость блоков; автокоррелированные ряды нарушают это допущение.
- **Нестационарность**: Режимы рынка меняются; IS-блок может не отражать будущие условия.
- **Haircut Sharpe**: более простая эвристика — применить дисконт $\sqrt{1/N}$ к SR.
- **Неулучшение**: Обнаружение высокого PBO указывает не только на переобучение, но и на недостаточность данных или чрезмерную сложность модели.

## Связанные темы
- [[meta-labeling]]
- [[monte-carlo-method]]
- [[value-at-risk]]
- [[model-free-rl-factors]]
- [[hierarchical-risk-parity]]
