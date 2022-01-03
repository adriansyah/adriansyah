/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

module.exports = removeImports({
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com"],
    loader: "custom",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
