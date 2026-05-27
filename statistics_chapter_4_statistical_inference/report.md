# Chapter 4: Statistical Inference & Uncertainty — Report

## What this chapter covered

This chapter focused on the core tools for reasoning from a sample to a population — how to quantify uncertainty, test hypotheses, and distinguish real signal from random noise.

---

## Key concepts learned

### Confidence Intervals
A CI is a range around a sample estimate that reflects uncertainty due to sampling. The standard error ($s/\sqrt{n}$) is the foundation — it measures how much sample means naturally vary. A 95% CI means the procedure captures the true mean 95% of the time across repeated samples, not that any single interval has a 95% chance of containing it. Two levers control width: sample size and confidence level.

### Bootstrapping
Resampling with replacement to simulate the sampling distribution of any statistic. The key insight is that bootstrapping works for statistics with no formula-based CI — such as the median — by computing the statistic across 10,000 resamples and taking percentiles. It does not create new data; it honestly reflects the uncertainty already in your sample.

### Hypothesis Testing Logic
The framework for evaluating whether an observed effect is real. H₀ is the null (no effect), H₁ is the alternative. You never prove H₁ — you either reject H₀ or fail to reject it. α (typically 0.05) is the threshold for "suspicious enough." The analogy to a courtroom — innocent until proven guilty — captures the asymmetry correctly.

### p-values
The probability of observing data as extreme or more extreme than what was collected, assuming H₀ is true. A low p-value means the data is hard to explain by chance. It does not mean the probability that H₀ is true, and it does not measure practical importance. Statistical significance and practical significance are separate questions.

### Type I & Type II Errors
Type I (false positive): rejecting H₀ when it is true. Probability = α. Type II (false negative): failing to reject H₀ when it is false. Probability = β. Power = 1 − β. The only way to reduce both simultaneously is to collect more data.

### t-tests
Measures whether a difference between means is real or noise via signal/noise ratio. Three types: one-sample (compare to a known value), two-sample independent (compare two separate groups), paired (same subjects before/after — more powerful because individual variation cancels out). The t-statistic follows a known t-distribution, and degrees of freedom control how fat the tails are.

### Chi-square Tests
Same pipeline as t-tests but for categorical count data. Two types: goodness of fit (does one variable's distribution match expectation?) and test of independence (are two categorical variables related?). Expected counts represent what the table would look like if H₀ were perfectly true — the overall population rate applied equally to all subgroups.

---

## The unifying idea

Every topic in this chapter is a variation of one question:

> Given the data I have, how likely is the observed result if nothing real were happening?

The answer to that question — the p-value — combined with a predetermined threshold and an honest look at effect size, is what separates signal from noise.

---

## Datasets used
- `tips` (seaborn) — t-tests on tipping behavior
- `titanic` (seaborn) — chi-square test on survival by passenger class
- Custom generated data — CIs, bootstrapping, all manual calculations

---

## Files
- `learning_plan.md` — topic order and learning approach
- `main.ipynb` — all code, tasks, plots, and commentary
- `report.md` — this file
