import re
import os

pdf_text_path = "/Users/egorgalkin/projects/LLM-Wiki/scratch/extracted_pdf_v2.txt"
output_course_path = "/Users/egorgalkin/projects/LLM-Wiki/obsidian-vault/ru/courses/quant-trading-guide.md"

with open(pdf_text_path, "r", encoding="utf-8") as f:
    text = f.read()

# Find main body starting at '0 Introduction'
matches = [m.start() for m in re.finditer(r'0 Introduction', text)]
main_start = matches[1] if len(matches) > 1 else text.find('0 Introduction')
main_body = text[main_start:]

# Clean page numbers and header lines like '\n1\n', '\n2\n' etc.
cleaned = re.sub(r'\n\d+\n', '\n', main_body)
cleaned = re.sub(r'\n\s*\d+\s*\n', '\n', cleaned)

# Fix hyphenation at line breaks: e.g. 'diﬀ-\nerent' -> 'different'
cleaned = cleaned.replace('diﬀ-', 'diff-').replace('ﬁ-', 'fi-')
cleaned = re.sub(r'(\w+)-\n(\w+)', r'\1\2', cleaned)

# Fix ligatures
cleaned = cleaned.replace('ﬁ', 'fi').replace('ﬂ', 'fl').replace('ﬀ', 'ff').replace('ﬃ', 'ffi').replace('ﬄ', 'ffl')

# Format headings
lines = cleaned.split('\n')
md_lines = []

for line in lines:
    line_s = line.strip()
    if not line_s:
        md_lines.append('')
        continue
        
    # Main sections: 0 Introduction, 1 What is quant trading?, 2 Quant Trading Firms & Internships, 3 How to prepare for interviews, 4 Problems & Solutions
    if re.match(r'^[0-4]\s+[A-Z]', line_s):
        md_lines.append(f"\n## {line_s}\n")
    elif re.match(r'^[0-4]\.\d+\s+[A-Z]', line_s):
        md_lines.append(f"\n### {line_s}\n")
    elif re.match(r'^[0-4]\.\d+\.\d+\s+[A-Z]', line_s):
        md_lines.append(f"\n#### {line_s}\n")
    elif line_s.startswith('•'):
        md_lines.append(f"- {line_s[1:].strip()}")
    else:
        md_lines.append(line)

formatted_pdf_text = "\n".join(md_lines)

# Write formatted PDF text to scratch to inspect
with open("/Users/egorgalkin/projects/LLM-Wiki/scratch/formatted_pdf_text.md", "w", encoding="utf-8") as f:
    f.write(formatted_pdf_text)

print(f"Formatted PDF text written, total length: {len(formatted_pdf_text)}")
