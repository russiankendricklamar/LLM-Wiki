import os
import re

vault_dir = "/Users/egorgalkin/projects/LLM-Wiki/obsidian-vault/ru"

def find_file(slug):
    slug = slug.strip()
    for root, dirs, files in os.walk(vault_dir):
        for f in files:
            if f.endswith(".md"):
                basename = f[:-3]
                if basename == slug:
                    return os.path.join(root, f)
                filepath = os.path.join(root, f)
                try:
                    with open(filepath, "r", encoding="utf-8") as fh:
                        content = fh.read(1000)
                        if f'slug: "{slug}"' in content or f'slug: {slug}' in content:
                            return filepath
                except Exception:
                    pass
    return None

def extract_article_body(filepath):
    if not filepath or not os.path.exists(filepath):
        return f"\n*Статья {filepath} временно создается.*\n"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Strip YAML frontmatter
    title = ""
    if content.startswith("---"):
        parts = content.split("---", 2)
        if len(parts) >= 3:
            fm = parts[1]
            content = parts[2]
            for line in fm.split("\n"):
                if line.startswith("title:"):
                    title = line.split(":", 1)[1].strip().strip('"')
            
    # Process text
    lines = content.strip().split("\n")
    cleaned_lines = []
    skipped_h1 = False
    in_related_topics = False
    
    for line in lines:
        # Check if entering "Родственные темы" / "Related topics"
        lower_line = line.lower().strip()
        if any(hdr in lower_line for hdr in ["родственные темы", "related topics", "см. также"]):
            in_related_topics = True
            continue
            
        # If we hit a new section heading, exit related topics mode
        if in_related_topics and line.startswith("#"):
            in_related_topics = False

        if in_related_topics:
            continue
            
        if line.startswith("# ") and not skipped_h1:
            skipped_h1 = True
            if not title:
                title = line[2:].strip()
            continue
            
        # Demote headings
        if line.startswith("## "):
            cleaned_lines.append("### " + line[3:])
        elif line.startswith("### "):
            cleaned_lines.append("#### " + line[4:])
        elif line.startswith("#### "):
            cleaned_lines.append("##### " + line[5:])
        else:
            cleaned_lines.append(line)
            
    header = f"### {title}\n\n" if title else ""
    return header + "\n".join(cleaned_lines).strip()

course1_modules = [
    ("Раздел 1. Линейные пространства и фундаментальные подпространства", ["linear-spaces", "linear-systems", "eigenvalues"]),
    ("Раздел 2. Многомерный анализ и авто-дифференцирование", ["multivariable-calculus", "gradient-hessian-jacobian", "taylor-series", "laplacian"]),
    ("Раздел 3. Выпуклая оптимизация и условия KKT", ["convexity", "convex-optimization", "lagrange-multipliers", "linear-programming"]),
    ("Раздел 4. Теория меры и интеграл Лебега", ["measure-theory", "lebesgue-integral", "sigma-algebra-measurability", "lp-spaces"]),
    ("Раздел 5. Теория вероятностей и фундаментальные теоремы", ["kolmogorov-probability-axioms", "distributions-zoo", "lln-clt", "multivariate-normal", "characteristic-functions"]),
    ("Раздел 6. Теория информации и дивергенции", ["information-theory", "entropy-information", "f-divergences", "maximum-entropy"]),
    ("Раздел 7. Стохастические процессы", ["discrete-markov-chains", "poisson-process", "brownian-bridge", "ornstein-uhlenbeck", "martingale"]),
    ("Раздел 8. Стохастическое исчисление и СДУ", ["stochastic-differential-equations", "feynman-kac", "malliavin-calculus", "sde-numerical-methods"]),
    ("Раздел 9. Дифференциальная геометрия", ["differential-geometry", "connections-curvature", "lie-groups", "symplectic-geometry", "hodge-theory"]),
    ("Раздел 10. Информационная геометрия", ["fisher-information", "information-geometry", "exponential-families", "geometric-deep-learning"]),
    ("Раздел 11. Оптимальный транспорт и геометрическое глубокое обучение", ["optimal-transport", "manifold-learning", "ricci-flow"])
]

course1_header = """---
title: "Математика для Deep Learning: Путь PhD"
category: "ИИ и Математика"
order: 1
lang: "ru"
slug: "course-math-for-ai"
type: "course"
difficulty: "Advanced"
duration: "11 разделов"
audioUrl: "/research/audio-overview-math-for-ai.mp3"
notebookUrl: "https://notebooklm.google.com"
---

# Математика для Deep Learning — монография PhD-уровня

Настоящее руководство представляет собой цельный учебник и фундаментальную монографию по математическим основаниям глубокого обучения и искусственного интеллекта. Курс состоит из последовательных статей, объединенных в тематические разделы.

---

"""

c1_text = course1_header
for mod_title, slugs in course1_modules:
    c1_text += f"## {mod_title}\n\n"
    for s in slugs:
        fp = find_file(s)
        art_body = extract_article_body(fp)
        c1_text += art_body + "\n\n---\n\n"

with open(os.path.join(vault_dir, "courses/math-for-ai.md"), "w", encoding="utf-8") as f:
    f.write(c1_text)

print(f"Course 1 written cleanly! Total chars: {len(c1_text)}")

# Course 2
course2_modules = [
    ("Раздел 1. Архитектура EVM и стэк виртуальной машины", ["evm-internals", "gas-and-opcodes"]),
    ("Раздел 2. Слой исполнения L2 и Data Availability", ["rollups-l2", "data-availability"]),
    ("Раздел 3. AMM и микроструктура ликвидности", ["amm-mechanics", "liquidity-providers", "smart-order-routing"]),
    ("Раздел 4. Протоколы кредитования и управление рисками", ["lending-mechanics", "onchain-credit", "liquid-staking"]),
    ("Раздел 5. Оракулы, MEV и институциональная безопасность", ["stablecoins", "mev", "oracle-design"]),
    ("Раздел 6. Безопасность смарт-контрактов и Аудит", ["contract-upgradeability", "smart-contract-security", "formal-verification-smart"]),
    ("Раздел 7. Институциональный комплаенс и ZK-KYC", ["account-abstraction", "zk-kyc"]),
    ("Раздел 8. Институциональный стек и Cross-Chain мосты", ["cross-chain-interop", "asset-tokenization"])
]

course2_header = """---
title: "CeDeFi Инженерия: Институциональный Web3"
category: "DeFi и Инженерия"
order: 2
lang: "ru"
slug: "course-cedefi"
type: "course"
difficulty: "Advanced"
duration: "8 разделов"
audioUrl: "/research/audio-overview-cedefi.mp3"
notebookUrl: "https://notebooklm.google.com"
---

# CeDeFi Инженерия — институциональный Web3

Настоящее руководство представляет собой исчерпывающий технический трактат и практический справочник по архитектуре и инженерии гибридных финансовых систем (Centralized Decentralized Finance, CeDeFi). Курс состоит из последовательных статей, объединенных в тематические разделы.

---

"""

c2_text = course2_header
for mod_title, slugs in course2_modules:
    c2_text += f"## {mod_title}\n\n"
    for s in slugs:
        fp = find_file(s)
        art_body = extract_article_body(fp)
        c2_text += art_body + "\n\n---\n\n"

with open(os.path.join(vault_dir, "courses/cedefi-engineering.md"), "w", encoding="utf-8") as f:
    f.write(c2_text)

print(f"Course 2 written cleanly! Total chars: {len(c2_text)}")
