---
title: "Bayesian Deep Learning"
category: "AI Theory"
order: 23
lang: "en"
slug: "bayesian-deep-learning"
growth: "seedling"
---

Bayesian deep learning replaces point estimates of network weights with full posterior distributions over parameters, unlocking access to two fundamentally different sources of uncertainty: **epistemic** (reducible with data) and **aleatoric** (irreducible observation noise). This decomposition is essential for high-stakes decisions in medicine, autonomous systems, and finance, where knowing *why* a model is uncertain matters as much as knowing its prediction.

## Epistemic versus Aleatoric Uncertainty

The predictive distribution integrates the network output across all plausible weight configurations:

$$p(y^* | x^*, D) = \int p(y^* | x^*, \theta) p(\theta | D) d\theta$$

**Epistemic uncertainty** reflects ignorance about model parameters $\theta$: it shrinks as data $D$ grows and vanishes asymptotically. A model is epistemically uncertain on OOD (out-of-distribution) inputs and saturates (becomes confident) on in-distribution regions. **Aleatoric uncertainty** is the irreducible randomness in observations themselves — measurement noise, label stochasticity, or inherent non-determinism — that persists even with infinite data.

A heteroscedastic model $y = f_\mu(x,\theta) + f_\sigma(x,\theta) \cdot \epsilon$, $\epsilon \sim \mathcal{N}(0,1)$ explicitly parameterizes aleatoric noise via $f_\sigma$. Epistemic uncertainty emerges from $p(\theta|D)$.

## Laplace Approximation

The Laplace approximation fits a Gaussian posterior around the MAP (maximum a posteriori) point estimate $\hat{\theta}$:

$$q(\theta) = \mathcal{N}(\hat{\theta}, H^{-1})$$

where $H = \nabla^2 \log p(\theta|D)$ is the Hessian of the log-posterior. For networks with millions of parameters, computing and inverting $H$ seems intractable. **Kronecker-Factored Laplace (KFAC-Laplace)** solves this: it block-diagonalizes the Hessian structure across layers, scaling linearly in parameter count. KFAC-Laplace is applied *post hoc* to an already-trained network, requiring no retraining. Empirically, it yields excellent uncertainty calibration and often outperforms explicit variational methods on downstream tasks (e.g., active learning, OOD detection).

## MC Dropout: Variational Inference via Dropout

Gal & Ghahramani (2016) proved that keeping dropout *active at test time* approximates variational inference with a factorized Bernoulli posterior over weights. Run $T$ forward passes with different dropout masks:

$$\hat{y}^* = \frac{1}{T} \sum_{t=1}^T f(x^*, \hat{\theta}^{(t)})$$

The empirical sample variance estimates epistemic uncertainty:

$$\sigma_{\text{epist}}^2 \approx \frac{1}{T} \sum_t (f(x^*, \hat{\theta}^{(t)}) - \hat{y}^*)^2$$

Aleatoric uncertainty is captured by a separate scalar output predicting observation noise $\sigma_{\text{aleat}}^2(x)$. The beauty of MC Dropout: no retraining needed. At inference, simply set `model.train()` before dropout, run multiple forward passes, and compute statistics. This lightweight approach made Bayesian uncertainty practical for practitioners.

## Deep Ensembles

Lakshminarayanan et al. (2017) trained $M$ independent networks with different random seeds and data shuffles. The predictive distribution is a mixture:

$$p(y^* | x^*, D) \approx \frac{1}{M} \sum_{m=1}^M \mathcal{N}(f_m(x^*), \sigma_m^2)$$

Though not strictly Bayesian (no single posterior ELBO), deep ensembles are surprisingly well-calibrated and often *outperform* variational inference in practice. The secret: independence drives **functional diversity** — each network finds a different mode of the loss landscape, naturally approximating a sample from the posterior. Ensembles scale embarrassingly well (train each network in parallel), and their empirical calibration requires no temperature scaling in many domains.

## Variational Inference and the ELBO

