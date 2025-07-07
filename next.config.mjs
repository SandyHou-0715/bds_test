/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // 禁用动态图片优化
  },
};

export default nextConfig;