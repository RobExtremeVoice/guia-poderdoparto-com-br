import {
  Apple,
  Baby,
  BookOpenCheck,
  Building2,
  ClipboardList,
  Droplets,
  FlaskConical,
  HeartPulse,
  Languages,
  Pill,
  Printer,
  Smartphone,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import mockupImg from "@/assets/mockup-guia.jpg";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";

const pillars = [
  { icon: ClipboardList, text: "18 organised questions, by trimester" },
  { icon: Languages, text: "Simple language, zero medical jargon" },
  { icon: FlaskConical, text: "Evidence-based and reviewed by an obstetrician" },
  { icon: Printer, text: "Printable version to take in your folder" },
  { icon: Smartphone, text: "Mobile version to open in the waiting room" },
];

const topics = [
  { icon: BookOpenCheck, title: "Birth Plan", text: "How to build one your team will actually respect." },
  { icon: HeartPulse, title: "Emergency Signs", text: "When to go to hospital immediately — and when not to panic." },
  { icon: Baby, title: "Baby Development", text: "What to check at each stage of growth." },
  { icon: FlaskConical, title: "Medical Exams", text: "Which tests matter, when, and what results mean." },
  { icon: Apple, title: "Nutrition", text: "Supplements, weight and food safety in pregnancy." },
  { icon: Building2, title: "Hospital", text: "Routines, policies and admission questions." },
  { icon: Stethoscope, title: "Labour", text: "Interventions, positions and informed consent." },
  { icon: Pill, title: "Medication", text: "What is safe, what is not, and who to call." },
  { icon: Droplets, title: "Breastfeeding", text: "Support in the first golden hour and beyond." },
];

const benefits = [
  "Walk into every appointment with quiet confidence.",
  "Never forget an important question again.",
  "Understand what is happening inside your body.",
  "Take part in the medical decisions about your birth.",
  "Feel calmer between one consultation and the next.",
  "Arrive at the hospital knowing exactly what to ask.",
];

export function SolutionInside() {
  return (
    <>
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-brand-soft p-4 shadow-lift sm:p-8">
              <img
                src={mockupImg}
                alt="The 18 questions guide shown on a tablet, a smartphone and as a printed checklist"
                width={1280}
                height={960}
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-accent">
              <Sparkles className="size-3.5" aria-hidden="true" /> The solution
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-[2.6rem]">
              The guide that tells you exactly what to ask.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              No theory. No 300-page pregnancy encyclopedia. Just the 18 questions that change how
              your prenatal care is delivered — written so you can open your phone and ask them out
              loud.
            </p>
            <ul className="mt-8 space-y-4">
              {pillars.map((p) => (
                <li key={p.text} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand-accent">
                    <p.icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-base font-medium">{p.text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <CtaButton />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-soft py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-[2.5rem]">
              What's inside the guide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-secondary-foreground sm:text-lg">
              Nine themes. Eighteen questions. Every one of them written to be asked in under a
              minute.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.06}>
                <article className="glass-card h-full rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-gradient text-brand-foreground">
                    <t.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-[2.5rem]">
              What actually changes for you
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b} delay={(i % 2) * 0.06}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-success text-[oklch(1_0_0)]">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" aria-hidden="true">
                      <path
                        d="m5 13 4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <p className="text-base font-medium leading-snug">{b}</p>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="mt-12 flex justify-center">
              <CtaButton />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
