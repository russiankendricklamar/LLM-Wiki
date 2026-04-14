---
title: "Neural Scaling Laws"
category: "AI Theory"
order: 4
lang: "en"
slug: "neural-scaling-laws"
---

# Neural Scaling Laws

## Overview

Neural scaling laws are empirical and theoretical relationships describing how model performance improves as a power law with increases in model size (parameters $N$), dataset size (tokens $D$), and compute budget $C$. First systematically studied by Kaplan et al. (2020) at OpenAI and refined by Hoffmann et al. (2022, "Chinchilla") at DeepMind, scaling laws have become the primary engineering guide for large language model development.

The central finding is surprisingly clean: for autoregressive language models, test loss decreases as a power law in $N$, $D$, and $C$ over many orders of magnitude. This predictability has made scaling laws the foundation of "scaling as a strategy" — the bet that more compute reliably produces better AI.

## Mathematical Framework

**Kaplan et al. (2020) scaling laws.** Holding other factors fixed:

$$L(N) \approx \left(\frac{N_c}{N}\right)^{\alpha_N}, \qquad \alpha_N \approx 0.076$$

$$L(D) \approx \left(\frac{D_c}{D}\right)^{\alpha_D}, \qquad \alpha_D \approx 0.095$$

$$L(C) \approx \left(\frac{C_c}{C}\right)^{\alpha_C}, \qquad \alpha_C \approx 0.050$$

where $L$ is cross-entropy loss on a held-out set and $N_c, D_c, C_c$ are characteristic scales. The loss under joint scaling:

$$L(N, D) \approx \left[\left(\frac{N_c}{N}\right)^{\alpha_N/\beta} + \left(\frac{D_c}{D}\right)^{\alpha_D/\beta}\right]^\beta$$

**Chinchilla (Hoffmann et al. 2022).** The key correction: Kaplan et al. underestimated the importance of data. For a given compute budget $C \approx 6ND$, the optimal allocation satisfies:

$$N_{\text{opt}} \propto C^{0.5}, \qquad D_{\text{opt}} \propto C^{0.5}$$

That is, **model size and token count should scale equally**. Chinchilla (70B params, 1.4T tokens) matched or exceeded GPT-3 (175B params, 300B tokens) with 4x less compute — showing GPT-3 was substantially undertrained.

**IsoFLOP curves.** At fixed compute $C = 6ND$:

$$L(N) \big|_{C \text{ fixed}} = L\!\left(N, \frac{C}{6N}\right) = a + \frac{b}{N^{\alpha_N}} + \frac{c N^\beta}{C^\beta}$$

The minimum over $N$ gives the optimal model size for that compute budget.

**Power law mechanistic interpretation.** Michaud et al. (2023) "quanta" theory: the loss decomposes as $L = L_\infty + \sum_k a_k C^{-b_k}$ where each "quantum" of knowledge has its own compute threshold. The aggregate power law emerges from a distribution of task difficulties.

## How It Works

**Training loss vs. compute curves.** During training, plot loss against FLOP count. At various model sizes but equal compute, the curves form a family. Reading off the loss at each compute budget gives the IsoFLOP frontier.

**Emergent abilities.** Some capabilities appear to jump discontinuously at certain scales (Wei et al. 2022). Examples: multi-step arithmetic, chain-of-thought reasoning, BIG-Bench tasks. Two explanations:
1. *Metric artefact:* Coarse metrics (binary accuracy) appear to jump, but log-probability loss is smooth.
2. *Phase transition:* True discontinuous transition (analogous to statistical mechanics phase transitions) when enough "components" of a task all exceed threshold simultaneously.

**Inference-time scaling (test-time compute).** Snell et al. (2024), following o1-style models: for reasoning-heavy tasks, allocating more inference compute (longer chain-of-thought, more search) follows its own scaling law. The "inference scaling exponent" can be steeper than training-time scaling, making reasoning models competitive.

**Data scaling and token repetition.** Repeating data (training on the same tokens multiple times) has diminishing returns faster than the token-count scaling law. Muennighoff et al. (2023): after 4 repetitions, marginal benefit is near zero.

**Modality scaling.** Power laws hold (with different exponents) for:
- Vision transformers (image resolution, model size)
- Code generation (CodeParrot, GitHub Copilot ablations)
- Multimodal models (image-text pairs)
- Reinforcement learning (AlphaZero chess ELO vs. compute)

## Python Implementation

