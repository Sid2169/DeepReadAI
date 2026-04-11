"use client";

import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
    const { theme, toggle } = useTheme();

    return (
        <button
            onClick={toggle}
            aria-label="Toggle theme"
            style={{
                background: "transparent",
                border: "1px solid var(--border-color)",
                borderRadius: "8px",
                padding: "6px 10px",
                cursor: "pointer",
                color: "var(--text-primary)",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
            }}
        >
            {theme === "dark" ? "☀️" : "🌙"}
        </button>
    );
}