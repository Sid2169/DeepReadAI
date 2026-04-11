'use client';

import { Mic, MicOff } from "lucide-react";
import useVapi from "@/hooks/useVapi";
import { IBook } from "@/types";
import Image from "next/image";
import Transcript from "@/components/Transcript";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const VapiControls = ({ book }: { book: IBook }) => {
    const {
        status,
        isActive,
        messages,
        currentMessage,
        currentUserMessage,
        duration,
        start,
        stop,
        clearError,
        limitError,
        isBillingError,
        maxDurationSeconds,
    } = useVapi(book);

    const router = useRouter();

    useEffect(() => {
        if (limitError) {
            toast.error(limitError);
            if (isBillingError) {
                router.push("/subscriptions");
            } else {
                router.push("/");
            }
            clearError();
        }
    }, [isBillingError, limitError, router, clearError]);

    const formatDuration = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const getStatusDisplay = () => {
        switch (status) {
            case "connecting": return { label: "Connecting...", color: "vapi-status-dot-connecting" };
            case "starting": return { label: "Starting...", color: "vapi-status-dot-starting" };
            case "listening": return { label: "Listening", color: "vapi-status-dot-listening" };
            case "thinking": return { label: "Thinking...", color: "vapi-status-dot-thinking" };
            case "speaking": return { label: "Speaking", color: "vapi-status-dot-speaking" };
            default: return { label: "Ready", color: "vapi-status-dot-ready" };
        }
    };

    const statusDisplay = getStatusDisplay();
    const progressPercent = Math.min((duration / maxDurationSeconds) * 100, 100);

    return (
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Header Card */}
            <div className="vapi-header-card">
                {/* Book Cover + Mic */}
                <div className="vapi-cover-wrapper">
                    <Image
                        src={book.coverURL || "/images/book-placeholder.png"}
                        alt={book.title}
                        width={100}
                        height={150}
                        className="vapi-cover-image"
                        style={{ width: "100px", height: "auto" }}
                        priority
                    />
                    <div className="vapi-mic-wrapper">
                        {isActive && (status === "speaking" || status === "thinking") && (
                            <div className="vapi-pulse-ring" />
                        )}
                        <button
                            onClick={isActive ? stop : start}
                            disabled={status === "connecting"}
                            className={`vapi-mic-btn ${isActive ? "vapi-mic-btn-active" : "vapi-mic-btn-inactive"}`}
                        >
                            {isActive ? (
                                <Mic size={22} color="var(--dr-void)" />
                            ) : (
                                <MicOff size={22} color="var(--dr-teal)" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Book Info + Status */}
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem", position: "relative", zIndex: 1 }}>
                    <div>
                        <h1
                            style={{
                                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.03em",
                                color: "var(--dr-text-primary)",
                                fontFamily: "var(--font-ibm-plex-serif), serif",
                                marginBottom: "0.25rem",
                                lineHeight: 1.2,
                            }}
                        >
                            {book.title}
                        </h1>
                        <p style={{ fontSize: "0.875rem", color: "var(--dr-text-muted)", fontWeight: 500 }}>
                            by {book.author}
                        </p>
                    </div>

                    {/* Status Badges */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                        <div className="vapi-status-indicator">
                            <span className={`vapi-status-dot ${statusDisplay.color}`} />
                            <span className="vapi-status-text">{statusDisplay.label}</span>
                        </div>
                        <div className="vapi-status-indicator">
                            <span className="vapi-status-text">Voice: {book.persona || "Rachel"}</span>
                        </div>
                        <div className="vapi-status-indicator">
                            <span className="vapi-status-text">
                                {formatDuration(duration)} / {formatDuration(maxDurationSeconds)}
                            </span>
                        </div>
                    </div>

                    {/* Duration Progress Bar */}
                    <div
                        style={{
                            height: "3px",
                            background: "var(--dr-border)",
                            borderRadius: "999px",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: `${progressPercent}%`,
                                background: progressPercent > 80
                                    ? "var(--dr-warning)"
                                    : "var(--dr-gradient-brand)",
                                borderRadius: "999px",
                                transition: "width 1s linear",
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Transcript */}
            <div className="vapi-transcript-wrapper">
                <div className="transcript-container" style={{ minHeight: "420px" }}>
                    <Transcript
                        messages={messages}
                        currentMessage={currentMessage}
                        currentUserMessage={currentUserMessage}
                    />
                </div>
            </div>
        </div>
    );
};

export default VapiControls;