/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.GITHUB_ACTIONS ? 'https://akiralab.github.io/' : '',
  trailingSlash: true,
  images: {
    loader: 'imgix',
    path: 'https://akiralab.github.io',
  },  
}

module.exports = nextConfig

