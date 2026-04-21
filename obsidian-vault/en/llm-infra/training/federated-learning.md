---
title: "Federated Learning"
category: "LLM Infrastructure"
order: 15
lang: "en"
slug: "federated-learning"
---

# Federated Learning

Federated Learning (FL) is a decentralized machine learning technique that allows models to be trained across multiple servers or devices holding local data samples, without ever exchanging them. This addresses critical concerns regarding data privacy, security, and bandwidth.

## The Core Algorithm: FedAvg

The most common approach to FL is **Federated Averaging (FedAvg)**. The process works in rounds:

1.  **Broadcast**: A central server sends the current global model weights $w_t$ to a subset of participating devices (clients).
2.  **Local Training**: Each client trains the model on its local data for a few epochs, producing new weights $w_{t+1}^i$.
3.  **Upload**: Clients send their weight updates (or gradients) back to the server.
4.  **Aggregation**: The server computes the new global model by averaging the client updates:
    $$w_{t+1} = \sum_{i=1}^k \frac{n_i}{n} w_{t+1}^i$$
5.  **Repeat**: The process continues until the model converges.

## Challenges in Federated Learning

### 1. Statistical Heterogeneity (Non-IID)
Data on different devices is often not "Identically and Independently Distributed." For example, a mobile phone in Japan will have very different text data than one in Brazil. This can cause the global model to diverge.

### 2. Communication Efficiency
Sending large model weights (e.g., for a 7B parameter [[llm]]) over mobile networks is expensive. Techniques like **[[quantization]]**, **Sparsification**, and **LoRA** are used to reduce communication costs.

### 3. System Heterogeneity
Some devices are powerful (GPUs), while others are slow (CPUs) or have poor battery life. The protocol must handle "stragglers" (slow devices) without stalling the entire training process.

## Visualization: Convergence Delay

```chart
{
  "type": "line",
  "xAxis": "rounds",
  "data": [
    {"rounds": 0, "centralized": 0.1, "federated": 0.1},
    {"rounds": 10, "centralized": 0.6, "federated": 0.4},
    {"rounds": 50, "centralized": 0.9, "federated": 0.7},
    {"rounds": 100, "centralized": 0.95, "federated": 0.88},
    {"rounds": 200, "centralized": 0.98, "federated": 0.94}
  ],
  "lines": [
    {"dataKey": "centralized", "stroke": "#10b981", "name": "Centralized Training"},
    {"dataKey": "federated", "stroke": "#f59e0b", "name": "Federated Learning (FedAvg)"}
  ]
}
```
*Federated learning typically requires more rounds to reach the same accuracy as centralized training due to the communication overhead and data non-uniformity.*

## Applications

1.  **Mobile Health**: Training diagnostic models on patient data that stays on their personal devices.
2.  **Smart Keyboards**: Learning next-word predictions without uploading private messages to the cloud.
3.  **Finance**: Anti-fraud models trained across different banks who cannot share customer data due to regulations.

## Related Topics

[[differential-privacy]] — used to prevent leaking data via weight updates  
[[quantization]] — used to compress updates  
[[llm-infra/training/fine-tuning]] — FL is often used for private [[fine-tuning]]
---
