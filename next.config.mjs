/** @type {import('next').NextConfig} */
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
    reactStrictMode: true,
    turbopack: {
        root: projectRoot,
    },

    // Configure allowed domains for Next.js Image Optimization.
    // This is a security feature to prevent misuse of the image optimization API.
    images: {
        remotePatterns: [
            // Add patterns for any external domains you load images from.
            // Example for your brand assets if they are hosted externally:
            {
                protocol: 'https',
                hostname: 'www.anarchi.tech',
            },
            {
                protocol: 'https',
                hostname: 'anarchi.tech',
            },
            // Example for placeholder images during development:
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
        ],
    },

    // Set custom HTTP headers for all routes to improve security.
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-DNS-Prefetch-Control', value: 'on' },
                    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
                    { key: 'X-XSS-Protection', value: '1; mode=block' },
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
                    // A basic Content Security Policy. You may need to expand this based on your integrations.
                    { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:; connect-src 'self' https:;" },
                ],
            },
        ];
    },
};

export default nextConfig;
