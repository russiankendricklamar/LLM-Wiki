---
slug: "/finance/shannon-entropy"
title: "Энтропия Шеннона в финансах"
category: "Алгоритмы и ML"
order: 35
lang: "ru"
---
# Энтропия Шеннона для обнаружения режимов

**Энтропия Шеннона** — фундаментальная мера неопределённости дискретного вероятностного распределения, введённая Клодом Шенноном в 1948 году. Для распределения $p = (p_1, \dots, p_n)$:

$$
H(X) = -\sum_{i=1}^n p_i \log_2 p_i \quad (0 \log 0 \equiv 0)
$$

Максимальна при равномерном распределении $H_{max} = \log_2 n$. В финансах падение скользящей энтропии ниже порога сигнализирует о возникновении предсказуемых паттернов.

## Математический аппарат

### Аксиоматическое определение

Шеннон доказал, что единственная мера неопределённости, удовлетворяющая непрерывности, симметрии и рекурсивности, имеет вид $H = -c\sum_i p_i \log p_i$. Энтропия нормировки субаддитивна: $H(X, Y) \le H(X) + H(Y)$ с равенством при независимости.

### Дивергенция Кульбака-Лейблера

**KL-дивергенция** измеряет расстояние между распределениями:

$$
D_{KL}(P \| Q) = \sum_i p_i \log \frac{p_i}{q_i} \ge 0
$$

В финансах $D_{KL}(\mathbb{P} \| \mathbb{Q})$ — стоимость смены вероятностной меры при хеджировании. Согласно теореме Гиrsanov, для ГБМ $D_{KL} = \frac{1}{2}\lambda^2 T$, где $\lambda$ — коэффициент Шарпа: мерой «расстояния до безарбитражности» является именно KL.

### Взаимная информация

$$
I(X; Y) = H(X) + H(Y) - H(X, Y) = \sum_{x,y} p(x,y) \log \frac{p(x,y)}{p(x)p(y)}
$$

При гауссовых зависимостях $I = -\frac{1}{2}\ln(1-\rho^2)$; отклонение от этой формулы указывает на нелинейные эффекты. Используется для нелинейного отбора факторов: $I > 0$ выявляет предсказательную связь, невидимую корреляцией Пирсона.

### Трансферная энтропия

Направленный информационный поток от $Y$ к $X$:

$$
T_{Y \to X} = \sum p(x_{t+1}, x_t^{(k)}, y_t^{(l)}) \log \frac{p(x_{t+1} \mid x_t^{(k)}, y_t^{(l)})}{p(x_{t+1} \mid x_t^{(k)})}
$$

Ненулевое $T_{Y \to X}$ свидетельствует о том, что прошлые значения $Y$ улучшают прогноз $X$ — основа выявления каузальных связей (CDS → акции → облигации при заражении).

### Энтропия Фон Неймана

Для матрицы плотности $\rho = \hat{\mathbf{C}}/N$ (нормированная корреляционная матрица):

$$
S(\rho) = -\text{Tr}(\rho \ln \rho) = -\sum_i \lambda_i \ln \lambda_i
$$

Максимальное значение $\ln N$ соответствует некоррелированным активам. $S(\rho)$ — единое число для оценки диверсификации портфеля.

## Python-реализация

```python
import numpy as np

def shannon_entropy_discrete(probs: np.ndarray, base: float = 2.0) -> float:
    """Энтропия Шеннона для дискретного распределения."""
    probs = np.asarray(probs, dtype=float)
    probs = probs[probs > 0]
    return float(-np.sum(probs * np.log(probs) / np.log(base)))

def kl_divergence(p: np.ndarray, q: np.ndarray) -> float:
    """KL-дивергенция D_KL(P || Q). Q должна быть строго положительной."""
    p, q = np.asarray(p, float), np.asarray(q, float)
    mask = p > 0
    return float(np.sum(p[mask] * np.log(p[mask] / q[mask])))

def mutual_information(
    x: np.ndarray,
    y: np.ndarray,
    bins: int = 20
) -> float:
    """Взаимная информация I(X;Y) через совместную гистограмму."""
    joint, _, _ = np.histogram2d(x, y, bins=bins, density=True)
    joint /= joint.sum()
    px = joint.sum(axis=1)
    py = joint.sum(axis=0)
    mask = joint > 0
    return float(np.sum(joint[mask] * np.log2(
        joint[mask] / (np.outer(px, py)[mask] + 1e-300)
    )))

def transfer_entropy(
    x: np.ndarray,
    y: np.ndarray,
    lag: int = 1,
    bins: int = 10
) -> float:
    """Трансферная энтропия T_{Y→X}."""
    n = len(x) - lag
    hist_xyz, _ = np.histogramdd(
        np.column_stack([x[lag:], x[:n], y[:n]]), bins=bins
    )
    hist_xz = hist_xyz.sum(axis=1)
    hist_z  = hist_xz.sum(axis=0)

    p_xyz = hist_xyz / (hist_xyz.sum() + 1e-300)
    p_xz  = hist_xz  / (hist_xz.sum()  + 1e-300)
    p_z   = hist_z   / (hist_z.sum()   + 1e-300)

    te = 0.0
    for i in range(bins):
        for j in range(bins):
            for k in range(bins):
                if p_xyz[i,j,k] > 0 and p_xz[i,k] > 0 and p_z[k] > 0:
                    te += p_xyz[i,j,k] * np.log2(
                        p_xyz[i,j,k] * p_z[k] / (p_xz[i,k] * 1e-300 +
                        p_xyz[i,:,k].sum() + 1e-300)
                    )
    return float(te)

def rolling_entropy(
    returns: np.ndarray,
    window: int = 60,
    bins: int = 20
) -> np.ndarray:
    """Скользящая энтропия доходностей как индикатор рыночного режима."""
    n = len(returns)
    result = np.full(n, np.nan)
    for i in range(window, n):
        counts, _ = np.histogram(returns[i-window:i], bins=bins)
        probs = counts / counts.sum()
        result[i] = shannon_entropy_discrete(probs)
    return result

# ---- Пример ----
np.random.seed(42)
returns = np.random.normal(0, 0.01, 500)
counts, _ = np.histogram(returns, bins=30)
probs = counts / counts.sum()
h = shannon_entropy_discrete(probs)
print(f"Энтропия доходностей: {h:.3f} бит")

roll_h = rolling_entropy(returns, window=60, bins=20)
print(f"Скользящая энтропия: среднее={np.nanmean(roll_h):.3f}")
```

