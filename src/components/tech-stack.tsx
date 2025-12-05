import React from "react";
import Image from "next/image";

export interface TechItem {
    name: string;
    logo: string; // URL to the logo image
    url: string;  // URL to the technology's homepage
    invertDark?: boolean; // If true, inverts the icon color in dark mode instead of using a white background
}

interface TechStackProps {
    items: TechItem[];
    className?: string;
    maxCols?: number; // Maximum number of columns (default: 16)
}

export function TechStack({ items, className = "", maxCols = 16 }: TechStackProps) {
    // Determine grid columns class based on maxCols
    const gridColsClass = maxCols === 8 
        ? "grid-cols-4 xs:grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10"
        : "grid-cols-6 xs:grid-cols-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-16";
    
    return (
        <div className={`w-full ${className}`}>


            <div className={`grid ${gridColsClass} gap-1`}>
                {items.map((item) => (
                    <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex items-center justify-center p-0.5 rounded-lg transition-all duration-300 aspect-square isolate"
                        aria-label={item.name}
                    >
                        {/* Logo */}
                        <div className={`group relative w-14 h-14 transition-all duration-300 hover:scale-110 rounded-md p-1 isolate ${item.invertDark ? 'dark:invert' : ''}`}>
                            <Image
                                src={item.logo}
                                alt={item.name}
                                fill
                                className="object-contain"
                                unoptimized // Since we might use external CDNs
                            />
                            
                            {/* Tooltip - shows above icon on hover */}
                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none whitespace-nowrap z-50">
                                {item.name}
                                {/* Arrow pointing down */}
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-zinc-900 dark:bg-zinc-100 rotate-45"></div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
