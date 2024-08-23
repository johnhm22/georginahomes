/** @type {import('next').NextConfig} */
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

export default nextConfig;
