import os
import re
import json

def extract_metadata(content):
    fm_match = re.match(r'^---\n(.*?)\n---\n', content, re.DOTALL)
    metadata = {}
    if fm_match:
        fm_content = fm_match.group(1)
        for line in fm_content.split('\n'):
            if ':' in line:
                parts = line.split(':', 1)
                if len(parts) == 2:
                    key, val = parts
                    metadata[key.strip()] = val.strip().strip('"').strip("'")
    return metadata

def extract_links(content):
    links = re.findall(r'\[\[(.*?)\]\]', content)
    clean_links = []
    for link in links:
        slug = link.split('|')[0].strip()
        if slug:
            clean_links.append(slug)
    return clean_links

def extract_concepts(content):
    concepts = re.findall(r'\*\*(.*?)\*\*', content)
    headers = re.findall(r'^#+ (.*)', content, re.MULTILINE)
    return list(set([c.strip() for c in (concepts + headers) if len(c.strip()) > 2]))

def generate_index():
    vault_path = 'obsidian-vault'
    index = {
        'version': '1.0.0',
        'entities': {},
        'relationships': []
    }
    
    # First pass: collect all entities
    for root, _, files in os.walk(vault_path):
        for file in files:
            if file.endswith('.md'):
                path = os.path.join(root, file)
                try:
                    with open(path, 'r', encoding='utf-8') as f:
                        content = f.read()
                except Exception:
                    continue
                
                meta = extract_metadata(content)
                slug = meta.get('slug', file.replace('.md', ''))
                slug = slug.strip('/')
                
                index['entities'][slug] = {
                    'title': meta.get('title', slug),
                    'category': meta.get('category', 'Unknown'),
                    'lang': 'en' if '/en/' in path else 'ru',
                    'concepts': extract_concepts(content),
                    'path': path
                }

    # Second pass: extract relationships
    for slug, data in index['entities'].items():
        try:
            with open(data['path'], 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception:
            continue
        
        links = extract_links(content)
        for target in links:
            target_norm = target.strip('/')
            if target_norm in index['entities']:
                index['relationships'].append({
                    'source': slug,
                    'target': target_norm,
                    'type': 'references'
                })

    # Save index
    with open('semantic_index.json', 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, indent=2)

    # Generate Aggregate for LLM
    aggregate = "# Knowledge Base Aggregate for AI Synthesis\n\n"
    for slug, data in index['entities'].items():
        aggregate += f"## Entity: {slug}\n"
        aggregate += f"- Title: {data['title']}\n"
        aggregate += f"- Category: {data['category']}\n"
        aggregate += f"- Language: {data['lang']}\n"
        aggregate += f"- Key Concepts: {', '.join(data['concepts'][:10])}\n"
        aggregate += f"- References: {', '.join([r['target'] for r in index['relationships'] if r['source'] == slug])}\n\n"
    
    with open('knowledge_aggregate.md', 'w', encoding='utf-8') as f:
        f.write(aggregate)

if __name__ == '__main__':
    generate_index()
