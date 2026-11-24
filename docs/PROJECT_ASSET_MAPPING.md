# Project Asset Mapping

Inventory of the project image folders and cover-photo folder in the workspace. Paths are relative to the project root. All dimensions are pixels.

## Summary

- There are 64 project screenshots across the nine supplied project folders. All are PNG files and all source files are readable.
- Nine PNG cover files are in `cover_photos/`, one for each project.
- No byte-identical duplicates were found among the source screenshots and cover files. Several source screenshots are intentionally mirrored byte-for-byte under `public/images/`; those are website-ready copies, not duplicate screenshots in the source folders.
- Six screenshot sets have matching files under `public/images/`: Wazzafny, HR, Movie Web, Hungry, Clinic, and Hospital (46 files total). The 18 Bioinformatics, Student Stress, and Biostatistics screenshots do not currently have published copies under `public/images/research/`.
- No screenshot filenames or counts indicate missing files within the supplied screenshot folders. Two requested projects have no clearly named cover: Movie Web and Student Stress Prediction.

The site helper supports the existing `/public/images/` paths and root-relative source paths. Existing software screenshots use their published `/public/images/{project}/` copies. Covers use `/cover_photos/{filename}` and the research galleries use their supplied root folders (`/Bioinformatics_project_photos/`, `/stress_prediction_photos/`, and `/Biostatistics_project_photos/`); Vercel rewrites exclude these static asset directories.

## Portfolio collections

The personal portfolio and WOLF work page use separate ordered collections:

- **Personal:** Clinic Management System, Wazzafny – Job Recruitment Platform, Movie Web – Movie Discovery Platform, followed by AI-Powered Bioinformatics – Virulence Factor Discovery, Student Stress Prediction – Machine Learning, and Microbiome Diversity – Biostatistical Analysis.
- **WOLF:** Hospital Management System, HR Management System, Hungry – Food Ordering System, Clinic Management System, Wazzafny – Job Recruitment Platform, and Movie Web – Movie Discovery Platform.

Collection cards use only each project's mapped cover. Project screenshots are shown in the corresponding detail page gallery, with `object-fit: contain` to preserve their aspect ratios.

## Project mappings

### Wazzafny

- **Project folder:** `Wazzafny/`
- **Cover:** `cover_photos/Wazzafny_cover_photo.png` — PNG, 238x320.
- **Screenshots:** 3; PNG; no missing files or exact duplicates in the source set.
- **Website screenshot prefix:** `/public/images/wazzafny/` (matching copies exist).

| Screenshot filename | Dimensions |
| --- | ---: |
| `Screenshot 2026-11-16 214920.png` | 957x911 |
| `Screenshot 2026-11-16 214948.png` | 950x912 |
| `Screenshot 2026-11-16 215045.png` | 1387x907 |

### HR Management System

- **Project folder:** `HR_Mangmnet_System/` (folder name is misspelled; see notes).
- **Cover:** `cover_photos/HR_Mangment_cover_photo.png` — PNG, 232x318.
- **Screenshots:** 7; PNG; no missing files or exact duplicates in the source set.
- **Website screenshot prefix:** `/public/images/hr/` (matching copies exist).

| Screenshot filename | Dimensions |
| --- | ---: |
| `Screenshot 2026-11-21 225525.png` | 334x755 |
| `Screenshot 2026-11-21 225533.png` | 333x748 |
| `Screenshot 2026-11-21 225541.png` | 330x751 |
| `Screenshot 2026-11-21 225552.png` | 331x753 |
| `Screenshot 2026-11-21 225610.png` | 325x739 |
| `Screenshot 2026-11-21 225619.png` | 330x750 |
| `Screenshot 2026-11-21 225633.png` | 298x671 |

### Movie Web

- **Project folder:** `Movie_web/`
- **Cover:** `cover_photos/Movie_cover_photo.png` — supplied and used for the Movie Web project.
- **Screenshots:** 7; PNG; no missing files or exact duplicates in the source set.
- **Website screenshot prefix:** `/public/images/movie/` (matching copies exist).

| Screenshot filename | Dimensions |
| --- | ---: |
| `empty_search_tab.png` | 1080x2424 |
| `home_screen.png` | 1080x2424 |
| `movie_details_about_movie.png` | 1080x2424 |
| `movie_details_cast.png` | 1080x2424 |
| `movie_details_reviews.png` | 1080x2424 |
| `search_tab.png` | 1080x2424 |
| `watch_list_tab.png` | 1080x2424 |

### Hungry Food Ordering System

