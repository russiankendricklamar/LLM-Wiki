---
slug: "/finance/fft"
title: "Быстрое преобразование Фурье (БПФ)"
category: "Анализ сигналов"
order: 80
lang: "ru"
---
# Быстрое преобразование Фурье (БПФ)

**Быстрое преобразование Фурье (БПФ / FFT)** — семейство алгоритмов для вычисления [[dft]] за $O(N \log N)$ операций вместо $O(N^2)$. Алгоритм не меняет результат — только способ его получения. Именно БПФ сделало спектральный анализ, цифровую фильтрацию и быструю свёртку практичными: без него обработка звука, изображений, финансовых рядов и сигналов в физике работала бы в тысячи раз медленнее.

## Алгоритм Кули-Тьюки (1965)

Наиболее распространённый вариант — **decimation-in-time (DIT)** для $N = 2^m$.

Ключевое наблюдение: ДПФ размера $N$ можно разбить на два ДПФ размера $N/2$, разделив отсчёты на чётные и нечётные:

$$
X[k] = \underbrace{\sum_{n=0}^{N/2-1} x[2n]\,\omega_N^{2kn}}_{\displaystyle E[k]} \;+\; \omega_N^k \cdot \underbrace{\sum_{n=0}^{N/2-1} x[2n+1]\,\omega_N^{2kn}}_{\displaystyle O[k]}
$$

где $\omega_N = e^{-2\pi i/N}$ — **примитивный корень единицы** порядка $N$.

### Операция «бабочка»

Из симметрии $\omega_N^{k+N/2} = -\omega_N^k$ получаем **butterfly**:

$$
X[k] = E[k] + \omega_N^k\, O[k]
$$
$$
X[k + N/2] = E[k] - \omega_N^k\, O[k]
$$

Одна пара $(E[k], O[k])$ даёт сразу **два** выходных коэффициента. Рекурсия продолжается до базового случая $N = 1$ (ДПФ от одного отсчёта = сам отсчёт).

### Анализ сложности

$$
T(N) = 2\,T(N/2) + O(N) \;\Rightarrow\; T(N) = O(N \log_2 N)
$$

| $N$ | ДПФ ($N^2$) | БПФ ($N \log_2 N$) | Ускорение |
| ---: | ---: | ---: | ---: |
| 256 | 65 536 | 2 048 | ×32 |
| 1 024 | 1 048 576 | 10 240 | ×102 |
| 65 536 | 4.3 млрд | 1 048 576 | ×4 096 |
| 1 048 576 | $10^{12}$ | 20 971 520 | ×50 000 |

### Порядок bit-reversal

DIT-БПФ требует предварительной **перестановки входа** в порядке bit-reversal: индекс $n$ переставляется в порядке, соответствующем двоичному отражению его битов. Это делает итеративную реализацию in-place: один массив длины $N$ обновляется на месте без выделения памяти.

## Варианты алгоритма

| Вариант | Описание | Когда использовать |
| :--- | :--- | :--- |
| **Radix-2 DIT** | Разбиение на чётные/нечётные | $N = 2^m$, классика |
| **Radix-2 DIF** | Разбиение по выходным бинам | Симметрично DIT |
| **Radix-4** | Шаг 4 вместо 2, меньше умножений | $N = 4^m$ |
| **Mixed-radix** | Произвольный $N = p_1\cdot p_2\cdots$ | Произвольный размер (NumPy, FFTW) |
| **Split-radix** | Radix-2 + Radix-4 | Минимум арифм. операций |
| **FFTW** | Адаптивный выбор плана | Максимальная скорость на CPU |

Библиотека **FFTW** (Fastest Fourier Transform in the West) использует автонастройку: подбирает оптимальный алгоритм для конкретного $N$ и архитектуры CPU прямо во время запуска.

## Теорема о свёртке через БПФ

$$
(f * g)[n] = \mathcal{F}^{-1}\{\mathcal{F}\{f\} \cdot \mathcal{F}\{g\}\}
$$

