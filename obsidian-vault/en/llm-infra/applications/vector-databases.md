---
title: "Vector Databases"
category: "LLM Infrastructure"
order: 11
lang: "en"
slug: "vector-databases"
growth: "seedling"
---

## Problem: Curse of Dimensionality

Modern [[llm]] embeddings live in $\mathbb{R}^{1536}$ (OpenAI) or $\mathbb{R}^{4096}$ (larger models). Finding the $K$ nearest neighbors via brute-force—computing distance from query $q$ to all $N$ vectors—costs $O(N \cdot d)$. For $N = 10^7$ documents and $d = 1536$, this yields 1.5B distance computations per query: unacceptable at production latency.

**Approximate Nearest Neighbor (ANN)** trades small recall loss for 100–1000× speedup, enabling semantic search at scale.

## Similarity Metrics

Given embeddings $\mathbf{a}, \mathbf{b} \in \mathbb{R}^d$:

- **Cosine similarity**: $\text{sim}(\mathbf{a}, \mathbf{b}) = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}| \cdot |\mathbf{b}|}$. For unit-normalized vectors (standard in LLM workflows), cosine similarity equals inner product and is fastest to compute on GPUs.

- **L2 distance**: $d_2(\mathbf{a}, \mathbf{b}) = \sqrt{\sum_{i=1}^d (a_i - b_i)^2}$. Minimizes exact NN but less natural for embeddings.

- **Inner product**: $\langle \mathbf{a}, \mathbf{b} \rangle = \mathbf{a}^T \mathbf{b}$. Identical to cosine for normalized vectors; native to [[inference-serving|GPU]] matrix ops.

**Convention**: store unit-normalized embeddings; compute inner product for speed.

## IVF: Inverted File Index

**Idea**: partition vector space into $K$ clusters via k-means, index each cluster separately.

**Construction**:
1. Run k-means on a sample of vectors, obtain $K$ centroids $\mathbf{c}_1, \ldots, \mathbf{c}_K$.
2. For each vector $\mathbf{v}$, compute $j^* = \arg\min_j d_2(\mathbf{v}, \mathbf{c}_j)$; store $\mathbf{v}$ in inverted list $L_{j^*}$.

**Query**:
1. Find $C$ closest centroids to query $\mathbf{q}$ (e.g., $C = 10$).
2. Search vectors in $L_{j^*}$ lists for the $C$ nearest centroids.
3. Return top-$K$ neighbors.

**Trade-off**: 
- Reduction factor: $\text{probe} = C/K$ (fraction of database searched).
- At $K=1000, C=10$: search only 1% of vectors.
- Recall vs. speed controlled by $C$ (higher $C$ = higher recall, slower).
- Optimal for large, clusterable datasets; degrades if clusters overlap.

## HNSW: Hierarchical Navigable Small World

**Malkov & Yashunin, 2016**: layer-based hierarchical graph for $O(\log N)$ greedy search.

**Architecture**:
- Build a **multi-layer graph**. Element $i$ at layer $l$ has degree $M$ (adaptive parameter).
- Top layer(s): sparse (highway network), enable long-distance jumps. Bottom layer: dense, enables fine-grained navigation.
- Each node's edges connect to $M$ closest neighbors in its layer, plus neighbors in the layer below (backward links implicit).

**Layer assignment**:
$$P(\text{element at level} \geq l) = e^{-l / \ln(M)}$$

Typical $M=5$: mean height $\sim \log_2(N)$.

**Construction**:
1. Assign new element a random layer height $h$.
2. Insert at layers $0$ to $h$:
   - At top layer, find nearest by greedy search from entry point; add bidirectional edges to $M$ nearest.
   - Move to layer below, repeat with expanded candidate set.

**Search query**:
1. Start at top layer entry point.
2. Greedy beam search with $ef$ (search width) candidates:
   - Expand frontier to nearest neighbors, prune to $ef$ best.
   - Descend to next layer; repeat.
3. Return top-$K$ from layer 0.

**Complexity**: 
- Construction: $O(N \cdot M)$ for $M = 5, 10$ (low constant).
- Query: $O(\log N)$ expected time; typically $10$–$50$ distance comparisons for billion-scale (vs. $10^6$ for IVF on same scale).

