---
title: "News Sentiment Trading System"
category: "Algorithms and ML"
order: 65
lang: "en"
slug: "news-sentiment-trading"
---
# News Sentiment Trading System

A **News Sentiment Trading System** uses Natural Language Processing (NLP) to quantify the emotional tone of financial news, social media, or earnings call transcripts and use it as a signal for trading. In modern finance, this is known as "Alternative Alpha" or "Event-Driven Trading."

## Background and Motivation

Traditional quantitative signals derive from price and volume data. Alternative data — news, social media, satellite imagery, credit card transactions — offers orthogonal signals that are harder to arbitrage because they require significant NLP and data engineering infrastructure. The Loughran-McDonald (2011) finance-specific lexicon demonstrated that general-purpose sentiment dictionaries (e.g., Harvard General Inquirer) misclassify many finance terms, motivating domain-adapted approaches.

The FinBERT model (Araci, 2019), fine-tuned on financial news and analyst reports, represents the current state of the art for sentence-level sentiment classification. More recent work uses GPT-class models for zero-shot and few-shot financial sentiment analysis, enabling rapid deployment on novel event types without retraining.

## Practical Implementation Guide

1. **Data Ingestion**: Streaming news from providers like Bloomberg, Reuters, or scraping RSS feeds and social media.
2. **Preprocessing**: Tokenization, removing stop words, and entity recognition (identifying which ticker the news is about).
3. **Sentiment Scoring**:
   - **Lexicon-based**: Using financial-specific dictionaries like Loughran-McDonald.
   - **BERT/FinBERT**: Using [[transformer-architecture|Transformer]] models pre-trained on financial text for nuanced understanding.
4. **Signal Generation**: Aggregating scores over a window (e.g., 1 hour) and using a Z-score to identify sentiment shocks.

## Mathematical Formulation

The Sentiment Score $S_t$ for a ticker is the weighted average of $N$ news items:

$$
S_t = \frac{\sum_{i=1}^N w_i \cdot s_i}{\sum_{i=1}^N w_i}
$$

where $s_i \in [-1, +1]$ is the individual item's sentiment and $w_i$ is its relevance or reach (e.g., source authority score, social media impressions).

**Sentiment shock signal**: Normalize the score to detect abnormal sentiment:

$$
z_t = \frac{S_t - \bar{S}_{t-W:t}}{\sigma_{S,t-W:t}}
$$

A trade is triggered when $|z_t| > \tau$, typically $\tau \in [1.5, 2.5]$. The signal direction is $\text{sign}(z_t)$.

**Signal decay model**: Sentiment impact on returns decays exponentially:

$$
\alpha_t = A \cdot z_t \cdot e^{-\lambda (t - t_\text{event})}
$$

where $\lambda$ is the decay rate (typically corresponding to a half-life of 30–120 minutes for equity news). To filter out noise, one can use [[mcmc]] to model the latent "true" sentiment of the market. Synthetic news scenarios can be generated using [[gan]] to test the system's robustness to extreme events.

## NLP Pipeline Components

### Entity Linking
Map news text to ticker symbols using Named Entity Recognition (NER) followed by disambiguation against a securities master database. A single article may be relevant to multiple tickers with different impact magnitudes.

### Relevance Scoring
Not all mentions are equal. "Company X sued" is high relevance; "Company X mentioned in passing" is low relevance. Train a relevance classifier on labeled examples to weight $w_i$ appropriately.

### Aspect-Based Sentiment
Decompose sentiment by aspect: management quality, product launches, regulatory risk, earnings guidance. This provides richer signals than aggregate polarity and allows sector-specific models.

## Key Metrics

- **Sentiment Accuracy**: Correlation between sentiment score and immediate price reaction.
- **Signal Decay**: How long the sentiment impact lasts (usually minutes to hours for equities).
- **Sentiment Dispersion**: High disagreement between sources often indicates high volatility.
- **Coverage**: The number of symbols the system can actively monitor simultaneously.
- **Latency**: End-to-end time from news publication to trade signal generation.

## Python: Full Sentiment Pipeline

