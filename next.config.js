/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Zezwól na lokalne obrazy z /public
    unoptimized: false,
  },
};

module.exports = nextConfig;