**Линейная свёртка** сигналов длины $N_x$ и $N_h$ через БПФ:
1. Дополнить нулями до $M \geq N_x + N_h - 1$ (предотвращает циклическую свёртку)
2. Вычислить $X = \text{FFT}(x)$, $H = \text{FFT}(h)$
3. Перемножить: $Y = X \cdot H$
4. Обратное: $y = \text{IFFT}(Y)$

Сложность: $O(M \log M)$ вместо $O(N_x \cdot N_h)$ — **огромная разница** при больших фильтрах.

## Python-реализация

```python
import numpy as np
from typing import Optional


def fft_cooley_tukey(x: np.ndarray) -> np.ndarray:
    """
    Рекурсивное БПФ Кули-Тьюки (DIT, Radix-2).
    Требует N = 2^m. Учебная реализация — для production используйте numpy.fft.

    Args:
        x: входная последовательность длины N = 2^m

    Returns:
        Комплексный спектр длины N
    """
    N = len(x)
    if N == 1:
        return x.astype(complex)
    if N & (N - 1):
        raise ValueError(f"N должно быть степенью 2, получено {N}")

    even = fft_cooley_tukey(x[::2])
    odd  = fft_cooley_tukey(x[1::2])

    k = np.arange(N // 2)
    twiddle = np.exp(-2j * np.pi * k / N) * odd

    return np.concatenate([even + twiddle, even - twiddle])


def fft_convolve(x: np.ndarray, h: np.ndarray) -> np.ndarray:
    """
    Линейная свёртка через БПФ — O(N log N).

    Args:
        x: входной сигнал
        h: импульсный отклик фильтра (ядро)

    Returns:
        Линейная свёртка длины len(x) + len(h) - 1
    """
    n_out = len(x) + len(h) - 1
    # Zero-pad до ближайшей степени 2 для скорости
    n_fft = 1 << (n_out - 1).bit_length()

    X = np.fft.rfft(x, n=n_fft)
    H = np.fft.rfft(h, n=n_fft)
    return np.fft.irfft(X * H, n=n_fft)[:n_out]


def band_filter(
    x: np.ndarray,
    fs: float,
    f_low: float,
    f_high: float,
) -> np.ndarray:
    """
    Идеальный полосовой фильтр в частотной области.

    Обнуляет все бины вне диапазона [f_low, f_high].
    Артефакты Гиббса у краёв — для production используйте окна.

    Args:
        x:      входной сигнал
        fs:     частота дискретизации
        f_low:  нижняя граница (Гц)
        f_high: верхняя граница (Гц)

    Returns:
        Отфильтрованный сигнал той же длины
    """
    N = len(x)
    X = np.fft.rfft(x)
    freqs = np.fft.rfftfreq(N, d=1.0 / fs)
    X_filt = X * ((freqs >= f_low) & (freqs <= f_high))
    return np.fft.irfft(X_filt, n=N)


def find_dominant_frequencies(
    x: np.ndarray,
    fs: float = 1.0,
    n_top: int = 5,
    min_period: float = 2.0,
    window: str = "hann",
) -> list[dict]:
    """
    Топ-N доминирующих периодических компонент по амплитуде.

    Args:
        min_period: минимальный период (в единицах 1/fs)

    Returns:
        Список dict: freq, period, amplitude, phase_deg
    """
    N = len(x)
    win = np.hanning(N) if window == "hann" else np.ones(N)
    x_win = x * win / win.mean()

    X = np.fft.rfft(x_win)
    freqs = np.fft.rfftfreq(N, d=1.0 / fs)
    amp = np.abs(X) * 2 / N
    amp[0] /= 2

    valid = (freqs > 0) & np.where(
        freqs > 0, 1.0 / freqs >= min_period, False
    )
    idx = np.where(valid)[0]
    top = idx[np.argsort(amp[idx])[::-1][:n_top]]

    return [
        {
            "freq":      float(freqs[i]),
            "period":    float(1.0 / freqs[i]),
            "amplitude": float(amp[i]),
            "phase_deg": float(np.angle(X[i], deg=True)),
        }
        for i in top
    ]


# ---- Пример: проверка и применение ----
np.random.seed(42)
N, fs = 512, 252.0       # 2 года ежедневных данных

t = np.arange(N) / fs
x = (
    2.0 * np.sin(2 * np.pi * 5.0 * t)      # 5-летний цикл → 50д период
    + 0.8 * np.sin(2 * np.pi * 21.0 * t)   # 21 цикл/год → ~12д период
    + 0.3 * np.sin(2 * np.pi * 63.0 * t)   # 63 цикла/год → ~4д период
    + np.random.normal(0, 0.2, N)
)

# Проверка: рекурсивное БПФ ≈ numpy
X_custom = fft_cooley_tukey(x[:64])
X_numpy  = np.fft.fft(x[:64])
print(f"Макс. отклонение: {np.max(np.abs(X_custom - X_numpy)):.2e}")

# Доминирующие компоненты
dominant = find_dominant_frequencies(x, fs=fs, n_top=3)
for d in dominant:
    print(f"f={d['freq']:.2f}/год  период={d['period']:.1f}д  A={d['amplitude']:.3f}")

# Полосовой фильтр: только 5-дневный цикл
x_week = band_filter(x, fs, f_low=4.0, f_high=6.0)

# Быстрая свёртка с MA(5) фильтром
ma5 = np.ones(5) / 5
x_smooth = fft_convolve(x, ma5)[:N]
```

