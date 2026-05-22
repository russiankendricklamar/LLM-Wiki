---
title: "Shapley Value"
category: "math"
order: 239
lang: "en"
slug: "shapley-value"
---

# Shapley Value

The [[Shapley Value]] provides a unique, fair allocation of total surplus in cooperative games. $\phi_i(v) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|!(|N|-|S|-1)!}{|N|!} (v(S \cup \{i\}) - v(S))$, widely used in feature attribution (SHAP).
