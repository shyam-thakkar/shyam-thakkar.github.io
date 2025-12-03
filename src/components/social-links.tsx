import React from "react";
import { Instagram, Twitter, Facebook, Mail, Github } from "lucide-react";

// Pinterest icon from lucide-react doesn't exist, so we'll use a custom SVG for it
const PinterestIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 0a12 12 0 0 0-4.37 23.17c-.1-.92-.19-2.33 0-3.33l1.45-6.15s-.37-.74-.37-1.84c0-1.72 1-3 2.24-3 1.05 0 1.56.79 1.56 1.74 0 1.06-.68 2.64-1.03 4.11-.29 1.23.62 2.23 1.84 2.23 2.21 0 3.91-2.33 3.91-5.69 0-2.97-2.14-5.05-5.19-5.05-3.54 0-5.62 2.65-5.62 5.39 0 1.07.41 2.21.92 2.83.1.12.11.23.08.35l-.34 1.4c-.05.22-.18.27-.42.16-1.56-.73-2.54-3.01-2.54-4.85 0-3.94 2.86-7.56 8.25-7.56 4.33 0 7.69 3.08 7.69 7.2 0 4.29-2.71 7.75-6.47 7.75-1.26 0-2.45-.66-2.86-1.43l-.78 2.97c-.28 1.09-1.04 2.45-1.55 3.28A12 12 0 1 0 12 0z" />
  </svg>
);

interface SocialLink {
  name: string;
  href: string;
  icon: "instagram" | "twitter" | "pinterest" | "facebook" | "mail" | "github";
  ariaLabel: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className = "" }: SocialLinksProps) {
  const getIcon = (iconName: SocialLink["icon"]) => {
    switch (iconName) {
      case "instagram":
        return Instagram;
      case "twitter":
        return Twitter;
      case "pinterest":
        return PinterestIcon;
      case "facebook":
        return Facebook;
      case "mail":
        return Mail;
      case "github":
        return Github;
      default:
        return Mail;
    }
  };

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => {
        const Icon = getIcon(link.icon);
        return (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label={link.ariaLabel}
          >
            <Icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
          </a>
        );
      })}
    </div>
  );
}
