/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      'dicoding-web-img.sgp1.cdn.digitaloceanspaces.com',
      'dicoding.com',
      'www.dicoding.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dicoding-web-img.sgp1.cdn.digitaloceanspaces.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.dicoding.com',
        pathname: '/**',
      }
    ]
  },
  // This is the crucial part for Netlify deployment
  output: 'export',
  // Ensure trailing slashes are used for better compatibility
  trailingSlash: true,
}

module.exports = nextConfig
