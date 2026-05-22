---
title: BERT
category: AI Architectures
order: 129
lang: ru
slug: bert
---

## Обзор
BERT (Bidirectional Encoder Representations from Transformers) — это архитектура языковой модели, состоящая только из энкодеров Transformer, предложенная Google.

## Предобучение
В отличие от однонаправленных моделей, BERT является глубоко двунаправленной. Она обучается на двух задачах без учителя:
1. **Masked Language Modeling (MLM):** Маскирование случайных токенов и их предсказание по контексту.
2. **Next Sentence Prediction (NSP):** Определение того, следует ли второе предложение за первым логически.