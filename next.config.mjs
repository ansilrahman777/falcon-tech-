/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      {
        // Surveying moved out of Industrial Services into its own division
        source: "/services/industrial-services/survey-scanning",
        destination: "/services/survey-scanning",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
