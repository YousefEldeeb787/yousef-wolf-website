const asset = (path) => path.startsWith('/') ? path : `/images/${path}`;
const image = (src, alt, className = '') => `<img class="${className}" src="${asset(src)}" alt="${alt}">`;
const pageLink = (path, label) => `<a href="${path}">${label}</a>`;

const copy = {
  en: {
    personal: {
      brand: 'Yousef Eldeeb',
      nav: [['/en/about', 'About'], ['/en/projects', 'Projects'], ['/en/contact', 'Contact']],
      heroKicker: 'SOFTWARE ENGINEER · FOUNDER · RESEARCHER',
      heroTitle: 'Engineering ideas into <em>useful reality.</em>',
      heroText: 'Software Engineer | Founder & CEO of WOLF. Software engineering student at Nile University, focused on backend development, practical digital products, data analysis, and machine learning.',
      primary: 'Explore my work',
      secondary: 'Meet WOLF',
      aboutTitle: 'A multidisciplinary mind for real-world systems.',
      aboutText: 'I am Yousef Eldeeb, a software engineering student at Nile University and the founder of WOLF. I am interested in backend engineering, practical product development, data analysis, machine learning, and automation. I learn by building and contributing to real projects, including biomedical and clinic systems, with the aim of turning complex problems into clear and useful software.',
      ctaTitle: 'Have a good problem?',
      ctaText: 'Let’s turn it into something that matters.',
      footer: 'Personal portfolio',
      language: 'العربية'
    },
    wolf: {
      brand: 'WOLF.',
      nav: [['/wolf/en/about', 'About WOLF'], ['/wolf/en/services', 'Services'], ['/wolf/en/work', 'Work'], ['/wolf/en/contact', 'Contact']],
      heroKicker: 'FOUNDER-LED DIGITAL STUDIO · BUILD · ANALYZE · AUTOMATE',
      heroTitle: 'Engineering ideas into <em>digital reality.</em>',
      heroText: 'WOLF builds practical software, turns data into insight, and automates repeatable work for businesses.',
      primary: 'Explore services',
      secondary: 'See our work',
      aboutTitle: 'Founder-led engineering for practical digital work.',
      aboutText: 'WOLF helps businesses build useful software, understand their data, and reduce repetitive work—with expertise matched to each project.',
      ctaTitle: 'Ready to build forward?',
      ctaText: 'Tell us where you want to make progress.',
      footer: 'WOLF Digital Studio',
      language: 'العربية'
    }
  },
  ar: {
    personal: {
      brand: 'يوسف الديب',
      nav: [['/ar/about', 'عن يوسف'], ['/ar/projects', 'المشاريع'], ['/ar/contact', 'تواصل']],
      heroKicker: 'مهندس برمجيات · مؤسس · باحث',
      heroTitle: 'أحوّل الأفكار إلى <em>واقع مفيد.</em>',
      heroText: 'مهندس برمجيات والمؤسس والرئيس التنفيذي لـ WOLF، وطالب هندسة برمجيات بجامعة النيل مهتم بالواجهات الخلفية والمنتجات الرقمية وتحليل البيانات.',
      primary: 'استكشف أعمالي',
      secondary: 'تعرّف على WOLF',
      aboutTitle: 'عقل متعدد التخصصات لبناء أنظمة للعالم الحقيقي.',
      aboutText: 'يقع عملي بين هندسة البرمجيات وعلوم البيانات والتفكير في المنتجات. أهتم بالتفاصيل التي تجعل النظام واضحاً وموثوقاً ومفيداً.',
      ctaTitle: 'لديك مشكلة جيدة؟',
      ctaText: 'لنحوّلها إلى شيء مهم.',
      footer: 'المحفظة الشخصية',
      language: 'English'
    },
    wolf: {
      brand: 'WOLF.',
      nav: [['/wolf/ar/about', 'عن WOLF'], ['/wolf/ar/services', 'الخدمات'], ['/wolf/ar/work', 'أعمالنا'], ['/wolf/ar/contact', 'تواصل']],
      heroKicker: 'استوديو WOLF الرقمي · بناء · تحليل · أتمتة',
      heroTitle: 'أنظمة رقمية من أجل <em>ما هو قادم.</em>',
      heroText: 'تتعاون WOLF مع الفرق الطموحة لبناء المنتجات وفهم البيانات وأتمتة العمل بينهما.',
      primary: 'استكشف الخدمات',
      secondary: 'شاهد أعمالنا',
      aboutTitle: 'استوديو متخصص للعمل الرقمي المؤثر.',
      aboutText: 'نجمع بين التفكير في المنتجات والانضباط الهندسي في تطوير الويب وأنظمة الأعمال وذكاء البيانات والأتمتة الذكية.',
      ctaTitle: 'مستعد للبناء إلى الأمام؟',
      ctaText: 'أخبر WOLF بما تريد تحقيقه.',
      footer: 'استوديو WOLF الرقمي',
      language: 'English'
    }
  }
};

const services = [
  ['web-development', 'Web development', 'Websites & E-commerce', 'Fast, expressive websites and commerce experiences designed around how your audience actually moves.', 'BUILD'],
  ['mobile-applications', 'Mobile applications', 'Mobile Applications', 'Focused mobile experiences that connect customers, teams, and the systems behind them.', 'BUILD'],
  ['business-systems', 'Business systems', 'Business Systems & Dashboards', 'Operational software that brings workflows, records, permissions, and decisions into one clear place.', 'BUILD'],
  ['data-analysis', 'Data analysis', 'Data Analysis & Reporting', 'Reliable reporting and decision-ready dashboards that make important patterns visible.', 'ANALYZE'],
  ['machine-learning', 'Machine learning', 'Predictive Analytics & Machine Learning', 'Practical models and evaluation workflows for teams ready to learn from their data.', 'ANALYZE'],
  ['web-scraping', 'Web scraping', 'Web Scraping & Competitor Monitoring', 'Structured collection and monitoring workflows that turn public web signals into useful intelligence.', 'AUTOMATE'],
  ['ai-automation', 'AI automation', 'AI Automation & Smart Assistants', 'Carefully scoped assistants and automations that give teams time back without hiding the logic.', 'AUTOMATE']
];

