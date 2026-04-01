# Learning and Development

Personal experiments with AI models, tools, and front-end projects.

## Front-end Projects

### [deep_chat_landing](deep_chat_landing/)
Landing page for **Deep Chat**, an AI customer support SaaS. Built with Vite + React + TypeScript.

**How it was built:** Used the **Figma MCP** (Model Context Protocol) server inside Claude Code. Claude connected directly to the Figma file, called `get_design_context` and `get_metadata` to read the node tree, then translated the design into React components with CSS modules — matching the section layout, color system, and typography from the Figma file.

Stack: React 18, TypeScript, Vite, Lucide React, CSS Modules.

---

### [fruit_market_landing](fruit_market_landing/)
Landing page for **ORCHARD**, a premium fruit market. Single-file HTML/CSS/JS.

**How it was built:** Used the **frontend-design skill** (Claude Code's built-in frontend plugin) which is optimised for generating high-quality, production-grade UI. The skill produced a distinctive design with a dark background, serif/sans-serif type pairing (Cormorant Garamond + Jost), and a rich product section — all in one self-contained `index.html`.

Stack: React 18 via CDN, Babel standalone, Google Fonts.

---

### [react_charts_generation](react_charts_generation/)
**Virtual Data Room Analytics Dashboard** — a data-heavy dashboard for tracking document access, investor activity, and engagement metrics.

**How it was built:** Used **agent teams in Claude Code** — multiple sub-agents ran in parallel to design the chart components, build the data layer, handle CSV parsing with PapaParse, and assemble the final layout. One agent handled the Recharts integration while another built the filter/state logic, then the results were merged.

Stack: React 18 via CDN, Recharts 2.x, PapaParse, Inter font. Also includes a full Vite + React + TypeScript version in `vdr-dashboard/`.

---

## Other Folders

[openai_models](openai_models/) — Testing OpenAI's 5th generation models including GPT-5.2, Codex variants, deep research, audio/speech models, and image generation.

[codex_code_assistant](codex_code_assistant/) — Experiments with OpenAI's Codex code assistant for IDE integration and agentic coding workflows.

[openai_agent_builder](openai_agent_builder/) — Building agents with the OpenAI Agents API; includes a movie-list enricher that parses and extracts structured data.

[statistics_chapter_1_descriptive_stats](statistics_chapter_1_descriptive_stats/) — Descriptive statistics: central tendency, variance, quantiles, histograms, z-scores, skewness; uses a cancer risk factors dataset.

[statistics_chapter_2_probability_and_distributions](statistics_chapter_2_probability_and_distributions/) — Probability and distributions: random variables, PMF/PDF, Bernoulli, Binomial, Poisson, Normal, Exponential, Log-normal; exercises and applications in Jupyter.
