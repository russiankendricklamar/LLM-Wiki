---
slug: "/finance/singular-spectral-analysis"
title: "Сингулярный спектральный анализ (SSA)"
category: "Анализ сигналов"
order: 33
lang: "ru"
---
# Сингулярный спектральный анализ (SSA)

**Сингулярный спектральный анализ (SSA)** — непараметрический метод разложения временного ряда на аддитивные компоненты: тренды, периодические составляющие и шум. В отличие от FFT, SSA адаптивен к данным и не требует фиксированной функциональной формы, что делает его эффективным для нестационарных финансовых рядов.

## Необходимые знания

[[spectral-analysis]], [[wavelet-transform]]

## Математический аппарат

### Шаг 1: Вложение (матрица Ганкеля)

Для ряда $X = (x_1, \dots, x_N)$ и длины окна $L$ строится траекторная матрица $\mathbf{X}$ размера $L \times K$ ($K = N - L + 1$):

$$
\mathbf{X} = \begin{pmatrix}
x_1    & x_2    & \dots  & x_K    \\
x_2    & x_3    & \dots  & x_{K+1}\\
\vdots & \vdots & \ddots & \vdots \\
x_L    & x_{L+1}& \dots  & x_N
\end{pmatrix}
$$

Все антидиагонали $\mathbf{X}$ содержат одинаковые элементы — матрица Ганкелева структуры.

### Шаг 2: Сингулярное разложение

$\mathbf{X} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^T$, откуда элементарные матрицы:

$$
\mathbf{X} = \sum_{i=1}^d \sqrt{\lambda_i}\,\mathbf{U}_i\mathbf{V}_i^T, \quad
d = \text{rank}(\mathbf{X}), \quad
\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_d > 0
$$

Доля дисперсии, объясняемой компонентой $i$: $\lambda_i / \sum_j \lambda_j$.

### Шаг 3: Группировка

Сингулярные числа разбиваются на группы $I = \{i_1, \dots, i_p\}$:

$$
\mathbf{X}_I = \sum_{i \in I} \sqrt{\lambda_i}\,\mathbf{U}_i\mathbf{V}_i^T
$$

Тренд — компоненты с наибольшими $\lambda_i$; периодика — пары с близкими $\lambda$; шум — остаток.

### Шаг 4: Диагональное усреднение

Реконструкция одномерного ряда из $\mathbf{X}_I$ путём усреднения по антидиагоналям:

$$
\tilde{x}_k = \frac{1}{m_k}\sum_{\substack{(i,j): i+j=k+1 \\ 1 \le i \le L,\,1 \le j \le K}} [\mathbf{X}_I]_{ij}
$$

### SSA-LRF: Прогнозирование линейной рекуррентностью

Коэффициенты LRF (Linear Recurrence Formula) из первых $r$ собственных векторов:

$$
a_k = \frac{1}{1 - \nu^2}\sum_{i=1}^r \pi_i\,U_i[L] \cdot \mathbf{U}_i^{(1:L-1)}[k], \quad
\nu^2 = \sum_{i=1}^r U_i[L]^2
$$

### W-корреляция

Мера связанности двух реконструированных компонент $\tilde{X}^{(i)}$ и $\tilde{X}^{(j)}$:

$$
\rho_W^{ij} = \frac{\langle \tilde{X}^{(i)}, \tilde{X}^{(j)}\rangle_W}{\|\tilde{X}^{(i)}\|_W\,\|\tilde{X}^{(j)}\|_W}, \quad
\langle x, y\rangle_W = \sum_{k=1}^N w_k\,x_k\,y_k
$$

где $w_k = \min(k, L, K, N-k+1)$ — веса диагонального усреднения.

## Python-реализация

