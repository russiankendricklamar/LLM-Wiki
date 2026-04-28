---
title: "Alignment: RLHF and DPO"
category: "Language Models"
date: 2026-04-28
tags:
  - alignment
  - rlhf
  - dpo
  - safety
aliases:
  - RLHF
  - DPO
  - Direct Preference Optimization
---

# Alignment: RLHF and DPO

**Alignment** is the process of fine-tuning a Large Language Model (LLM) to ensure its behavior is consistent with human values, preferences, and instructions. Without alignment, a base model might be toxic, helpfulness-constrained, or prone to hallucination.

## RLHF (Reinforcement Learning from Human Feedback)

The standard framework popularized by OpenAI (used for InstructGPT and ChatGPT). It involves three main steps:

1. **SFT (Supervised Fine-Tuning):** Training the model on a curated dataset of prompt-response pairs.
2. **Reward Modeling:**
   - Humans rank multiple model outputs for the same prompt.
   - A separate **Reward Model (RM)** is trained to predict which response a human would prefer.
3. **PPO (Proximal Policy Optimization):** The LLM is optimized via Reinforcement Learning to maximize the score from the Reward Model, using a KL-penalty to prevent the model from drifting too far from the base weights.

**Drawbacks:** PPO is notoriously unstable, computationally expensive, and sensitive to hyperparameters.

## DPO (Direct Preference Optimization)

Introduced by Stanford researchers in 2023, DPO has become the preferred choice for many state-of-the-art open-source models (like Llama 3 and Mistral).

**The Core Idea:** DPO eliminates the need for a separate Reward Model and the complex PPO loop.
- It provides a mathematical mapping that allows for direct optimization of the policy using a simple binary cross-entropy loss on preference data.
- The model learns to increase the likelihood of the "winning" response ($y_w$) over the "losing" one ($y_l$), inherently implicitly modeling the reward.

### RLHF vs. DPO
| Feature | RLHF (PPO) | DPO |
|---|---|---|
| **Complexity** | High (3 stages) | Low (1 stage after SFT) |
| **Stability** | Very unstable | Robust and stable |
| **Compute** | Requires multiple models in memory | Requires only the policy and a reference model |

## Safety and Constitutional AI

Alignment is the primary tool for implementing safety guardrails. Beyond simple human feedback, methods like **Constitutional AI** (used by Anthropic) use AI-generated feedback based on a set of written principles to guide the model toward being "Helpful, Honest, and Harmless."

## Related Topics
[[information-geometry|Information Geometry]] | [[mechanistic-interpretability|Mechanistic Interpretability]] | [[constitutional-ai|Constitutional AI]]
