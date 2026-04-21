---
title: "Continuous Batching"
category: "LLM Infrastructure"
order: 15
lang: "en"
slug: "continuous-batching"
---

# Continuous Batching (In-Flight Batching)

Continuous batching (often called in-flight batching or cellular batching) is an advanced scheduling technique used in modern LLM inference engines (like vLLM, TGI, and TensorRT-LLM) to maximize GPU utilization. It solves the severe inefficiency of traditional static batching.

## The Problem with Static Batching

To fully utilize a GPU's Tensor Cores, requests must be grouped into a **batch**. In early inference systems, requests were grouped statically:
- Four requests arrive: lengths 10, 50, 20, and 100 tokens.
- The engine batches them together and runs the model.
- Because matrix math requires uniform shapes, the shorter requests must be **padded** with zeros (or dummy tokens) to match the longest request (100 tokens).
- Furthermore, the engine must wait for the longest request to finish generating before returning the batch and accepting new queries.

**Result**: Massive waste of FLOPs on padding, and high latency for new requests waiting in the queue.

## The Orca Breakthrough

In 2022, researchers at Seoul National University introduced the "Orca" scheduling system. The insight was simple but profoundly difficult to engineer: **Operate at the iteration (token) level, not the request level**.

LLM generation is an iterative process (predicting one token at a time). Continuous batching works as follows:
1.  **Eviction**: The moment a request in the batch finishes (generates an `<EOS>` token), it is immediately removed from the batch.
2.  **Insertion**: In the very next forward pass (the next token iteration), a new request from the queue is seamlessly inserted into the newly freed slot in the batch.

## The Two Phases of Generation

To make this work, engines distinguish between two phases:
1.  **Prefill Phase**: Processing the initial user prompt. This is highly parallel and compute-bound (all prompt tokens are processed at once).
2.  **Decode Phase**: Generating the answer token-by-token. This is sequential and memory-bound.

Modern schedulers can perform **chunked prefill**: they mix a chunk of prompt tokens from a new request with the decoding tokens of existing requests to perfectly balance the GPU's compute and memory bandwidth on every single clock cycle.

## Visualization: Static vs. Continuous

```mermaid
gantt
    title Static Batching (Padding Waste)
    dateFormat  s
    axisFormat %S
    section Batch 1
    Req A (Done)     :a1, 0, 2s
    Req B (Done)     :a2, 0, 5s
    Req C (Done)     :a3, 0, 8s
    section Waste
    Pad A            :crit, 2, 8s
    Pad B            :crit, 5, 8s

gantt
    title Continuous Batching (High Throughput)
    dateFormat  s
    axisFormat %S
    section GPU Slots
    Req A (Done)     :b1, 0, 2s
    Req D (New)      :b4, 2, 8s
    Req B (Done)     :b2, 0, 5s
    Req E (New)      :b5, 5, 8s
    Req C (Done)     :b3, 0, 8s
```

## Why It Matters

Continuous batching can increase the total throughput of an inference server by **10x to 20x** compared to static batching. It is the primary reason why commercial APIs (like OpenAI or Anthropic) can serve millions of users simultaneously at a low cost.

## Related Topics

[[paged-attention]] — the memory management that makes continuous batching possible  
[[inference-serving]] — the broader context  
[[hardware-io-attention]] — hardware bottlenecks mitigated by batching
---
