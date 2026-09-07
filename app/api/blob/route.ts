import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const blobUrl = searchParams.get("url");

    if (!blobUrl) {
        return new NextResponse("Missing url parameter", { status: 400 });
    }

    try {
        const token = process.env.BLOB_READ_WRITE_TOKEN;
        const res = await fetch(blobUrl, {
            headers: token ? { Authorization: `Bearer ${token}` } : {},
        });

        if (!res.ok) {
            return new NextResponse("Failed to fetch blob", { status: res.status });
        }

        const headers = new Headers();
        const contentType = res.headers.get("content-type");
        const cacheControl = res.headers.get("cache-control");
        if (contentType) headers.set("content-type", contentType);
        if (cacheControl) headers.set("cache-control", cacheControl || "public, max-age=31536000, immutable");

        return new NextResponse(res.body, {
            status: 200,
            headers,
        });
    } catch (error) {
        console.error("Error proxying blob:", error);
        return new NextResponse("Error fetching blob", { status: 500 });
    }
}
