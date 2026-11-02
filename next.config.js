/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export: `npm run build` creates an `out/` folder with plain
  // HTML + CSS + JS that can be hosted anywhere and pointed at
  // https://nooralsamatour.com/
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
