const path = require('path');

module.exports = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.viperbotlist.com',
        port: '',
        pathname: '/images/**',
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles')
    return config
  },
};