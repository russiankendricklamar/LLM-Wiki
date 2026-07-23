#!/usr/bin/env python3
"""
Interactive Market Making Simulator (Jane Street Style)
Simulates quoting Bid-Ask spreads on a hidden dice game with Bayesian market updating,
adverse selection, inventory risk tracking, and real-time P&L rendering.
"""

import random

def main():
    print("=" * 65)
    print("      JANE STREET STYLE MARKET MAKING SIMULATOR")
    print("=" * 65)
    print("Scenario:")
    print("A secret 6-sided die (d6) has been rolled.")
    print("You are the Market Maker quoting a 1-wide market (e.g. Bid @ Ask, width = 1).")
    print("The counterparty knows partial information or acts as a Bayesian trader.")
    print("Objective: Maximize total P&L while managing inventory position risk.\n")

    # True value of secret dice
    true_dice = random.randint(1, 6)
    
    position = 0      # Net contract inventory
    cash = 0.0        # Cash balance
    rounds = 5
    
    prior_probs = {i: 1/6 for i in range(1, 7)}

    def current_ev(probs):
        return sum(i * probs[i] for i in range(1, 7))

    for r in range(1, rounds + 1):
        expected_val = current_ev(prior_probs)
        print(f"--- ROUND {r} of {rounds} ---")
        print(f"Current Position: {position} contracts | Cash: ${cash:.2f} | Estimated EV: {expected_val:.2f}")
        
        while True:
            try:
                bid_input = input(f"Enter your Bid price (Width must be 1.0, e.g. 3.0): ").strip()
                if bid_input.lower() == 'q':
                    return
                bid = float(bid_input)
                ask = bid + 1.0
                break
            except ValueError:
                print("Invalid input. Please enter a numerical Bid price.")

        mid = (bid + ask) / 2.0
        print(f"Quoted Market: {bid:.2f} @ {ask:.2f} (Mid: {mid:.2f})")

        # Counterparty decision:
        # If true_dice > ask, counterparty BUY at ask (you SELL)
        # If true_dice < bid, counterparty SELL at bid (you BUY)
        # Otherwise, 20% chance of random trade or PASS
        action = None
        if true_dice > ask:
            action = 'BUY'   # Counterparty buys on Ask
        elif true_dice < bid:
            action = 'SELL'  # Counterparty sells on Bid
        else:
            if random.random() < 0.2:
                action = 'BUY' if true_dice > mid else 'SELL'
            else:
                action = 'PASS'

        if action == 'BUY':
            print(f"-> Counterparty BOUGHT 1 contract at your Ask ${ask:.2f}!")
            position -= 1
            cash += ask
            # Bayesian update: True dice is likely higher than ask
            for i in range(1, 7):
                if i <= ask:
                    prior_probs[i] *= 0.3
                else:
                    prior_probs[i] *= 1.8
        elif action == 'SELL':
            print(f"-> Counterparty SOLD 1 contract at your Bid ${bid:.2f}!")
            position += 1
            cash -= bid
            # Bayesian update: True dice is likely lower than bid
            for i in range(1, 7):
                if i >= bid:
                    prior_probs[i] *= 0.3
                else:
                    prior_probs[i] *= 1.8
        else:
            print("-> Counterparty PASSED (No Trade).")

        # Normalize probabilities
        total_p = sum(prior_probs.values())
        prior_probs = {i: prior_probs[i]/total_p for i in range(1, 7)}
        print(f"Updated Market Expectation: {current_ev(prior_probs):.2f}\n")

    # Settlement
    settlement_value = true_dice
    final_pnl = cash + (position * settlement_value)
    
    print("=" * 65)
    print("                    GAME SETTLEMENT")
    print("=" * 65)
    print(f"Secret Die Revealed:  {true_dice}")
    print(f"Final Inventory:      {position} contracts @ ${settlement_value:.2f} = ${position * settlement_value:.2f}")
    print(f"Cash Realized:        ${cash:.2f}")
    print(f"TOTAL REALIZED P&L:   ${final_pnl:.2f}")
    print("=" * 65)

if __name__ == "__main__":
    main()
