---
title: "Архитектура Matching Engine и Задержки (Kernel Bypass)"
category: "Микроструктура Рынка"
order: 8
lang: "ru"
slug: "limit-order-book-matching-engine-design"
type: "article"
growth: "evergreen"
---

# Архитектура Matching Engine и Задержки (Kernel Bypass)

Проектирование высокопроизводительных биржевых движков сведения ордеров (Matching Engine) с ультранизкой задержкой.

---

## 1. Структуры Данных Стакана Ордеров

- **Двусвязные списки + Хеш-таблицы (Doubly Linked Lists + Hash Maps):** Обеспечивают отмену ордера за $O(1)$ и мгновенное получение вершины стакана за $O(1)$.
- **Lock-Free Ring Buffers (Disruptor Pattern):** Межпоточный обмен сообщениями без блочных мутексов ОС.

---

## 2. Технологии Сверхнизкой Задержки

- **Kernel Bypass (Solarflare OpenOnload / TCPDirect):** Сетевые пакеты передаются из сетевой карты (NIC) напрямую в память пользовательского процесса C++, минуя стек ядра Linux.
- **Оптимизация кэш-линий CPU:** Выравнивание структур данных по 64-байтовым границам (Cache Line Alignment) для предотвращения False Sharing.

---

## Смотрите также
- [[quant-trading-guide|Курс Quant Trading & Interview Prep]]
- [[high-frequency-trading-and-orderbook|Высокочастотный Трейдинг]]
- [[quant-market-making-mechanics|Механика Market Making]]
