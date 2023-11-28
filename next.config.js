/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    logging: {
      level: "verbose",
    },
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
