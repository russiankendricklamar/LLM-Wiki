# GEMINI.md - Instructions for AI Engineers & Researchers

This document defines the structure and protocols for contributing to the LLM-Wiki. Adhering to these standards ensures that the knowledge base remains navigable, semantically indexed, and useful for both humans and AI agents.

## 1. Project Overview
LLM-Wiki is a structured knowledge base focused on AI, Finance, Physics, and CS. It uses Obsidian-style Markdown with semantic indexing for RAG (Retrieval-Augmented Generation) and knowledge graph visualization.

## 2. Research Protocol
All future research must be documented in the `obsidian-vault/{lang}/research/` directory.

### 2.1 Research File Template
Every research document must start with the following frontmatter:

```yaml
---
title: "Unique and Descriptive Title"
slug: "kebab-case-identifier"
date: YYYY-MM-DD
status: "in-progress" | "completed" | "on-hold"
type: "literature-review" | "experiment" | "hypothesis" | "synthesis"
category: "research"
tags: [specific-topic, methodology]
---
```

### 2.2 Standard Sections
1. **Objective**: Clearly state the research question or goal.
2. **Context**: Use `[[wikilinks]]` to link to existing entities in the wiki.
3. **Methodology**: Describe tools used (e.g., Python scripts, specific LLM models, data sources).
4. **Current Findings**: Document results, observations, or data points.
5. **Insights for AI**: A section specifically for future AI agents, highlighting key logical leaps or data relationships that might be hard to infer.
6. **Open Questions**: List what remains unknown or requires further investigation.
7. **References**: Links to external PDFs (found in `/public/research/`) or web URLs.

## 3. Knowledge Integration
- **Cross-linking**: Always use `[[slug]]` or `[[slug|Display Text]]` for internal links.
- **Semantic Tags**: Use specific tags to help the `generate_semantic_index.py` script categorize content.
- **Aggregation**: After major changes, run `python3 generate_semantic_index.py` to update the AI aggregate.

## 4. AI-Agent Workflow
When performing research tasks:
1. **Explore**: Search existing articles to avoid redundancy.
2. **Draft**: Create a new file in `research/` using the template.
3. **Link**: Connect the research to the "core" knowledge (ai-theory, finance, etc.).
4. **Index**: Run indexing scripts.
5. **Summarize**: If processing a PDF from `public/research/`, create a corresponding `.md` file in `research/` with a comprehensive summary.

## 5. Directory Mapping
- `/src`: Frontend code (Vite + React).
- `/obsidian-vault`: The primary knowledge base.
- `/public/research`: Raw research assets (PDFs).
- `/semantic_index.json`: Machine-readable graph of the wiki.
- `/knowledge_aggregate.md`: Human/AI-readable summary of all entities.
