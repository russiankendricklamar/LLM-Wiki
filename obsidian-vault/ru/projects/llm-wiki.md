---
title: "LLM-Wiki"
category: "Проекты"
order: 1
lang: "ru"
slug: "/projects/llm-wiki"
type: "project"
status: "active"
year: "2026"
tech: "React 19, TypeScript, Vite, Tailwind 4, Obsidian"
github: "https://github.com/russiankendricklamar/LLM-Wiki"
demo: "https://github.com/russiankendricklamar/LLM-Wiki"
image: "/projects/llm-wiki.svg"
featured: true
description: "Двуязычная wiki квантовых финансов, физики и LLM. Контент живёт как Obsidian vault, рендерится как SPA на React + Vite."
---

# LLM-Wiki

Двуязычная wiki, в которой я собираю заметки по квантовым финансам, стохастическим процессам, физике и большим языковым моделям. Цель — вырастить живой **Сад Знаний**, по которому удобно гулять и где каждая идея связана с десятком других через wiki-ссылки в стиле Obsidian.

## Архитектура

- **Контент** — обычный Obsidian vault в `obsidian-vault/{ru,en}/`. Никакого build-time pipeline: markdown подтягивается через `import.meta.glob` прямо в бандл.
- **Рендер** — React 19 + Vite + Tailwind 4. Темы, поиск, граф знаний (3D), LaTeX (KaTeX), графики (Recharts).
- **Двуязычность** — `en` и `ru` версии каждой статьи делят один `slug`, переключатель сохраняет позицию.
- **Граф знаний** — `react-force-graph-3d`, узлы и рёбра строятся из wiki-ссылок на лету.

## Что внутри

Заметки про процессы Леви, GARCH, Калмана, Кели, MCMC, частицы, market microstructure, и многое другое. Список растёт.

## Стек

`React 19` · `TypeScript` · `Vite` · `Tailwind CSS 4` · `react-router` · `react-markdown` · `KaTeX` · `Recharts` · `react-force-graph-3d` · `motion`
