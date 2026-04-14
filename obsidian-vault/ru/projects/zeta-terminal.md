---
title: "Zeta Terminal"
category: "Проекты"
order: 2
lang: "ru"
type: "project"
status: "wip"
year: "2025"
tech: "Vue 3, FastAPI, Python, C++, PostgreSQL, Railway"
image: "/projects/zeta-terminal.png"
demo: "https://zetaterminal.dev"
featured: true
description: "Аналитическая платформа класса BlackRock Aladdin — покрывает российский и международный рынки от системных рисков до отдельного тика. 42 модуля, C++-ядро, брутальный дизайн."
---

# Zeta Terminal

**Zeta Terminal** — финансово-аналитическая платформа, амбиция которой — стать российским аналогом BlackRock Aladdin. Охватывает весь спектр финансового анализа: от макроуровня (системные риски, contagion) до микроуровня (конкретная сделка, тик, ордер).

## Мотивация

Рабочий процесс кванта разбит между Bloomberg-терминалом, Python-ноутбуками, риск-системами и таблицами. Zeta Terminal сворачивает этот стек: данные, модели, визуализация и LLM-помощь — в одном окне, без смены контекста.

Ключевой принцип: все модули — слои одного телескопа с разным зумом:
- **Macro** → системные риски, contagion, market-wide stress
- **Meso** → секторы, участники, сети экспозиций
- **Micro** → портфели, инструменты, тики, ордера

## Модули (42 роута)

**Портфель и риск:** Portfolio, Greeks, Stress Testing, Backtest, Portfolio Optimization, Reports

**Фиксированный доход:** Облигации (ванильные, флоатеры), ZCYC Viewer, Bond Valuation, REPO

**Деривативы:** Опционы (Heston, SABR, jump-diffusion), Свопы + Swap Greeks, Форварды + Forward Greeks, Basis, Hedging

**Аналитика:** Volatility Surface, P&L Attribution, Realized Kernels, HAR Model, Factor Analysis, Eigenportfolio, Probability of Backtest Overfitting, Meta-Labeling, Adversarial Stress

**Режимы:** Regime Detection, Spectral Regimes — автоматическое определение рыночных состояний через HMM и спектральный анализ

## Архитектура

- **Фронтенд**: Vue 3.4 + TypeScript + Vite + Tailwind + Pinia; Composition API, lazy-loaded роуты, Command Palette (`Cmd+K`)
- **Бэкенд**: FastAPI + Python 3.14 + asyncpg + Railway PostgreSQL; строгое разделение Router → Service → Repository, 40 сервисов
- **Вычислительное ядро**: C++ модули (`algopack_native` — приём данных ALGOPACK, `quant_native` — финансовая математика); вызываются из Python через ctypes
- **Десктоп**: Tauri 2.0 — нативное приложение для macOS/Windows поверх веб-стека
- **Визуализация**: Three.js (3D графы), ECharts + Chart.js (2D графики), KaTeX (математика)

## Дизайн-система — Brutalism

Единая система на 2300+ строк CSS. Правила нарушать нельзя:
- Фон `#050505`, акцент `#DC2626` (красный для потерь)
- Типографика: Anton (заголовки ALL CAPS), Oswald (UI labels), Mono (числа)
- Скруглений: 3–6px максимум, никаких `rounded-full`
- Никаких теней, градиентов, эмодзи в интерфейсе
- Стрелки: `→`, не иконки

## Инфраструктура

- **Фронтенд**: Railway → `zetaterminal.dev` (SPA, Cloudflare DNS)
- **Бэкенд**: Railway → `api.zetaterminal.dev` (always-on, Nixpacks)
- **БД**: Railway PostgreSQL (internal networking)

## Статус

Активная разработка. Завершены: унификация дизайн-системы (8 фаз, единый `:where()` нормализатор), C++-ускорение, ALGOPACK Unified Worker (заменил 5 последовательных воркеров на один асинхронный с adaptive rate limiter).

