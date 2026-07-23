---
title: "Алгоритмы Исполнения Ордеров: TWAP, VWAP и Almgren-Chriss"
category: "Ценообразование и Исполнение"
order: 1
lang: "ru"
slug: "algorithmic-execution-twap-vwap"
type: "article"
growth: "evergreen"
---

# Алгоритмы Исполнения Ордеров: TWAP, VWAP и Almgren-Chriss

При торговле крупными институциональными объемами главный риск трейдера — это **Market Impact** (смещение цены на рынке из-за собственного ордера).

---

## 1. TWAP и VWAP

- **TWAP (Time-Weighted Average Price):** Равномерное нарезание ордера на равные доли через равные интервалы времени:
  $$V_i = \frac{V_{\text{total}}}{N}$$
- **VWAP (Volume-Weighted Average Price):** Нарезание ордера пропорционально историческому профилю объема рынка $v_i$:
  $$V_i = V_{\text{total}} \times \frac{v_i}{\sum v_k}$$

---

## 2. Модель Альмгрена-Крисса (Almgren-Chriss Framework)

Модель оптимизирует баланс между **Market Impact** (затраты на исполнение) и **Timing Risk** (риск волатильности цены во времени).

### 2.1 Постоянное и Временное Влияние (Permanent vs Temporary Impact)
- **Temporary Impact $h(v)$:** Проскальзывание текущего слика (исчезает после ордера).
- **Permanent Impact $g(v)$:** Фундаментальное смещение средней цены актива из-за утечки информации.

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[high-frequency-trading-and-orderbook|Высокочастотный Трейдинг]]
- [[quant-market-making-mechanics|Механика Market Making]]
