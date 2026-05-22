---
title: Automata Theory & Computability
category: Advanced CS and Graphs
order: 151
lang: en
slug: automata-theory
---

Automata theory models formal languages and computation.

### Finite Automata
A Deterministic Finite Automaton (DFA) is a 5-tuple $(Q, \Sigma, \delta, q_0, F)$, where $\delta: Q \times \Sigma \to Q$ is the transition function. Regular languages are exactly those recognized by DFAs. By Rabin-Scott, any NFA (Non-deterministic Finite Automaton) can be converted to an equivalent DFA via the powerset construction, albeit with $O(2^{|Q|})$ states.

### Turing Machines
A Turing Machine (TM) is a 7-tuple including an infinite tape and a read/write head. The Church-Turing thesis posits that TMs capture the intuitive notion of an effective algorithm. The Halting Problem (does $M$ halt on $w$?) is undecidable, proven via Cantor's diagonal argument.
