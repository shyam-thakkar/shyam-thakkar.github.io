"use client"

import { ThemeToggle } from "@/components/theme-toggle";
import { ModelCard } from "@/components/model-card";
import { StatsCard } from "@/components/stats-card";
import { TechBadge } from "@/components/tech-badge";
import { SocialLinks } from "@/components/social-links";
import { TechStack, TechItem } from "@/components/tech-stack";
import { ProjectCard } from "@/components/project-card";
import { ProjectDetail, ProjectDetailData } from "@/components/project-detail";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [view, setView] = useState<'main' | 'model-card'>('main');
  const [selectedProject, setSelectedProject] = useState<ProjectDetailData | null>(null);

  // Detailed project data
  const projectDetails: Record<string, ProjectDetailData> = {
    "doc-analysis": {
      title: "AI-Powered Document Analysis System",
      description: "A production-grade GenAI application that analyzes complex documents using LangChain and GPT-4.",
      longDescription: "This comprehensive document analysis system leverages advanced AI techniques to process, understand, and extract insights from complex documents. Built with production-grade architecture, it handles multiple document formats and provides intelligent search capabilities through RAG (Retrieval Augmented Generation) implementation.",
      image: "/project-document-analysis.png",
      tags: ["LangChain", "OpenAI", "FastAPI", "PostgreSQL", "Docker"],
      techStack: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python", url: "https://www.python.org/" },
        { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain", url: "https://www.langchain.com/" },
        { name: "OpenAI", logo: "/openai-2.svg", url: "https://openai.com/", invertDark: true },
        { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi", url: "https://fastapi.tiangolo.com/" },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql", url: "https://www.postgresql.org/" },
        { name: "Docker", logo: "https://cdn.simpleicons.org/docker", url: "https://www.docker.com/" },
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      date: "December 2024",
      team: "Solo Project",
      features: [
        "Intelligent document chunking with semantic understanding",
        "Multi-document reasoning and cross-referencing capabilities",
        "Vector-based semantic search with hybrid ranking",
        "Real-time document processing and analysis",
        "RESTful API with comprehensive documentation"
      ],
      challenges: [
        "Optimizing chunk sizes for different document types while maintaining context",
        "Implementing efficient caching strategies to reduce API costs",
        "Handling large documents without exceeding token limits",
        "Building a scalable vector database architecture"
      ]
    },
    "multiagent": {
      title: "LangGraph Multi-Agent System",
      description: "A sophisticated multi-agent system using LangGraph for automated customer support.",
      longDescription: "This advanced multi-agent system demonstrates the power of LangGraph for building complex AI workflows. It implements state management, conditional routing, and human-in-the-loop patterns to create an intelligent customer support system that can handle diverse queries efficiently.",
      image: "/project-multiagent.png",
      tags: ["LangGraph", "Python", "Redis", "React"],
      techStack: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python", url: "https://www.python.org/" },
        { name: "LangGraph", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langgraph.png", url: "https://www.langchain.com/langgraph", invertDark: true },
        { name: "Redis", logo: "https://cdn.simpleicons.org/redis", url: "https://redis.io/" },
        { name: "React", logo: "https://cdn.simpleicons.org/react", url: "https://react.dev/" },
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      date: "November 2024",
      team: "Team of 2",
      features: [
        "Multiple specialized agents working collaboratively",
        "State persistence and recovery mechanisms",
        "Conditional routing based on query complexity",
        "Human-in-the-loop approval workflows",
        "Real-time agent communication and coordination"
      ],
      challenges: [
        "Designing efficient state management across multiple agents",
        "Implementing reliable handoff mechanisms between agents",
        "Optimizing agent selection and routing logic",
        "Ensuring consistent behavior across different execution paths"
      ]
    },
    "chat-platform": {
      title: "Real-time AI Chat Platform",
      description: "A scalable chat platform with streaming responses and context-aware AI assistants.",
      longDescription: "This real-time chat platform provides a seamless conversational experience with AI assistants. Built with WebSocket technology for instant message delivery, it features streaming responses, conversation memory, and support for multiple LLM providers with automatic fallback mechanisms for high availability.",
      image: "/project-chat.png",
      tags: ["Next.js", "Django", "WebSocket", "Pinecone"],
      techStack: [
        { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs", url: "https://nextjs.org/", invertDark: true },
        { name: "React", logo: "https://cdn.simpleicons.org/react", url: "https://react.dev/" },
        { name: "Django", logo: "/svg_378410.svg", url: "https://www.djangoproject.com/", invertDark: true },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql", url: "https://www.postgresql.org/" },
        { name: "Redis", logo: "https://cdn.simpleicons.org/redis", url: "https://redis.io/" },
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      date: "October 2024",
      team: "Team of 3",
      features: [
        "Real-time message streaming with WebSocket connections",
        "Conversation history and context management",
        "Multi-provider LLM support with automatic failover",
        "User authentication and session management",
        "Responsive UI with mobile support"
      ],
      challenges: [
        "Managing WebSocket connections at scale",
        "Implementing efficient conversation context windowing",
        "Handling LLM provider rate limits and errors gracefully",
        "Optimizing database queries for chat history retrieval"
      ]
    },
    "code-review": {
      title: "Intelligent Code Review Assistant",
      description: "An AI-powered tool that reviews pull requests and identifies potential bugs.",
      longDescription: "This intelligent code review assistant automates the code review process by analyzing pull requests, suggesting improvements, and identifying potential bugs using fine-tuned language models and static analysis. It integrates seamlessly with GitHub workflows to provide instant feedback on code quality.",
      image: "/project-code-review.png",
      tags: ["OpenAI", "GitHub API", "FastAPI", "PostgreSQL"],
      techStack: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python", url: "https://www.python.org/" },
        { name: "OpenAI", logo: "/openai-2.svg", url: "https://openai.com/", invertDark: true },
        { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi", url: "https://fastapi.tiangolo.com/" },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql", url: "https://www.postgresql.org/" },
        { name: "Docker", logo: "https://cdn.simpleicons.org/docker", url: "https://www.docker.com/" },
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      date: "September 2024",
      team: "Solo Project",
      features: [
        "Automated pull request analysis and review",
        "Code quality scoring and metrics",
        "Security vulnerability detection",
        "Best practice recommendations",
        "GitHub webhook integration for automatic reviews"
      ],
      challenges: [
        "Training models to understand project-specific coding standards",
        "Reducing false positives in bug detection",
        "Processing large pull requests efficiently",
        "Integrating with various GitHub workflows"
      ]
    },
    "search-engine": {
      title: "Semantic Search Engine for Documentation",
      description: "A vector-based search system with hybrid search for technical documentation.",
      longDescription: "This semantic search engine revolutionizes how users find information in technical documentation. By combining traditional keyword search with advanced vector-based semantic matching, it delivers highly accurate results even when users don't know the exact terminology. Built for scale and speed.",
      image: "/project-search.png",
      tags: ["Hugging Face", "FAISS", "Django", "Elasticsearch"],
      techStack: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python", url: "https://www.python.org/" },
        { name: "Hugging Face", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/huggingface-color.png", url: "https://huggingface.co/" },
        { name: "Django", logo: "/svg_378410.svg", url: "https://www.djangoproject.com/", invertDark: true },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql", url: "https://www.postgresql.org/" },
        { name: "Docker", logo: "https://cdn.simpleicons.org/docker", url: "https://www.docker.com/" },
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      date: "August 2024",
      team: "Team of 2",
      features: [
        "Hybrid search combining keyword and semantic matching",
        "Real-time indexing of documentation updates",
        "Relevance scoring with custom ranking algorithms",
        "Multi-language support for documentation",
        "Search analytics and query optimization"
      ],
      challenges: [
        "Balancing semantic and keyword search weights",
        "Optimizing vector similarity search performance",
        "Handling documentation updates without downtime",
        "Managing large embedding databases efficiently"
      ]
    }
  };

  const openProjectDetail = (projectKey: string) => {
    const detail = projectDetails[projectKey];
    if (detail) {
      setSelectedProject(detail);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-zinc-50 via-white to-zinc-100 dark:from-zinc-950 dark:via-black dark:to-zinc-900">
      {/* Sticky Header with Backdrop Blur */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-zinc-950/80 shadow-lg">
        <div className="mx-auto w-full md:w-[50%] px-4 md:px-8 py-4 md:border-l-2 md:border-r-2 border-b-2 border-zinc-200 dark:border-zinc-800">
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
                {/* Greeting - Larger and Brighter */}
                <div className="flex flex-wrap items-baseline gap-2 mb-4">
                  <p className="text-3xl font-bold text-black dark:text-white">
                    Hey! I'm Shyam Thakkar
                  </p>
                  <p className="text-4xl font-bold text-zinc-400 dark:text-zinc-400 font-caveat">
                    - A GenAI Developer
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

            {/* Tech Stack Section */}
            <section className="py-8">
              <TechStack
                items={[
                  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                  { name: "Python", logo: "https://cdn.simpleicons.org/python", url: "https://www.python.org/" },
                  { name: "React", logo: "https://cdn.simpleicons.org/react", url: "https://react.dev/" },
                  { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs", url: "https://nextjs.org/", invertDark: true },
                  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss", url: "https://tailwindcss.com/" },
                  { name: "Django", logo: "/svg_378410.svg", url: "https://www.djangoproject.com/", invertDark: true },
                  { name: "FastAPI", logo: "https://cdn.simpleicons.org/fastapi", url: "https://fastapi.tiangolo.com/" },
                  { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql", url: "https://www.postgresql.org/" },
                  { name: "Redis", logo: "https://cdn.simpleicons.org/redis", url: "https://redis.io/" },
                  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb", url: "https://www.mongodb.com/" },
                  { name: "Docker", logo: "https://cdn.simpleicons.org/docker", url: "https://www.docker.com/" },
                  { name: "Git", logo: "https://cdn.simpleicons.org/git", url: "https://git-scm.com/" },
                  { name: "AWS", logo: "/aws-svgrepo-com.svg", url: "https://aws.amazon.com/", invertDark: true },
                  { name: "Linux", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Icons8_flat_linux.svg", url: "https://www.linux.org/" },
                  { name: "LangChain", logo: "https://cdn.simpleicons.org/langchain", url: "https://www.langchain.com/" },
                  { name: "OpenAI", logo: "/openai-2.svg", url: "https://openai.com/", invertDark: true },
                  { name: "Hugging Face", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/huggingface-color.png", url: "https://huggingface.co/" },
                  { name: "LangGraph", logo: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/langgraph.png", url: "https://www.langchain.com/langgraph", invertDark: true },
                ]}
              />
            </section>

            {/* Projects Section */}
            <section className="py-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
                Projects
              </h2>

              {/* All Projects - Card Style Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProjectCard
                  project={{
                    title: "AI-Powered Document Analysis System",
                    description: "A production-grade GenAI application that analyzes complex documents using LangChain and GPT-4. Features include intelligent chunking, semantic search, and multi-document reasoning with RAG architecture.",
                    image: "/project-document-analysis.png",
                    tags: ["LangChain", "OpenAI", "FastAPI", "PostgreSQL", "Docker"],
                    techStack: projectDetails["doc-analysis"].techStack,
                    liveUrl: "https://example.com",
                    githubUrl: "https://github.com",
                    variant: "card"
                  }}
                  onClick={() => openProjectDetail("doc-analysis")}
                />
                <ProjectCard
                  project={{
                    title: "LangGraph Multi-Agent System",
                    description: "Built a sophisticated multi-agent system using LangGraph for automated customer support. Implements state management, conditional routing, and human-in-the-loop workflows.",
                    image: "/project-multiagent.png",
                    tags: ["LangGraph", "Python", "Redis", "React"],
                    techStack: projectDetails["multiagent"].techStack,
                    liveUrl: "https://example.com",
                    githubUrl: "https://github.com",
                    variant: "card"
                  }}
                  onClick={() => openProjectDetail("multiagent")}
                />
                <ProjectCard
                  project={{
                    title: "Real-time AI Chat Platform",
                    description: "Developed a scalable chat platform with streaming responses, conversation memory, and context-aware AI assistants. Supports multiple LLM providers with fallback mechanisms.",
                    image: "/project-chat.png",
                    tags: ["Next.js", "Django", "WebSocket", "Pinecone"],
                    techStack: projectDetails["chat-platform"].techStack,
                    liveUrl: "https://example.com",
                    githubUrl: "https://github.com",
                    variant: "card"
                  }}
                  onClick={() => openProjectDetail("chat-platform")}
                />
                <ProjectCard
                  project={{
                    title: "Intelligent Code Review Assistant",
                    description: "An AI-powered tool that reviews pull requests, suggests improvements, and identifies potential bugs using fine-tuned models and static analysis.",
                    image: "/project-code-review.png",
                    tags: ["OpenAI", "GitHub API", "FastAPI", "PostgreSQL"],
                    techStack: projectDetails["code-review"].techStack,
                    liveUrl: "https://example.com",
                    githubUrl: "https://github.com",
                    variant: "card"
                  }}
                  onClick={() => openProjectDetail("code-review")}
                />
                <ProjectCard
                  project={{
                    title: "Semantic Search Engine for Documentation",
                    description: "Built a vector-based search system for technical documentation with hybrid search combining keyword and semantic matching for improved accuracy.",
                    image: "/project-search.png",
                    tags: ["Hugging Face", "FAISS", "Django", "Elasticsearch"],
                    techStack: projectDetails["search-engine"].techStack,
                    liveUrl: "https://example.com",
                    githubUrl: "https://github.com",
                    variant: "card"
                  }}
                  onClick={() => openProjectDetail("search-engine")}
                />
              </div>
            </section>

            {/* About Section Placeholder */}
            <section className="py-12">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-6">
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

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
