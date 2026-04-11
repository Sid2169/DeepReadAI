import { PricingTable } from "@clerk/nextjs";

export default function SubscriptionsPage() {
    return (
        <div className="container wrapper py-10">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    marginBottom: "3rem",
                }}
            >
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
                        textTransform: "uppercase",
                        marginBottom: "1rem",
                    }}
                >
                    Pricing
                </div>
                <h1
                    style={{
                        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        color: "var(--dr-text-primary)",
                        fontFamily: "var(--font-ibm-plex-serif), serif",
                        marginBottom: "0.75rem",
                    }}
                >
                    Choose your plan
                </h1>
                <p
                    style={{
                        color: "var(--dr-text-secondary)",
                        maxWidth: "480px",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                    }}
                >
                    Unlock more books, longer sessions, and advanced features.
                </p>
            </div>

            <div className="clerk-pricing-container">
                <PricingTable />
            </div>
        </div>
    );
}