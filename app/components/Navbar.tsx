"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-ink/70 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <nav className="container-x flex items-center justify-between py-5">
          <a href="#top" className="relative z-50 flex items-center">
            <span className="flex items-center rounded-xl bg-cream px-3.5 py-2 shadow-sm shadow-black/20">
              <Image
                src="/logo-mark.png"
                alt="Sage&Saim Agency"
                width={417}
                height={125}
                className="h-7 w-auto object-contain md:h-8"
                priority
              />
            </span>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-sm uppercase tracking-widest text-cream/80 transition-colors hover:text-cream"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-sage transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-full border border-cream/25 px-5 py-2 text-sm uppercase tracking-widest text-cream transition-colors hover:border-sage hover:bg-sage hover:text-ink md:inline-block"
          >
            Let&apos;s talk
          </a>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          >
            <span
              className={`h-px w-7 bg-cream transition-all duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-7 bg-cream transition-all duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-ink px-8 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="font-display text-5xl text-cream"
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
            <div className="mt-12 text-sm uppercase tracking-widest text-cream/50">
              sagesaimagency@gmail.com
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
