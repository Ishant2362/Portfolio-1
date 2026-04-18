import { FolderIcon, ArrowRight, Github, ExternalLink, Activity } from "lucide-react";
import Link from "next/link";
import { PROJECTS } from "@/constants/seed-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsPage() {
    return (
        <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
            <header className="space-y-6 max-w-3xl">
                <div className="flex items-center gap-3 text-primary mb-2">
                    <FolderIcon className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-[0.2em]">My Projects</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Built on Insight. <span className="text-muted-foreground italic">Driven by Impact.</span>
                </h1>
                <p className="text-muted-foreground text-xl leading-relaxed">
                    A curated selection of high-impact data projects where technical architecture meets strategic insight.
                </p>
            </header>

            <div className="grid grid-cols-1 gap-12">
                {PROJECTS.map((project, index) => (
                    <div key={project.id} className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        {/* Visual Preview (Left) */}
                        <div className="lg:col-span-7 aspect-video rounded-3xl bg-muted/30 border border-border/50 overflow-hidden relative group-hover:border-primary/30 transition-all duration-500">
                            {project.image_url ? (
                                <img
                                    src={project.image_url}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <Activity className="w-12 h-12 text-muted-foreground/20 group-hover:text-primary/40 transition-colors" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            {/* Floating Badge */}
                            <div className="absolute top-6 left-6">
                                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm border-primary/20 text-primary uppercase tracking-widest text-[10px] py-1 px-3">
                                    Project 0{index + 1}
                                </Badge>
                            </div>
                        </div>

                        {/* Content (Right) */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech_stack?.map(tech => (
                                        <span key={tech} className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                                            #{tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex items-center gap-6 pt-4">
                                <a
                                    href={project.demo_url || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest group/link"
                                >
                                    View Project Details
                                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform text-primary" />
                                </a>

                                <div className="h-4 w-px bg-border" />

                                <div className="flex gap-4">
                                    <a href={project.demo_url || "#"} className="text-muted-foreground hover:text-primary transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.demo_url || "#"} className="text-muted-foreground hover:text-primary transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Removed Archive Section */}
        </main>
    );
}