const projects = [
  {
    slug: 'wazzafny',
    title: 'Wazzafny – Job Recruitment Platform',
    description: 'A collaborative graduation project for job discovery, employer listings, and applications.',
    category: 'Collaborative software project',
    cover: '/cover_photos/Wazzafny_cover_photo.png',
    overview: 'A job-recruitment platform created as a collaborative graduation project.',
    problem: 'Job seekers and employers need a shared place to discover opportunities and manage recruitment activity.',
    solution: 'The supplied project screens present a recruitment experience with job search, employer, and application areas.',
    features: ['Job search interface', 'Employer and application areas', 'Recruitment-focused navigation'],
    technologies: ['The supplied screens do not verify a technology stack.'],
    contribution: 'Collaborative graduation project. Yousef’s verified contribution was backend development.',
    gallery: [
      'wazzafny/Screenshot 2026-11-16 214920.png',
      'wazzafny/Screenshot 2026-11-16 214948.png',
      'wazzafny/Screenshot 2026-11-16 215045.png'
    ]
  },
  {
    slug: 'hr-management-system',
    title: 'HR Management System',
    description: 'A mobile HR interface for employee records, dashboard summaries, and everyday HR operations.',
    category: 'Business software',
    cover: '/cover_photos/HR_Mangment_cover_photo.png',
    overview: 'A mobile HR management interface documented by seven supplied screens.',
    problem: 'HR teams need a clear view of employee information and core operational summaries.',
    solution: 'The interface brings employee records, dashboard information, and HR navigation into one mobile experience.',
    features: ['HR administrator dashboard', 'Employee search and department filters', 'Employee editing fields', 'Attendance and payroll views'],
    technologies: ['Firebase Authentication is shown in the supplied screens.', 'The app framework and backend are not verified.'],
    contribution: 'Individual contribution details are not documented in the supplied materials.',
    gallery: [
      'hr/Screenshot 2026-11-21 225525.png',
      'hr/Screenshot 2026-11-21 225533.png',
      'hr/Screenshot 2026-11-21 225541.png',
      'hr/Screenshot 2026-11-21 225552.png',
      'hr/Screenshot 2026-11-21 225610.png',
      'hr/Screenshot 2026-11-21 225619.png',
      'hr/Screenshot 2026-11-21 225633.png'
    ]
  },
  {
    slug: 'movie-web',
    title: 'Movie Web – Movie Discovery Platform',
    description: 'A movie discovery interface with browsing, search, movie details, cast, reviews, and a watchlist.',
    category: 'Software project',
    cover: '/cover_photos/Movie_cover_photo.png',
    overview: 'A mobile movie-discovery interface represented by seven supplied screens.',
    problem: 'Movie browsing, search, and title information can be difficult to explore across disconnected views.',
    solution: 'The supplied interface groups discovery, search, movie details, cast, reviews, and saved titles.',
    features: ['Home and category browsing', 'Search and empty-search states', 'Movie details, cast, and reviews', 'Watchlist'],
    technologies: ['The supplied screens do not verify a technology stack, API, or backend.'],
    contribution: 'Individual contribution details are not documented in the supplied materials.',
    gallery: [
      'movie/home_screen.png',
      'movie/search_tab.png',
      'movie/empty_search_tab.png',
      'movie/movie_details_about_movie.png',
      'movie/movie_details_cast.png',
      'movie/movie_details_reviews.png',
      'movie/watch_list_tab.png'
    ]
  },
  {
    slug: 'hungry',
    title: 'Hungry – Food Ordering System',
    description: 'A collaborative food-ordering project, presented through its supplied application screens.',
    category: 'Collaborative software project',
    cover: '/cover_photos/Food_system_cover_photo.png',
    overview: 'A food-ordering application project with four supplied interface screenshots.',
    problem: 'Customers need a straightforward digital experience for exploring food and placing orders.',
    solution: 'The project explores a mobile food-ordering interface; implementation details are not available in the supplied materials.',
    features: ['Food-ordering interface shown in supplied screens'],
    technologies: ['The supplied screens do not verify a technology stack.'],
    contribution: 'Collaborative work. Individual contributions are not specified; sole ownership is not claimed.',
    gallery: [
      'hungry/Screenshot 2026-11-16 212900.png',
      'hungry/Screenshot 2026-11-16 212914.png',
      'hungry/Screenshot 2026-11-16 212925.png',
      'hungry/Screenshot 2026-11-16 212933.png'
    ]
  },
  {
    slug: 'clinic-management-system',
    title: 'Clinic Management System',
    description: 'A clinic interface for appointments, patient information, and coordinating day-to-day care.',
    category: 'Healthcare software',
    cover: '/cover_photos/clinic_system_cover_photo.png',
    overview: 'A clinic management interface represented by five supplied screenshots.',
    problem: 'Clinic teams need a clear way to coordinate appointment and patient workflows.',
    solution: 'The supplied interface presents clinic operations and appointment-related screens.',
    features: ['Clinic operations dashboard', 'Appointment booking screen', 'Patient and clinic workflow screens'],
    technologies: ['The supplied screens do not verify a technology stack.'],
    contribution: 'Individual contribution details are not documented in the supplied materials.',
    gallery: [
      'clinic/Screenshot 2026-11-16 215410.png',
      'clinic/Screenshot 2026-11-16 215425.png',
      'clinic/Screenshot 2026-11-16 215441.png',
      'clinic/Screenshot 2026-11-16 215459.png',
      'clinic/Screenshot 2026-11-16 215529.png'
    ]
  },
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System',
    description: 'A biomedical information-system project represented by its supplied healthcare workflow screens.',
    category: 'Healthcare software',
    cover: '/cover_photos/Hospital_mangment_system_cover_photo.png',
    overview: 'A biomedical information-system project represented by the screenshots in its supplied Hospital folder.',
    problem: 'Healthcare workflows involve patient and operational information that needs to be presented clearly.',
    solution: 'The supplied project screens present a healthcare information-system interface.',
    features: ['Healthcare information-system screens', 'Patient and clinic workflow interface'],
    technologies: ['The supplied screens do not verify a technology stack.'],
    contribution: 'Individual contribution details are not documented in the supplied materials. No commercial client delivery is claimed.',
    gallery: [
      'hospital/Biomedical information system project presentation+Github repo+DEMO.png',
      'hospital/Biomedical information system project presentation+Github repo+DEMO (1).png',
      'hospital/Biomedical information system project presentation+Github repo+DEMO (2).png',
      'hospital/Biomedical information system project presentation+Github repo+DEMO (3).png',
      'hospital/Biomedical information system project presentation+Github repo+DEMO (4).png',
      'hospital/Biomedical information system project presentation+Github repo+DEMO (5).png',
      'hospital/Biomedical information system project presentation+Github repo+DEMO (6).png',
      'hospital/Biomedical information system project presentation+Github repo+DEMO (7).png',
      'hospital/Biomedical information system project presentation+Github repo+DEMO (8).png'
    ]
  },
  {
    slug: 'bioinformatics-virulence-factor-discovery',
    title: 'AI-Powered Bioinformatics – Virulence Factor Discovery',
    description: 'A collaborative genome-analysis pipeline combining a fine-tuned ESM-2 deep-learning model with XGBoost and sequence evidence to rank bacterial virulence-factor candidates.',
    category: 'Research · Bioinformatics',
    cover: '/cover_photos/Bioinformatics_cover_photo.png',
    overview: 'A collaborative bacterial-genome analysis pipeline that combines a fine-tuned ESM-2 model with an XGBoost evidence-fusion model to rank candidate virulence factors.',
    problem: 'Sequence similarity alone can miss candidate virulence factors that differ from known references, while separate evidence signals need to be considered together.',
    solution: 'Prodigal gene predictions are scored by a fine-tuned ESM-2 model, then combined with BLAST homology and CDD domain evidence by an XGBoost model.',
    features: ['Prodigal gene prediction with genomic coordinates', 'Fine-tuned ESM-2 protein-sequence classifier', 'XGBoost fusion of model, BLAST, and domain evidence', 'Pathogenicity-island scan using GC-content shifts and nearby mobile-element signals', 'React and FastAPI genome-analysis application'],
    technologies: ['Python', 'Fine-tuned ESM-2', 'XGBoost', 'Prodigal', 'BLAST', 'HMMER / CDD', 'FastAPI', 'React'],
    contribution: 'Developed collaboratively with a collaborator; the repository does not specify an individual contribution breakdown.',
    gallery: [
      '/Bioinformatics_project_photos/Screenshot 2026-11-24 161157.png',
      '/Bioinformatics_project_photos/Screenshot 2026-11-24 161205.png',
      '/Bioinformatics_project_photos/Screenshot 2026-11-24 161250.png',
      '/Bioinformatics_project_photos/Screenshot 2026-11-24 161325.png',
      '/Bioinformatics_project_photos/Screenshot 2026-11-24 161336.png'
    ]
  },
  {
    slug: 'student-stress-prediction',
    title: 'Student Stress Prediction – Machine Learning',
    description: 'A machine-learning study comparing classifiers for student stress using questionnaire and demographic data.',
    category: 'Research · Evaluated Machine Learning Models',
    cover: '/cover_photos/stress_cover photo.png',
    overview: 'A machine-learning project exploring stress-level classification from student questionnaire and demographic data.',
    problem: 'The study evaluates how questionnaire and demographic features can be used to distinguish student stress levels.',
    solution: 'The notebook compares five classifiers using preprocessing, feature selection, and stratified evaluation.',
    features: ['Low, moderate, and high stress class analysis', 'PSS-10 feature correlation', 'Comparison of five classifiers', 'Confusion matrix and feature-reduction analysis'],
    technologies: ['Python', 'Jupyter Notebook', 'Random Forest', 'XGBoost', 'Logistic Regression', 'SVM', 'KNN'],
    contribution: 'The repository evidence attributes the project to Yousef; no collaborator contribution breakdown is listed.',
    gallery: [
      '/stress_prediction_photos/Screenshot 2026-11-24 161650.png',
      '/stress_prediction_photos/Screenshot 2026-11-24 161716.png',
      '/stress_prediction_photos/Screenshot 2026-11-24 161742.png',
      '/stress_prediction_photos/Screenshot 2026-11-24 161750.png',
      '/stress_prediction_photos/Screenshot 2026-11-24 161803.png'
    ]
  },
  {
    slug: 'microbiome-diversity',
    title: 'Microbiome Diversity – Biostatistical Analysis',
    description: 'An R-based statistical analysis of microbiome diversity across antibiotic-associated diarrhea records.',
    category: 'Research · Biostatistics',
    cover: '/cover_photos/Biostatistics_cover_photo.png',
    overview: 'A statistical analysis of microbiome diversity in 335 antibiotic-associated-diarrhea records.',
    problem: 'The analysis examines how microbiome diversity measures vary across time points, antibiotic classes, and outcomes.',
    solution: 'An R workflow applies diversity measures, distance analysis, statistical tests, confidence intervals, and regression.',
    features: ['Shannon and Chao1 diversity indices', 'Jaccard distance', 'Group comparisons and confidence intervals', 'Regression and diagnostic visualizations'],
    technologies: ['R'],
    contribution: 'The repository README identifies Yousef as an author; no collaborator contribution breakdown is supplied.',
    gallery: [
      '/Biostatistics_project_photos/Screenshot 2026-11-24 160703.png',
      '/Biostatistics_project_photos/Screenshot 2026-11-24 160716.png',
      '/Biostatistics_project_photos/Screenshot 2026-11-24 160727.png',
      '/Biostatistics_project_photos/Screenshot 2026-11-24 160745.png',
      '/Biostatistics_project_photos/Screenshot 2026-11-24 160759.png',
      '/Biostatistics_project_photos/Screenshot 2026-11-24 160815.png',
      '/Biostatistics_project_photos/Screenshot 2026-11-24 160850.png',
      '/Biostatistics_project_photos/Screenshot 2026-11-24 160925.png'
    ]
  }
];

