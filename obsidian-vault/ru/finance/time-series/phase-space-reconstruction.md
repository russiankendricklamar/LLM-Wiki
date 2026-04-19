---
slug: "/finance/phase-space-reconstruction"
title: "Реконструкция фазового пространства"
category: "Анализ сигналов"
order: 34
lang: "ru"
---
# Реконструкция фазового пространства

**Реконструкция фазового пространства** — это метод анализа нелинейных динамических систем, позволяющий восстановить многомерный портрет системы по одному наблюдаемому временному ряду. В финансах применяется для обнаружения детерминированного хаоса, оценки предсказуемости и построения краткосрочных прогнозов.

## Необходимые знания

[[spectral-analysis]], [[hurst-exponent]]

## История и мотивация

Теоретическую основу метода заложила **теорема Такенса** (1981): при выполнении общих условий гладкости реконструированный аттрактор топологически эквивалентен исходному. Применение к финансовым рядам было исследовано Броком, Хичером и Сайерсом (1991), а также Хинихом и Паттерсоном (1995). Несмотря на высокую шумовую нагрузку финансовых данных, метод находит применение в идентификации нелинейности и оценке ёмкости прогнозирования.

## Теорема Такенса и метод задержек

Вектор состояния в момент $t$ строится как:

$$
\mathbf{y}_t = \bigl[x(t),\; x(t-\tau),\; x(t-2\tau),\; \ldots,\; x(t-(m-1)\tau)\bigr]
$$

где $\tau$ — временная задержка, $m$ — размерность вложения. При $m \geq 2d_A + 1$ (теорема Такенса) вложение гарантированно развёртывает аттрактор размерности $d_A$.

## Выбор параметров

### Оптимальная задержка $\tau$ — взаимная информация

$$
I(\tau) = \sum_{x,y} p(x_t, x_{t+\tau}) \ln \frac{p(x_t, x_{t+\tau})}{p(x_t)\,p(x_{t+\tau})}
$$

Оптимальный $\tau$ — первый локальный минимум $I(\tau)$, где компоненты наиболее независимы.

### Оптимальная размерность $m$ — ложные ближайшие соседи (FNN)

Точка $\mathbf{y}_t^{(m)}$ является «ложным соседом» в размерности $m$, если при переходе в $m+1$ расстояние до ближайшего соседа резко возрастает:

$$
\text{FNN}(m) = \frac{\|x(t+(m)\tau) - x(r+(m)\tau)\|}{\|\mathbf{y}_t^{(m)} - \mathbf{y}_r^{(m)}\|} > R_{\text{tol}}
$$

Оптимальное $m$ — то, при котором доля FNN стремится к нулю.

## Python: Взаимная информация и FNN

```python
import numpy as np
from scipy.spatial import cKDTree


def mutual_information(series: np.ndarray, tau: int, n_bins: int = 20) -> float:
    """Оценка взаимной информации между x(t) и x(t+tau)."""
    x = series[:-tau]
    y = series[tau:]
    bins = np.linspace(min(x.min(), y.min()), max(x.max(), y.max()), n_bins + 1)
    pxy, _, _ = np.histogram2d(x, y, bins=[bins, bins], density=True)
    px = pxy.sum(axis=1)
    py = pxy.sum(axis=0)
    mi = 0.0
    for i in range(n_bins):
        for j in range(n_bins):
            if pxy[i, j] > 0 and px[i] > 0 and py[j] > 0:
                mi += pxy[i, j] * np.log(pxy[i, j] / (px[i] * py[j]))
    db = (bins[1] - bins[0]) ** 2
    return float(mi * db)


def false_nearest_neighbors(series: np.ndarray, tau: int, max_dim: int = 8,
                             r_tol: float = 10.0) -> np.ndarray:
    """Доля ложных ближайших соседей для размерностей 1..max_dim."""
    fnn_ratios = []
    for m in range(1, max_dim + 1):
        # Матрица вложения
        n = len(series) - m * tau
        emb = np.column_stack([series[i * tau:i * tau + n] for i in range(m)])
        emb_ext = np.column_stack([series[i * tau:i * tau + n] for i in range(m + 1)])

        tree = cKDTree(emb)
        dists, indices = tree.query(emb, k=2)
        dist_m = dists[:, 1]
        nn_idx = indices[:, 1]

        dist_m1 = np.abs(emb_ext[:, m] - emb_ext[nn_idx, m])
        total_dist = np.sqrt(dist_m ** 2 + dist_m1 ** 2)

        fnn_mask = (dist_m > 1e-10) & (total_dist / (dist_m + 1e-10) > r_tol)
        fnn_ratios.append(float(np.mean(fnn_mask)))

    return np.array(fnn_ratios)


# Демонстрация: система Лоренца (хаотическая)
def lorenz(x, y, z, s=10, r=28, b=2.667, dt=0.01):
    return (x + dt * s * (y - x),
            y + dt * (r * x - y - x * z),
            z + dt * (x * y - b * z))

x, y, z = 0.1, 0.0, 0.0
ts = []
for _ in range(5000):
    x, y, z = lorenz(x, y, z)
    ts.append(x)
series = np.array(ts)

# Выбор tau
mi_vals = [mutual_information(series, tau) for tau in range(1, 30)]
tau_opt = int(np.argmin(mi_vals[:15]) + 1)
print(f"Оптимальная задержка tau = {tau_opt}")

# Выбор m
fnn = false_nearest_neighbors(series, tau_opt, max_dim=7)
for m, f in enumerate(fnn, 1):
    print(f"  m={m}: FNN = {f:.3f}")
```

## Таблица параметров

| Параметр | Описание | Метод выбора |
|:---|:---|:---|
| $\tau$ | Временная задержка | Первый минимум взаимной информации |
| $m$ | Размерность вложения | Метод FNN |
| $R_{\text{tol}}$ | Порог FNN | 10–15 (стандарт) |
| $n_{\text{bins}}$ | Число бинов для MI | 10–30 |

## Приложения в финансах

- **Обнаружение нелинейности**: Тест BDS (Брок–Деченерт–Шейнкман) использует реконструированное пространство для проверки гипотезы iid.
- **Корреляционная размерность**: низкая $d_c$ указывает на детерминированную динамику; при хаосе $d_c$ — дробная.
- **Показатели Ляпунова**: положительный наибольший показатель означает экспоненциальное расхождение траекторий (хаос).
- **Нелинейный прогноз**: поиск аналогов в фазовом пространстве позволяет делать краткосрочные прогнозы даже для хаотических рядов.

## Ограничения

- **Чувствительность к шуму**: сильный рыночный шум может полностью «размыть» структуру аттрактора.
- **Объём данных**: для высоких размерностей вложения требуются очень длинные ряды ($n > 10^{(d_c+2)/2}$).
- **Нестационарность**: финансовые ряды нестационарны; параметры $\tau$, $m$ меняются со временем.

## Связанные темы
- [[hidden-markov-models]]
- [[hurst-exponent]]
- [[lempel-ziv-complexity]]
- [[monte-carlo-method]]
- [[particle-filter]]
