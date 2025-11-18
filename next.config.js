/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com', 'logos-world.net', 'upload.wikimedia.org', 'www.marriott.com', 'www.ihg.com', 'www.hilton.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.marriott.com',
      },
      {
        protocol: 'https',
        hostname: 'www.ihg.com',
      },
      {
        protocol: 'https',
        hostname: 'www.hilton.com',
      },
    ],
  },
};

module.exports = nextConfig;