const personalSoftwareProjectOrder = [
  'clinic-management-system',
  'wazzafny',
  'movie-web'
];
const researchProjectOrder = [
  'bioinformatics-virulence-factor-discovery',
  'student-stress-prediction',
  'microbiome-diversity'
];
const projectAliases = {
  'hospital-system': 'hospital-management-system',
  'clinic-platform': 'clinic-management-system',
  'movie-website': 'movie-web',
  'hr-management': 'hr-management-system',
  'student-stress': 'student-stress-prediction',
  'virulence-analysis': 'bioinformatics-virulence-factor-discovery',
  'microbiome-analysis': 'microbiome-diversity'
};
const wolfProjectOrder = [
  'hospital-management-system',
  'hr-management-system',
  'hungry',
  'clinic-management-system',
  'wazzafny',
  'movie-web'
];
const projectsInOrder = (slugs) => slugs.map((slug) => projects.find((project) => project.slug === slug));

const getRoute = () => {
  const parts = window.location.pathname.replace(/\/+$/, '').split('/').filter(Boolean);
  const isWolf = parts[0] === 'wolf';
  const language = (isWolf ? parts[1] : parts[0]) === 'ar' ? 'ar' : 'en';
  const section = isWolf ? parts.slice(2) : parts.slice(1);
  return { isWolf, language, section: section.join('/') || 'home' };
};

const renderHeader = (site, language, isWolf) => {
  const langPath = isWolf ? `/wolf/${language === 'en' ? 'ar' : 'en'}/` : `/${language === 'en' ? 'ar' : 'en'}/`;
  const brand = isWolf
    ? `<img class="wolf-brand-logo" src="${asset('brand/wolf-logo.png')}" alt="">`
    : `<span class="brand-mark">Y</span><span>${site.brand}</span>`;
  return `<header class="site-header${isWolf ? ' wolf-site-header' : ''}"><a class="brand" href="${isWolf ? `/wolf/${language}/` : `/${language}/`}" aria-label="${site.brand} home">${brand}</a><nav class="desktop-nav" aria-label="Primary navigation">${site.nav.map(([href, label]) => pageLink(href, label)).join('')}</nav><div class="header-actions"><a class="experience-link" href="${isWolf ? `/${language}/` : `/wolf/${language}/`}">${isWolf ? (language === 'ar' ? 'المؤسس' : 'Founder') : 'WOLF'}</a><a class="language-switch" href="${langPath}">${site.language}</a><a class="header-cta" href="${isWolf ? `/wolf/${language}/contact` : `/${language}/contact`}">${language === 'ar' ? 'لنتحدث' : 'Let’s talk'} <span>↗</span></a></div><button class="menu-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button></header>`;
};

const renderFooter = (site, language, isWolf) => `<footer class="shell"><span>${site.footer}</span><span>© 2026 ${isWolf ? 'WOLF DIGITAL STUDIO' : 'YOUSEF ELDEEB'}</span><span class="mono">${isWolf ? 'BUILD · ANALYZE · AUTOMATE' : 'BUILT WITH INTENTION'}</span></footer>`;

const renderHero = (site, language, isWolf) => `<section class="hero shell ${isWolf ? 'wolf-home-hero' : 'personal-home-hero'}"><div class="hero-copy"><p class="eyebrow"><span class="status-dot"></span>${site.heroKicker}</p><h1>${site.heroTitle}</h1><p class="hero-lede">${site.heroText}</p><div class="hero-actions"><a class="button button-primary" href="${isWolf ? `/wolf/${language}/services` : `/${language}/projects`}">${site.primary} <span>↗</span></a><a class="button button-ghost" href="${isWolf ? `/wolf/${language}/work` : `/wolf/${language}/`}">${site.secondary} <span>→</span></a></div><div class="hero-meta"><div><strong>01</strong><span>${isWolf ? 'BUILD' : 'MAKE'}<small>${language === 'ar' ? 'منتجات رقمية' : 'Digital products'}</small></span></div><div><strong>02</strong><span>${isWolf ? 'ANALYZE' : 'STUDY'}<small>${language === 'ar' ? 'ذكاء البيانات' : 'Data intelligence'}</small></span></div><div><strong>03</strong><span>${isWolf ? 'AUTOMATE' : 'SHARE'}<small>${language === 'ar' ? 'تدفقات ذكية' : (isWolf ? 'Smart workflows' : 'Useful systems')}</small></span></div></div></div>${isWolf ? `<div class="hero-visual wolf-hero-visual"><img src="${asset('brand/wolf-hero-photo.png')}" alt="A WOLF-branded hoodie in a cyan-lit digital environment"><span class="visual-label">BUILD · ANALYZE · AUTOMATE</span></div>` : `<div class="hero-visual personal-hero-visual"><div class="scan-grid"></div><div class="portrait-cutout">${image('founder/yousef-photo.png', 'Yousef Eldeeb founder portrait cutout')}<span class="portrait-glow"></span></div><span class="visual-label">YE / 2026 · SOFTWARE ENGINEERING</span></div>`}</section>`;

