---
title: "In-Context Learning"
category: "AI Theory"
order: 7
lang: "en"
slug: "/ai-theory/in-context-learning"
growth: "seedling"
---

# In-Context Learning

In-context learning (ICL) is the remarkable ability of large language models to adapt their behavior to novel tasks by conditioning on demonstrations provided within the same prompt, without any gradient updates or [[fine-tuning]]. This phenomenon, central to the practical utility of modern foundation models, has emerged as one of the most intriguing research frontiers in deep learning interpretability and mechanistic understanding.

## Definition and Core Mechanism

In-context learning refers to the model's capacity to infer task structure from a sequence of examples and apply that inferred structure to generate correct answers for new instances—all within a single forward pass. A canonical ICL setup consists of a **demo–query** format:

$$\text{Demo}_1, \text{Demo}_2, \ldots, \text{Demo}_k, \text{Query} \to \text{Answer}$$

where each demo is typically $(x_i, y_i)$ and the model must produce $\hat{y}$ for query input $x_q$. Crucially, the model's internal parameters remain frozen: learning happens purely through the residual stream and [[attention-mechanisms]] within the [[transformer-architecture|transformer]].

## Few-Shot vs Zero-Shot Scaling

The distinction between few-shot and zero-shot performance reveals critical properties of ICL:

- **Zero-shot**: The model responds to a task description alone. Performance depends heavily on whether the task aligns with the model's pretraining distribution.
- **Few-shot**: With $k \in \{1, 5, 10\}$ labeled examples, the model's accuracy often surges dramatically. This scaling behavior suggests models are not merely "retrieving" memorized associations but performing some form of rapid task inference.

Empirically, few-shot performance frequently outpaces zero-shot by 20–40 percentage points on unseen benchmarks, and in many cases rivals supervised [[fine-tuning]] on medium-data regimes. This sample efficiency is extraordinary given that gradient-based learning typically requires hundreds or thousands of examples.

## Bayesian Interpretation and Posterior Inference

A unifying theoretical lens interprets ICL as implicit Bayesian inference. Under this view (elaborated by Xie et al. 2022), the in-context examples define an implicit prior over task hypotheses, and the model's forward pass approximates computing a posterior distribution over that task space.

Formally, suppose the true task $\tau$ is sampled from a prior $p(\tau)$, and demos $\mathcal{D} = \{(x_i, y_i)\}$ are observations. The model implicitly learns:

$$p(\hat{y} | x_q, \mathcal{D}) \approx \int p(y | x_q, \tau) \, p(\tau | \mathcal{D}) \, d\tau$$

This Bayesian framing elegantly explains why:
1. Few examples rapidly shift predictions: they sharpen the posterior over plausible tasks.
2. Label order matters: the posterior is path-dependent during sequential processing.
3. Task-aligned priors (learned during pretraining) enable rapid inference without explicit optimization.

The Bayesian view is not literal—the model does not maintain true probability distributions—but it captures the functional logic of rapid task adaptation through implicit hypothesis updating.

## Mechanistic Substrate: Induction Heads

A breakthrough in mechanistic interpretability came from Olsson et al. (2022), who identified **induction heads** as the computational substrate enabling ICL. These [[attention-mechanisms|attention head patterns]] attend to previous tokens matching the current token's context, enabling pattern-completion behavior.

Specifically, an induction head implements:
1. **Copy mechanism**: detect tokens at position $i$ that match position $j < i$.
2. **Attend to next token**: in position $j$, attend to the token that follows the match at position $i$.

This simple circuit enables the model to replay label patterns: seeing `A → B` in the demos and then `A` in the query, the induction head "looks back," finds `A`, and attends to the subsequent label. Induction heads emerge sharply at model scale (typically $\sim 200$M parameters) and scale predictably with depth and width, suggesting they are a learned solution to a fundamental ICL problem.

## In-Context Learning vs Fine-Tuning

ICL and gradient-based fine-tuning represent complementary adaptation strategies with distinct tradeoffs:

| Aspect | ICL | Fine-tuning |
|--------|-----|------------|
| Gradient updates | None | Yes, all layers |
| Sample efficiency | High (few examples) | Lower (needs 100s–1000s) |
| Expressivity | Limited to demo-compatible tasks | High (arbitrary optimization) |
| Latency | Same as inference | Training time |
| Multi-task robustness | Excellent (no catastrophic forgetting) | Requires rehearsal / continual learning |

ICL excels when task diversity is high or data is scarce. Fine-tuning dominates when a single task requires deep adaptation or when computational budget permits training.

## Sensitivity to Prompt Format and Label Permutation

A sobering empirical discovery is ICL's brittleness to surface-level variations:

- **Label order effects**: Permuting the order of demos can change accuracy by 10–30 percentage points, even with identical information content.
- **Verbalization sensitivity**: Rephrasing the same concept (e.g., "positive/negative" vs "good/bad") drastically shifts performance.
- **Spurious correlations**: Models may latch onto label frequency or position rather than semantic task structure.

This sensitivity underscores that ICL is not a principled Bayesian inference but rather a learned heuristic constrained by the [[transformer-architecture|transformer]]'s inductive biases. Careful prompt engineering is therefore essential for reliable ICL performance.

## Task Vectors and Representation Engineering

Recent work explores editing the learned representations within the model to steer ICL behavior. The concept of **task vectors** treats the change in model outputs across task-specific ICL contexts as a vector in representation space, enabling:

- **Task arithmetic**: adding or interpolating task vectors to compose behaviors.
- **Prompt distillation**: converting long demonstrations into compact vector offsets.

Representation engineering provides a bridge between mechanistic understanding and practical control, allowing practitioners to amplify or suppress learned task-inference circuits without retraining.

## Chain-of-Thought as Extended In-Context Learning

[[Chain-of-thought]] prompting—where the model is encouraged to show intermediate reasoning steps—can be understood as extending the ICL framework. Rather than mapping inputs directly to outputs, CoT creates an explicit reasoning trajectory that the model learns to imitate from demonstrations.

This extension has profound implications: ICL is not limited to one-step input–output mappings but generalizes to multi-step reasoning patterns. Models appear to learn the *structure* of reasoning processes from examples, enabling transfer to novel problems requiring similar reasoning.

## Emergence at Scale and Open Questions

ICL emerges sharply with model scale, appearing unreliably below 1B parameters and becoming robust by 10B+. This suggests ICL is a learned capability dependent on:
- Sufficient parameter count to implement induction heads and other circuits.
- Diverse pretraining data supporting task inference.
- Sufficient depth to compose multiple reasoning steps.

Open questions persist: Can we predict when ICL will succeed on a new task? How do we design prompts to maximize task inference? Does ICL generalize to tasks far outside the pretraining distribution? Addressing these questions is central to both interpretability and reliable deployment of large language models.

---

## See Also

- [[transformer-architecture]] — foundational mechanics of [[attention-mechanisms|attention]] and residual streams
- [[attention-mechanisms]] — detailed analysis of head types and their functions
- [[mechanistic-interpretability]] — methods for reverse-engineering circuits like induction heads
- [[chain-of-thought]] — reasoning patterns emergent from ICL
- [[prompt-engineering]] — practical techniques to optimize ICL performance
- [[neural-scaling-laws]] — empirical relationships governing ICL emergence with scale
- [[bayesian-deep-learning]] — theoretical foundations for posterior inference in neural nets
