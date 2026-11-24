# Project Evidence Report

## Scope and review date

This report records evidence inspected on 2026-11-21. It separates local workspace evidence, connected public GitHub repository evidence, and unavailable source evidence. It does not infer source ownership or scientific conclusions where the evidence is absent.

## Movie Website

- **Local folder:** `Movie_web/`
- **Public GitHub repository:** No matching repository was found among the public repositories returned for `YousefEldeeb787`.
- **Inspected files:**
  - `Movie_web/home_screen.png`
  - `Movie_web/search_tab.png`
  - `Movie_web/empty_search_tab.png`
  - `Movie_web/movie_details_about_movie.png`
  - `Movie_web/movie_details_cast.png`
  - `Movie_web/movie_details_reviews.png`
  - `Movie_web/watch_list_tab.png`
  - Corresponding copies under `public/images/movie/`
- **Purpose:** A mobile movie-discovery interface for browsing titles and viewing movie information.
- **Problem addressed:** Presents a searchable catalog, detailed movie metadata, cast/review information, and saved titles in a single mobile interface.
- **Verified features:**
  - Dark Home screen with category tabs for Now playing, Upcoming, Top rated, and Popular.
  - Search field with populated and empty states.
  - Movie detail tabs for About Movie, Reviews, and Cast.
  - Detail fields for release year, runtime, genre, rating, and description.
  - Watchlist with saved movie cards and bottom navigation.
- **Technologies:** No source code or dependency manifest is available in the workspace, so framework, language, API provider, database, and backend status cannot be verified.
- **Verified contribution:** The supplied interface screens establish that a Movie Website interface exists. They do not establish the author's full ownership or which person implemented each layer.
- **Screenshots:** Seven PNG files are available in `Movie_web/` and copied to `public/images/movie/`.
- **Missing evidence:** Source folders, `package.json` or other manifests, routes, API integration, authentication, database models, and repository URL.
- **Recommended accurate description:** "A mobile movie-discovery interface with home browsing, search, movie detail views, cast/review sections, and a watchlist."
- **Remaining uncertainty:** Real TMDB/API integration, backend, persistence, framework, and authentication are not proven.

## HR Management System

- **Local folder:** `HR_Mangmnet_System/`
- **Public GitHub repository:** No matching repository was found among the public repositories returned for `YousefEldeeb787`.
- **Inspected files:** Seven screenshots under `HR_Mangmnet_System/`, with copies under `public/images/hr/`.
- **Verified screens:**
  - Splash screen for "HR Management System".
  - Firebase Authentication login screen.
  - Dashboard labeled HR Administrator.
  - Employee count and current-month payroll summary on the dashboard.
  - Recent-attendance section.
  - Employee list with search, department filters, phone, salary, and shift information.
  - Employee edit form with personal and work fields.
- **Purpose:** A mobile HR interface for organizing employee records and viewing basic HR dashboard information.
- **Problem addressed:** Centralizes a small set of employee and HR data for viewing, editing, and navigation.
- **Implemented features only where evidenced:**
  - Authentication sign-in UI with Firebase shown in the login screen.
  - Dashboard with employee and absence counts.
  - Current-month payroll amount display.
  - Employee search and department filtering.
  - Employee detail editing.
  - Recent attendance and payroll navigation items.
- **Technologies:** The screenshots visibly show a mobile interface and Firebase Authentication. No source or manifest is available to confirm framework, database, state management, or additional services.
- **Verified contribution:** Screens establish the supplied UI and Firebase-based sign-in presentation. Exact implementation ownership cannot be inferred from screenshots.
- **Screenshots:** Seven PNG files are available in `HR_Mangmnet_System/` and copied to `public/images/hr/`.
- **Missing evidence:** Source code, dependency manifests, routes/APIs, database schema, leave/payroll/attendance implementation, repository URL, and Firebase configuration details.
- **Recommended accurate description:** "A mobile HR management interface showing authentication, an HR dashboard, employee records, editing fields, recent attendance, and payroll navigation."
- **Remaining uncertainty:** Attendance workflows, leave management, payroll calculations, role authorization, data source, and backend implementation are not verified.

## Student Stress Classification

