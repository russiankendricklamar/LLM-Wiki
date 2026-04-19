---
title: "RAG (Retrieval-Augmented Generation)"
category: "LLM Infrastructure"
order: 1
lang: "en"
slug: "rag"
---

# RAG (Retrieval-Augmented Generation)

## Prerequisites

[[llm]], [[embedding-models]]

## Overview

Retrieval-Augmented Generation (RAG) is an architectural pattern that enhances large language model outputs by supplying relevant external documents at inference time. Instead of relying solely on knowledge encoded during pre-training, a RAG system first retrieves a small set of relevant passages from a corpus, then conditions the model's generation on those passages alongside the original query.

The motivation is straightforward: LLMs have a fixed knowledge cutoff and a finite context window. They hallucinate facts when asked about proprietary data, recent events, or long-tail topics. RAG sidesteps both problems without the cost of continuous fine-tuning. It was introduced by Lewis et al. (Facebook AI Research, 2020) in the paper "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks" and has since become the dominant pattern for grounding LLM responses in verifiable sources.

From a production standpoint, RAG decouples the knowledge base from the model weights. You can update the retrieval corpus without touching the model. This separation makes RAG particularly attractive for enterprise deployments where documents change frequently and compliance requires traceable citations.

## How It Works

A RAG pipeline has two distinct phases: **offline indexing** and **online retrieval + generation**.

**Offline indexing:**
1. Raw documents (PDFs, HTML, text files) are split into chunks.
2. Each chunk is embedded by an encoder model (e.g., `text-embedding-3-small`, `all-MiniLM-L6-v2`) into a dense vector in $\mathbb{R}^d$.
3. Vectors and their corresponding text are stored in a vector database (FAISS, Pinecone, Weaviate, Chroma).

**Online retrieval + generation:**
1. The user's query is embedded using the same encoder.
2. The $k$ nearest chunks are retrieved by approximate nearest-neighbor (ANN) search.
3. Retrieved passages are concatenated into a prompt context.
4. The LLM generates a response conditioned on the query and the retrieved context.

Chunking strategy is a critical engineering decision. Fixed-size chunking (e.g., 512 tokens with 64-token overlap) is simple and works well for homogeneous documents. Semantic chunking splits at paragraph or section boundaries detected by a small sentence classifier. Sentence-window chunking embeds individual sentences but retrieves surrounding context, improving precision-recall trade-offs.

## Mathematical / Formal Framework

Let $q$ be the query and $\mathcal{D} = \{d_1, \ldots, d_N\}$ the document corpus. RAG defines a joint probability over the output sequence $y$:

$$p(y \mid q) = \sum_{d \in \text{top-}k(\mathcal{D}, q)} p(d \mid q) \cdot p(y \mid q, d)$$

In practice the marginalization is approximated by using only the top-$k$ retrieved documents. The retriever score $p(d \mid q)$ is typically:

$$\text{score}(q, d) = \frac{\mathbf{e}_q \cdot \mathbf{e}_d}{\|\mathbf{e}_q\| \cdot \|\mathbf{e}_d\|}$$

where $\mathbf{e}_q, \mathbf{e}_d \in \mathbb{R}^d$ are embeddings from a bi-encoder.

For sparse retrieval, BM25 scores a document for query $q = \{t_1, \ldots, t_m\}$ as:

$$\text{BM25}(q, d) = \sum_{i=1}^{m} \text{IDF}(t_i) \cdot \frac{f(t_i, d) \cdot (k_1 + 1)}{f(t_i, d) + k_1 \cdot \left(1 - b + b \cdot \frac{|d|}{\text{avgdl}}\right)}$$

where $f(t_i, d)$ is term frequency, $|d|$ is document length, and $k_1 = 1.5$, $b = 0.75$ are tuning parameters. Hybrid retrieval linearly combines dense and sparse scores with a weight $\alpha$:

$$\text{score}_{\text{hybrid}} = \alpha \cdot \text{score}_{\text{dense}} + (1 - \alpha) \cdot \text{score}_{\text{sparse}}$$

## Implementation

```python
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
from anthropic import Anthropic

# --- Offline: build index ---

def chunk_text(text: str, chunk_size: int = 400, overlap: int = 50) -> list[str]:
    words = text.split()
    chunks = []
    start = 0
    while start < len(words):
        end = min(start + chunk_size, len(words))
        chunks.append(" ".join(words[start:end]))
        start += chunk_size - overlap
    return chunks

def build_index(documents: list[str], model_name: str = "all-MiniLM-L6-v2"):
    model = SentenceTransformer(model_name)
    chunks = []
    for doc in documents:
        chunks.extend(chunk_text(doc))

    embeddings = model.encode(chunks, convert_to_numpy=True, normalize_embeddings=True)
    dim = embeddings.shape[1]

    index = faiss.IndexFlatIP(dim)  # inner product = cosine on normalized vecs
    index.add(embeddings.astype(np.float32))
    return index, chunks, model

# --- Online: retrieve + generate ---

def retrieve(query: str, index, chunks: list[str], model, k: int = 4) -> list[str]:
    q_emb = model.encode([query], convert_to_numpy=True, normalize_embeddings=True)
    distances, indices = index.search(q_emb.astype(np.float32), k)
    return [chunks[i] for i in indices[0]]

def rag_answer(query: str, retrieved: list[str], client: Anthropic) -> str:
    context = "\n\n---\n\n".join(retrieved)
    prompt = (
        f"Using only the context below, answer the question concisely.\n\n"
        f"Context:\n{context}\n\nQuestion: {query}"
    )
    message = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=512,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text

# --- Example usage ---

documents = [
    "The transformer architecture was introduced in 'Attention Is All You Need' (Vaswani et al., 2017).",
    "FAISS is a library for efficient similarity search developed by Facebook AI Research.",
    "BM25 is a probabilistic retrieval model that extends TF-IDF with document length normalization.",
]

index, chunks, embed_model = build_index(documents)
client = Anthropic()
query = "What is FAISS?"
retrieved = retrieve(query, index, chunks, embed_model)
answer = rag_answer(query, retrieved, client)
print(answer)
```