const renderAbout = (site, language, isWolf) => isWolf
  ? `<section class="section shell wolf-home-about"><div class="wolf-home-about-panel"><div class="wolf-home-about-photo"><img src="${asset('brand/wolf-hero-photo.png')}" alt=""></div><div class="wolf-home-about-copy"><p class="eyebrow">ABOUT WOLF</p><h2>${site.aboutTitle}</h2><p>${site.aboutText}</p><a class="text-link" href="/wolf/${language}/about">${language === 'ar' ? 'اعرف المزيد' : 'Learn more'} <span>↗</span></a></div><div class="wolf-home-about-facts"><div><small>${language === 'ar' ? 'المنهج' : 'APPROACH'}</small><strong>BUILD · ANALYZE · AUTOMATE</strong></div><div><small>${language === 'ar' ? 'النموذج' : 'MODEL'}</small><strong>${language === 'ar' ? 'قيادة المؤسس · خبرات متخصصة' : 'Founder-led · specialist-enabled'}</strong></div><div><small>${language === 'ar' ? 'التركيز' : 'FOCUS'}</small><strong>${language === 'ar' ? 'أنظمة رقمية عملية' : 'Useful digital systems'}</strong></div></div></div></section>`
  : `<section class="section shell split-section"><div><p class="eyebrow">THE FOUNDER</p><h2>${site.aboutTitle}</h2></div><div class="rich-copy"><p>${site.aboutText}</p><div class="detail-grid"><div><small>${language === 'ar' ? 'الموقع' : 'BASED IN'}</small><strong>Cairo, Egypt</strong></div><div><small>${language === 'ar' ? 'التخصص' : 'FOCUS'}</small><strong>Software & data</strong></div><div><small>${language === 'ar' ? 'الوجهة' : 'NEXT'}</small><strong>Research with purpose</strong></div></div></div></section>`;

const renderWolfAbout = (language) => {
  const ar = language === 'ar';
  return `<div class="wolf-about-page">
    <section class="section shell wolf-about-hero">
      <div class="wolf-about-copy">
        <p class="eyebrow">${ar ? 'عن WOLF · استوديو رقمي يقوده المؤسس' : 'WOLF / A FOUNDER-LED DIGITAL STUDIO'}</p>
        <h1>${ar ? 'أنظمة رقمية<br><em>لمشكلات واقعية.</em>' : 'Digital systems<br><em>for real work.</em>'}</h1>
        <p class="detail-lede">${ar ? 'تساعد WOLF الشركات على تبسيط سير العمل، وفهم بياناتها، وبناء أدوات رقمية عملية.' : 'WOLF helps businesses simplify workflows, make sense of their data, and build practical digital tools around real operational needs.'}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/wolf/${language}/contact">${ar ? 'ناقش مشروعك' : 'Talk about your project'} <span>↗</span></a>
          <a class="button button-ghost" href="#wolf-method">${ar ? 'كيف نعمل' : 'How we work'} <span>↓</span></a>
        </div>
        <div class="wolf-about-meta"><span>${ar ? 'قيادة مباشرة من المؤسس' : 'FOUNDER-LED'}</span><span>${ar ? 'خبرات حسب احتياج المشروع' : 'EXPERTISE THAT FITS THE WORK'}</span></div>
      </div>
      <div class="wolf-about-visual">
        <img src="${asset('brand/wolf-hero-photo.png')}" alt="">
        <span class="wolf-about-photo-index">WOLF / DIGITAL STUDIO</span>
        <div class="wolf-about-photo-caption"><span>${ar ? 'البناء · التحليل · الأتمتة' : 'BUILD · ANALYZE · AUTOMATE'}</span><strong>${ar ? 'تقنية حول احتياجات العمل' : 'Technology shaped around real work'}</strong></div>
      </div>
    </section>
    <section class="section shell wolf-about-section" id="wolf-problems">
      <div class="section-heading-row"><div><p class="eyebrow">${ar ? 'ما الذي نساعد في حله' : 'WHERE WE HELP'}</p><h2>${ar ? 'اجعل العمل المعقد<br><em>أوضح وأسهل.</em>' : 'Make complex work<br><em>clearer and more useful.</em>'}</h2></div><p class="heading-aside">${ar ? 'نبدأ من احتياج واضح، ثم نختار التقنية المناسبة دون إضافة تعقيد غير ضروري.' : 'Start with a clear need, then choose the technology that helps without adding unnecessary complexity.'}</p></div>
      <div class="wolf-challenge-grid">
        <article><span class="project-index">01 / WORKFLOWS</span><h3>${ar ? 'عمليات متفرقة' : 'Disconnected workflows'}</h3><p>${ar ? 'نربط الخطوات والمعلومات في أدوات أعمال أوضح وأسهل في الصيانة.' : 'Bring handoffs and records into business tools that are clearer to use and maintain.'}</p></article>
        <article><span class="project-index">02 / DATA</span><h3>${ar ? 'بيانات يصعب الاستفادة منها' : 'Data without direction'}</h3><p>${ar ? 'نجهز البيانات لتجيب عن أسئلة محددة وتدعم قرارات عملية.' : 'Shape data into analysis and reporting that answer specific questions.'}</p></article>
        <article><span class="project-index">03 / REPETITION</span><h3>${ar ? 'مهام متكررة' : 'Repetitive work'}</h3><p>${ar ? 'نؤتمت المهام المحددة مع إبقاء المنطق والتحكم واضحين للفريق.' : 'Automate defined tasks while keeping the logic and controls understandable.'}</p></article>
      </div>
    </section>
    <section class="section shell wolf-about-section wolf-method-section" id="wolf-method">
      <div class="section-heading-row"><div><p class="eyebrow">${ar ? 'منهج WOLF' : 'THE WOLF METHOD'}</p><h2>${ar ? 'ثلاثة مسارات.<br><em>هدف عملي واحد.</em>' : 'Three disciplines.<br><em>One practical goal.</em>'}</h2></div><p class="heading-aside">${ar ? 'نمزج المسارات عند الحاجة، ونبقي النطاق والقرارات واضحين.' : 'The disciplines can work together or stand alone; scope and decisions stay clear.'}</p></div>
      <div class="wolf-method-grid">
        <article><span class="project-index">01</span><p class="eyebrow">BUILD</p><h3>${ar ? 'ابنِ ما يحتاجه العمل' : 'Build for the work'}</h3><p>${ar ? 'مواقع وأنظمة وتطبيقات عملية تبدأ من المستخدم وسير العمل.' : 'Websites, systems, and applications shaped around users and workflows.'}</p></article>
        <article><span class="project-index">02</span><p class="eyebrow">ANALYZE</p><h3>${ar ? 'حوّل البيانات إلى فهم' : 'Make data useful'}</h3><p>${ar ? 'تحليل وتقارير ونماذج تخدم سؤالاً واضحاً.' : 'Analysis, reporting, and models built to serve a clear question.'}</p></article>
        <article><span class="project-index">03</span><p class="eyebrow">AUTOMATE</p><h3>${ar ? 'بسّط العمل المتكرر' : 'Reduce repetition'}</h3><p>${ar ? 'أتمتة مدروسة تربط الأدوات وتوفر خطوات يدوية.' : 'Thoughtful automation that connects tools and reduces manual steps.'}</p></article>
      </div>
    </section>
    <section class="section shell wolf-purpose-section">
      <div class="wolf-purpose-card"><p class="eyebrow">${ar ? 'رسالتنا' : 'OUR MISSION'}</p><h2>${ar ? 'جعل التقنية المفيدة<br><em>أسهل في التطبيق.</em>' : 'Make useful technology<br><em>easier to put to work.</em>'}</h2><p>${ar ? 'نحل مشكلات محددة بهندسة واضحة وقرارات يمكن فهمها.' : 'Solve focused problems with clear engineering and understandable decisions.'}</p></div>
      <div class="wolf-purpose-card wolf-purpose-vision"><p class="eyebrow">${ar ? 'رؤيتنا' : 'OUR VISION'}</p><h2>${ar ? 'أنظمة رقمية<br><em>تمنح العمل وضوحاً.</em>' : 'Digital systems<br><em>that make work clearer.</em>'}</h2><p>${ar ? 'مستقبل تستخدم فيه الفرق التقنية بثقة، بما يناسب احتياجاتها وقدراتها.' : 'A future where teams can use technology with confidence, at a scale that fits their needs.'}</p></div>
    </section>
    <section class="section shell wolf-approach-section">
      <div class="section-heading-row"><div><p class="eyebrow">${ar ? 'طريقة العمل' : 'PROJECT APPROACH'}</p><h2>${ar ? 'خطوات صغيرة.<br><em>قرارات واضحة.</em>' : 'Small steps.<br><em>Clear decisions.</em>'}</h2></div><p class="heading-aside">${ar ? 'نحدد النطاق والنتيجة المتوقعة قبل اختيار الحل.' : 'Agree on the scope and intended outcome before choosing a solution.'}</p></div>
      <div class="wolf-approach-grid">
        <article><span>01</span><h3>${ar ? 'افهم' : 'Understand'}</h3><p>${ar ? 'حدد المستخدمين والقيود وما الذي يعنيه النجاح.' : 'Define users, constraints, and what success should mean.'}</p></article>
        <article><span>02</span><h3>${ar ? 'ابنِ وراجع' : 'Build and review'}</h3><p>${ar ? 'طوّر الحل على مراحل وراجعه مقابل سير العمل الفعلي.' : 'Develop in stages and review against the real workflow.'}</p></article>
        <article><span>03</span><h3>${ar ? 'سلّم بوضوح' : 'Hand over clearly'}</h3><p>${ar ? 'وثّق ما تم إنجازه والقرارات والخطوات التالية.' : 'Document the outcome, key decisions, and next steps.'}</p></article>
      </div>
      <div class="wolf-founder-model"><div><p class="eyebrow">${ar ? 'نموذج العمل' : 'HOW WOLF IS BUILT'}</p><h3>${ar ? 'قيادة مباشرة من المؤسس، وخبرات حسب الحاجة.' : 'Founder-led, with expertise matched to the work.'}</h3></div><p>${ar ? 'يقود يوسف تحديد النطاق والهندسة والتواصل. وعندما يتطلب المشروع خبرة إضافية، يمكن إشراك متخصصين في الجزء المناسب من العمل.' : 'Yousef leads scoping, engineering, and communication. When a project calls for expertise beyond its core scope, specialists can contribute to the relevant stage.'}</p></div>
    </section>
    <section class="section shell cta-band wolf-about-cta"><div><p class="eyebrow">${ar ? 'ابدأ بمشكلة واضحة' : 'START WITH A CLEAR NEED'}</p><h2>${ar ? 'ما الذي تريد تحسينه؟' : 'What would you like to improve?'}</h2><p>${ar ? 'أخبرنا بما يعيق العمل، ولنحدد الخطوة المناسبة.' : 'Share what is getting in the way, and we can define a sensible next step.'}</p></div><a class="button button-primary" href="/wolf/${language}/contact">${ar ? 'تواصل مع WOLF' : 'Contact WOLF'} <span>↗</span></a></section>
  </div>`;
};

