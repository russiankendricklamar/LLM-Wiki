---
title: "Training Dynamics"
category: "Language Models"
order: 11
lang: "en"
slug: "training-dynamics"
growth: "seedling"
---

# Training Dynamics

Training dynamics describes how the loss landscape, gradient statistics, and learned representations evolve during the training of [[large-language-models]]. Understanding these phenomena helps diagnose failures, tune hyperparameters, and design more stable training recipes.

## Loss Landscape Geometry

The parameter space of a neural network is a high-dimensional surface where [[convex-optimization|gradient descent]] navigates toward low-loss regions. Key geometric features:

- **Saddle points** dominate over local minima in high dimensions; SGD escapes them via gradient noise
- **Sharp vs. flat minima**: flatter minima generalise better (Hochreiter & Schmidhuber, 1997); SAM (Sharpness-Aware Minimisation) explicitly seeks them
- **Linear mode connectivity**: after training, different random seeds often converge to minima that are linearly connected in weight space, suggesting a single large basin with multiple entrances

The effective loss landscape seen during training is smoothed by large batch sizes, which reduce gradient noise but can converge to sharper minima.

## Grokking

Grokking (Power et al., 2022) is a phenomenon where a model first **memorises** training data (train loss → 0, val loss stays high) and then, after continued training, abruptly **generalises** (val loss collapses). This delayed generalisation can occur thousands of steps after perfect training accuracy.

Mechanistic explanation: generalising circuits are weight-inefficient but compute efficiently; memorising circuits are weight-efficient but don't generalise. L2 regularisation penalises large weights, eventually making the generalising circuit cheaper, triggering the phase transition.

Grokking has been observed in:
- Modular arithmetic ($a + b \mod p$)
- Permutation group composition
- Simple reasoning tasks in transformers trained from scratch

## Phase Transitions

Training loss does not always decrease smoothly. Documented phase transitions include:

1. **Induction head formation**: in 2-layer transformers, a sharp loss drop at a model-size-dependent number of steps coincides with induction heads forming (see [[in-context-learning]])
2. **Capability emergence**: certain benchmarks jump from near-chance to competent in a narrow compute range
3. **Representation geometry shifts**: probing accuracy for syntactic features can jump nonlinearly

These transitions suggest the loss landscape has **barriers** that gradient descent must overcome, after which optimisation drops into a better basin.

## Gradient Norm Evolution

The gradient norm $\|\nabla_\theta L\|$ tracks optimisation health:

- **Early training**: large gradient norms as the model moves rapidly from random initialisation
- **Middle training**: norms stabilise as learning rate is cosine-annealed downward
- **Loss spikes**: sudden norm explosions (100× baseline) followed by recovery — a recurring event in large-scale training
- **Near convergence**: norms shrink; gradient noise dominates signal

Gradient clipping (clip to max norm $\gamma$, typically 1.0) prevents runaway updates:

$$g \leftarrow g \cdot \min\!\left(1,\, \frac{\gamma}{\|g\|}\right)$$

## Learning Rate Schedule

### Warmup

Starting with a large learning rate causes instability near random initialisation where gradients are large and unreliable. Linear warmup over $T_w$ steps (typically 1–2% of total training) allows the optimiser to accumulate reliable gradient estimates before committing to large updates:

$$\eta_t = \eta_{\max} \cdot \frac{t}{T_w}, \quad t < T_w$$

### Cosine Decay

After warmup, cosine annealing smoothly reduces the learning rate:

$$\eta_t = \eta_{\min} + \frac{1}{2}(\eta_{\max} - \eta_{\min})\left(1 + \cos\!\frac{\pi(t - T_w)}{T - T_w}\right)$$

This allows the optimiser to make large exploratory steps early and fine-grained refinements late. The final learning rate $\eta_{\min}$ is typically $\eta_{\max}/10$.

### WSD (Warmup-Stable-Decay)

Recent work (MiniCPM, 2024) proposes a three-phase schedule: warmup → stable phase at constant LR → rapid decay. This enables **continual training**: new data can be added in a new warmup-stable-decay cycle without restarting.

## Loss Spikes

Loss spikes are transient explosions where loss increases 10–100× over a few hundred steps before recovering. They are prevalent in large-scale runs and their causes include:

