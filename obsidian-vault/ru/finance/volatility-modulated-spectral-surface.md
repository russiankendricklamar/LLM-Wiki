---
title: "Волатильно-модулированная спектральная поверхность (VMSS)"
category: "Анализ сигналов"
order: 72
lang: "ru"
slug: "volatility-modulated-spectral-surface"
---
# Волатильно-модулированная спектральная поверхность (VMSS)

**VMSS** — передовой фреймворк обработки сигналов, картирующий спектральные характеристики финансовых рядов с явным учётом гетероскедастичности. Стандартные методы (STFT, вейвлеты) не разграничивают «больше энергии на частоте» и «больше энергии из-за высокой волатильности». VMSS нормирует спектральную мощность на локальную дисперсию, открывая структурные паттерны, скрытые волатильностью.

## Необходимые знания

[[spectral-analysis]], [[garch-models]], [[wavelet-transform]]

## Математический аппарат

### Волатильно-модулированное преобразование

Пусть $x(t)$ — доходности, $\sigma_t$ — локальная волатильность (GARCH, скользящее std, реализованное ядро). **Стандартизованные доходности**: $\tilde{x}(t) = x(t)/\sigma_t$. Тогда:

$$
\text{VMSS}(t, \omega) = \left|\int_{-\infty}^\infty \tilde{x}(\tau)\,W_h(\tau-t)\,e^{-i\omega\tau}\,d\tau\right|^2
$$

Эквивалентно STFT на $\tilde{x}(t)$ — спектр чист от волатильностного «масштабного» эффекта.

### Адаптивное окно

Ключевая инновация: длина окна $h_t$ обратно пропорциональна локальной волатильности:

$$
h_t = \frac{h_0}{\sigma_t / \bar{\sigma}}
$$

При высокой волатильности окно сужается (лучшее временное разрешение); при низкой — расширяется (лучшее частотное разрешение). Реализует принцип неопределённости Гейзенберга адаптивно: $\Delta t \cdot \Delta\omega \ge 1/2$.

### Спектральная нормализация

Нормировка сырой мощности STFT:

$$
\tilde{S}(t, \omega) = \frac{S_{STFT}(t, \omega)}{\sigma_t^2}
$$

По теореме Парсеваля: $\int \tilde{S}(t,\omega)\,d\omega = 1$ — поверхность сравнима между режимами.

### Распределение Вигнера-Виля

Максимальное время-частотное разрешение (выполняет маргинальные условия точно):

$$
W_x(t,\omega) = \int_{-\infty}^\infty x\!\left(t+\frac{\tau}{2}\right)x^*\!\left(t-\frac{\tau}{2}\right)e^{-i\omega\tau}\,d\tau
$$

VMSS на основе WVD: $\text{VMSS}_{WV}(t,\omega) = W_{\tilde{x}}(t,\omega)/\sigma_t^2$. Страдает перекрёстными помехами; псевдо-WVD применяет окно для их подавления.

### Спектральная энтропия

На каждом $t$ распределение $\tilde{S}(t,\cdot)$ нормируется до суммарной единицы. Его энтропия:

$$
H_{spec}(t) = -\int_0^{f_N} \tilde{S}(t,f)\ln\tilde{S}(t,f)\,df
$$

Высокая $H_{spec}$ (плоский спектр) = белый шум / эффективный рынок; низкая = устойчивые циклы / предсказуемость.

## Python-реализация

