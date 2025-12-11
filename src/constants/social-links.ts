export interface SocialLink {
  name: string;
  href: string;
  icon: "instagram" | "twitter" | "pinterest" | "facebook" | "mail" | "github" | "linkedin";
  ariaLabel: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Email", href: "mailto:work.shyamthakkar@gmail.com", icon: "mail", ariaLabel: "Email" },
  { name: "LinkedIn", href: "https://linkedin.com", icon: "linkedin", ariaLabel: "LinkedIn" },
  { name: "GitHub", href: "https://github.com", icon: "github", ariaLabel: "GitHub" },
];
