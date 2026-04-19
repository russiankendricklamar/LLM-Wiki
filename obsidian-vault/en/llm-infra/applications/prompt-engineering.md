---
title: "Prompt Engineering"
category: "LLM Infrastructure"
order: 14
lang: "en"
slug: "prompt-engineering"
growth: "seedling"
---

Prompt engineering is the discipline of designing inputs to elicit desired outputs from pre-trained [[llm|language models]] without modifying weights. Unlike [[fine-tuning|fine-tuning]], which adapts the model itself, prompt engineering operates entirely at inference time, making it the first line of attack for steering model behavior and maximizing task performance.

## Zero-shot and Few-shot Learning

The zero-shot setting provides only a task description: "Classify the sentiment" or "Translate to French." Performance is limited by the model's pretraining coverage and emergent capabilities.

Few-shot learning adds $k$ examples of (input, output) pairs to the context window. For structured tasks—classification, entity extraction, reasoning—few-shot examples typically improve accuracy by 5–15%. This is an instance of in-context learning ([[meta-learning|ICL]]), where the model uses patterns in the context to infer the task without gradient updates.

The number of examples $k$ follows a U-shaped curve: too few ($k < 2$) provides insufficient signal; too many ($k > 8$) can introduce noise or dominate the limited context window. Order matters: models weight recent examples more heavily, so place hardest examples last.

## Chain-of-Thought Prompting

Wei et al. (2022) showed that prefixing the prompt with "Let's think step by step" or "Let me work through this" dramatically improves multi-step reasoning. The model generates intermediate thoughts before the final answer.

On GSM8K (grade-school math), this jump is striking:

$$\text{PaLM 540B: } 17\% \text{ (standard) } \to 57\% \text{ (CoT)}$$

Chain-of-thought (CoT) effectiveness is model-size dependent. Below ~100B parameters, CoT offers minimal gain; above that threshold, benefits compound. The mechanism is that the model learns to decompose hard problems into sequential steps, reducing the single-step prediction burden.

**Self-consistency** (Wang et al. 2023) amplifies CoT by sampling $K$ independent reasoning paths at high temperature. A majority vote or frequency-weighted aggregation selects the final answer. This typically improves CoT performance by 5–10% at the cost of $K$ forward passes. Diversity comes from temperature sampling ($\tau = 0.7\text{–}0.9$), which explores the tail of the next-token distribution.

## Tree of Thoughts and Search

Coarser control of exploration treats generation as tree search. **Tree of Thoughts** (ToT) maintains a frontier of partial solutions and either breadth-first or depth-first explores promising branches.

At each node, the model evaluates whether the partial solution is viable:
$$\text{value}(s_t) = P(\text{success} | \text{state } s_t)$$

This reframes generation as a planning problem, enabling backtracking when a branch fails. Monte Carlo tree search (MCTS) strategies balance exploration (visiting new nodes) and exploitation (deepening promising paths). ToT excels on problems with clear intermediate constraints—game playing, multi-step reasoning, code generation.

## System Prompts and Jailbreaking

Every [[llm|LLM]] interaction follows a conversation structure:
1. **System message**: sets persona, constraints, output format, behavioral rules
2. **User turn**: the actual query
3. **Assistant turn**: the model's response

The system prompt establishes a latent context that shapes all downstream tokens. A prompt like "You are an expert physicist. Answer only with rigorous derivations" enforces a different distribution than "You are a helpful assistant."

System prompt design jointly shapes model behavior alongside weight parameters. The system prompt is often updated post-training (e.g., via [[rlhf|RLHF]]) to encode safety constraints and tone.

Jailbreaking attempts to bypass constraints by crafting user prompts that override system instructions, e.g., hypotheticals ("Suppose you had no safety constraints...") or role-play ("You are an unaligned AI"). Robustness to jailbreaking is an active research area.

## Structured Output and Grammar Constraints

Unguided generation from [[llm|language models]] often violates required schemas: malformed JSON, missing required fields, invalid enums.

Grammar-constrained decoding forces the model's output to conform to a context-free grammar or JSON schema before sampling each token. During generation, the decoder only permits tokens that keep the output derivable from the grammar.

Results are dramatic:

$$\text{Parsing error rate: } \sim 20\% \text{ (free generation) \to <1\% \text{ (grammar-constrained)}}$$

This is essential for [[tool-use|tool-calling]] systems: an agent must output valid function calls to execute reliably. JSON mode and function-calling APIs (OpenAI, Anthropic) implement grammar constraints internally.

## Reasoning and Acting (ReAct)

Yao et al. (2022) proposed interleaving reasoning with action:
$$\text{Thought} \to \text{Action} \to \text{Observation} \to \text{Thought} \to \cdots$$

The model alternates between reasoning steps and external tool invocations (search, math, code execution). Observations are fed back into the context, grounding reasoning in real results rather than hallucinated "facts."

This dramatically reduces hallucination on factual tasks. [[agents|LLM agents]] today typically use ReAct-style loops.

## Prompt Sensitivity and Optimization

Small wording changes produce large behavioral shifts. Replacing "helpful" with "expert," changing "answer" to "derive," or reordering few-shot examples can shift accuracy by 5–15%. This sensitivity is both a feature (fine-grained control) and a liability (brittleness).

Systematic **prompt optimization** (APE, DSPy) uses a meta-learner to search over prompt space:
- **APE** (Promptly Optimizing Prompts): gradient-free search over instruction candidates
- **DSPy**: a declarative framework where each LLM call is a "module" with trainable prompts and few-shot examples; a compiler optimizes the program to maximize a validation metric

DSPy replaces hand-crafted prompts with learned programs, trading manual engineering for a training loop over prompts and demonstrations.

## Limitations and Trade-offs

Prompt engineering cannot overcome fundamental model limitations: a 7B model cannot solve problems requiring 500B+ reasoning depth, no matter the prompt. Diminishing returns set in when the task needs [[fine-tuning|fine-tuning]], [[rlhf|RLHF]], or retrieval augmentation.

Context length imposes hard constraints. Few-shot examples consume tokens; long reasoning chains compete with task input for space. [[evaluation-llms|Evaluation]] of prompts must account for variance: the same prompt with different few-shot orderings or sampling temperatures can vary 5–10%.

Prompt engineering is most effective for tasks where the model already possesses latent capability—steering rather than teaching.
