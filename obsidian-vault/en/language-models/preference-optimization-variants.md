---
title: "Advanced Preference Optimization"
category: "Language Models"
order: 31
lang: "en"
slug: "preference-optimization-variants"
---

# Advanced Preference Optimization

## Beyond [[dpo]]

While [[dpo|Direct Preference Optimization (DPO)]] revolutionized alignment by removing the need for a separate reward model and PPO, it has limitations, such as sensitivity to the quality of the reference model and a tendency to overfit on the preference pair margins. Several variants have emerged to address these issues.

## 1. KTO (Kahneman-Tversky Optimization)

KTO is inspired by **Prospect Theory**. Unlike DPO, which requires pairs of (chosen, rejected) responses, KTO can work with **unpaired data** (just a binary label of "good" or "bad" for a single response).

The KTO loss function incorporates a utility function that mirrors how humans perceive gains and losses (being more sensitive to losses than gains):
$$\mathcal{L}_{KTO} = \mathbb{E}_{x,y,z} [ w(z) \cdot \text{v}(\pi_\theta, \pi_{ref}, x, y, z) ]$$
where $z \in \{+1, -1\}$ is the binary signal. This makes it much easier to scale because pairwise preference data is harder to collect than simple binary feedback.

## 2. IPO (Identity Preference Optimization)

IPO adds a regularization term to the DPO objective to prevent the model's likelihood from diverging too far from the reference model, which is a common failure mode in standard DPO (leading to decreased output diversity or "mode collapse").

$$\mathcal{L}_{IPO} = \mathbb{E}_{(x, y_w, y_l)} \left[ \left( \log \frac{\pi_\theta(y_w|x)}{\pi_{ref}(y_w|x)} - \log \frac{\pi_\theta(y_l|x)}{\pi_{ref}(y_l|x)} - \frac{\beta}{2} \right)^2 \right]$$

## 3. ORM and PRM Integration

Alignment is increasingly moving from **Outcome-based** to **Process-based** supervision:

- **ORM (Outcome Reward Model)**: Evaluates only the final answer.
- **PRM (Process Reward Model)**: Evaluates every intermediate step in a reasoning chain.

Integrating PRMs with preference optimization (e.g., via **Step-wise DPO**) allows models to learn *how* to reason, rather than just memorizing correct final answers. This is critical for [[reasoning-models|Reasoning Models]].

## Comparison of Methods

| Method | Data Requirement | Key Strength |
|---|---|---|
| **DPO** | Paired (Chosen/Rejected) | Simple, no reward model needed. |
| **KTO** | Unpaired (Good/Bad) | Easier data collection, prospect theory alignment. |
| **IPO** | Paired | Stronger regularization, prevents overfitting. |
| **PPO** | Prompt + Reward Model | Most flexible, but extremely unstable. |

## Related Topics

[[dpo]] — the foundation for these variants  
[[prm]] — process-based supervision  
[[rlhf]] — the original reinforcement learning framework  
[[reasoning-models]] — where PRM integration is most valuable
