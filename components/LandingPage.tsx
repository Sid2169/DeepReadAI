"use client";

import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function LandingPage() {
    return (
        <div style={{ background: "var(--bg-primary)", minHeight: "100vh", color: "var(--text-primary)" }}>

            {/* Navbar */}
            <nav style={{
                position: "sticky", top: 0, zIndex: 50,
                background: "var(--nav-bg)",
                backdropFilter: "blur(12px)",
                borderBottom: "1px solid var(--border-color)",
                padding: "0 2rem",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                height: "64px",
            }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <Image src="/assets/logo.png" alt="Bookified" width={36} height={36} />
                    <span style={{ fontWeight: 600, fontSize: "18px", color: "var(--brand-primary)" }}>Bookified</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <ThemeToggle />
                    <Link href="/sign-in" style={{
                        padding: "8px 20px", borderRadius: "8px",
                        border: "1px solid var(--brand-primary)",
                        color: "var(--brand-primary)", textDecoration: "none",
                        fontSize: "14px", fontWeight: 500,
                    }}>Sign in</Link>
                    <Link href="/sign-up" style={{
                        padding: "8px 20px", borderRadius: "8px",
                        background: "var(--brand-primary)",
                        color: "#ffffff", textDecoration: "none",
                        fontSize: "14px", fontWeight: 500,
                    }}>Get started</Link>
                </div>
            </nav>

            {/* Hero */}
            <section style={{
                maxWidth: "900px", margin: "0 auto",
                padding: "6rem 2rem 4rem",
                textAlign: "center",
            }}>
                <div style={{
                    display: "inline-block",
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "999px",
                    padding: "6px 16px",
                    fontSize: "13px",
                    color: "var(--brand-primary)",
                    marginBottom: "2rem",
                    fontWeight: 500,
                }}>
                    AI-powered reading companion
                </div>

                <h1 style={{
                    fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                    fontWeight: 700, lineHeight: 1.2,
                    marginBottom: "1.5rem",
                    color: "var(--text-primary)",
                }}>
                    Have a real conversation<br />
                    <span style={{ color: "var(--brand-primary)" }}>with your books</span>
                </h1>

                <p style={{
                    fontSize: "1.15rem", lineHeight: 1.7,
                    color: "var(--text-secondary)",
                    maxWidth: "600px", margin: "0 auto 2.5rem",
                }}>
                    Upload any PDF and start a live voice conversation with an AI that knows your book inside out. Ask questions, explore themes, and understand deeply.
                </p>

                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                    <Link href="/sign-up" style={{
                        padding: "14px 32px", borderRadius: "10px",
                        background: "var(--brand-primary)",
                        color: "#ffffff", textDecoration: "none",
                        fontSize: "15px", fontWeight: 600,
                    }}>
                        Start for free
                    </Link>
                    <Link href="/sign-in" style={{
                        padding: "14px 32px", borderRadius: "10px",
                        border: "1px solid var(--border-color)",
                        color: "var(--text-primary)", textDecoration: "none",
                        fontSize: "15px", fontWeight: 500,
                        background: "var(--bg-card)",
                    }}>
                        Sign in
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section style={{
                maxWidth: "1000px", margin: "0 auto",
                padding: "4rem 2rem",
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "20px",
                }}>
                    {[
                        { icon: "🎙️", title: "Voice conversations", desc: "Talk naturally with an AI companion that has read your entire book and remembers every detail." },
                        { icon: "📚", title: "Private library", desc: "Your uploads are yours alone. Each account has its own private collection of books." },
                        { icon: "🧠", title: "Deep understanding", desc: "Powered by Google Gemini embeddings for accurate, context-aware answers to any question." },
                        { icon: "⚡", title: "Instant synthesis", desc: "Books are processed and ready for conversation in seconds, not minutes." },
                        { icon: "🎭", title: "Choose your voice", desc: "Pick from a range of AI voices — male, female, casual, or authoritative — to suit your mood." },
                        { icon: "🔒", title: "Secure by default", desc: "All files are stored privately on Vercel Blob with authentication enforced on every route." },
                    ].map(({ icon, title, desc }) => (
                        <div key={title} style={{
                            background: "var(--bg-card)",
                            border: "1px solid var(--border-color)",
                            borderRadius: "12px",
                            padding: "1.5rem",
                        }}>
                            <div style={{ fontSize: "24px", marginBottom: "12px" }}>{icon}</div>
                            <h3 style={{ fontSize: "15px", fontWeight: 600, marginBottom: "8px", color: "var(--text-primary)" }}>{title}</h3>
                            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "var(--text-secondary)", margin: 0 }}>{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{
                background: "var(--bg-secondary)",
                borderTop: "1px solid var(--border-color)",
                borderBottom: "1px solid var(--border-color)",
                padding: "5rem 2rem",
                textAlign: "center",
            }}>
                <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
                    Ready to read differently?
                </h2>
                <p style={{ color: "var(--text-secondary)", marginBottom: "2rem", fontSize: "1rem" }}>
                    Join readers who are already having conversations with their books.
                </p>
                <Link href="/sign-up" style={{
                    padding: "14px 36px", borderRadius: "10px",
                    background: "var(--brand-primary)",
                    color: "#ffffff", textDecoration: "none",
                    fontSize: "15px", fontWeight: 600,
                }}>
                    Create your library
                </Link>
            </section>

            {/* Footer */}
            <footer style={{
                padding: "2rem",
                textAlign: "center",
                fontSize: "13px",
                color: "var(--text-muted)",
                borderTop: "1px solid var(--border-color)",
            }}>
                © {new Date().getFullYear()} Bookified. Built with Next.js, Vapi & ElevenLabs.
            </footer>
        </div>
    );
}