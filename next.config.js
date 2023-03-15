/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true
  },
  images: {
    domains: [
      "github.com",
      "firebasestorage.googleapis.com",
      "raw.githubusercontent.com"
    ],
  },
}

module.exports = nextConfig
