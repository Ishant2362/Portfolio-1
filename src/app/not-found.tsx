"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-8">
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative"
            >
                <div className="text-[12rem] font-black text-primary/5 select-none leading-none">
                    404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <Search className="w-24 h-24 text-primary opacity-20" />
                </div>
            </motion.div>

            <div className="max-w-md space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Data Point Not Found</h1>
                <p className="text-muted-foreground leading-relaxed">
                    The specific insight or page you're looking for doesn't exist in this dataset. It might have been moved or archived.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild variant="default" size="lg" className="rounded-full px-8">
                    <Link href="/">
                        <Home className="w-4 h-4 mr-2" />
                        Back to Dashboard
                    </Link>
                </Button>
                <Button onClick={() => window.history.back()} variant="outline" size="lg" className="rounded-full px-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                </Button>
            </div>
        </main>
    );
}
