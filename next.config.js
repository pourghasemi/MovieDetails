/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
  // output: "export",
};

module.exports = nextConfig;
