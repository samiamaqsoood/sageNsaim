"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "./Reveal";

type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  deliverables: string[];
  accent: string;
};

const services: Service[] = [
  {
    id: "social",
    index: "01",
    title: "Social Media Management",
    description:
      "End-to-end social strategy, content calendars, community management and campaign creatives that build audiences and drive engagement.",
    deliverables: ["Strategy & Calendars", "Creative Content", "Community", "Paid Campaigns"],
    accent: "#8ea884",
  },
  {
    id: "web",
    index: "02",
    title: "Web Development",
    description:
      "Fast, modern, responsive websites and web apps built with React, Next.js and the MERN stack — from landing pages to full platforms.",
    deliverables: ["Next.js / React", "MERN Stack", "E-commerce", "CMS & Landing Pages"],
    accent: "#a68b63",
  },
  {
    id: "automation",
    index: "03",
    title: "Backend & Automation",
    description:
      "APIs, integrations and AI agents that automate the busywork — REST APIs, workflows, chatbots and custom internal tools.",
    deliverables: ["REST APIs", "AI Agents & RAG", "Workflow Automation", "Integrations"],
    accent: "#a8bf9e",
  },
  {
    id: "branding",
    index: "04",
    title: "Branding & Design",
    description:
      "Identity systems, logos, brand guidelines and marketing collateral crafted with an eye for typography, story and detail.",
    deliverables: ["Logo & Identity", "Brand Guidelines", "Pitch Decks", "Print & Packaging"],
    accent: "#c2a982",
  },
  {
    id: "photo",
    index: "05",
    title: "Photography & Video",
    description:
      "Product and campaign photography, art direction and motion content that make your brand look its absolute best.",
    deliverables: ["Product Shoots", "Art Direction", "Motion & Reels", "Retouching"],
    accent: "#6f8a66",
  },
  {
    id: "ai",
    index: "06",
    title: "AI & Data Solutions",
    description:
      "Data annotation, computer vision and NLP pipelines, dataset preparation and model support for AI-driven products.",
    deliverables: ["Data Annotation", "Computer Vision", "NLP Pipelines", "Dataset QA"],
    accent: "#836b48",
  },
];

export default function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="services" className="border-t border-cream/10 py-24 md:py-36">
      <div className="container-x">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
              What we do,
              <br />
              <span className="text-sage">under one roof.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-cream/60">
              Six disciplines, one integrated team. Hover a service to see what
              you get.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-cream/10">
          {services.map((s) => (
            <div
              key={s.id}
              onMouseEnter={() => setActive(s.id)}
              onMouseLeave={() => setActive(null)}
              className="group relative border-b border-cream/10"
            >
              {/* Accent fill on hover */}
              <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-0 origin-bottom"
                style={{ backgroundColor: s.accent }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{
                  scaleY: active === s.id ? 1 : 0,
                  opacity: active === s.id ? 0.12 : 0,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <Reveal y={20}>
                <div className="relative grid grid-cols-12 items-center gap-4 py-7 md:py-9">
                  <span className="col-span-2 text-sm text-cream/40 md:col-span-1">
                    {s.index}
                  </span>
                  <h3 className="col-span-10 font-display text-2xl font-light tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:col-span-5 md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="col-span-12 hidden text-sm text-cream/60 md:col-span-5 md:block">
                    {s.description}
                  </p>
                  <span className="col-span-12 flex justify-end md:col-span-1">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-cream group-hover:bg-cream group-hover:text-ink">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </span>
                  </span>
                </div>
              </Reveal>

              <AnimatePresence>
                {active === s.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative overflow-hidden md:hidden"
                  >
                    <p className="pb-5 text-sm text-cream/60">{s.description}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative flex flex-wrap gap-2 overflow-hidden pb-0 transition-all duration-500 group-hover:pb-7 md:group-hover:pb-7">
                <div className="flex max-h-0 flex-wrap gap-2 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {s.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full border border-cream/20 px-4 py-1.5 text-xs uppercase tracking-wider text-cream/70"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
