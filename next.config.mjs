/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (cfg) => {},
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "frontmatter-markdown-loader",
    });

    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
      };
    }

    return config;
  },
};

export default nextConfig;
