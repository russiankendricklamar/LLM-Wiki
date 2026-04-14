---
title: "Торговая система на анализе новостей"
category: "Алгоритмы и ML"
order: 65
lang: "ru"
slug: "news-sentiment-trading"
---
# Торговая система на анализе новостей (News Sentiment Trading)

**Система торговли на анализе новостей (Sentiment Trading)** использует обработку естественного языка (NLP) для количественной оценки эмоционального тона финансовых новостей, социальных сетей или отчетов компаний. В современных финансах это часть «Альтернативной альфы» или событийного трейдинга (Event-Driven Trading).

## История и мотивация

Ранние исследования (Tetlock, 2007; Engelberg & Parsons, 2011) показали, что негативный тон новостей в Wall Street Journal предсказывает доходность акций через несколько торговых дней. Разработка Loughran-McDonald (2011) специализированного финансового словаря значительно улучшила точность по сравнению с общими лексиконами (Harvard GI). Появление трансформерных моделей (FinBERT, 2019) и LLM позволило автоматически захватывать нюансированный контекст, недоступный частотным методам.

## Математическая формулировка

### Агрегированный сентимент

Оценка сентимента $S_t$ для актива как средневзвешенное $N$ новостей:

$$
S_t = \frac{\sum_{i=1}^N w_i \cdot s_i}{\sum_{i=1}^N w_i}
$$

где $s_i \in [-1, +1]$ — сентимент отдельной новости, $w_i$ — функция охвата или неожиданности.

### Затухание сигнала

Экспоненциальная модель затухания для прогнозирующей силы сентимента:

$$
\alpha_t(\tau) = \alpha_0 \cdot e^{-\lambda \tau}
$$

где $\tau$ — время с публикации, $\lambda > 0$ — скорость затухания. Для рынков ликвидных акций $1/\lambda \approx 15$–$60$ минут; для малоликвидных активов — часы или дни.

### Z-оценка нормализованного сентимента

$$
z_t = \frac{S_t - \mu_S^{(w)}}{\sigma_S^{(w)}}
$$

где $\mu_S^{(w)}$, $\sigma_S^{(w)}$ — скользящее среднее и стандартное отклонение сентимента за окно $w$. Сигнал к торговле при $|z_t| > \tau_z$.

## NLP-конвейер: компоненты

| Компонент | Задача | Метод |
|:---|:---|:---|
| Токенизация | Разбиение текста | WordPiece, SentencePiece |
| Распознавание сущностей (NER) | Связывание с тикерами | spaCy, FinBERT-NER |
| Оценка релевантности | Тема = финансы? | Бинарный классификатор |
| Оценка сентимента | Позитив / Негатив / Нейтраль | Loughran-McDonald, FinBERT |
| Разрешение сущностей | Новость → правильный тикер | Поиск в базе символов |
| Весовая функция | Охват, неожиданность | Логарифм числа источников |

## Python: Агрегация и Z-оценка сентимента

```python
import numpy as np
import pandas as pd
from collections import defaultdict


def aggregate_ticker_sentiment(news_items: list[dict], decay_halflife_min: float = 30.0) -> dict:
    """
    Агрегирует новостные элементы по тикеру с экспоненциальным затуханием.
    news_items: список {"ticker", "score", "timestamp", "coverage"}
    Возвращает: {ticker: взвешенный_сентимент}
    """
    decay_lambda = np.log(2) / decay_halflife_min
    now_ts = max(item["timestamp"] for item in news_items)

    ticker_scores = defaultdict(list)
    ticker_weights = defaultdict(list)

    for item in news_items:
        age_min = (now_ts - item["timestamp"]) / 60.0
        decay_w = np.exp(-decay_lambda * age_min)
        coverage_w = np.log1p(item.get("coverage", 1))
        w = decay_w * coverage_w
        ticker_scores[item["ticker"]].append(item["score"] * w)
        ticker_weights[item["ticker"]].append(w)

    return {
        ticker: sum(ticker_scores[ticker]) / sum(ticker_weights[ticker])
        for ticker in ticker_scores
        if sum(ticker_weights[ticker]) > 0
    }


def compute_sentiment_zscore(sentiment_series: pd.Series, window: int = 60) -> pd.Series:
    """
    Рассчитывает скользящий Z-score сентимента.
    sentiment_series: временной ряд агрегированного сентимента (индексирован по времени)
    window: длина скользящего окна в периодах
    """
    rolling_mean = sentiment_series.rolling(window=window, min_periods=max(1, window // 4)).mean()
    rolling_std = sentiment_series.rolling(window=window, min_periods=max(1, window // 4)).std()
    z = (sentiment_series - rolling_mean) / rolling_std.replace(0, np.nan)
    return z.fillna(0.0)


# Синтетический пример
import time
np.random.seed(42)
n = 200
ts_base = int(time.time())

news = [
    {
        "ticker": np.random.choice(["AAPL", "MSFT", "NVDA"]),
        "score": np.random.uniform(-1, 1),
        "timestamp": ts_base - np.random.randint(0, 3600),
        "coverage": np.random.randint(1, 50),
    }
    for _ in range(n)
]

agg = aggregate_ticker_sentiment(news, decay_halflife_min=30.0)
print("Агрегированный сентимент:", agg)

# Z-оценка по временному ряду
rng = pd.date_range("2024-01-01", periods=252, freq="B")
sent_series = pd.Series(np.random.randn(252) * 0.3, index=rng)
z_scores = compute_sentiment_zscore(sent_series, window=60)
signals = z_scores[z_scores.abs() > 1.5]
print(f"\nСигналов при |z| > 1.5: {len(signals)} из {len(z_scores)}")
```

## Таблица параметров

| Параметр | Описание | Типичное значение |
|:---|:---|:---|
| Полупериод затухания | Скорость устаревания сигнала | 15–60 мин (ликвидные акции) |
| Окно Z-оценки | Горизонт нормализации | 30–120 наблюдений |
| Порог $\tau_z$ | Минимальный Z-score для сигнала | 1.5–2.5 |
| Охват $w_i$ | Логарифм числа источников | $\ln(1 + N_\text{источников})$ |
| Модель сентимента | Словарь vs. трансформер | FinBERT для точности |

## Финансовый контекст и ограничения

- **Событийные хедж-фонды** используют аномалии тональности CEO на телеконференциях для прогнозирования движений до публикации GAAP-цифр.
- **HFT**: сентимент обычно запаздывает относительно цены на рынках с высокой ликвидностью.
- **Риск фейков**: модели требуют детекторов аномалий для выявления скоординированных манипуляций в соцсетях.
- **Размытость сущностей**: «Apple» может означать корпорацию или фрукт — NER должен разрешать контекстно.
- **Языковой дрейф**: финансовый жаргон меняется; модели требуют дообучения или ансамблирования.

## Связанные темы
- [[alternative-data-alpha]]
- [[mcmc]]
- [[gan]]
- [[value-at-risk]]
- [[meta-labeling]]
