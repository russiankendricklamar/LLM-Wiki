---
title: "Code Language Models"
category: "Language Models"
order: 6
lang: "en"
slug: "code-models"
---

# Code Language Models

## Prerequisites

[[llm]]

## What Is It

A code language model is a language model trained primarily or substantially on source code, with the goal of understanding and generating programs rather than (or in addition to) natural language prose. The defining property is not a separate architecture but a combination of training data composition, specialized pre-training objectives, and evaluation methodology that targets the formal, executable, multi-language nature of code.

Code occupies a unique position among language model domains. It is formally structured (syntax is unambiguous, unlike natural language), executable (outputs can be mechanically verified by running them), multilingual in a rich sense (dozens of programming languages with different semantics coexist in training data), and self-documenting (comments and docstrings in the same files as code create natural alignment between natural language and formal programs).

These properties enable training objectives and evaluation methods impossible with prose text, and they shape the failure modes in distinctive ways.

## Architecture

Code models use the same decoder-only transformer architecture as general LLMs. The differences are in tokenization strategy and pre-training objectives.

**Tokenization**: standard BPE tokenizers trained on code produce more granular tokens than text tokenizers — identifiers, keywords, and operators are often single tokens. Indentation is a significant challenge for Python and YAML, where whitespace is semantically meaningful. Some models use byte-level BPE to handle the full range of ASCII and Unicode characters without unknown-token issues.

**Context length**: repository-level code understanding requires long context. A function call can be separated from its definition by thousands of lines. Modern code models support 8K–128K token contexts.

**Positional encoding**: RoPE with base frequency tuning for long context extrapolation, same as general LLMs.

**Multi-file awareness**: some code models include special tokens to separate files within a concatenated context, enabling the model to reason across multiple files in a repository.

## Mathematical Framework

**Standard next-token prediction** (same as LLMs) on code corpora:

$$\mathcal{L}_{\text{CLM}} = -\sum_{t=1}^{T} \log p_\theta(x_t \mid x_{<t})$$

**Fill-in-the-Middle (FIM)** — a training transformation that teaches the model to predict a span of code given its prefix and suffix. A document $(P, M, S)$ (prefix, middle, suffix) is rearranged to the format $\langle\text{PRE}\rangle P \langle\text{SUF}\rangle S \langle\text{MID}\rangle M$ and the model predicts $M$ autoregressively. With probability $\gamma$ (typically 0.5), each training document is transformed this way:

$$\mathcal{L}_{\text{FIM}} = -\sum_{t=1}^{|M|} \log p_\theta(m_t \mid \langle\text{PRE}\rangle, P, \langle\text{SUF}\rangle, S, \langle\text{MID}\rangle, m_{<t})$$

FIM is critical for IDE integration: code completion must fill in a hole in the middle of a file, not just append to the end.

**HumanEval pass@k metric** — measures the probability that at least one of $k$ generated samples passes all unit tests. Estimated without generating $\binom{n}{k}$ combinations by sampling $n > k$ solutions and counting $c$ that pass:

$$\text{pass@}k = 1 - \frac{\binom{n - c}{k}}{\binom{n}{k}}$$

For example, with $n = 10$ samples and $c = 4$ passing, $\text{pass@}1 = 1 - \binom{6}{1}/\binom{10}{1} = 0.4$.

**Execution feedback objective (RLEF)** — fine-tuning with a reward signal from test execution. Given a coding problem with unit tests, the model generates candidate solutions; each is executed; pass/fail becomes the reward signal in a PPO or REINFORCE update. This directly optimizes for correctness rather than token-level perplexity.

## Training Paradigm

**Data composition**: code model training mixes GitHub repositories (filtered for license and quality), programming documentation, Stack Overflow Q&A pairs, competitive programming problems with solutions, and often a portion of natural language text to preserve instruction-following and comment-generation quality.

**Deduplication**: code on GitHub is highly duplicated (forked repositories share identical files). Near-duplicate removal via MinHash LSH is essential; training on duplicate code inflates benchmark performance without improving real-world generalization.

**Multi-stage training**:
1. **General pre-training** on mixed code + text corpus.
2. **Code-focused continued pre-training** with higher weight on high-quality code.
3. **FIM training** — either mixed into pre-training (SPM format) or as a continued pre-training stage.
4. **Supervised fine-tuning (SFT)** on instruction-following pairs: natural language problem descriptions paired with correct solutions, with chain-of-thought reasoning.
5. **RLEF** — execution feedback fine-tuning on problems with test suites.