The full Bayesian machinery minimizes KL divergence between a tractable variational family $q_\phi(\theta)$ and the true posterior:

$$\text{KL}[q_\phi(\theta) || p(\theta|D)] = \int q_\phi(\theta) \log \frac{q_\phi(\theta)}{p(\theta|D)} d\theta$$

Equivalently, maximize the Evidence Lower Bound:

$$\text{ELBO}(\phi) = \mathbb{E}_{q_\phi}[\log p(D|\theta)] - \text{KL}[q_\phi(\theta) || p(\theta)]$$

This decomposition reveals the fundamental trade-off: the first term pushes $q$ to explain data well (fit), while the second term prevents $q$ from wandering too far from the prior (regularization). **Mean-field variational inference** assumes $q_\phi(\theta) = \prod_i q_i(\theta_i)$, factorizing over weights, which accelerates computation but often underestimates posterior variance.

## SGLD and MCMC in Neural Networks

For direct posterior sampling, Stochastic Gradient Langevin Dynamics (SGLD) adds noise to SGD:

$$\theta_t \leftarrow \theta_{t-1} - \eta \nabla U(\theta) + \sqrt{2\eta} \cdot z_t, \quad z_t \sim \mathcal{N}(0, I)$$

where $U(\theta) = -\log p(\theta|D)$. SGLD approximates Hamiltonian dynamics and provably converges to the true posterior under appropriate learning-rate schedules. In practice, SGLD is slower than MC Dropout or ensembles (requires careful tuning), but asymptotically more accurate for small datasets where posterior mass is concentrated.

## Calibration and Expected Calibration Error

A well-calibrated model reports uncertainty that matches reality: predicted confidence should align with empirical frequency. **Expected Calibration Error (ECE)**:

$$\text{ECE} = \sum_b \frac{|B_b|}{n} \left| \text{accuracy}(B_b) - \text{confidence}(B_b) \right|$$

partitions predictions into confidence bins $B_b \in [b, b+\delta)$ and compares empirical accuracy within each bin to average reported confidence. Ideally: $P(y^*=y | P(y^*=y|x)=p) = p$ for all $p$. Ensembles and MC Dropout achieve good calibration naturally; **temperature scaling** — dividing logits by a learned $T$ before softmax — further sharpens calibration without retraining.

## Applications and Impact

**Medical Imaging:** A classifier's epistemic uncertainty signals "I've seen data like this, but I'm unsure — refer to radiologist." Aleatoric uncertainty in pixel-level tasks (e.g., segmentation) indicates anatomical ambiguity inherent in the image. Together, they guide referral protocols.

**Autonomous Driving:** High epistemic uncertainty at an intersection → activate defensive sub-behaviors. Aleatoric uncertainty in pedestrian trajectory → increase safety margin. Ensembles of driving policies provably reduce collision rates.

**Financial Forecasting:** Decomposing return volatility into epistemic (parameter risk) and aleatoric (market microstructure noise) improves position sizing and Value-at-Risk estimates. Deep ensembles exhibit robustness across market regimes.

**Active Learning:** Examples where the ensemble disagrees (high epistemic uncertainty) are the most informative to label next, accelerating data-efficient learning.

## Open Frontiers

Scaling Bayesian methods to large language models remains challenging. Recent work explores: (1) efficient posterior approximations via low-rank updates to Laplace, (2) combining uncertainty quantification with [[neural-scaling-laws|neural scaling laws]] to predict OOD behavior, (3) integrating [[evaluation-llms|LLM evaluation]] with uncertainty metrics for automated quality control.

Bayesian deep learning bridges frequentist optimization and probabilistic reasoning, grounding neural networks in [[kolmogorov-probability-axioms|probability theory]] and [[statistical-mechanics|statistical mechanics]]. See also [[gaussian-processes|Gaussian processes]] (exact posteriors at $O(n^3)$ cost), [[variational-autoencoders|VAEs]] (ELBO-based generative models), and [[mcmc|MCMC]] (asymptotically exact sampling).
