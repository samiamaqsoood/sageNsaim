"use client";

import Image from "next/image";
import Reveal from "./Reveal";

type Member = {
  name: string;
  role: string;
  bio: string;
  skills: string[];
  gradient: string;
  photo: string;
};

const team: Member[] = [
  {
    name: "Shafqat Ali",
    role: "Creative & Brand Director",
    bio: "Graphic designer with 8+ years and 5,000+ projects delivered for multinational brands including Lipton, Kurkure, Cheetos, Kia and Mountain Dew across 20+ countries. Leads branding, social media creatives, art direction and photography, transforming strategy into scroll-stopping visuals while keeping every touchpoint consistent, on-brand and unmistakable worldwide.",
    skills: ["Branding", "Social Media", "Art Direction", "Photography"],
    gradient: "linear-gradient(135deg, #c2a982, #836b48)",
    photo: "/team-shafqat.jpg",
  },
  {
    name: "Sajeela Safdar",
    role: "Automation Engineer & Data Specialist",
    bio: "Specializing in workflow automation, API integrations, large language models (LLMs), natural language processing (NLP), and end-to-end business solutions. Experienced in building connected systems that automate repetitive tasks, streamline workflows, integrate business applications, and improve operational efficiency.",
    skills: ["Workflow Automation", "API Integrations", "LLMs & NLP", "Business Solutions"],
    gradient: "linear-gradient(135deg, #8ea884, #3a3a34)",
    photo: "/team-sajeela.jpg",
  },
  {
    name: "Samia Maqsood",
    role: "Web & Automation Lead",
    bio: "Full-stack MERN and Next.js developer building fast, scalable websites, REST APIs and AI agents. Has contributed to projects for global tech leaders including NVIDIA and Alibaba — from LLM evaluation and RLHF/SFT datasets to RAG and agentic workflows — bringing enterprise-grade engineering standards from multinational teams to every product we ship.",
    skills: ["Next.js / MERN", "AI Agents", "REST APIs", "Automation"],
    gradient: "linear-gradient(135deg, #a8bf9e, #6f8a66)",
    photo: "/team-samia.jpg",
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
                  className="relative mb-6 aspect-square w-full overflow-hidden rounded-xl"
                  style={{ background: m.gradient }}
                >
                  <Image
                    src={m.photo}
                    alt={`${m.name} — ${m.role}, Sage&Saim`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                  <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px]" />
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
