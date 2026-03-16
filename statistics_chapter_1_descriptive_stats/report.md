**Description**

Personal study of descriptive statistics and data understanding using a cancer risk factors dataset. Work was done in a single Jupyter notebook covering central tendency, spread, quantiles, visualizations, and shape. The dataset (2000 rows, 21 columns) was loaded from Hugging Face and saved locally.

**Methodology and flow**

Data: Loaded tarekmasryo/cancer-risk-factors-data via the datasets library, converted to pandas, and saved to data/cancer-risk-factors-data.csv. Inspected shape and dtypes (Age, risk factors, Risk_Level, etc.).

Measures of central tendency: Computed mean , median, and mode  for Age, plus min, max, and range. Quantiles and percentiles: Used np.percentile for 25th and 90th with short interpretations (e.g. 25% of rows below 56 years). Noted that quantiles and percentiles are conceptually the same, with percentiles allowing finer splits.

Visualization: Plotted Age with a 10-bin histogram and noted that histograms can support probability-style interpretation. Variance and standard deviation: Compared sample variance (denominator n−1) with population variance (denominator n) using both pandas and manual calculation; referenced images/sample_variance.png and images/population_variance.png. Defined standard deviation as the square root of variance and computed it. To illustrate spread, created a modified Age series (adding random 0–100) and compared standard deviations (about 10.5 vs 30.4), with a note that larger SD means more dispersion.

IQR and boxplot: Computed 25th and 75th percentiles and IQR (14 for Age), and drew a boxplot with a note that the IQR is the middle box. Z-scores: Defined as distance from the mean in standard-deviation units, computed (Age − mean) / std for all rows, and plotted a histogram of z-scores. Skewness: Used Pearson’s coefficient (mean − median) / std. Original Age had slight negative skew (−0.07); an artificially modified subset (ages under 50 scaled by 1.1) showed clearer left skew (−0.2) and a comment on mode vs mean. Next steps noted: qq plots.

**Technology**

Python 3, pandas, NumPy, Matplotlib, Hugging Face datasets. All work in main.ipynb; images/ holds sample_variance.png and population_variance.png.

**Summary**

Covered central tendency (mean, median, mode), range, quantiles and percentiles, histograms, sample vs population variance, standard deviation, IQR, boxplots, z-scores, and skewness on the cancer risk factors Age variable. Emphasized the difference between sample and population variance and used one modified series to illustrate spread and skewness. Planned follow-up: qq plots.

**Literature and sources**

- Saylordotorg: Measures of Central Location; Popular Data Displays; Quantiles and Percentiles (linked in notebook)
- YouTube: Quantiles and percentiles; Histograms (linked in notebook)
- Local images: sample_variance.png, population_variance.png
