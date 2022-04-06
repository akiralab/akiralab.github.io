/** @type {import('next').NextConfig} */
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
 reactStrictMode: true,
 basePath: process.env.GITHUB_ACTIONS ? '' : '',
 trailingSlash: true,
 images: {
  loader: 'imgix',
  path: 'https://akiralab.github.io',
 }, //distDir: 'build',
 webpack: (config, {}) => {
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.fallback = { fs: false };

  config.plugins.push(
   new NodePolyfillPlugin(),
   new CopyPlugin({
    patterns: [
     {
      from: './node_modules/onnxruntime-web/dist/ort-wasm.wasm',
      to: 'static/chunks/pages',
     },
     {
      from: './node_modules/onnxruntime-web/dist/ort-wasm-simd.wasm',
      to: 'static/chunks/pages',
     },
     {
      from: './model',
      to: 'static/chunks/pages',
     },
    ],
   })
  );

  return config;
 },
};