- **Project folder:** `Hungry screenshots/`
- **Cover:** `cover_photos/Food_system_cover_photo.png` — PNG, 232x314.
- **Screenshots:** 4; PNG; no missing files or exact duplicates in the source set.
- **Website screenshot prefix:** `/public/images/hungry/` (matching copies exist).

| Screenshot filename | Dimensions |
| --- | ---: |
| `Screenshot 2026-11-16 212900.png` | 286x582 |
| `Screenshot 2026-11-16 212914.png` | 281x576 |
| `Screenshot 2026-11-16 212925.png` | 283x585 |
| `Screenshot 2026-11-16 212933.png` | 279x582 |

### Clinic Management System

- **Project folder:** `Clinc screenshots/` (folder name is misspelled; see notes).
- **Cover:** `cover_photos/clinic_system_cover_photo.png` — PNG, 232x321.
- **Screenshots:** 5; PNG; no missing files or exact duplicates in the source set.
- **Website screenshot prefix:** `/public/images/clinic/` (matching copies exist).
- **Visual note:** These screenshots show an orthopedic clinic interface.

| Screenshot filename | Dimensions |
| --- | ---: |
| `Screenshot 2026-11-16 215410.png` | 978x483 |
| `Screenshot 2026-11-16 215425.png` | 937x462 |
| `Screenshot 2026-11-16 215441.png` | 960x470 |
| `Screenshot 2026-11-16 215459.png` | 972x485 |
| `Screenshot 2026-11-16 215529.png` | 816x482 |

### Hospital Management System

- **Project folder:** `Hospital/`
- **Cover:** `cover_photos/Hospital_mangment_system_cover_photo.png` — PNG, 258x357.
- **Screenshots:** 20; PNG; no missing files or exact duplicates in the source set.
- **Website screenshot prefix:** `/public/images/hospital/` (matching copies exist).
- **Attribution needs confirmation:** The folder and screenshot filenames refer to a biomedical information system, but inspected screenshots visibly identify an orthopedic clinic. That overlaps with the separate Clinic folder. Do not decide which screenshots belong to Hospital versus Clinic from the folder name alone.

| Screenshot filename | Dimensions |
| --- | ---: |
| `Biomedical information system project presentation+Github repo+DEMO.png` | 765x850 |
| `Biomedical information system project presentation+Github repo+DEMO (1).png` | 1135x579 |
| `Biomedical information system project presentation+Github repo+DEMO (2).png` | 1296x585 |
| `Biomedical information system project presentation+Github repo+DEMO (3).png` | 1352x690 |
| `Biomedical information system project presentation+Github repo+DEMO (4).png` | 1147x525 |
| `Biomedical information system project presentation+Github repo+DEMO (5).png` | 929x503 |
| `Biomedical information system project presentation+Github repo+DEMO (6).png` | 1186x604 |
| `Biomedical information system project presentation+Github repo+DEMO (7).png` | 1092x575 |
| `Biomedical information system project presentation+Github repo+DEMO (8).png` | 1117x582 |
| `Biomedical information system project presentation+Github repo+DEMO (9).png` | 994x517 |
| `Biomedical information system project presentation+Github repo+DEMO (10).png` | 873x451 |
| `Biomedical information system project presentation+Github repo+DEMO (11).png` | 836x398 |
| `Biomedical information system project presentation+Github repo+DEMO (12).png` | 1041x368 |
| `Biomedical information system project presentation+Github repo+DEMO (13).png` | 1778x745 |
| `Biomedical information system project presentation+Github repo+DEMO (14).png` | 693x799 |
| `Biomedical information system project presentation+Github repo+DEMO (15).png` | 712x844 |
| `Biomedical information system project presentation+Github repo+DEMO (16).png` | 1065x542 |
| `Biomedical information system project presentation+Github repo+DEMO (17).png` | 1211x435 |
| `Biomedical information system project presentation+Github repo+DEMO (18).png` | 1015x530 |
| `Biomedical information system project presentation+Github repo+DEMO (19).png` | 1115x514 |

### AI-Powered Bioinformatics

- **Project folder:** `Bioinformatics_project_photos/`
- **Cover:** `cover_photos/Bioinformatics_cover_photo.png` — PNG, 762x410.
- **Screenshots:** 5; PNG; no missing files or exact duplicates in the source set.
- **Current website copies:** None. Suggested static destination after approval: `/public/images/research/bioinformatics/`.

| Screenshot filename | Dimensions |
| --- | ---: |
| `Screenshot 2026-11-24 161157.png` | 359x275 |
| `Screenshot 2026-11-24 161205.png` | 356x266 |
| `Screenshot 2026-11-24 161250.png` | 363x279 |
| `Screenshot 2026-11-24 161325.png` | 958x462 |
| `Screenshot 2026-11-24 161336.png` | 660x390 |

