"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    const buttonRef = React.useRef<HTMLButtonElement>(null)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    const handleToggle = async () => {
        if (!buttonRef.current) return

        const newTheme = theme === "dark" ? "light" : "dark"

        // Get button position for animation origin
        const rect = buttonRef.current.getBoundingClientRect()
        const x = rect.left + rect.width / 2
        const y = rect.top + rect.height / 2

        // Calculate the radius needed to cover the entire viewport
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        )

        // Check if View Transitions API is supported
        if (!document.startViewTransition) {
            setTheme(newTheme)
            return
        }

        // Start view transition with circular reveal
        const transition = document.startViewTransition(() => {
            setTheme(newTheme)
        })

        await transition.ready

        // Animate the circular reveal
        document.documentElement.animate(
            {
                clipPath: [
                    `circle(0px at ${x}px ${y}px)`,
                    `circle(${endRadius}px at ${x}px ${y}px)`,
                ],
            },
            {
                duration: 700,
                easing: "ease-in-out",
                pseudoElement: "::view-transition-new(root)",
            }
        )
    }

    if (!mounted) {
        return (
            <button
                className="p-3 rounded-xl bg-zinc-200 dark:bg-zinc-800 transition-all duration-300"
                aria-label="Toggle theme"
            >
                <Sun className="h-5 w-5 text-zinc-900 dark:text-zinc-100" />
            </button>
        )
    }

    return (
        <button
            ref={buttonRef}
            onClick={handleToggle}
            className="p-3 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-all duration-300 shadow-lg hover:shadow-inner"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-zinc-100 transition-transform duration-300 rotate-0 hover:rotate-90" />
            ) : (
                <Moon className="h-5 w-5 text-zinc-900 transition-transform duration-300 rotate-0 hover:-rotate-12" />
            )}
        </button>
    )
}
