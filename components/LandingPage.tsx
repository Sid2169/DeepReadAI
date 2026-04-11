"use client";

import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
    return (
        <div
            style={{
                background: "var(--dr-abyss)",
                minHeight: "100vh",
                color: "var(--dr-text-primary)",
                fontFamily: "var(--font-mona-sans), sans-serif",
                overflowX: "hidden",
            }}
        >
            {/* ---- NAVBAR ---- */}
            <nav
                style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0,
                    zIndex: 50,
                    height: "68px",
                    background: "rgba(8, 13, 26, 0.85)",
                    backdropFilter: "blur(20px)",
                    borderBottom: "1px solid var(--dr-border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0 2rem",
                }}
            >
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div
                        style={{
                            width: 32, height: 32,
                            borderRadius: "8px",
                            background: "var(--dr-gradient-brand)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="rgba(5,8,16,0.9)" strokeWidth="2" strokeLinejoin="round" fill="rgba(5,8,16,0.2)" />
                            <path d="M12 22V12M3 7l9 5 9-5" stroke="rgba(5,8,16,0.9)" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span style={{ fontWeight: 800, fontSize: "1rem", letterSpacing: "-0.02em", fontFamily: "var(--font-ibm-plex-serif), serif" }}>
                        DeepRead <span style={{ color: "var(--dr-teal)" }}>AI</span>
                    </span>
                </div>

                {/* CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <Link
                        href="/sign-in"
                        style={{
                            padding: "0.45rem 1.1rem",
                            borderRadius: "0.5rem",
                            border: "1px solid var(--dr-border-bright)",
                            color: "var(--dr-text-secondary)",
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            fontWeight: 500,
                            transition: "all 0.2s",
                        }}
                    >
                        Sign in
                    </Link>
                    <Link
                        href="/sign-up"
                        style={{
                            padding: "0.45rem 1.1rem",
                            borderRadius: "0.5rem",
                            background: "var(--dr-gradient-brand)",
                            color: "var(--dr-void)",
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            fontWeight: 700,
                        }}
                    >
                        Get started
                    </Link>
                </div>
            </nav>

            {/* ---- HERO ---- */}
            <section
                style={{
                    position: "relative",
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "8rem 2rem 5rem",
                    overflow: "hidden",
                }}
            >
                {/* Radial glow */}
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "700px",
                        height: "500px",
                        background: "radial-gradient(ellipse at center, rgba(18,181,216,0.1) 0%, transparent 65%)",
                        pointerEvents: "none",
                    }}
                />
                {/* Grid pattern */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: "linear-gradient(var(--dr-border) 1px, transparent 1px), linear-gradient(90deg, var(--dr-border) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        opacity: 0.25,
                        pointerEvents: "none",
                    }}
                />

                <div style={{ position: "relative", zIndex: 1, maxWidth: "780px" }}>
                    {/* Badge */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            background: "rgba(18,181,216,0.1)",
                            border: "1px solid rgba(18,181,216,0.3)",
                            borderRadius: "999px",
                            padding: "0.35rem 1rem",
                            fontSize: "0.8rem",
                            color: "var(--dr-teal-bright)",
                            fontWeight: 600,
                            marginBottom: "2rem",
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                        }}
                    >
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--dr-teal)", display: "inline-block" }} />
                        Voice AI Reading Companion
                    </div>

                    {/* Headline */}
                    <h1
                        style={{
                            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: "-0.04em",
                            marginBottom: "1.5rem",
                            fontFamily: "var(--font-ibm-plex-serif), serif",
                            color: "var(--dr-text-primary)",
                        }}
                    >
                        Have a real conversation<br />
                        <span
                            style={{
                                background: "linear-gradient(135deg, var(--dr-teal) 0%, var(--dr-teal-glow) 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            with your books
                        </span>
                    </h1>

                    <p
                        style={{
                            fontSize: "1.15rem",
                            lineHeight: 1.7,
                            color: "var(--dr-text-secondary)",
                            maxWidth: "560px",
                            margin: "0 auto 2.5rem",
                        }}
                    >
                        Upload any PDF and start a live voice conversation with an AI that knows your book inside out. Ask questions, explore themes, and understand deeply.
                    </p>

                    <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link
                            href="/sign-up"
                            style={{
                                padding: "0.875rem 2rem",
                                borderRadius: "0.75rem",
                                background: "var(--dr-gradient-brand)",
                                color: "var(--dr-void)",
                                textDecoration: "none",
                                fontSize: "0.975rem",
                                fontWeight: 700,
                                transition: "opacity 0.2s",
                                letterSpacing: "0.01em",
                            }}
                        >
                            Start for free →
                        </Link>
                        <Link
                            href="/sign-in"
                            style={{
                                padding: "0.875rem 2rem",
                                borderRadius: "0.75rem",
                                border: "1px solid var(--dr-border-bright)",
                                color: "var(--dr-text-secondary)",
                                textDecoration: "none",
                                fontSize: "0.975rem",
                                fontWeight: 500,
                                background: "var(--dr-surface)",
                            }}
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </section>

            {/* ---- FEATURES ---- */}
            <section
                style={{
                    maxWidth: "1100px",
                    margin: "0 auto",
                    padding: "2rem 2rem 6rem",
                }}
            >
                {/* Section label */}
                <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <p style={{ fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--dr-teal)", fontWeight: 700, marginBottom: "0.75rem" }}>
                        Everything you need
                    </p>
                    <h2
                        style={{
                            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            color: "var(--dr-text-primary)",
                            fontFamily: "var(--font-ibm-plex-serif), serif",
                        }}
                    >
                        A smarter way to read
                    </h2>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "1.25rem",
                    }}
                >
                    {[
                        {
                            icon: "🎙️",
                            title: "Voice conversations",
                            desc: "Talk naturally with an AI companion that has read your entire book and remembers every detail.",
                            accent: "var(--dr-teal)",
                        },
                        {
                            icon: "📚",
                            title: "Private library",
                            desc: "Your uploads are yours alone. Each account has its own private collection of books.",
                            accent: "var(--dr-teal)",
                        },
                        {
                            icon: "🧠",
                            title: "Deep understanding",
                            desc: "Powered by Google Gemini embeddings for accurate, context-aware answers to any question.",
                            accent: "var(--dr-teal)",
                        },
                        {
                            icon: "⚡",
                            title: "Instant synthesis",
                            desc: "Books are processed and ready for conversation in seconds, not minutes.",
                            accent: "var(--dr-teal)",
                        },
                        {
                            icon: "🎭",
                            title: "Choose your voice",
                            desc: "Pick from a range of AI voices — male, female, casual, or authoritative — to suit your mood.",
                            accent: "var(--dr-teal)",
                        },
                        {
                            icon: "🔒",
                            title: "Secure by default",
                            desc: "All files stored privately on Vercel Blob with authentication enforced on every route.",
                            accent: "var(--dr-teal)",
                        },
                    ].map(({ icon, title, desc, accent }) => (
                        <div
                            key={title}
                            style={{
                                background: "var(--dr-gradient-card)",
                                border: "1px solid var(--dr-border)",
                                borderRadius: "1rem",
                                padding: "1.5rem",
                                transition: "border-color 0.2s, transform 0.2s",
                            }}
                        >
                            <div
                                style={{
                                    width: "42px",
                                    height: "42px",
                                    borderRadius: "10px",
                                    background: "rgba(18,181,216,0.1)",
                                    border: "1px solid rgba(18,181,216,0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "20px",
                                    marginBottom: "1rem",
                                }}
                            >
                                {icon}
                            </div>
                            <h3
                                style={{
                                    fontSize: "0.975rem",
                                    fontWeight: 700,
                                    marginBottom: "0.5rem",
                                    color: "var(--dr-text-primary)",
                                    letterSpacing: "-0.01em",
                                }}
                            >
                                {title}
                            </h3>
                            <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--dr-text-secondary)", margin: 0 }}>
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---- CTA BAND ---- */}
            <section
                style={{
                    position: "relative",
                    overflow: "hidden",
                    padding: "5rem 2rem",
                    textAlign: "center",
                    borderTop: "1px solid var(--dr-border)",
                    borderBottom: "1px solid var(--dr-border)",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "600px",
                        height: "300px",
                        background: "radial-gradient(ellipse at center, rgba(18,181,216,0.08) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                    <h2
                        style={{
                            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            marginBottom: "1rem",
                            color: "var(--dr-text-primary)",
                            fontFamily: "var(--font-ibm-plex-serif), serif",
                        }}
                    >
                        Ready to read differently?
                    </h2>
                    <p style={{ color: "var(--dr-text-secondary)", marginBottom: "2rem", fontSize: "1.05rem", maxWidth: "400px", margin: "0 auto 2rem" }}>
                        Join readers who are already having conversations with their books.
                    </p>
                    <Link
                        href="/sign-up"
                        style={{
                            display: "inline-block",
                            padding: "0.875rem 2.5rem",
                            borderRadius: "0.75rem",
                            background: "var(--dr-gradient-brand)",
                            color: "var(--dr-void)",
                            textDecoration: "none",
                            fontSize: "0.975rem",
                            fontWeight: 700,
                        }}
                    >
                        Create your library →
                    </Link>
                </div>
            </section>

            {/* ---- FOOTER ---- */}
            <footer
                style={{
                    padding: "2rem",
                    textAlign: "center",
                    fontSize: "0.8rem",
                    color: "var(--dr-text-muted)",
                }}
            >
                © {new Date().getFullYear()} DeepRead AI. Built with Next.js, Vapi & ElevenLabs.
            </footer>
        </div>
    );
}