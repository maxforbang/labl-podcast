/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.sanity.io',
      'ssl-static.libsyn.com',
      'static.libsyn.com'
    ]
  },
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/api/rss',
      },
    ];
  },
}

module.exports = nextConfig
