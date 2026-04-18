"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hero3D } from "./hero-3d";
import { Project, Skill, Metric } from "@/types/supabase";
import Link from "next/link";
import { OptimizedImage } from "@/components/ui/optimized-image";
import { USER_INFO } from "@/constants/seed-data";

interface BentoGridProps {
    featuredProject?: Project | null;
    topSkills?: Skill[];
    primaryMetric?: Metric | null;
}

export function BentoGrid({ featuredProject, topSkills, primaryMetric }: BentoGridProps) {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto p-4"
        >
            {/* Slot A: Featured Project (Large, spans 2x2 on desktop) */}
            <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2">
                <Card className="h-full bg-sidebar border-sidebar-border overflow-hidden group hover:border-primary/50 transition-colors flex flex-col">
                    <CardHeader className="relative z-20">
                        <CardTitle className="text-xl tracking-tight text-foreground">
                            Education Qualification
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-grow relative z-10 py-6">
                        <div className="space-y-8">
                            <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors py-1">
                                <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2 shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                                <h3 className="text-xl font-bold tracking-tight text-foreground leading-tight">Master of Computer Applications (MCA)</h3>
                                <p className="text-primary font-medium text-sm mt-1">IITM Janakpuri, Delhi</p>
                                <p className="text-muted-foreground text-xs mt-2 font-mono uppercase tracking-widest bg-muted/30 inline-block px-2 py-1 rounded">2025 – Present</p>
                            </div>

                            <div className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors py-1">
                                <div className="absolute w-2 h-2 bg-primary rounded-full -left-[5px] top-2 opacity-50" />
                                <h3 className="text-xl font-bold tracking-tight text-foreground leading-tight">Bachelor of Computer Applications (BCA)</h3>
                                <p className="text-primary font-medium text-sm mt-1">CPJ College of Higher Studies and School of Law, Delhi</p>
                                <p className="text-muted-foreground text-xs mt-2 font-mono uppercase tracking-widest bg-muted/30 inline-block px-2 py-1 rounded">2022 – 2025</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Slot B: Bio & Value Prop (Medium, Vertical) */}
            <motion.div variants={item} className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2">
                <Card className="h-full bg-card border-border flex flex-col">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-primary/20">
                                <OptimizedImage
                                    src="/profile.jpeg"
                                    alt={USER_INFO.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardTitle className="text-primary tracking-wide">Data Analyst</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-6 flex-grow">
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            {USER_INFO.bio}
                        </p>

                        <div className="space-y-3 pt-4 border-t border-border/50">
                            <span className="text-[10px] uppercase tracking-widest text-muted-foreground block font-bold">Stack Core</span>
                            <div className="flex flex-wrap gap-1.5">
                                {["SQL", "Python", "Power BI", "Excel"].map(tag => (
                                    <span key={tag} className="text-[9px] bg-primary/5 text-primary/80 px-2 py-0.5 rounded-full border border-primary/10 font-mono">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                        <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                            <a href={USER_INFO.contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                            </a>
                            <a href={USER_INFO.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href={`mailto:${USER_INFO.contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </a>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Slot C: Tech Stack (Small) */}
            <motion.div variants={item} className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1">
                <Card className="h-full bg-card border-border">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Skills</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-wrap gap-2">
                            {topSkills?.slice(0, 4).map(skill => (
                                <span key={skill.id} className="text-xs font-mono bg-secondary/50 border border-border px-2 py-1 rounded">
                                    {skill.name}
                                </span>
                            )) || (
                                    <>
                                        <span className="text-xs font-mono bg-secondary px-2 py-1 rounded">SQL</span>
                                        <span className="text-xs font-mono bg-secondary px-2 py-1 rounded">Python</span>
                                    </>
                                )}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Slot D: Live Data Widget (Small) */}
            <motion.div variants={item} className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1">
                <Card className="h-full bg-card border-border">
                    <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Live Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center">
                        <div className="text-3xl font-bold font-mono text-primary leading-tight">
                            {primaryMetric ? primaryMetric.value.toLocaleString() : "0"}
                        </div>
                        <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                            {primaryMetric?.label || "Metric Name"}
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Slot E: Aesthetic Element (Medium, or fills remaining space) */}
            <motion.div variants={item} className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-1">
                <Card className="h-full bg-primary/5 border-primary/20 overflow-hidden relative">
                    <div className="absolute inset-0 z-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                        <Hero3D />
                    </div>
                    <CardHeader className="relative z-10 p-4">
                        <CardTitle className="text-primary/70 text-[10px] uppercase tracking-[0.2em] font-bold">Spatial Engine</CardTitle>
                    </CardHeader>
                </Card>
            </motion.div>
        </motion.div>
    );
}
