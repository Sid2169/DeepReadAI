import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '100mb',
        }
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: { remotePatterns: [
    { protocol: 'https', hostname: 'covers.openlibrary.org' },
    { protocol: 'https', hostname: 'lspfdyhgsrgsxcju.public.blob.vercel-storage.com' },
    { protocol: 'https', hostname: '7pwlexjmcbgdop3l.private.blob.vercel-storage.com' }, // 👈 Add this
]}
};

export default nextConfig;
