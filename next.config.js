/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  sw: '/sw.js',
  cacheOnFrontEndNav: true,
  fallbacks: {
    document: '/offline.html',
  }
});

module.exports = withPWA({
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "di3zlyh9o"
  },
  reactStrictMode: true,
});
