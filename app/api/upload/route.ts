import { NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { auth } from "@clerk/nextjs/server";
import { MAX_FILE_SIZE } from "@/lib/constants";

export const maxDuration = 60; // seconds, for Vercel

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const { userId } = await auth();

        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await request.formData();
        const file = formData.get("file") as File | null;
        const filename = formData.get("filename") as string | null;

        if (!file || !filename) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        if (file.size > MAX_FILE_SIZE) {
            return NextResponse.json({ error: "File too large" }, { status: 400 });
        }

        const blob = await put(filename, file, {
            access: "private",
            token: process.env.BLOB_READ_WRITE_TOKEN,
            addRandomSuffix: true,
        });

        return NextResponse.json({ url: blob.url, pathname: blob.pathname });
    } catch (e) {
        console.error("Upload error", e);
        return NextResponse.json({ error: "Upload failed" }, { status: 500 });
    }
}
