---
title: "Embedding Models"
category: "Language Models"
order: 4
lang: "en"
slug: "embedding-models"
---

# Embedding Models

## What Is It

An embedding model maps variable-length inputs — sentences, paragraphs, documents, images, or code — to fixed-size dense vectors in a high-dimensional space where geometric distance approximates semantic similarity. The core premise is that meaning can be encoded as geometry: two texts about the same concept should produce vectors that point in nearly the same direction, while unrelated texts should produce orthogonal or opposite vectors.

This is fundamentally different from generative language models. An embedding model does not produce tokens — it produces a single vector as its output. The model is trained not to predict the next word but to arrange representations in a metric space where cosine similarity is a reliable proxy for semantic relatedness.

Embedding models are the retrieval layer in [[rag]] systems, the engine behind semantic search, and the foundation for clustering, classification, and anomaly detection over text at scale.

## Visualization

```chart
{
  "type": "line",
  "xAxis": "dims",
  "data": [
    {"dims": 64, "MTEB": 52.1},
    {"dims": 128, "MTEB": 57.4},
    {"dims": 256, "MTEB": 61.8},
    {"dims": 512, "MTEB": 64.3},
    {"dims": 768, "MTEB": 65.9},
    {"dims": 1024, "MTEB": 66.7},
    {"dims": 1536, "MTEB": 67.2},
    {"dims": 2048, "MTEB": 67.5},
    {"dims": 3072, "MTEB": 67.6},
    {"dims": 4096, "MTEB": 67.7}
  ],
  "lines": [
    {"dataKey": "MTEB", "stroke": "#8b5cf6", "name": "MTEB score (Matryoshka truncation)"}
  ]
}
```

## Architecture

Most text embedding models are built on a **bidirectional [[transformer-architecture|transformer]] encoder** (BERT-style), not a causal decoder. Bidirectional [[attention-mechanisms|attention]] lets every token attend to every other token, producing contextualized representations that capture full sentence meaning rather than left-to-right prefixes.

The standard approach produces a fixed-size vector by **mean pooling** the token representations from the last hidden layer:

$$\mathbf{e} = \frac{1}{n} \sum_{i=1}^{n} h_i^{(L)}$$

where $h_i^{(L)}$ is the hidden state of token $i$ at layer $L$. Some models use the `[CLS]` token representation instead, but mean pooling consistently outperforms it on sentence similarity tasks.

**Asymmetric architectures** use a larger, slower model for encoding documents at index time and a smaller, faster model for encoding queries at retrieval time. The asymmetry exploits the offline/online distinction in search systems.

**Multi-vector representations** (ColBERT) retain all $n$ token vectors rather than pooling to one, enabling late interaction: query-document similarity is computed as the sum of maximum similarities between each query token and all document tokens. This is more expressive but requires more storage and different retrieval infrastructure.

## Mathematical Framework

**Contrastive loss on triplets** — given an anchor $a$, a semantically similar positive $p$, and a dissimilar negative $n$, the model learns to pull $(a, p)$ together and push $(a, n)$ apart:

$$\mathcal{L}_{\text{triplet}} = \max\!\left(0,\; s(a, n) - s(a, p) + \text{margin}\right)$$

where $s(u, v) = \frac{u^\top v}{\|u\| \|v\|}$ is cosine similarity.

**InfoNCE / NT-Xent loss** — the more data-efficient version used by CLIP and modern embedding models, treating all other examples in the batch as negatives:

$$\mathcal{L} = -\log \frac{\exp(s(a, p) / \tau)}{\exp(s(a, p) / \tau) + \sum_{k=1}^{K} \exp(s(a, n_k) / \tau)}$$

where $\tau$ is a temperature hyperparameter controlling the sharpness of the distribution. Lower $\tau$ makes the model focus on the hardest negatives.

**Matryoshka Representation Learning (MRL)** trains a single model to produce useful embeddings at multiple dimensions simultaneously. The loss is averaged over a set of nested dimensions $\{d_1, d_2, \ldots, d_m\}$ with $d_1 < d_2 < \ldots < d_m$:

$$\mathcal{L}_{\text{MRL}} = \frac{1}{m} \sum_{j=1}^{m} \mathcal{L}_{\text{contrastive}}\!\left(\mathbf{e}_{[:d_j]}, \mathbf{e}^+_{[:d_j]}, \{\mathbf{e}^-_{[:d_j]}\}\right)$$

The first $d_j$ dimensions of the full embedding are used at each scale. This enables a single model to serve different latency/quality trade-off points without retraining.

## Training Paradigm

**Hard negative mining** is the most important ingredient in embedding model training. Random negatives are too easy — the model trivially learns to separate "the cat sat on the mat" from "quantum chromodynamics". What forces the model to build deep semantic representations is learning to distinguish between sentences that are superficially similar but semantically different.

Hard negatives are mined in two ways:
1. **In-batch hard negatives**: within a batch, find the non-positive example with the highest cosine similarity to the anchor and treat it as a hard negative.
2. **Cross-encoder-mined negatives**: use a slow but accurate cross-encoder to score candidate negatives, selecting those that score highly (close to the anchor in meaning) but are not true positives.

Training data for general-purpose embedding models combines: NLI pairs (entailment as positive, contradiction as hard negative), MS-MARCO passage retrieval, Stack Exchange Q&A, and large-scale weakly supervised web pairs (title + body as anchor-positive).

## Key Properties & Capabilities

- **Semantic search**: retrieve passages semantically related to a query, not just lexically matching.
- **Clustering**: embed a corpus and apply k-means or HDBSCAN to discover topic clusters without labels.
- **Sentence similarity**: rank pairs of sentences by semantic relatedness using cosine similarity.
- **Anomaly detection**: embed normal examples; flag inputs far from the cluster centroid as anomalies.
- **Cross-lingual transfer**: multilingual embedding models produce aligned representations across languages; a query in English can retrieve documents in Spanish.
- **Retrieval-augmented generation**: the retrieval step in RAG systems is an embedding model + approximate nearest neighbor search.

## Trade-offs vs Other Types

| Dimension | Bi-encoder (embedding) | Cross-encoder (reranker) | Generative [[llm]] |
|---|---|---|---|
| Output | Fixed vector | Scalar score | Token sequence |
| Indexable | Yes (ANN) | No | No |
| Query latency | Fast ($O(d)$ lookup) | Slow (full attention) | Slow (autoregressive) |
| Accuracy | Good | Best | N/A |
| Use case | Retrieval (top-k) | Reranking | Generation |

The standard production pipeline combines both: bi-encoder for fast approximate retrieval of top-100 candidates, then a cross-encoder reranker to re-score and select top-10.

## Python Usage Pattern

```python
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

# Load a pre-trained embedding model
model = SentenceTransformer("BAAI/bge-large-en-v1.5")

# Embed a corpus
corpus = [
    "Transformers revolutionized NLP in 2017.",
    "The attention mechanism weights token importance.",
    "Bitcoin uses proof-of-work consensus.",
    "Neural scaling laws predict LLM performance.",
]
corpus_embeddings = model.encode(corpus, normalize_embeddings=True)

# Build a FAISS index for approximate nearest neighbor search
dim = corpus_embeddings.shape[1]
index = faiss.IndexFlatIP(dim)  # Inner product = cosine sim on normalized vecs
index.add(corpus_embeddings.astype(np.float32))

# Query
query = "How does self-attention work?"
query_embedding = model.encode([query], normalize_embeddings=True)

distances, indices = index.search(query_embedding.astype(np.float32), k=2)
for idx, score in zip(indices[0], distances[0]):
    print(f"Score: {score:.4f} | {corpus[idx]}")

# Matryoshka: use truncated embeddings for faster search
short_embeddings = corpus_embeddings[:, :256]  # First 256 dims
short_query = query_embedding[:, :256]
```

## Limitations

- **Isotropy collapse**: embeddings cluster in a narrow cone of the vector space rather than distributing uniformly on the hypersphere. This reduces the effective dimensionality and degrades similarity estimates. Whitening or normalization during training mitigates this.
- **Out-of-domain generalization**: embedding models trained on web text underperform on specialized domains (medical, legal, code) unless fine-tuned on domain data.
- **Long documents**: pooling over hundreds of tokens averages out fine-grained distinctions; very long documents often need chunking before embedding.
- **Semantic vs. factual similarity**: two texts can be semantically related (same topic) but factually contradictory; cosine similarity does not capture this distinction.
- **Language and script coverage**: multilingual models sacrifice per-language quality for breadth; low-resource languages are underserved.

## Related Topics

[[llm]] — generative models that benefit from embedding-based retrieval (RAG)  
[[vlm]] — contrastive VLMs (CLIP) apply the same training framework to image-text pairs  
[[mixture-of-experts]] — routing in MoE can be understood as a learned embedding-based dispatch  
[[shannon-entropy]] — [[shannon-entropy|entropy]] of the embedding distribution measures isotropy and expressiveness
