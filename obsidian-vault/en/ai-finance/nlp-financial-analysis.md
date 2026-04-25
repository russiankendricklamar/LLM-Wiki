---
title: "NLP for Financial Analysis"
category: "AI Finance"
order: 8
lang: "en"
slug: "nlp-financial-analysis"
growth: "seedling"
---
# NLP for Financial Analysis

## Overview

Financial markets generate vast volumes of unstructured text: quarterly earnings calls, 10-K and 8-K SEC filings, analyst reports, central bank minutes, news wires, and social media. Extracting structured, tradeable signals from this corpus has been a core research area since the 2000s, progressing from bag-of-words sentiment dictionaries (Loughran-McDonald, 2011) through fine-tuned transformers (FinBERT, 2019) to modern large language models capable of nuanced financial reasoning.

NLP signals are **alternative data** in the sense that they are orthogonal to price-volume information and classical accounting factors, providing incremental alpha that diversifies a factor portfolio. Event-driven strategies — trading the announcement of an 8-K material event or an earnings guidance revision — rely entirely on fast, accurate text parsing.

## Mathematical Framework

### Sentiment as a Latent Variable

Let $D_t$ be a financial document at time $t$ (e.g., an earnings call transcript). The underlying management sentiment $\psi_t \in \{-1, 0, +1\}$ (bearish, neutral, bullish) is a latent variable. A classifier $p_\theta(\psi \mid D_t)$ approximates the posterior. The trading signal is:

$$
z_t = \mathbb{E}_{p_\theta}[\psi \mid D_t] = p_\theta(\psi=+1 \mid D_t) - p_\theta(\psi=-1 \mid D_t)
$$

For returns prediction, we model:

$$
r_{t+\Delta} = \beta_0 + \beta_1 z_t + \beta_2 z_t^{\text{surprise}} + \varepsilon_t
$$

where $z_t^{\text{surprise}} = z_t - \mathbb{E}[z_t \mid \text{prior calls}]$ captures the sentiment revision relative to the historical baseline.

### FinBERT [[fine-tuning]]

FinBERT (Yang et al., 2020) is BERT pre-trained on Reuters, 10-K filings, and earnings calls. The classification head computes:

$$
p(\psi \mid D) = \text{softmax}(W_c \cdot \text{CLS}(D) + b_c)
$$

where CLS$(D)$ is the [CLS] token embedding after BERT encoding. [[fine-tuning]] minimises cross-[[shannon-entropy|entropy]] on a labelled financial phrase bank:

$$
\mathcal{L} = -\sum_{i} \log p_\theta(\psi_i^* \mid D_i)
$$

FinBERT achieves ~88% accuracy on 3-class financial sentiment, compared to ~75% for general BERT.

### [[llm]]-Based Information Extraction

For structured extraction from 8-K filings, an [[llm]] computes:

$$
P(\text{fields} \mid D, \text{schema}) \propto \prod_{j} P(\text{field}_j \mid D, \text{schema}, \text{fields}_{<j})
$$

Constrained decoding enforces JSON schema compliance at the token level. See [[llm-financial-analysis]] for the full [[rag]] pipeline architecture.

### Event-Driven Return Model

Around a material event (FDA approval, M&A announcement, earnings beat), abnormal return is:

$$
\text{CAR}_{[t_1, t_2]} = \sum_{t=t_1}^{t_2} (r_t - r_t^{\text{mkt}})
$$

NLP signal quality is measured by the ability to predict the sign and magnitude of CAR in the minutes following document release, before prices fully incorporate the information.

## Sentiment Signal Accuracy by Model

```chart
{
  "type": "bar",
  "xAxis": "model",
  "data": [
    {"model": "L-M Dict", "sentiment_acc": 71, "event_precision": 52, "f1": 61},
    {"model": "Gen. BERT", "sentiment_acc": 75, "event_precision": 58, "f1": 66},
    {"model": "FinBERT", "sentiment_acc": 88, "event_precision": 69, "f1": 78},
    {"model": "BloombergGPT", "sentiment_acc": 82, "event_precision": 72, "f1": 77},
    {"model": "GPT-4 CoT", "sentiment_acc": 85, "event_precision": 78, "f1": 81},
    {"model": "Claude + [[rag]]", "sentiment_acc": 86, "event_precision": 81, "f1": 83}
  ],
  "lines": [
    {"dataKey": "sentiment_acc", "stroke": "#3b82f6", "name": "Sentiment Accuracy %"},
    {"dataKey": "event_precision", "stroke": "#10b981", "name": "Event Extraction Precision %"},
    {"dataKey": "f1", "stroke": "#f59e0b", "name": "F1 Score %"}
  ]
}
```

## Key NLP Approaches

### Loughran-McDonald Dictionary

A financial-domain word list (positive/negative/uncertainty/litigious) used for simple bag-of-words sentiment. Fast and interpretable but misses context, irony, and complex sentence structure. A standard academic baseline for comparison.

### FinBERT and Domain-Adapted Transformers

[[transformer-architecture|Transformer]] models pre-trained on financial text capture contextual semantics. Key advantages: handling of negation ("not expecting strong growth"), financial jargon, and multi-clause sentences. BloombergGPT (50B params, 363B finance tokens) extends this to generation and complex reasoning tasks.

### 10-K / 8-K Mining

