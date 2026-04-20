---
title: "Scaling Laws"
category: "Language Models"
order: 10
lang: "en"
slug: "scaling-laws"
growth: "seedling"
---

# Scaling Laws

**Scaling laws** are empirical power-law relationships describing how language model performance improves as a function of model size $N$, dataset size $D$, and compute $C$. They transformed LLM development from trial-and-error to principled engineering: given a compute budget, scaling laws prescribe the optimal allocation.

## Kaplan et al. (2020): OpenAI Scaling Laws

The landmark OpenAI paper found that cross-entropy loss scales as a power law in each resource independently (holding others fixed):

$$
L(N) \approx \left(\frac{N_c}{N}\right)^{\alpha_N}, \quad L(D) \approx \left(\frac{D_c}{D}\right)^{\alpha_D}, \quad L(C) \approx \left(\frac{C_c}{C}\right)^{\alpha_C},
$$

with exponents $\alpha_N \approx 0.076$, $\alpha_D \approx 0.095$, $\alpha_C \approx 0.050$.

Key finding: **model size matters more than dataset size** at fixed compute. This led to training very large models on relatively small datasets — GPT-3 (175B parameters, 300B tokens).

## Chinchilla: Compute-Optimal Scaling

Hoffmann et al. (2022) revisited scaling laws with better-controlled experiments. Their finding: Kaplan's models were **undertrained** — for a given compute budget $C \approx 6ND$, the optimal trade-off between $N$ and $D$ is roughly equal scaling:

$$
N_\text{opt} \propto C^{0.5}, \quad D_\text{opt} \propto C^{0.5}.
$$

**Chinchilla rule of thumb**: ~20 tokens per parameter. Chinchilla-70B (70B params, 1.4T tokens) outperformed Gopher-280B (280B params, 300B tokens) at 4× lower compute.

```chart
{
  "type": "line",
  "xAxis": "compute",
  "data": [
    {"compute": 1e21, "kaplan_opt_N": 1, "chinchilla_opt_N": 0.5},
    {"compute": 1e22, "kaplan_opt_N": 3.2, "chinchilla_opt_N": 1.6},
    {"compute": 1e23, "kaplan_opt_N": 10, "chinchilla_opt_N": 5},
    {"compute": 1e24, "kaplan_opt_N": 32, "chinchilla_opt_N": 16},
    {"compute": 1e25, "kaplan_opt_N": 100, "chinchilla_opt_N": 50}
  ],
  "lines": [
    {"dataKey": "kaplan_opt_N", "stroke": "#f59e0b", "name": "Kaplan optimal N (B params)"},
    {"dataKey": "chinchilla_opt_N", "stroke": "#10b981", "name": "Chinchilla optimal N (B params)"}
  ]
}
```

## Emergent Abilities

Wei et al. (2022) documented "emergent abilities" — capabilities that appear suddenly at certain scale thresholds, seemingly violating smooth power-law predictions:

- Multi-step arithmetic (appears at ~100B params)
- Chain-of-thought reasoning
- Instruction following

**The measurement artefact debate** (Schaeffer et al. 2023): emergence may be an artefact of discontinuous metrics (accuracy vs log-likelihood). On continuous metrics, the same capabilities scale smoothly — no phase transitions.

## Inference-Time Scaling

The 2024–2025 paradigm shift: instead of only scaling training compute, scale **test-time compute** (inference) to improve performance on hard problems.

**OpenAI o1/o3**: models trained to generate long chains-of-thought before answering. Performance on hard math (AIME, olympiad problems) scales with the number of reasoning tokens — a new dimension of scaling independent of parameters.

The key insight: for hard reasoning tasks, spending more compute at inference (searching, backtracking, verifying) can compensate for smaller model size.

## Data Scaling

**Repeat penalty.** Muennighoff et al. (2023): repeating data up to ~4× has modest cost; beyond that, performance degrades significantly. Implications for data-limited regimes.

**Data quality vs quantity.** Phi models (Gunasekar et al. 2023) show that high-quality synthetic data ("textbook-quality") can train capable small models, challenging pure scale arguments.

## Related Topics

- [[large-language-models]] — LLM architecture overview
- [[training-dynamics]] — loss landscape and training stability
- [[in-context-learning]] — emergence of ICL with scale
- [[tokenization]] — data efficiency depends on tokenizer
