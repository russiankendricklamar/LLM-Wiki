---
title: "Крипто Квант-Трейдинг, AMM-Кривые и MEV"
category: "Теория Трейдинга"
order: 4
lang: "ru"
slug: "crypto-quant-trading-and-amm-curves"
type: "article"
growth: "evergreen"
---

# Крипто Квант-Трейдинг, AMM-Кривые и MEV

Квантовый трейдинг в децентрализованных финансах (DeFi) основан на механиках автоматических маркет-мейкеров (AMM) и поиске арбитража в блоках (MEV).

---

## 1. Инвариант Постоянного Произведения ($x \cdot y = k$)

В протоколах типа Uniswap v2 балансы резервов активов $x$ и $y$ поддерживают инвариант:
$$x \cdot y = k$$

---

## 2. Непостоянные Потери (Impermanent Loss)

Убыток провайдера ликвидности по сравнению с удержанием активов (HODL) при изменении цены в $r = P_{\text{new}} / P_0$ раз:
$$IL(r) = \frac{2\sqrt{r}}{1 + r} - 1$$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[quant-market-making-mechanics|Механика Market Making]]
- [[high-frequency-trading-and-orderbook|Высокочастотный Трейдинг]]
