---
title: "Валидация Стратегий и Deflated Sharpe Ratio"
category: "Теория Трейдинга"
order: 3
lang: "ru"
slug: "stat-tests-for-trading-strategies"
type: "article"
growth: "evergreen"
---

# Валидация Стратегий и Deflated Sharpe Ratio

Тестирование торговых стратегий на источеских данных сопряжено с высоким риском переобучения (Backtest Overfitting) из-за проблемы множественного тестирования гипотез.

---

## 1. Заниженный Коэффициент Шарпа (Deflated Sharpe Ratio / DSR)

Разработанный Маркосом Лопесом де Прадо метод DSR корректирует наблюдаемый коэффициент Шарпа $\widehat{SR}$ на количество проведенных попыток $N$ и асимметрию распределения:

$$\text{DSR} = Z \left[ \frac{(\widehat{SR} - SR^*) \sqrt{T-1}}{\sqrt{1 - \gamma_3 \widehat{SR} + \frac{\gamma_4 - 1}{4} \widehat{SR}^2}} \right]$$

где $SR^*$ — максимальное ожидаемое значение коэффициента Шарпа среди $N$ случайных независимых прогонов:
$$SR^* = \sqrt{V[SR]} \left( (1-\gamma) Z^{-1} \left[ 1 - \frac{1}{N} \right] + \gamma Z^{-1} \left[ 1 - \frac{1}{N \cdot e} \right] \right)$$

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[machine-learning-for-quant-trading|ML в Квант-Трейдинге]]
- [[quant-risk-management-var-cvar|Управление Квант-Рисками]]
