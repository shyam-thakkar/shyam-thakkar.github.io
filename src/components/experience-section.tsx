import React from "react";
import { ExperienceItem, ExperienceProps } from "./experience-item";

const experiences: ExperienceProps[] = [
  {
    company: "Simplamo Enterprise JSC",
    role: "Senior Frontend Developer",
    type: "Full-time",
    duration: "10.2022 – Present",
    responsibilities: [
      "Develop AI Chat and AI Assistant features.",
      "Develop Whiteboards with real-time collaboration.",
      "Build and maintain the Zalo Mini App for Simplamo.",
      "Develop interactive chart and analytics widgets for the Dashboard.",
      "Improve core UI/UX consistency.",
      "Implement robust frontend solutions for web & mobile platforms."
    ],
    skills: ["TypeScript", "Next.js", "React Native", "MobX", "Tailwind", "Dify", "Zalo Mini App", "Agile"],
    logo: "https://ui-avatars.com/api/?name=Simplamo&background=random&color=fff&size=128"
  },
  {
    company: "Quaric Co., Ltd.",
    role: "Design Engineer",
    type: "Part-time",
    duration: "03.2024 – Present",
    responsibilities: [
      "Created Quaric brand identity.",
      "Developed Quaric Design System.",
      "Designed UI/UX for Quaric Website.",
      "Built an online ordering flow.",
      "Integrated VNPAY-QR.",
      "Registered the e-commerce site with government compliance."
    ],
    skills: ["Next.js", "Strapi", "Auth0", "VNPAY-QR", "Tailwind", "Docusaurus", "UI/UX", "Research"],
    logo: "https://ui-avatars.com/api/?name=Quaric&background=random&color=fff&size=128"
  },
  {
    company: "ZaDark (In-house project)",
    role: "Founder & Director",
    type: "Part-time",
    duration: "03.2024 – Present",
    responsibilities: [
      "Build and maintain ZaDark Chrome extension.",
      "Integrate AdSense and DocuSaurus.",
      "Support Chrome, Safari, Firefox, Edge.",
      "20k+ active users."
    ],
    skills: ["Browser Extensions", "Tailwind", "Next.js", "Chrome APIs", "UI/UX Design"],
    logo: "https://ui-avatars.com/api/?name=ZaDark&background=random&color=fff&size=128"
  }
];

export function ExperienceSection() {
  return (
    <section className="py">
      <h2 className="text-3xl font-bold text-black dark:text-white mb-8">
        Experience
      </h2>
      <div className="relative">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
}
