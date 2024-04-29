/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/events-domain"],
};

export default nextConfig;
