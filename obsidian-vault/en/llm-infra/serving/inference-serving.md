---
title: "LLM Inference Serving"
category: "LLM Infrastructure"
order: 10
lang: "en"
slug: "inference-serving"
growth: "seedling"
---

[[llm]] inference serving in production is the problem of delivering predictions with minimal latency and maximum throughput under constrained memory and compute. The critical bottleneck: KV-cache memory grows $O(L \times n_{\text{layers}} \times d_{\text{head}})$ per request, where $L$ is sequence length. For a 7B model at 4096 tokens, KV-cache consumes ~1 GB — inference becomes **memory-bound**, not compute-bound. Classical static batching is inefficient: when requests finish at different times, GPU idle. Modern inference systems (vLLM, TensorRT-LLM, TGI) solve this through **PagedAttention** and **continuous batching**, achieving 3-4× throughput gains by eliminating memory fragmentation and enabling asynchronous request scheduling.

## KV-cache: the memory-compute trade-off

During autoregressive generation, the model processes one new token per step. Without caching, this requires $O(L^2)$ operations: recompute [[attention-mechanisms|attention]] over all prior tokens. With KV-cache, key and value matrices for past tokens are stored; each new token requires only $O(L)$ operations (single forward pass), but memory grows linearly.

Memory for KV-cache: $M = 2 \times n_{\text{layers}} \times n_{\text{tokens}} \times d_{\text{head}} \times \text{batch\_size} \times 4\text{ bytes}$

For 7B ($n_{\text{layers}} = 32$, $d_{\text{head}} = 128$) with one request at 4096 tokens: ~256 MB. Batch of 16 requests: 4 GB. On A100 (80 GB VRAM), this limits concurrent requests to ~15-20 without fragmentation. Classical batching requires all requests in a batch to finish simultaneously; if one request is shorter, allocated KV-cache for that request sits idle, wasting memory.

## PagedAttention: virtual memory for KV-cache

PagedAttention (Kwon et al., 2023, vLLM) applies OS virtual memory concepts to KV-cache management. Instead of storing KV-cache as contiguous blocks, it divides cache into fixed-size **pages** (typically 128 tokens). A **block table** maps logical sequence positions to physical memory addresses; blocks need not be contiguous.

**Key benefits:**

1. **Fragmentation elimination**: when a request completes, its pages are marked free and recycled; no dead cache accumulates between requests.
2. **Prefix sharing**: requests with common prefixes (e.g., few-shot examples) share pages. In beam search, child sequences share parent prefix cache via block table lookup (O(1) instead of recomputing $O(L)$ tokens).
3. **3-4× throughput**: PagedAttention enables 50+ concurrent requests vs. 15-20 without it.

The fused attention kernel trivially generalizes to paged memory: the block table is passed to kernel, which indexes pages dynamically during computation.

## Continuous batching: asynchronous pipeline

Static batching waits for all requests in a batch to complete before forming the next batch. This causes GPU underutilization with variable-length inputs: 16 short requests + 1 request of 1000 tokens means GPU waits for one request while others sit idle.

**Continuous batching** (Orca, 2022) inserts new requests mid-batch at natural sequence boundaries. Each request is tracked independently in a state table. When a request emits `[EOS]` token or reaches max_length, it is evicted; its slot is filled by a new request. GPU runs continuously at fixed batch size, achieving **98-99% utilization**.

Implementation requires:
- **Dynamic index remapping**: logical request IDs map to physical batch indices; reshuffling after each forward pass.
- **Token budgets** (tokens_per_request): track generation count for SLO enforcement (max time in system).
- **Prefix merging**: if a new request shares prefix with existing, PagedAttention avoids recomputation of cached K,V.

## Prefill vs. decode: asymmetric computational graph

Inference splits into two phases with opposite characteristics:

**Prefill** (processing prompt): $n_{\text{prompt}}$ tokens in single forward pass. Compute-bound; can use large batch. However, huge batch adds latency to **time-to-first-token (TTFT)** — delay before first output appears.

**Decode** (generation): one token per forward pass, autoregressive. Memory-bound; throughput limited by [[flash-attention|HBM]] bandwidth. Large batch adds negligible TTFT (all requests wait for decode anyway) but can exceed memory.

**Disaggregation**: some systems separate prefill and decode across different GPU tiers or even separate machines. Prefill GPU handles many prompt-heavy requests in parallel; decode GPU with modest memory capacity serves generation. Requires network overhead but balances load across heterogeneous hardware.

## Flash Attention for long contexts

Flash Attention (Dao et al., 2022) reorders the attention computation $\text{softmax}(QK^T/\sqrt{d_k})V$ to minimize HBM reads/writes. Classical attention requires $O(L^2)$ HBM I/O; Flash Attention achieves $O(L)$ via fused kernel that materializes computation in fast [[flash-attention|SRAM]].

For contexts >4K tokens, Flash Attention is critical. On 32K+ contexts, it delivers 2-3× speedup vs. standard attention.

## Speculative decoding

**Speculative decoding** parallelizes generation: a small draft model generates $k$ tokens; the target model verifies in single forward pass. If agreement rate $\alpha$ is high (e.g., 95%), speedup is $\approx \alpha \times k$. When draft and target share similar distributions (e.g., quantized variant), speculative decoding yields 1.5-2× wall-clock speedup with negligible memory overhead.

## Key metrics and SLO

- **Tokens/sec/GPU**: global throughput (prefill + decode combined).
- **TTFT (time-to-first-token)**: latency from request submission to first token. SLO: <100ms interactive, <500ms batch.
- **TBT (time-between-tokens)**: latency between subsequent tokens. SLO: <50ms. Determines perceived "fluency".
- **GPU utilization**: fraction of time GPU executes useful work. Target: >95%.
- **Dynamic batch size**: varies from 1 (one long request) to 50+ (many short) via continuous batching.

Optimization requires trade-offs: aggressive batching increases TBT; SLO-constrained batching reduces throughput.

## Production systems

**vLLM** (Berkeley LMSYS): most popular open-source system. PagedAttention by default, [[speculative-decoding|speculative decoding]] support, distributed inference via Ray. De facto standard for research and production.

**TensorRT-LLM** (NVIDIA): proprietary, fused kernels optimized for NVIDIA GPUs, best single-GPU latency on A100/H100, steeper configuration learning curve.

**Text Generation Inference** (HuggingFace): optimizes single-GPU latency, good for edge deployments, fewer batch optimizations.

**Ollama**: single-process local inference, simplicity, no batching.

**SGLang**: structured generation, constrained decoding, ideal for JSON/regex-constrained output.

## Related topics

Inference scales via [[quantization|quantization]] (INT8/FP8), [[mixture-of-experts|MoE]] (sparse activation), [[speculative-decoding|speculative decoding]]. [[transformer-architecture|Transformer]] design choices (head dimension, layer count) impact KV-cache size. [[agents|Agents]] and [[llm|LLM]] systems require predictable latency. Architectural co-optimization of prefill/decode phases is key to production efficiency.
