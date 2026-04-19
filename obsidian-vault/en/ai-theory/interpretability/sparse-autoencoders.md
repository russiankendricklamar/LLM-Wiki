---
title: "Sparse Autoencoders (SAE)"
category: "AI Theory"
order: 5
lang: "en"
slug: "sparse-autoencoders"
---

# Sparse Autoencoders (SAE)

## Prerequisites

[[mechanistic-interpretability]]

## Overview

Sparse Autoencoders (SAEs) are a method for decomposing the dense, polysemantic activations of neural network layers — particularly transformer residual streams — into a larger set of sparse, ideally monosemantic features. The core idea is dictionary learning: find a dictionary of "feature directions" such that each activation vector can be approximately reconstructed as a sparse linear combination of these directions.

SAEs have become the primary tool in mechanistic interpretability for making sense of superposition: the phenomenon where neural networks pack more "concepts" into their weight matrices than there are neurons by representing each concept as a direction in activation space rather than a dedicated neuron.

Anthropic's 2024 work scaling SAEs to Claude activations found millions of interpretable features — including emotions, syntactic roles, named entities, and even abstract concepts like "deception" — demonstrating that LLM internals are far more structured than previously known.

## Visualization

The chart below shows the reconstruction-sparsity tradeoff as dictionary size scales: larger dictionaries achieve lower reconstruction MSE while maintaining the same L0 sparsity budget, illustrating the feature-splitting phenomenon.

```chart
{
  "type": "line",
  "xAxis": "dict_size",
  "data": [
    {"dict_size": "256", "recon_mse": 0.42, "monosemantic_pct": 31},
    {"dict_size": "512", "recon_mse": 0.34, "monosemantic_pct": 42},
    {"dict_size": "1024", "recon_mse": 0.27, "monosemantic_pct": 54},
    {"dict_size": "2048", "recon_mse": 0.21, "monosemantic_pct": 63},
    {"dict_size": "4096", "recon_mse": 0.16, "monosemantic_pct": 71},
    {"dict_size": "8192", "recon_mse": 0.12, "monosemantic_pct": 78},
    {"dict_size": "16384", "recon_mse": 0.09, "monosemantic_pct": 83},
    {"dict_size": "32768", "recon_mse": 0.07, "monosemantic_pct": 86},
    {"dict_size": "65536", "recon_mse": 0.06, "monosemantic_pct": 88},
    {"dict_size": "131072", "recon_mse": 0.055, "monosemantic_pct": 89}
  ],
  "lines": [
    {"dataKey": "recon_mse", "stroke": "#ef4444", "name": "Reconstruction MSE"},
    {"dataKey": "monosemantic_pct", "stroke": "#10b981", "name": "Monosemantic features (%)"}
  ]
}
```

## Mathematical Framework

**Dictionary learning objective.** Given activation vectors $\{x_i\}_{i=1}^N$ with $x_i \in \mathbb{R}^d$, learn:
- Encoder $\mathbf{W}_{\text{enc}} \in \mathbb{R}^{m \times d}$, bias $\mathbf{b}_{\text{enc}} \in \mathbb{R}^m$
- Decoder $\mathbf{W}_{\text{dec}} \in \mathbb{R}^{d \times m}$ with unit-norm columns
- Reconstruction $\hat{x} = \mathbf{W}_{\text{dec}} f(x)$

where $m \gg d$ (over-complete dictionary) and $f(x)$ is a sparse code.

**L1-penalty SAE.** The standard training loss:

$$\mathcal{L}(x) = \|x - \hat{x}\|_2^2 + \lambda \|f(x)\|_1$$

$$f(x) = \text{ReLU}(\mathbf{W}_{\text{enc}} x + \mathbf{b}_{\text{enc}})$$

The L1 penalty on the feature activations $f(x)$ induces sparsity: most features are zero for any given input, and each input activates only a small subset of the dictionary.

**Top-K SAEs.** An alternative to L1 sparsity: enforce exactly $K$ non-zero features per input:

$$f_{\text{TopK}}(x) = \text{TopK}(\text{ReLU}(\mathbf{W}_{\text{enc}} x + \mathbf{b}_{\text{enc}}))$$

Top-K SAEs avoid the "L1 feature suppression" pathology (L1 under-estimates feature magnitudes) and give cleaner control over sparsity level.

**Superposition geometry.** The Johnson-Lindenstrauss lemma guarantees that $m = O(d \log m)$ near-orthogonal directions exist in $\mathbb{R}^d$. For sparse features (only $s \ll m$ active simultaneously), interference is bounded by:

