"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Global Error Boundary:", error);
    }, [error]);

    return (
        <main className="flex-1 flex flex-col items-center justify-center min-h-[70vh] px-4 text-center space-y-8">
            <motion.div
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                className="p-4 bg-destructive/10 rounded-full border border-destructive/20"
            >
                <AlertCircle className="w-16 h-16 text-destructive" />
            </motion.div>

            <div className="max-w-md space-y-4">
                <h1 className="text-3xl font-bold tracking-tight text-destructive">Data Pipeline Interrupted</h1>
                <p className="text-muted-foreground leading-relaxed">
                    An unexpected error occurred while processing the request. Our telemetry has been notified.
                </p>
                <div className="p-3 bg-muted rounded-lg font-mono text-[10px] text-left opacity-60">
                    {error.message || "Unknown error occurred"}
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={reset} variant="default" size="lg" className="rounded-full px-8">
                    <RefreshCcw className="w-4 h-4 mr-2" />
                    Retry Pipeline
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <a href="/">
                        <Home className="w-4 h-4 mr-2" />
                        Safety Home
                    </a>
                </Button>
            </div>
        </main>
    );
}
