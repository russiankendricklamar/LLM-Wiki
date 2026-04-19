---
title: "Knowledge Distillation"
category: "AI Theory"
order: 8
lang: "en"
slug: "/ai-theory/knowledge-distillation"
growth: "seedling"
---

# Knowledge Distillation

**Knowledge distillation (KD)** is a training technique introduced by Hinton, Vanhoucke, Yildirim, and Shlens (2015) in which a smaller, faster **student network** learns to mimic a larger, more accurate **teacher network**. The key insight is that the teacher's soft probability distribution over classes—not just the hard labels—carries dark knowledge: statistical regularities learned by the teacher that compress information about the data distribution and decision boundaries.

## The Hinton framework: temperature-scaled softmax and distillation loss

The core mechanism involves raising the output logits of both teacher and student by a **temperature** $T$ before applying softmax, creating softer probability distributions.

### Soft targets from teacher

Given teacher logits $z_i^{(T)}$ for class $i$, the soft target distribution is:

$$
q_i = \frac{\exp(z_i^{(T)} / T)}{\sum_j \exp(z_j^{(T)} / T)}
$$

At high temperature ($T \gg 1$), the softmax flattens, allocating non-negligible probability to wrong classes. At $T = 1$ (standard softmax), the distribution concentrates on the highest logit. This is the teacher's regularized belief about the data.

### Student learns both hard and soft targets

The student is trained with a weighted blend of two losses:

$$
\mathcal{L} = \alpha \mathcal{L}_{CE}(y, \hat{y}) + (1 - \alpha) T^2 \mathcal{L}_{KL}(q_T \| \hat{q}_T)
$$

where:
- $y$ is the hard label (one-hot vector)
- $\hat{y}$ is the student's standard (temperature-1) softmax predictions
- $q_T$ is the teacher's soft distribution at temperature $T$
- $\hat{q}_T$ is the student's soft distribution at the same temperature $T$
- $\alpha \in [0, 1]$ balances the two objectives

The factor $T^2$ in front of the KL term accounts for the gradient scaling at high temperature: KL divergence gradients shrink as $1/T^2$, so the factor restores magnitude.

### Why soft labels work: dark knowledge

The teacher network, trained on the full dataset, has learned a compressed representation of the data manifold. Its soft predictions—e.g., 70% dog, 20% wolf, 10% husky—encode:

1. **Semantic similarity.** Confusable classes receive higher probability, telling the student which mistakes are more forgivable.
2. **Conditional independence structure.** Correlations in output logits reflect the teacher's learned view of feature relationships.
3. **Implicit regularization.** The soft distribution acts as a form of data augmentation and early stopping without explicit noise.

Hard labels alone cannot convey this: they say "cat" and nothing else, throwing away the teacher's confidence breakdown.

## Intermediate layer distillation (FitNets, PKD)

Beyond the output layer, distillation can target intermediate representations. **FitNet (Romero et al., 2015)** introduces **feature-based distillation**: student hidden states $h_s$ are matched to teacher hidden states $h_t$ via a learnable projection and $\ell_2$ loss:

$$
\mathcal{L}_{feat} = \|W h_s - h_t\|_2^2
$$

**Pedagogical Knowledge Distillation (PKD)** extends this by distilling attention maps, encouraging the student to attend to the same regions as the teacher. This is particularly effective for vision transformers and attention-based architectures.

The benefit: student learns not just what to predict, but *how* the teacher solves the problem internally—the computational strategy, feature hierarchy, and decision path.

## Self-distillation and born-again networks

**Self-distillation** trains a single network to mimic itself at an earlier epoch, without requiring a separate teacher. The network is trained normally, then at epoch $t$ the current weights serve as teacher for future training at epoch $t + k$.

**Born-again networks** (Furlanello et al., 2018) train a sequence of identical-architecture networks: network $n$ is distilled from network $n-1$, each inheriting and refining the dark knowledge. Counter-intuitively, successive generations improve even when using the same dataset and same architecture. This suggests distillation captures implicit regularization properties not fully optimized in a single training run.

## Data-free distillation

Real-world scenarios sometimes deny access to the original training data (privacy, deployment constraints). **Data-free distillation** generates synthetic samples using only the teacher's outputs, allowing the student to learn without seeing the original distribution.

Common approaches:
- **Pseudo-labeling:** Sample from the teacher, use its predictions as supervision.
- **Adversarial reconstruction:** A generator network produces inputs that maximize disagreement between teacher and student, forcing the student to match the teacher on diverse inputs.
- **Prototypical activation patterns:** Invert the teacher's feature maps to synthesize representative inputs.

Data-free distillation is more challenging than supervised KD (larger performance gap), but essential for model compression in privacy-critical domains.

## Distillation for large language models

Recent work applies distillation to LLMs with adaptations:

**Alpaca-style distillation:** Self-instruct or in-context examples from a larger model (GPT-3.5, GPT-4) are used as soft targets to fine-tune a smaller model (7B LLaMA). The teacher provides high-quality reasoning traces and instruction responses that the student absorbs.

