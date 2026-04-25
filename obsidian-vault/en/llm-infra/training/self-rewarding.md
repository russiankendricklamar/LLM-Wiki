---
title: "Self-Rewarding Models"
category: "LLM Infrastructure"
order: 13
lang: "en"
slug: "self-rewarding"
---

# Self-Rewarding Language Models

**Self-Rewarding Language Models** (Yuan et al., 2024) represent a new frontier in AI training where a model acts as both the **student** (generating responses) and the **teacher** (judging and rewarding those responses). This allows models to improve beyond the quality of human-labeled data, potentially breaking through the "human performance ceiling."

## The Iterative Loop

The training process follows a "Self-Correction" cycle:

1.  **Response Generation**: For a given prompt, the model generates $N$ candidate responses.
2.  **Self-Evaluation**: The model uses its own internal reasoning (often with a special "Judge" prompt) to assign a score (e.g., 1-5) to each of its own responses.
3.  **Data Curation**: The highest-scored responses become the new "Preferred" data, and the lowest become "Rejected."
4.  **[[dpo]]/[[fine-tuning]]**: The model is updated using this synthetic preference data.
5.  **Repeat**: The model is now slightly smarter, and the loop starts again (Iterative [[dpo]]).

## Why It Works

The key insight is that **Evaluation is easier than Generation**. A model might not be able to generate a perfect solution in one go, but it can often recognize which of its three attempts is the best. By training on its own judgments, the model improves its evaluation ability, which in turn improves its generation ability in the next round.

## Mathematical Formulation: Iterative DPO

At iteration $M$, we have model $\pi_M$. We generate a dataset $\mathcal{D}_M$ where:
$$y_w, y_l \sim \pi_M(x), \quad \text{ModelScore}(y_w) > \text{ModelScore}(y_l)$$
We then update the model to $\pi_{M+1}$ by minimizing the DPO loss on $\mathcal{D}_M$.

## Visualization: Performance Scaling

```chart
{
  "type": "line",
  "xAxis": "iteration",
  "data": [
    {"iteration": 0, "human_baseline": 65, "self_rewarding": 65},
    {"iteration": 1, "human_baseline": 65, "self_rewarding": 72},
    {"iteration": 2, "human_baseline": 65, "self_rewarding": 78},
    {"iteration": 3, "human_baseline": 65, "self_rewarding": 81}
  ],
  "lines": [
    {"dataKey": "human_baseline", "stroke": "#94a3b8", "name": "Human-Labeled SFT"},
    {"dataKey": "self_rewarding", "stroke": "#10b981", "name": "Self-Rewarding Iterations"}
  ]
}
```
*Unlike traditional [[fine-tuning]], which plateaus at human level, self-rewarding models can continue to improve by refining their internal logic through recursive loops.*

## Real-World Examples

- **Llama 3**: Meta used extensive rounds of self-correction and synthetic data to push Llama 3 beyond the capabilities of its predecessor.
- **DeepSeek-R1**: Uses a "Pure RL" phase where rewards are purely automated (rule-based or self-judged), allowing the model to develop "Aha!" moments without human intervention.

## Risks and Limitations

1.  **Reward Hacking**: The model might learn to give high scores to responses that sound good but are factually wrong.
2.  **Echo Chambers**: Without external grounding (like a code compiler or math verifier), the model's errors might be reinforced over time.

## Related Topics

[[prm]] — more granular rewards (per step)  
[[reasoning-models]] — the ultimate goal of self-rewarding loops  
[[dpo]] — the engine used for the update step
---
