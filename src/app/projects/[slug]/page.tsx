import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/actions/get-data";
import { ArrowLeft, ExternalLink, Cpu, BarChart3, Database } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const { data: project, error } = await getProjectBySlug(slug);

    if (error || !project) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-24 pb-32 px-4 md:px-8 max-w-5xl mx-auto">
            {/* Back Navigation */}
            <Link
                href="/projects"
                className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 w-fit"
            >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium uppercase tracking-widest">Back to Projects</span>
            </Link>

            {/* Header / Hero */}
            <header className="space-y-6 mb-16">
                <div className="flex flex-wrap items-center gap-3">
                    {project.tech_stack?.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                    {project.title}
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                    {project.description}
                </p>

                <div className="flex items-center gap-6 pt-4">
                    {project.demo_url && (
                        <a
                            href={project.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
                        >
                            View Live Demo
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </header>

            <Separator className="bg-border/50 mb-16" />

            {/* Content Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                {/* Impact Brief */}
                <div className="md:col-span-1 space-y-8">
                    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <BarChart3 className="w-5 h-5" />
                            <h3 className="text-sm font-bold uppercase tracking-wider">Business Impact</h3>
                        </div>
                        <div className="text-3xl font-bold font-mono">
                            {project.impact_stat || "Insight Driven"}
                        </div>
                        <p className="text-xs text-muted-foreground leading-tight">
                            {project.soWhat || "A clear, data-driven outcome identifying business growth opportunities."}
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-card border border-border shadow-sm space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <Cpu className="w-5 h-5" />
                            <h3 className="text-sm font-bold uppercase tracking-wider">Tech Stack</h3>
                        </div>
                        <div className="text-xs font-mono text-muted-foreground leading-relaxed">
                            {project.tech_stack?.join(", ") || "SQL, Excel, Analytics"}
                        </div>
                    </div>
                </div>

                {/* Main Narrative */}
                <article className="md:col-span-2 space-y-12">
                    <section>
                        <div className="flex items-center gap-3 text-primary mb-6">
                            <Database className="w-5 h-5" />
                            <h3 className="text-sm font-bold uppercase tracking-wider">Context</h3>
                        </div>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {project.context || project.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-foreground">The Methodology (How)</h2>
                        <ul className="space-y-4">
                            {project.how?.map((step, i) => (
                                <li key={i} className="flex gap-4 group">
                                    <span className="flex-none w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold border border-primary/20">
                                        {i + 1}
                                    </span>
                                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                                        {step}
                                    </p>
                                </li>
                            )) || (
                                    <>
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                            <p className="text-muted-foreground">Cleaned and normalized the primary dataset for accuracy.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                                            <p className="text-muted-foreground">Implemented advanced querying/modeling to isolate key variables.</p>
                                        </li>
                                    </>
                                )}
                        </ul>
                    </section>

                    <section className="p-8 rounded-3xl bg-primary/5 border border-primary/10">
                        <h2 className="text-xl font-bold mb-4 text-primary">The Result (So What)</h2>
                        <p className="text-lg font-medium text-foreground leading-relaxed italic">
                            &quot;{project.soWhat || "Transformed fragmented data into high-value strategic evidence."}&quot;
                        </p>
                    </section>
                </article>

            </div>
        </main>
    );
}
