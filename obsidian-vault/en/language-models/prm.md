---
title: "Process-Based Supervision"
category: "Language Models"
order: 13
lang: "en"
slug: "prm"
---

# Process-Based Supervision (PRMs)

## What Is It

**Process-Based Supervision** is a training paradigm where a model is rewarded for each individual step of its reasoning process, rather than just the final answer. This is implemented via **Process Reward Models (PRMs)**, which act as "verifiers" that judge whether each line of a Chain-of-Thought (CoT) is correct.

In contrast, standard **Outcome-Based Supervision (ORMs)** only provides feedback on the final result. If a model gets the right answer through a flawed reasoning path (a "lucky" mistake), ORM rewards it, reinforcing bad logic. PRM solves this by penalizing the specific step where the logic fails.

## The Mathematical Intuition

Let a reasoning chain $C$ consist of steps $(s_1, s_2, \dots, s_n)$.
- **ORM**: Computes a single reward $R(C, \text{correct\_answer})$.
- **PRM**: Computes a sequence of rewards $r_1, r_2, \dots, r_n$ where each $r_i = P(\text{step } s_i \text{ is valid} \mid s_{1 \dots i-1})$.

The final quality of a reasoning trace can be estimated as the product of step-wise probabilities:
$$P(\text{valid}) = \prod_{i=1}^n r_i$$

## Why PRMs Matter

1. **Hallucination Reduction**: PRMs force models to be rigorous at every step, making it much harder to jump to false conclusions.
2. **Search at Inference Time**: During inference (e.g., in OpenAI o1), PRMs are used to score multiple candidate reasoning paths. The model can perform "Best-of-N" sampling or tree search, picking the path with the highest PRM score.
3. **Credit Assignment**: In complex problems (math, coding), it is often unclear *where* a model went wrong. PRMs provide a precise signal for reinforcement learning.

## PRM vs. ORM Performance

```chart
{
  "type": "line",
  "xAxis": "n_samples",
  "data": [
    {"n_samples": 1, "orm": 42, "prm": 45},
    {"n_samples": 4, "orm": 55, "prm": 62},
    {"n_samples": 16, "orm": 63, "prm": 74},
    {"n_samples": 64, "orm": 68, "prm": 81},
    {"n_samples": 256, "orm": 71, "prm": 86}
  ],
  "lines": [
    {"dataKey": "orm", "stroke": "#ef4444", "name": "Outcome-based (ORM)"},
    {"dataKey": "prm", "stroke": "#10b981", "name": "Process-based (PRM)"}
  ]
}
```
*Accuracy on MATH-level problems using "Best-of-N" sampling. PRMs scale much better as we increase the number of candidate solutions.*

## Real-World Examples

- **OpenAI PRM800K**: A dataset of 800,000 step-level labels used to train verifiers for mathematical reasoning.
- **DeepSeek-R1**: Uses a combination of rule-based verifiers (for math/code) and neural PRMs to align the model's internal reasoning.

## Related Topics

[[reasoning-models]] — the models that use PRMs  
[[chain-of-thought]] — the reasoning trace being supervised  
[[rlhf]] — the alignment framework where PRMs are used as reward functions
