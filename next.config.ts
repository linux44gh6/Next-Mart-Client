import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'psediting.websites.co.in'],
  },
  experimental: {
    serverActions:{
      bodySizeLimit: '5mb',
    }
  }
};


export default nextConfig;
