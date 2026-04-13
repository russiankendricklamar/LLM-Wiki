---
title: "Meta-Labeling Framework"
category: "Algorithms and ML"
order: 105
lang: "en"
---
# Meta-Labeling Framework (Marcos Lopez de Prado)

**Meta-Labeling** is a machine learning technique introduced by Marcos Lopez de Prado to improve the performance of financial models. It decouples the decision of **side** (buy/sell) from the decision of **size** (bet/no-bet), allowing for better risk management and reduced false positives.

## How It Works

1. **Primary Model**: A standard model (e.g., a simple moving average crossover or a deep learning model) decides the direction of the trade ($y \in \{-1, 1\}$).
2. **Meta-Labeling**: We create a secondary "meta-label" $z \in \{0, 1\}$:
   - $z=1$ if the primary model's prediction was correct (profitable).
   - $z=0$ if the primary model's prediction was incorrect (loss-making).
3. **Secondary Model**: A machine learning model is trained to predict $z$. If the secondary model predicts $z=0$, the trade is discarded, even if the primary model suggests a trade.

## Benefits

- **Addresses Overfitting**: The secondary model filters out signals that occur in regimes where the primary model is known to fail.
- **Improved F1-Score**: By reducing false positives, meta-labeling often significantly increases the precision of a strategy without sacrificing too much recall.
- **Sizing**: The probability output of the secondary model can be used to determine the optimal position size.

## Financial Application

1. **Trend Following**: Filtering out "whipsaw" trades in sideways markets.
2. **Arbitrage**: Only executing arbitrage trades when the market conditions (e.g., volatility, liquidity) suggest a high probability of convergence.
3. **Credit Scoring**: Adding a secondary layer to verify if a primary "high-risk" classification is likely to result in an actual default.

## Python: Implementing Meta-Labeling Logic

```python
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

def apply_meta_labeling(X, primary_predictions, actual_outcomes):
    # Create meta-labels: 1 if prediction matches outcome, 0 otherwise
    z = (primary_predictions == actual_outcomes).astype(int)
    
    # Train secondary model
    meta_model = RandomForestClassifier(n_estimators=100)
    meta_model.fit(X, z)
    
    # Probability of being correct
    prob_correct = meta_model.predict_proba(X)[:, 1]
    return prob_correct

# Usage: 
# If prob_correct > threshold: execute primary_prediction
```

## Related Topics
- [[random-matrix-theory]]
- [[hierarchical-risk-parity]]
---
