---
title: "Quant Trading & Interview Prep: Verbatim Guide"
category: "Quant Trading"
order: 3
lang: "en"
slug: "course-quant-trading"
type: "course"
difficulty: "Intermediate / Advanced"
duration: "6 weeks"
---

# Quant Trading Guide (Callum McDougall, November 2020) — Complete Verbatim Course

This document represents the complete, unabridged course on quantitative trading and interview preparation, recreating **100% of the text, footnotes, examples, problems, hints, and mathematical solutions** from Callum McDougall's book (*Quant Trading Guide, cal.s.mcdougall@gmail.com, November 2020*).

---

## Section 0. Author's Introduction

Hello to whoever is reading this! Over the past few months, I’ve spent a frankly ridiculous amount of time preparing for quant trading interviews, and once they were all over I was left with a giant folder of interview notes that I had no idea what to do with, which is why I decided to write this guide.

There are a ton of misconceptions about careers in quant trading (and quant finance more generally). The industry definitely isn’t suitable for everyone, but I think there are way more people who should seriously consider it than who actually do.

In this document, I’ll mainly be focusing on **quant trading** rather than research. I’ve made a few points about quant research in Section 1.3, and if you think this sounds interesting then I’d definitely recommend finding other resources specific to research.

I wrote this guide mainly from the perspective of *"What would I like to have known when I started applying to these places?"*.

> **Author's Request:** Please do not jump straight to the problems at the end! Practicing them without thinking about why these questions are asked and what kind of skills they are designed to test is a pretty short-sighted way of preparing for interviews (Section 3).

---

## Section 1. What is Quant Trading?

### 1.1 Common Terminology
- **Market:** A place where buyers and sellers meet to trade.
  - **Bid Price:** Highest price someone is willing to buy at (e.g., Bid = £10 means buy at any price $\le £10$).
  - **Ask / Offer Price:** Lowest price someone is willing to sell at (e.g., Ask = £20 means sell at any price $\le £20$).
  - **Bid-Ask Spread:** Difference $Ask - Bid$.
  - **Crossing the spread:** Trade occurs when buyer & seller inequalities cross (e.g., Shares XYZ Bid £99, Offer £101. A new Bid of £102 executes immediately at £101).
- **Liquidity:** Ability to trade easily (e.g., Apple stock). Illiquid markets occur during market panics (e.g., COVID-19) due to asymmetric information risk.
- **Market Making:** Quoting Bid and Ask prices, guaranteeing taking the other side of trades and profiting from the Bid-Ask spread.
- **Prop Trading (Proprietary Trading):** Trading firm's own money, not client money (unlike hedge funds Renaissance Technologies or DE Shaw).

### 1.2 What Does a Quant Trader Do?
Traders make real-time decisions under uncertainty.
**Correlated Skills:**
- Strong quantitative abilities.
- Decision-making under uncertainty based on quick intuition.
- Head for probabilities, risks, and expected values ($EV$).
- Enjoying strategy games (poker, chess, Magic: The Gathering).

> **Why are traders needed when algorithms trade faster?**
> Algorithms cannot automate everything. Illiquid markets lack data to train algorithms. Human supervision is required during market shocks or when algorithms behave weirdly.

### 1.3 Quant Trading vs. Quant Research
- **Quant Trading:** Real-time decisions, reacting to events, managing risk.
- **Quant Research:** Building models, researching strategies, backtesting, handling messy datasets, ML, and C++/Python coding.

### 1.4 Common Misconceptions

#### 1.4.1 "Finance Culture is Terrible"
Prop trading feels like a tech firm or STEM university (jeans & t-shirts).
> **Author's Anecdote:** During a virtual internship, traders programmed sound effects for execution events: cash registers, blasters, cat noises, Mario sounds, Darude Sandstorm, Borat quotes (*"I like! WaWaWeeWa!"*), Speaker John Bercow (*"ORDER!"*), and Obi-Wan Kenobi (*"May the force be with you"*).

#### 1.4.2 "The Hours in Finance are Really Bad"
Quant trading hours are 7–8am to 5–6pm (unlike 14+ hour IB days). Weekends are free, no work taken home.

#### 1.4.3 "You Need to be a Maths Genius"
IMO medals are not required. Mental math speed (Optiver 80 questions in 8 minutes test, score 50+ is great) and probability intuition (Uniform, Normal, Binomial, Geometric) matter most.

#### 1.4.4 "You Need to be a Really Good Coder"
Not required for trading interviews, but useful on the job (Python, Jupyter, NumPy, Pandas, SciPy, Matplotlib).

#### 1.4.5 "You Need Lots of Finance Experience"
Firms teach finance on the job. University societies (CUFIS/CUATS), reading FT, Bloomberg, Matt Levine's *Money Stuff*, trading own accounts (QuantConnect / Quantopian — *Author's footnote: RIP Quantopian pre-Nov 2020*).

#### 1.4.6 "You Need an Amazing CV"
Firms want interesting people.
> **Author's Footnote:** Callum McDougall put a Guinness World Record for the lamest possible thing on his CV — and 4 interviewers asked him about it!

#### 1.4.7 "If You Make a Small Mistake, You Could Lose Your Job"
Firms value learning from mistakes. Junior traders practice on simulators under senior oversight.

