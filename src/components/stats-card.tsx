"use client"

import React from "react";
import { Sparkles, Briefcase, Code } from "lucide-react";

interface StatsCardProps {
    onClick: () => void;
}

export function StatsCard({ onClick }: StatsCardProps) {
    return (
        <div
            onClick={onClick}
            className="w-full max-w-md bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                        SHYAM-DEV-1
                    </h3>
                    <span className="text-xs px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded font-mono">
                        v1.0.0
                    </span>
                </div>
                <Sparkles className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
                <StatItem
                    icon={<Briefcase className="w-4 h-4" />}
                    label="Experience"
                    value="2+ Years"
                />
                <StatItem
                    icon={<Code className="w-4 h-4" />}
                    label="GenAI Projects"
                    value="10+"
                />
            </div>

            {/* CTA */}
            {/* <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs text-zinc-600 dark:text-zinc-400 text-center group-hover:text-zinc-900 dark:group-hover:text-zinc-50 transition-colors">
                    Click to view full model specifications →
                </p>
            </div> */}
        </div>
    );
}

function StatItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400">
                {icon}
                <span className="text-xs font-medium">{label}</span>
            </div>
            <span className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                {value}
            </span>
        </div>
    );
}