## Key Properties & Capabilities

- **Code completion**: next-token and FIM prediction for completing partial code within an editor context.
- **Docstring and comment generation**: generating natural language explanations from code (and vice versa) exploits the natural alignment in training data.
- **Cross-language translation**: models trained on multiple programming languages learn shared abstractions and can translate code between languages.
- **Bug detection and repair**: a code model fine-tuned on (buggy, fixed) pairs can identify and fix bugs; RLEF significantly improves this.
- **Test generation**: generating unit tests from function implementations is a high-value capability that models trained with code+test pairs learn.
- **Repository-level understanding**: with long context, models can understand call graphs, module dependencies, and class hierarchies without explicit graph construction.
- **Tokenization sensitivity**: indentation, whitespace, and comment placement affect token boundaries and can change model behavior in ways invisible to human readers.

## Trade-offs vs Other Types

| Dimension | Code model | General LLM | SLM |
|---|---|---|---|
| Primary strength | Code synthesis, debugging | Broad NLU/NLG | Low-resource inference |
| Evaluation | pass@k (executable) | Perplexity, MMLU | Efficiency + quality |
| Training data | Code-heavy | Web text | Curated text |
| FIM support | Yes | Rare | Sometimes |
| RLEF applicable | Yes (test execution) | Limited | Limited |
| Context needs | Long (repo-level) | Variable | Short |

## Python Usage Pattern

```python
from transformers import AutoTokenizer, AutoModelForCausalLM
import torch

model_id = "bigcode/starcoder2-7b"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    torch_dtype=torch.bfloat16,
    device_map="auto",
)

# Standard completion (causal left-to-right)
prompt = "def binary_search(arr: list[int], target: int) -> int:\n    "
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
with torch.no_grad():
    output = model.generate(
        **inputs,
        max_new_tokens=256,
        temperature=0.2,
        do_sample=True,
        pad_token_id=tokenizer.eos_token_id,
    )
print(tokenizer.decode(output[0], skip_special_tokens=True))

# Fill-in-the-Middle (FIM) prompting
prefix = "def compute_entropy(probs: list[float]) -> float:\n    "
suffix = "\n    return entropy"
fim_prompt = (
    f"<fim_prefix>{prefix}<fim_suffix>{suffix}<fim_middle>"
)
fim_inputs = tokenizer(fim_prompt, return_tensors="pt").to(model.device)
with torch.no_grad():
    fim_output = model.generate(
        **fim_inputs,
        max_new_tokens=128,
        temperature=0.1,
        do_sample=True,
    )
middle = tokenizer.decode(fim_output[0], skip_special_tokens=True)
print(f"{prefix}{middle}{suffix}")
```

## Limitations

- **Correctness vs. plausibility**: code models generate syntactically plausible code that often contains subtle semantic bugs — off-by-one errors, incorrect API usage, missing edge cases — that pass casual inspection but fail in production.
- **Benchmark overfitting**: HumanEval and MBPP are relatively small and may appear in training data; models can achieve high pass@k by memorization rather than generalization. SWE-Bench (real GitHub issues) is harder to overfit.
- **Rare languages and frameworks**: training data is dominated by Python, JavaScript, and Java. Models perform substantially worse on Rust, Zig, Fortran, and niche domain-specific languages.
- **Long-range dependencies**: even with 128K context, tracking complex cross-file dependencies, abstract class hierarchies, and stateful dataflow can exceed the effective attention budget.
- **Security**: code models can generate insecure code (SQL injection, buffer overflows, use of deprecated cryptographic functions) when not explicitly constrained or evaluated against security linters.
- **Execution environment unawareness**: the model has no access to the runtime environment, installed packages, or file system during generation, leading to hallucinated imports and non-existent APIs.

## Related Topics

[[llm]] — code models are specialized LLMs sharing the same fundamental architecture  
[[slm]] — small code models (1-3B parameters) are effective for single-function completion on device  
[[mixture-of-experts]] — MoE code models can route tokens to language-specialized experts  
[[pac-learning]] — formal learning-theoretic analysis of when code synthesis generalizes to unseen problems
