"use client";

import Reveal from "./Reveal";

type Member = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  gradient: string;
  initials: string;
};

const team: Member[] = [
  {
    name: "Shafqat Ali",
    role: "Creative & Brand Director",
    bio: "Graphic designer with 8+ years and 5,000+ projects delivered for global brands like Lipton, Kurkure, Kia and Mountain Dew. Leads branding, social creatives and art direction.",
    skills: ["Branding", "Social Media", "Art Direction", "Photography"],
    gradient: "linear-gradient(135deg, #c2a982, #836b48)",
    initials: "SA",
  },
  {
    name: "Samia Maqsood",
    role: "Web & Automation Lead",
    bio: "Full-stack MERN and Next.js developer building fast websites, APIs and AI agents. Experienced with LLM evaluation, RAG and agentic workflows using modern frameworks.",
    skills: ["Next.js / MERN", "AI Agents", "REST APIs", "Automation"],
    gradient: "linear-gradient(135deg, #a8bf9e, #6f8a66)",
    initials: "SM",
  },
  {
    name: "Sajeela Safdar",
    role: "AI & Data Lead",
    bio: "Data specialist with deep expertise in computer vision, NLP and annotation. Built high-accuracy datasets across 30+ object classes and 9,000+ transcription minutes.",
    skills: ["Computer Vision", "NLP", "Data Annotation", "Dataset QA"],
    gradient: "linear-gradient(135deg, #8ea884, #3a3a34)",
    initials: "SS",
  },
];

export default function Team() {
  return (
    <section id="team" className="border-t border-cream/10 py-24 md:py-36">
      <div className="container-x">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-sage">
                (The team)
              </p>
              <h2 className="max-w-2xl font-display text-4xl font-light leading-tight tracking-tight md:text-6xl">
                Small team.
                <br />
                <span className="text-taupe-light">Serious range.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-cream/60">
              Specialists who&apos;ve delivered for FMCG giants, AI labs and
              startups — now building for you under one roof.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="group flex h-full flex-col rounded-2xl border border-cream/10 bg-ink-soft p-6 transition-colors duration-500 hover:border-sage/40">
                <div
                  className="relative mb-6 flex aspect-square w-full items-center justify-center overflow-hidden rounded-xl"
                  style={{ background: m.gradient }}
                >
                  <span className="font-display text-6xl font-light text-cream/90">
                    {m.initials}
                  </span>
                  <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px]" />
                </div>
                <h3 className="font-display text-2xl font-light">{m.name}</h3>
                <p className="mb-4 text-sm uppercase tracking-widest text-sage">
                  {m.role}
                </p>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-cream/60">
                  {m.bio}
                </p>
                <div className="flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-cream/15 px-3 py-1 text-xs uppercase tracking-wider text-cream/60"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
