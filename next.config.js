/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost:3000", "images.ctfassets.net"],
  },
    async rewrites() {
      return [
        {
          source: '/',
          destination: '/pl',
        },
      ]
    },
};

module.exports = nextConfig;
