import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://res.cloudinary.com/djjqvm5wn/**"),new URL("https://i.ytimg.com/vi/**")],  
  },
};

export default nextConfig;
