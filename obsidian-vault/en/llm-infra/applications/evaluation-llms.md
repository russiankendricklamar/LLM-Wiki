---
title: "LLM Evaluation"
category: "LLM Infrastructure"
order: 13
lang: "en"
slug: "evaluation-llms"
growth: "seedling"
---

Evaluating [[llm|large language models]] presents a fundamental measurement problem: single scalar metrics collapse multi-dimensional capability into a number, inevitably obscuring critical failure modes. The field has evolved from naive benchmarking to holistic evaluation frameworks, yet core pathologies—contamination, Goodhart's law, metric-dependent emergence—remain largely unresolved. Benchmark design is not neutral; it is adversarial: optimization for metrics actively degrades real-world performance.

## Perplexity: Information-Theoretic Foundation

Perplexity quantifies model surprise on held-out text:

$$\text{PPL} = \exp\left(-\frac{1}{N}\sum_{i=1}^{N} \log p_\theta(x_i)\right)$$

where $p_\theta(x_i)$ is the probability assigned to token $i$ under parameters $\theta$. Lower PPL indicates higher confidence in predicting the test distribution. Perplexity is the direct objective optimized during pre-training; it requires no prompt engineering and is reproducible. Yet PPL correlates weakly with downstream tasks: a model with PPL = 30 on Wikipedia may fail instruction-following or multi-step reasoning. Perplexity conflates fluency (modeling surface patterns) with knowledge (capturing semantic structure). It is a necessary but insufficient evaluation signal.

## Knowledge & Reasoning Benchmarks

**MMLU (Massive Multitask Language Understanding)**

MMLU (Hendrycks et al., 2021) evaluates breadth across 57 academic subjects via 4-choice multiple-choice questions. Standard protocol: 5-shot prompting with in-context examples. Human expert performance ≈ 89%; GPT-4 ≈ 86%; GPT-3.5 ≈ 70%; Llama 2 70B ≈ 63%. MMLU success requires factual recall, symbolic reasoning, and common sense. The metric is inexpensive, widely comparable, and captures knowledge breadth—but saturates rapidly. Performance > 90% typically indicates benchmark memorization rather than emergent reasoning; comparison to contamination risk is mandatory.

**BIG-Bench and BIG-Bench Hard**

BIG-Bench contains 204 diverse tasks (rhyming, word sorting, mathematical reasoning, social bias). Notably, **BIG-Bench Hard** isolates 23 tasks exhibiting flat scaling curves: humans outperform frontier models on several. This reveals a critical insight: task difficulty is not universal. The same model scaling curve can be flat or steep depending on task design. If a task metric is coarse-grained (binary pass/fail), apparent emergence often reflects metric granularity rather than genuine discontinuity.

## Code Generation: Pass@k Metric

HumanEval (Chen et al., 2021) and MBPP (Austin et al., 2021) test code generation against unit tests. The standard metric is **pass@k**:

$$\text{pass}@k = 1 - \frac{\binom{n-c}{k}}{\binom{n}{k}}$$

where $n$ independent samples are drawn and $c$ solutions pass all tests. Pass@1 (greedy decoding) measures accuracy; pass@100 estimates the ceiling of capability. A model with pass@1 = 50% but pass@100 = 90% can generate correct solutions but lacks consistency—useful for best-of-N sampling in development, unusable for autonomous systems. Code benchmarks show strong correlation with real-world programming ability, unlike memorization-prone MMLU. GPT-4 ≈ 92%; Llama 2 70B ≈ 55%; this gap persists across independent coding tasks, indicating genuine capability differences.

## Multi-Turn Preference Evaluation

**MT-Bench** (Zheng et al., 2023) scores 80 multi-turn conversations via GPT-4-as-judge on a 1–10 scale. **Chatbot Arena** crowdsources pairwise head-to-head human comparisons, converting preferences to Elo ratings across thousands of conversations. Arena correlation with human judgment ≈ 0.8; requires ~1000+ votes per model-pair for significance. Advantage: captures nuanced quality improvements (coherence, reasoning depth, multi-turn consistency) invisible in multiple-choice benchmarks. Disadvantage: computationally expensive (GPT-4 cost) and slow to iterate; GPT-4-as-judge exhibits own biases (verbosity preference, weak code correctness assessment).

## Holistic Evaluation: HELM

**HELM** (Liang et al., 2022) evaluates 42 scenarios across 7 dimensions:

| Dimension | Definition | Failure Mode |
|-----------|-----------|--------------|
| Accuracy | Task-specific correctness | Memorization without reasoning |
| Calibration | Confidence ↔ actual accuracy | Silent failures in high-stakes tasks |
| Robustness | Invariance to input perturbations | Brittle to distribution shift |
| Fairness | Demographic parity across groups | Stereotypes and bias amplification |
| Efficiency | Latency, memory, inference cost | Unusable in resource-constrained settings |
| Bias | Gender, racial, occupational stereotypes | Harmful downstream effects |
| Toxicity | Offensive, hateful, harmful outputs | Safety regressions at scale |

