"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { ModelCard } from "@/components/model-card";
import { StatsCard } from "@/components/stats-card";
import { TechBadge } from "@/components/tech-badge";
import { SocialLinks } from "@/components/social-links";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState<'main' | 'model-card'>('main');

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      {/* Sticky Header with Backdrop Blur */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 shadow-lg">
        <div className="mx-auto w-[60%] px-8 py-4 border-l-2 border-r-2 border-b-2 border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            {/* Profile Section - Clickable */}
            <div
              className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => setView('main')}
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
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 leading-tight">
                  SHYAM THAKKAR
                </h2>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
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
      <main className="mx-auto w-[60%] min-h-screen px-8 py-6 border-l-2 border-r-2 border-zinc-200 dark:border-zinc-800">
        {view === 'main' ? (
          <>
            {/* Hero Section */}
            <section className="py-6">
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
                <StatsCard onClick={() => setView('model-card')} />

                {/* Right: Description */}

              </div>
              <div className="mt-6">
                <div className="text-lg leading-loose text-zinc-700 dark:text-zinc-300 mb-6">
                  Hey! I'm a GenAI Developer specializing in building intelligent, production-grade applications using
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
                  for backend. I specialize in building Gen AI apps with
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
                    { name: "Instagram", href: "https://instagram.com/lowkey.shazz", icon: "instagram", ariaLabel: "Instagram" },
                    { name: "Twitter", href: "https://twitter.com/yourhandle", icon: "twitter", ariaLabel: "Twitter" },
                    { name: "Pinterest", href: "https://pinterest.com/yourhandle", icon: "pinterest", ariaLabel: "Pinterest" },
                    { name: "Facebook", href: "https://facebook.com/yourhandle", icon: "facebook", ariaLabel: "Facebook" },
                    { name: "Email", href: "mailto:work.shyamthakkar@gmail.com", icon: "mail", ariaLabel: "Email" },
                    { name: "GitHub", href: "https://github.com/yourusername", icon: "github", ariaLabel: "GitHub" },
                  ]}
                />
              </div>
            </section>

            {/* Projects Section Placeholder */}
            <section className="py-12">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project cards will go here */}
                <div className="h-64 bg-zinc-100 dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                  <p className="text-zinc-500 dark:text-zinc-400">Project 1</p>
                </div>
                <div className="h-64 bg-zinc-100 dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                  <p className="text-zinc-500 dark:text-zinc-400">Project 2</p>
                </div>
              </div>
            </section>

            {/* About Section Placeholder */}
            <section className="py-12">
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 mb-6">
                About
              </h2>
              <div className="h-48 bg-zinc-100 dark:bg-zinc-900 rounded-xl border-2 border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
                <p className="text-zinc-500 dark:text-zinc-400">About section content</p>
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
    </div>
  );
}
