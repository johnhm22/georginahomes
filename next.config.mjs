/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

// const withPWA = require('next-pwa')({
//   dest: 'public'
//   // disable: process.env.NODE_ENV === 'development',
//   // register: true,
//   // scope: '/app',
//   // sw: 'service-worker.js',
//   //...
// });

const prod = process.env.NODE_ENV === 'PRODUCTION';

const newPWA = withPWA({
  dest: 'public',
  disable: prod ? false : true
});

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: ''
        // pathname: '/my-bucket/**',
      }
    ]
  }
};

export default newPWA(nextConfig);
