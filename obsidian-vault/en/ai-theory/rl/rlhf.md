---
title: "RLHF (Reinforcement Learning from Human Feedback)"
category: "AI Theory"
order: 15
lang: "en"
slug: "rlhf"
growth: "seedling"
---

RLHF (Reinforcement Learning from Human Feedback) is a three-stage pipeline that aligns language models with human preferences by encoding subjective taste into a scalar reward signal. The method became industry standard after InstructGPT demonstrated that a 1.3B [[llm|LLM]] trained with RLHF outperforms a 175B model trained with only supervised fine-tuning on human evaluation. RLHF solves a fundamental problem: training on data (even filtered by quality) encodes average human behavior, not the desired behavior.

## Three-Stage Pipeline

**Stage 1: Supervised Fine-Tuning (SFT)**

Begin with a pretrained base model $\pi_\text{base}$. Collect a dataset of pairs $(x, y^*)$ (prompt, human-written response) annotated by people. Train the language model to maximize log likelihood:

$$\mathcal{L}_\text{SFT} = -\mathbb{E}_{x,y^*}[\log \pi_\text{SFT}(y^* | x)]$$

The result $\pi_\text{SFT}$ becomes the initial policy for RLHF; we keep it (it later becomes $\pi_\text{ref}$).

**Stage 2: Reward Model Training**

Collect a preference dataset: for a prompt $x$, two generations $(y_w, y_l)$ with a label "$y_w$ is better than $y_l$". Train a scalar reward model $r_\theta(x, y)$ to predict preference probability using the Bradley-Terry model:

$$P(y_w \succ y_l | x) = \sigma(r_\theta(x, y_w) - r_\theta(x, y_l))$$

where $\sigma$ is the sigmoid function. The objective function (binary cross-entropy):

$$\mathcal{L}_\text{reward} = -\mathbb{E}_{x,(y_w, y_l)}[\log \sigma(r_\theta(x, y_w) - r_\theta(x, y_l)) + \log(1 - \sigma(r_\theta(x, y_l) - r_\theta(x, y_w)))]$$

or equivalently:

$$\mathcal{L}_\text{reward} = -\log \sigma(r_w - r_l)$$

The reward model codifies "taste" in network parameters, replacing the human in the loop.

**Stage 3: PPO Optimization**

Generate responses from $\pi_\text{SFT}$, score them with the reward model, update the policy via Proximal Policy Optimization (PPO). The objective combines reward signal with KL divergence regularization to the initial model:

$$\mathcal{L}_\text{PPO} = \mathbb{E}_{x,y}[\text{clip} + \beta \cdot \text{KL}[\pi_\theta || \pi_\text{ref}]]$$

where clip is the standard PPO clipping term and $\beta$ is a regularization coefficient (typically 0.01–0.1). The KL term prevents the policy from drifting too far from $\pi_\text{ref}$; otherwise, catastrophic forgetting occurs (the model forgets how to write code because it optimizes on the tail of the distribution).

## Why KL Regularization: Preventing Reward Hacking

The reward model is an approximation of human preferences, trained on a finite dataset. If policy space is unconstrained, $\pi_\theta$ finds adversarial examples: responses that technically maximize $r_\theta$ but humans find abhorrent (flattery, garbled text, factually incorrect). The KL penalty keeps the policy distribution close to $\pi_\text{ref}$, ensuring new responses remain in the familiar regime where the reward model is reliable.

## Constitutional AI: AI Critique Instead of Human Labels

Anthropic proposed a scalable alternative: replace human annotators with AI-generated critiques. The process:

1. Generate response $y$ from the model.
2. Query $\pi_\text{SFT}$ for a critique: "By the constitution [ethics/truth/helpfulness], evaluate this response."
3. Ask the model to revise its answer $y'$ based on the critique.
4. Train the reward model to prefer $y'$ over $y$.
5. Iteratively update the RLHF policy.

This is a self-reinforcing loop: the model critiques itself, learns from self-critique, improves. We avoid expensive human annotation (which is heterogeneous and slow) but risk amplifying systematic model biases (the model may penalize itself for what humans would consider correct).

## DPO: Direct Preference Optimization

DPO skips the reward model and PPO, optimizing the policy directly on preference data. The key insight: solve the Bellman equation for the reward model and express the optimal policy $\pi^*$ in closed form, then optimize it directly.

The optimal reward (from PPO optimization) has the form:

$$r^*(x, y) = \frac{1}{\beta} \log \frac{\pi^*(y|x)}{\pi_\text{ref}(y|x)}$$

Rearranging:

$$\pi^*(y|x) = \frac{1}{Z(x)} \pi_\text{ref}(y|x) e^{\beta r^*(x,y)}$$

where $Z(x)$ is a partition function. DPO minimizes the log-likelihood of choosing the wrong response:

$$\mathcal{L}_\text{DPO} = -\log \sigma\left(\beta \log \frac{\pi_\theta(y_w|x)}{\pi_\text{ref}(y_w|x)} - \beta \log \frac{\pi_\theta(y_l|x)}{\pi_\text{ref}(y_l|x)}\right)$$

**Advantages:** no reward model (fewer parameters), no PPO (simpler, more stable), single training phase.

**Disadvantages:** less flexible (cannot change reward signal without retraining), requires high-quality preferences, may overfit small datasets.

## Why RLHF Works: Human Preference as Orthogonal Signal

InstructGPT (OpenAI, 2022) showed that a 1.3B RLHF model outperforms a 175B SFT model on human evaluation of helpfulness and safety. The effect is massive: **training on human preferences contains information orthogonal to model scale**. Humans prefer clear, honest, focused responses; SFT does not optimize for these. RLHF encodes this "taste" in parameters and focuses gradients on a productive search trajectory.

## Alignment Tax: Capability-Alignment Tradeoff

RLHF improves alignment (safety, helpfulness, honesty) but often reduces raw capability (performance on MMLU, HumanEval). The model spends "capacity" on politeness, refusal of harmful requests, structured reasoning—at the cost of narrow specialization. This is the **alignment tax**: we add fine-tuning and reduce peak performance. In production, this tradeoff is acceptable (safer and helpful beats powerful and dangerous), but in research it remains an open problem: how to raise both frontiers simultaneously.

## Open Problems

**Reward Model Generalization:** the reward model often overfits to its preference dataset; when the policy generates new domains of responses, the model gives poor signals. This motivates train-test distribution mismatch research.

**Preference Data Quality:** if annotators are noisy, adversarial, or biased, the reward model encodes these artifacts. Scaling oversight (how to obtain high-quality preferences over trillions of potential responses?) remains unsolved.

**Multi-Objective Alignment:** a single scalar reward cannot capture the multidimensionality of quality (truth, helpfulness, creativity, safety conflict). This points toward [[mechanistic-interpretability|interpretability]] of the reward model: what is it really optimizing?

Related work: [[reinforcement-learning|RL]], [[transformer-architecture|transformer architectures]], [[neural-scaling-laws|scaling laws]], [[chain-of-thought|chain-of-thought]] (alternative to RLHF for enhancing reasoning ability).
