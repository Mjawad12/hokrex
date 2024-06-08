/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  images: {
    domains: [
      "source.unsplash.com",
      "outfitters.com.pk",
      "res.cloudinary.com",
      "images.unsplash.com",
      "lottie.host",
      "lottiefiles.com",
    ],
  },
  webpack: (config) => {
    config.externals.push({
      "utf-8-validate": "commonjs utf-8-validate",
      bufferutil: "commonjs bufferutil",
      canvas: "commonjs canvas",
    });

    return config;
  },

  reactStrictMode: false,
};

export default nextConfig;
