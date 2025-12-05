import React from "react";
import Image from "next/image";
import { X, ExternalLink, Github, Calendar, Users } from "lucide-react";
import { TechStack, TechItem } from "./tech-stack";

export interface ProjectDetailData {
  title: string;
  description: string;
  longDescription: string;
  image?: string;
  images?: string[]; // Multiple project screenshots
  tags: string[];
  techStack: TechItem[];
  liveUrl?: string;
  githubUrl?: string;
  date?: string;
  team?: string;
  features?: string[];
  challenges?: string[];
}

interface ProjectDetailProps {
  project: ProjectDetailData;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
      <div className="min-h-screen px-4 py-8">
        <div className="mx-auto max-w-4xl bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border-2 border-zinc-200 dark:border-zinc-800">
          {/* Header with Close Button */}
          <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b-2 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-t-2xl">
            <h1 className="text-3xl font-bold text-black dark:text-white">
              {project.title}
            </h1>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Main Image */}
            {project.image && (
              <div className="relative h-96 w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-sm">
              {project.date && (
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>
              )}
              {project.team && (
                <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                  <Users className="w-4 h-4" />
                  <span>{project.team}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-medium rounded-lg hover:opacity-80 transition-opacity w-full sm:w-auto"
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white font-medium rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors w-full sm:w-auto"
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </a>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-3">
                About This Project
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-sm font-bold mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Technical Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-2"></span>
                      <span className="text-base">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Stack */}
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Technology Stack
              </h2>
              <TechStack items={project.techStack} />
            </div>

            {/* Additional Images Gallery */}
            {project.images && project.images.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((img, index) => (
                    <div
                      key={index}
                      className="relative h-64 bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            
          </div>
        </div>
      </div>
    </div>
  );
}