const renderFounderAbout = (language) => {
  const ar = language === 'ar';
  const socialLabel = ar ? 'الملفات المهنية' : 'Professional profiles';
  return `<section class="section shell founder-about">
    <div class="founder-about-grid">
      <div class="founder-intro">
        <p class="eyebrow">${ar ? 'مهندس برمجيات · المؤسس والرئيس التنفيذي لـ WOLF' : 'SOFTWARE ENGINEER · FOUNDER & CEO OF WOLF'}</p>
        <h1>${ar ? 'يوسف<br><em>الديب.</em>' : 'Yousef<br><em>Eldeeb.</em>'}</h1>
        <p class="detail-lede">${ar ? 'أركز على بناء أنظمة خلفية موثوقة باستخدام .NET، وأستكشف كيف يمكن لعلوم البيانات والتعلم الآلي والأتمتة أن تجعل التقنية أكثر فائدة.' : 'I focus on reliable backend systems with .NET, while exploring how data science, machine learning, and automation can make technology more useful.'}</p>
        <nav class="founder-social-links" aria-label="${socialLabel}">
          <a class="button button-ghost founder-social-link" href="https://github.com/YousefEldeeb787" target="_blank" rel="noopener noreferrer" aria-label="${ar ? 'ملف يوسف على GitHub' : 'Yousef on GitHub'}">GitHub <span aria-hidden="true">↗</span></a>
          <a class="button button-ghost founder-social-link" href="https://www.linkedin.com/in/yousef-eldeeb-0aab6a304" target="_blank" rel="noopener noreferrer" aria-label="${ar ? 'ملف يوسف على LinkedIn' : 'Yousef on LinkedIn'}">LinkedIn <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
      <div class="portrait-cutout founder-cutout">${image('founder/yousef-photo.png', ar ? 'صورة يوسف الديب الشخصية' : 'Yousef Eldeeb founder portrait')}<span class="portrait-glow"></span></div>
    </div>
    <div class="founder-story">
      <div><p class="eyebrow">${ar ? 'طريقة عملي' : 'HOW I WORK'}</p><h2>${ar ? 'تقنية تبدأ<br><em>بالإنصات.</em>' : 'Useful software<br><em>starts with listening.</em>'}</h2></div>
      <div>
        <p>${ar ? 'أؤمن أن البرمجيات الجيدة تبدأ بفهم الناس وتحدياتهم وما يحتاجون إليه فعلاً. أستمع جيداً، وأوضح المتطلبات، وأتواصل بوضوح حتى يظل العمل موجهاً نحو نتيجة مفيدة.' : 'I believe great software starts with understanding people, their challenges, and what they truly need. I listen carefully, clarify requirements, and communicate clearly to keep the work focused on a useful outcome.'}</p>
        <p>${ar ? 'علّمتني خبرتي التقنية والبحثية وأدواري القيادية أهمية تحمّل المسؤولية والاهتمام بالتفاصيل. هدفي تحويل الأفكار إلى حلول عملية يمكن الاعتماد عليها.' : 'My technical, research, and leadership experience has taught me to take responsibility and pay attention to detail. My goal is to turn ideas into practical solutions people can depend on.'}</p>
      </div>
    </div>
    <div class="founder-credentials">
      <div class="founder-credentials-grid">
        <article class="founder-credential">
          <p class="eyebrow">${ar ? 'التعليم' : 'EDUCATION'}</p>
          <h3>${ar ? 'تقنية المعلومات وعلوم الحاسب' : 'Information Technology & Computer Science'}</h3>
          <p>${ar ? 'جامعة النيل' : 'Nile University'}</p>
          <p class="founder-credential-detail">${ar ? 'تقدير ممتاز · المعدل التراكمي 3.7 من 4.0' : 'Excellent academic standing · GPA: 3.7/4.0'}</p>
        </article>
        <article class="founder-credential">
          <p class="eyebrow">${ar ? 'القيادة والإرشاد' : 'LEADERSHIP & MENTORSHIP'}</p>
          <ul>
            <li>${ar ? 'مرشد وقائد فريق، IEEE Research Student Branch، جامعة النيل' : 'Mentor & Team Leader, IEEE Research Student Branch, Nile University'}</li>
            <li>${ar ? 'مرشد هندسة برمجيات، برنامج Microsoft بجامعة النيل' : 'Software Engineering Mentor, Microsoft program at Nile University'}</li>
          </ul>
        </article>
        <article class="founder-credential founder-credential-skills">
          <p class="eyebrow">${ar ? 'المهارات التقنية' : 'TECHNICAL SKILLS'}</p>
          <div class="founder-skill-groups">
            <div class="founder-skill-group">
              <h4>${ar ? 'الأنظمة الخلفية والمتكاملة' : 'Backend & full-stack'}</h4>
              <p>.NET · ASP.NET Core · REST APIs · SQL Server · Entity Framework Core</p>
            </div>
            <div class="founder-skill-group">
              <h4>${ar ? 'الهندسة وتصميم الأنظمة' : 'Engineering & system design'}</h4>
              <p>${ar ? 'خبرة في تطوير الأنظمة الخلفية، وتصميم قواعد البيانات وهندسة البرمجيات وتصميم الأنظمة والأنظمة كاملة المكدس، مع مرونة في استخدام لغات الواجهات الخلفية بحسب احتياج النظام.' : 'Experience in backend development, database design, software architecture, system design, and full-stack systems, with flexibility across backend languages.'}</p>
            </div>
            <div class="founder-skill-group">
              <h4>${ar ? 'البيانات والذكاء الاصطناعي والأتمتة' : 'Data, AI & automation'}</h4>
              <p>${ar ? 'تحليل البيانات البيولوجية · تحليل البيانات · التعلم الآلي · التعلم العميق · هندسة الذكاء الاصطناعي · UiPath · أتمتة العمليات الروبوتية (RPA).' : 'Biological data analysis · data analysis · machine learning · deep learning · AI engineering · UiPath · robotic process automation (RPA).'}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>`;
};

