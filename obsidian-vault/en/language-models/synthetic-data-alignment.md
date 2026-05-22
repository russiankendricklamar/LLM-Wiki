---
title: "Synthetic Data & Self-Alignment"
category: "Language Models"
order: 32
lang: "en"
slug: "synthetic-data-alignment"
---

# Synthetic Data & Self-Alignment

## The Data Bottleneck

As models grow larger, the bottleneck for improvement has shifted from compute to high-quality data. Human-labeled data is expensive, slow to collect, and difficult to scale. **Synthetic Data** and **Self-Alignment** techniques allow models to generate their own training data or refine their own behavior with minimal human intervention.

## 1. Self-Instruct

The **Self-Instruct** framework (introduced by Wang et al., 2022) allows a vanilla language model to bootstrap its own instruction-following capabilities. The process follows these steps:
1.  **Seed Tasks**: Start with a small set of human-written instructions (e.g., 175 tasks).
2.  **Task Generation**: Use the model to generate new tasks based on the seeds.
3.  **Input/Output Generation**: For each new task, the model generates possible inputs and the corresponding outputs.
4.  **Filtering**: Heuristics are used to remove low-quality or repetitive tasks.
5.  **Fine-tuning**: The model is fine-tuned on the resulting high-quality synthetic dataset.

This was the basis for many early open-source models like **Alpaca**.

## 2. Constitutional AI (Self-Correction)

Developed by Anthropic, **Constitutional AI** aligns models using a set of rules (a "Constitution") instead of thousands of human preference labels.
- **Supervised Phase**: The model generates responses, then critiques them based on the Constitution and revises them. The model is then fine-tuned on these self-corrected responses.
- **RL Phase**: A "Preference Model" is trained on the model's own self-critiques, and the model is then aligned via RL (similar to RLHF but with AI feedback instead of human feedback, or **RLAIF**).

## 3. ReST (Reinforced Self-Training)

ReST is an iterative process where:
1.  **Generate**: The model generates multiple outputs for a set of prompts.
2.  **Filter**: A reward model (or a heuristic, like unit tests for code) scores the outputs.
3.  **Fine-tune**: The model is fine-tuned on the highest-scoring samples.
4.  **Repeat**: Each iteration improves the model's ability to generate high-quality data for the next round.

## 4. Scaling Laws for Synthetic Data

While synthetic data is powerful, it carries the risk of **Model Collapse** — a phenomenon where a model trained on its own output starts to lose its understanding of the "tail" of the data distribution, eventually producing repetitive or nonsensical outputs. To prevent this, practitioners often mix synthetic data with a "ground truth" human dataset.

## Comparison Table

| Technique | Source of "Truth" | Key Benefit |
|---|---|---|
| **Self-Instruct** | Small human seed set | Bootstraps instruction following from scratch. |
| **Constitutional AI** | Written rules (Constitution) | Highly controllable alignment without human labels. |
| **ReST** | Reward Model or Code Tests | Excellent for objective tasks (math, code). |
| **Distillation** | Larger teacher model | Transfers capabilities from large to small models. |

## Related Topics

[[fine-tuning]] — the process of applying this data  
[[rlhf]] — the human-labeled alternative  
[[preference-optimization-variants]] — advanced ways to use this data  
[[slm]] — small models often rely on synthetic data for performance
