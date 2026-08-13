import os

course_file = "/Users/egorgalkin/projects/LLM-Wiki/obsidian-vault/ru/courses/quant-trading-guide.md"

with open(course_file, "r", encoding="utf-8") as f:
    existing_content = f.read()

with open("/Users/egorgalkin/projects/LLM-Wiki/scratch/formatted_pdf_text.md", "r", encoding="utf-8") as f:
    pdf_text = f.read()

pdf_section = f"""

---

## Раздел 7. Оригинальный Полный Текст Руководства Каллума Макдугалла (Original PDF Transcript: Quant Trading Guide v2)

Настоящий раздел содержит 100% сырого и неразобранного текста оригинального PDF-файла `quant-trading-guide-v2.pdf` (Callum McDougall, November 2020), включая все задачи, подсказки, подробные выводы решений, очерки о проп-фирмах и приложения.

```markdown
{pdf_text}
```
"""

if "## Раздел 7. Оригинальный Полный Текст Руководства Каллума Макдугалла" not in existing_content:
    new_master_content = existing_content.strip() + "\n" + pdf_section
    with open(course_file, "w", encoding="utf-8") as f:
        f.write(new_master_content)
    print("Master Course 3 successfully created with full PDF text embedded!")
else:
    print("PDF section already embedded.")
