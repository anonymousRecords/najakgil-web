"use client";
import { useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { CharacterElement } from "@/public";

// 생성할 눈송이 개수
const SNOWFLAKE_COUNT = 15;

const Home = () => {
  const [snowflakeSizes, setSnowflakeSizes] = useState<number[]>([]);
  useEffect(() => {
    // 모바일 디바이스 여부 확인
    const isMobile = window.innerWidth <= 768;
    // 눈송이 크기 랜덤 설정
    const sizes = Array.from({ length: SNOWFLAKE_COUNT }).map(
      () => Math.random() * (isMobile ? 300 : 500) + 100,
    );
    setSnowflakeSizes(sizes);

    const snowflakes = document.querySelectorAll(".snowflake");
    snowflakes.forEach((snowflake) => {
      animateSnowflake(snowflake);
    });
  }, []);

  const animateSnowflake = (snowflake: Element) => {
    // 눈송이가 화면을 가로지르는데 걸리는 시간
    const duration = Math.random() * 10 + 5;
    // 눈송이가 화면 위에서 아래로 떨어지는데 걸리는 시간
    const fallDuration = Math.random() * 8 + 5;
    // 눈송이가 화면에 처음 등장하는 시간을 결정
    const delay = Math.random() * -15;

    gsap.to(snowflake, {
      duration,
      x: `+=${Math.random() * 400 - 200}`,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
    gsap.to(snowflake, {
      duration: fallDuration,
      y: window.innerHeight + 100,
      ease: "none",
      repeat: -1,
      delay,
    });
    gsap.fromTo(
      snowflake,
      { opacity: 0.2, duration: 1 },
      { opacity: 1, duration: 1 },
    );
  };

  const characterElements = Object.values(CharacterElement);

  const snowflakes = Array.from({ length: SNOWFLAKE_COUNT }).map((_, index) => {
    const size = snowflakeSizes[index] || 100;
    return (
      <Image
        key={index}
        className="snowflake absolute"
        src={characterElements[index % characterElements.length]}
        alt={`snowflake-${index}`}
        style={{
          pointerEvents: "none",
          // 랜덤한 위치에 눈송이 생성
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * -600}px`,
          width: `${size}px`,
          height: `${size}px`,
        }}
        width={size}
        height={size}
      />
    );
  });

  return (
    <div className="relative h-full w-screen overflow-hidden">{snowflakes}</div>
  );
};
export default Home;
