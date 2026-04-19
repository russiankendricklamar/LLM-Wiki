---
slug: "/finance/prony-hankel-spectral"
title: "Метод Прони и матрица Ганкеля в спектральном анализе"
category: "Анализ сигналов"
order: 83
lang: "ru"
---

# Метод Прони и матрица Ганкеля в спектральном анализе

**Метод Прони (Prony's method)** — классическая техника разложения временного ряда в сумму комплексных экспонент. В финансах он используется для выявления скрытых периодических режимов в ценовых данных и нелинейного спектрального анализа, дополняя FFT-подход там, где данных мало или частоты меняются во времени.

## Проблема: когда DFT недостаточен

[[fourier-transform|Преобразование Фурье]] предполагает **стационарность** и требует много данных для высокого частотного разрешения. Метод Прони:
- Работает на коротких окнах (10–100 точек)
- Не накладывает ограничений на расположение частот
- Позволяет частотам быть **нецелыми** кратными основной частоты

## Математическая постановка

Дан сигнал $\{x_0, x_1, \ldots, x_{N-1}\}$. Ищем приближение:

$$
x_n \approx \sum_{k=1}^{p} c_k z_k^n
$$

где $z_k = e^{(\alpha_k + i 2\pi f_k) \Delta t}$ — комплексные частоты (полюса), $c_k \in \mathbb{C}$ — амплитуды, $\alpha_k$ — коэффициенты затухания.

## Алгоритм Прони

### Шаг 1: Линейное предсказание

Коэффициенты $a_1, \ldots, a_p$ линейного предсказывающего фильтра порядка $p$:

$$
x_n = -\sum_{j=1}^{p} a_j x_{n-j}, \quad n = p, p+1, \ldots
$$

В матричной форме (система Ганкеля):

$$
\underbrace{\begin{pmatrix} x_p & x_{p-1} & \cdots & x_1 \\ x_{p+1} & x_p & \cdots & x_2 \\ \vdots & & \ddots & \vdots \\ x_{N-1} & x_{N-2} & \cdots & x_{N-p} \end{pmatrix}}_{\mathbf{H} \in \mathbb{R}^{(N-p) \times p}} \mathbf{a} = -\begin{pmatrix} x_{p+1} \\ x_{p+2} \\ \vdots \\ x_N \end{pmatrix}
$$

Решение в МНК: $\mathbf{a} = -(\mathbf{H}^\top \mathbf{H})^{-1} \mathbf{H}^\top \mathbf{b}$.

### Шаг 2: Нахождение полюсов

Характеристический полином:

$$
P(z) = z^p + a_1 z^{p-1} + \cdots + a_p = \prod_{k=1}^{p}(z - z_k)
$$

Корни $z_k$ дают частоты $f_k = \text{Im}(\ln z_k) / (2\pi \Delta t)$ и затухание $\alpha_k = \text{Re}(\ln z_k) / \Delta t$.

### Шаг 3: Нахождение амплитуд

Система Вандермонда:

$$
\begin{pmatrix} 1 & 1 & \cdots & 1 \\ z_1 & z_2 & \cdots & z_p \\ \vdots & & \ddots & \vdots \\ z_1^{N-1} & z_2^{N-1} & \cdots & z_p^{N-1} \end{pmatrix} \mathbf{c} = \mathbf{x}
$$

Решается в МНК.

## Матрица Ганкеля и SVD-фильтрация

**Матрица Ганкеля** сигнала длиной $N$ и параметром $L$:

$$
\mathbf{H} = \begin{pmatrix} x_0 & x_1 & \cdots & x_{K} \\ x_1 & x_2 & \cdots & x_{K+1} \\ \vdots & & \ddots & \vdots \\ x_{L-1} & x_L & \cdots & x_{N-1} \end{pmatrix}
$$

где $K = N - L$. Ранг $\mathbf{H}$ равен числу экспонент $p$ в чистом сигнале. SVD матрицы Ганкеля:

$$
\mathbf{H} = \mathbf{U} \boldsymbol{\Sigma} \mathbf{V}^\top = \sum_{i=1}^{r} \sigma_i \mathbf{u}_i \mathbf{v}_i^\top
$$

**Шумовая фильтрация**: обнуление малых сингулярных значений (аналог [[singular-spectral-analysis|SSA]]):

$$
\hat{\mathbf{H}} = \sum_{i=1}^{p} \sigma_i \mathbf{u}_i \mathbf{v}_i^\top
$$

После усреднения антидиагоналей $\hat{\mathbf{H}}$ (операция «антидиагонализации») получаем очищенный сигнал.

## Реализация

```python
import numpy as np
from numpy.polynomial import polynomial as P

def hankel_matrix(x: np.ndarray, L: int) -> np.ndarray:
    """Матрица Ганкеля сигнала x с параметром L."""
    N = len(x)
    K = N - L + 1
    H = np.zeros((L, K))
    for i in range(L):
        H[i] = x[i:i+K]
    return H


def prony(x: np.ndarray, p: int) -> dict:
    """
    Метод Прони: разложение сигнала в p экспонент.

    Параметры:
        x: действительный или комплексный сигнал
        p: порядок разложения

    Возвращает:
        {'frequencies': ndarray, 'damping': ndarray,
         'amplitudes': ndarray, 'poles': ndarray}
    """
    N = len(x)

    # Шаг 1: Матрица Ганкеля и LS
    H = hankel_matrix(x[:-1], p)[:, :N-p]
    # Правая часть
    b = x[p:]
    # МНК: a = (H^T H)^{-1} H^T b
    a_coeffs, _, _, _ = np.linalg.lstsq(H.T, b, rcond=None)

    # Характеристический полином: z^p + a[0] z^{p-1} + ... + a[p-1]
    poly_coeffs = np.concatenate([[1], -a_coeffs])
    poles = np.roots(poly_coeffs)

    # Шаг 3: Амплитуды через Вандермонд
    V = np.vander(poles, N, increasing=True).T
    amplitudes, _, _, _ = np.linalg.lstsq(V, x, rcond=None)

    dt = 1.0
    log_poles = np.log(poles + 1e-300)
    frequencies = np.imag(log_poles) / (2 * np.pi * dt)
    damping = np.real(log_poles) / dt

    return {
        'poles': poles,
        'amplitudes': amplitudes,
        'frequencies': frequencies,
        'damping': damping,
    }


def hankel_svd_filter(x: np.ndarray, L: int, rank: int) -> np.ndarray:
    """
    SVD-фильтрация через матрицу Ганкеля.
    Оставляет первые 'rank' сингулярных компонент.
    """
    H = hankel_matrix(x, L)
    U, s, Vt = np.linalg.svd(H, full_matrices=False)

    # Усечение
    s_trunc = s.copy()
    s_trunc[rank:] = 0
    H_filtered = U @ np.diag(s_trunc) @ Vt

    # Антидиагонализация (усреднение антидиагоналей)
    N = len(x)
    K = H.shape[1]
    x_filtered = np.zeros(N)
    counts = np.zeros(N)
    for i in range(L):
        for j in range(K):
            x_filtered[i + j] += H_filtered[i, j]
            counts[i + j] += 1
    return x_filtered / np.maximum(counts, 1)


def spectral_regime_detection(prices: np.ndarray,
                               window: int = 60,
                               p: int = 6,
                               step: int = 1) -> list[dict]:
    """
    Детектор спектральных режимов на скользящем окне.
    Возвращает доминирующие частоты и их амплитуды.
    """
    log_ret = np.diff(np.log(prices))
    N = len(log_ret)
    results = []

    for start in range(0, N - window, step):
        segment = log_ret[start:start+window]
        segment = segment - segment.mean()   # de-mean

        try:
            res = prony(segment, p)
            # Выбор физически значимых полюсов (устойчивые: |z| ≤ 1)
            mask = (np.abs(res['poles']) <= 1.0) & (res['frequencies'] > 0)
            dominant_freq = res['frequencies'][mask]
            dominant_amp = np.abs(res['amplitudes'][mask])

            if len(dominant_freq) > 0:
                idx = dominant_amp.argmax()
                results.append({
                    'start': start,
                    'dominant_period': 1 / dominant_freq[idx] if dominant_freq[idx] > 0 else np.inf,
                    'amplitude': dominant_amp[idx],
                    'n_components': mask.sum()
                })
        except Exception:
            pass

    return results
```

## Применение в финансах

### Детектор циклов в ценах

```python
# Определение доминирующего периода в ценах фьючерса
import numpy as np

prices = np.array([...])   # внутридневная цена, 1-мин бары
regimes = spectral_regime_detection(prices, window=120, p=8)

# Если доминирующий период 20–30 баров → внутридневной цикл
# Если период > 100 баров → долгосрочный тренд
```

| Период (в барах) | Возможная интерпретация |
|-----------------|------------------------|
| 5–10 | Внутридневные сессионные ритмы |
| 20–30 | Месячный календарный цикл |
| 60–65 | Квартальная сезонность |
| > 200 | Трендовый компонент |

## Сравнение с FFT

| Свойство | FFT | Prony |
|---------|-----|-------|
| Длина данных | Длинные серии | Короткие (от 20 точек) |
| Разрешение | $1/N$ | Субпиксельное |
| Частоты | Дискретная сетка | Произвольные вещественные |
| Устойчивость к шуму | Высокая (с оконными функциями) | Умеренная (SVD помогает) |
| Время расчёта | $O(N \log N)$ | $O(N p^2)$ |

## Связанные статьи

- [[spectral-analysis|Спектральный анализ]] — FFT и периодограммы
- [[fourier-transform|Преобразование Фурье]] — теоретические основы
- [[singular-spectral-analysis|Сингулярный спектральный анализ]] — SSA как альтернатива
- [[hilbert-huang-transform|Преобразование Хилберта-Хуанга]] — адаптивное разложение
- [[wavelet-transform|Вейвлет-преобразование]] — время-частотный анализ
