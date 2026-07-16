"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedHeading from "./AnimatedHeading";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden border-t border-cream/10 py-32 md:py-48"
    >
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/15 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-taupe/15 blur-[120px]" />
      </motion.div>

      <div className="container-x text-center">
        <p className="mb-8 text-sm uppercase tracking-[0.3em] text-cream/50">
          Not the finish line — it&apos;s step one.
        </p>

        <AnimatedHeading
          className="mx-auto max-w-5xl font-display text-[13vw] font-light leading-[0.95] tracking-tightest md:text-[8vw]"
          lines={[
            <>Let&apos;s build</>,
            <>
              your <span className="italic text-sage">vision.</span>
            </>,
          ]}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-14 flex flex-col items-center gap-6"
        >
          <a
            href="mailto:hello@sageandsaim.com"
            className="group inline-flex items-center gap-4 rounded-full bg-cream px-8 py-4 text-ink transition-transform duration-300 hover:scale-105"
          >
            <span className="text-sm uppercase tracking-[0.2em]">Work with us</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:rotate-45">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </span>
          </a>
          <a
            href="mailto:hello@sageandsaim.com"
            className="text-lg text-cream/60 underline-offset-4 transition-colors hover:text-cream hover:underline"
          >
            hello@sageandsaim.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