- **Repository:** [`YousefEldeeb787/Machine-learning-Stress_project-`](https://github.com/YousefEldeeb787/Machine-learning-Stress_project-)
- **Default branch:** `main`
- **Inspected repository files:**
  - `README.md`
  - `PROJECT_RESULTS_SUMMARY.md`
  - `Stress_Preprocessing_Modeling.ipynb`
  - `Stress.csv`
- **Research objective:** Classify student stress levels from PSS-10 questionnaire and demographic data.
- **Data:** The notebook identifies 2,028 student records and the repository supplies `Stress.csv`. Low/moderate/high stress is described as the multi-class task.
- **Methods:** Data cleaning and target/feature preparation, mixed-feature encoding, scaling, feature selection using chi-square, mutual information, ANOVA F-test and tree importance, stratified train/test separation, and model comparison.
- **Models:** Random Forest, XGBoost, Logistic Regression, SVM, and KNN.
- **Verified outputs in the notebook/repository:**
  - Logistic Regression reported accuracy 0.9852, precision 0.9868, recall 0.9852, weighted F1 0.9856, and a mean cross-validation F1 of 0.9704 with standard deviation 0.0077.
  - XGBoost reported accuracy 0.9557 and weighted F1 0.9531.
  - SVM reported accuracy 0.9392 and weighted F1 0.9398.
- **Verified contribution:** Repository README and files attribute the repository to Yousef Eldeeb. No separate collaborator or per-author contribution record is present.
- **Screenshots/visual assets:** No project-specific images are in the portfolio workspace or local repository evidence. The notebook contains chart/output evidence, but no extracted portfolio visual.
- **Missing evidence:** Independent rerun, held-out external validation, split provenance, environment lock file, and explicit contribution breakdown.
- **Recommended accurate description:** "An applied machine-learning pipeline for classifying student stress from questionnaire and demographic variables, comparing encoded and feature-reduced pipelines across five classifiers."
- **Remaining uncertainty:** The repository summary's claim of deployment readiness is not evidence of a deployed application. Reproducibility is supported by a notebook and data file but has not been rerun locally.

## Genome-Based Virulence-Factor Analysis

- **Repository:** [`YousefEldeeb787/Bioinformatics-project`](https://github.com/YousefEldeeb787/Bioinformatics-project)
- **Default branch:** `main`
- **Inspected repository files:** README, project description, `research_paper.md`, research notebooks, requirements, data links, and web-app source structure.
- **Research objective:** Detect and characterize probable virulence factors in microbial genome contigs.
- **Detailed research-paper workflow:** Prodigal gene calling, fine-tuned ESM-2 protein embeddings, and an XGBoost meta-model combining model output with CDD domain counts and de-leaked BLAST evidence; it also describes pathogenicity-island signals based on GC deviation and mobile-element annotations.
- **Documentation discrepancy:** The root README and `Project Description.md` still describe an earlier Random Forest and weighted-scoring workflow. The portfolio uses the detailed `research_paper.md` description for the deep-learning and XGBoost pipeline rather than presenting both versions as one model.
- **Methods:** Python, ESM-2, XGBoost, Prodigal, BLAST, HMMER/CDD, plus the separately documented FastAPI and React web application.
- **Verified application features:**
  - FastAPI routes for FASTA upload, ORF prediction, VF scoring, alignment, and chatbot response.
  - React 18/Vite frontend with React Router, Axios, Recharts, Chart.js, Cytoscape, and Lucide.
  - Backend dependencies include FastAPI, BioPython, scikit-learn, pandas, NumPy, and Joblib.
- **Reported evaluation and limitations:** `research_paper.md` reports ESM-2/XGBoost evaluation metrics and results on one test genome; it also states that independent held-out-genome validation and comparison with published tools remain incomplete. These are repository-reported results, not independently rerun here.
- **Verified contribution:** Yousef confirmed this was collaborative work. The repository does not specify individual contribution breakdowns.
- **Screenshots/visual assets:** No research or web-app screenshots are present in the portfolio workspace.
- **Missing evidence:** Large external databases may not be in the repository, the BLAST route comment states VFDB setup/simulation work is still needed, and local execution was not performed.
- **Recommended accurate description:** "A collaborative genome-analysis pipeline combining a fine-tuned ESM-2 model with XGBoost, BLAST homology, and protein-domain evidence to rank bacterial virulence-factor candidates."
- **Remaining uncertainty:** Independent reproduction, external genome validation, completeness of the web application's BLAST integration, and deployment status are not established.

## Microbiome Diversity Statistical Analysis

- **Repository:** [`YousefEldeeb787/Biostatistics_Project`](https://github.com/YousefEldeeb787/Biostatistics_Project)
- **Default branch:** `main`
- **Inspected repository files:**
  - `README.md`
  - `BioStat_project.R`
  - `AAD.RData`
  - `ALL_RESULTS.txt`
  - `Biostat_Project_Report.docx`
  - `Project_Requirments.docx`
- **Research objective:** Study changes in microbiome diversity in antibiotic-associated diarrhea (AAD) patients across antibiotic classes and outcomes.
- **Data:** `AAD.RData` contains 335 observations and 8 variables: patient ID, antibiotic class (PBL/OBL/FQN), Shannon and Chao1 diversity at Day 1 and Day 6, Jaccard distance, and outcome (ND/AAD/CDI). Output frequency counts are 308 ND, 22 AAD, and 5 CDI.
- **Methods:** Descriptive statistics, Shannon/Chao1 analysis, Jaccard dissimilarity, visualizations, normality tests, Levene testing, paired testing for CDI records, confidence intervals, antibiotic-group comparisons, ANOVA/Tukey HSD, and linear regression models.
- **Verified outputs:**
  - Day 1/Day 6 Shannon correlation: 0.2208003.
  - Day 1/Day 6 Chao1 correlation: 0.3026013.
  - `ALL_RESULTS.txt` provides output records for the tests and confidence intervals.
- **Verified contribution:** README and repository metadata identify Yousef Eldeeb as the author. No collaborator breakdown is supplied.
- **Screenshots/visual assets:** No microbiome visualizations or figures are copied into the portfolio workspace.
- **Missing evidence:** Independent rerun of the R script, extracted statistical conclusion section from the DOCX report, and external peer review or preregistration.
- **Recommended accurate description:** "An R-based statistical analysis of microbiome diversity in 335 antibiotic-associated-diarrhea records, using Shannon and Chao1 indices, Jaccard distance, normality testing, group comparisons, and regression."
- **Remaining uncertainty:** The repository README broadly summarizes findings, but causal or clinical conclusions should not be added unless independently supported by the full report and rerun results.

## Portfolio placement decisions

- Personal portfolio: Hospital, Surgical Clinic, and Wazzafny remain as 2–3 selected normal software/team projects alongside Student Stress, Virulence-Factor Analysis, and Microbiome Analysis research cards. Movie and HR are also represented in the project grid and case-study routes.
- WOLF company portfolio: Movie Website and HR Management System are included after visual verification. Hospital Management System and Surgical Clinic Platform remain included.
- No card is to imply client delivery, ownership, or operational deployment beyond the evidence above.
