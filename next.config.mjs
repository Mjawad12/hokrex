/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: { domains: ["source.unsplash.com", "outfitters.com.pk"] },
};

export default nextConfig;