## Ускорение БПФ vs ДПФ

```chart
{
  "chartType": "bar",
  "xAxis": "N",
  "data": [
    {"N": "64",     "dft": 4096,       "fft": 384},
    {"N": "256",    "dft": 65536,      "fft": 2048},
    {"N": "1024",   "dft": 1048576,    "fft": 10240},
    {"N": "4096",   "dft": 16777216,   "fft": 49152},
    {"N": "16384",  "dft": 268435456,  "fft": 229376}
  ],
  "lines": [
    {"dataKey": "dft", "name": "ДПФ (N²)", "stroke": "#ef4444"},
    {"dataKey": "fft", "name": "БПФ (N log₂N)", "stroke": "#22c55e"}
  ]
}
```

## Практические применения

1. **Спектральный анализ:** Основа [[spectral-analysis]] и всех методов PSD (Уэлч, DPSS). Вычисление спектра за миллисекунды вместо секунд.
2. **Цифровая фильтрация:** Свёртка с длинным фильтром (FIR) через БПФ — стандарт в аудио, биосигналах, финансовой фильтрации.
3. **Корреляция и автокорреляция:** $\text{xcorr}(x, y) = \mathcal{F}^{-1}[\hat{x}^* \cdot \hat{y}]$ — поиск задержки между рядами за $O(N \log N)$.
4. **Умножение больших чисел:** Алгоритм Шёнхаге–Штрассена использует БПФ для умножения $n$-значных чисел за $O(n \log n \log\log n)$.
5. **Нейронные сети:** FFT-слои заменяют дорогие свёрточные в FNet и Monarch-архитектурах.
6. **Алгоритм Шора:** Квантовое преобразование Фурье — ядро [[shor-algorithm]]; экспоненциальное ускорение над классическим БПФ для задачи факторизации.
7. **Обработка изображений:** 2D-FFT (сепарабельный по строкам и столбцам) — фильтрация, сжатие, JPEG-подобные методы.

## Ограничения

- **$N = 2^m$:** Радикс-2 алгоритм требует степени 2. Смешанный радикс (NumPy/FFTW) работает с любым $N$, но оптимален при $N = 2^a \cdot 3^b \cdot 5^c$.
- **Численная точность:** Накопление ошибок округления $\sim O(\log N \cdot \varepsilon_\text{machine})$ — несущественно для float64, но важно в embedded-системах.
- **Стационарность:** БПФ как и ДПФ не даёт временно́й локализации. Для нестационарных сигналов — STFT (краткосрочное ПФ) или [[wavelet-transform]].

## Связанные темы
- [[dft]]
- [[fourier-transform]]
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[shor-algorithm]]
