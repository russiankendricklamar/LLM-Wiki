---
title: "LLM for Financial Analysis"
category: "AI × Finance"
order: 1
lang: "en"
slug: "llm-financial-analysis"
---
# LLM for Financial Analysis

## Overview

Financial analysis has long relied on structured numerical data: price series, accounting ratios, factor loadings. Yet the majority of market-relevant information arrives as unstructured text — earnings call transcripts, 10-K risk factors, central bank statements, analyst reports, news wires. Extracting structured signals from this corpus at scale was the domain of rule-based NLP and supervised classifiers trained on hand-labelled datasets.

Large Language Models (LLMs) change the economics of this extraction dramatically. A single general-purpose model can perform earnings analysis, covenant extraction, management tone assessment, and competitive benchmarking with minimal task-specific fine-tuning. The bottleneck shifts from model development to prompt engineering, retrieval pipeline design, and hallucination mitigation.

This article covers the technical machinery for deploying LLMs in quantitative financial workflows: domain-specific models, retrieval-augmented generation (RAG) over SEC filings, structured JSON output for trading signal construction, tool use for live data, and rigorous evaluation on financial reasoning benchmarks.

## Mathematical Framework

### Information Extraction as Conditional Generation

Given a financial document $D$ and a task specification $T$ (e.g., "extract revenue guidance range"), the LLM computes:

$$
P(\text{answer} \mid D, T) = \prod_{i=1}^{n} P(a_i \mid a_{<i}, D, T)
$$

Prompt engineering manipulates the conditioning context $T$ to elicit factual, calibrated outputs. The key challenge is that $P(\text{answer} \mid D, T)$ can assign high probability to plausible-sounding but incorrect completions — the hallucination problem.

### Retrieval-Augmented Generation

For corpora too large to fit in context, RAG decomposes the problem:

$$
P(\text{answer} \mid Q, \mathcal{C}) = \sum_{d \in \text{Retrieve}(Q, \mathcal{C})} P(\text{answer} \mid Q, d) \cdot P(d \mid Q, \mathcal{C})
$$

where $\text{Retrieve}(Q, \mathcal{C})$ selects top-$k$ document chunks from corpus $\mathcal{C}$ by embedding similarity:

$$
\text{sim}(Q, d) = \frac{\mathbf{e}_Q \cdot \mathbf{e}_d}{\|\mathbf{e}_Q\| \|\mathbf{e}_d\|}
$$

For financial documents, retrieval quality is improved by chunk-level metadata filtering (company ticker, filing date, section type) before cosine similarity ranking.

### Structured Output via JSON Schema Enforcement

Constrained decoding steers generation toward a predefined JSON schema. For a token vocabulary $V$ and partial output $a_{<i}$, only tokens consistent with the schema are permitted:

$$
P(a_i \mid a_{<i}, \text{schema}) \propto P(a_i \mid a_{<i}) \cdot \mathbb{1}[\text{valid}(a_{<i} \oplus a_i, \text{schema})]
$$

This is implemented via grammar-constrained sampling (llama.cpp, Outlines, Instructor library) or via the `response_format` parameter in the Anthropic and OpenAI APIs.

## Domain-Specific Models

### FinBERT

Fine-tuned BERT on financial phrase bank and FiQA, optimised for **financial sentiment classification**. Achieves ~88% accuracy on 3-class sentiment vs. 75% for general BERT. Appropriate for high-throughput news headline tagging.

### BloombergGPT

A 50B-parameter decoder model trained on a proprietary Bloomberg dataset of 363B tokens (financial texts) combined with 345B general web tokens. Outperforms same-size GPT models on FinQA, headline classification, and NER, while retaining general language capability. Not publicly available.

### FinGPT

Open-source alternative: fine-tuned LLaMA / Falcon on curated financial text using LoRA (Low-Rank Adaptation). Trainable on a single A100 GPU. The FinGPT pipeline includes automated data collection from SEC EDGAR, Bloomberg, Reuters, and Reddit, and supports continual learning as new filings arrive.

### General-Purpose LLMs with Financial Prompting

GPT-4, Claude 3.5/3.7, and Gemini Ultra demonstrate strong financial reasoning out-of-the-box when given well-structured prompts. The primary advantage over domain-specific models is breadth: they can handle novel document types without fine-tuning.

## Architecture / Algorithm

### RAG Pipeline for SEC Filings

```
SEC EDGAR API
      │
      ▼
 HTML → plain text → chunk(512 tokens, 128 overlap)
      │
      ▼
 Embed (text-embedding-3-large / voyage-finance-2)
      │
      ▼
 Vector store (Pinecone / pgvector / FAISS)
      │
      ▼
 Query → embed → top-k retrieve → rerank (cross-encoder)
      │
      ▼
 Prompt: [system] + [retrieved chunks] + [user question]
      │
      ▼
 LLM generate → structured JSON → trading signal
```

### Tool Use for Live Data

LLMs can be equipped with tools (function calling) to retrieve live price data, earnings calendars, and options chains. The model emits a structured tool call; the host executes it and returns results, which are appended to context before final generation. This eliminates the stale-knowledge problem for time-sensitive analysis.

## Python Implementation

