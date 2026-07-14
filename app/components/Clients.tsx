"use client";

import Reveal from "./Reveal";

const clients = [
  "Lipton",
  "Kurkure",
  "Cheetos",
  "Lays",
  "Kia Motors",
  "Mountain Dew",
  "Bayer",
  "Storm Fiber",
  "Nvidia",
  "Alibaba",
];

const stats = [
  { value: "5,000+", label: "Projects delivered" },
  { value: "20+", label: "Countries served" },
  { value: "8+", label: "Years of craft" },
  { value: "95%+", label: "Client retention" },
];

export default function Clients() {
  return (
    <section className="border-t border-cream/10 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-sage">
            (Trusted by teams behind)
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-cream/10 py-12 sm:grid-cols-3 md:grid-cols-5">
            {clients.map((c) => (
              <span
                key={c}
                className="text-center font-display text-2xl font-light text-cream/50 transition-colors duration-300 hover:text-cream md:text-3xl"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div>
                <div className="font-display text-4xl font-light text-sage md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm uppercase tracking-widest text-cream/50">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
