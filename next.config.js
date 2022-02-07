/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 //  basePath: process.env.GITHUB_ACTIONS ? '/akiralab.github.io' : '',
 basePath: process.env.GITHUB_ACTIONS ? '' : '',
 trailingSlash: true,
 images: {
  loader: 'imgix',
  path: 'https://akiralab.github.io',
 },
};

module.exports = nextConfig;
