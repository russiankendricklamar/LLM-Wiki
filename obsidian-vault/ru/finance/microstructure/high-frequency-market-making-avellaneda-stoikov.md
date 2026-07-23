---
title: "HFT Маркет-Мейкинг: Уравнение HJB и Модель Авелланеды-Стоикова"
category: "Микроструктура Рынка"
order: 6
lang: "ru"
slug: "high-frequency-market-making-avellaneda-stoikov"
type: "article"
growth: "evergreen"
---

# HFT Маркет-Мейкинг: Уравнение HJB и Модель Авелланеды-Стоикова

Строгий вывод задачи оптимального контроля (Optimal Control) маркет-мейкера через дифференциальное уравнение в частных производных Гамильтона-Якоби-Беллмана (HJB).

---

## 1. Вывод HJB-уравнения

Функция ценности маркет-мейкера:
$$V(s, x, q, t) = \sup_{\delta_a, \delta_b} E \left[ -e^{-\gamma (x_T + q_T s_T)} \right]$$

Разложение через Лемму Ито дает дифференциальное уравнение HJB:
$$\frac{\partial v}{\partial t} + \frac{1}{2}\sigma^2 \frac{\partial^2 v}{\partial s^2} + \max_{\delta_b} \lambda_b(\delta_b) \left[ v(s, x-s-\delta_b, q+1, t) - v \right] + \max_{\delta_a} \lambda_a(\delta_a) \left[ v(s, x+s+\delta_a, q-1, t) - v \right] = 0$$

---

## 2. Аналитическое Решение для Цены Бронирования

$$r(s, q, t) = s - q \gamma \sigma^2 (T - t)$$
$$\delta_a^* + \delta_b^* = \frac{2}{\gamma} \ln \left( 1 + \frac{\gamma}{\kappa} \right)$$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[quant-market-making-mechanics|Механика Market Making]]
- [[high-frequency-trading-and-orderbook|Высокочастотный Трейдинг]]