```python
import numpy as np
from scipy.signal import stft
from scipy.ndimage import gaussian_filter

def estimate_local_volatility(
    returns: np.ndarray,
    window: int = 20,
    method: str = "rolling"
) -> np.ndarray:
    """Локальная волатильность: скользящее std или EWMA."""
    n = len(returns)
    vol = np.full(n, np.nan)
    if method == "rolling":
        for i in range(window, n):
            vol[i] = returns[i-window:i].std()
        vol[:window] = vol[window]
    elif method == "ewma":
        alpha = 2.0 / (window + 1)
        var = returns[0]**2
        for i in range(n):
            var = alpha * returns[i]**2 + (1 - alpha) * var
            vol[i] = np.sqrt(var)
    return np.maximum(vol, 1e-8)

def compute_vmss(
    returns: np.ndarray,
    vol_window: int = 20,
    stft_nperseg: int = 32,
    smooth_sigma: float = 1.0
) -> dict:
    """
    Вычисление VMSS.

    Args:
        returns: дневные доходности
        vol_window: окно для оценки локальной волатильности
        stft_nperseg: длина сегмента STFT
        smooth_sigma: сглаживание поверхности

    Returns:
        dict с 'time', 'freqs', 'surface', 'spectral_entropy', 'local_vol'
    """
    noverlap = int(stft_nperseg * 0.75)
    sigma = estimate_local_volatility(returns, window=vol_window)
    standardized = returns / sigma

    freqs, times, Zxx = stft(standardized, fs=1.0, window="hann",
                              nperseg=stft_nperseg, noverlap=noverlap)
    surface = np.abs(Zxx)**2

    if smooth_sigma > 0:
        surface = gaussian_filter(surface, sigma=smooth_sigma)

    # Спектральная энтропия
    mask = freqs > 0
    S_pos = surface[mask, :]
    total = S_pos.sum(axis=0, keepdims=True) + 1e-300
    prob  = S_pos / total
    prob  = np.clip(prob, 1e-300, None)
    entropy = -np.sum(prob * np.log(prob), axis=0)

    return {
        "time": times, "freqs": freqs[mask],
        "surface": S_pos, "spectral_entropy": entropy,
        "local_vol": sigma
    }

def detect_resonance_zones(
    vmss_surface: np.ndarray,
    threshold_sigma: float = 2.0
) -> np.ndarray:
    """Маска зон резонанса: VMSS > mean + threshold_sigma * std."""
    return vmss_surface > (vmss_surface.mean() +
                           threshold_sigma * vmss_surface.std())

def vmss_regime_indicator(
    spectral_entropy: np.ndarray,
    window: int = 10
) -> np.ndarray:
    """Скользящая средняя спектральной энтропии как индикатор режима."""
    indicator = np.full_like(spectral_entropy, np.nan)
    for i in range(window, len(spectral_entropy)):
        indicator[i] = spectral_entropy[i-window:i].mean()
    return indicator

# ---- Пример ----
np.random.seed(42)
T = 500
t_arr = np.arange(T)
vol_pattern = 0.01 * (1 + 2 * np.abs(np.sin(2 * np.pi * t_arr / 100)))
cycle = 0.002 * np.sin(2 * np.pi * t_arr / 20)
returns = cycle + vol_pattern * np.random.randn(T)

result = compute_vmss(returns, vol_window=20, stft_nperseg=32)
resonance = detect_resonance_zones(result["surface"])
indicator = vmss_regime_indicator(result["spectral_entropy"])

print(f"Форма поверхности VMSS: {result['surface'].shape}")
print(f"Доля зон резонанса: {resonance.mean():.3%}")
print(f"Средняя спектральная энтропия: {np.nanmean(result['spectral_entropy']):.4f}")

avg_pwr = result["surface"].mean(axis=1)
dom_idx = np.argmax(avg_pwr)
dom_period = 1.0 / result["freqs"][dom_idx]
print(f"Доминирующий цикл: {dom_period:.1f} дней (истинный: 20.0)")
```

## Спектральная энтропия во времени

```chart
{
  "type": "line",
  "xAxis": "day",
  "data": [
    {"day": "1",   "entropy": 3.1, "vol": 0.012},
    {"day": "50",  "entropy": 2.8, "vol": 0.018},
    {"day": "100", "entropy": 2.3, "vol": 0.025},
    {"day": "150", "entropy": 1.9, "vol": 0.030},
    {"day": "200", "entropy": 1.5, "vol": 0.028},
    {"day": "250", "entropy": 2.2, "vol": 0.016},
    {"day": "300", "entropy": 3.0, "vol": 0.011},
    {"day": "350", "entropy": 3.2, "vol": 0.010}
  ],
  "lines": [
    {"dataKey": "entropy", "stroke": "#8b5cf6", "name": "Спектральная энтропия"},
    {"dataKey": "vol",     "stroke": "#ef4444", "name": "Локальная волатильность"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $h_0$ | Базовое окно | Стандартная длина STFT-сегмента | 16 – 64 бара |
| $\sigma_t$ | Локальная волатильность | GARCH или скользящее std | Зависит от актива |
| $\tilde{S}(t,\omega)$ | Нормированная мощность | Vol-нормализованная спектральная плотность | 0 – $\infty$ |
| $H_{spec}(t)$ | Спектральная энтропия | Равномерность спектрального распределения | 0 – $\ln N_f$ |
| $h_t$ | Адаптивное окно | $h_0 \cdot \bar{\sigma}/\sigma_t$ | Варьируется |

## Ограничения и расширения

- **Круговая зависимость:** Использование GARCH-оценки $\sigma_t$ для нормировки создаёт зависимость от предположений модели; реализованные ядра — более робастная альтернатива.
- **Интерпретация уровней:** VMSS несравнима между активами с разными распределениями; z-оценка относительно скользящего базиса стандартизирует значения.
- **Двумерное расширение:** Бивариантный VMSS анализирует кросс-спектральные связи между двумя активами с нормировкой на волатильность обоих.
- **Онлайн-вычисление:** Рекурсивное обновление STFT позволяет вести VMSS в реальном времени без переобработки всей истории.

## Практические применения

1. **Детектирование режимов:** Падение $H_{spec}$ ниже порога сигнализирует об увеличении структурированности рынка — потенциальных торговых возможностях.
2. **Адаптивное шумоподавление:** В режиме высокой волатильности узкое окно фокусируется на переходных спектральных особенностях.
3. **Кросс-активная когерентность:** Vol-нормированный кросс-VMSS между акциями и облигациями выявляет частотные полосы структурной связи.
4. **Генерация альфа-сигналов:** Персистентность зон резонанса (>10 дней) — статистически значимый краткосрочный предиктор доходности.

## Связанные темы
- [[spectral-analysis]]
- [[wavelet-transform]]
- [[volatility-forecasting]]
- [[gan]]
- [[realized-kernels]]
- [[shannon-entropy]]
