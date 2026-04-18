"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderIcon, User } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Projects", href: "/projects", icon: FolderIcon },
    { name: "About", href: "/about", icon: User },
];

export function Navbar() {
    const pathname = usePathname();

    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <motion.nav
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-2 p-2 bg-background/60 backdrop-blur-xl border border-border/50 rounded-full shadow-2xl shadow-primary/10"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 hover:bg-primary/10 group",
                                isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                            )}
                        >
                            <item.icon className="w-5 h-5" />

                            {/* Tooltip */}
                            <span className="absolute -top-12 px-3 py-1 bg-popover text-popover-foreground text-[10px] font-bold uppercase tracking-widest rounded-md border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                                {item.name}
                            </span>

                            {isActive && (
                                <motion.div
                                    layoutId="nav-glow"
                                    className="absolute inset-0 bg-primary/20 rounded-full blur-md -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </motion.nav>
        </div>
    );
}
