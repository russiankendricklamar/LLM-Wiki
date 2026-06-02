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
    # Strip code blocks to avoid false positives
    content = re.sub(r'```[\s\S]*?```', '', content)
    content = re.sub(r'`[^`\n]*`', '', content)
    
    links = re.findall(r'\[\[(.*?)\]\]', content)
    clean_links = []
    for link in links:
        # Extract the target part of [[target|alias]]
        target = link.split('|')[0].strip()
        if target:
            clean_links.append(target)
    return clean_links

def extract_concepts(content):
    # Strip code blocks
    content = re.sub(r'```[\s\S]*?```', '', content)
    
    concepts = re.findall(r'\*\*(.*?)\*\*', content)
    headers = re.findall(r'^#+ (.*)', content, re.MULTILINE)
    return list(set([c.strip() for c in (concepts + headers) if len(c.strip()) > 2]))

def generate_index():
    vault_path = 'obsidian-vault'
    index = {
        'version': '1.1.0',
        'entities': {},
        'relationships': []
    }
    
    # Resolvers
    title_to_slug = {}
    filename_to_slug = {}
    
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
                
                # Derive slug (same logic as content-loader.ts)
                rel_path = os.path.relpath(path, vault_path)
                # en/finance/black-scholes.md -> finance/black-scholes
                slug_parts = rel_path.replace('.md', '').split(os.sep)
                if slug_parts[0] in ['en', 'ru']:
                    lang = slug_parts[0]
                    slug = '/'.join(slug_parts[1:])
                else:
                    lang = 'en' # fallback
                    slug = '/'.join(slug_parts)
                
                # Allow explicit slug override
                if 'slug' in meta:
                    slug = meta['slug'].strip('/')
                
                title = meta.get('title', os.path.basename(file).replace('.md', ''))
                
                index['entities'][slug] = {
                    'title': title,
                    'category': meta.get('category', 'Unknown'),
                    'lang': lang,
                    'concepts': extract_concepts(content),
                    'path': path
                }
                
                # Register for resolution
                title_to_slug[title.lower()] = slug
                filename_to_slug[os.path.basename(file).replace('.md', '').lower()] = slug

    # Second pass: extract relationships
    for slug, data in index['entities'].items():
        try:
            with open(data['path'], 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception:
            continue
        
        links = extract_links(content)
        for target in links:
            target_norm = target.strip('/').lower()
            
            resolved_slug = None
            # 1. Exact slug match
            if target_norm in index['entities']:
                resolved_slug = target_norm
            # 2. Title match
            elif target_norm in title_to_slug:
                resolved_slug = title_to_slug[target_norm]
            # 3. Filename match
            elif target_norm in filename_to_slug:
                resolved_slug = filename_to_slug[target_norm]
            # 4. Handle path-prefixed targets (e.g. physics/quantum/foo)
            else:
                last_seg = target_norm.split('/')[-1]
                if last_seg in filename_to_slug:
                    resolved_slug = filename_to_slug[last_seg]
            
            if resolved_slug and resolved_slug != slug:
                index['relationships'].append({
                    'source': slug,
                    'target': resolved_slug,
                    'type': 'references'
                })

    # Remove duplicates from relationships
    unique_rels = []
    seen_rels = set()
    for rel in index['relationships']:
        rel_tuple = (rel['source'], rel['target'])
        if rel_tuple not in seen_rels:
            unique_rels.append(rel)
            seen_rels.add(rel_tuple)
    index['relationships'] = unique_rels

    # Save index
    with open('semantic_index.json', 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, indent=2)

    # Generate Aggregate for LLM
    aggregate = "# Knowledge Base Aggregate for AI Synthesis\n\n"
    aggregate += "## System Instructions\n"
    aggregate += "All agents should refer to [[GEMINI.md]] for project-wide standards and research protocols. "
    aggregate += "New research findings are located in the `research/` category with structured metadata.\n\n"
    
    # Sort entities by category then title for better readability
    sorted_slugs = sorted(index['entities'].keys(), 
                          key=lambda s: (index['entities'][s]['category'], index['entities'][s]['title']))
    
    for slug in sorted_slugs:
        data = index['entities'][slug]
        aggregate += f"## Entity: {slug}\n"
        aggregate += f"- Title: {data['title']}\n"
        aggregate += f"- Category: {data['category']}\n"
        aggregate += f"- Language: {data['lang']}\n"
        if data['concepts']:
            aggregate += f"- Key Concepts: {', '.join(data['concepts'][:15])}\n"
        
        refs = [r['target'] for r in index['relationships'] if r['source'] == slug]
        if refs:
            aggregate += f"- References: {', '.join(sorted(list(set(refs))))}\n"
        
        backlinks = [r['source'] for r in index['relationships'] if r['target'] == slug]
        if backlinks:
            aggregate += f"- Backlinks: {', '.join(sorted(list(set(backlinks))))}\n"
            
        aggregate += "\n"
    
    with open('knowledge_aggregate.md', 'w', encoding='utf-8') as f:
        f.write(aggregate)

if __name__ == '__main__':
    generate_index()
