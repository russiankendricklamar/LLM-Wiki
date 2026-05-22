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

## Advanced Variations

Beyond the basic Draft-Target model pair, several advanced techniques have emerged:

### 1. Medusa (Draft-less Speculative Decoding)
Instead of a separate small model, **Medusa** adds multiple "heads" to the last layer of the target model itself. Each head predicts a token at a specific future offset ($t+1, t+2, \dots$). This eliminates the need to manage two different models in memory.

### 2. EAGLE (Extrapolation Algorithm for Greater Language-model Efficiency)
EAGLE uses a lightweight plugin that works on the feature level (latents) rather than tokens. It predicts the next feature vector, which is much more stable than predicting tokens, leading to higher acceptance rates.

### 3. Self-Speculative Decoding
Uses the model itself as its own draft model by skipping certain layers or using [[kv-cache-compression|KV cache]] thinning during the drafting phase.

## Mathematical Foundation: Rejection Sampling

To ensure the output follows the *exact* distribution of the target model $p(x)$ using the draft model $q(x)$, speculative decoding uses a modified rejection sampling:

1.  Accept a draft token $x$ with probability:
    $$\alpha = \min \left( 1, \frac{p(x)}{q(x)} \right)$$
2.  If rejected, resample from the distribution:
    $$p_{new}(x) = \text{norm}(\max(0, p(x) - q(x)))$$

This guarantees that speculative decoding is **lossless**: the final text is identical to what the large model would produce alone.

## Performance Gains

The speedup factor depends on the **Acceptance Rate** (how often the small model guesses correctly). 
- **Code/Prose**: High acceptance rate (2x–3x speedup).
- **Mathematical Reasoning**: Lower acceptance rate (1.2x–1.5x speedup) as small models struggle with logic.

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

## Related Topics

[[inference-serving]] — where speculative decoding is deployed  
[[multi-token-prediction]] — training models to be "native" speculators  
[[prm]] — process rewards help verify reasoning steps  
[[llm-infra/serving/continuous-batching]] — how speculators interact with batching