### Student Stress Prediction

- **Project folder:** `stress_prediction_photos/`
- **Cover:** `cover_photos/stress_cover photo.png` — supplied and used as requested. The cover artwork says “EEG-Based Mental Disorder Prediction System,” while the project screenshots show PSS-10 questionnaire classification; the mapping was confirmed by the site owner.
- **Screenshots:** 5; PNG; no missing files or exact duplicates in the source set.
- **Current website copies:** None. Suggested static destination after approval: `/public/images/research/student-stress/`.

| Screenshot filename | Dimensions |
| --- | ---: |
| `Screenshot 2026-11-24 161650.png` | 582x224 |
| `Screenshot 2026-11-24 161716.png` | 588x416 |
| `Screenshot 2026-11-24 161742.png` | 542x432 |
| `Screenshot 2026-11-24 161750.png` | 381x310 |
| `Screenshot 2026-11-24 161803.png` | 570x251 |

### Microbiome Diversity Analysis

- **Project folder:** `Biostatistics_project_photos/`. The folder name is broader than the requested project title; inspected screenshots show microbiome diversity analysis (Shannon, Chao1, Jaccard, and model diagnostic plots).
- **Cover candidate:** `cover_photos/Biostatistics_cover_photo.png` — PNG, 596x319. The filename suggests a match, but confirm this is the intended Microbiome cover before using it.
- **Screenshots:** 8; PNG; no missing files or exact duplicates in the source set.
- **Current website copies:** None. Suggested static destination after approval: `/public/images/research/microbiome/`.

| Screenshot filename | Dimensions |
| --- | ---: |
| `Screenshot 2026-11-24 160703.png` | 756x453 |
| `Screenshot 2026-11-24 160716.png` | 724x502 |
| `Screenshot 2026-11-24 160727.png` | 793x579 |
| `Screenshot 2026-11-24 160745.png` | 829x570 |
| `Screenshot 2026-11-24 160759.png` | 846x523 |
| `Screenshot 2026-11-24 160815.png` | 866x627 |
| `Screenshot 2026-11-24 160850.png` | 682x465 |
| `Screenshot 2026-11-24 160925.png` | 709x450 |

## Cover-photo inventory

| Cover filename | Dimensions | Proposed project based on filename | Status |
| --- | ---: | --- | --- |
| `Bioinformatics_cover_photo.png` | 762x410 | AI-Powered Bioinformatics | Present |
| `Biostatistics_cover_photo.png` | 596x319 | Microbiome Diversity Analysis | Candidate; confirm |
| `clinic_system_cover_photo.png` | 232x321 | Clinic Management System | Present |
| `Food_system_cover_photo.png` | 232x314 | Hungry Food Ordering System | Present |
| `Hospital_mangment_system_cover_photo.png` | 258x357 | Hospital Management System | Present; screenshot attribution still needs confirmation |
| `Movie_cover_photo.png` | 1031x745 | Movie Web | Present |
| `stress_cover photo.png` | 1557x775 | Student Stress Prediction | Present; used at the site owner's direction despite the artwork's EEG/mental-disorder wording |
| `HR_Mangment_cover_photo.png` | 232x318 | HR Management System | Present |
| `Wazzafny_cover_photo.png` | 238x320 | Wazzafny | Present |

No cover file clearly names Movie Web or Student Stress Prediction. No cover files are currently mirrored under `public/images/`.

## Folder naming and attribution notes

- `Clinc screenshots/` appears to misspell **Clinic**.
- `HR_Mangmnet_System/` appears to misspell **Management**.
- `Biostatistics_project_photos/` does not use the requested project title, although the screenshot contents identify it as the microbiome analysis set.
- `Hospital/` is generic rather than misspelled; the visible orthopedic clinic branding creates a possible overlap with `Clinc screenshots/`. Confirm ownership of those 20 files before assigning them to separate site projects.
- The cover filenames `HR_Mangment_cover_photo.png` and `Hospital_mangment_system_cover_photo.png` also contain spelling errors. Original filenames have been preserved.

## Personal portrait and reference image

- **Use as the actual portrait:** `Yousef_photo.png` — PNG, 678x1150. This is the specifically named prepared portrait; use it as-is and do not remove its background again.
- **Composition/styling reference only:** `reference_photo_profile_yousef.png` — PNG, 1672x941. Do not use this as Yousef's portrait.
- The current website asset `public/images/founder/yousef-photo.png` is a different file (PNG, 678x2098; its SHA-256 differs from `Yousef_photo.png`). The current page references that public file. Do not treat it as a byte-identical copy of the requested portrait.
- No portrait files were modified.
