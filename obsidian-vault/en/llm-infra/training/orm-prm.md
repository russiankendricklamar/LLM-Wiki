---
title: "ORM vs PRM: Preference Learning"
category: "LLM Infrastructure"
order: 14
lang: "en"
slug: "orm-prm"
---

# ORM vs PRM: Two Ways to Reward Reasoning

In the process of aligning LLMs with human preferences (Alignment), the choice of **how to reward** the model determines its final capabilities. This is especially true for reasoning models like OpenAI o1 or DeepSeek-R1.

## 1. Outcome Reward Models (ORM)

An ORM rewards the model based solely on the **final answer**.
- **The Signal**: "Was the answer correct?" (Yes/No).
- **The Pros**: Easy to automate (e.g., check a math result or run code tests). No human annotation of intermediate steps is needed.
- **The Cons**: It ignores the reasoning path. A model might get the right answer for the wrong reasons (**False Positives**), reinforcing flawed logic.

## 2. Process Reward Models (PRM)

A PRM rewards the model for **each individual step** in its reasoning chain.
- **The Signal**: "Is this specific step logical and correct?"
- **The Pros**: Provides a dense, high-quality signal. It allows for **Inference-time Search**: the model can generate 100 paths and pick the one where every step has a high PRM score.
- **The Cons**: Extremely expensive to train. Requires human experts to label thousands of individual reasoning steps (e.g., OpenAI's PRM800K dataset).

## Comparison: Accuracy on Complex Tasks

| Task Type | Best with ORM | Best with PRM |
|---|---|---|
| Creative Writing | Yes (Final vibe matters) | No (Path is subjective) |
| Multi-step Math | No (Vulnerable to lucky guesses) | **Yes** (Verifies the proof) |
| Code Logic | Possible (via tests) | **Excellent** (Verifies intent) |

## Implementation in RLHF

In a typical RLHF loop, the reward model $R(x, y)$ is used to compute the advantage for PPO or GRPO. 
- Using **PRM** effectively turns the LLM into a "Tree Searcher" (like [[mcts|MCTS]]), where it evaluates which branch to take next based on step-wise rewards.

## Visualization: Reward Density

```chart
{
  "type": "bar",
  "xAxis": "step",
  "data": [
    {"step": "Step 1", "orm": 0, "prm": 0.85},
    {"step": "Step 2", "orm": 0, "prm": 0.92},
    {"step": "Step 3", "orm": 0, "prm": 0.15},
    {"step": "Final", "orm": 1, "prm": 0.10}
  ],
  "lines": [
    {"dataKey": "orm", "stroke": "#ef4444", "name": "ORM Signal (Sparse)"},
    {"dataKey": "prm", "stroke": "#10b981", "name": "PRM Signal (Dense)"}
  ]
}
```
*In this example, the model made a logical error at Step 3. An ORM (red) still gives a full reward because the final answer was "lucky," whereas a PRM (green) catches the mistake immediately.*

## Related Topics

[[prm]] — deeper look at process supervision  
[[reasoning-models]] — models built on these rewards  
[[rlhf]] — the framework for preference optimization
---
