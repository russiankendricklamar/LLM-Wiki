---
title: "Tokenization"
category: "LLM Infrastructure"
order: 9
lang: "en"
slug: "tokenization"
growth: "seedling"
---

# Tokenization

Large language models operate on discrete sequences of **tokens**, not characters or bytes. Tokenization is the process of splitting raw text into these atomic units, each mapped to an index in a fixed vocabulary $V$ (typically 32K–200K tokens). This layer sits between text and the transformer's embedding matrix; poor tokenization choices ripple through inference latency, context window capacity, and generalization.

## Why Tokenization Matters

An [[llm|LLM]] with vocabulary size $|V|$ uses an embedding matrix of shape $(|V|, d_{\text{model}})$. Doubling vocabulary means doubling embedding parameters. Yet tokenization compression directly trades vocabulary size against sequence length: if vocabulary is too small, the same idea requires many tokens; if too large, the embedding matrix bloats. For a given context window and model size, tokenization is a fundamental resource constraint.

English text compresses to roughly 4 characters per token (fertility $\approx 1.3$ tokens/word). Non-English languages exhibit **1.3–5× worse compression**. Code and mathematical notation often tokenize efficiently because keywords and operators map to single tokens. This asymmetry drives deployment cost: serving an Arabic model costs more per inference step than English.

## Byte Pair Encoding (BPE)

**BPE** (Sennrich, Haddow, Birch 2016) is the dominant algorithm in modern [[transformer-architecture|transformers]]. It is iterative and greedy: start with a character-level vocabulary (plus a special end-of-word marker like `</w>`), then repeatedly merge the most frequent adjacent pair of tokens.

### Algorithm

Given a corpus:

$$
\text{Corpus} = \{x_1, x_2, \ldots, x_N\}
$$

1. **Initialize**: $V_0 = \{\text{all unique characters in corpus}\} \cup \{\text{special tokens}\}$
2. **For** $i = 1 \text{ to } |V_{\text{target}}| - |V_0|$:
   - Compute frequency of all adjacent pairs $(a, b)$ in the current tokenization of the corpus.
   - Find the most frequent pair: $(a^*, b^*) = \arg\max_{(a,b)} \text{count}(a, b)$
   - Merge: add token $ab$ to vocabulary; replace all occurrences of $(a, b)$ with $ab$ in the corpus.
   - Update $V_i = V_{i-1} \cup \{ab\}$

The algorithm is **deterministic** and **language-agnostic**; the learned merge operations can be stored as a sequence and applied at inference time with O(n) tokenization of new text.

### GPT-2/3/4: Byte-Level BPE

OpenAI's models use **byte-level BPE**, where the initial vocabulary consists of all 256 byte values, plus a few special tokens. This eliminates the need for an `<UNK>` token (any unknown character becomes its byte representation) and is robust to out-of-vocabulary symbols. The tradeoff: very frequent characters (e.g., space) exist as single bytes, so the first merges are shallow.

## SentencePiece

**SentencePiece** (Kudo & Richardson 2018) is a language-agnostic tokenization framework used in T5, Gemma, LLaMA, and Llama 2. It differs from BPE in two ways:

1. **Whitespace as a token**: Rather than treating space as a word boundary, it is encoded as a special character (e.g., `▁`). This allows the model to learn that spaces are syntactically meaningful—crucial for languages without explicit word boundaries.
2. **Two sub-algorithms**: SentencePiece implements both BPE (greedy, like OpenAI) and **unigram language modeling** (probabilistic).

### Unigram Language Model Tokenization

The unigram approach treats tokenization as a probabilistic inference problem. Define:

$$
P(x) = \sum_{s \in S(x)} \prod_{i=1}^{|s|} p(s_i)
$$

where $S(x)$ is the set of all possible segmentations of text $x$, and $p(t)$ is the probability of token $t$ (learned from the training corpus via EM).

**Training loop**:
1. Start with a large vocabulary (e.g., all substrings up to length $k$).
2. Compute the probability of each token using forward-backward EM.
3. Estimate the loss reduction if each token were removed: $\Delta L_t = \log P(x | V \setminus \{t\}) - \log P(x | V)$
4. Prune tokens with smallest negative $\Delta L_t$ (i.e., keep tokens that minimize loss increase).
5. Repeat until vocabulary reaches target size.

This is more principled than BPE's greedy frequency-counting: it explicitly tracks the effect of each token on likelihood.

## tiktoken and OpenAI's cl100k_base

**tiktoken** is OpenAI's Rust-based tokenizer, fast enough to tokenize at encoding time without latency budgets. The `cl100k_base` vocabulary (used in GPT-3.5-turbo and GPT-4) contains 100,277 tokens and was trained on a corpus spanning internet text, books, and code up to late 2023.

```
English:      4 characters ≈ 1 token
Non-English:  5–10 characters ≈ 1 token
Code:         ~5 characters ≈ 1 token
```

OpenAI also publishes `p50k_base` (50K tokens, older models) and domain-specific variants for code (`cl100k_code`) and fine-tuned checkpoints.

## Token Fertility and Inference Cost

**Fertility** is the average number of tokens per word in a given language:

$$
\text{Fertility} = \frac{\text{total tokens in corpus}}{\text{total words in corpus}}
$$

For English, $\text{Fertility} \approx 1.3$. For Arabic, Chinese, and Japanese, $\text{Fertility} \in [2, 4]$. This directly multiplies inference cost:

- **Attention**: $O(n \cdot d)$ per layer where $n$ is sequence length. Higher fertility increases $n$.
- **Embedding lookups**: $O(n)$ per token. Higher fertility means more lookups.
- **Context window capacity**: If max sequence length is 4K tokens and fertility is 2×, the effective context in characters shrinks by half.

Deploying a multilingual model requires careful [[inference-serving|inference serving]] tuning; batching strategies and KV cache preallocation must account for variable fertility.

## Common Tokenization Artifacts

**Numbers split non-intuitively**: the integer `1234` may tokenize as `[1, 234]` or `[12, 34]` depending on training data frequency. Mathematical constants like `π` or `e` often occupy multiple tokens. This degrades performance on arithmetic and symbolic reasoning—a known weakness of decoder-only [[llm|LLMs]].

**Non-English degradation**: logographic scripts (Chinese, Japanese) and highly agglutinative languages (Turkish, Finnish) produce fertility 3–5×. A fine-tuning job in Arabic costs 3× more compute per epoch than the same job in English, all else equal.

**Code efficiency**: keywords (`if`, `def`, `return`) and operators typically map to single tokens because they appear frequently and consistently in training data. This gives code a slight tokenization advantage over natural language.

## Future Directions

**Byte-level models** (MegaByte, 2023) operate directly on bytes, bypassing tokenization. This trades off training compute and memory for simpler architecture and no tokenization choices. Early results show competitive scaling, but byte-level attention is still nascent.

**Character-level transformers** have seen renewed interest; the lack of tokenization boundary errors appeals to work on reasoning and symbolic tasks. The main blocker is throughput: character sequences are 4–10× longer, multiplying attention cost.

For now, tokenization remains a critical [[fine-tuning|fine-tuning]] consideration. When training domain-specific models, training a custom tokenizer on domain text often outperforms using a general-purpose tokenizer.

## References

- Sennrich, R., Haddow, B., & Birch, A. (2016). Neural Machine Translation of Rare Words with Subword Units. ACL.
- Kudo, T., & Richardson, J. (2018). SentencePiece: A Simple and Language Agnostic Approach to Subword Segmentation. ACL.
- Radford, A., et al. (2019). Language Models are Unsupervised Multitask Learners. OpenAI Blog.

**See also**: [[llm]], [[transformer-architecture]], [[embedding-models]], [[speculative-decoding]], [[inference-serving]]
