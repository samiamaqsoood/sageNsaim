"use client";

const items = [
  "Social Media",
  "Web Development",
  "Backend Automation",
  "Branding",
  "Photography",
  "AI & Data",
  "Content Creation",
  "Motion & Video",
];

export default function Marquee() {
  return (
    <div className="border-y border-cream/10 bg-ink-soft py-6 md:py-8">
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="whitespace-nowrap px-8 font-display text-3xl font-light text-cream/80 md:text-5xl">
                {item}
              </span>
              <span className="text-2xl text-sage md:text-4xl">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
