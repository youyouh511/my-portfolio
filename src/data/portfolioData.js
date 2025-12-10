/** Markdown notes
    *italic* _italic_
    **bold**
    __underline__ 
*/


export const portfolioData = {
    about: {
        title: "Hi! I am Youyou",
        subtitle: "Pronounced Yo-Yo — like my life, will always bounce back from challenges",
        paragraphs: [
            "I am a thinker, a researcher, a builder, and someone who genuinely enjoys solving problems that sit at the intersection of **data, technology, and people**.",
            "My education and experiences span **economics, data analytics, database management, software development, and product**, and I am attracted to roles that blend technical depth with big-picture strategic thinking, where analytical thinking meets creativity and real-world needs.",
        ],

        contact: {
            email: 'youyouh511@gmail.com',
            linkedin: 'https://linkedin.com/in/youyouhuang',
            github: 'https://github.com/youyouh511'
        },

        lottie: 'portfolio_avatar.json',

        skills: {
            summaryTitle: "A DATA-DRIVEN BUILDER WITH A PRODUCT MINDSET",
            summaryBullets: [
                "Builds & maintains data systems (ETL, database management, automation).",
                "Prototypes intelligent ML/NLP systems (RAG, LangChain, deep learning architectures).",
                "Designs technical roadmaps, prioritizes backlogs, and leads agile sprints.",
                "Communicates insights to clients and cross-functional stakeholders.",
                "Comfortable working across infrastructure, analytics, ML, and product delivery."
            ],
            techStack: [
                { label: "Python", icon: "mdi:language-python" },
                { label: "Java", icon: "mdi:language-java" },
                { label: "SQL", icon: "mdi:database" },
                { label: "Stata", icon: "file-icons:stata" },
                { label: "Spark", icon: "simple-icons:apachespark" },
                { label: "Hadoop", icon: "simple-icons:apachehadoop" },
                { label: "Kafka", icon: "mdi:apache-kafka" },
                { label: "Git", icon: "mdi:git" },
                { label: "Docker", icon: "mdi:docker" },
                { label: "Flask", icon: "file-icons:flask" },
                { label: "React", icon: "mdi:react" },
                { label: "MongoDB", icon: "lineicons:mongodb" },
                { label: "LangChain", icon: "simple-icons:langchain" },
                { label: "Tableau", icon: "cib:tableau" },
                { label: "Power BI", icon: "arcticons:microsoft-power-bi" },
                { label: "AWS", icon: "mdi:aws" },

            ]
        },
    },

    work: [
        {
            company: "International Monetary Fund",
            logo: "imf_logo.png",
            location: "Washington, D.C., USA",
            position: "Information Management Assistant / Research Assistant",
            duration: "Jul 2019 — Jun 2023",
            bullets: [
                {
                    text: "Maintained and enhanced the Common Surveillance Databases, a critical data infrastructure supporting the IMF's institutional analytics ecosystem, through automation, pipeline optimization, methodological updates, and data audits."
                },
                {
                    text: "Provided analytical and data support for five World Economic Outlook (WEO) chapters, focusing on global macroeconomic trends, forecasting, cross-country analysis, and policy recommendations.",
                    sub: [
                        "Co-authored an IMF Working Paper, constructing a harmonized 38-country, 60-year dataset and developing time-series models to decompose wage growth drivers and forecast post-shock wage-price dynamics.",
                        "Transformed longitudinal microdata (IPUMS CPS, EU LFS) to evaluate COVID-19's labor market impacts across demographics and industries, informing policy decisions on job retention and reallocation."
                    ]
                },
                {
                    text: "Automated ETL pipelines in Python and Stata to standardize data updates and workflows across research teams, reducing onboarding time by 1 to 2 days, improving knowledge transfer, and enhancing data integrity."
                },
                {
                    text: "Designed modular, user-friendly Excel-based validation and visualization toolkits integrated into the Global Economic Environment (GEE) database stack, cutting cross-departmental turnaround from days to hours."
                },
                {
                    text: "Produced executive-level analytics and presentations on Energy Transition and the 2023 Banking Crisis under tight deadlines for the IMF's Early Warning Exercise, strengthening institutional risk assessments."
                },
                {
                    text: "Mentored four new hires, formalizing best practices in database management, documentation, and reproducibility."
                }
            ],
        },
    ],

    education: [
        {
            school: "Carnegie Mellon University, Heinz College",
            location: "Pittsburgh, PA, USA",
            degree: "Master of Information Systems Management (STEM)",
            duration: "Aug 2024 - Aug 2025",
            coursework: [
                "Statistics",
                "Deep Learning",
                "Natural Language Processing",
                "Object-Oriented Programming in Java",
                "Distributed Systems",
                "Data Structures & Algorithms",
                "Blockchain Fundamentals",
                "Agile Methods",
                "Managing Software Platforms",
                "Responsible AI",
            ],
            highlight:
                "Highest Distinction",
            logo: "cmu_logo.jpg",
        },
        {
            school: "Georgetown University, School of Foreign Service",
            location: "Washington, D.C., USA",
            degree: "Bachelor of Science in Foreign Service, International Economics",
            duration: "Aug 2016 - May 2019",
            coursework: [
                "Econometrics",
                "Economics of Law",
                "Game Theory",
                "Development Economics",
                "International Finance",
                "International Trade",
                "Japanese (JLPT N1 Certified)",
            ],
            highlight: "",
            logo: "gu_logo.png",
        }
    ],

    projects: [
        {
            title: "Autonomous Vehicle Operational Design Domain Safety Analysis & Visualization Tool",
            repoUrl: "",
            role: "Technical Lead, Full-Stack & System Design",
            domain: "Software Development, Autonomous Vehicles, Geospatial Analytics, Network Analytics",
            techStack: [
                "Python",
                "Flask",
                "MongoDB",
                "React",
                "OSMnx",
                "GeoPandas",
                "NetworkX",
                "Graph Database",
                "JIRA",
                "Agile",
            ],
            summary:
                "Capstone Project of CMU MISM program, partnering with external client, TierIV. Modular visualization tool to map Operational Design Domains (ODDs) for autonomous vehicle deployment, enabling safety-focused analysis of road networks across geographic regions. Proprietary access. Potential demo upon request.",
            bullets: [
                "Designed the end-to-end application pipeline, including IO schema, caching strategy, data storage, and modular backend architecture for scalable geospatial analysis.",
                "Implemented core backend logic for feature extraction and network filtering, integrating OSMnx and MongoDB to support high-performance querying and storage.",
                "Contributed significantly to frontend delivery, including dynamic feature filtering and interactive risk visualization.",
                "Led system design discussions and coordinated cross-functional development across data processing, visualization, and strategic framing.",
                "Co-authored the final report and presentation materials for the client partner."
            ],
            actionButton: {
                href: "mailto:youyouh511@gmail.com?subject=ODD%20Safety%20Visualization%20Tool%20-%20Demo%20Request",
                label: 'Request Demo',
                icon: 'mdi:email-send-outline'
            }

        },

        {
            title: "STAR+: Training-Free Product Recommendations with LLM",
            repoUrl:
                "https://github.com/Bernie-cc/Training-Free-Recommendations-with-LLM/",
            role: "Researcher, Developer",
            domain: "NLP, LLM, Recommender Systems",
            techStack: [
                "Python",
                "OpenAI API",
                "SentenceTransformers",
                "CLIP",
                "ViT",
                "Collaborative Filtering",
                "Prompt Engineering"
            ],
            summary:
                "Explored training-free product recommendation using dense retrieval, collaborative filtering, and large language models (LLMs), grounded in DeepMind's STAR framework.",
            bullets: [
                "Led the literature review and co-developed the methodological framework, grounding the system in recent advances in zero-shot and retrieval-based recommendation.",
                "Designed and tested an experimental pipeline integrating CLIP/ViT and SentenceTransformers to assess multimodal alignment strategies.",
                "Conducted ablation studies and collaborated on testing and evaluation to analyze the effects of embedding configurations, scoring parameters, and prompt formats on recommendation quality.",
                "Led the final report drafting and the poster presentation, translating technical insights into accessible narratives for diverse audiences."
            ],
            actionButton: {
                href: 'https://drive.google.com/file/d/1ruaWch6242IuS6Oz5qAXAxJtCeciaRW-/view?usp=drive_link',
                label: 'Request report',
                icon: 'carbon:report-data'
            }
        },

        {
            title: "Causal Graph Neural Networks for Wildfire Prediction",
            repoUrl:
                "https://github.com/youyouh511/11785_IDL_S25_Final-Project",
            role: "Technical Lead, Modeling & Data Strategy",
            domain: "Deep Learning, Spatiotemporal Modeling, Causal Inference, Graph Neural Networks",
            techStack: [
                "Python",
                "PyTorch",
                "LSTM",
                "DenseGCNConv",
                "PCMCI (Tigramite)"
            ],
            summary:
                "Reimplemented and extended a causal graph neural network framework for wildfire danger prediction using the SeasFire datacube, focusing on rare-event prediction and spatiotemporal dependencies.",
            bullets: [
                "Led literature review and methodological framework development for causal GNN-based wildfire prediction.",
                "Proposed and implemented a granular sampling strategy to isolate fire emergence after extended calm periods, refining the research focus and improving label quality.",
                "Designed and coded the full model pipeline, integrating PCMCI-generated causal graphs with LSTM and DenseGCNConv layers for temporal-spatial prediction.",
                "Conducted performance analysis and ablation studies to assess model robustness and interpretability.",
                "Co-authored the final report, synthesizing technical insights, evaluation outcomes, and future directions for scalable, interpretable wildfire forecasting."
            ],
            actionButton: {
                href: "https://drive.google.com/file/d/1A_GaWo9ynqKYUfVtrftKub3_iiRmtQ97/view?usp=sharing",
                label: 'Request report',
                icon: 'carbon:report-data'
            }
        },

        {
            title: "Retrieval-Augmented Generation (RAG) Question Answering System",
            repoUrl:
                "https://github.com/Bernie-cc/RAG-based-Question-Answering-System",
            role: "Researcher, Developer",
            domain:
                "NLP, LLMs, RAG",
            techStack: [
                "Python",
                "LangChain",
                "HuggingFace",
                "SentenceTransformers",
                "ChromaDB",
                "BeautifulSoup",
                "Selenium",
                "Prompt Engineering"
            ],
            summary:
                "RAG-based QA system that combines document retrieval with generative models to answer questions grounded in a custom CMU/Pittsburgh knowledge base.",
            bullets: [
                "Researched and evaluated optimal models for system components (baseline LLMs, dense retrievers, and re-rankers) to balance performance and efficiency.",
                "Built the knowledge corpus via targeted web scraping of CMU- and Pittsburgh-related sources.",
                "Validated LLM-annotated documents to support training and evaluation workflows.",
                "Conducted ablation studies across prompt formats and fine-tuned retriever parameters to improve relevance search.",
                "Led drafting and delivery of the final system report, synthesizing technical insights and evaluation outcomes."
            ],
            actionButton: {
                href: "https://drive.google.com/file/d/1Ihw45AsyRrwwqxNuHV_w35zz4K09SEYE/view?usp=drive_link",
                label: 'Request report',
                icon: 'carbon:report-data'
            }
        },

        {
            title: "Judgment by Algorithm: Exploring AI Fairness in Criminal Justice",
            repoUrl:
                "https://github.com/youyouh511/RAI",
            role: "Lead Data Analyst, Researcher",
            domain: "Responsible AI, Fairness in Machine Learning",
            techStack: [
                "Python",
                "Pandas",
                "NumPy",
                "Data Analytics",
                "Data Visualization"
            ],
            summary:
                "Investigated algorithmic bias in the criminal justice system using the COMPAS Recidivism Risk Score dataset, uncovering disparities in fairness metrics across demographic groups.",
            bullets: [
                "Served as primary lead for statistical analysis and data visualization, driving the project's empirical backbone.",
                "Evaluated fairness metrics across demographic groups to highlight disparate impact and potential harms.",
                "Contributed extensively to the final report and peer review process, ensuring clarity and alignment with Responsible AI principles."
            ],
            resourcesLink: "",
        },

        {
            title: "End-Goal-Oriented Employment Capacity Mapping & Building App",
            repoUrl:
                "",
            role: "Independent Developer",
            domain:
                "App Design, Software Development, Product Management, NLP, LLMs",
            techStack: [
                "Python",
                "Java",
                "HuggingFace",
                "BeautifulSoup",
                "Selenium"
            ],
            summary:
                "Ongoing independent project that aim to streamline career planning by aligning individual qualifications with job market demands, mapping skills across job postings, resumes, and course syllabi.",
            bullets: [
                "Implementing the full front- and backend architecture, including IO schema, data ingestion pipelines, and modular APIs for resume, syllabus, and job posting parsing.",
                "Integrating a granular skill-mapping strategy to highlight gaps and strengths across academic, experiential, and aspirational dimensions.",
                "Building support modules for resume refinement, project tagging, and skill reorganization based on target job criteria.",
                "Designing a dynamic To-Do generator that outputs personalized actions, projects, and skills to pursue for target roles."
            ],
            actionButton: {
                href: "mailto:youyouh511@gmail.com?subject=Employment%20Capacity%20App%20-%20Information%20Request",
                label: 'Request information',
                icon: 'mingcute:information-line'
            }           
        }
    ],


    publications: [
        {
            title: 'Wage-Price Spirals: What is the Historical Evidence?',
            year: '2024',
            link: 'http://doi.org/10.1111/ecca.12543',
            role: 'Co-author',
            domain: ['Labor Market', 'Inflation'],
        },
        {
            title: 'Coming Down to Earth: How to Tackle Soaring Public Debt',
            year: '2023',
            link: 'https://www.imf.org/en/Publications/WEO/Issues/2023/04/11/world-economic-outlook-april-2023',
            role: 'Research Assistant',
            domain: ['Public Debt', 'Fiscal Policy'],
        },
        {
            title: 'Wage Dynamics Post-COVID-19 and Wage-Price Spiral Risks',
            year: '2022',
            link: 'https://www.imf.org/en/publications/weo/issues/2022/10/11/world-economic-outlook-october-2022',
            role: 'Research Assistant',
            domain: ['Labor Market', 'Inflation'],
        },
        {
            title: 'Inflation Scares',
            year: '2021',
            link: 'https://www.imf.org/en/Publications/WEO/Issues/2021/10/12/world-economic-outlook-october-2021',
            role: 'Research Assistant',
            domain: ['Inflation', 'Monetary Policy'],
        },
        {
            title: 'Recessions and Recoveries in Labor Markets: Patterns, Policies, and Responses to the COVID-19 Shock',
            year: '2021',
            link: 'https://www.imf.org/en/Publications/WEO/Issues/2021/03/23/world-economic-outlook-april-2021',
            role: 'Research Assistant',
            domain: ['Labor Market'],
        },
    ],
};