```python
import numpy as np

def ssa_decompose(series: np.ndarray, L: int) -> dict:
    """
    SSA: вложение, SVD и диагональное усреднение.

    Args:
        series: одномерный временной ряд длины N
        L: длина окна (обычно N/4 до N/2)

    Returns:
        dict с 'eigenvalues', 'eigenvectors', 'components', 'variance_ratios'
    """
    N = len(series)
    K = N - L + 1
    X = np.column_stack([series[i:i+L] for i in range(K)])

    U, s, Vt = np.linalg.svd(X, full_matrices=False)
    d = len(s)
    lambdas = s**2

    components = []
    for i in range(d):
        Xi = s[i] * np.outer(U[:, i], Vt[i, :])
        # Диагональное усреднение
        rec = np.zeros(N)
        cnt = np.zeros(N)
        for row in range(L):
            for col in range(K):
                rec[row + col] += Xi[row, col]
                cnt[row + col] += 1
        components.append(rec / cnt)

    return {
        "eigenvalues":     lambdas,
        "eigenvectors":    U,
        "components":      np.array(components),
        "variance_ratios": lambdas / lambdas.sum()
    }

def ssa_reconstruct(decomp: dict, groups: list[list[int]]) -> np.ndarray:
    """Реконструкция ряда из выбранных групп компонент."""
    return np.array([decomp["components"][idx].sum(axis=0)
                     if isinstance(idx, list)
                     else decomp["components"][g].sum(axis=0)
                     for g in groups])

def ssa_forecast(series: np.ndarray, L: int, r: int,
                 n_ahead: int = 10) -> np.ndarray:
    """
    SSA-LRF прогноз на n_ahead шагов вперёд.

    Args:
        series: исходный ряд
        L: длина окна
        r: число сигнальных компонент
        n_ahead: горизонт прогноза
    """
    decomp = ssa_decompose(series, L)
    U = decomp["eigenvectors"][:, :r]

    # Последняя строка U
    U_last = U[L-1, :]
    nu2 = float(np.sum(U_last**2))
    if nu2 >= 1.0:
        raise ValueError("nu^2 >= 1, уменьшите r")

    coefs = U[:-1, :] @ U_last / (1 - nu2)

    # Рекуррентный прогноз
    rec = series.copy().tolist()
    for _ in range(n_ahead):
        new_val = float(np.dot(coefs, rec[-(L-1):]))
        rec.append(new_val)
    return np.array(rec[len(series):])

def w_correlation_matrix(decomp: dict, n_comp: int) -> np.ndarray:
    """W-корреляционная матрица для оценки разделимости компонент."""
    comps = decomp["components"][:n_comp]
    N, L, K = comps.shape[1], len(decomp["eigenvectors"]), \
               len(comps[0]) - len(decomp["eigenvectors"]) + 1
    weights = np.array([min(k+1, L, K, N-k) for k in range(N)], dtype=float)

    wc = np.zeros((n_comp, n_comp))
    norms = np.array([np.sqrt(np.sum(weights * c**2)) for c in comps])
    for i in range(n_comp):
        for j in range(n_comp):
            wc[i, j] = np.sum(weights * comps[i] * comps[j]) / (norms[i] * norms[j])
    return wc

# ---- Пример ----
np.random.seed(42)
N = 300
t = np.arange(N)
signal = (0.5 * np.sin(2*np.pi*t/12)   # 12-дневный цикл
          + 0.3 * np.sin(2*np.pi*t/40)  # 40-дневный цикл
          + 0.01 * t                     # тренд
          + np.random.normal(0, 0.2, N))

decomp = ssa_decompose(signal, L=60)
print("Доли дисперсии первых 5 компонент:")
for i, vr in enumerate(decomp["variance_ratios"][:5]):
    print(f"  Компонента {i+1}: {vr:.3%}")

forecast = ssa_forecast(signal, L=60, r=6, n_ahead=20)
print(f"\nПрогноз на 20 шагов: {forecast[:5].round(3)}")
```

## Доли дисперсии компонент SSA

```chart
{
  "type": "bar",
  "xAxis": "component",
  "data": [
    {"component": "1 (Тренд)",    "var_pct": 45.2},
    {"component": "2 (Цикл-12)",  "var_pct": 18.7},
    {"component": "3 (Цикл-12)",  "var_pct": 17.9},
    {"component": "4 (Цикл-40)",  "var_pct": 8.3},
    {"component": "5 (Цикл-40)",  "var_pct": 7.1},
    {"component": "6+ (Шум)",     "var_pct": 2.8}
  ],
  "bars": [
    {"dataKey": "var_pct", "fill": "#3b82f6", "name": "Доля дисперсии (%)"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $L$ | Длина окна | Размер траекторной матрицы | $N/4$ – $N/2$ |
| $r$ | Число компонент | Ранг сигнальной части | 2 – 20 |
| $\lambda_i$ | Собственные числа | Вклад компоненты в дисперсию | Зависит от данных |
| $\nu^2$ | Норма последней строки | Условие стабильности LRF | < 1 |
| $\rho_W^{ij}$ | W-корреляция | Мера разделимости компонент | 0 – 1 |

## Ограничения и расширения

- **Выбор $L$:** Слишком малое $L$ не разделяет тренд и цикл; слишком большое — матрица $K$ мала. Оптимально $L \approx N/3$.
- **Разделимость:** Тренд и цикл хорошо разделимы (малая W-корреляция), только если период цикла является делителем $L$.
- **Многомерный MSSA:** Расширение для нескольких рядов совместно; позволяет находить общие цикличности между активами.
- **Онлайн-SSA:** Рекуррентные алгоритмы обновления SVD позволяют вести SSA в режиме реального времени.

## Практические применения

1. **Шумоподавление:** Реконструкция из 2–5 ведущих компонент удаляет микроструктурный шум, сохраняя ценовые скачки.
2. **Выделение циклов:** Идентификация бизнес-циклов (месячные, квартальные, годовые) без проблем утечки спектра FFT.
3. **Прогнозирование RV:** SSA-LRF используется как нелинейный предиктор реализованной волатильности совместно с HAR.
4. **Детектирование разладки:** Мониторинг суммы первых $r$ собственных значений во времени выявляет структурные сдвиги.

## Связанные темы
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[random-matrix-theory]]
- [[principal-component-analysis]]
