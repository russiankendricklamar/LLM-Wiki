---
title: "Трейдинг Волатильностью и Вариационные Свопы"
category: "Производные Финансовые Инструменты"
order: 2
lang: "ru"
slug: "volatility-trading-and-variance-swaps"
type: "article"
growth: "evergreen"
---

# Трейдинг Волатильностью и Вариационные Свопы

Волатильность является самостоятельным классом активов в количественном трейдинге.

---

## 1. Дельта-Нейтральный Gamma Scalping

При покупке опциона Стрэддл (Long Straddle = Long Call + Long Put) портфель имеет положительную Гамму ($\Gamma > 0$) и нулевую Дельту ($\Delta = 0$).

При движении цены базового актива $S$:
- Изменение Дельты: $\Delta_{\text{new}} = \Gamma \cdot \Delta S$.
- Трейдер продает базовый актив при росте цены и покупает при падении, фиксируя регулярную прибыль:
  $$\text{Scalped Profit} \approx \frac{1}{2} \Gamma (\Delta S)^2$$

---

## 2. Вариационные Свопы (Variance Swaps)

Вариационный своп — это беспоставочный дериватив, выплата по которому зависит от реализованной вариации $\sigma_{\text{realized}}^2$:
$$\text{Payout} = N \cdot (\sigma_{\text{realized}}^2 - K_{\text{var}})$$

Репликация портфелем OTM-опционов лежит в основе расчета индекса волатильности **VIX**.

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[option-greeks-and-volatility|Опционные Греки]]
- [[quant-market-making-mechanics|Механика Market Making]]
