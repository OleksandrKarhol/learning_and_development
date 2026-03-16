**Description**

Personal study of probability and distributions: random variables (discrete and continuous), PMF vs PDF, expected value, and a set of standard distributions. Work was done in a single Jupyter notebook with exercises and small applications. Learning order followed a plan in notes.txt; Uniform was skipped as low practicality, Central Limit Theorem left for later.

**Methodology and flow**

Foundations: built the probability distribution for the sum of two dice in Python (all 36 outcomes, P(X≥9), P(X even)). Computed expected value from a given table and from a raffle (net gain, probability of winning, E(X)). Skipped formal variance and standard deviation of discrete RVs as highly theoretical.

Binomial: used the PMF manually (factorial, then comb) and via scipy.stats.binom. Applied to an Ideals-style expansion case (e.g. P(100 expansions in 1000 accounts), cumulative P(≥100) and P(100–150)) and to a true/false exam (exactly 6 correct, P(≥60%) by guessing). Noted reliability conditions (n·p and n·(1−p) ≥ 10), business use, and that independence is often approximate.

Continuous RVs and Normal: introduced density as area under a curve. Implemented the normal PDF from the formula and plotted it; applied the empirical rule (68–95–99.7%). Defined z-scores and standard normal; solved P(60<X<80) with scipy norm.cdf and with a z-table, 90th percentile with norm.ppf, probability that sample mean > 82 (using standard error), and P(X<45). Corrected an earlier attempt that used the PDF instead of the CDF for an area. Uniform: defined and solved the alarm-clock problem (battery fails between 10 p.m. and 6:30 a.m.).

Bernoulli and Poisson: Bernoulli as single-trial success probability (IDeals expansion p); linked to binomial (one trial vs n trials). Poisson: mean = variance = λ, PMF for “9 events,” and note on using rates (e.g. conversion rate → λ for the interval). Exponential: relationship to Poisson (count of events vs time to next event), plotted with seaborn KDE, then CDF and survival function for “wait > 30 s for next call,” adoption-within-3-years and no-adoption-after-5-years (with E(X)=1/λ), and upgrade-within-2-years and after-4-years. Log-normal: “log(X) normal”; applied to salary-like data (log mean/std, P(X>100), P(X<100) via z-scores and normal CDF) and to e-commerce purchase amounts (μ=4.5, σ=1.1 for log; P(>200), P(<20), expected purchase).

**Technology**

Python 3, NumPy, SciPy (binom, norm), Matplotlib, Seaborn. All work in main.ipynb; media/ holds figures (e.g. exp_distribution.png, log_normal.png, poisson_mean_and_variance.png).

**Summary**

Covered random variables, PMF/PDF, expected value, and six distributions (Bernoulli, Binomial, Poisson, Normal, Exponential, Log-normal) with hand calculations and scipy. Emphasized when to use CDF vs PDF and the link between Poisson and exponential. Practical examples included expansion rates, exam guessing, call waiting times, feature adoption, upgrades, salaries, and purchase sizes. Next planned: Central Limit Theorem.

**Literature and sources**

- notes.txt (learning order and links)
- Saylordotorg: Discrete and continuous random variables (linked in notebook)
- Medium: Probability distribution functions (PDF, PMF, CDF); Bernoulli distribution
- DataCamp: Poisson distribution tutorial
- GeeksforGeeks: Exponential distribution
- YouTube: Log-normal distribution (linked in notes.txt)
- ChatGPT session (share link in notes.txt)
