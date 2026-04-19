---
title: "MCP (Model Context Protocol)"
category: "LLM Infrastructure"
order: 4
lang: "en"
slug: "mcp"
---

# MCP (Model Context Protocol)

## Prerequisites

[[llm]], [[tool-use]]

## Overview

The Model Context Protocol (MCP) is an open standard introduced by Anthropic in November 2024 that defines a uniform interface for connecting language models to external tools, data sources, and services. Where ad-hoc [[tool-use]] requires each application to define its own function schemas and execution layer, MCP establishes a vendor-neutral protocol so that any compliant LLM client can connect to any compliant MCP server without bespoke integration work.

The analogy Anthropic uses is instructive: MCP is to LLM tool use what LSP (Language Server Protocol) is to code editors. Before LSP, every editor had to build its own integration with every language toolchain. After LSP, a single protocol allowed any editor to talk to any language server. MCP aims for the same composability in the LLM ecosystem.

The practical problem MCP solves is fragmentation. As LLM applications proliferate, developers build isolated tool integrations: Claude gets a file-reading tool, GPT-4 gets its own, Gemini gets another. Each integration duplicates access control, schema definition, transport code, and error handling. MCP externalizes all of that into a server that any client can connect to. A single MCP server exposing a company's internal database can be connected to any agent, IDE plugin, or chat interface that speaks MCP.

## Architecture

MCP defines three roles: **host**, **client**, and **server**.

- **Host** is the application (e.g., Claude.ai, a VS Code extension, a custom agent). It manages one or more client connections.
- **Client** is an MCP client instance embedded in the host. It maintains a 1:1 connection with an MCP server and handles protocol negotiation.
- **Server** is the process (or remote service) that exposes capabilities: tools, resources, and prompts.

```
┌─────────────────────────────────────────┐
│              HOST APPLICATION           │
│                                         │
│  ┌──────────┐    ┌──────────────────┐  │
│  │  LLM API │    │   MCP Client 1   │──┼──► MCP Server A (filesystem)
│  │ (Claude) │    │   MCP Client 2   │──┼──► MCP Server B (database)
│  └──────────┘    │   MCP Client 3   │──┼──► MCP Server C (web search)
│                  └──────────────────┘  │
└─────────────────────────────────────────┘
```

This architecture means the host can federate multiple MCP servers simultaneously. The LLM sees a unified tool namespace drawn from all connected servers.

## Primitives

MCP exposes four primitive types:

**Tools** are callable functions. They follow a JSON Schema definition (identical in structure to OpenAI/Anthropic function calling schemas) and return structured results. Tools are the MCP equivalent of function calls.

**Resources** are addressable data blobs identified by URI (e.g., `file:///path/to/doc.txt`, `db://table/row_id`). Resources are fetched by the client on demand and injected into context. This separates read access (resources) from action (tools).

**Prompts** are reusable, parameterized prompt templates that servers expose. The client can invoke a named prompt with arguments and receive a rendered message list suitable for direct injection into the LLM conversation.

**Sampling** is an optional capability where an MCP server asks the client to run an LLM inference on its behalf. This enables recursive agent patterns where tools themselves need access to an LLM.

## Transport Layer

MCP supports two transports:

**stdio:** The host launches the MCP server as a subprocess and communicates over stdin/stdout using newline-delimited JSON-RPC 2.0 messages. Ideal for local tools, development, and secure isolation.

**HTTP + SSE (Server-Sent Events):** The server listens on an HTTP endpoint. The client sends requests over HTTP POST and receives streamed responses over SSE. Suitable for remote servers, cloud services, and multi-client scenarios.

Both transports carry the same JSON-RPC 2.0 message format, so switching transport is a configuration change, not a code change.

## Mathematical / Formal Framework

MCP capability negotiation follows a capability set intersection model. Let $C_{\text{client}}$ be the set of capabilities advertised by the client and $C_{\text{server}}$ the capabilities the server offers. Active capabilities are:

$$C_{\text{active}} = C_{\text{client}} \cap C_{\text{server}}$$

Tool selection by the LLM given the tool namespace $\mathcal{T}$ from all connected servers follows the standard function calling distribution. For a query $q$ and combined tool set:

$$\mathcal{T} = \bigcup_{s \in \mathcal{S}} \mathcal{T}_s$$

where $\mathcal{S}$ is the set of active MCP servers, the model's tool-selection probability is:

$$p(t \mid q) \propto \exp\!\left(\text{relevance}(t, q)\right), \quad t \in \mathcal{T}$$

The security model uses **capability-based access control**: a server grants the client only the capabilities it explicitly advertises during handshake. No capability escalation is possible post-negotiation without a new connection.

## Implementation

