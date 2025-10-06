/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() { return []; },
  async redirects() { return []; },
  async headers()  { return []; },
};
module.exports = nextConfig;