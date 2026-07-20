import { Project, Skill, Metric } from "@/types/supabase";

export const PROJECTS: Project[] = [
    {
        id: "ishant-sql-movie",
        title: "Movie Industry SQL Project",
        slug: "movie-industry-sql",
        description: "Designed and executed structured SQL queries with multi-table JOINs and subqueries to extract key business insights from the movie database.",
        context: "The analysis was needed to track box office trends, average ratings, and genre profitability across multi-year datasets.",
        how: [
            "Designed and executed structured SQL queries with multi-table JOINs and subqueries to extract key business insights.",
            "Structured data retrieval queries to track box office trends, average ratings, and genre profitability across multi-year datasets.",
            "Analyzed box office performance and genre profitability using SQL to identify trends and support business insights."
        ],
        soWhat: "Identified high-performing genre/budget combinations, providing a data-driven baseline for content investment decisions.",
        impact_stat: "SQL JOINs & Subqueries",
        tech_stack: ["SQL", "Data Retrieval", "Multi-table JOINs", "Subqueries"],
        image_url: "/movie_analysis.png",
        demo_url: "https://github.com/Ishant2362/Movie-Project-SQL-/blob/main/README.md",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: "ishant-excel-retail",
        title: "Online Retailer Excel Project",
        slug: "online-retailer-excel",
        description: "Analyzed retail sales data to track monthly revenue, inventory turnover, and product category trends. Created automated Excel dashboards using Pivot Tables and dynamic formulas to streamline weekly management reporting.",
        context: "The project was designed to help businesses better understand their retail information by organizing it into structured, actionable formats.",
        how: [
            "Cleaned and structured raw datasets of 10k+ rows using Advanced Excel.",
            "Built dynamic pivot tables and lookup functions (VLOOKUP) for instant performance tracking.",
            "Isolated sales peaks through trend analysis and created automated Excel dashboards."
        ],
        soWhat: "Transformed fragmented retail logs into a structured dashboard system that streamlines weekly management reporting.",
        impact_stat: "Excel Dashboard",
        tech_stack: ["EXCEL", "PIVOT TABLES", "VLOOKUP", "DASHBOARD", "DATA CLEANING"],
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
    { id: "s1", name: "SQL (MySQL)", category: "Technical Skills", proficiency: 90, created_at: "" },
    { id: "s2", name: "Python (Pandas, NumPy, Matplotlib)", category: "Technical Skills", proficiency: 75, created_at: "" },
    { id: "s3", name: "Microsoft Excel (Pivot Tables, VLOOKUP, Data Cleaning)", category: "Tools & Technologies", proficiency: 95, created_at: "" },
    { id: "s4", name: "Power BI (Dashboards, DAX)", category: "Tools & Technologies", proficiency: 85, created_at: "" },
    { id: "s5", name: "ETL", category: "Technical Skills", proficiency: 80, created_at: "" },
    { id: "s6", name: "Data Visualization", category: "Technical Skills", proficiency: 85, created_at: "" },
    { id: "s7", name: "KPI Reporting", category: "Technical Skills", proficiency: 85, created_at: "" },
];

export const DEFAULT_METRICS: Metric[] = [
    { id: "m1", label: "Dataset Scale", value: 10000, created_at: "" },
    { id: "m2", label: "Team Size Led", value: 15, created_at: "" },
];

export const USER_INFO = {
    name: "Ishant Pathania",
    role: "Data Analyst",
    title: "Data Analyst",
    tagline: "Skilled in SQL, Power BI, Python, and Excel. Transforming raw data into actionable insights to support strategic decision-making.",
    bio: "Data Analyst skilled in SQL, Power BI, Python, and Excel with experience in data collection, cleaning, ETL automation, dashboard development, and business reporting. Passionate about identifying trends, optimizing business processes, and transforming data into actionable insights that support strategic decision-making. Pursuing a Master's in Computer Applications (MCA) with a strong foundation in database systems and analytical reporting.",
    contact: {
        github: "https://github.com/Ishant2362",
        linkedin: "https://www.linkedin.com/in/ishant-pathania-98a795274",
        email: "lpsishant4662@gmail.com"
    }
};

export interface Certification {
    id: string;
    title: string;
    issuer: string;
    date: string;
}

export const CERTIFICATIONS: Certification[] = [
    { id: "c1", title: "Winter School Training Program", issuer: "IITM", date: "January 2026" },
    { id: "c2", title: "Trainee", issuer: "DUCAT", date: "March 2025" },
    { id: "c3", title: "Group Discussion", issuer: "CPJ", date: "January 2025" },
    { id: "c4", title: "SQL Essentials Bootcamp (5 Days)", issuer: "Lets Upgrade", date: "April 2023" },
    { id: "c5", title: "Python Programming Essentials Bootcamp (5 Days)", issuer: "Lets Upgrade", date: "April 2023" }
];
