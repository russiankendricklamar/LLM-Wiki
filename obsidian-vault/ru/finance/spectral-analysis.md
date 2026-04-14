---
title: "Спектральный анализ"
category: "Анализ сигналов"
order: 29
lang: "ru"
---
# Спектральный анализ

**Спектральный анализ** — совокупность методов разложения временного ряда на гармонические компоненты с разными частотами. В финансах используется для поиска бизнес-циклов, фильтрации шума и кросс-спектрального анализа между активами. Центральный результат — **теорема Вигнера-Хинчина**: PSD является преобразованием Фурье от автоковариационной функции.

## Математический аппарат

### Дискретное преобразование Фурье и теорема Парсеваля

DFT для ряда $x_0, \dots, x_{N-1}$:

$$
X(k) = \sum_{n=0}^{N-1} x(n)\,e^{-i\frac{2\pi}{N}kn}, \quad k = 0, \dots, N-1
$$

**Теорема Парсеваля** — сохранение суммарной энергии:

$$
\sum_{n=0}^{N-1} |x(n)|^2 = \frac{1}{N}\sum_{k=0}^{N-1} |X(k)|^2
$$

### Метод Уэлча (снижение дисперсии)

Периодограмма страдает высокой дисперсией. Метод Уэлча усредняет $K$ перекрывающихся сегментов длины $M$:

$$
\hat{S}_{Welch}(f) = \frac{1}{K}\sum_{i=1}^K \frac{1}{M\,U}\left|\sum_{n=0}^{M-1} x_i(n)\,w(n)\,e^{-2\pi i fn}\right|^2
$$

где $w(n)$ — оконная функция (Хэнн, Блэкман), $U = \frac{1}{M}\sum_n w^2(n)$ — нормировка мощности окна.

### Многотаперный метод (Thomson DPSS)

Использует $K$ ортогональных тапер-функций $w_k^{(DPSS)}$ (собственные векторы матрицы концентрации полосы):

$$
\hat{S}_{MT}(f) = \frac{1}{K}\sum_{k=0}^{K-1}\left|\sum_{n=0}^{N-1} x(n)\,w_k^{(DPSS)}(n)\,e^{-2\pi i fn}\right|^2
$$

Баланс между утечкой спектра и дисперсией контролируется параметром полосового произведения $NW$ (обычно 2–8).

### Кросс-спектральная плотность и когерентность

Для двух рядов $x(t)$, $y(t)$:

$$
S_{xy}(f) = \lim_{T\to\infty} \frac{1}{T}\mathbb{E}[X(f)Y^*(f)]
$$

**Квадратурная когерентность** (аналог $R^2$ в частотной области):

$$
C^2_{xy}(f) = \frac{|S_{xy}(f)|^2}{S_{xx}(f)\,S_{yy}(f)} \in [0, 1]
$$

### AR-параметрический спектр (Бёрг)

Для AR(p) модели $x(t) = -\sum_{k=1}^p a_k x(t-k) + \epsilon(t)$:

$$
\hat{S}_{AR}(f) = \frac{\hat{\sigma}^2_\epsilon}{|1 + \sum_{k=1}^p a_k e^{-2\pi i fk}|^2}
$$

Высокое частотное разрешение при коротких рядах.

## Python-реализация

