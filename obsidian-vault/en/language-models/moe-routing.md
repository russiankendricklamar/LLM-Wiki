---
title: "MoE Routing and Specialization"
category: "Language Models"
order: 16
lang: "en"
slug: "moe-routing"
---

# MoE Routing and Expert Specialization

In a **Mixture of Experts (MoE)** architecture, the **Router** (or Gating Network) is the brain that decides which tokens are processed by which experts. Efficient routing is the key to scaling models to trillions of parameters while keeping compute costs constant.

## How Routing Works

For each token $x$, the router computes a probability distribution over $N$ experts using a learnable weight matrix $W_g$:

$$H(x) = \text{softmax}(x \cdot W_g)$$

In **Top-k Routing**, the model only selects the $k$ experts with the highest probabilities (usually $k=1$ or $k=2$). The output is the weighted sum of their results:
$$y = \sum_{i \in \text{Top-k}} H(x)_i \cdot E_i(x)$$

## Routing Challenges

### 1. Expert Collapse (Winner-Take-All)
Without intervention, the router tends to favor a few "star" experts, while others receive no training data and remain useless.
- **Solution**: **Auxiliary Load Balancing Loss**. This term penalizes the model if the distribution of tokens across experts is not uniform.

### 2. Expert Overflow
In distributed training, each expert has a fixed capacity (max tokens per batch). If too many tokens are routed to one expert, the excess tokens are dropped (ignored), leading to quality loss.

## Advanced Routing Strategies

### 1. Switch Transformer (Top-1)
Introduced by Google, it uses $k=1$. This is the most memory-efficient but requires very careful load balancing to prevent training instability.

### 2. Expert Choice Routing
Instead of tokens choosing experts, **experts choose tokens**. Each expert selects the top-$C$ tokens it is most qualified to process. This naturally solves the load balancing problem.

### 3. DeepSeek-V3: Multi-Head Latent Attention & DeepSeekMoE
DeepSeek uses "fine-grained experts" and **shared experts** (experts that process every token) to capture common knowledge, while specialized experts handle niche tasks.

## Visualization: Token Distribution

```chart
{
  "type": "bar",
  "xAxis": "expert",
  "data": [
    {"expert": "Syntax", "tokens": 45, "load": 80},
    {"expert": "Logic", "tokens": 30, "load": 75},
    {"expert": "Math", "tokens": 10, "load": 20},
    {"expert": "Coding", "tokens": 15, "load": 35}
  ],
  "lines": [
    {"dataKey": "load", "stroke": "#ef4444", "name": "Expert Load (%)"}
  ]
}
```
*Well-trained MoE models show clear specialization: some experts become masters of grammar, while others activate only for mathematical symbols or code snippets.*

## Related Topics

[[mixture-of-experts]] — the core architecture  
[[mla]] — efficient attention in MoE models  
[[scaling-laws]] — how MoE affects parameter-compute scaling
---
