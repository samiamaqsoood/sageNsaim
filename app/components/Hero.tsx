"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden pb-10 pt-32"
    >
      {/* Ambient gradient backdrop */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[60vh] w-[60vw] -translate-x-1/2 rounded-full bg-sage/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[5%] h-[50vh] w-[40vw] rounded-full bg-taupe/20 blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#1a1a18_80%)]" />
      </motion.div>

      <div className="container-x">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cream/60"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-sage" />
          Available worldwide — Marketing & Creative Studio
        </motion.p>
      </div>

      <motion.div style={{ opacity }} className="container-x">
        <AnimatedHeading
          className="font-display text-[13vw] font-light leading-[0.92] tracking-tightest md:text-[10.5vw] lg:text-[9vw]"
          lines={[
            <>We grow brands</>,
            <>
              through <span className="text-sage">creativity</span>
            </>,
            <>
              &amp; <span className="italic text-taupe-light">technology.</span>
            </>,
          ]}
          delay={0.4}
        />
      </motion.div>

      <div className="container-x mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="max-w-md text-balance text-base text-cream/70 md:text-lg"
        >
          sageNsaim is a full-service agency blending social media, design,
          web development, automation and AI to move your brand forward.
        </motion.p>

        <motion.a
          href="#work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.9 }}
          className="group flex items-center gap-4 self-start text-sm uppercase tracking-[0.25em] text-cream/70 transition-colors hover:text-cream md:self-auto"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cream/20 transition-colors group-hover:border-sage group-hover:bg-sage group-hover:text-ink">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-y-0.5"
            >
              <path
                d="M8 1v14M8 15l5-5M8 15l-5-5"
                stroke="currentColor"
                strokeWidth="1.4"
              />
            </svg>
          </span>
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}