```python
import numpy as np
from collections import defaultdict

# Loughran-McDonald style lexicon (abbreviated)
LM_POSITIVE = {"strong", "exceed", "beat", "growth", "record", "improved", "gain"}
LM_NEGATIVE = {"loss", "decline", "miss", "risk", "weak", "cut", "default", "concern"}

def lexicon_sentiment(text):
    """Simple Loughran-McDonald lexicon-based sentiment scorer."""
    tokens = text.lower().split()
    pos = sum(1 for t in tokens if t in LM_POSITIVE)
    neg = sum(1 for t in tokens if t in LM_NEGATIVE)
    total = pos + neg
    if total == 0:
        return 0.0
    return (pos - neg) / total


def compute_sentiment_zscore(scores, window=20):
    """
    Compute rolling z-score of sentiment to detect shocks.
    scores: list of (timestamp, sentiment_value) tuples
    """
    if len(scores) < window:
        return None
    recent = [s for _, s in scores[-window:]]
    current = recent[-1]
    mean = np.mean(recent[:-1])
    std = np.std(recent[:-1])
    if std < 1e-6:
        return 0.0
    return (current - mean) / std


def aggregate_ticker_sentiment(news_items, ticker, window_minutes=60):
    """
    news_items: list of {'text': str, 'ticker': str, 'timestamp': float,
                         'source_weight': float}
    Returns weighted average sentiment for ticker in past window_minutes.
    """
    now = max(item['timestamp'] for item in news_items)
    cutoff = now - window_minutes * 60

    relevant = [
        item for item in news_items
        if item['ticker'] == ticker and item['timestamp'] >= cutoff
    ]

    if not relevant:
        return 0.0

    total_weight = sum(item['source_weight'] for item in relevant)
    weighted_sentiment = sum(
        item['source_weight'] * lexicon_sentiment(item['text'])
        for item in relevant
    )
    return weighted_sentiment / total_weight if total_weight > 0 else 0.0


# FinBERT inference (requires transformers + torch)
def get_finbert_sentiment(text):
    """
    Returns dict with probabilities for positive/negative/neutral.
    Requires: pip install transformers torch
    """
    try:
        from transformers import pipeline
        pipe = pipeline(
            "text-classification",
            model="ProsusAI/finbert",
            return_all_scores=True
        )
        result = pipe(text[:512])[0]
        scores = {item['label'].lower(): item['score'] for item in result}
        # Return signed sentiment: positive - negative
        return scores.get('positive', 0) - scores.get('negative', 0)
    except ImportError:
        return lexicon_sentiment(text)


# Example
headlines = [
    {'text': 'Company reports record earnings beat guidance strong growth',
     'ticker': 'AAPL', 'timestamp': 1000.0, 'source_weight': 1.5},
    {'text': 'Analysts cut target on weak outlook risk of revenue miss',
     'ticker': 'AAPL', 'timestamp': 1020.0, 'source_weight': 1.0},
]

agg = aggregate_ticker_sentiment(headlines, 'AAPL')
print(f"Aggregated sentiment for AAPL: {agg:.4f}")
```

## Financial Context

Sentiment analysis is vital for **Event-Driven Hedge Funds**. Identifying a CEO's tone change in an earnings call can precede a stock's downward trend. Key risk management considerations:
- Sentiment signals are most powerful in the first 15–30 minutes after publication; decay is rapid.
- **Fake news risk**: Adversarial actors may plant false sentiment signals. Robustness testing with [[gan]]-generated synthetic scenarios is essential.
- Position limits based on [[value-at-risk]] must account for gap risk during sentiment-driven moves.

## Parameter Table

| Parameter | Description | Typical Value |
|:---|:---|:---|
| $W$ | Rolling window for z-score | $20 – 100$ news items |
| $\tau$ | Signal trigger threshold | $1.5 – 2.5\sigma$ |
| $\lambda$ | Sentiment decay rate | Half-life $30 – 120$ min |
| Source weight | Authority score of news source | $0.5 – 2.0$ |
| Latency target | Max acceptable delay | $<500$ ms |

## Limitations and Extensions

- **Sarcasm and irony**: [[transformer-architecture|Transformer]] models still struggle with financial sarcasm (e.g., "great, another earnings miss").
- **Multilingual news**: Non-English sources require multilingual BERT or machine translation, both adding latency and error.
- **Market impact**: If many funds use the same sentiment signal, the alpha decays as the signal becomes crowded.
- **Regulatory risk**: Trading on material non-public information derived from news scraping can violate securities laws in some jurisdictions.

## Related Topics
- [[alternative-data-alpha]]
- [[mcmc]]
- [[gan]]
- [[value-at-risk]]
- [[meta-labeling]]
