'use client';

import type { CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { CheckoutButton, usePlans } from "@clerk/nextjs/experimental";

import { PLANS, type PlanType } from "@/lib/subscription-constants";
import { useSubscription } from "@/hooks/useSubscription";

const SIGN_UP_URL = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL ?? "/sign-up";

const PLAN_ORDER: PlanType[] = [PLANS.FREE, PLANS.STANDARD, PLANS.PRO];

const FALLBACK_FEATURES: Record<PlanType, string[]> = {
    [PLANS.FREE]: [
        "1 book",
        "5 sessions per month",
        "5 min per session",
        "No session history",
    ],
    [PLANS.STANDARD]: [
        "10 books",
        "100 sessions per month",
        "15 min per session",
        "Session history",
    ],
    [PLANS.PRO]: [
        "100 books",
        "Unlimited sessions",
        "60 min per session",
        "Session history",
    ],
};

const CARD_STYLES: Record<PlanType, CSSProperties> = {
    [PLANS.FREE]: {
        background: "var(--dr-gradient-card)",
        border: "1px solid var(--dr-border)",
    },
    [PLANS.STANDARD]: {
        background: "var(--dr-gradient-brand)",
        border: "1px solid var(--dr-teal)",
        boxShadow: "var(--dr-shadow-teal)",
    },
    [PLANS.PRO]: {
        background: "var(--dr-gradient-card)",
        border: "1px solid var(--dr-border)",
    },
};

const formatAmount = (amountFormatted: string) =>
    amountFormatted.replace(/\.00$/, "");

const SKELETON_PRICE: Record<string, number> = {
    [PLANS.FREE]: 0,
    [PLANS.STANDARD]: 6,
    [PLANS.PRO]: 15,
};

export default function PricingSection() {
    const router = useRouter();
    const { isLoaded: isAuthLoaded } = useAuth();
    const { plan: currentPlan, isLoaded: isSubscriptionLoaded } = useSubscription();
    const { data: rawPlans = [], isLoading: isPlansLoading } = usePlans();

    const isReady = isAuthLoaded && isSubscriptionLoaded && !isPlansLoading;

    // While loading (or if no plans are configured on the Clerk instance yet),
    // render the static cards as a skeleton so there's no layout shift.
    const visiblePlans =
        isReady && rawPlans.length > 0
            ? [...rawPlans]
                  .filter((plan) => plan.forPayerType === "user" || !plan.forPayerType)
                  .sort((a, b) => a.fee.amount - b.fee.amount)
            : null;

    const shownCards = visiblePlans ?? PLAN_ORDER;

    // Derive which card is "free" and which is "featured" from the real plan
    // data (ranked by price), so styling works regardless of the plan slugs
    // configured in the Clerk dashboard.
    const freeSlug = visiblePlans?.find(
        (p) => !p.isRecurring || p.fee.amount === 0,
    )?.slug;
    const featuredSlug =
        visiblePlans?.find((p) => p.slug === PLANS.STANDARD)?.slug ??
        visiblePlans?.[1]?.slug ??
        visiblePlans?.[0]?.slug;

    return (
        <div className="pricing-section-grid">
            {shownCards.map((plan) => {
                const slug = String(
                    typeof plan === "string" ? plan : (plan as { slug?: string }).slug ?? "",
                );
                const loaded =
                    typeof plan === "object" &&
                    plan !== null &&
                    "id" in (plan as object) &&
                    "fee" in (plan as object);

                const isFree = loaded
                    ? !(plan as { isRecurring: boolean }).isRecurring ||
                      (plan as { fee: { amount: number } }).fee.amount === 0
                    : slug === PLANS.FREE;

                const featured = loaded
                    ? slug === featuredSlug
                    : slug === PLANS.STANDARD;

                const style = isFree
                    ? CARD_STYLES[PLANS.FREE]
                    : featured
                      ? CARD_STYLES[PLANS.STANDARD]
                      : CARD_STYLES[PLANS.PRO];

                const fallbackFeatures = isFree
                    ? FALLBACK_FEATURES[PLANS.FREE]
                    : featured
                      ? FALLBACK_FEATURES[PLANS.STANDARD]
                      : FALLBACK_FEATURES[PLANS.PRO];

                const planName =
                    loaded && (plan as { name: string }).name ? (plan as { name: string }).name : slug;

                const price = isFree
                    ? "Free"
                    : loaded
                      ? `$${formatAmount((plan as { fee: { amountFormatted: string } }).fee.amountFormatted)}`
                      : `$${SKELETON_PRICE[slug] ?? "—"}`;

                const features = loaded
                    ? (plan as { features: { name: string }[] }).features.length
                        ? (plan as { features: { name: string }[] }).features.map((f) => f.name)
                        : fallbackFeatures
                    : fallbackFeatures;

                const isCurrent = isReady && slug === currentPlan;

                return (
                        <div
                            key={slug}
                            className={featured ? "pricing-card pricing-card-featured" : "pricing-card"}
                            style={style}
                        >
                            {featured && <span className="pricing-badge">Most popular</span>}
                            <h3 className="pricing-plan-name">{planName}</h3>
                            <div className="pricing-price">
                                <span className="pricing-amount">{price}</span>
                                {!isFree && <span className="pricing-period">/ month</span>}
                            </div>
                            <ul className="pricing-features">
                                {features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>

                            {!isReady ? (
                                <span className="pricing-cta" aria-hidden>
                                    …
                                </span>
                            ) : isCurrent ? (
                                <span className="pricing-cta pricing-cta-current">Current plan</span>
                            ) : (
                                <>
                                    <SignedIn>
                                        <span className="pricing-cta-btn">
                                            <CheckoutButton
                                                planId={(plan as { id: string }).id}
                                                planPeriod="month"
                                                onSubscriptionComplete={() => router.refresh()}
                                            >
                                                <span
                                                    className={
                                                        featured
                                                            ? "pricing-cta pricing-cta-primary"
                                                            : "pricing-cta"
                                                    }
                                                >
                                                    {isFree
                                                        ? "Switch to free"
                                                        : `Get ${planName}`}
                                                </span>
                                            </CheckoutButton>
                                        </span>
                                    </SignedIn>
                                    <SignedOut>
                                        <Link
                                            href={SIGN_UP_URL}
                                            className={
                                                featured ? "pricing-cta pricing-cta-primary" : "pricing-cta"
                                            }
                                        >
                                            {isFree
                                                ? "Start free"
                                                : `Get ${planName}`}
                                        </Link>
                                    </SignedOut>
                                </>
                            )}
                        </div>
                    );
                },
            )}
            {isReady && rawPlans.length > 0 && (
                <p className="pricing-note">
                    Prices shown are per month. You can manage or cancel anytime from the{" "}
                    <strong>UserButton → Billing</strong> tab.
                </p>
            )}
        </div>
    );
}