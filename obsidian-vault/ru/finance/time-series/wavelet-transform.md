---
slug: "/finance/wavelet-transform"
title: "Вейвлет-преобразование (CWT)"
category: "Анализ сигналов"
order: 30
lang: "ru"
---
# Непрерывное вейвлет-преобразование (CWT)

**Непрерывное вейвлет-преобразование (CWT)** — метод частотно-временного анализа, преодолевающий главное ограничение преобразования Фурье — полную потерю временной информации. Разложение сигнала на локализованные базисные функции (вейвлеты) даёт 2D-скалограмму: *когда* и *на какой частоте* происходят события. Незаменимо для нестационарных финансовых рядов, где рыночные циклы появляются, исчезают и меняют частоту.

## Математический аппарат

### Непрерывное вейвлет-преобразование

Для сигнала $x(t) \in L^2(\mathbb{R})$ с материнским вейвлетом $\psi(t)$:

$$
W(a, b) = \frac{1}{\sqrt{|a|}} \int_{-\infty}^{\infty} x(t)\,\psi^*\!\left(\frac{t - b}{a}\right) dt
$$

- $a > 0$: **масштаб** (обратно пропорционален частоте; большой $a$ = низкая частота)
- $b$: **сдвиг** (временная позиция)
- $\psi^*$: комплексно-сопряжённый материнский вейвлет

**Скалограмма:** $|W(a,b)|^2$ — мощность на масштабе $a$ в момент $b$.

**Условие допустимости** (нулевое среднее): $C_\psi = \int_0^\infty |\hat{\psi}(\omega)|^2/\omega\,d\omega < \infty$.

### Материнские вейвлеты

**Вейвлет Морле** (оптимален для осцилляторных сигналов):
$$
\psi_{Morlet}(t) = \pi^{-1/4}\,e^{i\omega_0 t}\,e^{-t^2/2}, \quad \omega_0 \approx 6
$$

**Мексиканская шляпа** (второй минус производной Гаусса):
$$
\psi_{MH}(t) = \frac{2}{\sqrt{3}\pi^{1/4}}(1-t^2)e^{-t^2/2}
$$

Вещественный, хорош для обнаружения ценовых разрывов.

### Дискретное вейвлет-преобразование (DWT)

Диадическая сетка $a = 2^j$, $b = k \cdot 2^j$ даёт нередундантное разложение:

$$
d_{j,k} = \int x(t)\,2^{-j/2}\psi(2^{-j}t - k)\,dt \quad (\text{детальные коэф.})
$$

**Вейвлетная дисперсия** на масштабе $j$: $\nu_x^2(j) = \frac{1}{N_j}\sum_k d_{j,k}^2$ разлагает полную дисперсию по масштабам.

### Вейвлетная когерентность

$$
R^2(a,b) = \frac{|S(a^{-1}W_x W_y^*)|^2}{S(a^{-1}|W_x|^2)\cdot S(a^{-1}|W_y|^2)} \in [0,1]
$$

где $S(\cdot)$ — сглаживающий оператор. **Фазовый угол** $\phi = \arg\{S(a^{-1}W_x W_y^*)\}$ показывает, какой ряд опережает.

## Python-реализация

