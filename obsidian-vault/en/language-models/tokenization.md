---
title: "Tokenization"
category: "Language Models"
order: 8
lang: "en"
slug: "tokenization"
growth: "seedling"
---

# Tokenization

Tokenization is the process of converting raw text into the discrete integer sequence that [[large-language-models]] actually train and generate over. It is the boundary between the continuous world of text and the discrete world of vocabulary indices.

## Why Not Characters or Words?

- **Characters**: vocabulary of ~200, sequences become very long (~5× typical word tokenisation), making self-attention expensive and long-range dependencies harder to learn
- **Words**: vocabulary explodes with morphology, rare words become unknowns, no sub-word sharing
- **Sub-word**: the dominant compromise — common words are single tokens, rare words split into meaningful pieces, vocabulary stays manageable (~32K–128K)

## Byte-Pair Encoding (BPE)

BPE (Sennrich et al., 2016) is a compression algorithm adapted for NLP.

### Algorithm

```
1. Initialise vocabulary = all bytes (0–255) or characters
2. Compute frequency of every adjacent pair in the corpus
3. Merge the most frequent pair → new token
4. Repeat until vocabulary reaches target size V
```

At each step the corpus is re-encoded using the updated vocabulary. After $V - 256$ merges the algorithm stops. The merge rules are then serialised as the tokeniser.

**Example**: starting from `l o w e r` and `l o w e s t` (space-separated characters):
- Most common pair: `l o` → `lo`
- Next: `lo w` → `low`
- Next: `low e` → `lowe`
- Eventually: `lower` and `lowest` share the `lowe` token

### Vocabulary Size Effect on Perplexity

Larger vocabularies reduce sequence length (fewer tokens per word), which lowers perplexity mechanically but may harm generalisation to rare sub-words:

$$\text{PPL} = \exp\!\left(-\frac{1}{N}\sum_{i=1}^{N} \log P(t_i \mid t_{<i})\right)$$

where $N$ is the *token* count. Doubling vocabulary typically reduces $N$ by ~15–20%, proportionally reducing reported perplexity even with no model improvement.

## WordPiece

Used in BERT. Similar to BPE but the merge criterion is the **likelihood ratio**:

$$\text{score}(A, B) = \frac{P(AB)}{P(A) \cdot P(B)}$$

This prefers pairs whose combination is more predictable than their independent occurrence — favoring linguistically meaningful units over purely frequent ones. WordPiece also marks continuation tokens with `##` rather than spaces.

## Unigram Language Model

Used in SentencePiece (XLNet, T5, LLaMA-family). Instead of greedy merges, it starts with a large candidate vocabulary and **prunes** tokens:

1. Initialise with all sub-strings up to length $L$
2. Train a unigram LM over the corpus: $P(\text{sentence}) = \prod P(t_i)$
3. Remove tokens whose removal degrades log-likelihood the least
4. Repeat until target vocabulary size

The optimal segmentation at inference uses the Viterbi algorithm. Because multiple segmentations are possible, Unigram naturally supports **subword regularisation** — sampling different segmentations during training for robustness.

## Byte-Level BPE

GPT-2 introduced byte-level BPE: start from individual bytes rather than characters, so the vocabulary covers every possible sequence without any unknown-token issue. The base vocabulary is 256 bytes; merges proceed as in standard BPE. This handles any Unicode without language-specific preprocessing.

## SentencePiece

A language-agnostic tokeniser framework that:
- Treats input as a raw byte stream (no pre-tokenisation needed)
- Supports both BPE and Unigram algorithms
- Includes a whitespace token `▁` (lower one-eighth block) instead of spaces
- Enables reversible encoding: `decode(encode(text)) == text` exactly

Used by: LLaMA, Mistral, T5, mT5, PaLM.

## Fertility Ratio

The **fertility** of a tokeniser for a corpus is:

$$\phi = \frac{\text{tokens}}{\text{words}}$$

A fertility of 1.0 means every word is one token; higher values indicate fragmentation. English BPE tokenisers typically achieve $\phi \approx 1.3$. For Turkish (agglutinative), $\phi$ can exceed 3.0 with an English-trained vocabulary — a major cause of cross-lingual performance gaps.

## Tokenisation Artifacts

### Numbers

`42,187` may tokenise as `['42', ',', '18', '7']` — splitting the semantic unit arbitrarily. Arithmetic is fragile because carries span token boundaries that the model must learn to bridge.

### Code

Whitespace-sensitive languages (Python) are harmed by aggressive whitespace merging. Indentation may collapse: `    for` (4-space indent) tokenises differently from `\tfor`, even though they are semantically equivalent.

### Multilingual

A joint multilingual vocabulary allocates capacity proportional to corpus size. Languages with less training data receive proportionally fewer tokens, leading to high fertility and slower training convergence.

## Vocabulary Size vs. Perplexity Chart

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

## Practical Guidance

- **General English LLMs**: 32K–64K BPE vocabulary (GPT-4 uses 100K cl100k)
- **Multilingual**: 100K–250K with balanced corpus sampling per language
- **Code models**: byte-level BPE or separate code-augmented vocabulary
- **Vocabulary transfer**: when adapting a model to a new language, extend the vocabulary and initialise new embeddings from the average of similar-language tokens

## See Also

- [[large-language-models]] — how vocabulary choice affects model capacity
- [[transformer-architecture]] — the embedding layer that tokenisation feeds into
- [[scaling-laws]] — fertility ratio confounds cross-lingual perplexity comparisons
