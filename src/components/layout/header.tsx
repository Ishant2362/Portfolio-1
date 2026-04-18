"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { USER_INFO } from "@/constants/seed-data";

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-[60] h-16 bg-background/60 backdrop-blur-xl border-b border-border/50">
            <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
                {/* Left Side: Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-foreground/5 flex items-center justify-center overflow-hidden border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                        <img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
                            {USER_INFO.name}
                        </span>
                        <span className="hidden sm:inline text-muted-foreground/50 mx-1">/</span>
                        <span className="hidden sm:inline text-sm font-medium text-muted-foreground">
                            {USER_INFO.title}
                        </span>
                    </div>
                </Link>

                {/* Right Side: CTA */}
                <div className="flex items-center gap-3">
                    <Button
                        asChild
                        variant="ghost"
                        size="sm"
                        className="rounded-full px-4 text-xs font-bold hover:bg-primary/10 hover:text-primary transition-all"
                    >
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            View Resume
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant="default"
                        size="sm"
                        className="rounded-full px-6 text-xs font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
                    >
                        <a href="/resume.pdf" download="Ishant_Pathania_Resume.pdf">
                            Download
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
