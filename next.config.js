/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  // scope: '/app',
  sw: '/lilastore/public/sw.js',

})

module.exports = withPWA({
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "di3zlyh9o"
  },
  output: 'export',
  basePath: '/lilastore',
})