---
title: "In-Context Learning"
category: "Language Models"
order: 9
lang: "en"
slug: "in-context-learning"
growth: "seedling"
---

# In-Context Learning

**In-context learning (ICL)** is the ability of large language models to perform new tasks from a few demonstrations provided in the prompt — without any gradient updates. The model reads examples and generalises, mimicking learning from just a handful of labelled instances.

## Few-Shot, One-Shot, Zero-Shot

**Zero-shot**: no examples, just a task description ("Translate to French:").

**One-shot**: one example provided before the query.

**Few-shot**: $k$ examples ($k \approx 4$–$32$). Performance typically increases with $k$ up to context limits, but saturates.

GPT-3 demonstrated that few-shot performance scales with model size — a 175B model far outperforms 1B on ICL tasks even with identical prompts.

## Chain-of-Thought Prompting

**CoT** (Wei et al. 2022): instead of providing input→output pairs, provide input→*reasoning steps*→output. The model learns to generate intermediate reasoning before the final answer.

Standard few-shot: "Q: Roger has 5 tennis balls... A: 11"

CoT few-shot: "Q: Roger has 5 tennis balls... A: Roger started with 5 balls. He bought 2 more cans of 3 balls = 6 balls. 5 + 6 = 11."

CoT dramatically improves performance on multi-step arithmetic, commonsense reasoning, and symbolic tasks — particularly in models $\geq 100$B parameters.

## Why Does ICL Work? The Induction Head Hypothesis

Olsson et al. (2022) proposed that ICL emerges from **induction heads** — attention heads that implement a "copy previous pattern" algorithm. Given `[A][B]...[A]`, an induction head predicts `[B]`.

In-context learning can be viewed as the model recognising the input→output mapping from demonstrations and applying it to the new query — a generalised pattern completion.

## ICL as Implicit Bayesian Inference

Xie et al. (2021) formalised ICL as implicit Bayesian inference: the model implicitly computes a posterior over latent tasks $\theta$ given demonstrations $D$:

$$
p(y \mid x, D) = \int p(y \mid x, \theta) \, p(\theta \mid D) \, d\theta.
$$

The LLM's pretraining objective — next token prediction — implicitly trains it to represent this posterior, as the optimal predictor for a mixture of tasks is a Bayesian mixture model.

## Task Vector Hypothesis

Hendel et al. (2023): ICL computes a "task vector" — a direction in activation space encoding the task — in early layers, then applies it in later layers. This explains why:
- ICL generalises beyond the literal format of demonstrations
- Prompt order matters little once the task vector is formed
- Corrupting demonstrations at early layers destroys performance

## Sensitivity to Prompt Format

ICL is brittle: performance can vary by 30%+ across different phrasings of the same task, orderings of demonstrations, or label formats. This sensitivity decreases with model scale but never disappears.

Key factors:
- **Label quality**: random labels hurt less than expected (Brown et al.)
- **Format consistency**: input/output format must match target query
- **Ordering**: last examples have disproportionate influence

## ICL vs Fine-Tuning

```chart
{
  "type": "bar",
  "xAxis": "method",
  "data": [
    {"method": "Zero-shot", "accuracy": 62},
    {"method": "Few-shot (8)", "accuracy": 73},
    {"method": "Fine-tune (100 ex)", "accuracy": 79},
    {"method": "Fine-tune (1000 ex)", "accuracy": 87},
    {"method": "Fine-tune (full)", "accuracy": 91}
  ],
  "bars": [
    {"dataKey": "accuracy", "fill": "#10b981", "name": "Accuracy (%)"}
  ]
}
```

ICL is competitive with fine-tuning on small datasets but fine-tuning dominates at scale. The tradeoff: ICL needs no gradient updates and generalises at inference time.

## Related Topics

- [[large-language-models]] — base architecture enabling ICL
- [[scaling-laws]] — ICL emerges with scale
- [[positional-encodings]] — context length limits ICL demonstrations
- [[attention-mechanisms]] — induction heads underlying ICL
