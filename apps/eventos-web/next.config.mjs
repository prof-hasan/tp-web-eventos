/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/design-system", "@repo/events-domain"],
};

export default nextConfig;
