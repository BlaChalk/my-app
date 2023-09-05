/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.website-files.com',
        port: '',
        pathname: '/60e4912ee7c15fb303f4c588/**',
      },
    ]
  }
}

module.exports = nextConfig