```python
import anthropic
import json
from typing import Any

client = anthropic.Anthropic()

SYSTEM_PROMPT = """You are a quantitative analyst specialising in earnings analysis.
Extract structured information from earnings call transcripts and SEC filings.
Return ONLY valid JSON matching the provided schema. Never fabricate numbers.
If a value cannot be found, return null for that field."""

EARNINGS_SCHEMA = {
    "revenue_guidance_low_mm": "number or null",
    "revenue_guidance_high_mm": "number or null",
    "eps_guidance_low": "number or null",
    "eps_guidance_high": "number or null",
    "management_tone": "bullish | neutral | bearish",
    "key_risks": ["string"],
    "capex_change_yoy_pct": "number or null",
    "buyback_authorised_mm": "number or null",
}

def analyse_earnings_transcript(transcript_excerpt: str, ticker: str) -> dict[str, Any]:
    """Extract structured trading-relevant data from an earnings transcript."""
    prompt = f"""Ticker: {ticker}

Earnings call excerpt:
{transcript_excerpt}

Extract the following JSON (use null for missing values):
{json.dumps(EARNINGS_SCHEMA, indent=2)}

JSON output:"""

    message = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=1024,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": prompt}],
    )

    raw = message.content[0].text.strip()
    # Strip markdown code fences if present
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]

    try:
        result = json.loads(raw)
    except json.JSONDecodeError as e:
        raise ValueError(f"LLM returned non-JSON output: {e}\nRaw: {raw}") from e

    return result


def assess_guidance_surprise(
    extracted: dict[str, Any],
    consensus_revenue_mm: float,
    consensus_eps: float,
) -> dict[str, float | str]:
    """Compute guidance surprise relative to sell-side consensus."""
    surprises: dict[str, float | str] = {}

    rev_low = extracted.get("revenue_guidance_low_mm")
    rev_high = extracted.get("revenue_guidance_high_mm")
    if rev_low is not None and rev_high is not None:
        rev_mid = (rev_low + rev_high) / 2
        surprises["revenue_surprise_pct"] = round(
            (rev_mid - consensus_revenue_mm) / consensus_revenue_mm * 100, 2
        )

    eps_low = extracted.get("eps_guidance_low")
    eps_high = extracted.get("eps_guidance_high")
    if eps_low is not None and eps_high is not None:
        eps_mid = (eps_low + eps_high) / 2
        surprises["eps_surprise_pct"] = round(
            (eps_mid - consensus_eps) / abs(consensus_eps) * 100, 2
        )

    surprises["tone"] = extracted.get("management_tone", "neutral")
    return surprises


# ── Example usage ─────────────────────────────────────────────────────────────
sample_transcript = """
We are guiding full-year revenue in the range of $4.2 billion to $4.4 billion,
representing approximately 12 percent growth at the midpoint. EPS guidance is
$3.10 to $3.25. The board has authorised an additional $500 million share
repurchase programme. Our primary risks remain supply-chain disruptions and
continued softness in the European market.
"""

extracted = analyse_earnings_transcript(sample_transcript, "ACME")
signal = assess_guidance_surprise(extracted, consensus_revenue_mm=4100, consensus_eps=3.05)
# signal => {"revenue_surprise_pct": 4.88, "eps_surprise_pct": 5.74, "tone": "bullish"}
```

## Key Results and Performance

**FinQA benchmark** (numerical reasoning over financial reports): GPT-4 achieves ~68% execution accuracy; BloombergGPT 43%; FinBERT-style encoder models below 30%. Claude 3.7 Sonnet (2025) surpasses 70% with chain-of-thought prompting.

**ConvFinQA** (multi-turn financial QA): GPT-4 ~77% with RAG; without retrieval drops to ~61%, demonstrating the critical importance of grounding.

**Sentiment classification** (FPB dataset): FinBERT 88%, GPT-4 zero-shot 84%, general BERT 75%.

**Hallucination rates in financial tasks**: Studies report 8–15% of specific numerical claims by general LLMs are incorrect when no retrieval is used. With strict RAG + source citation grounding, hallucination rates drop to 2–4%.

## Limitations

**Hallucination risk**: LLMs can confidently produce plausible but incorrect financial figures. Mitigation requires grounding every numerical claim to a retrieved source and performing sanity checks (e.g., revenue guidance must be within 50% of trailing twelve months).

**Context window economics**: A full 10-K runs 80–150K tokens. GPT-4 Turbo (128K) can ingest it, but inference cost is high for batch processing of thousands of filings.

**Timeliness**: Knowledge cut-off means models cannot reason about very recent events without RAG or tool use.

**Regulatory liability**: Automated investment signals derived from LLM output require human-in-the-loop oversight and clear audit trails to satisfy MiFID II suitability requirements.

**Adversarial inputs**: Earnings calls are curated communications; models trained to extract positive signals may be systematically misled by management spin, requiring tone-of-hedge and uncertainty detection layers.

## Applications in Practice

**Earnings event trading**: Automated extraction of revenue and EPS guidance moments after transcript release, compared against consensus to generate surprise scores within seconds of the call ending.

**Credit covenant surveillance**: Continuous ingestion of loan amendment filings to flag potential covenant breaches before they become credit events.

**Regulatory filing monitoring**: RAG over 8-K filings to detect material disclosures (litigation, executive departures, asset write-downs) that warrant portfolio review.

**Macro research synthesis**: Aggregating central bank speeches, IMF outlooks, and academic papers into standardised factor views for systematic macro strategies.

**Counterparty due diligence**: Extracting risk disclosures and financial summaries from counterparty annual reports to feed credit limit models.

## Related Topics

[[news-sentiment-trading]] — downstream application of LLM sentiment scores in alpha models

[[temporal-fusion-transformer]] — structured numerical forecasting that can consume LLM-derived features

[[generative-scenario-models]] — generating stress scenarios, a complementary LLM application

[[gnn-credit-risk]] — GNN-based credit risk models that can be augmented with LLM-extracted covenants

[[value-at-risk]] — risk measures that LLM-derived signals can feed into