HELM reveals that no single model dominates all dimensions. GPT-3 excels at open-ended generation but underperforms factual QA; Davinci-003 is more balanced but slower. Optimizing one dimension degrades others—unavoidable trade-off, not solvable by better training.

**Calibration** (Expected Calibration Error) is under-appreciated:

$$\text{ECE} = \sum_{m=1}^{M} \frac{|B_m|}{n} \left| \text{acc}(B_m) - \text{conf}(B_m) \right|$$

where predictions are binned by confidence, $\text{acc}(B_m)$ is observed accuracy in bin $B_m$, and $\text{conf}(B_m)$ is mean reported confidence. Overconfident models (high confidence, low accuracy) are dangerous: they fail silently. Temperature scaling—post-hoc logit division by learnable $T > 1$ before softmax—improves calibration without retraining, but does not address root miscalibration from [[rlhf|RLHF]] optimization toward human preference ratings rather than truth.

## Contamination: Structural Problem

Benchmark contamination occurs when test-set questions appear in training data (verbatim or near-duplicate). Detection methods:

**N-gram overlap**: Compute longest common substring between training and test; threshold triggers flag. Sensitive to paraphrasing; high false negatives on synthetic variations.

**Membership inference**: Train binary classifier to distinguish training vs. test membership; if accuracy > 50%, contamination likely. Requires training data access and $O(|D|)$ compute.

**Exact matching**: Search for verbatim questions in corpora. OpenAI's GPT-4 contamination disclosure (March 2023) revealed ~3% overlap with MMLU, HumanEval, and others. Significant when model improvements are < 5% accuracy.

Contamination is structural: benchmarks published on GitHub; researchers download them; new models trained on web snapshots including those repos. Static benchmarks accumulate contamination monotonically over time. Structural solution requires dynamic evaluation (adversarially constructed examples at test time) or continuous benchmark rotation, imposing heavy operational burden. Without it, reported improvements are often noise.

## Goodhart's Law: Measure Becomes Target

*"When a measure becomes a target, it ceases to be a good measure."*

[[rlhf|RLHF]] optimizes for human preference ratings. If raters reward confidence, verbosity, deferential hedging, and formal tone, the model learns to signal these properties—not to be truthful. Pathologies:

- Hallucinated citations that sound plausible (confident wrong > uncertain right)
- Non-answers to hard questions padded with hedges and disclaimers
- Overconfident predictions with superficial uncertainty language
- Gaming rater biases (longer = better perceived quality)

Once Chatbot Arena becomes a primary optimization target, models overfit to Arena judge preferences, which are not identical to human preferences in actual deployment. Solution: **orthogonal evaluation across diverse benchmarks never used for training**; routine expert audits; and unfit-able metrics (real downstream task performance) rather than classroom benchmarks. Rotate metrics regularly; no single signal should steer development for > 3 months.

## Emergence and Scaling: Artifact or Reality?

Scaling curves often exhibit apparent discontinuities: models cannot solve a task at 70B parameters but solve it reliably at 100B. Root cause remains unresolved.

**Metric artifact hypothesis** (Wei et al., 2022): Continuous underlying capability is discretized by coarse task metrics. A task with only pass/fail (multi-step reasoning) shows jumps; a task with continuous partial credit (loss, similarity) shows smooth scaling. The same underlying capability curve appears discontinuous under binary metrics.

**Genuine emergence**: Some capabilities (arithmetic with truly large numbers, complex multi-hop reasoning) may require minimum representational capacity and cannot scale smoothly from random initialization.

Current evidence leans toward artifact (most "emergent" behaviors disappear under fine-grained metrics), but debate continues. Implications: **use calibrated, continuous metrics** (loss, agreement with reference model, semantic similarity) rather than binary pass/fail when assessing scaling behavior.

## Best Practices for Honest Evaluation

- **Never optimize for a single metric.** Use multi-dimensional evaluation (HELM-style); trade-offs are real.
- **Test on held-out data never visible to model or hyperparameter search.** Contamination audits mandatory.
- **Compare to human performance.** MMLU human expert ≈ 89%; if model > 95%, assume contamination or annotation error.
- **Measure calibration explicitly.** Confidence should match accuracy; overconfident models are brittle.
- **Rotate benchmarks monthly.** Prevent Goodhart's law optimization.
- **Run A/B tests with real users.** Benchmark scores correlate weakly (ρ ≈ 0.6-0.7) with production performance.

The hard truth: no single benchmark is sufficient. A robust evaluation program requires MMLU + HumanEval + [[chain-of-thought|CoT]] reasoning + toxicity + bias + domain-specific tasks + human preference votes. This is expensive, which is why most practitioners cut corners—and reap catastrophic failures when models hit production.