**Advantages**: 
- Asymptotically fastest for high-recall ANN in high dimensions.
- No clustering or pre-processing; incremental insertion natural.
- Single parameter ($M$) tunes memory vs. speed.

## Product [[quantization]] (PQ)

**Problem**: storing $10^7 \times 1536$ floats = 60GB memory at single precision.

**Idea**: split vector into $M$ non-overlapping subvectors, quantize each independently.

$$\mathbf{v} = [\mathbf{v}^{(1)}, \ldots, \mathbf{v}^{(M)}], \quad \mathbf{v}^{(j)} \in \mathbb{R}^{d/M}$$

For each subspace $j$, run k-means with $K$ centroids; encode each subvector as a single byte (index $0$ to $K-1$, $K \le 256$).

**Storage**: $M$ bytes per vector vs. $4d$ bytes (32-bit float), $150\times$ compression. Distance computation uses lookup tables, avoiding decompression.

**Reconstruction loss**: 4–8% recall drop vs. exact neighbors; acceptable for top-100 retrieval in retrieval-augmented generation ([[rag]]).

## FAISS: Industry Standard

Facebook AI Similarity Search library:

- **IndexFlatL2**: exact brute-force; baseline.
- **IndexIVFFlat**: IVF + exact distance in clusters; $10$–$100\times$ speedup, tunable recall via `nprobe`.
- **IndexIVFPQ**: IVF + product quantization; billion-scale, GPU acceleration.
- **GPU support**: batch query $10$–$100\times$ faster than CPU.

Typical billion-scale setup: 100k clusters, $C=100$ probes, PQ with $M=96, K=256$. Query latency: 10–50ms; RAM per vector: 1 byte.

## Filtered Search

In practice: retrieve documents by embedding **and** metadata (date, category, user).

**Trade-offs**:
- **Pre-filter**: apply WHERE clause, then ANN on filtered set. Fast if few documents match; slow if selectivity is low (high recall).
- **Post-filter**: ANN returns $K' \gg K$, filter afterward. Wastes computation; required if filter matches few items.
- **Hybrid**: candidate generation (ANN) + reranking (filters + dense retriever).

At selectivity $< 1\%$ (e.g., last-7-days documents), pre-filter + ANN dominates. Qdrant and Milvus support pre-filtering inside the ANN loop for best of both.

## Production Systems

| System | Storage | GPU | Filters | Scale |
|--------|---------|-----|---------|-------|
| **Pinecone** | Managed | ✓ | ✓ | 100B+ vectors |
| **Qdrant** | Self-hosted | ✓ | ✓✓ | 100M–1B |
| **Weaviate** | Self-hosted | ✓ | ✓ | 100M–1B |
| **Chroma** | In-process | ✗ | ✓ | 10M |
| **pgvector** | PostgreSQL | ✗ | ✓✓ | 100M (IVF) |

**Managed vs. Self-hosted**:
- Pinecone: serverless, automatic scaling, HNSW + PQ, expensive (~\$0.40/M vectors/month).
- Qdrant/Weaviate: open-source, persistent, full control, run your own ops.
- pgvector: leverage existing Postgres; slower but tight integration, native ACID.

## Role in RAG

[[rag|RAG]] pipeline:

1. **Indexing**: chunk documents (512–1024 tokens), embed each with [[embedding-models]].
2. **Storage**: vectors → vector DB (with chunk IDs, metadata).
3. **Query**: embed user question with same model.
4. **Retrieval**: top-$K$ ANN (e.g., $K=10$) from vector DB.
5. **Context**: retrieve chunk text, pass to LLM in system prompt or context window.

[[llm|LLM]] augmentation via vector retrieval achieves:
- Reduced hallucination (grounded in retrieved facts).
- Up-to-date knowledge (re-index new documents, no model retraining).
- Long-context handling (retrieve only relevant chunks, not entire corpus).

## See Also

- [[rag]] — full pipeline architecture.
- [[embedding-models]] — semantic representations.
- [[transformer-architecture]] — source of embeddings.
- [[agents|LLM agents]] — use vector retrieval for knowledge grounding.
