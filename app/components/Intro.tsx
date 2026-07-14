"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

const words =
  "We help ambitious brands tell their story — through strategy, design, code and data. One team, many disciplines, obsessed with results."
    .split(" ");

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.25"],
  });

  return (
    <section id="about" className="container-x py-28 md:py-40">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-sage">
              (About us)
            </p>
          </Reveal>
        </div>
        <div ref={ref} className="md:col-span-9">
          <p className="flex flex-wrap font-display text-3xl font-light leading-snug tracking-tight md:text-5xl md:leading-[1.15]">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={i} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.28em]">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
