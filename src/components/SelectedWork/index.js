"use client";

import Title from "@/components/Title";
import { useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import { SimpleCard } from "./components/SimpleCard";
import data from "@/utils/data.json";
import Link from "next/link";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);

    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

function DesktopStack() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full bg-neutral-900 ${showCursor ? "cursor-none" : ""}`}
      onMouseEnter={() => setShowCursor(true)}
      onMouseLeave={() => setShowCursor(false)}
      onMouseMove={handleMouseMove}
    >
      {showCursor && (
        <div
          className="pointer-events-none fixed left-0 top-0 z-[9999] flex h-20 w-20 select-none items-center justify-center rounded-full bg-white text-xs font-semibold text-black shadow-xl transition-opacity duration-150 ease-out"
          style={{
            transform: `translate3d(${mousePos.x - 40}px, ${mousePos.y - 40}px, 0)`,
          }}
        >
          VIEW →
        </div>
      )}

      {data.projects.map((card, index) => {
        const targetScale = 1 - (data.projects.length - index) * 0.05;

        return (
          <Link href={`/projects/${card.id}`} key={card.id}>
            <Card
              index={index}
              total={data.projects.length}
              progress={scrollYProgress}
              targetScale={targetScale}
              {...card}
            />
          </Link>
        );
      })}
    </div>
  );
}

function MobileList() {
  return (
    <div className="w-full">
      {data.projects.map((card) => (
        <Link href={`/projects/${card.id}`} key={card.id}>
          <SimpleCard {...card} />
        </Link>
      ))}
    </div>
  );
}

function SelectedWork() {
  const isDesktop = useIsDesktop();

  return (
    <section
      id="work"
      className="bg-background flex flex-col items-center justify-center"
    >
      <Title text1="Selected Work" text2="Selected Work" />
      {isDesktop ? <DesktopStack /> : <MobileList />}
    </section>
  );
}

export default SelectedWork;
