# Chapter 4: Statistical Inference & Uncertainty — Learning Plan

## Goal
Understand how to reason from a sample to a population: how to quantify uncertainty, test hypotheses, interpret p-values correctly, and choose the right test for the right situation.

---

## Topics & Recommended Order

| # | Topic | Why this order |
|---|-------|----------------|
| 1 | Confidence Intervals | Foundation — teaches how uncertainty is quantified around an estimate |
| 2 | Bootstrapping | Builds intuition for sampling distributions without math formulas |
| 3 | Hypothesis Testing Logic | The framework everything else sits inside |
| 4 | p-values (correct interpretation) | Most misunderstood concept in stats — must understand before using tests |
| 5 | Type I & Type II Errors | Cost of being wrong in each direction; sets up test design |
| 6 | t-tests | First real parametric test; applies the full hypothesis testing framework |
| 7 | Chi-square tests | Extends inference to categorical data |

---

## Learning Approach (per topic)

1. **Intuition first** — what problem does this solve? what question does it answer?
2. **Formula** — understand the math, don't just memorize it
3. **Code it** — implement from scratch in Python, then use scipy/statsmodels
4. **Visualize** — plot it, see what it looks like in practice
5. **Edge cases** — when does this break? what are the assumptions?
6. **Real data exercise** — apply to a dataset

---

## Datasets to Use

- `tips` (seaborn) — continuous + categorical; good for t-tests
- `titanic` (seaborn) — survival outcomes; good for chi-square
- `iris` (seaborn) — clean continuous; good for t-tests and CIs
- Custom generated data — for bootstrapping and simulation exercises

---

## Deliverables

- [ ] `main.ipynb` — one notebook with all code, plots, and commentary
- [ ] `notes.txt` — links, references, key takeaways
- [ ] `report.md` — written summary of what was learned
