/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.splitChunks.maxInitialRequests = Infinity;
      config.optimization.splitChunks.minSize = 0;
      config.optimization.splitChunks.cacheGroups = {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      };
    }
    return config;
  },
};

module.exports = {
  ...nextConfig,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            pattern: 'www.aipromptvault.dev',
          },
        ],
        destination: 'https://aipromptvault.dev/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            pattern: 'aipromptvault.dev',
          },
        ],
        destination: 'https://www.aipromptvault.dev/:path*',
        permanent: true,
      },
    ];
  },
};