"use client";

import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { ModelCard } from "@/components/model-card";
import { StatsCard } from "@/components/stats-card";
import { TechBadge } from "@/components/tech-badge";
import { SocialLinks } from "@/components/social-links";
import { TechStack } from "@/components/tech-stack";
import { ProjectCard } from "@/components/project-card";
import { ProjectDetail, ProjectDetailData } from "@/components/project-detail";
import { Experience } from "@/components/experience";
import { PROJECT_DETAILS } from "@/constants/project-data";
import { TypingAnimation } from "@/components/typing-animation";


export default function Home() {
  const [view, setView] = useState<'main' | 'model-card'>('main');
  const [selectedProject, setSelectedProject] = useState<ProjectDetailData | null>(null);

  const projectDetails = useMemo(() => PROJECT_DETAILS, []);

  const openProjectDetail = useCallback((projectKey: string) => {
    const detail = projectDetails[projectKey];
    if (detail) {
      setSelectedProject(detail);
    }
  }, [projectDetails]);

  const handleViewChange = useCallback(() => setView('main'), []);
  const handleStatsClick = useCallback(() => setView('model-card'), []);
  const handleCloseProject = useCallback(() => setSelectedProject(null), []);


return (
  <div className="min-h-screen w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
    {/* Sticky Header with Backdrop Blur */}
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 shadow-lg">
      <div className="mx-auto w-full md:w-[50%] px-4 md:px-8 py-4 md:border-l-2 md:border-r-2 border-b-2 border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between">
          {/* Profile Section - Clickable */}
          <div
            className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleViewChange}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleViewChange()}
            aria-label="Return to main view"
          >
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 shadow-sm">
              <Image
                src="/profile.png"
                alt="Profile"
                width={800}
                height={800}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div>
              <h2 className="text-lg font-bold text-black dark:text-white leading-tight">
                SHYAM THAKKAR
              </h2>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                Gen AI Developer
              </p>
            </div>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>

    {/* Content Container with Vertical Borders */}
    <main className="mx-auto w-full md:w-[50%] min-h-screen px-4 md:px-8 py-6 md:border-l-2 md:border-r-2 border-zinc-200 dark:border-zinc-800">
      {view === 'main' ? (
        <>
          {/* Hero Section */}
          <section className="py-2">
            <div className="flex gap-8 items-center ">
              {/* Left: Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-zinc-200 dark:bg-zinc-800 border-2 border-zinc-300 dark:border-zinc-700 shadow-md">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>

              </div>
              <StatsCard onClick={handleStatsClick} />

              {/* Right: Description */}

            </div>
            <div className="mt-6">
              {/* Greeting - Larger and Brighter */}
              <div className="flex flex-wrap items-baseline gap-2 mb-4">
                <p className="text-3xl font-bold text-black dark:text-white">
                  Hey! I'm Shyam Thakkar
                </p>
                <p className="text-4xl font-bold text-zinc-400 dark:text-zinc-400 font-caveat">
                  - <TypingAnimation text="A GenAI Developer" speed={100} delay={500} />
                </p>
              </div>
              {/* Description */}
              <div className="text-lg leading-loose text-zinc-600 dark:text-zinc-400 mb-6">
                I have been specializing in building intelligent, production-grade applications using
                <TechBadge
                  name="Python"
                  href="https://www.python.org/"
                  imageSrc="/python-svgrepo-com.svg"
                />
                with
                <TechBadge
                  name="Django"
                  href="https://www.djangoproject.com/"
                  imageSrc="/django-icon-svgrepo-com.svg"
                />
                and
                <TechBadge
                  name="FastAPI"
                  href="https://fastapi.tiangolo.com/"
                  imageSrc="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png"
                />
                for backend. I have been specializing in building Gen AI apps with
                <TechBadge
                  name="LangChain"
                  href="https://www.langchain.com/"
                  imageSrc="https://avatars.githubusercontent.com/u/126733545?s=200&v=4"
                />
                and
                <TechBadge
                  name="LangGraph"
                  href="https://langchain-ai.github.io/langgraph/"
                  imageSrc="https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langgraph.png"
                />
                , creating intelligent solutions powered by AI.
              </div>

              {/* Social Media Links */}
              <SocialLinks
                className="mt-6"
                links={[
                  { name: "Email", href: "mailto:work.shyamthakkar@gmail.com", icon: "mail", ariaLabel: "Email" },
                  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin", ariaLabel: "LinkedIn" },
                  { name: "GitHub", href: "https://github.com", icon: "github", ariaLabel: "GitHub" },
                ]}
              />
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="py-4">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
              Tech Stack
            </h2>
            <TechStack
              items={[
                { name: "Python", logo: "https://cdn.simpleicons.org/python", url: "https://www.python.org/" },
                { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                { name: "C++", logo: "https://cdn.simpleicons.org/cplusplus", url: "https://cplusplus.com/" },
                { name: "Java", logo: "/icons8-java-240.svg", url: "https://www.java.com/" },
                { name: "Django", logo: "/svg_378410.svg", url: "https://www.djangoproject.com/", invertDark: true },
                { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain", url: "https://www.langchain.com/", invertDark: true },
                { name: "TensorFlow", logo: "https://cdn.simpleicons.org/tensorflow", url: "https://www.tensorflow.org/" },
                { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg", url: "https://keras.io/" },
                { name: "PyTorch", logo: "https://cdn.simpleicons.org/pytorch", url: "https://pytorch.org/" },
                { name: "OpenCV", logo: "https://cdn.simpleicons.org/opencv", url: "https://opencv.org/" },
                { name: "Streamlit", logo: "https://cdn.simpleicons.org/streamlit", url: "https://streamlit.io/" },
                { name: "Selenium", logo: "https://cdn.simpleicons.org/selenium", url: "https://www.selenium.dev/" },
                { name: "Playwright", logo: "/playwright-seeklogo.svg", url: "https://playwright.dev/" },
                { name: "Git", logo: "https://cdn.simpleicons.org/git", url: "https://git-scm.com/" },
                { name: "Docker", logo: "https://cdn.simpleicons.org/docker", url: "https://www.docker.com/" },
                { name: "FastAPI", logo: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png", url: "https://fastapi.tiangolo.com/" },
                { name: "LangGraph", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langgraph.png", url: "https://langchain-ai.github.io/langgraph/", invertDark: true },
              ]}
            />
          </section>

          {/* Projects Section */}
          <section className="py-4">
            {/* Experience Section */}
            <Experience />

            <h2 className="text-3xl font-bold text-black dark:text-white mb-6 mt-6">
              Projects
            </h2>

            {/* All Projects - Card Style Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                project={{
                  title: "Karate Kata Evaluation System",
                  description: "A real-time AI system for karate pose detection and analysis using MoveNet and custom deep neural networks for instant feedback.",
                  image: "/project-karate.png",
                  tags: ["Python", "Keras", "OpenCV", "TensorFlow"],
                  techStack: projectDetails["karate-kata"].techStack,
                  liveUrl: "https://example.com",
                  githubUrl: "https://github.com",
                  variant: "card"
                }}
                onClick={() => openProjectDetail("karate-kata")}
              />
              <ProjectCard
                project={{
                  title: "Stock Price Prediction System",
                  description: "Real-time stock price prediction web app using LSTM models for accurate 7-day forecasts.",
                  image: "/project-stock.png",
                  tags: ["Python", "Streamlit", "TensorFlow", "Keras"],
                  techStack: projectDetails["stock-prediction"].techStack,
                  liveUrl: "https://example.com",
                  githubUrl: "https://github.com",
                  variant: "card"
                }}
                onClick={() => openProjectDetail("stock-prediction")}
              />
            </div>
          </section>

          {/* Education Section */}
          <section className="py-2">
            <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
              Education
            </h2>
            <div className="bg-white dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                    G H Patel College of Engineering and Technology (GCET)
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Bachelor’s degree in Computer Engineering
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <span className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    CGPA: 8.73
                  </span>
                  <span className="block text-sm text-zinc-500 dark:text-zinc-500">
                    2021-2025
                  </span>
                </div>
              </div>
              <div className="text-zinc-600 dark:text-zinc-400 text-sm">
                Anand, India
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Model Card View */
        <section className="py-6">
          <ModelCard />
        </section>
      )}
    </main>

    {/* Project Detail Modal */}
    {selectedProject && (
      <ProjectDetail
        project={selectedProject}
        onClose={handleCloseProject}
      />
    )}
  </div>
);
}
