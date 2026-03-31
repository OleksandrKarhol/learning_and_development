This report documents a self-directed study session covering probability distributions as part of a broader statistics learning curriculum. The work was conducted in a Jupyter notebook environment with Python, supplemented by external reading and a ChatGPT session for guided explanations.

**Objective**

To build practical working knowledge of the most important probability distributions used in data science and statistics, with emphasis on when to apply each one and how to compute probabilities in Python.

**Learning Order and Methodology**

The session followed a structured order recommended in notes (see [notes.txt](notes.txt)), progressing from foundational concepts to more complex distributions:

Random variables and the distinction between discrete and continuous cases were established first. From there, the work moved through PMF and PDF concepts, expected value, and then each major distribution in sequence: Bernoulli, Binomial, Poisson, Normal, Exponential, and Log-normal. The Uniform distribution was intentionally skipped, noted as too simple and of low practical relevance. The session closed with the Central Limit Theorem.

Each distribution was studied by reading a definition, working through at least one numerical example by hand or in code, and verifying results using Python.

**Technology and Tools**

All computation was done in [main.ipynb](main.ipynb) using Python with the following libraries: `scipy.stats` (norm, binom), `numpy`, `matplotlib.pyplot`, `seaborn`, and the standard `math` module. Several visualizations were generated and saved to the `media/` directory, including plots for the Poisson distribution's mean and variance relationship, the Exponential distribution curve, and the Log-normal CDF.

**Key Results and Observations**

The Binomial distribution was applied to a true/false exam scenario: P(exactly 6 correct out of 10) = 0.2051, P(score ≥ 60%) = 0.3779. The Normal distribution section was the most extensive, covering z-score standardization, the empirical 68-95-99.7 rule, and inverse lookups via `norm.ppf()` — for example, the 90th percentile of a distribution with μ=80 and σ=10 is x=92.82. The Poisson section calculated P(X=9) = 0.085 using a rate of λ≈7.53. For the Exponential distribution, a call center scenario showed P(wait > 30s) = 0.368 with λ=2 calls/min. The Log-normal section analyzed right-skewed data such as salaries and e-commerce purchases by log-transforming inputs before applying normal distribution methods.

A ChatGPT session (linked in notes.txt) was used during the study to clarify concepts, ask follow-up questions, and get alternative explanations where needed.

**Summary**

This session successfully covered eight statistical topics, leaving only Uniform formally skipped. The work produced a functional notebook with reproducible code examples grounded in realistic business scenarios. The most practically valuable insight was the Poisson-Exponential duality: Poisson counts events in an interval, Exponential measures time between events — two sides of the same process.

**Literature and Sources**

- Probability distribution functions (PDF, PMF, CDF): https://medium.com/@pankajkumardeora/probability-distribution-functions-pdf-pmf-cdf-ed49e7f5c7f2
- Bernoulli distribution: https://medium.com/@mail2rajivgopinath/key-statistics-terms-18-bernoulli-distribution-47f44c6a5173
- Poisson distribution tutorial: https://www.datacamp.com/tutorial/poisson-distribution
- Exponential distribution: https://www.geeksforgeeks.org/data-science/probability-distributions-exponential-distribution/
- Log-normal distribution (video): https://youtu.be/xtTX69JZ92w
- ChatGPT session notes: https://chatgpt.com/share/69a07d76-80dc-800a-baa3-a0cf43c5cee2
