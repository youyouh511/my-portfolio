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
            "My experience spans **economics, software development, and product**, and I am attracted to roles that blend technical depth with big-picture strategic thinking, where analytical thinking meets creativity and real-world needs.",
        ],

        contact: {
            email: 'youyouh511@gmail.com',
            linkedin: 'https://linkedin.com/in/youyouhuang',
            github: 'https://github.com/youyouh511'
        },

        lottie: '/portfolio_avatar.json',

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
                { name: "Python", icon: "mdi:language-python" },
                { name: "Java", icon: "mdi:language-java" },
                { name: "SQL", icon: "mdi:database" },
                { name: "Stata", icon: "file-icons:stata" },
                { name: "Spark", icon: "simple-icons:apachespark" },
                { name: "Hadoop", icon: "simple-icons:apachehadoop" },
                { name: "Kafka", icon: "mdi:apache-kafka" },
                { name: "Git", icon: "mdi:git" },
                { name: "Docker", icon: "mdi:docker" },
                { name: "Flask", icon: "file-icons:flask" },
                { name: "MongoDB", icon: "lineicons:mongodb" },
                { name: "LangChain", icon: "simple-icons:langchain" },
                { name: "Tableau", icon: "cib:tableau" },
                { name: "Power BI", icon: "arcticons:microsoft-power-bi" },
                { name: "AWS", icon: "mdi:aws" },

            ]
        },
    },

    work: [
        {
            company: "International Monetary Fund",
            logo: "/imf_logo.png",
            location: "Washington, D.C., USA",
            position: "Information Management Assistant / Research Assistant",
            duration: "Jul 2019 — Jun 2023",
            bullets: [
                {
                    text: "Maintained and enhanced the Common Surveillance Databases, a critical data infrastructure supporting the IMF’s institutional analytics ecosystem, through automation, pipeline optimization, methodological updates, and data audits."
                },
                {
                    text: "Provided analytical and data support for five World Economic Outlook (WEO) chapters, focusing on global macroeconomic trends, forecasting, cross-country analysis, and policy recommendations.",
                    sub: [
                        "Co-authored an IMF Working Paper, constructing a harmonized 38-country, 60-year dataset and developing time-series models to decompose wage growth drivers and forecast post-shock wage–price dynamics.",
                        "Transformed longitudinal microdata (IPUMS CPS, EU LFS) to evaluate COVID-19’s labor market impacts across demographics and industries, informing policy decisions on job retention and reallocation."
                    ]
                },
                {
                    text: "Automated ETL pipelines in Python and Stata to standardize data updates and workflows across research teams, reducing onboarding time by 1–2 days, improving knowledge transfer, and enhancing data integrity."
                },
                {
                    text: "Designed modular, user-friendly Excel-based validation and visualization toolkits integrated into the Global Economic Environment (GEE) database stack, cutting cross-departmental turnaround from days to hours."
                },
                {
                    text: "Produced executive-level analytics and presentations on Energy Transition and the 2023 Banking Crisis under tight deadlines for the IMF’s Early Warning Exercise, strengthening institutional risk assessments."
                },
                {
                    text: "Mentored four new hires, formalizing best practices in database management, documentation, and reproducibility."
                }
            ],
        },
    ],

    education: {},
    projects: {},
    publications: {},
};