/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.BASE_PATH || '',
}

module.exports = nextConfig