**Orca-style distillation:** A larger teacher generates multi-step reasoning responses (chain-of-thought) that the student learns to replicate. Soft token-level probabilities or sequence-level distributions guide the student's decoding. The result is a 7B model that outperforms naive 13B baselines because it has learned the teacher's reasoning process.

**KL-regularized SFT:** The distillation loss for LLMs often takes the form:

$$
\mathcal{L} = \mathbb{E}[\log p_{\theta}(y | x)] - \beta \, \mathrm{KL}(p_{teacher}(\cdot | x) \| p_{\theta}(\cdot | x))
$$

This directly penalizes divergence from the teacher's policy while encouraging likelihood on the (possibly synthetic) data. The factor $\beta$ controls the trade-off.

## Quantization-aware distillation

**QAT (Quantization-Aware Training)** combines distillation with low-precision weights. The student is quantized (INT8 or INT4) while the teacher runs in full precision. Distillation loss helps the student overcome quantization error:

$$
\mathcal{L}_{QAT} = \mathcal{L}_{task}(\text{quantize}(\theta_s), y) + \gamma \mathcal{L}_{KL}(p_T \| p_s)
$$

The distillation term acts as regularization, stabilizing training and preventing the quantization noise from derailing convergence. On [[quantization]], KD can yield 2-3% accuracy recovery versus task loss alone.

## Theoretical analysis: PAC-Bayes bounds

**PAC-Bayes theory** provides generalization bounds. Under distillation, the student's VC dimension may be lower (smaller capacity), but it trains on a regularized objective that approximates the teacher's decision boundary. The bound loosely states:

$$
R(h_s) \leq R(h_t) + \alpha \, \mathrm{KL}(q_T \| \hat{q}_T) + O(1/\sqrt{m})
$$

where $R$ is true error. The student's error is bounded by the teacher's error plus the divergence from the teacher, plus a sample complexity term. This formalizes the intuition: if the student perfectly mimics the teacher and the teacher is good, the student must also be good.

More sophisticated bounds account for the temperature-scaled objective and the fact that soft labels reduce the effective complexity of the learning problem.

## Why it works: information-geometric perspective

From an information-geometric view, the student and teacher are distributions over the model output space. Minimizing KL divergence between them (at temperature $T$) is equivalent to **mode-seeking** behavior: the student matches not just the teacher's maxima but also the structure of its belief distribution.

The hard label loss ensures the student remains on-task (maintaining accuracy), while the soft loss acts as a **prior or constraint**, preventing the student from drifting into pathological directions. The result is a student that generalizes better than if trained on hard labels alone—a form of implicit regularization achieved through inductive bias from the teacher.

## Trade-offs and design choices

1. **Temperature selection:** $T = 3 \ldots 20$ typically works well. Higher $T$ softens targets (good for noisy labels, large distillation gap), lower $T$ sharpens targets (good when teacher and student are similar in capacity).
2. **Weight $\alpha$:** Typical range $[0.5, 1.0]$. Full weight on KL ($\alpha = 0$) can underfit; full weight on hard labels ($\alpha = 1$) discards dark knowledge.
3. **Compression ratio:** Distillation works best when student capacity is 5–50% of teacher. Below 10%, the gap widens and diminishing returns set in.
4. **Architecture mismatch:** Teacher and student can differ (CNN → MobileNet, BERT → DistilBERT). Distillation is more robust to architecture mismatch than supervised learning on the same task.

## Applications

- **Model compression:** Reduce inference latency and memory for edge/mobile devices without sacrificing accuracy.
- **Ensemble knowledge:** Distill an ensemble of teachers into a single student, capturing ensemble diversity.
- **Cross-domain transfer:** A teacher trained on ImageNet guides a student on a downstream task.
- **Privacy-preserving ML:** Train a student on public data using a private teacher's outputs, without sharing raw data.
- **Curriculum learning:** Use a weak teacher initially, then progressively stronger teachers, guiding the student through a curriculum.

## Example: vision

A ResNet-50 teacher (top-1 accuracy 76% on ImageNet) can distill into a MobileNetV2 student. With $T = 4$, $\alpha = 0.7$:

- Hard labels alone: MobileNetV2 achieves 71.8% accuracy.
- With distillation: MobileNetV2 achieves 75.2% accuracy.
- No extra data, no fine-tuning beyond the distillation loss.

The soft targets from ResNet-50 encode which ImageNet classes are similar (e.g., dog breeds), accelerating the student's learning and pushing it to explore more informative decision boundaries.

## Related Topics

- [[neural-scaling-laws]] — scaling relationships between teacher capacity and student compression ratio.
- [[quantization]] — distillation is a key technique for stabilizing low-precision training.
- [[fine-tuning]] — distillation can be viewed as a form of transfer learning or advanced regularization.
- [[transformer-architecture]] — DistilBERT and other distilled transformers are industry standard.
- [[evaluation-llms]] — evaluating distilled LLMs requires both accuracy and latency metrics.
- [[pac-learning]] — PAC-Bayes bounds formalize the generalization of distilled students.
