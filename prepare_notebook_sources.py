import os
import re

def aggregate_vault(lang):
    vault_path = f'obsidian-vault/{lang}'
    output_file = f'notebook_source_{lang}.txt'
    
    if not os.path.exists(vault_path):
        print(f"Directory {vault_path} not found.")
        return

    pages = []
    
    for root, dirs, files in os.walk(vault_path):
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                    
                    # Extract title from frontmatter or filename
                    title_match = re.search(r'^title:\s*(.*)$', content, re.MULTILINE)
                    title = title_match.group(1).strip().strip('"').strip("'") if title_match else file.replace('.md', '')
                    
                    # Remove frontmatter for clean text
                    clean_content = re.sub(r'^---[\s\S]*?---\n?', '', content)
                    
                    # Add header for context
                    pages.append(f"ARTICLE: {title}\nPATH: {file_path}\n\n{clean_content}\n\n{'='*50}\n")

    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"LLM WIKI SOURCE AGGREGATE ({lang.upper()})\n")
        f.write(f"Total articles: {len(pages)}\n\n")
        f.write('\n'.join(pages))
    
    print(f"Successfully aggregated {len(pages)} articles into {output_file}")

if __name__ == "__main__":
    aggregate_vault('en')
    aggregate_vault('ru')
