import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { USER_INFO } from "@/constants/seed-data";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/Ishant2362", icon: Github },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/ishant-pathania-98a795274", icon: Linkedin },
];

const contactInfo = [
    { name: "lpsishant4662@gmail.com", href: "mailto:lpsishant4662@gmail.com", icon: Mail },
    { name: "+91 9582428535", href: "tel:+919582428535", icon: Phone },
];

export function Footer() {
    return (
        <footer className="w-full py-12 px-4 md:px-8 border-t border-border/50 bg-background/50">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold tracking-tight">{USER_INFO.name}</h3>
                    <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                        {USER_INFO.title} focused on building high-impact data narratives and interactive digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full md:w-auto">
                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Connect</h4>
                        <div className="flex flex-col gap-2">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <link.icon className="w-4 h-4" />
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Contact</h4>
                        <div className="flex flex-col gap-2">
                            {contactInfo.map((info) => (
                                <a
                                    key={info.name}
                                    href={info.href}
                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                                >
                                    <info.icon className="w-4 h-4" />
                                    {info.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center overflow-hidden">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <span>&copy; {new Date().getFullYear()} Ishant Pathania</span>
                </div>
                <span>Curated insights &bull; Built for impact</span>
            </div>
        </footer>
    );
}
