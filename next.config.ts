import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'lh3.googleusercontent.com' }, { hostname: 'res.cloudinary.com' }],
  },
  async redirects() {
    return [
      {
        source: '/realisations',
        destination: '/projets',
        permanent: true,
      },
      {
        source: '/realisations/:slug*',
        destination: '/projets/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
