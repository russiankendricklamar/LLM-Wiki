---
title: "Tool Use / Function Calling"
category: "LLM Infrastructure"
order: 2
lang: "en"
slug: "tool-use"
---

# Tool Use / Function Calling

## Overview

Tool use — also called function calling — is the capability that allows language models to invoke external functions, APIs, and services in a structured, programmatic way. Rather than returning unstructured text describing what it would do, a model with tool use emits a machine-readable invocation: the name of the tool and a typed argument object. The calling code executes the tool, feeds results back to the model, and the model continues generating.

This capability transforms LLMs from pure text processors into agents capable of reading live data, writing files, running code, and interacting with external systems. It was first popularized in production by OpenAI's June 2023 function calling release, quickly followed by Anthropic, Google, and others. The underlying mechanism is straightforward: the model is trained to recognize when external information or action is needed and to express that need in a structured JSON format that the application layer can parse and route.

Tool use is the foundation for autonomous agents, copilots, and any system where an [[llm]] must act on the world rather than merely describe it. Combined with [[rag]], tool-equipped models can decide when to retrieve vs. when to answer from training. Combined with [[chain-of-thought]] reasoning, they implement the ReAct (Reasoning + Acting) pattern.

## How It Works

**Step 1 — Tool schema definition.** The developer provides a JSON Schema describing available tools: name, description, and parameter types. This schema is injected into the system prompt or a dedicated tools field in the API request.

**Step 2 — Model decision.** The model decides whether to respond directly or call a tool. This decision is implicit: the model generates a `tool_use` block (Anthropic) or a `function_call` object (OpenAI) instead of plain text when it determines external information is required.

**Step 3 — Tool execution.** The application layer parses the structured output, validates inputs, executes the function, and captures results.

**Step 4 — Result injection.** Tool results are appended to the conversation as a `tool_result` message. The model receives them and continues generation.

**Step 5 — Termination.** The loop repeats until the model generates a response without tool calls, signaling it has enough information to answer.

Multi-turn tool use allows chaining: the model can call `search_web` then `summarize_document` then `write_email` in a single agent loop, each step informed by the previous.

Parallel tool calls (supported by Anthropic and OpenAI) let the model emit multiple tool invocations simultaneously when they are independent, reducing latency by executing them concurrently.

## Mathematical / Formal Framework

The ReAct framework formalizes tool use as interleaved reasoning and acting. An agent produces a sequence of triples:

$$\tau = [(r_1, a_1, o_1), (r_2, a_2, o_2), \ldots, (r_T, a_T, o_T)]$$

where $r_t$ is the reasoning trace (chain-of-thought), $a_t$ is the action (tool call), and $o_t$ is the observation (tool result). The policy $\pi_\theta$ parameterizes the model:

$$a_t = \pi_\theta(q, \tau_{<t})$$

The tool selection problem is a classification over the tool set $\mathcal{T}$. Given the conversation history $h_t$, the model assigns probability:

$$p(a_t = \text{call}(f, \mathbf{x}) \mid h_t) \propto \exp(\text{compatibility}(f, h_t))$$

For safety, input arguments $\mathbf{x}$ must satisfy constraints defined by the JSON Schema before execution:

$$\text{valid}(\mathbf{x}) \iff \mathbf{x} \models \text{schema}(f)$$

## Implementation

```python
import anthropic
import json

client = anthropic.Anthropic()

# --- Tool definitions (JSON Schema) ---
tools = [
    {
        "name": "get_stock_price",
        "description": "Retrieve the current price of a stock by its ticker symbol.",
        "input_schema": {
            "type": "object",
            "properties": {
                "ticker": {
                    "type": "string",
                    "description": "Stock ticker symbol, e.g. AAPL",
                },
            },
            "required": ["ticker"],
        },
    },
    {
        "name": "calculate_portfolio_value",
        "description": "Calculate total value of a portfolio given holdings and prices.",
        "input_schema": {
            "type": "object",
            "properties": {
                "holdings": {
                    "type": "object",
                    "description": "Map of ticker to number of shares",
                    "additionalProperties": {"type": "number"},
                },
                "prices": {
                    "type": "object",
                    "description": "Map of ticker to current price",
                    "additionalProperties": {"type": "number"},
                },
            },
            "required": ["holdings", "prices"],
        },
    },
]

# --- Tool implementations ---
def get_stock_price(ticker: str) -> dict:
    # In production: call a real market data API
    mock_prices = {"AAPL": 189.50, "MSFT": 415.20, "NVDA": 875.40}
    price = mock_prices.get(ticker.upper())
    if price is None:
        raise ValueError(f"Unknown ticker: {ticker}")
    return {"ticker": ticker.upper(), "price": price, "currency": "USD"}


def calculate_portfolio_value(holdings: dict, prices: dict) -> dict:
    total = sum(
        shares * prices.get(ticker, 0)
        for ticker, shares in holdings.items()
    )
    return {"total_value": round(total, 2), "currency": "USD"}


def execute_tool(name: str, inputs: dict) -> str:
    try:
        if name == "get_stock_price":
            result = get_stock_price(**inputs)
        elif name == "calculate_portfolio_value":
            result = calculate_portfolio_value(**inputs)
        else:
            result = {"error": f"Unknown tool: {name}"}
        return json.dumps(result)
    except Exception as e:
        return json.dumps({"error": str(e)})


# --- Agentic loop ---
def run_agent(user_query: str) -> str:
    messages = [{"role": "user", "content": user_query}]

    while True:
        response = client.messages.create(
            model="claude-opus-4-5",
            max_tokens=1024,
            tools=tools,
            messages=messages,
        )

        # Append assistant response
        messages.append({"role": "assistant", "content": response.content})

        # Check stop reason
        if response.stop_reason == "end_turn":
            # Extract final text
            for block in response.content:
                if hasattr(block, "text"):
                    return block.text
            return ""

        if response.stop_reason != "tool_use":
            break

        # Execute all tool calls and collect results
        tool_results = []
        for block in response.content:
            if block.type == "tool_use":
                result_content = execute_tool(block.name, block.input)
                tool_results.append({
                    "type": "tool_result",
                    "tool_use_id": block.id,
                    "content": result_content,
                })

        messages.append({"role": "user", "content": tool_results})

    return "Agent loop terminated unexpectedly"


answer = run_agent(
    "I hold 10 shares of AAPL and 5 shares of NVDA. What is my portfolio worth?"
)
print(answer)
```

