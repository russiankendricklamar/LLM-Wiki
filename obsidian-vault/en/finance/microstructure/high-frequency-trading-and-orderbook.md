---
title: "High-Frequency Trading (HFT) & Order Book Infrastructure"
category: "Market Microstructure"
order: 2
lang: "en"
slug: "high-frequency-trading-and-orderbook"
type: "article"
growth: "evergreen"
---

# High-Frequency Trading (HFT) & Order Book Infrastructure

High-Frequency Trading (HFT) is a specialized subset of quantitative trading focused on ultra-low latency execution (nanoseconds to microseconds).

---

## 1. HFT Tech Stack

- **Colocation:** Placing trading servers inside exchange data centers next to the Matching Engine.
- **FPGA & ASICs:** Parsing exchange market data feeds on hardware chips instead of general CPU software.
- **Protocols:** ITCH (L3 market data feed), OUCH (order entry/cancellation), FIX/FAST protocols.

---

## 2. Queue Priority & VPIN

- **FIFO vs Pro-Rata:** Order execution queue matching algorithms.
- **VPIN (Volume-Synchronized Probability of Toxicity):** Measures order flow toxicity and volume imbalance between aggressive buyers and sellers.

---

## See Also
- [[quant-trading-guide|Quant Trading & Interview Prep Course]]
- [[quant-market-making-mechanics|Market Making Mechanics]]
- [[algorithmic-execution-twap-vwap|Algorithmic Execution]]
