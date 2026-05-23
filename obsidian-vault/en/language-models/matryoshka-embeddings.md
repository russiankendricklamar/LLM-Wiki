---
title: "Matryoshka Embeddings"
category: "Language Models"
order: 19
lang: "en"
slug: "matryoshka-embeddings"
---

# Matryoshka Embeddings (MRL)

## What Is It

Matryoshka Representation Learning (MRL) is a training technique that allows a single [[embedding-models|embedding model]] to produce vectors that are useful at multiple different dimensions. Inspired by the Russian Matryoshka nesting dolls, MRL ensures that the information of the full-sized embedding is "nested" within its smaller truncated versions.

Standard embedding models produce a fixed-dimension vector (e.g., 768 or 1536). If you need a smaller vector for efficiency, you typically have to train a new model or use dimensionality reduction techniques that lose significant accuracy. MRL allows you to simply truncate the vector (e.g., taking only the first 64 or 128 dimensions) while maintaining high performance.

## How It Works

The core idea is to modify the loss function during training to encourage the model to pack the most important information into the earlier dimensions of the embedding.

### Nested Loss Function

For a set of desired dimensions $\mathcal{M} = \{m_1, m_2, \ldots, m_k\}$, the total MRL loss is the weighted sum of the individual losses at each dimension:

$$\mathcal{L}_{MRL}(x; \theta) = \sum_{m \in \mathcal{M}} w_m \mathcal{L}(f(x; \theta)_{1:m})$$

where:
*   $f(x; \theta)_{1:m}$ is the first $m$ dimensions of the embedding.
*   $\mathcal{L}$ is a standard embedding loss (like Contrastive Loss or Triplet Loss).
*   $w_m$ are importance weights for each dimension.

By optimizing this joint objective, the model learns a representation where the prefix of the vector is itself a high-quality embedding.

## Benefits

1.  **Adaptive Accuracy/Efficiency Trade-off**: You can use large embeddings for high-precision re-ranking and small embeddings for fast initial retrieval, all using the same model.
2.  **Storage Savings**: Small versions of the same embedding can be used for indexing in vector databases (like Pinecone or Milvus), dramatically reducing memory and storage costs (up to 10x-100x reduction).
3.  **Low Latency**: Truncated embeddings lead to faster dot-product or cosine similarity calculations, which is critical for large-scale search engines.
4.  **No Re-indexing**: Since the small embeddings are just prefixes of the large ones, you can upgrade your system's precision without re-embedding your entire dataset.

## Visualization

The performance of MRL embeddings typically degrades gracefully as the number of dimensions is reduced, often outperforming smaller models trained from scratch.

| Dimensions | Relative Retrieval Accuracy (mAP) | Storage Cost |
|---|---|---|
| 1536 (Full) | 100% | 1.0x |
| 768 | 99.5% | 0.5x |
| 256 | 97.0% | 0.17x |
| 64 | 90.0% | 0.04x |

## Use Cases

*   **Vector Search**: Using small dimensions for the first-pass retrieval and full dimensions for final re-ranking.
*   **On-device AI**: Deploying the same model to mobile devices (using small embeddings) and servers (using full embeddings).
*   **Hierarchical Navigation**: Quickly clustering data using low-dimensional representations.

## Related Topics

[[embedding-models]] — the general class of models that MRL improves  
[[llm]] — many MRL models are built on top of [[llm]] encoders  
[[vlm]] — MRL is also used for multi-modal (image-text) embeddings  
[[vector-databases]] — the primary infrastructure that benefits from MRL