const renderCards = (items, className = 'card-grid') => `<div class="${className}">${items.map((item) => `<article class="card"><span class="project-index">${item[0]}</span><h3>${item[1]}</h3><p>${item[2]}</p><a class="text-link" href="${item[3]}">${item[4]} <span>↗</span></a></article>`).join('')}</div>`;

const renderProjectCards = (items, language, isWolf) => {
  const base = isWolf ? `/wolf/${language}/work` : `/${language}/projects`;
  return `<div class="card-grid project-grid">${items.map((project) => {
    const coverStyle = ['wazzafny', 'hr-management-system', 'hungry', 'clinic-management-system', 'hospital-management-system'].includes(project.slug) ? 'cover-contain' : '';
    const coverAlt = `${project.title} cover`;
    const action = language === 'ar' ? 'عرض تفاصيل المشروع' : 'View Project';
    const researchHighlight = project.slug === 'bioinformatics-virulence-factor-discovery';
    const highlightLabel = language === 'ar' ? 'التعلم العميق + التعلم الآلي' : 'Deep Learning + Machine Learning';
    return `<article class="project-card${researchHighlight ? ' research-highlight' : ''}"><a class="project-card-cover ${coverStyle}" href="${base}/${project.slug}" aria-label="${action}: ${project.title}">${image(project.cover, coverAlt)}</a><div class="project-card-body"><span class="project-category">${project.category}</span>${researchHighlight ? `<span class="project-highlight-label">${highlightLabel}</span>` : ''}<h3>${project.title}</h3><p>${project.description}</p><a class="text-link" href="${base}/${project.slug}">${action} <span>↗</span></a></div></article>`;
  }).join('')}</div>`;
};

const renderProjectNavigation = (language) => {
  const ar = language === 'ar';
  const href = ar ? '/wolf/ar/work' : '/wolf/en/work';
  const title = ar ? 'استكشف أنظمة WOLF' : 'Explore WOLF Systems';
  const description = ar
    ? 'اكتشف أنظمتنا البرمجية الأكبر وحلولنا الرقمية التي طوّرناها من خلال WOLF.'
    : 'Discover our larger software systems and digital solutions built through WOLF.';
  const label = ar ? 'استكشف مشاريع WOLF' : 'Explore WOLF Projects →';
  return `<div class="project-navigation-grid project-navigation-single"><article class="project-navigation-card"><h3>${title}</h3><p>${description}</p><a class="button button-primary" href="${href}">${label}</a></article></div>`;
};

const renderWolfResearchNavigation = (language) => {
  const ar = language === 'ar';
  const title = ar ? 'استكشف أعمالنا البحثية' : 'Explore Our Research Work';
  const description = ar
    ? 'استكشف مشاريع بحثية تشمل التعلم الآلي والمعلوماتية الحيوية والتحليل الإحصائي.'
    : 'Explore research projects involving machine learning, bioinformatics, and statistical analysis.';
  const label = ar ? 'استكشف المشاريع البحثية' : 'Explore Research Projects →';
  return `<div class="project-navigation-grid project-navigation-single"><article class="project-navigation-card"><h3>${title}</h3><p>${description}</p><a class="button button-primary" href="/${language}/research">${label}</a></article></div>`;
};

const renderPersonalProjects = (language, isWolf = false, standalone = false, researchOnly = false) => {
  const slugs = isWolf
    ? wolfProjectOrder
    : researchOnly
      ? researchProjectOrder
      : [...personalSoftwareProjectOrder, ...researchProjectOrder];
  const collection = projectsInOrder(slugs);
  const navigation = isWolf
    ? (standalone ? renderWolfResearchNavigation(language) : '')
    : researchOnly ? '' : renderProjectNavigation(language);
  const intro = isWolf
    ? (language === 'ar' ? 'مشاريع برمجية وأكاديمية وتعاونية، مع توضيح سياق كل مشروع.' : 'Software work from academic and collaborative settings; each project is presented with its context.')
    : researchOnly
      ? (language === 'ar' ? 'مشاريع بحثية في التعلم الآلي والمعلوماتية الحيوية والتحليل الإحصائي.' : 'Research projects in machine learning, bioinformatics, and biostatistical analysis.')
      : (language === 'ar' ? 'مشاريع برمجية وبحثية في مجموعة واحدة.' : 'Software and research projects, presented in separate groups.');
  const heading = isWolf
    ? (language === 'ar' ? 'مشاريع WOLF البرمجية' : 'Selected WOLF projects')
    : researchOnly
      ? (language === 'ar' ? 'أعمالي البحثية' : 'Research Work')
      : (language === 'ar' ? 'مشاريعي المختارة' : (standalone ? 'Selected projects' : 'Check Some of My Projects'));
  const headingTag = standalone ? 'h1' : 'h2';
  const collectionLabel = isWolf ? 'WOLF / SOFTWARE PROJECTS' : researchOnly ? 'PERSONAL / RESEARCH' : 'PERSONAL PORTFOLIO';
  return `<section class="section shell project-collection${standalone ? ' project-page' : ''}"><div class="section-heading-row"><div><p class="eyebrow">${collectionLabel}</p><${headingTag}>${heading}</${headingTag}></div><p class="heading-aside">${intro}</p></div>${renderProjectCards(collection, language, isWolf)}${navigation}</section>`;
};

const renderProjectDetail = (language, slug, isWolf) => {
  const canonicalSlug = projectAliases[slug] || slug;
  const project = projects.find((item) => item.slug === canonicalSlug && (isWolf ? !item.category.startsWith('Research') : true));
  if (!project) {
    return `<section class="section shell"><h1>404</h1><a class="button button-primary" href="${isWolf ? `/wolf/${language}/work` : `/${language}/projects`}">${language === 'ar' ? 'كل المشاريع' : 'All projects'}</a></section>`;
  }
  const labels = language === 'ar'
    ? { overview: 'نظرة عامة', problem: 'المشكلة', solution: 'الحل', features: 'الميزات الرئيسية', technologies: 'التقنيات', contribution: 'المساهمة والفريق', gallery: 'لقطات المشروع', back: 'كل المشاريع' }
    : { overview: 'Project overview', problem: 'Problem', solution: 'Solution', features: 'Main features', technologies: 'Technologies', contribution: 'My contribution / team', gallery: 'Project screenshots', back: 'All projects' };
  const back = isWolf ? `/wolf/${language}/work` : `/${language}/projects`;
  const gallery = project.gallery.map((src, index) => `<figure class="gallery-frame">${image(src, `${project.title} screenshot ${index + 1}`)}</figure>`).join('');
  const technologies = project.technologies.map((technology) => `<li>${technology}</li>`).join('');
  const features = project.features.map((feature) => `<li>${feature}</li>`).join('');
  return `<section class="section shell case-study"><p class="eyebrow">${isWolf ? 'WOLF / PROJECTS' : 'PERSONAL / PROJECTS'} · ${project.category}</p><div class="case-grid"><div><p class="eyebrow">${labels.overview}</p><h1>${project.title}</h1><p class="detail-lede">${project.overview}</p><a class="button button-ghost" href="${back}">${labels.back} <span>←</span></a></div><div class="case-cover-frame ${['wazzafny', 'hr-management-system', 'hungry', 'clinic-management-system', 'hospital-management-system'].includes(project.slug) ? 'cover-contain' : ''}">${image(project.cover, `${project.title} cover`)}</div></div><div class="case-details"><article class="case-info"><h2>${labels.problem}</h2><p>${project.problem}</p></article><article class="case-info"><h2>${labels.solution}</h2><p>${project.solution}</p></article><article class="case-info"><h2>${labels.features}</h2><ul>${features}</ul></article><article class="case-info"><h2>${labels.technologies}</h2><ul>${technologies}</ul></article><article class="case-info case-attribution"><h2>${labels.contribution}</h2><p>${project.contribution}</p></article></div><div class="case-gallery-section"><h2>${labels.gallery}</h2><div class="case-gallery">${gallery}</div></div></section>`;
};

