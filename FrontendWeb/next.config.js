/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/', destination: '/index.html' },
    ];
  },
  async redirects() { return []; },
  async headers()  { return []; },
};
module.exports = nextConfig;