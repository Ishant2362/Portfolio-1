import Link from "next/link";
import { getFeaturedProjects, getSkills, getMetrics } from "@/actions/get-data";

import { DEFAULT_PROJECT, DEFAULT_SKILLS, DEFAULT_METRICS, USER_INFO, PROJECTS } from "@/constants/seed-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowDownToLine,
  Users2,
  Zap,
  BarChart3 as ChartBarIcon,
  ArrowRight,
  CheckCircle2,
  Database,
  Search,
  PieChart,
  Lightbulb,
  GraduationCap,
  Download,
  Mail
} from "lucide-react";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { Card, CardContent } from "@/components/ui/card";

export default async function Home() {
  // Fetch data
  const [{ data: projects }, { data: skills }, { data: metrics }] = await Promise.all([
    getFeaturedProjects(),
    getSkills(),
    getMetrics(),
  ]);

  const featuredProject = projects?.[0] || PROJECTS[0];
  const topSkills = skills && skills.length > 0 ? skills : DEFAULT_SKILLS;

  return (
    <main className="min-h-screen bg-background">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-12 px-4 overflow-hidden border-b border-border/40">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none select-none -z-10 opacity-20">
          <span className="text-[12rem] md:text-[22rem] font-black uppercase text-foreground/[0.05] tracking-tighter leading-none translate-y-[-20%] whitespace-nowrap">
            {USER_INFO.name}
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12 relative z-10">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary px-4 py-1.5 uppercase tracking-widest text-[10px] font-bold">
            Available for New Opportunities
          </Badge>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 text-foreground leading-[1.1]">
            {USER_INFO.name} <br />
            <span className="text-muted-foreground/40 italic font-medium -mt-2 block">Data Analyst</span>
          </h1>
          <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium mb-12">
            Turning data into <span className="text-foreground border-b-2 border-primary/50">actionable insights</span> using SQL, Power BI, Python, and Excel to drive strategic decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="h-14 px-8 rounded-full text-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group" asChild>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
                <ArrowDownToLine className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-lg font-bold border-2" asChild>
              <Link href="/projects">
                View Case Studies
              </Link>
            </Button>
          </div>
        </div>

        {/* 2. Key Highlights / Metrics */}
        <div className="max-w-7xl mx-auto w-full mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Datasets Analyzed", value: "10K+ Rows", icon: ChartBarIcon, desc: "End-to-end cleaning & modeling" },
              { label: "Teams Led", value: "25+ People", icon: Users2, desc: "Senior HOD leadership experience" },
              { label: "Impact Areas", value: "3 Major Projects", icon: Zap, desc: "SQL, Excel & Power BI focus" }
            ].map((stat, i) => (
              <div key={i} className="bg-sidebar/40 border border-sidebar-border p-8 rounded-3xl hover:border-primary/30 transition-all group">
                <stat.icon className="w-10 h-10 text-primary mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="text-4xl font-black text-foreground mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-widest text-primary/70 mb-2">{stat.label}</div>
                <p className="text-muted-foreground text-sm font-medium">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Case Study */}
      <section className="py-24 px-4 border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Standout Project</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">Featured Case Study</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-border shadow-2xl group">
              <OptimizedImage
                src={featuredProject.image_url || "/movie_analysis.png"}
                alt={featuredProject.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-3xl font-bold mb-4">{featuredProject.title}</h4>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {featuredProject.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">The Challenge</div>
                  <p className="text-sm text-muted-foreground">{featuredProject.context}</p>
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-widest text-primary">The Result</div>
                  <p className="text-sm text-muted-foreground">{featuredProject.soWhat}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tech_stack?.map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-muted text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button size="lg" className="rounded-full px-8 group" asChild>
                <Link href={`/projects/${featuredProject.slug}`}>
                  View Case Study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What I Do */}
      <section className="py-24 px-4 border-b border-border/40 bg-sidebar/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Process & Value</h2>
              <h3 className="text-4xl font-black mb-6">Core Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a Data Analyst, I specialize in the end-to-end analytical workflow, ensuring data integrity at every step.
              </p>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { title: "Data Cleaning", desc: "Standardizing unruly datasets into structured formats ready for modeling.", icon: Search },
                { title: "Statistical Analysis", desc: "Applying SQL and Python to uncover correlations and trends.", icon: Database },
                { title: "Interactive Viz", desc: "Building dashboards in Power BI and Excel that speak to stakeholders.", icon: PieChart },
                { title: "Insight Generation", desc: "Translating complex numbers into simple, actionable business paths.", icon: Lightbulb }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/20 transition-all group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">{item.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Skills */}
      <section className="py-24 px-4 border-b border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Technical Stack</h2>
            <h3 className="text-4xl font-black mb-6">Grouped Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: "Databases & Langs", items: ["SQL (PostgreSQL, MySQL)", "Python (Pandas, NumPy)"], icon: Database },
              { category: "Tools & BI", items: ["Power BI", "Microsoft Excel (VBA, PowerQuery)"], icon: PieChart },
              { category: "Professional Skills", items: ["Strategic Leadership", "Data Governance", "Problem Solving"], icon: CheckCircle2 }
            ].map((group, i) => (
              <Card key={i} className="border-border/50 hover:border-primary/30 transition-all overflow-hidden bg-sidebar/10">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <group.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold tracking-tight">{group.category}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map(skill => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 font-mono text-[10px] uppercase">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Education */}
      <section className="py-24 px-4 border-b border-border/40 bg-sidebar/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4">Academic Background</h2>
            <h3 className="text-4xl font-black mb-6">Education</h3>
          </div>

          <div className="space-y-12">
            {[
              { degree: "Master of Computer Applications (MCA)", school: "IITM Janakpuri, Delhi", year: "2025 – Present" },
              { degree: "Bachelor of Computer Applications (BCA)", school: "CPJ College of Higher Studies, Delhi", year: "2022 – 2025" },
              { degree: "Class XII (C.B.S.E.)", school: "Lions Public School, Delhi", year: "2021 – 2022" },
              { degree: "Class X (C.B.S.E.)", school: "Lions Public School, Delhi", year: "2019 – 2020" }
            ].map((edu, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors py-2 flex items-start gap-4">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-4 shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
                <GraduationCap className="w-8 h-8 text-primary/40 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="text-2xl font-bold">{edu.degree}</h5>
                  <p className="text-primary font-medium">{edu.school}</p>
                  <p className="text-muted-foreground text-sm font-bold uppercase tracking-widest mt-2 bg-muted/50 inline-block px-3 py-1 rounded-full">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
