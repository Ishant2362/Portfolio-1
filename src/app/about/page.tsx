import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { USER_INFO } from "@/constants/seed-data";
import { OptimizedImage } from "@/components/ui/optimized-image";

export default function AboutPage() {
    return (
        <main className="flex-1 pt-32 pb-20 px-4 md:px-8 max-w-5xl mx-auto space-y-16">
            <header className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Data <span className="text-primary italic">Analyst</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
                    Bridging the gap between complex datasets and strategic business intelligence through SQL proficiency, lead-by-example analytics, and a commitment to precision.
                </p>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold border-b border-primary/20 pb-2 inline-block">Professional Summary</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            As a dedicated Data Analyst and current MCA student, I specialize in transforming raw data into clear, actionable insights using SQL, Excel, and Power BI. During my internship as a Senior HOD, I successfully led a team of 25 interns, balancing technical data management with strategic leadership. My approach is grounded in a continuous learning mindset and a commitment to solving real-world business problems through precision and analytical rigour.
                        </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary/50 group" asChild>
                            <a href={USER_INFO.contact.github} target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 group-hover:text-primary" />
                                <span className="sr-only">GitHub</span>
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary/50 group" asChild>
                            <a href={USER_INFO.contact.linkedin} target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5 group-hover:text-primary" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/10 hover:border-primary/50 group" asChild>
                            <a href={`mailto:${USER_INFO.contact.email}`}>
                                <Mail className="w-5 h-5 group-hover:text-primary" />
                                <span className="sr-only">Email</span>
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="aspect-square bg-muted/10 rounded-3xl border border-border/50 relative overflow-hidden group shadow-2xl shadow-primary/5">
                    <OptimizedImage
                        src="/profile.jpeg"
                        alt="Ishant Pathania - Data Analyst"
                        fill
                        className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                        containerClassName="h-full w-full"
                        priority
                    />
                    {/* Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                </div>
            </section>
        </main>
    );
}
