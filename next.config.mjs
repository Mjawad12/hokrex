/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: ["source.unsplash.com", "outfitters.com.pk", "res.cloudinary.com"],
  },
  reactStrictMode: false,
};

export default nextConfig;
