/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
        'img.youtube.com', 
        'https://www.youtube.com'
    ],
    disableStaticImages: true,

  },
}

module.exports = nextConfig
