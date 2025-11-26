/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  
  webpack: (config) => {
    config.externals = [...(config.externals || []), '@aws-sdk/core'];
    return config;
  },
};

export default nextConfig;
