---
title: "Hidden Markov Models & Particle Filters"
category: "Time Series"
order: 25
lang: "en"
slug: "hmm-particle-filters"
---

# Hidden Markov Models & Particle Filters

Financial markets constantly shift between different "regimes" (e.g., bull market, panic selling, low-volatility drift). However, these regimes are **latent** (hidden)—they don't announce themselves. To adapt trading algorithms in real-time, quantitative funds use **Hidden Markov Models (HMM)** and **Particle Filters**.

## Hidden Markov Models (HMM)

An HMM assumes the market is driven by an unobservable Markov process $Z_t \in \{1, 2, \dots, K\}$ (the states). What we actually observe is the price return $X_t$, whose distribution depends on the hidden state.

1.  **Transition Matrix**: The probability of jumping from state $i$ to state $j$.
2.  **Emission Probability**: $P(X_t \mid Z_t = k)$. For example, if $Z_t = 1$ (Bull), $X_t \sim \mathcal{N}(0.01, 0.05^2)$. If $Z_t = 2$ (Crash), $X_t \sim \mathcal{N}(-0.05, 0.20^2)$.

Using the **Baum-Welch algorithm**, quants can calibrate these parameters from historical data. Using the **Viterbi algorithm**, they can deduce the most likely sequence of past states. 

But for live trading, we need to know the state *right now*. This is called **Filtering**.

## The Non-Linear Problem: Particle Filters

If the system is perfectly linear and Gaussian, we use a **Kalman Filter**. However, financial markets are highly non-linear with heavy tails (jumps). The Kalman Filter fails here.

The solution is the **Particle Filter (Sequential Monte Carlo)**.
Instead of tracking an exact mathematical distribution, a Particle Filter tracks the hidden state using thousands of simulated "particles," each representing a guess of the current market state.

### The Algorithm:
1.  **Predict (Mutate)**: Move all particles forward in time using the transition matrix.
2.  **Update (Weight)**: A new market price $X_t$ arrives. We assign a "weight" to each particle based on how well its state predicted this exact price.
3.  **Resample (Darwinian Selection)**: Particles with high weights are cloned (they multiply). Particles with low weights (bad guesses) are killed.

The average state of the surviving particles gives the exact, real-time probability that the market is in a Crash or Bull regime.

## Application in HFT and StatArb

- **Dynamic Spread Quoting**: A market maker runs a particle filter on order book flow. If the filter detects a shift to a "Toxic" regime (high adverse selection), the algorithm instantly widens the bid-ask spread.
- **Pairs Trading**: The spread between two cointegrated stocks is modeled. If the particle filter detects a "regime break" (the cointegration is broken), the algorithm closes the position to prevent a massive loss.

## Visualization: Particle Survival

```mermaid
graph LR
    subgraph Time T (Prediction)
        P1[Particle 1: Bull]
        P2[Particle 2: Bear]
        P3[Particle 3: Crash]
    end
    
    Obs[Market Drops 5%]
    
    subgraph Time T+1 (Resampling)
        R1[Dead]
        R2[Particle 2: Bear]
        R3[Particle 3: Crash]
        R4[Clone of Crash]
    end
    
    P1 -.->|Weight: 0.01| Obs
    P2 -.->|Weight: 0.30| Obs
    P3 -.->|Weight: 0.80| Obs
    
    Obs --> R1
    Obs --> R2
    Obs --> R3
    Obs --> R4
    
    style P3 fill:#ef4444,color:#fff
    style R3 fill:#ef4444,color:#fff
    style R4 fill:#ef4444,color:#fff
```
*When a sudden 5% drop occurs, particles predicting a "Bull" state die off. The "Crash" particles correctly anticipated the heavy tail, so they are rewarded and multiplied, instantly shifting the algorithm's internal belief.*

## Related Topics

[[mcmc]] — Markov Chain Monte Carlo (the offline cousin)  
[[stochastic-volatility]] — latent variables that need filtering  
[[regime-switching-factors]] — applying HMMs to portfolio construction
---
