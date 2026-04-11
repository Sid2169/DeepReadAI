import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className="wrapper mb-8 md:mb-12">
            <div className="library-hero-card">
                <div className="library-hero-content">
                    {/* Left */}
                    <div className="library-hero-text">
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "0.4rem",
                                background: "rgba(18,181,216,0.1)",
                                border: "1px solid rgba(18,181,216,0.25)",
                                borderRadius: "999px",
                                padding: "0.3rem 0.875rem",
                                fontSize: "0.75rem",
                                color: "var(--dr-teal-bright)",
                                fontWeight: 600,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase" as const,
                            }}
                        >
                            <span
                                style={{
                                    width: "5px", height: "5px",
                                    borderRadius: "50%",
                                    background: "var(--dr-teal)",
                                    display: "inline-block",
                                }}
                            />
                            Your Library
                        </div>

                        <h1 className="library-hero-title">
                            Talk to your<br />
                            <span style={{ color: "var(--dr-teal-bright)" }}>books with AI</span>
                        </h1>

                        <p className="library-hero-description">
                            Upload a PDF, pick a voice, and start a live conversation. Ask questions, get summaries, explore ideas.
                        </p>

                        <Link href="/books/new" className="library-cta-primary mt-2">
                            <span style={{ fontSize: "1.1rem", fontWeight: 300 }}>+</span>
                            <span>Add new book</span>
                        </Link>
                    </div>

                    {/* Center - Desktop */}
                    <div className="library-hero-illustration-desktop">
                        <Image
                            src="/assets/hero-illustration.png"
                            alt="Books and AI"
                            width={380}
                            height={380}
                            className="object-contain"
                            style={{ filter: "brightness(0.9) saturate(0.8)" }}
                        />
                    </div>

                    {/* Center - Mobile */}
                    <div className="library-hero-illustration">
                        <Image
                            src="/assets/hero-illustration.png"
                            alt="Books and AI"
                            width={260}
                            height={260}
                            className="object-contain"
                            style={{ filter: "brightness(0.9) saturate(0.8)" }}
                        />
                    </div>

                    {/* Right — Steps */}
                    <div className="library-steps-card z-10">
                        <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem", listStyle: "none", margin: 0, padding: 0 }}>
                            {[
                                { n: "1", title: "Upload PDF", desc: "Add your book file" },
                                { n: "2", title: "AI Processing", desc: "We analyze the content" },
                                { n: "3", title: "Voice Chat", desc: "Discuss with AI" },
                            ].map(({ n, title, desc }) => (
                                <li key={n} className="library-step-item">
                                    <div className="library-step-number">{n}</div>
                                    <div>
                                        <p className="library-step-title">{title}</p>
                                        <p className="library-step-description">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection