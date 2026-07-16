# Sage&Saim — Agency Website

A modern, animated single-page marketing site for **Sage&Saim**, a creative & growth agency offering social media management, web development, backend automation, branding, photography and AI/data solutions.

Inspired by the layout and motion feel of [podium.global](https://podium.global/) and [greydensity.com](https://www.greydensity.com/), adapted to the Sage&Saim brand (sage green, taupe, charcoal).

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) + **React 19**
- **[TypeScript](https://www.typescriptlang.org/)**
- **[Tailwind CSS](https://tailwindcss.com/)** for styling
- **[Framer Motion](https://www.framer.com/motion/)** for animations
- **[Lenis](https://github.com/darkroomengineering/lenis)** for smooth scrolling
- Google Fonts: **Inter** (UI) + **Fraunces** (display)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form email (Gmail SMTP)

The contact form posts to a server-side route (`app/api/contact/route.ts`) that
sends an email via Gmail SMTP using [Nodemailer](https://nodemailer.com/). To enable it:

1. Turn on **2-Step Verification** for the Gmail account
   ([myaccount.google.com/security](https://myaccount.google.com/security)).
2. Create an **App Password** ("Mail")
   ([myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)).
3. Copy `.env.local.example` to `.env.local`, set `GMAIL_USER` and paste the
   16-character `GMAIL_APP_PASSWORD` (no spaces), then restart `npm run dev`.

`CONTACT_TO_EMAIL` controls where enquiries land (defaults to `GMAIL_USER`).
Credentials are only read on the server and never exposed to the browser.
Without them the form fails gracefully and asks visitors to email directly.

### Other scripts

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint
```

## Project structure

```
app/
  layout.tsx           # root layout, fonts, metadata, smooth scroll
  page.tsx             # assembles all sections
  globals.css          # base styles + Tailwind
  components/
    SmoothScroll.tsx   # Lenis wrapper
    Navbar.tsx         # sticky nav + mobile menu
    Hero.tsx           # hero with parallax + animated heading
    Marquee.tsx        # scrolling services strip
    Intro.tsx          # scroll-linked word reveal
    Work.tsx           # portfolio grid (gradient placeholders)
    Services.tsx       # interactive services list
    Team.tsx           # team members
    Clients.tsx        # client logos + stats
    CTA.tsx            # closing call to action
    Footer.tsx         # footer + links
    Reveal.tsx         # scroll reveal helper
    AnimatedHeading.tsx# line-mask heading animation
public/
  logo.png             # brand logo
```

## Customization notes

- **Brand colors** live in `tailwind.config.ts` (`sage`, `taupe`, `ink`, `cream`).
- **Contact email** is `sagesaimagency@gmail.com` (official). **Social links** are still placeholders — search the components to replace them with real URLs.
- **Work section** uses gradient placeholders. Drop real images into `public/` and swap the gradient cards in `Work.tsx` for `next/image`.
- **Team bios** are drawn from real team experience; edit in `Team.tsx`.

## To do (when assets are ready)

- Replace portfolio placeholders with real project images / video reels.
- Add real contact email, phone, location and social URLs.
- Optionally add a working contact form (endpoint + validation).
