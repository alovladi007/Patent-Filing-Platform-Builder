/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api/:path*',
      },
    ];
  },
  images: {
    domains: ['localhost', 'minio'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;