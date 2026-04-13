---
title: "News Sentiment Trading System"
category: "Algorithms and ML"
order: 124
lang: "en"
slug: "news-sentiment-trading"
---
# News Sentiment Trading System

A **News Sentiment Trading System** uses Natural Language Processing (NLP) to quantify the emotional tone of financial news, social media, or earnings call transcripts and use it as a signal for trading. In modern finance, this is known as "Alternative Alpha" or "Event-Driven Trading."

## Practical Implementation Guide

1.  **Data Ingestion**: Streaming news from providers like Bloomberg, Reuters, or scraping RSS feeds and Twitter (X).
2.  **Preprocessing**: Tokenization, removing stop words, and entity recognition (identifying which ticker the news is about).
3.  **Sentiment Scoring**:
    *   **Lexicon-based**: Using financial-specific dictionaries like Loughran-McDonald.
    *   **BERT/FinBERT**: Using Transformer models pre-trained on financial text for nuanced understanding.
4.  **Signal Generation**: Aggregating scores over a window (e.g., 1 hour) and using a Z-score to identify sentiment shocks.

## Mathematical Formulation

The Sentiment Score $S_t$ for a ticker is the weighted average of $N$ news items:
$$
S_t = \frac{\sum_{i=1}^N w_i \cdot s_i}{\sum w_i}
$$
where $s_i$ is the individual item's sentiment and $w_i$ is its relevance or reach. To filter out noise, one can use [[mcmc]] to model the latent "true" sentiment of the market. Synthetic news scenarios can be generated using [[gan]] to test the system's robustness to fake news or extreme events.

## Key Metrics
- **Sentiment Accuracy**: Correlation between sentiment score and immediate price reaction.
- **Signal Decay**: How long the sentiment impact lasts (usually minutes to hours).
- **Sentiment Dispersion**: High disagreement between sources often indicates high volatility.
- **Coverage**: The number of symbols the system can actively monitor.

## Python: FinBERT Sentiment Inference

```python
# Note: Requires 'transformers' and 'torch'
from transformers import BertTokenizer, BertForSequenceClassification
import torch

def get_sentiment(text):
    tokenizer = BertTokenizer.from_pretrained('ProsusAI/finbert')
    model = BertForSequenceClassification.from_pretrained('ProsusAI/finbert')
    
    inputs = tokenizer(text, return_tensors="pt", padding=True)
    outputs = model(**inputs)
    
    # Probabilities for [positive, negative, neutral]
    probs = torch.nn.functional.softmax(outputs.logits, dim=-1)
    return probs.detach().numpy()

text = "Federal Reserve signals potential rate cuts by summer, boosting market confidence."
scores = get_sentiment(text)
print(f"FinBERT Sentiment (Pos/Neg/Neu): {scores}")
```

## Financial Context

Sentiment analysis is vital for **Event-Driven Hedge Funds**. For example, identifying a CEO's tone change in an earnings call can precede a stock's downward trend. However, sentiment often lags price in high-frequency environments. Risk managers use [[value-at-risk]] to prepare for "black swan" events triggered by viral negative news.

## Related Topics
- [[alternative-data-alpha]]
- [[mcmc]]
- [[gan]]
- [[value-at-risk]]
---
