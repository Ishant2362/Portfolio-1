"use client";

import { useMemo } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

interface DataPoint {
    date: string;
    value: number;
}

interface SimpleLineChartProps {
    data: DataPoint[];
    className?: string;
    lineColor?: string;
}

export default function SimpleLineChart({
    data,
    className = "h-[300px] w-full",
    lineColor = "var(--primary)",
}: SimpleLineChartProps) {
    // Memoize data to prevent unnecessary re-renders
    const memoizedData = useMemo(() => data, [data]);

    return (
        <div className={className}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={memoizedData}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false}
                        stroke="hsla(var(--border), 0.2)"
                    />
                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "currentColor", fontSize: 12, opacity: 0.5 }}
                        dy={10}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: "currentColor", fontSize: 12, opacity: 0.5 }}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                            borderRadius: "8px",
                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                        }}
                        labelStyle={{ color: "hsl(var(--foreground))", fontWeight: "bold" }}
                        itemStyle={{ color: lineColor }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke={lineColor}
                        strokeWidth={3}
                        dot={{ r: 4, fill: lineColor, strokeWidth: 2, stroke: "hsl(var(--background))" }}
                        activeDot={{ r: 6, strokeWidth: 0 }}
                        animationDuration={1500}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