## Tool Safety Architecture

```
User Input
    │
    ▼
LLM generates tool_use block
    │
    ▼
Input Validator ──► Reject if schema violated
    │
    ▼
Sandbox / Permission Layer
    │
    ├─► Allowed: execute tool
    │       │
    │       ▼
    │   Tool result injected into context
    │
    └─► Denied: return error message to model
```

Sandboxing strategies:
- **Read-only tools**: safe to call without confirmation (search, read file).
- **Write tools**: require human-in-the-loop approval or confirmable via [[mcp]] capability grants.
- **Destructive tools**: always require explicit user confirmation; never execute in a tight loop.

## Key Trade-offs

- **Solves:** real-time data access, action in external systems, structured computation, extending model capabilities without [[fine-tuning]].
- **Does not solve:** the model's intrinsic reasoning limits — garbage in, garbage out still applies.
- **Latency:** each tool call is a round-trip; parallel calls mitigate this but add complexity.
- **Reliability:** models occasionally hallucinate tool names or produce invalid JSON. Input schema validation is mandatory.
- **Cost:** tool-augmented conversations are longer; each loop iteration adds tokens.
- **Security:** never pass unsanitized user input directly to tools that execute code or write to persistent storage.

## Variants & Extensions

**Forced tool use**: set `tool_choice = {"type": "tool", "name": "..."}` to require the model to call a specific tool. Useful for structured extraction pipelines.

**Tool use with streaming**: Anthropic's streaming API emits `input_json_delta` events as the tool input JSON is generated, enabling progressive UI updates.

**Multi-agent tool delegation**: an orchestrator model calls a specialized sub-agent as a tool (agent-as-tool pattern). The sub-agent returns its result as structured output.

**[[mcp]] (Model Context Protocol)**: an open standard that generalizes tool use by defining a transport-agnostic protocol for exposing tools, resources, and prompts to any compliant LLM client.

**ToolBench / Gorilla**: research benchmarks that evaluate LLM capability to correctly select and use APIs from large tool libraries (10,000+ APIs).

## Practical Applications

- **Code interpreters:** execute Python/JavaScript in a sandboxed environment; show results inline.
- **Database query generation:** model writes SQL, tool executes it and returns rows.
- **Calendar and email agents:** read/write calendar events, draft and send emails.
- **Financial copilots:** retrieve prices, compute metrics, summarize filings — see also [[rag]] over financial documents.
- **DevOps agents:** parse CI logs, open GitHub issues, trigger deploys.

## Tool-use as agent action space

Tool-use is the bridge from a language model that generates text to an **agent** that can act on the world. Once you accept that "decide which tool to call" is a learned policy, the same theoretical apparatus that governs reinforcement learning applies: the LLM is a policy, tool calls are actions, observations are tool returns, and the reward is task completion. This frames CoT-style reasoning between tool calls as **inference-time planning** in an MDP.

This view directly connects tool-use to the broader RL literature:

- **[[deep-rl-execution|Deep RL for execution]]** in quantitative trading is built on the same action-observation loop — a model decides "buy this slice now / wait / cancel" given current order-book state, and the reward is realised P&L. Replacing the trading policy with an LLM-with-tools is a literal substitution.
- **[[reinforcement-learning|Reinforcement learning]]** as a discipline supplies the formal framework (MDPs, Bellman equations, policy gradients) that turns "tool-use accuracy" into a single optimisable objective. Modern reasoning models are trained with exactly this loop: reward the trace that ends in a correct answer.

In quantitative finance, tool-use is what makes [[llm-financial-analysis|LLM-driven financial analysis]] practical: the model can call a QuantLib pricer, fetch a CBR reference rate, or run a Python regression as part of producing a single answer, instead of pretending to have computed those numbers from its weights.

## Related Topics

- [[rag]] — retrieval can be implemented as a tool, enabling the model to decide when to search.
- [[chain-of-thought]] — ReAct interleaves reasoning (CoT) with tool actions.
- [[mcp]] — standardizes tool definition and transport across providers and clients.
- [[speculative-decoding]] — irrelevant to tool selection but affects the speed of the generation steps between tool calls.
- [[reinforcement-learning]] — formal framework for "decide which action to take next."
- [[deep-rl-execution]] — same action-observation loop applied to trade execution.
- [[llm-financial-analysis]] — production tool-use for grounded financial analysis.