$$\text{average interference} \leq \frac{s-1}{d}$$

This is the theoretical foundation for superposition: sparse features with interference $\ll 1$ can coexist in a low-dimensional space.

## How It Works

**Training pipeline.** SAEs are trained on large collections of activations from a frozen LLM:
1. Run many forward passes on a diverse text corpus
2. Store the activations at a specific layer (e.g., residual stream after layer 12)
3. Train the SAE on these activations with L1 loss
4. Evaluate reconstruction quality (explained variance) and sparsity (mean L0 norm)

**Feature identification.** After training:
1. For each dictionary feature $j$, find the top-activating input examples
2. A feature is **monosemantic** if all top-activating examples share a coherent semantic concept
3. A feature is **polysemantic** if top examples span unrelated concepts

**Evaluation metrics:**
- **Reconstruction MSE:** $\mathbb{E}[\|x - \hat{x}\|^2]$ — should be small
- **L0 sparsity:** Mean number of non-zero features per input — should be $\ll m$
- **Monosemanticity score:** Fraction of features that appear monosemantic to human raters
- **Activation frequency:** Distribution of how often each feature activates; dead features (never activating) indicate over-capacity

**Geometry of feature space.** SAE features are not independent; they form geometric structures:
- Features for related concepts point in similar directions
- Arithmetic relations: $\vec{\text{king}} - \vec{\text{man}} + \vec{\text{woman}} \approx \vec{\text{queen}}$ (known from word2vec; SAE features show similar structures)
- **Feature splitting:** At larger dictionary sizes $m$, previously merged features split into more specific sub-features

## Python Implementation

```python
import torch
import torch.nn as nn

class SparseAutoencoder(nn.Module):
    """L1-penalised Sparse Autoencoder for LLM activation decomposition."""

    def __init__(self, d_model: int, n_features: int, l1_coeff: float = 1e-3):
        super().__init__()
        self.d_model = d_model
        self.n_features = n_features
        self.l1_coeff = l1_coeff

        self.W_enc = nn.Linear(d_model, n_features, bias=True)
        self.W_dec = nn.Linear(n_features, d_model, bias=False)

        # Initialise decoder columns to unit norm
        nn.init.orthogonal_(self.W_dec.weight)
        self._normalise_decoder()

    def _normalise_decoder(self):
        with torch.no_grad():
            norms = self.W_dec.weight.norm(dim=0, keepdim=True).clamp(min=1e-8)
            self.W_dec.weight.copy_(self.W_dec.weight / norms)

    def encode(self, x: torch.Tensor) -> torch.Tensor:
        return torch.relu(self.W_enc(x))

    def decode(self, f: torch.Tensor) -> torch.Tensor:
        return self.W_dec(f)

    def forward(self, x: torch.Tensor):
        f = self.encode(x)
        x_hat = self.decode(f)
        return x_hat, f

    def loss(self, x: torch.Tensor):
        x_hat, f = self.forward(x)
        recon_loss = ((x - x_hat) ** 2).sum(dim=-1).mean()
        sparsity_loss = self.l1_coeff * f.abs().sum(dim=-1).mean()
        return recon_loss + sparsity_loss, recon_loss, sparsity_loss


class TopKSparseAutoencoder(nn.Module):
    """Top-K SAE: exactly K features active per input."""

    def __init__(self, d_model: int, n_features: int, k: int):
        super().__init__()
        self.k = k
        self.W_enc = nn.Linear(d_model, n_features, bias=True)
        self.W_dec = nn.Linear(n_features, d_model, bias=False)
        nn.init.orthogonal_(self.W_dec.weight)

    def encode(self, x: torch.Tensor) -> torch.Tensor:
        pre_acts = torch.relu(self.W_enc(x))
        # Zero out all but top-k activations
        topk_vals, topk_idx = pre_acts.topk(self.k, dim=-1)
        sparse = torch.zeros_like(pre_acts)
        sparse.scatter_(-1, topk_idx, topk_vals)
        return sparse

    def forward(self, x: torch.Tensor):
        f = self.encode(x)
        x_hat = self.W_dec(f)
        return x_hat, f

    def loss(self, x: torch.Tensor):
        x_hat, f = self.forward(x)
        recon_loss = ((x - x_hat) ** 2).sum(dim=-1).mean()
        return recon_loss, f


def train_sae(model, activations, n_epochs=50, lr=2e-4, batch_size=512):
    """Train SAE on pre-collected LLM activations."""
    optimizer = torch.optim.Adam(model.parameters(), lr=lr)
    dataset_size = activations.shape[0]

    for epoch in range(n_epochs):
        indices = torch.randperm(dataset_size)
        total_recon = 0.0
        n_batches = 0

        for start in range(0, dataset_size, batch_size):
            batch = activations[indices[start:start + batch_size]]
            optimizer.zero_grad()

            if isinstance(model, SparseAutoencoder):
                loss, recon, sparsity = model.loss(batch)
            else:
                recon, _ = model.loss(batch)
                loss = recon

            loss.backward()
            # Gradient clipping for stability
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            optimizer.step()

            # Re-normalise decoder columns after each step
            if hasattr(model, '_normalise_decoder'):
                model._normalise_decoder()

            total_recon += recon.item() if isinstance(recon, torch.Tensor) else recon
            n_batches += 1

        if epoch % 10 == 0:
            print(f"Epoch {epoch}: recon_loss={total_recon / n_batches:.4f}")


# Demonstration with synthetic activations
torch.manual_seed(0)
d_model = 512
n_features = 2048    # 4x over-complete dictionary
n_samples = 10000
k = 20               # Top-K sparsity

# Synthetic activations: sparse combinations of ground-truth features
true_features = torch.randn(n_features, d_model)
true_features = true_features / true_features.norm(dim=1, keepdim=True)
true_codes = torch.zeros(n_samples, n_features)
for i in range(n_samples):
    active_idx = torch.randperm(n_features)[:k]
    true_codes[i, active_idx] = torch.rand(k).abs()
activations = true_codes @ true_features + 0.01 * torch.randn(n_samples, d_model)

# Train both variants
sae_l1 = SparseAutoencoder(d_model, n_features, l1_coeff=5e-4)
sae_topk = TopKSparseAutoencoder(d_model, n_features, k=k)

print("Training L1 SAE:")
train_sae(sae_l1, activations, n_epochs=30)
print("\nTraining Top-K SAE:")
train_sae(sae_topk, activations, n_epochs=30)

# Evaluate sparsity
with torch.no_grad():
    _, f_l1 = sae_l1(activations[:1000])
    l0_l1 = (f_l1 > 0).float().sum(dim=-1).mean()
    print(f"\nL1 SAE mean L0 sparsity: {l0_l1:.1f} (target: {k})")
```

