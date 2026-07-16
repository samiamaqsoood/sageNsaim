"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import AnimatedHeading from "./AnimatedHeading";
import Reveal from "./Reveal";

const projectTypes = [
  "Social Media Management",
  "Web Development",
  "Backend & Automation",
  "Branding & Design",
  "Photography & Video",
  "AI & Data Solutions",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-full border border-cream/20 bg-transparent px-6 py-4 text-cream placeholder-cream/40 outline-none transition-colors focus:border-sage focus:bg-cream/[0.03]";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      company: String(fd.get("company") ?? ""),
      projectType: String(fd.get("projectType") ?? ""),
      message: String(fd.get("message") ?? ""),
      hpToken: String(fd.get("hp_token") ?? ""),
    };

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-cream/10 py-24 md:py-36"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-[10%] top-1/3 h-[45vh] w-[45vw] rounded-full bg-sage/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vw] rounded-full bg-taupe/10 blur-[130px]" />
      </div>

      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-sage">
              (Let&apos;s talk)
            </p>
          </Reveal>
          <AnimatedHeading
            className="font-display text-4xl font-light leading-[1.05] tracking-tight md:text-6xl"
            lines={[
              <>If you want a</>,
              <span key="accent" className="text-sage">
                great-to-work-with
              </span>,
              <>agency to grow</>,
              <>your brand &amp; build</>,
              <>things people admire.</>,
            ]}
          />
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6 text-cream/60">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-[0.25em] text-cream/40">Email</p>
                <a
                  href="mailto:sagesaimagency@gmail.com"
                  className="text-lg text-cream underline-offset-4 transition-colors hover:text-sage hover:underline"
                >
                  sagesaimagency@gmail.com
                </a>
              </div>
              <div className="flex gap-12">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-cream/40">Phone</p>
                  <a
                    href="tel:+923177404013"
                    className="text-lg text-cream transition-colors hover:text-sage"
                  >
                    +92 317 740 4013
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-cream/40">Location</p>
                  <p className="text-lg text-cream">Sargodha, Pakistan</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl border border-sage/30 bg-sage/5 p-10 text-center"
            >
              <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sage text-ink">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mb-3 font-display text-3xl font-light">Message sent</h3>
              <p className="max-w-sm text-cream/60">
                Thanks for reaching out — we&apos;ve got your enquiry and will get
                back to you within 1–2 business days.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm uppercase tracking-widest text-sage transition-colors hover:text-cream"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {/* Honeypot: hidden from users & autofill, catches bots.
                  Neutral name so browser autofill won't populate it. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[-9999px] top-0 h-0 w-0 overflow-hidden opacity-0"
              >
                <input
                  type="text"
                  name="hp_token"
                  tabIndex={-1}
                  autoComplete="off"
                  defaultValue=""
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <input name="firstName" type="text" required placeholder="First name *" className={inputClass} />
                <input name="lastName" type="text" required placeholder="Last name *" className={inputClass} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="phone" type="tel" placeholder="Phone (optional)" className={inputClass} />
                <input name="email" type="email" required placeholder="Email *" className={inputClass} />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input name="company" type="text" placeholder="Company" className={inputClass} />
                <select name="projectType" required defaultValue="" className={`${inputClass} appearance-none bg-ink`}>
                  <option value="" disabled>
                    Project type *
                  </option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project *"
                className="w-full resize-none rounded-3xl border border-cream/20 bg-transparent px-6 py-4 text-cream placeholder-cream/40 outline-none transition-colors focus:border-sage focus:bg-cream/[0.03]"
              />

              {status === "error" && (
                <p className="rounded-2xl border border-red-400/30 bg-red-400/10 px-5 py-3 text-sm text-red-200">
                  {errorMsg}
                </p>
              )}

              <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-cream/40">
                  We&apos;ll only use your details to reply to your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center gap-3 rounded-full bg-cream px-8 py-4 text-ink transition-transform duration-300 hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <span className="text-sm uppercase tracking-[0.2em]">
                    {status === "submitting" ? "Sending…" : "Send message"}
                  </span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ink text-cream transition-transform group-hover:rotate-45">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
