'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* 图片背景 */}
      <img
  src="/1.png"
  alt="Full screen"
  className="w-screen h-screen object-fill"
/>
    </div>
  );
}