import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Shyam Thakkar | GenAI Developer",
  description: "Portfolio of Shyam Thakkar - A production-ready GenAI Engineer specializing in building intelligent applications with LangChain, LangGraph, Django, and FastAPI.",
  keywords: ["GenAI", "AI Developer", "LangChain", "LangGraph", "Python", "Django", "FastAPI", "Portfolio"],
  authors: [{ name: "Shyam Thakkar" }],
  openGraph: {
    title: "Shyam Thakkar | GenAI Developer",
    description: "Portfolio of Shyam Thakkar - GenAI Engineer specializing in intelligent applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="font-sans antialiased transition-colors duration-300"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