```python
import numpy as np
import matplotlib.pyplot as plt
from scipy.optimize import curve_fit

# Fit a power law to synthetic scaling data
def power_law(x, a, b):
    """L = a * x^(-b)"""
    return a * x ** (-b)

def fit_scaling_law(compute_budgets, losses):
    """Fit power law L ~ C^{-alpha} to compute-loss pairs."""
    popt, pcov = curve_fit(power_law, compute_budgets, losses, p0=[1.0, 0.05])
    a_fit, alpha_fit = popt
    return a_fit, alpha_fit, pcov

# Simulate scaling data (Kaplan-style)
np.random.seed(42)
C_values = np.logspace(18, 25, 30)    # FLOPs: 10^18 to 10^25
alpha_true = 0.050
a_true = 100.0
noise = np.random.lognormal(0, 0.01, size=len(C_values))
L_values = a_true * C_values ** (-alpha_true) * noise

a_fit, alpha_fit, _ = fit_scaling_law(C_values, L_values)
print(f"True alpha: {alpha_true:.3f}, Fitted alpha: {alpha_fit:.4f}")

# Chinchilla optimal allocation: N_opt given compute C
def chinchilla_optimal(C, a=406.4, b=410.7, alpha=0.34, beta=0.28, E=1.69):
    """
    Chinchilla loss: L(N,D) = E + A/N^alpha + B/D^beta
    Optimal N for compute C (FLOPs = 6*N*D).
    """
    # From dL/dN = 0 subject to C = 6*N*D
    ratio = (alpha * a * b * beta) / (beta * b * alpha)
    N_opt = (a * alpha / (b * beta)) ** (1/(alpha+beta)) * (C / 6) ** (beta/(alpha+beta))
    D_opt = C / (6 * N_opt)
    return N_opt, D_opt

C_budgets = [1e21, 1e22, 1e23, 1e24, 1e25]
print("\nChinchilla optimal allocations:")
print(f"{'Compute':>12} | {'N_opt (B params)':>17} | {'D_opt (B tokens)':>17}")
for C in C_budgets:
    N, D = chinchilla_optimal(C)
    print(f"{C:>12.1e} | {N/1e9:>17.1f} | {D/1e9:>17.1f}")

# Emergent ability detection: find scale threshold for a task
def simulate_emergent_task(compute_values, threshold=1e22, noise_std=0.1):
    """Binary task: model succeeds when enough sub-tasks all succeed."""
    n_subtasks = 10
    sub_thresholds = np.random.lognormal(np.log(threshold), 0.5, n_subtasks)
    accuracies = []
    for C in compute_values:
        sub_success_probs = 1 / (1 + (sub_thresholds / C) ** 2)
        all_succeed_prob = np.prod(sub_success_probs)
        acc = all_succeed_prob + np.random.normal(0, noise_std)
        accuracies.append(float(np.clip(acc, 0, 1)))
    return accuracies

C_range = np.logspace(20, 24, 40)
binary_acc = simulate_emergent_task(C_range)
print("\nEmergent ability simulation (task success by compute):")
for i in range(0, 40, 8):
    print(f"  C={C_range[i]:.1e}: accuracy={binary_acc[i]:.3f}")
```

## Key Results & Properties

- **Log-linear reliability:** Loss decreases log-linearly with log-compute over 7+ orders of magnitude; one of the most reliable empirical regularities in deep learning.
- **Chinchilla correction:** GPT-3 class models were undertrained by 5-10x in data; compute-optimal training requires ~20 tokens per parameter.
- **Irreducible entropy:** As $N, D \to \infty$, loss approaches irreducible entropy $L_\infty > 0$ — the true entropy of natural language.
- **Emergent abilities controversy:** GPT-4 technical report and subsequent work argue most apparent emergent abilities disappear when using smooth metrics; others argue phase transitions are real.
- **Scaling beats architecture search:** For fixed compute, scaling laws predict that training a larger model for fewer steps beats training an optimal-architecture smaller model — in practice simplifying NAS.

## Limitations

**Distribution shift.** Scaling laws are measured on the training distribution. Generalisation to qualitatively different tasks (out-of-distribution) does not follow the same law.

**Extrapolation uncertainty.** Power laws are fit to a limited range; extrapolation to frontier compute regimes involves significant uncertainty. Scaling may slow or break.

**Architecture dependence.** Exponents differ for MoE vs. dense transformers, LSTM vs. attention, different tokenisation strategies. Laws must be re-fit for new architectures.

**Cost and efficiency improvements.** Hardware (H100 vs. A100 vs. TPU v4) and algorithmic improvements (flash attention, gradient checkpointing) shift the effective scaling exponents by changing FLOPs per token.

**Quality metrics.** Perplexity scaling is clean; benchmark accuracy scaling is noisier and metric-sensitive.

## Applications

- **Compute budgeting:** Given a total compute budget, scaling laws tell you the optimal model size and dataset size before training.
- **Performance prediction:** Predict how much a model will improve before spending compute, allowing go/no-go decisions.
- **Research prioritisation:** Estimate ROI of data quality improvements vs. architecture improvements vs. raw scale.
- **Inference-time compute allocation:** o1/o3-style chain-of-thought scaling as complementary axis to training-time scaling.
- **Statistical mechanics analogy:** Loss as free energy, emergent abilities as phase transitions — active research connecting [[neural-scaling-laws]] to statistical physics.

## Related Topics

- [[pac-learning]] — theoretical sample complexity; scaling laws are empirical counterpart
- [[mechanistic-interpretability]] — understanding what changes mechanistically as scale increases
