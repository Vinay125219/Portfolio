---
title: Post-Flight Data Analysis Tool
summary: Visualize and analyze flight test data with interactive charts, 3D trajectory plots, and parameter correlation to derive key insights.
badge: Data Visualization
year: 2023
impact: Faster insight generation for test teams
tags: [Python, Data Visualization, Matplotlib, Analysis]
domains: [defence, dataviz]
tools: [python]
image: /images/projects/postflight.jpg
nda: false
problem: Post-flight review meant stitching together raw CSV exports, spreadsheets and one-off scripts — slow, repetitive and error-prone for test teams under deadline pressure.
role: 'Built the analysis pipeline and visualization layer end-to-end: data cleaning, plotting, interactive views and exportable review reports.'
solution: A Python analysis tool that ingests post-flight CSV data, cleans it, and renders interactive charts, 3D trajectory plots and parameter correlations so reviewers can find the story in the data quickly.
workflow:
  - { step: CSV Ingest, detail: Batch-load post-flight datasets from test runs. }
  - { step: Data Cleaning, detail: Normalize columns, fill gaps, flag anomalies. }
  - { step: Parameter Plotting, detail: Time-series and correlation plots per parameter. }
  - { step: Trajectory Views, detail: 3D trajectory rendering for spatial context. }
  - { step: Review Report, detail: Exportable summaries for post-flight review. }
features:
  - Interactive parameter charts
  - 3D trajectory plots
  - Parameter correlation analysis
  - CSV batch import
  - Anomaly highlighting
  - Exportable review reports
  - Configurable plot themes
  - Repeatable analysis notebooks-style flow
techStack:
  - { name: Python, role: Core, icon: python }
  - { name: Matplotlib, role: Plotting, icon: chart }
  - { name: CSV Pipeline, role: Data Handling, icon: table }
  - { name: Interactive Charts, role: Analysis, icon: activity }
value:
  - { label: Faster Insights, sub: Minutes instead of hours, icon: zap }
  - { label: Clearer Review, sub: Charts teams actually read, icon: eye }
  - { label: Repeatable, sub: Same pipeline every test, icon: cycle }
  - { label: Post-flight Ready, sub: Built for review deadlines, icon: target }
outcome: Supports post-flight analysis and technical report preparation at DRDL.
order: 3
---

Turns a folder of raw test CSVs into a review session: cleaned parameters, correlated plots, and a trajectory view that makes anomalies obvious before the report is due.
