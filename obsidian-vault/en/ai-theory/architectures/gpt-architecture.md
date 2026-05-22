---
title: GPT
category: AI Architectures
order: 130
lang: en
slug: gpt-architecture
---

## Overview
GPT (Generative Pre-trained Transformer) is a decoder-only [[llm]] architecture developed by OpenAI.

## Mechanism
GPT uses masked self-attention to ensure that the prediction for position $i$ can depend only on the known outputs at positions less than $i$. It is trained primarily on a causal language modeling objective (predicting the next token):
$$ L = \sum_i \log P(u_i \mid u_{i-k}, \dots, u_{i-1}) $$
This autoregressive structure makes it exceptionally powerful at generative tasks.