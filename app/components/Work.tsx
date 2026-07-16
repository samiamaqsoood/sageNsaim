"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

type Project = {
  title: string;
  category: string;
  year: string;
  image: string;
  tall?: boolean;
};

const projects: Project[] = [
  {
    title: "FMCG Campaign Creatives",
    category: "Branding · Social",
    year: "2025",
    image: "/work-fmcg.jpg",
    tall: true,
  },
  {
    title: "SaaS Marketing Website",
    category: "Web · Next.js",
    year: "2025",
    image: "/work-saas.jpg",
  },
  {
    title: "AI Support Agent",
    category: "Automation · RAG",
    year: "2026",
    image: "/work-ai.jpg",
  },
  {
    title: "Product Photoshoot",
    category: "Photography · Art Direction",
    year: "2025",
    image: "/work-product.jpg",
    tall: true,
  },
  {
    title: "Corporate Brand System",
    category: "Identity · Guidelines",
    year: "2024",
    image: "/work-brand.jpg",
  },
  {
    title: "Computer Vision Dataset",
    category: "AI · Data Annotation",
    year: "2026",
    image: "/work-cv.jpg",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="container-x">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sage">
                (Selected work)
              </p>
              <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
                Work that moves
                <br />
                the needle.
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-cream/60">
              A glimpse of the brands, products and campaigns our team has
              shaped across industries and continents.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <Reveal delay={(index % 3) * 0.08} className={project.tall ? "lg:row-span-2" : ""}>
      <div
        ref={ref}
        className={`group relative w-full overflow-hidden rounded-2xl ${
          project.tall ? "aspect-[3/4] lg:h-full" : "aspect-[4/3]"
        }`}
      >
        <motion.div style={{ y }} className="absolute inset-0 scale-110 transition-transform duration-700 group-hover:scale-125">
          <Image
            src={project.image}
            alt={`${project.title} — ${project.category}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10 transition-colors duration-500 group-hover:from-ink/90" />

        {/* Noise / grain overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px]" />

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <span className="rounded-full bg-ink/40 px-3 py-1 text-xs uppercase tracking-wider text-cream backdrop-blur-sm">
              {project.category}
            </span>
            <span className="text-xs text-cream/80">{project.year}</span>
          </div>
          <div className="translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
            <h3 className="font-display text-2xl font-light text-cream md:text-3xl">
              {project.title}
            </h3>
            <span className="mt-2 flex items-center gap-2 text-sm uppercase tracking-widest text-cream/0 transition-colors duration-500 group-hover:text-cream/90">
              View case
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
