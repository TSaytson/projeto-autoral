/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.achurchconsulting.com',
        port: '',
        pathname: '/wp-content/uploads/2021/02/remote-work-models.png'
      },
      {
        protocol: 'https',
        hostname: 'tecdn.b-cdn.net',
        port: '',
        pathname: '/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
      }
    ]
  }
}

module.exports = nextConfig
