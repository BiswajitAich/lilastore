/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  // scope: '/app',
  sw: '/sw.js',
});

module.exports = withPWA({
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/src/app/layout',
      },
    ];
  },
});
