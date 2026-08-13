import os

filepath_course = "/Users/egorgalkin/projects/LLM-Wiki/obsidian-vault/ru/courses/quant-trading-guide.md"
filepath_roadmap = "/Users/egorgalkin/projects/LLM-Wiki/obsidian-vault/ru/finance/quant-interview-roadmap.md"

library_section = """

---

## Раздел 6. Полная Книжная Полка и Библиотека Ресурсов (Quant Library & Media)

Для максимальной полноты в базу знаний интегрированы все ключевые книги, учебные курсы, видеоматериалы и интерактивные тренажеры, рекомендованные индустриальными квантами и составителями программы Notion Quant Preparation.

---

### 1. Фундаментальные Книги для Подготовки к Собеседованиям

1. **Xinfeng Zhou — *A Practical Guide To Quantitative Finance Interviews* ("Зеленая Книга")**
   - *Описание:* «Библия» подготовки к квантовым собеседованиям. Содержит свыше 300 глубоких задач по вероятностям, марковским цепям, микроструктуре, опционам и линейной алгебре с подробными решениями.
   - *Ключевые главы:* Ch 2 (Brain Teasers), Ch 4 (Probability), Ch 5 (Stochastic Processes), Ch 6 (Option Pricing).

2. **Timothy Falcon Crack — *Heard on the Street: Quantitative Questions from Wall Street Job Interviews***
   - *Описание:* Классический сборник оригинальных вопросов с Уолл-Стрит. Отлично подходит для прокачки интуиции по быстрому оценке математических ожиданий и финансовых инвариантов.

3. **Callum McDougall — *Quant Trading Guide***
   - *Описание:* Практическое руководство по отбору в проп-фирмы (Jane Street, Optiver, Flow Traders, Citadel). Содержит алгоритмы быстрого счета в уме, стратегию работы с разницей Bid-Ask спрэда и заготовки под мок-интервью.

4. **Paul Wilmott — *Frequently Asked Questions in Quantitative Finance***
   - *Описание:* Фундаментальный справочник от легендарного Пауля Вилмотта. Разбирает 100+ ключевых вопросов квантовой финансовой математики (от Блэка — Шоулза и диффузии до Греков, волатильности и УЧП).

5. **Emanuel Derman — *My Life as a Quant: Reflections on Physics and Finance***
   - *Описание:* Автобиография физика-теоретика Эмануэля Дермана, ставшего главой количественной стратегии в Goldman Sachs. Философский разбор трансформации науки в квантовую индустрию.

6. **Dan Stefanica — *A Primer for the Mathematics of Financial Engineering***
   - *Описание:* Практическое пособие по математическому анализу, дивергенциям, линейной алгебре и дифференциальным уравнениям, необходимым для Master in Financial Engineering (MFE) программ.

7. **Sheldon Ross — *A First Course in Probability***
   - *Описание:* Фундаментальный университетский учебник по теории вероятностей. Идеален для глубокого освоения комбинаторики, условных плотностей, случайных величин и предельных теорем.

8. **Mark Joshi — *Concepts and Practice of Mathematical Finance***
   - *Описание:* Строгое руководство по деривативам, процентным ставкам, Броуновскому движению и симуляциям Монте-Карло для финансовых инженеров.

---

### 2. Интерактивные Задачники и Платформы

1. **Сборник 1000+ Задач с Реальных Собеседований (`yk4r2.github.io`):**
   - База задач, собрана комьюнити телеграм-канала `@max_hft`. Включает реальные вопросы от Optiver, Jane Street, Citadel, Jump Trading, HRT и SIG с разборами.
2. **Optiver Mental Math Trainer:**
   - Численный симулятор для подготовки к 8-минутному тесту на 80 вопросов (умножение 2-значных чисел, дроби, квадратные корни).
3. **QuantNet (`quantnet.com`):**
   - Крупнейшее сообщество квантов, рейтинги MFE программ, ветки обсуждения этапов отбора и тестовых заданий.
4. **OpenQuant & QuantConnect (`quantconnect.com` / `openquant.co`):**
   - Облачные платформы для алготрейдинга, написания алгоритмов на Python/C# и тестирования стратегий на исторических тиковых данных.
5. **LeetCode & HackerRank Benchmark:**
   - Треки по алгоритмам и структурам данных (Arrays, Sliding Window, Binary Search, Heaps, Dynamic Programming).

---

### 3. Видеокурсы и Научно-Образовательные Лекции

1. **Курс МФТИ — *«Математические модели и численные методы в финансах»* (Михаил Андреев):**
   - Полный академический курс по академическим СДУ, ценообразованию опционов, конечным разностям для УЧП и стохастическому управлению.
2. **Видеокурс по Алготрейдингу (osa.net — Лекции 1–3):**
   - *Лекция 1:* Инфраструктура рынков, роль проп-фирм, брокеров и маркет-мейкеров.
   - *Лекция 2:* Построение торговых роботов, бэктестинг и сложности удержания Alpha.
   - *Лекция 3:* Риск-менеджмент, управление депозитом и психологические аспекты торговли.
3. **Вебинары Физтех-Союз и РЭШ:**
   - Разборы «Кто такой Quant и как им стать», карьерные траектории в Quantitative Research и Data Science.

---

### 4. Статьи по Маркет-Микроструктуре и Трейдингу

- **Исповедь хакера (Хабр):** Погружение в устройство биржевых протоколов и высокочастотных торговых систем.
- **Торговля на бирже ч. 1 и ч. 2 (ITI Capital):** Архитектура биржевого стакана, алгоритмы скрытия крупных объемов (Iceberg orders) и механизмы сведения заявок (Matching Engine).
- **Словарик трейдера (ATAS):** Терминология ордербука (Level 2/3 data, Time & Sales, VWAP, Delta).
- **Day in the Life of a Quantitative Researcher at Citadel Securities:** Очерки и видеоинтервью о ежедневной работе квант-исследователей в Майами и Нью-Йорке.
"""

# Append to course
with open(filepath_course, "r", encoding="utf-8") as f:
    c_content = f.read()

if "## Раздел 6. Полная Книжная Полка и Библиотека Ресурсов (Quant Library & Media)" not in c_content:
    with open(filepath_course, "w", encoding="utf-8") as f:
        f.write(c_content.strip() + "\n" + library_section)
    print("Appended complete library to quant-trading-guide.md!")

# Append to roadmap
with open(filepath_roadmap, "r", encoding="utf-8") as f:
    r_content = f.read()

if "## Раздел 4. Полная Книжная Полка и Библиотека Ресурсов (Quant Library & Media)" not in r_content:
    r_section = library_section.replace("## Раздел 6.", "## Раздел 4.")
    with open(filepath_roadmap, "w", encoding="utf-8") as f:
        f.write(r_content.strip() + "\n" + r_section)
    print("Appended complete library to quant-interview-roadmap.md!")
