---
title: "Chain-of-Thought Reasoning"
category: "LLM Infrastructure"
order: 3
lang: "en"
slug: "chain-of-thought"
---

# Chain-of-Thought Reasoning

## Prerequisites

[[llm]]

## Overview

Chain-of-Thought (CoT) prompting is a technique that elicits step-by-step intermediate reasoning from language models before they produce a final answer. Instead of going directly from question to answer, the model is guided — or trained — to articulate a chain of logical steps, much like a human working through scratch paper. This dramatically improves performance on tasks requiring arithmetic, symbolic manipulation, commonsense reasoning, and multi-step inference.

The technique was formalized by Wei et al. (Google Brain, 2022) in "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models." The paper demonstrated that simply including worked examples with explicit reasoning steps in the few-shot prompt caused sufficiently large models (≥100B parameters at the time) to generalize the pattern and solve novel problems they previously failed. This was a pivotal result: it showed that capability could be unlocked through prompting rather than architecture changes.

In modern inference stacks, CoT is no longer just a few-shot hack. It is embedded in model training via reinforcement learning from human feedback (RLHF) on reasoning traces, in system prompts for deployed assistants, and in hybrid frameworks like [[tool-use]] (ReAct) that interleave reasoning with external actions. Extended thinking, as implemented in models like Claude 3.7 Sonnet, makes the reasoning chain a first-class artifact with its own token budget.

## How It Works

**Standard few-shot CoT:** The prompt includes $k$ examples, each showing a question followed by a reasoning chain and a final answer. The model generates a similar chain for the new question before committing to an answer.

**Zero-shot CoT:** Appending the phrase "Let's think step by step" to the prompt — introduced by Kojima et al. (2022) — triggers CoT behavior without examples. The model treats the phrase as an instruction to elaborate its reasoning process.

**Self-consistency:** Rather than taking a single greedy decode, sample $m$ reasoning chains stochastically and take a majority vote on the final answer. Proposed by Wang et al. (2022), this treats reasoning as a stochastic process and improves reliability on problems with a unique correct answer.

**Tree of Thoughts (ToT):** Yao et al. (2023) extend CoT from a linear chain to a tree structure. The model generates multiple candidate reasoning steps at each node, evaluates their promise (via a value function or self-evaluation), and explores the most promising branches. This enables lookahead and backtracking — essential for combinatorial puzzles.

**Program of Thought (PoT):** Chen et al. (2022) have the model produce executable code as the reasoning trace instead of natural language. The code is run by a Python interpreter, and the output is the final answer. PoT sidesteps arithmetic errors and length generalization problems inherent in natural-language reasoning chains.

## Mathematical / Formal Framework

Let $\mathcal{X}$ be the space of problems and $\mathcal{Y}$ the space of answers. Without CoT, a model estimates $p_\theta(y \mid x)$ directly. With CoT, reasoning chains $z \in \mathcal{Z}$ are introduced as latent variables:

$$p_\theta(y \mid x) = \sum_{z \in \mathcal{Z}} p_\theta(y \mid x, z) \cdot p_\theta(z \mid x)$$

In practice, $z$ is approximated by a single greedy chain (standard CoT) or by $m$ sampled chains (self-consistency). Self-consistency estimator:

$$\hat{y} = \arg\max_{y} \sum_{i=1}^{m} \mathbf{1}[\text{answer}(z_i) = y], \quad z_i \sim p_\theta(\cdot \mid x)$$

Tree of Thoughts frames the problem as a search over a reasoning graph $G = (V, E)$ where nodes are partial reasoning states and edges are reasoning steps. The model serves as both a generator and an evaluator:

$$V_{\text{expand}}(v) = \text{LLM-generate}(v), \quad V_{\text{value}}(v) = \text{LLM-evaluate}(v)$$

Search algorithms (BFS, DFS, beam search) traverse $G$ to find a reasoning path $v_0 \to v_1 \to \ldots \to v_T$ leading to a correct answer. The depth $T$ and branching factor $b$ determine computational cost: $O(b^T)$ model calls.

## Implementation

