import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio-site', // 저장소 이름과 동일하게 설정
  images: {
    unoptimized: true, // 정적 호스팅 환경에서 이미지 최적화 오류 방지
  },
};

export default nextConfig;