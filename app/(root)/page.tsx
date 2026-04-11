import { auth } from "@clerk/nextjs/server";
import { getAllBooks } from "@/lib/actions/book.actions";
import BookCard from "@/components/BookCard";
import HeroSection from "@/components/HeroSection";
import Search from "@/components/Search";
import LandingPage from "@/components/LandingPage";

const Page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {
    const { userId } = await auth();

    // Show landing page to guests instead of redirecting
    if (!userId) {
        return <LandingPage />;
    }

    const { query } = await searchParams;
    const bookResults = await getAllBooks(query);
    const books = bookResults.success ? bookResults.data ?? [] : [];

    return (
        <main className="wrapper container">
            <HeroSection />
            <Search />
            <section className="book-grid">
                {books.map((book: any) => (
                    <BookCard key={book._id} {...book} />
                ))}
                {books.length === 0 && (
                    <p style={{ color: "var(--text-muted)" }}>
                        No books yet. <a href="/books/new">Upload your first book →</a>
                    </p>
                )}
            </section>
        </main>
    );
};

export default Page;