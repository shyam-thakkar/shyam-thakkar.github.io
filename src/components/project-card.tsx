import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { TechStack, TechItem } from "./tech-stack"; // Assuming TechStack and TechItem are defined/imported from here

export interface ProjectData {
    title: string;
    description: string;
    image?: string;
    tags: string[];
    techStack?: TechItem[]; // Add techStack for displaying icons
    liveUrl?: string;
    githubUrl?: string;
    variant?: "card" | "minimal" | "featured";
}

interface ProjectCardProps {
    project: ProjectData;
    onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
    const variant = project.variant || "card";

    // Variant 1: Card Style - Modern card with image, hover effects
    if (variant === "card") {
        return (
            <div
                className="relative bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg cursor-pointer flex flex-col h-full"
                onClick={onClick}
            >
                {/* Image Section */}
                {project.image && (
                    <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}

                {/* Content Section */}
                <div className="p-4 flex flex-col flex-grow h-full">
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2 h-14 line-clamp-2">
                        {project.title}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 h-[60px] line-clamp-3">
                        {project.description}
                    </p>

                    {/* Technology Stack - using same component as main page */}
                    {project.techStack && project.techStack.length > 0 ? (
                        <div className="mb-4 h-16">
                            <TechStack items={project.techStack.slice(0, 6)} maxCols={8} />
                        </div>
                    ) : (
                        <div className="mb-4 h-16"></div> // Placeholder to maintain alignment if no tech stack
                    )}

                    {/* Links - Pushed to bottom */}
                    <div className="flex gap-3 mt-auto">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink className="w-4 h-4" />
                                Live Demo
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github className="w-4 h-4" />
                                Code
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Variant 2: Minimal Style - Clean, text-focused design
    if (variant === "minimal") {
        return (
            <div className="group border-l-4 border-zinc-300 dark:border-zinc-700 hover:border-black dark:hover:border-white pl-4 py-2 transition-all duration-300">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-black dark:text-white group-hover:underline">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-colors"
                            >
                                <Github className="w-4 h-4" />
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs text-zinc-500 dark:text-zinc-500"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        );
    }

    // Variant 3: Featured Style - Large, prominent design with side-by-side layout
    if (variant === "featured") {
        return (
            <div className="group relative bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    {project.image && (
                        <div className="relative h-64 md:h-auto md:w-1/2 bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    )}

                    {/* Content Section */}
                    <div className="p-8 md:w-1/2 flex flex-col justify-center">
                        <div className="inline-block px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-bold rounded-full mb-4 w-fit">
                            FEATURED
                        </div>
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-3">
                            {project.title}
                        </h3>
                        <p className="text-base text-zinc-600 dark:text-zinc-400 mb-6">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 text-sm font-medium bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-700"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-80 transition-opacity"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View Project
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 border-2 border-black dark:border-white text-black dark:text-white font-medium rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    Source Code
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