```python
"""
Minimal MCP server using the official mcp Python SDK.
Exposes two tools: read_file and list_directory.
Run with: python mcp_server.py
Connect with any MCP client (e.g., Claude Desktop, mcp-client library).
"""

import os
import json
from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent, CallToolResult

app = Server("filesystem-server")


@app.list_tools()
async def list_tools() -> list[Tool]:
    return [
        Tool(
            name="read_file",
            description="Read the contents of a file at the given path.",
            inputSchema={
                "type": "object",
                "properties": {
                    "path": {
                        "type": "string",
                        "description": "Absolute or relative path to the file.",
                    }
                },
                "required": ["path"],
            },
        ),
        Tool(
            name="list_directory",
            description="List all files in a directory.",
            inputSchema={
                "type": "object",
                "properties": {
                    "path": {
                        "type": "string",
                        "description": "Directory path to list.",
                    }
                },
                "required": ["path"],
            },
        ),
    ]


@app.call_tool()
async def call_tool(name: str, arguments: dict) -> CallToolResult:
    if name == "read_file":
        file_path = arguments["path"]
        if not os.path.isfile(file_path):
            return CallToolResult(
                content=[TextContent(type="text", text=f"File not found: {file_path}")]
            )
        with open(file_path, encoding="utf-8") as f:
            content = f.read()
        return CallToolResult(
            content=[TextContent(type="text", text=content)]
        )

    if name == "list_directory":
        dir_path = arguments["path"]
        if not os.path.isdir(dir_path):
            return CallToolResult(
                content=[TextContent(type="text", text=f"Not a directory: {dir_path}")]
            )
        entries = os.listdir(dir_path)
        return CallToolResult(
            content=[TextContent(type="text", text=json.dumps(entries))]
        )

    return CallToolResult(
        content=[TextContent(type="text", text=f"Unknown tool: {name}")]
    )


if __name__ == "__main__":
    import asyncio
    asyncio.run(stdio_server(app))
```

To connect this server to Claude Desktop, add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "python",
      "args": ["/path/to/mcp_server.py"]
    }
  }
}
```

## MCP vs. Direct Function Calling

| Aspect | Direct Function Calling | MCP |
|---|---|---|
| Standardization | Per-provider schema | Unified JSON-RPC protocol |
| Reusability | Per-application | Shared across any client |
| Transport | In-process / HTTP | stdio or HTTP+SSE |
| Multi-provider | Must re-implement | Single server, any client |
| Resource access | Not standard | First-class `resources` primitive |
| Composability | Limited | Multiple servers federated |

## Key Trade-offs

- **Solves:** fragmentation of tool integrations, duplicated access control, vendor lock-in in tool definitions.
- **Does not solve:** the fundamental reliability problem — LLMs still hallucinate tool names or produce malformed inputs; MCP does not add input validation beyond JSON Schema.
- **Overhead:** MCP adds a subprocess or network hop vs. in-process function calls. For latency-sensitive applications, stdio MCP adds ~1ms; remote MCP adds network round-trip time.
- **Security:** MCP servers run with the permissions of the host process. A malicious or compromised MCP server can act on behalf of the host. Sandboxing MCP servers is a deployment concern.
- **Versioning:** MCP protocol versioning is handled during handshake negotiation. Servers should handle capability negotiation gracefully when clients support older protocol versions.

## Variants & Extensions

**Remote MCP over HTTP:** Cloudflare, AWS, and others offer managed MCP server hosting, enabling serverless tool endpoints reachable from any MCP client.

**MCP with OAuth:** The spec includes an authorization flow for user-delegated access, enabling MCP servers that act on behalf of authenticated users (e.g., Google Drive MCP with user OAuth tokens).

**Multi-agent MCP:** sampling primitives enable MCP servers to invoke LLM reasoning, creating recursive agent architectures. An orchestrator agent can delegate to specialist sub-agents exposed as MCP servers.

**Real-world MCP servers (community ecosystem):**
- `filesystem` — read/write local files.
- `sqlite` — query and modify SQLite databases.
- `github` — repos, issues, PRs.
- `puppeteer` — web browsing and scraping.
- `slack` — send messages, read channels.
- `rag-server` — wraps a [[rag]] retrieval backend as an MCP resource/tool.

## Practical Applications

- **IDE assistants:** VS Code or Cursor connects to MCP servers for codebase search, test running, and linting — same servers work regardless of which LLM is driving the assistant.
- **Enterprise knowledge access:** A single MCP server for Confluence/Notion exposes documents as resources; any compliant chat interface can query it.
- **DevOps agents:** MCP servers for Kubernetes, Datadog, PagerDuty — an agent can diagnose and remediate incidents by composing these servers.
- **Data science workflows:** MCP servers for database access, Python execution (sandboxed), and plotting tools create a uniform interface for analytical agents.

## MCP for quantitative finance

MCP turns out to be a particularly natural fit for **quantitative finance workflows**, where the value is precisely in giving an LLM access to live, authoritative data sources without baking them into the prompt or the weights. In production [[llm-financial-analysis|LLM financial analysis]] systems, MCP servers typically wrap:

- **Market-data feeds** (MOEX, Bloomberg, internal tick stores) so a model can ask "what's the current implied vol surface for the AAPL October chain" and get a structured response.
- **QuantLib-backed pricers** so the model can call a Heston or Black-Scholes pricer rather than guessing a number.
- **Regulatory document corpora** (Положение 483-П, IFRS 13 guidance, FATF advisories) exposed as MCP resource servers — the model retrieves the exact text of the relevant clause when reasoning about compliance.
- **Internal valuation memos and risk dashboards**, gated by the same access controls as for human users.

The architectural payoff is that the same regulatory and risk MCP servers can serve a Claude-based assistant, an in-house fine-tuned [[slm|SLM]], or any other compliant client without rewriting integration code — exactly the property the protocol was designed for.

## Related Topics

- [[tool-use]] — MCP is the standardized evolution of ad-hoc function calling.
- [[rag]] — retrieval backends can be wrapped as MCP resource servers, enabling uniform retrieval access.
- [[chain-of-thought]] — agent loops using MCP tools benefit from structured reasoning to sequence tool calls correctly.
- [[speculative-decoding]] — orthogonal to MCP but relevant in production inference stacks where MCP-heavy agents have long context windows.
- [[llm-financial-analysis]] — MCP-backed market data, pricers, and regulatory corpora for finance.
- [[slm]] — small in-house models gain regulator-grade tool access via the same MCP servers as frontier models.
