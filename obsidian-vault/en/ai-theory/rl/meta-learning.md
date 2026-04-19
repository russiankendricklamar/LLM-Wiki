---
title: "Meta-Learning"
category: "AI Theory"
order: 21
lang: "en"
slug: "meta-learning"
growth: "seedling"
---

Meta-learning is the paradigm of learning to learn: an agent acquires the ability to adapt to new tasks with minimal examples by training on a distribution of tasks $p(T)$. Rather than optimizing for a single task, a meta-learner optimizes its own learning procedure. This creates a two-level hierarchy: the inner loop adapts to a specific task, and the outer loop optimizes the adaptation process across the task distribution.

## Formal Setup

Denote a task as $T_i = (S_i, Q_i)$ where $S_i$ is the support set (training examples) and $Q_i$ is the query set (test examples). The standard few-shot setting: $K$-way $N$-shot classification means $K$ classes with $N$ examples per class. The meta-learner is evaluated on its ability to adapt: observe $S_i$, then generalize to $Q_i$.

The meta-learning objective:

$$\min_\theta \sum_{T_i \sim p(T)} L_{Q_i}\left(\text{Adapt}(f_\theta, S_i)\right)$$

where $\text{Adapt}$ is an adaptation procedure (typically gradient steps) and $f_\theta$ is a parameterized model. Crucially, the outer gradient flows through the adaptation process. This differentiates meta-learning from simply training on diverse tasks: the system explicitly optimizes for fast adaptation.

## Model-Agnostic Meta-Learning (MAML)

MAML (Finn et al., 2017) is the most influential meta-learning algorithm. The core insight: find an initialization $\theta^*$ such that one (or few) gradient steps from $\theta^*$ yield good performance on any task drawn from $p(T)$.

**Algorithm:**
1. For each task $T_i$ with support set $S_i$, compute task-adapted parameters via one gradient step:
   $$\theta'_i = \theta - \alpha \nabla_\theta L_{S_i}(\theta)$$

2. Evaluate the adapted parameters on the query set:
   $$\mathcal{L}_\text{MAML} = \sum_i L_{Q_i}(\theta'_i)$$

3. Update meta-parameters using the outer gradient:
   $$\theta \leftarrow \theta - \beta \nabla_\theta \mathcal{L}_\text{MAML}$$

The critical detail: computing $\nabla_\theta \mathcal{L}_\text{MAML}$ requires **second-order derivatives** (gradient through gradient) because $\theta'_i$ depends on $\theta$. This is computationally expensive—proportional to model size and number of inner gradient steps—but directly optimizes for adaptativeness.

**First-Order MAML (FOMAML):** an approximation that ignores second-order terms and computes only the first-order gradient. Empirically, FOMAML performs comparably to full MAML while being significantly cheaper.

## Alternative Meta-Learners

**Prototypical Networks** (Snell et al., 2017): embed examples into a learned representation space, compute class prototypes as mean embeddings, and classify by nearest prototype:

$$c_k = \frac{1}{N} \sum_{(x, y) \in S_k} \phi_\theta(x)$$

$$p(y = k \mid q) = \frac{\exp(-d(\phi_\theta(q), c_k))}{\sum_j \exp(-d(\phi_\theta(q), c_j))}$$

No gradient-through-gradient; simple and scalable.

**Matching Networks** (Vinyals et al., 2016): attention-weighted $k$-NN in embedding space. The query is classified as a mixture of support labels, weighted by attention:

$$p(y = y_i \mid q, S) = \frac{\exp(e_\theta(q)^T e_\theta(x_i))}{\sum_j \exp(e_\theta(q)^T e_\theta(x_j))}$$

This learns a soft nearest-neighbor classifier, effectively performing nearest-prototype retrieval with learned similarity.

**Reptile** (Nichol et al., 2018): the simplest MAML variant. Instead of second-order gradients, move $\theta$ toward the task-adapted parameters:

$$\theta \leftarrow \theta + \beta(\theta'_i - \theta)$$

Reptile is a crude MAML approximation, but orders of magnitude cheaper. Despite its simplicity, it often matches MAML's performance.

## Meta-Learning and In-Context Learning

Large language models trained on diverse text implicitly perform meta-learning. When few-shot examples are provided in the context (the support set), the model adapts without updating weights—this is **in-context learning (ICL)**. The model behaves as a meta-learner whose adaptation is encoded in its activations.

Recent work (Akyürek et al., 2023) shows that ICL may implement implicit gradient descent: as the model processes context examples, its hidden states shift in directions reminiscent of gradient-based optimization. This reframes in-context learning as a form of MAML operating in activation space rather than parameter space. LLMs thus learn a shared meta-strategy—read context, adapt implicitly, generalize—that works across diverse tasks.

This connection is crucial for understanding [[transformer-architecture|transformer]] generalization. The model's ability to perform [[chain-of-thought|chain of thought]] in context builds on top of this meta-learned adaptation. Similarly, [[rlhf|RLHF]] exploits ICL: the model learns from human feedback by adapting its behavior to preference examples in context.

## Applications and Limitations

**Applications:**
- Few-shot classification: recognize objects from 1 or 5 examples per class.
- Rapid [[reinforcement-learning|reinforcement learning]]: adapt a policy to a new environment with minimal episodes.
- Personalization: customize models to individual users using minimal data.
- Domain adaptation: shift from one distribution to another with few labeled examples.
- Prompt engineering: design effective prompts for LLMs by observing in-context learning.

**Limitations:**
- MAML's second-order derivatives are expensive: $O(\text{model size} \times \text{inner steps})$.
- Generalization is bounded by task distribution: meta-training on $p(T)$ is necessary but the learner may fail on out-of-distribution tasks.
- Requires access to a structured distribution of tasks at training time; this is often unavailable.
- Scaling trade-off: deeper adaptation (more inner steps) improves few-shot performance but increases meta-training cost.

Meta-learning remains foundational for agents and models that must adapt quickly. As [[neural-scaling-laws|scaling laws]] predict improved generalization with larger models and datasets, meta-learning efficiency becomes increasingly important: trading second-order computation for sample efficiency becomes attractive in the large-model regime.

Recent trends show meta-learning principles embedded in LLM pretraining: diverse task mixture, diverse prompt formats, and explicit reasoning steps all serve as implicit meta-training signals. The boundary between meta-learning and ordinary transfer learning has blurred, but the conceptual framework—optimizing for adaptation—remains central to modern AI systems.
