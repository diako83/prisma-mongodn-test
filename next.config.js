/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["picsum.photos", "images.pexels.com", "xsgames.co"],
  },
};

module.exports = nextConfig;
