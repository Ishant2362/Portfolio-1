import { Project, Skill, Metric } from "@/types/supabase";

export const PROJECTS: Project[] = [
    {
        id: "ishant-sql-movie",
        title: "Movie Industry SQL Analysis",
        slug: "movie-industry-sql",
        description: "An SQL-based movie database project focused on extracting insights about films, people, genres, and audience ratings.",
        context: "The analysis was needed to understand historical trends in the movie industry for better genre-based content strategies.",
        how: [
            "Wrote SQL queries utilizing complex Joins, aggregations, and subqueries to de-silo industry datasets.",
            "Cleaned and structured raw movie data to ensure analytical accuracy.",
            "Performed exploratory data analysis (EDA) to find correlations between genres and user ratings."
        ],
        soWhat: "Identified high-performing genre/budget combinations, providing a data-driven baseline for content investment decisions.",
        impact_stat: "SQL Architecture",
        tech_stack: ["SQL", "Data Retrieval"],
        image_url: "/movie_analysis.png",
        demo_url: "https://github.com/Ishant2362/Movie-Project-SQL-/blob/main/README.md",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "ishant-excel-retail",
        title: "Online Retailer Performance Analysis",
        slug: "online-retailer-excel",
        description: "An online retail business leverages e-commerce technology to manage product listings, customer orders, and digital transactions end-to-end.",
        context: "The project was designed to help businesses better understand their retail information by organizing it into structured, actionable formats.",
        how: [
            "Cleaned and structured raw datasets of 10k+ rows using Advanced Excel.",
            "Built dynamic pivot tables and lookup functions for instant regional performance tracking.",
            "Isolated seasonal sales peaks through trend analysis."
        ],
        soWhat: "Transformed fragmented retail logs into a structured system that identifies growth opportunities in specific regional markets.",
        impact_stat: "Business Impact",
        tech_stack: ["EXCEL", "PIVOT TABLES", "DATA CLEANING", "DASHBOARD"],
        image_url: "/retail_dashboard_official.png",
        demo_url: "https://github.com/Ishant2362/Excel-Online-Retailer-Project/blob/main/README.md",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "ishant-kartzon-sales",
        title: "EP of Kartzon Sales Visualization",
        slug: "kartzon-sales",
        description: "An Excel-driven sales analysis project involving data cleaning, advanced calculations, and visualizations to extract actionable insights from retail sales data.",
        context: "The analysis was needed to simplify KPI monitoring and identify specific inventory categories that were dragging down overall growth.",
        how: [
            "Developed a comprehensive data model to track sales performance against historical benchmarks.",
            "Created visual performance dashboards to simplify the identification of sales trends.",
            "Used Power BI and Excel to generate comparative category reports."
        ],
        soWhat: "Successfully isolated underperforming product categories, allowing for a more targeted and efficient stock clearance strategy.",
        impact_stat: "KPI Dashboard",
        tech_stack: ["EXCEL", "DATA VISUALIZATION", "PIVOT TABLES", "DATA CLEANING", "DASHBOARD"],
        image_url: "/kartzon_dashboard_official.png",
        demo_url: "https://github.com/Ishant2362/EP-of-kartzon-Sales/blob/main/README.md",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    }
];

export const DEFAULT_PROJECT = PROJECTS[0];
export const SECONDARY_PROJECT = PROJECTS[1];

export const DEFAULT_SKILLS: Skill[] = [
    { id: "s1", name: "SQL", category: "Technical Skills", proficiency: 90, created_at: "" },
    { id: "s2", name: "Python", category: "Technical Skills", proficiency: 75, created_at: "" },
    { id: "s3", name: "Excel", category: "Tools & Technologies", proficiency: 95, created_at: "" },
    { id: "s4", name: "Power BI", category: "Tools & Technologies", proficiency: 85, created_at: "" },
    { id: "s5", name: "Team Management", category: "Soft / Life Skills", proficiency: 90, created_at: "" },
    { id: "s6", name: "Problem Solving", category: "Soft / Life Skills", proficiency: 95, created_at: "" },
];

export const DEFAULT_METRICS: Metric[] = [
    { id: "m1", label: "Dataset Scale", value: 10000, created_at: "" },
    { id: "m2", label: "Team Size Led", value: 25, created_at: "" },
];

export const USER_INFO = {
    name: "Ishant Pathania",
    role: "Data Analyst",
    title: "Data Analyst",
    tagline: "Finding the signal in the noise through SQL, Power BI, and a healthy dose of curiosity to help teams move faster.",
    bio: "Dedicated Data Analyst with a track record of bridging the gap between raw datasets and strategic decisions. From leading teams of 25+ interns to cleaning massive retail datasets in Excel, I focus on translating complex data into stories that help stakeholders move with confidence. Currently pursuing my MCA, I combine technical proficiency in SQL and Python with a passion for solving real-world business problems.",
    contact: {
        github: "https://github.com/Ishant2362",
        linkedin: "https://www.linkedin.com/in/ishant-pathania-98a795274",
        email: "lpsishant4662@gmail.com"
    }
};
