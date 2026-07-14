"use client";

import Image from "next/image";

const columns = [
  {
    title: "Navigate",
    links: [
      { label: "Work", href: "#work" },
      { label: "Services", href: "#services" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Social Media", href: "#services" },
      { label: "Web Development", href: "#services" },
      { label: "Automation & AI", href: "#services" },
      { label: "Branding & Photo", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Behance", href: "#" },
      { label: "Email", href: "mailto:hello@sagensaim.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink-soft">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream">
                <Image
                  src="/logo.png"
                  alt="sageNsaim"
                  width={140}
                  height={72}
                  className="h-8 w-auto scale-[2.1] object-contain"
                />
              </span>
              <span className="text-lg font-semibold tracking-tight">
                sage<span className="text-taupe-light">Nsaim</span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-cream/60">
              A creative &amp; growth agency. Social, web, automation, branding,
              photography and AI — built to grow your brand.
            </p>
            <p className="mt-6 text-sm text-cream/40">Available worldwide</p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-cream/40">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-cream/70 transition-colors hover:text-sage"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} sageNsaim Agency. All rights reserved.</span>
          <span className="uppercase tracking-widest">
            Designed &amp; built by sageNsaim
          </span>
        </div>
      </div>
    </footer>
  );
}
