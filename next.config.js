/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    domains: ['www.in-lombardia.it', 'www.agriturismolavalle.it', 'www.deliziedoltrepo.it', 'maps.google.com'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