```python
import numpy as np
import pywt
from typing import Optional

def cwt_scalogram(
    series: np.ndarray,
    scales: Optional[np.ndarray] = None,
    wavelet: str = "cmor1.5-1.0",
    dt: float = 1.0
) -> dict:
    """
    CWT-скалограмма с конусом влияния.

    Args:
        series: одномерный временной ряд
        scales: массив масштабов (по умолч.: лог-равномерно 1..N/4)
        wavelet: вейвлет pywt ('cmor1.5-1.0' = комплексный Морле)
        dt: шаг дискретизации в днях

    Returns:
        dict с 'coefficients', 'frequencies', 'power', 'coi'
    """
    N = len(series)
    if scales is None:
        scales = np.geomspace(1, N // 4, num=64)

    coefficients, freqs = pywt.cwt(series, scales, wavelet, sampling_period=dt)
    power = np.abs(coefficients)**2
    e_fold = np.sqrt(2) * scales * dt
    coi = np.minimum(np.arange(1, N+1), np.arange(N, 0, -1)) * dt

    return {"coefficients": coefficients, "frequencies": freqs,
            "scales": scales, "power": power,
            "coi": coi, "coi_mask": e_fold[:, None] <= coi[None, :]}

def dwt_decompose(
    series: np.ndarray,
    wavelet: str = "db4",
    level: Optional[int] = None
) -> dict:
    """
    Многоуровневое DWT-разложение.

    Returns:
        dict с 'details', 'approximation', 'wavelet_variance'
    """
    if level is None:
        level = pywt.dwt_max_level(len(series), wavelet)
    coeffs = pywt.wavedec(series, wavelet, level=level)
    details = coeffs[1:]
    wavelet_var = np.array([np.mean(d**2) for d in details])
    return {"approximation": coeffs[0], "details": details,
            "wavelet_variance": wavelet_var, "levels": level,
            "total_var": series.var()}

def wavelet_coherence(
    x: np.ndarray,
    y: np.ndarray,
    scales: Optional[np.ndarray] = None,
    wavelet: str = "cmor1.5-1.0",
    smooth_factor: float = 0.5
) -> dict:
    """Вейвлетная когерентность и фаза между двумя рядами."""
    from scipy.ndimage import gaussian_filter
    N = len(x)
    if scales is None:
        scales = np.geomspace(1, N // 4, num=48)

    Wx, freqs = pywt.cwt(x, scales, wavelet)
    Wy, _     = pywt.cwt(y, scales, wavelet)
    cross  = Wx * np.conj(Wy)
    auto_x = np.abs(Wx)**2
    auto_y = np.abs(Wy)**2

    sc = gaussian_filter(np.real(cross), smooth_factor) + \
         1j * gaussian_filter(np.imag(cross), smooth_factor)
    sax = gaussian_filter(auto_x, smooth_factor)
    say = gaussian_filter(auto_y, smooth_factor)

    coherence = np.abs(sc)**2 / (sax * say + 1e-300)
    phase_deg = np.angle(sc, deg=True)
    return {"coherence": coherence, "phase_deg": phase_deg, "frequencies": freqs}

def wavelet_denoising(
    series: np.ndarray,
    wavelet: str = "db4",
    level: int = 4,
    threshold_mode: str = "soft"
) -> np.ndarray:
    """
    Вейвлетное шумоподавление универсальным порогом Донохо-Джонстона.
    Сохраняет резкие скачки (в отличие от гауссового сглаживания).
    """
    coeffs = pywt.wavedec(series, wavelet, level=level)
    sigma  = np.median(np.abs(coeffs[-1])) / 0.6745
    threshold = sigma * np.sqrt(2 * np.log(len(series)))
    coeffs_t = [coeffs[0]] + [pywt.threshold(d, threshold, mode=threshold_mode)
                               for d in coeffs[1:]]
    return pywt.waverec(coeffs_t, wavelet)[:len(series)]

# ---- Пример ----
np.random.seed(42)
N = 256
t = np.arange(N, dtype=float)
x = np.sin(2*np.pi*(5 + 15*t/N)*t/N) + 0.3*np.random.randn(N)

cwt_r = cwt_scalogram(x)
peak = np.unravel_index(cwt_r["power"].argmax(), cwt_r["power"].shape)
print(f"Пик CWT: t={peak[1]}, f={cwt_r['frequencies'][peak[0]]:.4f} цикл/день")

dwt_r = dwt_decompose(x, wavelet="db4", level=5)
print("Вейвлетная дисперсия по масштабам:")
for j, v in enumerate(dwt_r["wavelet_variance"]):
    print(f"  Масштаб {j+1} (~{2**(j+1)}-дневный): {v:.4f} ({v/x.var():.1%})")

denoised = wavelet_denoising(x)
print(f"Снижение шума: {1 - np.var(denoised)/np.var(x):.1%}")
```

## Многомасштабная вейвлетная мощность

```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "Q1", "scale_2d": 0.85, "scale_8d": 0.22, "scale_32d": 0.10},
    {"time": "Q2", "scale_2d": 0.12, "scale_8d": 0.45, "scale_32d": 0.28},
    {"time": "Q3", "scale_2d": 0.90, "scale_8d": 0.30, "scale_32d": 0.35},
    {"time": "Q4", "scale_2d": 0.20, "scale_8d": 0.15, "scale_32d": 0.55}
  ],
  "lines": [
    {"dataKey": "scale_2d",  "stroke": "#ef4444", "name": "2-дневный масштаб (шум)"},
    {"dataKey": "scale_8d",  "stroke": "#3b82f6", "name": "8-дневный масштаб (цикл)"},
    {"dataKey": "scale_32d", "stroke": "#10b981", "name": "32-дневный масштаб (тренд)"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичное значение |
| :--- | :--- | :--- | :--- |
| $a$ | Масштаб | Обратно пропорционален частоте | 1 – N/4 |
| $b$ | Сдвиг | Временная позиция анализа | 0 – T |
| $\omega_0$ | Центральная частота Морле | Центр частотного окна | 5 – 8 |
| $J$ | Уровень DWT | Глубина разложения | $\lfloor\log_2 N\rfloor$ |
| $\sigma$ | Порог Донохо-Джонстона | $\hat{\sigma}\sqrt{2\ln N}$ | Зависит от данных |

## Ограничения и расширения

- **Инвариантность к сдвигу:** Стандартный DWT не инвариантен к сдвигам; MODWT (стационарный DWT) устраняет это за счёт избыточности.
- **Выбор материнского вейвлета:** Морле оптимален для осцилляторных сигналов, мексиканская шляпа — для обнаружения переходов, Добеши — для разложения энергии.
- **Конус влияния (COI):** Вблизи границ ряда вейвлет выходит за пределы данных; результаты в зоне COI следует интерпретировать осторожно.
- **2D вейвлеты:** Для эволюционирующих корреляционных матриц 2D-вейвлеты разлагают матрицу сразу по временному и кросс-секционному измерениям.

## Практические применения

1. **Многомасштабное шумоподавление:** Пороговая обработка тонких масштабов удаляет bid-ask bounce, сохраняя ценовые скачки.
2. **Масштабно-зависимая корреляция:** Вейвлетная когерентность акций и облигаций меняет знак по масштабам — разные хеджирующие отношения на коротком и длинном горизонтах.
3. **Детектирование структурных сдвигов:** Резкие изменения вейвлетной дисперсии на нескольких масштабах одновременно сигнализируют о смене режима раньше, чем скользящая корреляция.
4. **Декомпозиция волатильности:** DWT разделяет реализованную дисперсию на внутридневную, дневную, недельную и месячную компоненты.

## Связанные темы
- [[spectral-analysis]]
- [[hilbert-huang-transform]]
- [[singular-spectral-analysis]]
- [[volatility-forecasting]]
- [[realized-kernels]]
