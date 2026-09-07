import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: {
            bodySizeLimit: '100mb',
        },
        middlewareClientMaxBodySize: '100mb',
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: { 
        localPatterns: [
            { pathname: '/api/blob' },
            { pathname: '/assets/**', search: '' },
        ],
        remotePatterns: [
            { protocol: 'https', hostname: 'covers.openlibrary.org' },
            { protocol: 'https', hostname: 'lspfdyhgsrgsxcju.public.blob.vercel-storage.com' },
            { protocol: 'https', hostname: '7pwlexjmcbgdop3l.private.blob.vercel-storage.com' },
        ]
    }
};

export default nextConfig;