const renderServicePage = (language, slug) => {
  const service = services.find((item) => item[0] === slug);
  if (!service) {
    return `<section class="section shell"><h1>404</h1><a class="button button-primary" href="/wolf/${language}/services">${language === 'ar' ? 'كل الخدمات' : 'All services'}</a></section>`;
  }
  const text = language === 'ar' ? 'خدمة رقمية عملية تبدأ من احتياج واضح وتنتهي بنظام يمكن للفريق الاعتماد عليه.' : service[3];
  return `<section class="section shell detail-page service-detail"><p class="eyebrow">WOLF / ${service[4]} / ${service[1].toUpperCase()}</p><h1>${service[2]}</h1><p class="detail-lede">${text}</p><a class="button button-primary" href="/wolf/${language}/contact">${language === 'ar' ? 'ابدأ محادثة' : 'Talk about this service'} <span>↗</span></a><div class="principles-grid"><div><strong>01</strong><span>${language === 'ar' ? 'حدد الاحتياج' : 'Frame the need'}</span></div><div><strong>02</strong><span>${language === 'ar' ? 'ابنِ الحل' : 'Build the solution'}</span></div><div><strong>03</strong><span>${language === 'ar' ? 'راجع النتيجة' : 'Review the outcome'}</span></div></div></section>`;
};

const renderContact = (site, language, isWolf) => {
  const arabic = language === 'ar';
  return `<section class="section shell contact-page"><p class="eyebrow">${isWolf ? 'WOLF / CONTACT' : 'PERSONAL / CONTACT'}</p><h1>${isWolf ? (arabic ? 'ابدأ من المشكلة.' : 'Start with the problem.') : `${site.ctaTitle}<br><em>${site.ctaText}</em>`}</h1>${isWolf ? `<p class="contact-intro">${arabic ? 'أخبرنا بما تريد تحسينه، وما القيود التي ينبغي مراعاتها. لا تحتاج إلى حل جاهز قبل التواصل.' : 'Tell us what you want to improve and any constraints to consider. You do not need a finished solution before getting in touch.'}</p>` : ''}<div class="contact-grid"><div class="contact-options"><p>${arabic ? 'أرسل تفاصيل ما تريد مناقشته، وسنرد عليك عبر البريد الإلكتروني.' : 'Send a few details about what you would like to discuss, and we will reply by email.'}</p><a class="button button-ghost whatsapp-button" href="https://wa.me/201024038144" target="_blank" rel="noopener noreferrer">${arabic ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'} <span>↗</span></a></div><form class="contact-form" data-site="${isWolf ? 'wolf' : 'personal'}" novalidate><label>${arabic ? 'الاسم' : 'Name'}<input name="name" required maxlength="100" autocomplete="name"></label><label>${arabic ? 'البريد الإلكتروني' : 'Email'}<input name="email" type="email" required maxlength="254" autocomplete="email"></label><label>${arabic ? 'الموضوع (اختياري)' : 'Subject (optional)'}<input name="subject" maxlength="160"></label><label>${arabic ? 'الرسالة' : 'Message'}<textarea name="message" rows="5" maxlength="5000" required></textarea></label><div class="contact-honeypot" aria-hidden="true"><label>Company<input name="website" tabindex="-1" autocomplete="off"></label></div><button class="button button-primary" type="submit">${arabic ? 'إرسال الرسالة' : 'Send message'} <span>↗</span></button><p class="form-note" role="status" aria-live="polite">${arabic ? 'لا يحفظ هذا الموقع رسالتك بعد إرسالها.' : 'This site does not store your message after submission.'}</p></form></div></section>`;
};

const getPageMetadata = (route, site) => {
  const arabic = route.language === 'ar';
  const brand = site.brand;
  const projectSlug = projectAliases[route.section.split('/')[1]] || route.section.split('/')[1];
  const project = projects.find((item) => item.slug === projectSlug);
  const serviceSlug = route.section.split('/')[1];
  const service = services.find((item) => item[0] === serviceSlug);
  let pageTitle;
  let description;

  if (route.section === 'home') {
    pageTitle = route.isWolf
      ? (arabic ? 'استوديو رقمي' : 'Digital Studio')
      : (arabic ? 'مهندس برمجيات' : 'Software Engineer');
    description = site.heroText;
  } else if (route.section === 'about') {
    pageTitle = arabic ? 'من نحن' : 'About';
    description = site.aboutText;
  } else if (route.section === 'projects') {
    pageTitle = arabic ? 'المشاريع' : 'Projects';
    description = arabic ? 'مشاريع يوسف البرمجية والبحثية.' : 'Software and research projects by Yousef Eldeeb.';
  } else if (route.section === 'research') {
    pageTitle = arabic ? 'الأبحاث' : 'Research';
    description = arabic ? 'مشاريع في المعلوماتية الحيوية والتعلم الآلي والتحليل الإحصائي.' : 'Research projects in bioinformatics, machine learning, and biostatistics.';
  } else if (route.section === 'services') {
    pageTitle = arabic ? 'الخدمات' : 'Services';
    description = arabic ? 'خدمات WOLF في تطوير البرمجيات وتحليل البيانات والأتمتة.' : 'WOLF services for software development, data analysis, and automation.';
  } else if (route.section.startsWith('services/') && service) {
    pageTitle = service[2];
    description = service[3];
  } else if (route.section === 'work') {
    pageTitle = arabic ? 'الأعمال' : 'Work';
    description = arabic ? 'مشاريع برمجية وأكاديمية وتعاونية من WOLF.' : 'Software projects from academic and collaborative settings, presented by WOLF.';
  } else if (route.section.startsWith('projects/') || route.section.startsWith('work/')) {
    if (project && (route.section.startsWith('projects/') || !project.category.startsWith('Research'))) {
      pageTitle = project.title;
      description = project.description;
    }
  } else if (route.section === 'contact') {
    pageTitle = arabic ? 'تواصل' : 'Contact';
    description = route.isWolf
      ? (arabic ? 'تواصل مع WOLF لمناقشة احتياج عملك أو مشروعك.' : 'Contact WOLF to discuss your business needs or project.')
      : (arabic ? 'تواصل مع يوسف الديب لمناقشة البرمجيات أو المشاريع البحثية.' : 'Contact Yousef Eldeeb about software engineering or research projects.');
  }

  return {
    title: pageTitle ? `${brand} | ${pageTitle}${arabic ? ' | العربية' : ''}` : (arabic ? 'الصفحة غير موجودة' : 'Page not found'),
    description: description || (arabic ? 'الصفحة المطلوبة غير موجودة.' : 'The requested page could not be found.'),
    image: route.isWolf ? '/images/brand/wolf-hero-photo.png' : '/images/founder/yousef-photo.jpg',
    imageAlt: route.isWolf ? 'WOLF Digital Studio' : 'Yousef Eldeeb',
    isNotFound: !pageTitle
  };
};

const setMetaContent = (selector, attribute, value, attributeValue) => {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    document.head.append(element);
  }
  element.content = value;
};

