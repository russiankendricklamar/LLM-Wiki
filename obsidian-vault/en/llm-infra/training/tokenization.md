---
title: "Tokenization"
category: "LLM Infrastructure"
order: 9
lang: "en"
slug: "tokenization"
growth: "seedling"
---

# Tokenization

Tokenization is the process of converting raw text into the discrete integer sequence that Large Language Models (LLMs) actually train and generate over. It is the boundary between the continuous world of text and the discrete world of vocabulary indices. Poor tokenization choices ripple through inference latency, context window capacity, and generalization.

## Why Not Characters or Words?

- **Characters**: Vocabulary of ~200, but sequences become very long (~5× typical word tokenization), making self-[[attention-mechanisms|attention]] expensive ($O(n^2)$) and long-range dependencies harder to learn.
- **Words**: Vocabulary explodes with morphology (tens of millions of variants), rare words become `<UNK>`, and there is no sub-word sharing (e.g., "smart", "smarter", "smartest").
- **Sub-word**: The dominant compromise. Common words are single tokens, rare words split into meaningful pieces. Vocabulary stays manageable (32K–200K).

## Common Algorithms

### 1. Byte-Pair Encoding (BPE)
BPE (Sennrich et al., 2016) is the dominant algorithm in models like GPT-2/3/4 and Llama. It iteratively merges the most frequent adjacent pair of tokens.
- **Byte-level BPE**: Starts from 256 individual bytes rather than characters. This ensures that *any* string can be tokenized without unknown tokens.

### 2. WordPiece
Used in BERT. Similar to BPE but use a **likelihood ratio** to choose merges, favoring pairs that are more "surprising" when they appear together versus apart.

### 3. Unigram Language Model
Used in SentencePiece (T5, Llama). Instead of greedy merges, it starts with a massive vocabulary and **prunes** tokens that contribute the least to the total likelihood of the corpus.

## Vocabulary Size vs. Perplexity

Larger vocabularies reduce sequence length (fewer tokens per word), which lowers perplexity mechanically. However, too large a vocabulary bloats the embedding matrix and harms generalization on rare tokens.

```chart
{
  "type": "line",
  "xAxis": "vocab_k",
  "data": [
    {"vocab_k": 4,  "ppl_en": 28.4, "ppl_tr": 81.2},
    {"vocab_k": 8,  "ppl_en": 24.1, "ppl_tr": 68.5},
    {"vocab_k": 16, "ppl_en": 21.3, "ppl_tr": 58.0},
    {"vocab_k": 32, "ppl_en": 19.8, "ppl_tr": 52.1},
    {"vocab_k": 64, "ppl_en": 19.1, "ppl_tr": 47.3},
    {"vocab_k": 128,"ppl_en": 18.9, "ppl_tr": 44.8}
  ],
  "lines": [
    {"dataKey": "ppl_en", "stroke": "#6366f1", "name": "English PPL"},
    {"dataKey": "ppl_tr", "stroke": "#f59e0b", "name": "Turkish PPL"}
  ]
}
```

## Token Fertility and Inference Cost

**Fertility** is the average number of tokens per word.
- English: $\approx 1.3$ tokens/word.
- Arabic/Chinese: $2.0 - 5.0$ tokens/word.

High fertility directly increases the cost of [[inference-serving|inference]] and consumes more of the fixed context window. Code often tokenizes efficiently because keywords (`if`, `return`) map to single tokens.

## Artifacts and Challenges

- **Numbers**: `1234` might be `[1, 234]`, making arithmetic difficult for the model.
- **Whitespace**: aggressive merging can harm indentation-sensitive languages like Python.
- **Byte-level models**: Future directions like MegaByte (2023) attempt to bypass tokenization entirely by operating on raw bytes.

## Related Topics

[[large-language-models]] — vocabulary choice affects model capacity  
[[transformer-architecture]] — the embedding layer  
[[inference-serving]] — fertility accounts for latency differences
---
