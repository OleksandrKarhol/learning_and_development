# Chapter 3: Relationships Between Variables — Learning Plan

## Goal
Understand how two variables relate to each other: how to measure the strength and direction of that relationship, how to visualize it, and how to reason about categorical associations.

---

## Topics & Recommended Order

| # | Topic | Why this order |
|---|-------|----------------|
| 1 | Covariance (intuition) | Foundation — everything else builds on the idea of joint variation |
| 2 | Pearson correlation | The most common measure; understand it before alternatives |
| 3 | Scatter plots | Visual complement to correlation — always plot before computing |
| 4 | Spearman correlation | Rank-based version of Pearson; needed when data is non-normal or ordinal |
| 5 | Kendall's tau *(optional)* | Alternative to Spearman; more robust on small samples |
| 6 | Correlation matrices | Extension to multiple variables at once |
| 7 | QQ plots | Diagnostic tool — check normality assumption before using Pearson |
| 8 | Odds & odds ratios | Shift to categorical thinking; quantify association in 2×2 tables |
| 9 | Contingency tables | Generalize odds ratios to any categorical × categorical comparison |

---

## Learning Approach (per topic)

1. **Intuition first** — what problem does this solve? what does it measure?
2. **Formula** — understand the math, don't just memorize it
3. **Code it** — implement from scratch in Python, then use scipy/pandas/numpy
4. **Visualize** — plot it, see what it looks like in practice
5. **Edge cases** — when does this break? what are the assumptions?
6. **Real data exercise** — apply to a dataset (iris, mpg, titanic, etc.)

---

## Datasets to Use

- `iris` — continuous variables, good for correlation matrices and scatter plots
- `tips` (seaborn) — mix of continuous and categorical
- `titanic` — good for odds ratios and contingency tables

---

## Deliverables

- [ ] `main.ipynb` — one notebook with all code, plots, and commentary
- [ ] `notes.txt` — links, references, key takeaways
- [ ] `report.md` — written summary of what was learned (like ch.1 and ch.2)
