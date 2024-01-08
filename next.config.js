/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();

module.exports = removeImports({
  reactStrictMode: true,
   i18n: {
    locales: ['en-AU'],
    defaultLocale: 'en-AU',
  },
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