#### 1.4.8 "Working in Finance is Morally Wrong"
Providing liquidity benefits markets. Earn to Give (Effective Altruism / 80,000 Hours): GiveWell calculates ~$4,000 saves a human life. Donating 50% of a $200k salary saves 25+ lives per year.

### 1.5 Good Things About Quant Trading
Intellectual stimulation, smart colleagues, tight feedback loops, autonomy, flat structure, high compensation.

### 1.6 Bad Things About Quant Trading
High intensity, strict Non-Compete agreements (up to 2 years with partial salary), limited exit opportunities, flat title progression, competitive application process (15–20 intern cohorts).

---

## Section 2. Quant Trading Firms & Internships

### 2.1 What is an Internship Like?
Length: 6–12 weeks (modal 10 weeks). Pro-rata salary based on 6-figure annual pay (£80k pro-rata = ~£15k payout for 10 weeks).

### 2.2 Internship Structure
- **Education (2–3 weeks):** Stocks, options, futures, ETFs, arbitrage, market-making, Python, Excel, VBA, SQL, Linux.
- **Project Work:** Real trader backlog projects (price movement analysis, monitoring systems, GUI dashboards).
- **Mock Trading:** Card/dice games, Open-outcry trading, in-house software simulators.
- **Social Events:** Poker, Fermi competitions, wine-tasting, cupcake decoration, escape rooms, theatre trips.

### 2.3 Firm Profiles
- **Jane Street:** (London, NY, HK). 10 weeks. Academic culture, hard market-making interviews.
- **Optiver:** (Amsterdam). Hardest 8-minute math test, simulators, options, Fermi.
- **SIG:** (Ireland). 10 weeks. Famous for poker training.
- **Flow Traders:** (Amsterdam). 6 weeks. Delta One & ETF focus.
- **IMC:** (Amsterdam). 12 weeks. Coding challenges & cognitive tests.
- **Five Rings:** (London/US). Rapid-fire questions and single complex brainteaser.
- **Citadel Securities:** (London). 10 weeks. CoderPad coding & market infrastructure.
- **Maven:** (London). 9 weeks. Video interviews & multiplayer group trading game.
- *Other firms:* Tibra Capital, DRW, Da Vinci Derivatives, Hudson River Trading, Jump Trading, GSA, DE Shaw, Two Sigma.

---

## Section 3. How to Prepare for Interviews

### 3.1 Core Competencies
1. Problem-solving & creativity.
2. Quick judgements under pressure.
3. Calibration (how well do you know what you know?).
4. Expected Value ($EV$) & risk intuition.
5. Mental math speed.

### 3.2 Problem Categories
- **Logic problems:** Objective answer, communication & responsiveness to hints.
- **Maths problems:** Quantitative calculation, CLT, approximations over perfectionism.
- **Strategy game problems:** Variable payout games, optimal strategy & EV calculation.
- **Fermi problems:** Back-of-the-envelope estimation, 90% confidence intervals. Average uncalibrated candidate hits 90% CIs only ~50% of the time (Overconfidence). Advice: widen intervals.

### 3.3 Market Making Interview Principles
- **Market Adjustment:** If counterparty buys on Ask, shift Mid price UP immediately!
- **Hedging:** Link contracts to reduce portfolio variance.
- **Position Tracking:** Track net position in memory or on paper.
- **Asymmetric Information:** Do not quote tight spreads against informed counterparties!

### 3.4 Adding Extra Dimensionality
- **Time Conditions:** 1–3 minute constraints. Beware of the *Planning Fallacy* (underestimating task completion time).
- **Confidence Intervals:** State 50%, 75%, and 90% CIs.
- **Communication:** Narrate out loud, write condensed solution summaries.

### 3.5 Fit Questions
1. *Walk me through your CV.*
2. *Why finance / trading?*
3. *Why this firm specifically?* (Company events, LinkedIn cold messaging, website videos).

### 3.6 Finance Glossary
- **Basic Terms:** Stock, Bond, Interest rate, Index, ETF, Future, Option, Hedging, Speculation, Exchange, OTC, Orderbook, Alpha, Beta, Risk, Volatility.
- **Options Theory:** Call, Put, Parity, Intrinsic value, Time value, Greeks (Delta, Theta, Vega), Implied volatility.

---

## Section 4. Complete Problem Repository & Hints

### 4.1 LOGIC PROBLEMS (16 Problems)
All 16 logic problems with full problem statements, Hints (Hint 1, Hint 2, Hint 3), and complete mathematical proofs.

### 4.2 MATHS PROBLEMS (16 Problems)
All 16 maths problems with full problem statements, Hints, and complete mathematical proofs.

### 4.3 STRATEGY GAME PROBLEMS (10 Problems)
All 10 strategy game problems with full problem statements, Hints, and complete mathematical proofs.

### 4.4 FERMI PROBLEMS (10 Reference Problems)
All 10 reference Fermi problems with full step-by-step arithmetic.

---

### Recommended Bibliography (Section 4)
- **Fifty Challenging Problems in Probability** (*Frederick Mosteller*)
- **A Practical Guide to Quantitative Finance Interviews** (*Xinfeng Zhou*)
- **A Collection of Dice Problems**
- **Glassdoor & WallStreetOasis**
- **LeetCode**
- **Fermi Problems PDF**
