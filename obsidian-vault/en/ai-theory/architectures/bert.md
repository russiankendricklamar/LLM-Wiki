---
title: BERT
category: AI Architectures
order: 129
lang: en
slug: bert
---

## Overview
BERT (Bidirectional Encoder Representations from Transformers) is an encoder-only [[llm]] architecture introduced by Google.

## Pre-training
Unlike earlier unidirectional models, BERT is deeply bidirectional. It is pre-trained using two unsupervised tasks:
1. **Masked Language Modeling (MLM):** Randomly masking tokens and predicting them from context.
2. **Next Sentence Prediction (NSP):** Predicting whether two sentences logically follow one another.