const renderApp = () => {
  const route = getRoute();
  const site = copy[route.language][route.isWolf ? 'wolf' : 'personal'];
  const root = route.isWolf ? '/wolf' : '';
  let content = '';
  if (route.section === 'home') {
    content = `${renderHero(site, route.language, route.isWolf)}${renderAbout(site, route.language, route.isWolf)}${route.isWolf ? renderPersonalProjects(route.language, true) : renderPersonalProjects(route.language)}<section class="section shell cta-band"><h2>${site.ctaTitle}</h2><a class="button button-primary" href="${root}/${route.language}/contact">${site.ctaText} <span>↗</span></a></section>`;
  } else if (route.section === 'about') {
    content = route.isWolf
      ? renderWolfAbout(route.language)
      : renderFounderAbout(route.language);
  } else if (route.section === 'projects') {
    content = renderPersonalProjects(route.language, false, true);
  } else if (route.section.startsWith('projects/')) {
    content = renderProjectDetail(route.language, route.section.split('/')[1], false);
  } else if (route.section === 'research') {
    content = renderPersonalProjects(route.language, false, true, true);
  } else if (route.section === 'services') {
    const groups = ['BUILD', 'ANALYZE', 'AUTOMATE'];
    const groupedServices = groups.map((group) => `<div class="service-group"><p class="eyebrow">${group}</p>${renderCards(services.filter((item) => item[4] === group).map((item, index) => [`${String(index + 1).padStart(2, '0')} / ${item[1].toUpperCase()}`, item[2], item[3], `/wolf/${route.language}/services/${item[0]}`, route.language === 'ar' ? 'عرض الخدمة' : 'Explore service']))}</div>`).join('');
    content = `<section class="section shell services-collection"><div class="services-intro"><p class="eyebrow">WOLF / SERVICES</p><h1>${route.language === 'ar' ? 'سبع طرق <em>للبناء بذكاء.</em>' : 'Seven ways to <em>build better.</em>'}</h1><p class="detail-lede">${route.language === 'ar' ? 'خدمات تبدأ من احتياج واضح، وتتحول إلى حلول رقمية عملية.' : 'Focused services for building useful products, understanding data, and reducing manual work.'}</p></div>${groupedServices}</section>`;
  } else if (route.section.startsWith('services/')) {
    content = renderServicePage(route.language, route.section.split('/')[1]);
  } else if (route.section === 'work') {
    content = renderPersonalProjects(route.language, true, true);
  } else if (route.section.startsWith('work/')) {
    content = renderProjectDetail(route.language, route.section.split('/')[1], true);
  } else if (route.section === 'contact') {
    content = renderContact(site, route.language, route.isWolf);
  } else {
    content = `<section class="section shell"><h1>404</h1><a class="button button-primary" href="${root}/${route.language}/">Back home</a></section>`;
  }
  document.documentElement.lang = route.language;
  document.documentElement.dir = route.language === 'ar' ? 'rtl' : 'ltr';
  const metadata = getPageMetadata(route, site);
  const sectionParts = route.section.split('/');
  if ((sectionParts[0] === 'projects' || sectionParts[0] === 'work') && sectionParts[1]) {
    sectionParts[1] = projectAliases[sectionParts[1]] || sectionParts[1];
  }
  const canonicalSection = sectionParts.join('/');
  const canonicalPath = route.section === 'home'
    ? `${root}/${route.language}/`
    : `${root}/${route.language}/${canonicalSection}`;
  const canonicalUrl = new URL(canonicalPath, window.location.origin).href;
  const alternatePath = (language) => route.section === 'home'
    ? `${root}/${language}/`
    : `${root}/${language}/${canonicalSection}`;
  document.title = metadata.title;
  setMetaContent('meta[name="description"]', 'name', metadata.description, 'description');
  setMetaContent('meta[property="og:title"]', 'property', metadata.title, 'og:title');
  setMetaContent('meta[property="og:description"]', 'property', metadata.description, 'og:description');
  setMetaContent('meta[property="og:url"]', 'property', canonicalUrl, 'og:url');
  setMetaContent('meta[property="og:image"]', 'property', new URL(metadata.image, window.location.origin).href, 'og:image');
  setMetaContent('meta[property="og:image:alt"]', 'property', metadata.imageAlt, 'og:image:alt');
  setMetaContent('meta[property="og:locale"]', 'property', route.language === 'ar' ? 'ar_EG' : 'en_US', 'og:locale');
  setMetaContent('meta[name="robots"]', 'name', metadata.isNotFound ? 'noindex, nofollow' : 'index, follow', 'robots');
  document.querySelector('link[rel="canonical"]').setAttribute('href', canonicalUrl);
  document.querySelector('link[rel="alternate"][hreflang="en"]').setAttribute('href', new URL(alternatePath('en'), window.location.origin).href);
  document.querySelector('link[rel="alternate"][hreflang="ar"]').setAttribute('href', new URL(alternatePath('ar'), window.location.origin).href);
  let defaultAlternate = document.querySelector('link[rel="alternate"][hreflang="x-default"]');
  if (!defaultAlternate) {
    defaultAlternate = document.createElement('link');
    defaultAlternate.rel = 'alternate';
    defaultAlternate.hreflang = 'x-default';
    document.head.append(defaultAlternate);
  }
  defaultAlternate.href = new URL(alternatePath('en'), window.location.origin).href;
  document.querySelector('#app').innerHTML = `${renderHeader(site, route.language, route.isWolf)}<main class="${route.isWolf ? 'wolf-site' : 'personal-site'}">${content}</main>${renderFooter(site, route.language, route.isWolf)}`;
  bindInteractions(route, site, route.isWolf);
};

const bindInteractions = (route, site, isWolf) => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.desktop-nav');
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('mobile-open');
    menuButton.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
  const form = document.querySelector('.contact-form');
  if (form) {
    let isSubmitting = false;
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (isSubmitting) return;
      const note = form.querySelector('.form-note');
      if (!form.checkValidity()) {
        note.textContent = route.language === 'ar' ? 'يرجى إكمال الحقول المطلوبة.' : 'Please complete every field with a valid email address.';
        note.classList.add('error');
        form.reportValidity();
        return;
      }
      const button = form.querySelector('button[type="submit"]');
      const data = new FormData(form);
      const payload = Object.fromEntries(data.entries());
      payload.site = form.dataset.site;
      isSubmitting = true;
      button.disabled = true;
      button.setAttribute('aria-busy', 'true');
      button.textContent = route.language === 'ar' ? 'جارٍ الإرسال…' : 'Sending…';
      note.classList.remove('error', 'success');
      note.textContent = '';
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.ok !== true) {
          if (response.status === 400) {
            throw new Error(route.language === 'ar' ? 'يرجى مراجعة البيانات المدخلة والمحاولة مجدداً.' : 'Please check your details and try again.');
          }
          if (response.status === 429) {
            throw new Error(route.language === 'ar' ? 'محاولات كثيرة. يرجى الانتظار قليلاً قبل المحاولة مجدداً.' : 'Too many attempts. Please wait a little before trying again.');
          }
          throw new Error(route.language === 'ar' ? 'تعذر إرسال الرسالة الآن. يرجى المحاولة لاحقاً أو التواصل عبر واتساب.' : 'Your message could not be sent. Please try again later or use WhatsApp.');
        }
        note.textContent = route.language === 'ar' ? 'تم إرسال رسالتك بنجاح. شكراً لتواصلك.' : 'Your message was sent successfully. Thank you for getting in touch.';
        note.classList.add('success');
        form.reset();
      } catch (error) {
        note.textContent = error instanceof Error ? error.message : (route.language === 'ar' ? 'تعذر إرسال الرسالة. يرجى المحاولة مجدداً.' : 'Unable to send your message. Please try again.');
        note.classList.add('error');
      } finally {
        isSubmitting = false;
        button.disabled = false;
        button.removeAttribute('aria-busy');
        button.innerHTML = `${route.language === 'ar' ? 'إرسال الرسالة' : 'Send message'} <span>↗</span>`;
      }
    });
  }
  document.querySelectorAll('.evidence-strip img, .case-gallery img').forEach((item) => {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Open ${item.alt}`);
    const openLightbox = () => {
      const lightbox = document.createElement('dialog');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `<img src="${item.src}" alt="${item.alt}"><button aria-label="Close image">×</button>`;
      document.body.append(lightbox);
      lightbox.showModal();
      lightbox.querySelector('button').addEventListener('click', () => { lightbox.close(); lightbox.remove(); });
      lightbox.addEventListener('click', (event) => { if (event.target === lightbox) { lightbox.close(); lightbox.remove(); } });
    };
    item.addEventListener('click', openLightbox);
    item.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openLightbox(); } });
  });
};

renderApp();
