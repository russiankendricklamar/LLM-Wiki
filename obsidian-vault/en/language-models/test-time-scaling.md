---
title: "Test-Time Scaling"
category: "Language Models"
order: 18
lang: "en"
slug: "test-time-scaling"
---

# Test-Time Scaling (Inference-Time Compute)

## What Is It

Test-time scaling refers to the strategy of increasing the computational resources allocated during the inference (testing) phase to improve a model's performance, particularly on complex reasoning tasks. While traditional [[neural-scaling-laws|scaling laws]] focus on increasing model size (parameters) and training data, test-time scaling demonstrates that for many problems, "thinking longer" can be as effective as "being larger."

This paradigm is central to models like OpenAI's o1, which use extended inference time to explore multiple reasoning paths, verify intermediate steps, and refine their final answers.

## How It Works

Test-time compute can be scaled through several complementary mechanisms:

### 1. Search and Exploration

Instead of greedy decoding (picking the single most likely next token), the model explores a tree or graph of possible reasoning paths.
*   **Best-of-N (Rejection Sampling)**: The model generates $N$ independent responses, and a separate reward model (or the model itself) selects the best one.
*   **Beam Search**: A classic heuristic search that maintains a fixed number of the most promising partial sequences.
*   **Tree Search (MCTS)**: More advanced models use Monte Carlo Tree Search or similar algorithms to navigate the space of possible "thoughts" or "steps," balancing exploration and exploitation.

### 2. Verification and Reward Models

To scale compute effectively, the model needs a way to judge the quality of its own intermediate steps.
*   **Outcome Reward Models (ORM)**: Judge only the final result of a reasoning chain.
*   **[[prm|Process Reward Models (PRM)]]**: Provide a reward signal for every individual step in the reasoning process. This allows for much finer-grained search and "credit assignment," helping the model identify exactly where a reasoning chain went wrong.

### 3. Verification-Guided Search

Combining search with PRMs leads to algorithms like **Step-wise Beam Search** or **Look-ahead Search**, where the model evaluates several potential next steps and only commits to the most promising one according to the reward model.

$$P(\text{correct}) \propto \text{Compute}_{\text{inference}}$$

The relationship between inference compute and accuracy often follows a predictable scaling law, similar to training compute, but specific to the difficulty of the task.

## Benefits

1.  **Reasoning Breakthroughs**: Enables models to solve complex mathematical, coding, and logical problems that are unsolvable via direct next-token prediction.
2.  **Efficiency**: A smaller model with test-time scaling can sometimes outperform a much larger model that uses simple greedy decoding, potentially reducing overall system costs.
3.  **Error Correction**: The model can identify and backtrack from false premises or calculation errors during the "thinking" phase before presenting a final answer.
4.  **Flexibility**: Compute can be scaled dynamically based on the complexity of the user's query—using more compute for a physics proof and less for a casual greeting.

## Trade-offs

*   **Latency**: The primary drawback is the significant increase in time-to-first-token and overall generation time.
*   **Cost**: While the model is smaller, the total number of forward passes required for a single answer increases, which can lead to higher per-query costs.
*   **Complexity**: Implementing robust search and verification loops is significantly more complex than standard autoregressive generation.

## Related Topics

[[reasoning-models]] — models designed specifically for test-time scaling (e.g., o1)  
[[prm]] — the process reward models that enable fine-grained verification  
[[llm]] — the foundation models that provide the base capabilities  
[[neural-scaling-laws]] — the framework for understanding compute-performance trade-offs  
[[chain-of-thought]] — the fundamental prompting technique that test-time scaling automates and expands
