'use client';

import React from 'react';

const LoadingOverlay = () => {
    return (
        <div className="loading-wrapper">
            <div className="loading-shadow-wrapper">
                <div className="loading-shadow">
                    {/* Animated ring */}
                    <div style={{ position: "relative", width: 56, height: 56 }}>
                        <svg
                            className="loading-animation"
                            width="56"
                            height="56"
                            viewBox="0 0 56 56"
                            fill="none"
                        >
                            <circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="var(--dr-border)"
                                strokeWidth="3"
                            />
                            <circle
                                cx="28"
                                cy="28"
                                r="24"
                                stroke="var(--dr-teal)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeDasharray="37.7"
                                strokeDashoffset="113.1"
                            />
                        </svg>
                    </div>

                    <h2 className="loading-title">Synthesizing Your Book</h2>
                    <p
                        style={{
                            color: "var(--dr-text-muted)",
                            textAlign: "center",
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                            maxWidth: "280px",
                        }}
                    >
                        Extracting text, generating embeddings, and preparing your interactive reading experience.
                    </p>

                    {/* Steps */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.5rem",
                            width: "100%",
                        }}
                    >
                        {[
                            "Parsing PDF content",
                            "Chunking into segments",
                            "Storing in library",
                        ].map((step, i) => (
                            <div
                                key={step}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "0.625rem",
                                    padding: "0.5rem 0.75rem",
                                    background: "var(--dr-deep)",
                                    borderRadius: "0.5rem",
                                    border: "1px solid var(--dr-border)",
                                }}
                            >
                                <span
                                    style={{
                                        width: "6px",
                                        height: "6px",
                                        borderRadius: "50%",
                                        background: "var(--dr-teal)",
                                        display: "inline-block",
                                        animation: `pulse 1.5s infinite ${i * 0.3}s`,
                                        flexShrink: 0,
                                    }}
                                />
                                <span style={{ fontSize: "0.825rem", color: "var(--dr-text-secondary)" }}>
                                    {step}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;