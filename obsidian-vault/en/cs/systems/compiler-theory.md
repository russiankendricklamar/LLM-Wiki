---
title: 'Compiler Theory: Lexing and Parsing'
category: Advanced CS and Graphs
order: 152
lang: en
slug: compiler-theory
---

Compilers translate high-level code to machine code through formalized phases.

### Lexical Analysis
Lexers convert character streams into token streams using regular expressions, represented mathematically as NFAs and simulated as DFAs.

### Syntax Analysis (Parsing)
Context-Free Grammars (CFGs) are used to define language syntax. A CFG is $G = (V, \Sigma, R, S)$.
- **LL(k) Parsers:** Top-down, predictive parsing processing left-to-right, constructing a Leftmost derivation. They rely on FIRST and FOLLOW sets.
- **LR(k) Parsers:** Bottom-up, shift-reduce parsing constructing a Rightmost derivation in reverse. The canonical LR(1) parser uses items $[A \to \alpha \cdot \beta, a]$ (where $a$ is a lookahead terminal) to construct a DFA of parser states. YACC and Bison generate LALR(1) parsers, merging states to save memory.
