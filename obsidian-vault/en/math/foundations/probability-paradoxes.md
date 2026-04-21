---
title: "Classic Paradoxes in Probability"
category: "Foundations"
order: 26
lang: "en"
slug: "probability-paradoxes"
---

# Classic Paradoxes in Probability and Statistics

Statistical paradoxes occur when intuitive reasoning leads to incorrect conclusions, or when the data seems to tell two contradictory stories. Understanding these is essential for accurate data analysis and scientific integrity.

## 1. Simpson's Paradox

Simpson's paradox is a phenomenon in which a trend appears in several different groups of data but disappears or reverses when these groups are combined.

**Example**: A hospital treatment might have a higher success rate than a rival hospital for *both* heart surgery and broken legs separately. However, if the first hospital takes on many more difficult heart surgeries than the second, its *overall* success rate might look lower. 
**Lesson**: Always look for **confounding variables** before aggregating data.

## 2. Berkson's Paradox (Selection Bias)

Berkson's paradox happens when a false negative correlation appears between two independent traits due to how the sample is selected.

**Example**: You might notice that "beautiful people are often mean." This doesn't mean beauty and kindness are negatively correlated in reality. It's because you likely only date people who are *either* very beautiful *or* very kind. The people who are neither are excluded from your sample, creating a fake trade-off.

## 3. The Birthday Paradox

How many people need to be in a room for there to be a 50% chance that two share a birthday?
- **Intuition**: ~183 (half of 365).
- **Reality**: **23**.
This happens because we aren't looking for someone to share *your* birthday, but for *any* two people to share a birthday. The number of possible pairs grows quadratically ($n^2$), leading to the rapid rise in probability.

## 4. Survivor Bias

The logical error of focusing on the people or things that "survived" some process and inadvertently overlooking those that did not.

**Example**: During WWII, researchers looked at returning planes and wanted to armor the areas with the most bullet holes. Mathematician **Abraham Wald** realized they should armor the areas with **no holes** — because planes hit in those spots never made it back.

## Visualization: Simpson's Reversal

```chart
{
  "type": "scatter",
  "xAxis": "x",
  "data": [
    {"x": 1, "y": 2, "group": "Group A"},
    {"x": 2, "y": 3, "group": "Group A"},
    {"x": 4, "y": 1, "group": "Group B"},
    {"x": 5, "y": 2, "group": "Group B"}
  ],
  "lines": [
    {"dataKey": "y", "stroke": "#ef4444", "name": "Global Trend (Negative)"}
  ]
}
```
*In each group (A and B), the trend is positive (upward). But if you ignore the groups and look at all points together, the trend appears negative (downward). This is the essence of Simpson's Paradox.*

## Related Topics

[[causal-inference]] — the formal way to resolve Simpson's Paradox  
[[hypothesis-testing]] — where biases often lead to false positives  
[[bayes-theorem]] — helps resolve many conditional paradoxes
---
