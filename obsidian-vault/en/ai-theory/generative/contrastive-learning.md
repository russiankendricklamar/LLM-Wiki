---
title: "Contrastive Learning"
category: "AI Theory"
order: 18
lang: "en"
slug: "contrastive-learning"
growth: "seedling"
---

Contrastive learning is a self-supervised learning paradigm where a model learns useful representations by pulling similar pairs of examples together and pushing dissimilar examples apart. The key insight: rich representations require no explicit labels—similarity is defined implicitly through data augmentations, modal alignment, or problem structure.

## NT-Xent Loss and Information Maximization

The canonical contrastive loss is **normalized temperature-scaled cross-entropy (NT-Xent)**:

$$L_{i,j} = -\log \frac{\exp(\text{sim}(z_i, z_j) / \tau)}{\sum_{k=1}^{2N} \mathbb{1}_{[k \neq i]} \exp(\text{sim}(z_i, z_k) / \tau)}$$

where $z_i, z_j$ are normalized (projected) representations, $\text{sim}(a, b) = a^T b / (\|a\| \|b\|)$ denotes cosine similarity, $\tau$ is temperature (typically 0.07), and $N$ is batch size. The denominator sums over $2N - 2$ negative examples.

**Information-theoretic view**: NT-Xent is a lower bound on the **InfoNCE** criterion (Oord et al., 2018):

$$I(z_i; z_j) \geq \text{InfoNCE} = \mathbb{E}\left[\log \frac{p(z_j | z_i)}{p(z_j)}\right]$$

Maximizing mutual information between two views of the same sample forces the representation to retain invariant features under transformation—a principle anchored in information theory.

## SimCLR: Simplicity at Scale

**SimCLR** (Chen et al., 2020) demonstrates that architectural simplicity combined with large batch size achieves strong results:

1. Two independent augmentations $\tilde{x}_i, \tilde{x}_j \sim \mathcal{A}(x)$ are created (crop, rotation, color jitter, blur)
2. Encoder $f$ (ResNet) produces hidden state: $h_i = f(\tilde{x}_i)$
3. Projection head $g$ (two-layer MLP) yields representation: $z_i = g(h_i)$
4. Contrastive loss is applied to pairs $(z_i, z_j)$ within a batch

**Critical empirical finding**: during downstream fine-tuning, the hidden state $h_i$ is used and the projection head $g$ is discarded. Intuition: $g$ was optimized for the contrastive task and does not transfer. The simple scheme requires large batches ($N \geq 4096$) to supply sufficient negative examples.

## MoCo: Memory and Momentum

**Momentum Contrast** (He et al., 2020) sidesteps the computational requirement for huge batches through a queue of negatives and a slowly-updated encoder:

- **Network design**: two encoder copies — fast-updated query encoder $f_q$ and momentum encoder $f_k$ (slow)
- **Momentum update rule**: $\theta_k \leftarrow m \cdot \theta_k + (1 - m) \cdot \theta_q$, where $m = 0.999$ (exponential moving average)
- **Memory queue**: keys (representations from $f_k$) are stored in a queue of size $Q \approx 65536$; each step, new keys enter and old keys are dropped
- **Loss**: standard NT-Xent between query $q = f_q(\tilde{x}_q)$ and all keys in the queue

Advantage: statistically coherent negative set without gigantic batch sizes. MoCo achieves SimCLR-level performance at $N \sim 256$.

## BYOL: Learning Without Negatives

**Bootstrap Your Own Latent** (Grill et al., 2020) shows negatives are unnecessary:

- **Online network**: encoder $f$ + projection head $g$ + predictor $q$ (additional MLP)
- **Target network**: copy of $(f, g)$ updated via EMA without gradients: $\theta_{\text{target}} \leftarrow \tau \theta_{\text{target}} + (1 - \tau) \theta_{\text{online}}$
- **Loss**: MSE between online prediction and stopped target output:

$$L = \|q_\theta(g_\theta(f_\theta(x))) - \text{stopgrad}(g_{\theta_{\text{target}}}(f_{\theta_{\text{target}}}(x')))\|^2$$

**Collapse prevention**: BYOL avoids representation collapse (all samples → single vector) despite absent negatives via asymmetry. The predictor $q$ appears only on the online branch; the target network acts as an anchor. Implicit regularization from BatchNorm prevents degeneration.

## CLIP: Cross-Modal Contrastive Learning

**CLIP** (Radford et al., 2021) learns joint image-text representations on 400M image-caption pairs:

- **Dual encoders**: $f_{\text{img}}$ (Vision Transformer or ResNet) and $f_{\text{text}}$ (BERT-style Transformer)
- **Projections and normalization**: both encoders project to $d = 512$-dim space; embeddings are L2-normalized
- **Symmetric contrastive loss**:

$$L = \frac{1}{2}\left(L_{i2t} + L_{t2i}\right)$$

where $L_{i2t} = -\log \frac{\exp(\text{sim}(v_i, t_i) / \tau)}{\sum_{j=1}^N \exp(\text{sim}(v_i, t_j) / \tau)}$ (image should align with correct caption).

- **Zero-shot classification**: to classify an image into $K$ classes, compute text embeddings for class names ("a photograph of a dog") and find the class with highest cosine similarity

CLIP demonstrates that contrastive pretraining on large-scale heterogeneous data produces zero-shot models that rival supervised baselines—a foundational result in multimodal learning.

## Why Contrastive Learning Works

Three complementary perspectives:

1. **Information maximization**: maximizing $I(z_i; z_j)$ between two views forces $z_i$ to encode sufficient statistics of $x$. Information theory guarantees that high mutual information requires preservation of essential features.

2. **Metric learning**: the contrastive objective induces a metric on representation space where positive pairs are nearby and negative pairs are far. This is equivalent to learning an embedding for a metric space.

3. **Label-free invariance**: augmentations define natural positive pairs; choosing augmentations is equivalent to specifying which invariances the representation must capture.

## Applications and Transfer Gap

Contrastive pretraining rivals supervised pretraining across diverse tasks:

- **CLIP and computer vision**: zero-shot classification via class descriptions
- **Sentence embeddings**: frameworks like [[embedding-models|SimCSE]] and foundation models use contrastive training on sentence pairs
- **Molecular discovery**: contrastive representations of molecules and SMILES strings
- **Financial time series**: scale-invariant price representations [[neural-scaling-laws|respecting scaling properties]]

Caveat: contrastive pretraining may underperform supervised training on small specialized tasks; method choice depends on label availability and compute budget.

## Connections to Other Paradigms

Contrastive learning sits at the intersection of [[generative-models|generative modeling]] (which also maximizes likelihood, a quantity containing mutual information), [[variational-autoencoders|variational autoencoders]] (which balance reconstruction and KL regularization), and [[pac-learning|PAC learning]] (where hypothesis class selection governs sample complexity).
