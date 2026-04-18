"use client";

import { useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SimpleLineChart from "./charts/simple-line-chart";

// Register GSAP Plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface Step {
    id: number;
    title: string;
    description: string;
    data: { date: string; value: number }[];
}

interface ScrollyStoryProps {
    steps: Step[];
}

export default function ScrollyStory({ steps }: ScrollyStoryProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStepIndex, setActiveStepIndex] = useState(0);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const stepElements = gsap.utils.toArray<HTMLElement>(".scrolly-step");

            stepElements.forEach((step, index) => {
                ScrollTrigger.create({
                    trigger: step,
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => setActiveStepIndex(index),
                    onEnterBack: () => setActiveStepIndex(index),
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [steps]);

    return (
        <div ref={containerRef} className="relative w-full max-w-7xl mx-auto px-4 md:px-8 py-20">
            <div className="flex flex-col md:flex-row gap-8 md:gap-16">

                {/* Left Column: Scrolling Text */}
                <div className="w-full md:w-1/2 space-y-[50vh] pb-[50vh]">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`scrolly-step transition-opacity duration-500 p-8 rounded-2xl border bg-background/50 backdrop-blur-sm ${activeStepIndex === index ? "opacity-100 border-primary shadow-lg" : "opacity-30 border-transparent"
                                }`}
                        >
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Right Column: Sticky Visualization */}
                <div className="w-full md:w-1/2 md:sticky md:top-[20vh] h-[400px] md:h-[600px] flex items-center justify-center">
                    <div className="w-full h-full bg-card/30 rounded-3xl border border-border/50 p-6 flex flex-col justify-center items-center relative overflow-hidden">

                        {/* Background Accent */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />

                        <div className="w-full h-[300px] relative z-10 transition-all duration-700 ease-in-out">
                            <SimpleLineChart
                                data={steps[activeStepIndex].data}
                                className="w-full h-full"
                            />
                        </div>

                        <div className="mt-8 text-center relative z-10">
                            <span className="text-sm font-medium uppercase tracking-widest text-primary/60">
                                Phase {activeStepIndex + 1}: {steps[activeStepIndex].title}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