SEC EDGAR provides machine-readable XML filings since 2009. Key extraction targets:
- **Risk factor changes**: year-over-year diff of Item 1A to detect new disclosed risks
- **MD&A tone**: management discussion sentiment correlated with next-quarter earnings
- **Material events (8-K)**: item type classification (M&A, restatement, CEO change) within seconds of filing

### Earnings Call Analysis

Calls consist of management prepared remarks followed by analyst Q&A. Research shows the Q&A section carries more incremental information than the scripted portion. Signal construction involves:
1. Speaker diarisation (management vs analyst)
2. Forward-looking statement detection
3. Uncertainty word frequency (hedging phrases)
4. Tone shift between calls

### Alternative Data: Reddit and Twitter

Social media sentiment from Reddit (WallStreetBets) and Twitter/X provides a retail investor sentiment signal. Key challenges:
- **Bot filtering**: adversarial accounts pump sentiment on specific tickers
- **Survivorship bias**: historical tweet data is incomplete and expensive
- **Market impact of signals**: if the signal is widely used, it gets arbed away rapidly

Reddit r/WallStreetBets demonstrated in 2021 that coordinated retail sentiment can temporarily override institutional fundamental views on small-cap names.

## Python Implementation

```python
from transformers import pipeline, AutoTokenizer, AutoModelForSequenceClassification
import torch
from dataclasses import dataclass

@dataclass(frozen=True)
class SentimentResult:
    label: str
    score: float
    signal: float   # +1 bullish, 0 neutral, -1 bearish

class FinancialSentimentAnalyser:
    """FinBERT-based sentiment pipeline for financial text."""

    LABEL_MAP = {"positive": 1.0, "neutral": 0.0, "negative": -1.0}

    def __init__(self, model_name: str = "ProsusAI/finbert") -> None:
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)
        self.model = AutoModelForSequenceClassification.from_pretrained(model_name)
        self.model.eval()
        self.pipe = pipeline(
            "text-classification",
            model=self.model,
            tokenizer=self.tokenizer,
            device=0 if torch.cuda.is_available() else -1,
            return_all_scores=True,
        )

    def analyse(self, text: str, max_chunk_tokens: int = 512) -> SentimentResult:
        """Chunk long documents and aggregate sentiment by weighted average."""
        tokens = self.tokenizer.encode(text, add_special_tokens=False)
        chunks = [
            self.tokenizer.decode(tokens[i : i + max_chunk_tokens])
            for i in range(0, len(tokens), max_chunk_tokens)
        ]
        all_scores: list[dict[str, float]] = []
        for chunk in chunks:
            scores = self.pipe(chunk, truncation=True, max_length=512)[0]
            all_scores.append({s["label"]: s["score"] for s in scores})

        # Average across chunks
        agg = {
            label: sum(s.get(label, 0.0) for s in all_scores) / len(all_scores)
            for label in ("positive", "neutral", "negative")
        }
        best_label = max(agg, key=lambda k: agg[k])
        signal = sum(self.LABEL_MAP[lbl] * score for lbl, score in agg.items())
        return SentimentResult(label=best_label, score=agg[best_label], signal=signal)


def compute_earnings_surprise_signal(
    current_sentiment: float,
    historical_sentiments: list[float],
    n_baseline: int = 4,
) -> float:
    """Sentiment surprise = current minus trailing-N average."""
    if len(historical_sentiments) < n_baseline:
        return current_sentiment
    baseline = sum(historical_sentiments[-n_baseline:]) / n_baseline
    return current_sentiment - baseline
```

## Key Results

**Loughran & McDonald (2011)**: Financial-specific word lists outperform Harvard General Inquirer on stock return prediction, showing domain vocabulary matters. Positive word frequency in 10-K predicts positive abnormal returns in the subsequent month.

**FinBERT (Yang et al., 2020)**: 15 percentage point improvement over general BERT on financial phrase bank sentiment. The improvement is concentrated in hedging/uncertainty sentences where general models fail.

**Earnings call NLP alpha (Li et al., 2021)**: A long-short strategy based on earnings call sentiment achieves 3–5% annualised abnormal return with Sharpe ~0.7, surviving controls for momentum and value factors.

**8-K event classification (Kogan et al., 2022)**: [[transformer-architecture|Transformer]] classifiers achieve 94% accuracy in identifying the type of material event from 8-K filing text within 200ms of EDGAR posting, enabling event-driven strategies that capture price impact before full price discovery.

## Limitations and Challenges

**Market impact of signals**: As NLP signals become standard practice, returns diminish rapidly. The advantage shifts to speed (faster parsing) and coverage (more obscure documents).

**Earnings call staging**: Management teams are aware of analyst NLP tools and actively manage tone. Some research documents "strategic obfuscation" — using longer, more complex sentences when disclosing negative news.

**Language and locale**: Most models are trained on US English filings. Cross-border application to European or Asian filings requires domain adaptation.

**Regulatory considerations**: Using material non-public information (MNPI), even extracted by NLP, violates securities law. Legal review of data sources is mandatory before deployment.

## Related Topics

[[llm-financial-analysis]] — full LLM pipeline for structured information extraction

[[temporal-fusion-transformer]] — forecasting framework that can consume NLP-derived features

[[alpha-factor-research]] — factor construction incorporating NLP signals

generative-models-scenario — scenario generation informed by narrative analysis
