import UploadForm from "@/components/UploadForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Page = async () => {
    const { userId } = await auth();

    if (!userId) {
        redirect("/sign-in");
    }

    return (
        <main className="new-book">
            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    textAlign: "center",
                    alignItems: "center",
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
                    }}
                >
                    New Upload
                </div>
                <h1 className="page-title-xl">Add a New Book</h1>
                <p className="subtitle">
                    Upload a PDF to generate your interactive reading experience
                </p>
            </section>

            <UploadForm />
        </main>
    );
};

export default Page;