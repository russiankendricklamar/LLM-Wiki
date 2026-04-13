# LLM Wiki

A specialized digital garden for structuring knowledge on AI, Quantitative Finance, and Quantum Physics. Built with React, Vite, and Tailwind CSS, featuring automated page generation from Markdown files.

## 🚀 Features

-   **Obsidian-native**: The `obsidian-vault/` folder can be opened directly in Obsidian. Edit there, and your site updates automatically.
-   **Automated Content**: Just drop a `.md` file in the vault, and the site updates itself.
-   **Multi-language Support**: Seamless switching between English and Russian.
-   **Advanced Rendering**: Full support for LaTeX math formulas, syntax highlighting, and interactive charts.
-   **Dynamic Navigation**: Automatically generated sidebar and search indexing.
-   **Vercel-native Feel**: Minimalist, fast, and dark-mode first UI.

---

## 📝 How to Add Content

The project uses an automated system to turn Markdown files into interactive pages.

### 1. Using Obsidian (Recommended)
1. Open **Obsidian**.
2. Select **"Open folder as vault"**.
3. Choose the `obsidian-vault/` directory in this project root.
4. Create or edit notes as usual.

### 2. Manual creation
Add a new file in the `obsidian-vault/` directory. You can create subdirectories to stay organized (e.g., `obsidian-vault/physics/`).

-   **Filename Recommendation**: Use `-en.md` or `-ru.md` suffixes (e.g., `quantum-gravity-ru.md`).

### 2. Add Frontmatter
Every file **must** start with a metadata block (YAML frontmatter) between `---` markers:

```markdown
---
title: "My New Article"
category: "Physics"
order: 1
lang: "en"
slug: "/physics/my-article"
---
```

**Metadata Fields:**
-   `title`: The name shown in the sidebar and search results.
-   `category`: The group heading in the sidebar (e.g., "Quantitative Finance").
-   `order`: Numerical order within the category (1 comes first).
-   `lang`: Either `en` or `ru`.
-   `slug`: (Optional) The URL path. If omitted, it's generated from the filename.
    -   *Crucial*: To link English and Russian versions, give them the **exact same slug**.

### 3. Write your Content
Use standard Markdown with these extra features:

#### 🔢 Mathematics (LaTeX)
Use `$$ ... $$` for blocks and `$ ... $` for inline formulas.
```markdown
$$
\frac{\partial V}{\partial t} + \frac{1}{2}\sigma^2 S^2 \frac{\partial^2 V}{\partial S^2} = rV
$$
```

#### 📊 Interactive Charts
Use a code block with the `chart` language tag and a JSON configuration:
```chart
{
  "type": "line",
  "xAxis": "time",
  "data": [
    {"time": "0", "price": 100},
    {"time": "1", "price": 105}
  ],
  "lines": [
    {"dataKey": "price", "stroke": "#3b82f6", "name": "Price"}
  ]
}
```

#### 💻 Code Blocks
Standard syntax highlighting is supported:
```python
def hello_world():
    print("Quant Finance is awesome")
```

### 4. Deploy
Once your file is ready, just push it to GitHub:
```bash
git add .
git commit -m "content: add article about ..."
git push origin main
```
Vercel will automatically re-build and publish your changes in ~1 minute.

---

## 🛠️ Tech Stack

-   **Framework**: React 19 + TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS 4
-   **Markdown**: React-Markdown + Remark-Math + Rehype-Katex
-   **Parsing**: gray-matter (Frontmatter)
-   **Animations**: Motion
-   **Icons**: Lucide React

---

## 💻 Local Development

1.  **Clone & Install**:
    ```bash
    npm install
    ```
2.  **Run Dev Server**:
    ```bash
    npm run dev
    ```
3.  **Build Check**:
    ```bash
    npm run build
    ```
