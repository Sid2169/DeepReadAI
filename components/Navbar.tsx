'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

const navItems = [
    { label: "Library", href: "/" },
    { label: "Add Book", href: "/books/new" },
    { label: "Pricing", href: "/subscriptions" },
];

const Navbar = () => {
    const pathName = usePathname();
    const { user } = useUser();

    return (
        <header
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                height: "var(--navbar-height)",
                background: "rgba(8, 13, 26, 0.85)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid var(--dr-border)",
            }}
        >
            <div
                className="wrapper h-full"
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
                {/* Logo */}
                <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
                    <div
                        style={{
                            width: 32,
                            height: 32,
                            borderRadius: "8px",
                            background: "var(--dr-gradient-brand)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                        }}
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L3 7v10l9 5 9-5V7L12 2z" stroke="rgba(5,8,16,0.9)" strokeWidth="2" strokeLinejoin="round" fill="rgba(5,8,16,0.2)" />
                            <path d="M12 22V12M3 7l9 5 9-5" stroke="rgba(5,8,16,0.9)" strokeWidth="2" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span
                        style={{
                            fontWeight: 800,
                            fontSize: "1rem",
                            color: "var(--dr-text-primary)",
                            letterSpacing: "-0.02em",
                            fontFamily: "var(--font-ibm-plex-serif), serif",
                        }}
                    >
                        DeepRead <span style={{ color: "var(--dr-teal)" }}>AI</span>
                    </span>
                </Link>

                {/* Nav Links + Auth */}
                <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                    {navItems.map(({ label, href }) => {
                        const isActive = pathName === href || (href !== "/" && pathName.startsWith(href));
                        return (
                            <Link
                                href={href}
                                key={label}
                                style={{
                                    fontSize: "0.875rem",
                                    fontWeight: 500,
                                    color: isActive ? "var(--dr-teal-bright)" : "var(--dr-text-secondary)",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                    position: "relative",
                                    paddingBottom: isActive ? "2px" : "0",
                                    borderBottom: isActive ? "2px solid var(--dr-teal)" : "2px solid transparent",
                                }}
                            >
                                {label}
                            </Link>
                        );
                    })}

                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <SignedOut>
                            <SignInButton mode="modal">
                                <button
                                    style={{
                                        background: "transparent",
                                        border: "1px solid var(--dr-border-bright)",
                                        borderRadius: "0.5rem",
                                        padding: "0.4rem 1rem",
                                        color: "var(--dr-text-secondary)",
                                        fontSize: "0.875rem",
                                        fontWeight: 500,
                                        cursor: "pointer",
                                        transition: "all 0.2s",
                                    }}
                                >
                                    Sign in
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <div className="nav-user-link">
                                <UserButton />
                                {user?.firstName && (
                                    <Link
                                        href="/subscriptions"
                                        className="nav-user-name"
                                        style={{ color: "var(--dr-text-secondary)", textDecoration: "none" }}
                                    >
                                        {user.firstName}
                                    </Link>
                                )}
                            </div>
                        </SignedIn>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;