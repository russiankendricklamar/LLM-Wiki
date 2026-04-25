---
title: "Speculative Decoding"
category: "LLM Infrastructure"
order: 12
lang: "en"
slug: "speculative-decoding"
---

# Speculative Decoding

Speculative Decoding is an optimization technique used to speed up the inference of Large Language Models (LLMs) without changing their output. It addresses the fact that [[llm]] generation is **memory-bound**: most of the time spent is waiting for model weights to load from VRAM, rather than actual computation.

## The Core Concept

Speculative decoding uses a smaller, faster **Draft Model** to predict several tokens in advance. A larger, slower **Target Model** then verifies these predictions in a single parallel pass.

### The Workflow
1.  **Drafting**: The small model (e.g., a 1B version of Llama) generates $K$ candidate tokens one-by-one.
2.  **Verifying**: The large model (e.g., Llama 70B) processes all $K$ tokens at once. Because Transformers are highly parallel, checking 5 tokens takes almost the same time as generating 1.
3.  **Accepting**: The large model compares its own probability distribution with the draft.
    - If the draft matches what the large model would have generated, all $K$ tokens are accepted.
    - If a token is rejected, the process restarts from the first mistake.

## Mathematical Foundation: Rejection Sampling

To ensure the output follows the *exact* distribution of the target model $p(x)$ using the draft model $q(x)$, speculative decoding uses a modified rejection sampling:

1.  Accept a draft token $x$ with probability:
    $$\alpha = \min \left( 1, \frac{p(x)}{q(x)} \right)$$
2.  If rejected, resample from the distribution:
    $$p_{new}(x) = \text{norm}(\max(0, p(x) - q(x)))$$

This guarantees that speculative decoding is **lossless**: the final text is identical to what the large model would produce alone.

## Performance Gains

The speedup factor depends on the **Acceptance Rate** (how often the small model guesses correctly). In typical tasks like code generation or simple chat, speculative decoding can achieve **2x to 3x throughput gains**.

## Visualization: Parallel Verification

```chart
{
  "type": "bar",
  "xAxis": "step",
  "data": [
    {"step": "Standard (1 by 1)", "time": 100, "tokens": 1},
    {"step": "Speculative (Draft)", "time": 10, "tokens": 5},
    {"step": "Speculative (Verify)", "time": 35, "tokens": 5}
  ],
  "lines": [
    {"dataKey": "time", "stroke": "#ef4444", "name": "Compute Time (ms)"}
  ]
}
```
*Standard decoding is slow because it waits for weights 5 times. Speculative decoding guesses 5 times cheaply and verifies them in one big "gulp," drastically reducing the average time per token.*

## Related Topics

[[inference-serving]] — where speculative decoding is deployed  
[[tokenization]] — why predicting tokens is hard  
[[prm]] — process rewards help verify reasoning steps
---
