---
title: "Multi-Token Prediction"
category: "Language Models"
order: 20
lang: "en"
slug: "multi-token-prediction"
author: "Meta AI Research (reproduced)"
---

# Multi-Token Prediction (MTP)

Multi-Token Prediction is a training paradigm for Large Language Models (LLMs) where the model is optimized to predict multiple future tokens simultaneously, rather than just the single next token. Introduced primarily by **Meta AI (2024)**, this approach aims to improve sample efficiency, reasoning capabilities, and inference speed.

## The Core Concept

In standard autoregressive modeling (Next-Token Prediction), the model learns a mapping from $x_{1:t}$ to $x_{t+1}$. MTP extends this by requiring the model to predict $n$ future tokens $x_{t+1}, \dots, x_{t+n}$ at each position.

### Architecture: Shared Trunk and Independent Heads
The MTP architecture typically consists of:
1.  **Shared Trunk**: A standard [[transformer-architecture|transformer]] body that processes the input sequence and produces a latent representation $z_t$.
2.  **$n$ Prediction Heads**: Independent output heads (usually linear layers or small MLPs) that take $z_t$ and predict $x_{t+1}, \dots, x_{t+n}$ respectively.

## The Modified Loss Function

The model is trained using a multi-task objective. For each position $t$, the total loss is a weighted sum of the individual cross-[[shannon-entropy|entropy]] losses for each predicted token:

$$\mathcal{L}_{MTP} = \sum_{t} \sum_{i=1}^{n} \lambda_i \mathcal{L}(P(x_{t+i} \mid x_{1:t}), x_{t+i})$$

where $\lambda_i$ are hyperparameters that weight the importance of future predictions. In practice, predicting tokens further in the future is harder and is often weighted less.

## Benefits

1.  **Better Long-Term Dependency**: By forcing the model to look ahead, it develops a better internal representation of global structure and long-range patterns.
2.  **Improved Reasoning**: MTP encourages the model to plan ahead, which is particularly beneficial for tasks requiring multi-step logic or code generation.
3.  **Sample Efficiency**: The model extracts more signal from each training example, as it gets $n$ times more supervision at every step.
4.  **Inference Speedup**: During inference, the multiple heads can be used for a form of [[speculative-decoding|Self-Speculative Decoding]], where the model's own heads provide "draft" tokens that are verified in a single pass.

## Why It Works

Standard LLMs often suffer from "greedy" local optimization. MTP acts as a regularizer that prevents the model from focusing too much on the immediate next token, which might be a "dead end" in terms of global coherence. It effectively teaches the model to internalize the "V-shape" of information flow: encoding local context into a rich latent state that can unfold into multiple valid future paths.

## Related Topics

[[llm]] — the foundation of autoregressive modeling  
[[speculative-decoding]] — how MTP accelerates inference  
[[training-dynamics]] — the impact of different loss objectives  
[[code-models]] — where MTP shows the most significant gains