## Динамика энтропии

```chart
{
  "type": "line",
  "xAxis": "period",
  "data": [
    {"period": "Q1 Спокойный", "entropy": 4.2, "volatility": 0.8},
    {"period": "Q2 Пред-кризис", "entropy": 3.5, "volatility": 1.4},
    {"period": "Q3 Кризис", "entropy": 2.9, "volatility": 2.8},
    {"period": "Q4 Восстановление", "entropy": 3.8, "volatility": 1.2},
    {"period": "Q5 Нормализация", "entropy": 4.1, "volatility": 0.9}
  ],
  "lines": [
    {"dataKey": "entropy", "stroke": "#8b5cf6", "name": "Энтропия (бит)"},
    {"dataKey": "volatility", "stroke": "#ef4444", "name": "Волатильность (%)"}
  ]
}
```

## Справочник параметров

| Символ | Название | Описание | Типичный диапазон |
| :--- | :--- | :--- | :--- |
| $H(X)$ | Энтропия Шеннона | Мера неопределённости распределения | 0 – $\log_2 n$ бит |
| $D_{KL}$ | KL-дивергенция | Расстояние между мерами $P$ и $Q$ | 0 – $\infty$ |
| $I(X;Y)$ | Взаимная информация | Нелинейная взаимозависимость | 0 – $\min(H(X), H(Y))$ |
| $T_{Y\to X}$ | Трансферная энтропия | Направленный информационный поток | 0 – $\infty$ |
| $S(\rho)$ | Энтропия Фон Неймана | Диверсификация через спектр корр. матрицы | 0 – $\ln N$ |
| $m$ | Число бинов | Дискретизация для оценки | 10 – 50 |

## Ограничения и расширения

- **Чувствительность к бинам:** Оценки через гистограммы зависят от числа бинов; метод k-ближайших соседей Красовского-Стоджилла даёт непараметрическую оценку без этого артефакта.
- **Стационарность:** Энтропия меняется со временем; скользящая оценка с окном 60–120 дней — стандартный индикатор режима рынка.
- **ApEn и SampEn:** Для коротких рядов (< 200 точек) применяются Approximate Entropy и Sample Entropy, устойчивые к шуму и не учитывающие самосовпадения.
- **Дифференциальная энтропия:** Для непрерывных распределений $h(X) = -\int p(x) \ln p(x)\,dx$; для нормального $\mathcal{N}(\mu, \sigma^2)$ равна $\frac{1}{2}\ln(2\pi e \sigma^2)$.

## Практические применения

1. **Детектирование рыночного режима:** Падение скользящей энтропии ниже порога сигнализирует о нарастающей предсказуемости — потенциальных торговых возможностях.
2. **Нелинейный отбор факторов:** Взаимная информация $I > 0$ между запаздывающими факторами и доходностями выявляет нелинейные предикторы.
3. **Диверсификация:** Энтропия Фон Неймана корреляционной матрицы даёт единственное число, монотонно убывающее при концентрации рисков.
4. **Информационные каскады:** Трансферная энтропия CDS → акции → облигации раскрывает порядок заражения при системных кризисах.

## Связанные темы
- [[lempel-ziv-complexity]]
- [[hidden-markov-models]]
- [[quantum-entanglement]]
- [[random-matrix-theory]]
- [[regime-switching-factors]]
