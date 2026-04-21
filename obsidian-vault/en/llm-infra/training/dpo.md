---
title: "Direct Preference Optimization (DPO)"
category: "LLM Infrastructure"
order: 7
lang: "en"
slug: "dpo"
---

# Direct Preference Optimization (DPO)

## What Is It

Direct Preference Optimization (DPO) is a stable and computationally efficient method for aligning Large Language Models to human preferences. Before DPO, the standard approach was **[[rlhf]]** (Reinforcement Learning from Human Feedback), which required training a separate Reward Model and using complex RL algorithms like PPO (Proximal Policy Optimization).

DPO simplifies this by showing that the RL objective can be solved with a simple **binary cross-[[shannon-entropy|entropy]] loss** directly on preference data. It eliminates the need for a reward model, a value network, and the instability of reinforcement learning.

## The Mathematical Breakthrough

In RLHF, we maximize the reward $r(x, y)$ while staying close to a reference model $\pi_{ref}$ (to prevent "reward hacking"):
$$\max_{\pi_\theta} \mathbb{E}_{x, y \sim \pi_\theta} [r(x, y)] - \beta \mathbb{D}_{KL}(\pi_\theta \| \pi_{ref})$$

The DPO authors (Rafailov et al., 2023) derived that the optimal policy $\pi^*$ for any reward function $r$ has a closed-form solution:
$$\pi_\theta(y \mid x) = \frac{1}{Z(x)} \pi_{ref}(y \mid x) \exp\left(\frac{1}{\beta} r(x, y)\right)$$

By rearranging this to solve for $r(x, y)$, they substituted it into the Bradley-Terry preference model. This results in the **DPO Loss Function**:

$$\mathcal{L}_{\text{DPO}}(\pi_\theta; \pi_{ref}) = -\mathbb{E}_{(x, y_w, y_l) \sim \mathcal{D}} \left[ \log \sigma \left( \beta \log \frac{\pi_\theta(y_w \mid x)}{\pi_{ref}(y_w \mid x)} - \beta \log \frac{\pi_\theta(y_l \mid x)}{\pi_{ref}(y_l \mid x)} \right) \right]$$

Where:
- $y_w$ is the **preferred** completion.
- $y_l$ is the **rejected** completion.
- $\sigma$ is the sigmoid function.
- $\beta$ is a hyperparameter controlling the strength of the KL penalty.

## Comparison: DPO vs. RLHF

| Feature | RLHF (PPO) | DPO |
|---|---|---|
| **Reward Model** | Required (Separate training) | Not required |
| **Complexity** | High (4 models in memory: Policy, Ref, Reward, Value) | Low (2 models: Policy, Ref) |
| **Stability** | Very sensitive to hyperparameters | Very stable |
| **Compute** | High (Needs sampling/inference during training) | Lower (Standard supervised-style training) |
| **Sampling** | Online (Slow) | Offline (Fast) |

## Implementation with `trl`

```python
from trl import DPOConfig, DPOTrainer
from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("base_model_path")
ref_model = AutoModelForCausalLM.from_pretrained("base_model_path")
tokenizer = AutoTokenizer.from_pretrained("base_model_path")

training_args = DPOConfig(
    output_dir="./dpo_results",
    beta=0.1,
    learning_rate=5e-7,
    per_device_train_batch_size=4,
)

dpo_trainer = DPOTrainer(
    model,
    ref_model,
    args=training_args,
    train_dataset=train_dataset, # Dataset with 'prompt', 'chosen', 'rejected'
    tokenizer=tokenizer,
)

dpo_trainer.train()
```

## Limitations

- **Dataset Quality**: DPO is highly sensitive to noise in the preference data.
- **Reference Model Dependency**: It requires a good reference model (usually the SFT checkpoint) to calculate the log-prob ratios.
- **Likelihood Over-optimization**: In some cases, DPO can make the model "forget" how to generate diverse text by focusing too much on the preference pairs.

## Related Topics

[[llm]] — the models we align  
[[fine-tuning]] — the step before DPO  
[[agents]] — aligned models make better agents
