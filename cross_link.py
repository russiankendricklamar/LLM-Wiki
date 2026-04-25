import os
import re

terms_en = {
    "Transformer": "transformer-architecture",
    "Attention": "attention-mechanisms",
    "LLM": "llm",
    "MLP": "transformer-architecture",
    "Backpropagation": "automatic-differentiation",
    "Gradient Descent": "convex-optimization",
    "RLHF": "rlhf",
    "DPO": "dpo",
    "RAG": "rag",
    "Fine-tuning": "fine-tuning",
    "Quantization": "quantization",
    "GPU": "inference-serving",
    "SRAM": "flash-attention",
    "HBM": "flash-attention",
    "Entropy": "shannon-entropy",
    "Manifold": "manifold-learning",
    "Eigenvalues": "spectral-theory-operators",
    "Laplacian": "spectral-graph-theory",
    "SDE": "stochastic-differential-equations",
    "Kuramoto": "kuramoto-model"
}

terms_ru = {
    "Трансформер": "transformer-architecture",
    "Трансформеры": "transformer-architecture",
    "Внимание": "attention-mechanisms",
    "LLM": "llm",
    "MLP": "transformer-architecture",
    "Backpropagation": "automatic-differentiation",
    "Обратное распространение ошибки": "automatic-differentiation",
    "Градиентный спуск": "convex-optimization",
    "RLHF": "rlhf",
    "DPO": "dpo",
    "RAG": "rag",
    "Fine-tuning": "fine-tuning",
    "Донастройка": "fine-tuning",
    "Квантование": "quantization",
    "GPU": "inference-serving",
    "SRAM": "flash-attention",
    "HBM": "flash-attention",
    "Энтропия": "shannon-entropy",
    "Многообразие": "manifold-learning",
    "Собственные числа": "spectral-theory-operators",
    "Лапласиан": "spectral-graph-theory",
    "SDE": "stochastic-differential-equations",
    "Курамото": "kuramoto-model"
}

# Add some common English terms to RU as they are often used
terms_ru_ext = {
    "Transformer": "transformer-architecture",
    "Attention": "attention-mechanisms",
    "Fine-tuning": "fine-tuning",
}
terms_ru.update(terms_ru_ext)

def process_file(filepath, terms, lang):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Skip frontmatter
    fm_match = re.match(r'^---\n.*?\n---\n', content, re.DOTALL)
    if fm_match:
        fm = fm_match.group(0)
        body = content[len(fm):]
    else:
        fm = ""
        body = content

    new_body = body
    
    # Sort terms by length descending to match longer phrases first
    sorted_terms = sorted(terms.keys(), key=len, reverse=True)
    
    for term in sorted_terms:
        target = terms[term]
        
        # Don't link if the file is the target itself
        if os.path.basename(filepath).replace('.md', '') == target:
            continue
            
        # Regex to find the term: 
        # 1. Not preceded by [[ or [ or |
        # 2. Not followed by ]] or ]
        # 3. Case sensitive (or not? Let's stay somewhat conservative)
        # 4. First occurrence only
        
        # We need to be careful not to match inside existing links
        # A simple way is to find all existing links and exclude those ranges
        
        def is_in_link(pos):
            # Check if pos is inside [[...]] or [...] or (...)
            # This is a bit complex for a simple regex, so we'll use a more robust approach
            # Let's find all links
            for m in re.finditer(r'\[\[.*?\]\]|\[.*?\]\(.*?\)', new_body):
                if m.start() <= pos < m.end():
                    return True
            return False

        # Find all occurrences of term (word boundary)
        pattern = re.compile(r'\b' + re.escape(term) + r'\b', re.IGNORECASE if lang == 'en' else 0)
        
        match = None
        for m in pattern.finditer(new_body):
            if not is_in_link(m.start()):
                match = m
                break
        
        if match:
            start, end = match.start(), match.end()
            actual_term = match.group(0)
            if lang == 'en':
                link = f"[[{target}|{actual_term}]]" if actual_term.lower() != target.lower() else f"[[{target}]]"
                # Override: if target is llm and term is LLM, [[llm|LLM]] is fine or just [[llm]] if we don't care about case in links
                if actual_term.lower() == target.lower():
                    link = f"[[{target}]]"
                else:
                    link = f"[[{target}|{actual_term}]]"
            else:
                link = f"[[{target}|{actual_term}]]"
            
            new_body = new_body[:start] + link + new_body[end:]

    if new_body != body:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(fm + new_body)
        return True
    return False

# Fix scaling-laws and advanced-rag links
def fix_links(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    new_content = content.replace('[[scaling-laws]]', '[[neural-scaling-laws]]')
    new_content = new_content.replace('[[scaling-laws|', '[[neural-scaling-laws|')
    new_content = new_content.replace('[[advanced-rag]]', '[[rag]]')
    new_content = new_content.replace('[[advanced-rag|', '[[rag|')
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

# Hawking Radiation specific fix
def fix_hawking(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '[[black-hole-thermodynamics]]' not in content:
        # Link in the "four laws" section
        new_content = content.replace('laws of thermodynamics', '[[black-hole-thermodynamics|laws of thermodynamics]]')
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
    return False

# Main loop
for root, dirs, files in os.walk('obsidian-vault'):
    for file in files:
        if file.endswith('.md'):
            path = os.path.join(root, file)
            lang = 'en' if '/en/' in path else 'ru'
            terms = terms_en if lang == 'en' else terms_ru
            
            fix_links(path)
            if 'hawking-radiation.md' in file:
                fix_hawking(path)
            
            if '/physics/' in path or '/gravity/' in path or '/holography/' in path:
                # Physics context
                current_terms = terms.copy()
                current_terms['Entropy'] = 'gravitational-entropy'
                current_terms['Энтропия'] = 'gravitational-entropy'
                current_terms['Manifold'] = 'differential-geometry'
                current_terms['Многообразие'] = 'differential-geometry'
                process_file(path, current_terms, lang)
            else:
                process_file(path, terms, lang)