## Key Results & Properties

- **Anthropic Claude SAEs (2024):** SAEs trained on Claude 3 Sonnet activations find ~34 million features, the majority monosemantic. Features include "the Atlantic Ocean", "moral condemnation", and "the concept of deception".
- **Feature splitting:** Doubling dictionary size consistently splits broad features into more specific sub-features — evidence that features have hierarchical structure.
- **Superposition geometry:** Dead features are common at small $m$; too-large $m$ causes feature splitting to plateau. Optimal dictionary size is model- and layer-specific.
- **Top-K advantage:** Top-K SAEs achieve better reconstruction for the same L0 level compared to L1-penalty SAEs, without feature suppression.
- **Cross-layer universality:** Similar features appear in similar positions across different model sizes and families, suggesting a universal "feature dictionary" for language.

## Limitations

**Computational cost.** Training an SAE on a large model's activations requires storing millions of activation vectors and many training epochs. Scaling to all layers of a 70B+ model is expensive.

**Completeness.** It is unknown whether SAEs find all features or only the most prominent ones. Features encoding subtle world knowledge or very rare concepts may be missed.

**Interpretability gap.** Not all discovered features have obvious human interpretations. "Dark features" — consistently active for certain inputs but with no clear semantic pattern — remain a challenge.

**Reconstruction-sparsity tradeoff.** No free lunch: lower L0 sparsity (sparser features) requires higher $m$ or accepts worse reconstruction. The Pareto frontier varies by layer and model.

**Causal role unknown.** A feature being active does not mean it is causally responsible for the model's output on that token. Activation patching studies are needed to establish causal chains.

## Applications

- **Safety monitoring:** Detect activation of "deception" or "harmful intent" features in deployed models.
- **Steering vectors:** Amplify or suppress specific SAE features to steer model behaviour (e.g., tone, topic, safety properties).
- **Circuit analysis:** Use SAE features as the unit of analysis in circuits rather than raw neurons, cutting through polysemanticity.
- **Model comparison:** Compare feature dictionaries across model versions to understand what changes between training runs.
- **Knowledge localisation:** Find which features store specific facts and use them as targets for model editing.

## Related Topics

- [[mechanistic-interpretability]] — the broader project that SAEs serve as a key tool for
- [[pac-learning]] — dictionary learning connected to sparse recovery and compressed sensing
- [[shannon-entropy]] — information-theoretic bounds on sparse coding efficiency
