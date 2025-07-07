'use client';

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src="/1.png" // 替换成你的图片路径
        alt="Full screen background"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}