- Outlier batches with unusual token distributions
- Gradient accumulation rounding errors in mixed precision
- Instabilities in [[attention-mechanisms]] (particularly in early layers)

**Mitigations**:
- Gradient clipping
- Reducing learning rate at first sign of spike
- Z-loss (auxiliary loss penalising large logits before softmax)
- Query-Key normalisation (QK-Norm) stabilises [[attention-mechanisms|attention]] logits

## Maximal Update Parameterisation (muP)

Standard parameterisation (SP) causes learning rate sensitivity to change with model width — the optimal LR for a 100M model differs from that for a 10B model. This makes hyperparameter transfer impossible without expensive sweeps at scale.

**muP** (Yang et al., 2022) rescales weights and learning rates so that **feature learning magnitude is width-independent**:

| Quantity | SP scaling | muP scaling |
|---|---|---|
| Weight init std | $1/\sqrt{d}$ | $1/d$ (for attn weights) |
| LR for hidden weights | $\eta$ | $\eta / d$ |
| LR for output weights | $\eta$ | $\eta / d$ |
| LR for embed weights | $\eta$ | $\eta$ |

With muP, the optimal learning rate found at 10M parameters transfers directly to 70B parameters. This enables **proxy model hyperparameter search**: run sweeps at tiny scale, deploy the winning config at full scale.

## Layer-Wise Learning Rate Decay

In [[fine-tuning]] and some pretraining setups, lower layers are assigned smaller learning rates:

$$\eta_l = \eta_{\text{top}} \cdot \lambda^{L - l}, \quad \lambda \in [0.8, 0.95]$$

Lower layers encode more general syntactic features that should change slowly; upper layers encode task-specific features that adapt more aggressively. This reduces catastrophic forgetting during fine-tuning.

## Training Dynamics Chart

```chart
{
  "type": "line",
  "xAxis": "step_k",
  "data": [
    {"step_k": 0,   "train_loss": 11.2, "grad_norm": 8.5, "lr_scaled": 0.1},
    {"step_k": 5,   "train_loss": 7.4,  "grad_norm": 5.2, "lr_scaled": 0.8},
    {"step_k": 10,  "train_loss": 5.1,  "grad_norm": 3.8, "lr_scaled": 1.0},
    {"step_k": 30,  "train_loss": 3.8,  "grad_norm": 2.1, "lr_scaled": 0.95},
    {"step_k": 60,  "train_loss": 3.2,  "grad_norm": 1.8, "lr_scaled": 0.82},
    {"step_k": 80,  "train_loss": 3.5,  "grad_norm": 9.1, "lr_scaled": 0.75},
    {"step_k": 85,  "train_loss": 3.1,  "grad_norm": 2.0, "lr_scaled": 0.71},
    {"step_k": 100, "train_loss": 2.9,  "grad_norm": 1.4, "lr_scaled": 0.55},
    {"step_k": 150, "train_loss": 2.6,  "grad_norm": 0.9, "lr_scaled": 0.28},
    {"step_k": 200, "train_loss": 2.4,  "grad_norm": 0.6, "lr_scaled": 0.10}
  ],
  "lines": [
    {"dataKey": "train_loss", "stroke": "#6366f1", "name": "Train Loss"},
    {"dataKey": "grad_norm",  "stroke": "#ef4444", "name": "Gradient Norm"},
    {"dataKey": "lr_scaled",  "stroke": "#10b981", "name": "LR (scaled)"}
  ]
}
```

The spike visible at step 80 is a characteristic loss spike — gradient norm explodes, loss briefly increases, then both recover.

## Monitoring and Diagnostics

Key metrics to track during training:

- **Train/val loss gap**: if growing, the model is memorising; increase regularisation or reduce model size
- **Gradient norm per layer**: outlier layers signal architectural instability
- **Weight norm per layer**: uncontrolled growth indicates learning rate is too high
- **Activation statistics**: collapsed or saturated activations indicate dead neurons
- **Attention [[shannon-entropy|entropy]]**: very low entropy means attention is spiky; very high means the model is not attending to anything

## See Also

- [[neural-scaling-laws]] — how dynamics at scale predict final loss
- [[transformer-architecture]] — architecture choices that affect stability
- [[attention-mechanisms]] — attention instability as a source of loss spikes
- [[large-language-models]] — practical training setups