```python
import numpy as np
from scipy.signal import welch, csd, coherence

def compute_periodogram(
    series: np.ndarray,
    fs: float = 1.0,
    window: str = "hann",
    nperseg: int | None = None,
    noverlap: int | None = None
) -> dict:
    """
    PSD методом Уэлча.

    Args:
        series: одномерный временной ряд
        fs: частота дискретизации (1.0 = 1/день)
        window: тип окна ('hann', 'blackman', 'boxcar')
        nperseg: длина сегмента (по умолчанию N/8)

    Returns:
        dict с 'freqs', 'psd', 'periods'
    """
    N = len(series)
    if nperseg is None:
        nperseg = N // 8
    if noverlap is None:
        noverlap = nperseg // 2

    freqs, psd = welch(series, fs=fs, window=window,
                       nperseg=nperseg, noverlap=noverlap)
    periods = np.where(freqs > 0, 1.0 / freqs, np.inf)
    return {"freqs": freqs, "psd": psd, "periods": periods}

def multitaper_psd(
    series: np.ndarray,
    fs: float = 1.0,
    NW: float = 4.0,
    K: int | None = None
) -> dict:
    """
    PSD многотаперным методом (Thomson DPSS).

    Args:
        NW: произведение полуполосы на длину (2–8)
        K: число тапер (по умолчанию 2*NW - 1)

    Returns:
        dict с 'freqs', 'psd'
    """
    from scipy.signal.windows import dpss
    N = len(series)
    if K is None:
        K = int(2 * NW) - 1

    tapers, _ = dpss(N, NW, Kmax=K, return_ratios=True)
    psd_acc = np.zeros(N // 2 + 1)
    freqs   = np.fft.rfftfreq(N, d=1.0/fs)

    for tap in tapers:
        spec = np.abs(np.fft.rfft(series * tap))**2 / (fs * N)
        psd_acc += spec
    psd_acc /= K
    return {"freqs": freqs, "psd": psd_acc}

def spectral_coherence(
    x: np.ndarray,
    y: np.ndarray,
    fs: float = 1.0,
    nperseg: int = 64
) -> dict:
    """
    Когерентность и кросс-спектральная фаза между x и y.

    Returns:
        dict с 'freqs', 'coherence', 'phase_deg'
    """
    freqs, coh = coherence(x, y, fs=fs, nperseg=nperseg)
    freqs2, Pxy = csd(x, y, fs=fs, nperseg=nperseg)
    phase_deg = np.angle(Pxy, deg=True)
    return {"freqs": freqs, "coherence": coh, "phase_deg": phase_deg}

def dominant_cycles(psd: np.ndarray, freqs: np.ndarray,
                    n_top: int = 5) -> list[dict]:
    """Топ-N доминирующих циклов по PSD."""
    idx = np.argsort(psd)[::-1][:n_top]
    return [{"period_days": float(1/freqs[i]) if freqs[i] > 0 else np.inf,
             "power": float(psd[i])}
            for i in idx]

def ar_spectrum(series: np.ndarray, order: int = 10,
                n_freqs: int = 512) -> dict:
    """AR-параметрический спектр через метод Юла-Уокера."""
    from scipy.linalg import solve_toeplitz
    N = len(series)
    acov = np.array([np.cov(series[lag:], series[:N-lag])[0,1]
                     for lag in range(order + 1)])
    a = solve_toeplitz(acov[:order], -acov[1:order+1])
    sigma2 = acov[0] + np.dot(a, acov[1:order+1])

    freqs = np.linspace(0, 0.5, n_freqs)
    psd = np.array([sigma2 / abs(1 + sum(a[k-1] * np.exp(-2j*np.pi*f*k)
                                          for k in range(1, order+1)))**2
                    for f in freqs])
    return {"freqs": freqs, "psd": np.real(psd)}

# ---- Пример ----
np.random.seed(42)
N = 512
t = np.arange(N)
x = (np.sin(2*np.pi*t/10) + 0.5*np.sin(2*np.pi*t/50)
     + np.random.normal(0, 0.3, N))

pw = compute_periodogram(x)
mt = multitaper_psd(x, NW=4)
dc = dominant_cycles(pw["psd"], pw["freqs"])

print("Доминирующие циклы (Уэлч):")
for c in dc[:3]:
    print(f"  Период: {c['period_days']:.1f} дней, мощность: {c['power']:.4f}")

ar = ar_spectrum(x, order=20)
peak_period = 1.0 / ar["freqs"][np.argmax(ar["psd"][1:]) + 1]
print(f"AR-спектр: доминирующий период = {peak_period:.1f} дней")
```

## Спектр мощности

```chart
{
  "type": "line",
  "xAxis": "freq",
  "data": [
    {"freq": "0.01", "power": 10},
    {"freq": "0.02", "power": 45},
    {"freq": "0.03", "power": 12},
    {"freq": "0.04", "power": 5},
    {"freq": "0.05", "power": 3},
    {"freq": "0.10", "power": 85},
    {"freq": "0.15", "power": 8},
    {"freq": "0.20", "power": 2}
  ],
  "lines": [
    {"dataKey": "power", "stroke": "#8b5cf6", "name": "Мощность (Амплитуда²)"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $M$ | Длина сегмента Уэлча | Разрешение vs. дисперсия | $N/8$ – $N/4$ |
| $NW$ | Произведение полосы (DPSS) | Баланс утечки и дисперсии | 2 – 8 |
| $K$ | Число тапер | $2NW - 1$ | 3 – 15 |
| $p$ | Порядок AR | Число коэффициентов AR | 5 – 50 |

## Ограничения и расширения

- **Нестационарность:** Финансовые ряды меняют спектральные свойства; вейвлетный и VMSS-анализ дают время-частотное представление.
- **Длина данных:** Для обнаружения цикла периода $T$ требуется $\ge 4T$ наблюдений; при коротких рядах AR-метод предпочтительнее.
- **Утечка спектра:** Без оконной функции высокоамплитудные компоненты «загрязняют» соседние частоты; окна Блэкмана-Харриса обеспечивают ослабление более 90 дБ.

## Практические применения

1. **Обнаружение циклов:** Поиск бизнес-циклов 10–50 дней в ценах сырьевых товаров и индексах.
2. **Кросс-спектральный анализ:** Когерентность акции и индекса раскрывает частотно-зависимое лидерство.
3. **Улучшение прогнозов GARCH:** Спектральная декомпозиция волатильности разделяет краткосрочный шум и долгосрочный компонент.
4. **Технические индикаторы:** Ehlers Cycle Analytics основан на AR-спектральном анализе доминирующего цикла в реальном времени.

## Связанные темы
- [[wavelet-transform]]
- [[hilbert-huang-transform]]
- [[fisher-transform]]
- [[singular-spectral-analysis]]
- [[volatility-modulated-spectral-surface]]
