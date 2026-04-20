---
title: "In-Context Learning"
category: "Language Models"
order: 9
lang: "ru"
slug: "in-context-learning"
growth: "seedling"
---

# In-Context Learning

**In-context learning (ICL)** — способность больших языковых моделей выполнять новые задачи по нескольким примерам в промпте без градиентных обновлений. Модель читает демонстрации и обобщает, имитируя обучение из малого числа размеченных примеров.

## Zero-shot, One-shot, Few-shot

**Zero-shot**: нет примеров, только описание задачи.
**One-shot**: один пример перед запросом.
**Few-shot**: $k \approx 4$–$32$ примеров. Производительность растёт с $k$ до лимита контекста.

GPT-3 показал, что few-shot производительность масштабируется с размером модели.

## Chain-of-Thought

**CoT** (Wei et al. 2022): вместо пар вход→выход предоставляются промежуточные шаги рассуждения. Резко улучшает многошаговую арифметику и символические задачи в моделях $\geq 100$B параметров.

## Гипотеза induction heads

Olsson et al. (2022): ICL возникает из **induction heads** — голов внимания, реализующих алгоритм «скопировать предыдущий паттерн». Дано `[A][B]...[A]` → предсказать `[B]`.

## ICL как неявный байесовский вывод

Xie et al. (2021): ICL — неявный байесовский вывод над латентными задачами $\theta$:

$$
p(y \mid x, D) = \int p(y \mid x, \theta) \, p(\theta \mid D) \, d\theta.
$$

Pretraining на следующий токен неявно обучает модель представлять этот апостериор.

## Чувствительность к формату промпта

ICL хрупок: производительность варьируется на 30%+ при разных формулировках одной задачи. Ключевые факторы: качество меток, консистентность формата, порядок примеров.

## ICL vs Fine-tuning

```chart
{
  "type": "bar",
  "xAxis": "method",
  "data": [
    {"method": "Zero-shot", "accuracy": 62},
    {"method": "Few-shot (8)", "accuracy": 73},
    {"method": "Fine-tune (100)", "accuracy": 79},
    {"method": "Fine-tune (1000)", "accuracy": 87},
    {"method": "Fine-tune (full)", "accuracy": 91}
  ],
  "bars": [
    {"dataKey": "accuracy", "fill": "#10b981", "name": "Точность (%)"}
  ]
}
```

ICL конкурентен с fine-tuning на малых датасетах и не требует обновления весов.

## Связанные темы

- [[large-language-models]] — базовая архитектура
- [[scaling-laws]] — ICL возникает с масштабом
- [[positional-encodings]] — длина контекста ограничивает число демонстраций
- [[attention-mechanisms]] — induction heads в основе ICL
