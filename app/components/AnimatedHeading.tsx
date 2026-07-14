"use client";

import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

type AnimatedHeadingProps = {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
};

export default function AnimatedHeading({
  lines,
  className,
  lineClassName,
  delay = 0,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className={`block ${lineClassName ?? ""}`}
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 1,
              delay: delay + i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
