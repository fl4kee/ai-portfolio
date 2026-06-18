/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Produces a minimal self-contained server (.next/standalone/server.js) for Docker.
  output: "standalone",
};

export default nextConfig;
