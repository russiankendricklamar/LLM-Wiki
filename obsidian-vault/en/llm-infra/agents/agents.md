---
title: "LLM Agents"
category: "LLM Infrastructure"
order: 8
lang: "en"
slug: "agents"
growth: "seedling"
---

# [[llm]] Agents

## Prerequisites

[[llm]], [[tool-use]], [[chain-of-thought]]

## Overview

An LLM agent is a system that combines a language model with a loop that enables repeated observation, reasoning, and action. Rather than a single forward pass from prompt to answer, an agent runs iteratively: the model produces reasoning and a structured action (tool call), the environment (or application layer) executes that action and observes the result, the observation is fed back to the model, and the cycle repeats until the model signals completion or a termination condition is met.

This closes the feedback loop that a pure LLM cannot execute. Where a language model is a function $f_\theta: \text{prompt} \to \text{answer}$, an agent is a policy $\pi_\theta$ that learns to map observations and history to actions, iterating until task completion. The mechanism is straightforward — agents are built on three primitives: [[tool-use|tool use]] for structured actions, [[chain-of-thought|chain of thought]] for reasoning transparency, and memory to track state across iterations.

The ReAct pattern (Yao et al., 2022) formalized this as interleaved **Reasoning** and **Acting**. It demonstrated empirically that grounding reasoning in external observations — rather than pure chain-of-thought alone — improves factual accuracy and reduces hallucination. Modern LLMs fine-tuned for agentic behavior (Claude, GPT-4, Gemini 2.0) implement ReAct natively in their training.

## The Agent Loop

The basic agent loop consists of five steps:

1. **Initialization:** Construct the initial prompt with task description, available tools, and optional system context.
2. **Model invocation:** Send current state (conversation history + observations) to the LLM. The model generates both reasoning text and a structured action (tool call or FINISH token).
3. **Action parsing:** Extract the tool name and arguments from the model output. Validate against schema. If invalid JSON or unknown tool, return an error observation and loop.
4. **Execution:** Execute the tool in a controlled environment (sandbox, permission layer, or external API). Capture result (success or error).
5. **Observation injection:** Append the result as a `tool_result` message to the conversation history. Increment step counter. If the model emitted a FINISH token, extract and return the final answer. Otherwise, go to step 2.

A bounded loop adds a **max_steps** parameter to prevent infinite loops; a **timeout** prevents hanging on slow tools.

**Pseudocode:**

```
function run_agent(task, tools, max_steps=10):
  messages = [{"role": "user", "content": task}]
  for step = 1 to max_steps:
    response = llm(messages, tools=tools)
    messages.append({"role": "assistant", "content": response})
    
    if response.stop_reason == "FINISH":
      return extract_final_answer(response)
    
    if response.stop_reason != "tool_use":
      break  // unexpected termination
    
    tool_results = []
    for action in response.tool_calls:
      result = execute_tool(action.name, action.args)
      tool_results.append({"tool_use_id": action.id, "content": result})
    
    messages.append({"role": "user", "content": tool_results})
  
  return "max_steps exceeded"
```

## ReAct: Reasoning and Acting

ReAct interleaves reasoning (natural language thought) and acting (tool calls). This addresses a key limitation of pure chain-of-thought: without grounding in observations, CoT reasoning is unfaithful — the model generates plausible-sounding but unsupported claims. ReAct forces the model to reason about what it observes, not what it hallucinates.

Let $T = (r_1, a_1, o_1, r_2, a_2, o_2, \ldots, r_T, a_T, o_T)$ denote a trajectory of alternating reasoning steps $r_t$, actions $a_t$ (tool calls), and observations $o_t$ (tool results). The policy $\pi_\theta$ generates both:

$$r_t, a_t = \pi_\theta(T_{<t})$$

where $T_{<t}$ is the history of prior steps. Each $a_t$ is a tool invocation:

$$a_t = (f_t, \mathbf{x}_t), \quad f_t \in \mathcal{F}, \quad \mathbf{x}_t \models \text{schema}(f_t)$$

and each observation is deterministic given the action:

$$o_t = \text{execute}(a_t)$$

Crucially, at training time (for models fine-tuned on ReAct), trajectories with correct intermediate steps are rewarded more highly than trajectories with correct final answers but poor reasoning. This aligns the model's reasoning with the action sequence.

**Example trajectory:** "What is the population of France?"
```
Thought: I need to search for current French population data.
Action: call search_web(query="France population 2025")
Observation: France population is approximately 68 million as of 2025.
Thought: The search returned a direct answer. I can now respond.
Action: FINISH(answer="The population of France is approximately 68 million.")
```

Without the intermediate Thought, a pure tool-calling model might invoke search_web, receive the observation, but then hallucinate a different answer not supported by the observation.

## Tool Use and Skill Composition

An agent's capability is directly bounded by its tool set. Tools fall into categories:

- **Information retrieval:** `search_web`, `fetch_url`, `query_database`. Enable access to grounded knowledge.
- **Computation:** `python_interpreter`, `calculator`, `sql_executor`. Enable symbolic manipulation beyond the LLM's arithmetic limits.
- **Action:** `send_email`, `create_issue`, `update_spreadsheet`. Enable effects in external systems.
- **Reflection:** `list_available_tools`, `check_task_status`. Enable meta-reasoning about capabilities.

Tool composition is non-trivial. A model must learn which tools to call in which order. In practice, this is solved by:

1. **Clear descriptions:** Each tool has a concise description that helps the model recognize relevance. Poor descriptions lead to tool hallucination.
2. **Semantic embedding:** Some systems embed tool descriptions in a vector space and retrieve the top-$k$ most relevant tools, reducing the tool namespace from 100+ to 5-10 per query.
3. **Progressive refinement:** Multi-step agents refine their understanding across tool calls. Step 1 might search broadly; step 2 narrow down based on the result.

## Memory Types in Agents

### In-Context Memory

The conversation history (all prior messages) is the primary memory. It is bounded by the context window. For long-running agents, the history grows unbounded unless pruned. Strategies:

- **Summarization:** Periodically summarize old messages into a single summary block, freeing tokens.
- **Sliding window:** Keep only the last $k$ messages, discarding old steps.
- **Compression:** Quantize or distill history into key facts before injecting into context.

### External Memory via [[rag]]

For agents that need to recall past runs or look up domain knowledge, [[rag|retrieval-augmented generation]] is essential. A vector database stores past interactions, decisions, or facts. When the agent encounters a new query, it retrieves relevant past context via semantic search.

$$\text{retrieved} = \text{topk\_similarity}(\text{embed}(q), \text{knowledge\_base})$$

### Episodic Memory

Some agents maintain structured summaries of past episodes (e.g., "on Tuesday, we tried approach A and it failed; approach B succeeded"). These are stored as structured records, not embeddings, and enable explicit reasoning about past failures.

## Multi-Agent Systems

Beyond single agents, orchestrated multi-agent systems achieve specialized reasoning and improved reliability:

### Orchestrator + Workers

A top-level orchestrator agent decomposes a task into subtasks, dispatching each to a specialized worker agent. The orchestrator collects results and synthesizes them.

```
User task
    │
    ▼
Orchestrator (CoT: "This task requires research, analysis, and synthesis")
    │
    ├─► Worker 1: research-agent
    │        └─► search_web, fetch documents, summarize
    │
    ├─► Worker 2: analysis-agent
    │        └─► run code, compute metrics
    │
    └─► Worker 3: synthesis-agent
             └─► draft final report
    │
    ▼
Orchestrator aggregates + final answer
```

Each worker is itself a full agent with its own loop, tools, and memory.

### Reflection and Debate

A powerful multi-agent pattern is to run an agent multiple times, generating diverse proposals, then have agents critique and refine each proposal:

1. **Propose:** Agent A generates a draft solution.
2. **Critique:** Agent B evaluates the proposal, highlighting gaps or errors.
3. **Refine:** Agent A revises based on feedback.
4. **Consensus:** Run multiple agents in parallel, aggregate via voting or consensus.

This mirrors human peer review and significantly improves solution quality on complex reasoning tasks.

### Parallelism and Cost

Multi-agent orchestration trades increased complexity for improved reliability and solution quality. The cost is higher token usage (multiple agents) and latency (sequential refinement loops). For high-stakes tasks (e.g., financial analysis, medical reasoning), this trade-off is favorable.

## Planning and Tree of Thoughts

Rather than a linear agent loop, some agents explore multiple reasoning paths and select the most promising. This is the **Tree of Thoughts (ToT)** pattern (Yao et al., 2023).

At each step $t$, the agent generates $b$ candidate next actions (a branching factor). A value function $V(s_t)$ scores the promise of each branch:

$$V(s_t) = \text{LLM-evaluate}(s_t, \text{"Is this step promising?"})$$

Search algorithms (BFS, DFS, beam search) traverse the tree, expanding high-value nodes. The depth $d$ and branching factor $b$ determine total model calls: roughly $O(b^d)$. On complex puzzles, ToT with $b=3, d=5$ uses far more inference but finds correct solutions where linear reasoning fails.

**Trade-off:** ToT is expensive (many model calls) but effective for NP-hard or combinatorial problems. Linear agent loops are cheap but can get stuck in local optima.

## Failure Modes and Challenges

### Hallucinated Tool Calls

Models occasionally invent tool names or parameters not in the schema. Mitigation:

- Validate all outputs against the declared schema before execution.
- Return error messages that the model can learn from: "Tool 'search_internet' does not exist. Available tools: search_web, search_scholar, search_arxiv."
- Fine-tune models on tool-calling datasets to reduce hallucination.

### Infinite Loops

An agent can enter a cycle: call tool A → get result → call tool A again → get same result. The agent must learn to exit. Mitigation:

- **Max steps:** Hard limit on iterations.
- **Loop detection:** Track recent tool calls and flag repeats.
- **Penalty:** Return errors when the same tool is called twice with the same arguments.

### Context Overflow

As the agent loop runs, the conversation history grows, consuming tokens. A 4K-context model will overflow after ~40-50 agent steps (assuming ~100 tokens per round). Mitigation:

- Summarize history periodically.
- Use longer-context models (100K+ for deep reasoning).
- Compress observations into facts rather than raw text.

### Error Propagation

A single bad tool result can cascade: the model misinterprets the result, calls a wrong tool, gets another bad result, compounds the error. Mitigation:

- Validation: Double-check tool outputs for consistency.
- Recovery: Provide explicit error handling — if a tool fails, suggest alternatives to the agent.
- Rollback: Allow agents to retry with different tools when a step fails.

## MCP and Modular Tools

[[mcp|Model Context Protocol]] standardizes tool definition and transport. Instead of building custom tool schemas for each application, MCP servers expose tools via a standard JSON-RPC protocol. Any MCP-compliant agent can connect to any MCP server.

Benefit: A single MCP server wrapping a company's database can serve a Claude-based agent, a GPT-4 agent, or an in-house model without reimplementing tool integrations.

## Current Frontier and Reliability

Production agents (Claude Code, GPT-4 Code Interpreter, AutoGPT) work in practice for many tasks, but **reliability remains unsolved**. The dominant failure mode is off-distribution behavior: the agent works well on in-distribution tasks but fails catastrophically on edge cases.

Recent research directions:

- **Reasoning models (o1/o3):** Allocate more inference compute to planning, reducing hallucination and improving step-wise correctness.
- **Process reward models:** Reward intermediate steps (not just final answers), enabling agents trained via RL to learn better action sequences.
- **Tool-use [[fine-tuning]]:** Supervised datasets of expert trajectories improve agent reliability significantly.
- **Simulation and execution sandboxes:** Testing agent behavior in a simulator before deployment reduces deployment risk.

## Implementation Example

A minimal Python agent using Anthropic's API:

```python
import anthropic
import json

client = anthropic.Anthropic()

tools = [
    {
        "name": "search_web",
        "description": "Search the web for information.",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "Search query"}
            },
            "required": ["query"]
        }
    },
    {
        "name": "calculator",
        "description": "Perform arithmetic operations.",
        "input_schema": {
            "type": "object",
            "properties": {
                "operation": {"type": "string", "description": "add, subtract, multiply, divide"},
                "a": {"type": "number"},
                "b": {"type": "number"}
            },
            "required": ["operation", "a", "b"]
        }
    }
]

def execute_tool(name: str, args: dict) -> str:
    if name == "search_web":
        # Mock search; in production, call a real API
        query = args["query"]
        return f'Search results for "{query}": [mock result 1, mock result 2]'
    elif name == "calculator":
        operation = args.get("operation")
        a = args.get("a")
        b = args.get("b")
        results = {
            "add": a + b,
            "subtract": a - b,
            "multiply": a * b,
            "divide": a / b if b != 0 else "Error: division by zero"
        }
        result = results.get(operation, "Unknown operation")
        return f"Result: {result}"
    return f"Unknown tool: {name}"

def run_agent(task: str, max_steps: int = 10) -> str:
    messages = [{"role": "user", "content": task}]
    
    for step in range(max_steps):
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=1024,
            tools=tools,
            messages=messages
        )
        
        messages.append({"role": "assistant", "content": response.content})
        
        # Check termination
        if response.stop_reason == "end_turn":
            for block in response.content:
                if hasattr(block, "text"):
                    return block.text
            return "No response"
        
        if response.stop_reason != "tool_use":
            return "Unexpected termination"
        
        # Execute tools
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result = execute_tool(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": result
                })
        
        messages.append({"role": "user", "content": tool_results})
    
    return "Max steps exceeded"

# Example
answer = run_agent("What is 2024 squared? Use the calculator tool.")
print(answer)
```

## Practical Applications

- **Research assistants:** Recursively search, synthesize, and fact-check articles.
- **Code generation:** Generate code, run it, debug errors, iterate until tests pass.
- **Financial analysis:** Fetch market data, run backtests, generate reports.
- **Task automation:** Parse emails, extract action items, create calendar events.
- **Knowledge base chat:** Retrieve documents, synthesize answers, provide sources.

## Related Topics

- [[tool-use]] — the action primitive that agents use to interact with the world.
- [[chain-of-thought]] — reasoning within agents; ReAct interleaves CoT with actions.
- [[rag]] — external knowledge retrieval, often integrated into agent loops via a retrieval tool.
- [[mcp]] — standardizes tool definition and transport for agents across providers.
- [[reinforcement-learning]] — formal framework for learning agent policies (action selection).
- [[llm]] — the core model; larger, better-trained models make better agents.