## Architecture

```
Query
  │
  ▼
Encoder ──► Query Embedding
                │
                ▼
         Vector Index (FAISS)
                │
           top-k chunks
                │
                ▼
  ┌─────────────────────────┐
  │  Prompt = System +      │
  │  Retrieved Context +    │
  │  Query                  │
  └────────────┬────────────┘
               │
               ▼
            LLM API
               │
               ▼
           Response
```

## Key Trade-offs

- **Solves:** knowledge staleness, hallucination on factual questions, context length limits for entire corpora, attribution / citation.
- **Does not solve:** reasoning errors, multi-hop reasoning over many documents without re-ranking, adversarial documents in the corpus.
- **When to use:** proprietary or frequently updated knowledge bases, compliance-driven citation requirements, when fine-tuning budget is unavailable.
- **When not to use:** tasks requiring deep stylistic adaptation (fine-tuning is better), extremely latency-sensitive pipelines where retrieval adds too much overhead.
- **Chunking matters:** chunk size affects recall (larger) vs. precision (smaller). Overlap prevents relevant information from being split across chunk boundaries.
- **Top-k is a lever:** more retrieved documents improve recall but dilute the context signal and increase token cost.

## Variants & Extensions

**Hybrid retrieval** combines dense and sparse signals. The Reciprocal Rank Fusion (RRF) algorithm merges ranked lists without requiring score normalization.

**Re-ranking** applies a cross-encoder (e.g., `cross-encoder/ms-marco-MiniLM-L-6-v2`) as a second-pass scorer on the top-$n$ dense results to reorder them before passing to the LLM. Cross-encoders see query and document jointly, enabling much richer interaction at higher latency.

**HyDE (Hypothetical Document Embeddings)** generates a hypothetical answer to the query with the LLM, embeds the hypothetical answer, then retrieves real documents similar to it. This aligns query embedding space with document embedding space.

**Multi-vector retrieval (ColBERT)** represents documents as sets of token-level vectors and performs late interaction between query and document token sets, improving precision on complex queries.

**Agentic RAG** uses [[tool-use]] to turn retrieval into a tool the model can call iteratively, issuing multiple queries and synthesizing results with [[chain-of-thought]] reasoning.

## Evaluation

The RAGAS framework measures:
- **Faithfulness:** does the answer contain only claims supported by retrieved context?
- **Answer relevance:** is the answer semantically aligned with the question?
- **Context recall:** does the retrieved context contain all information needed?
- **Context precision:** what fraction of retrieved context is actually relevant?

These four metrics form a diagnostic grid. Low faithfulness suggests the LLM is ignoring retrieved context. Low context recall points to retrieval failures.

## Practical Applications

- **Enterprise Q&A over internal documents:** legal, HR, engineering wikis.
- **Customer support:** product manuals, troubleshooting guides retrieved dynamically.
- **Code search and explanation:** codebase as corpus, queries about functions and APIs.
- **Financial research:** earnings reports, regulatory filings, market data — see connections to quantitative workflows.
- **Medical:** clinical guidelines, drug interaction databases, diagnostic decision support.

## The information theory underneath

A RAG system is, at heart, an **information-theoretic** machine. The retriever's job is to maximise the mutual information between the supplied passages and the answer the model will eventually produce — every other architectural choice (chunk size, embedding model, reranker depth) trades off precision against recall against latency around that single quantity.

This connects RAG to two measures from outside the LLM world:

- **[[shannon-entropy|Shannon entropy]]** quantifies how much *uncertainty* the model has about an answer before retrieval; a successful retrieval reduces that entropy in proportion to the relevance of the passages it surfaces.
- **[[kolmogorov-complexity|Kolmogorov complexity]]** explains *why* RAG can never be a perfect substitute for parameters: most facts have descriptions almost as long as themselves, so no compression scheme — neither weights nor a vector index — can store them all. RAG decides which low-complexity neighbourhood of the corpus to dereference at query time, but it cannot rewrite the algorithmic information content of the answer.

In quantitative finance, the same RAG pattern grounds [[llm-financial-analysis|LLM-driven financial analysis]] in primary sources (10-Ks, regulatory filings, internal valuation memos), where hallucinated numbers are unacceptable and citation traceability is a hard requirement.

## Related Topics

- [[tool-use]] — RAG retrieval can be expressed as a tool call, enabling iterative and agentic retrieval patterns.
- [[chain-of-thought]] — multi-hop reasoning over retrieved passages benefits from explicit reasoning steps.
- [[mcp]] — Model Context Protocol provides a standardized interface for attaching retrieval backends to any compliant LLM client.
- [[speculative-decoding]] — orthogonal to RAG but used together in production inference stacks to reduce latency.
- [[shannon-entropy]] — information-theoretic basis of retrieval relevance.
- [[kolmogorov-complexity]] — algorithmic floor on how much knowledge can be retrieved vs parameterised.
- [[llm-financial-analysis]] — RAG grounding for financial analysis with traceable sources.
