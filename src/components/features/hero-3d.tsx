"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/ui/skeleton";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
    ssr: false,
    loading: () => <Skeleton className="w-full h-full rounded-md bg-muted/20" />,
});

export function Hero3D() {
    const [isMobile, setIsMobile] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsMounted(true);
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = (e: MediaQueryListEvent) => {
            setIsMobile(e.matches);
        };

        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    if (!isMounted) {
        return <Skeleton className="w-full h-full rounded-md bg-muted/20" />;
    }

    if (isMobile) {
        return (
            <div className="flex items-center justify-center w-full h-full bg-primary/5 rounded-md border border-primary/20 p-4">
                <div className="text-center">
                    <p className="text-sm font-semibold text-primary">3D Experience</p>
                    <p className="text-xs text-muted-foreground mt-1">
                        Optimized for Desktop
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full min-h-[300px] rounded-md overflow-hidden">
            {/* Placeholder Scene URL - Replace with your actual Spline export URL */}
            <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
        </div>
    );
}
