module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["bayut-production.s3.eu-central-1.amazonaws.com"],
  },
  module: {
    rules: [
      {
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