```python
import anthropic
import re
from collections import Counter

client = anthropic.Anthropic()


def zero_shot_cot(problem: str) -> str:
    """Zero-shot CoT: append 'Let's think step by step' to any problem."""
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": f"{problem}\n\nLet's think step by step.",
            }
        ],
    )
    return response.content[0].text


def self_consistent_cot(
    problem: str,
    num_samples: int = 5,
    temperature: float = 0.7,
) -> dict:
    """
    Self-consistency: sample N reasoning chains independently,
    extract the final answer from each, take majority vote.
    """
    answers = []

    for _ in range(num_samples):
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=1024,
            temperature=temperature,
            messages=[
                {
                    "role": "user",
                    "content": (
                        f"{problem}\n\n"
                        "Think step by step, then end with: "
                        "'Therefore, the final answer is: <answer>'"
                    ),
                }
            ],
        )
        text = response.content[0].text
        match = re.search(r"final answer is[:\s]+(.+?)(?:\n|$)", text, re.IGNORECASE)
        if match:
            answers.append(match.group(1).strip())

    if answers:
        vote_counts = Counter(answers)
        majority_answer, votes = vote_counts.most_common(1)[0]
    else:
        majority_answer, votes = "Unable to determine", 0

    return {
        "majority_answer": majority_answer,
        "vote_count": votes,
        "total_samples": num_samples,
    }


def program_of_thought(problem: str) -> str:
    """
    Program of Thought: ask the LLM to write code as the reasoning step.
    The code is then handed to a tool (see tool-use pattern) for execution.
    Returns the generated code string; execution is handled by the caller.
    """
    response = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": (
                    "Write a Python expression or short script that computes "
                    "the numeric answer. Only output the code.\n\n"
                    f"Problem: {problem}"
                ),
            }
        ],
    )
    code = response.content[0].text
    return re.sub(r"```python\n?|```\n?", "", code).strip()


# --- Example ---
problem = (
    "A train travels from A to B at 60 km/h. "
    "On the return it travels at 40 km/h. "
    "What is the average speed for the full round trip?"
)

print("Zero-shot CoT:")
print(zero_shot_cot(problem)[:400])

print("\nSelf-consistency (5 samples):")
sc = self_consistent_cot(problem, num_samples=5)
print(f"Answer: {sc['majority_answer']}  ({sc['vote_count']}/{sc['total_samples']} votes)")

print("\nProgram of Thought (generated code):")
print(program_of_thought(problem))
```

## When CoT Helps vs. Hurts

**Helps:**
- Multi-step arithmetic and algebra.
- Symbolic reasoning (logic puzzles, planning).
- Problems requiring multiple facts to be combined.
- Tasks where intermediate steps can be verified.

**Hurts or is neutral:**
- Simple factual recall: "What is the capital of France?" — CoT adds tokens and latency with no benefit.
- Tasks where the model's reasoning chain may be unfaithful to its actual computation (the chain is post-hoc rationalization).
- Real-time applications where latency is critical and the answer is short-horizon.

**Emergent behavior:** Wei et al. showed CoT improves performance dramatically only above a certain model scale (roughly 100B parameters at the time of publication). With modern smaller models fine-tuned on reasoning data, the threshold has dropped significantly.

## Variants & Extensions

**Least-to-most prompting:** decompose a complex problem into simpler sub-problems, solve them sequentially, and use each solution as context for the next.

**Scratchpad fine-tuning:** train models on datasets where correct reasoning traces are provided (e.g., GSM8K, MATH), making CoT behavior intrinsic rather than prompted.

**Process reward models (PRMs):** instead of rewarding final answer correctness, provide step-level reward signals that guide search over reasoning trees. Used in OpenAI's o1/o3 and related research.

**Faithful CoT:** research direction aiming to ensure the generated reasoning chain causally explains the model's output rather than being a post-hoc narrative.

**Extended thinking:** Anthropic's Claude 3.7 Sonnet exposes a `thinking` content block — a dedicated token budget for internal reasoning that is separate from the final response. This is a production implementation of scratchpad CoT with an explicit compute allocation.

## Practical Applications

- **Multi-step quantitative finance:** decomposing valuation problems — estimate revenue growth, apply a discount rate, derive equity value.
- **Code generation:** generating a test plan or algorithm sketch before writing implementation code is a form of CoT that improves correctness.
- **Medical diagnosis:** differential diagnosis reasoning, where the model lists evidence for/against each hypothesis.
- **Legal reasoning:** identifying relevant precedents, then reasoning to an opinion.
- **Educational tutoring:** showing work step by step rather than presenting only the final answer.

## Related Topics

- [[tool-use]] — ReAct interleaves CoT reasoning steps with tool calls to ground reasoning in external observations.
- [[speculative-decoding]] — extended thinking models generate long reasoning chains; speculative decoding can accelerate this generation.
- [[rag]] — multi-hop reasoning over retrieved documents benefits from structured CoT decomposition.
- [[mcp]] — reasoning steps in an agent loop may trigger MCP tool invocations.
