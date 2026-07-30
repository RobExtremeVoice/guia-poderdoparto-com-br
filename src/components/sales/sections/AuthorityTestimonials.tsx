import { Award, GraduationCap, Quote, Star, Users } from "lucide-react";
import autoraImg from "@/assets/autora.jpg";
import { Reveal } from "../Reveal";

const credentials = [
  { icon: GraduationCap, text: "Obstetrics & Gynaecology specialist, 18 years in practice" },
  { icon: Users, text: "Over 2,400 births accompanied in public and private care" },
  { icon: Award, text: "Committed to evidence-based, respectful maternity care" },
];

const testimonials = [
  {
    name: "Marina R.",
    role: "32 weeks · São Paulo",
    text: "I printed the checklist and took it to my appointment. For the first time my doctor stopped, sat down and explained everything. I left crying — but the good kind.",
  },
  {
    name: "Juliana P.",
    role: "First-time mum · Recife",
    text: "Question number 7 changed my whole birth plan. I had no idea I could ask that, and my obstetrician actually thanked me for bringing it up.",
  },
  {
    name: "Camila S.",
    role: "28 weeks · Belo Horizonte",
    text: "I used to leave every consultation feeling stupid. Now I go in with my phone open and I ask. My anxiety dropped so much my husband noticed.",
  },
  {
    name: "Patrícia L.",
    role: "Second pregnancy · Curitiba",
    text: "Wish I'd had this in my first pregnancy. The emergency signs section alone made me go to hospital on the right night.",
  },
  {
    name: "Aline M.",
    role: "38 weeks · Porto Alegre",
    text: "R$27 for something that made me feel safe for nine months. The hospital bag checklist bonus was worth the price on its own.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="size-4 fill-brand text-brand" aria-hidden="true" />
      ))}
    </div>
  );
}

export function AuthorityTestimonials() {
  return (
    <>
      <section className="bg-brand-soft py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-lift">
              <img
                src={autoraImg}
                alt="Dr. Helena Vasconcelos, obstetrician and author of the guide"
                width={912}
                height={1104}
                loading="lazy"
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-accent">
              Who created this guide
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-[2.4rem]">
              Dr. Helena Vasconcelos
            </h2>
            <p className="mt-4 text-base leading-relaxed text-secondary-foreground sm:text-lg">
              After nearly two decades in delivery rooms, I kept seeing the same thing: informed
              women have calmer pregnancies and safer births. This guide is the list of questions I
              wish every patient brought with her.
            </p>
            <ul className="mt-7 space-y-4">
              {credentials.map((c) => (
                <li key={c.text} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-background text-brand-accent shadow-soft">
                    <c.icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-snug sm:text-base">{c.text}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-[2.5rem]">
              Mothers who stopped leaving with doubts
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.06}>
                <figure className="glass-card flex h-full flex-col rounded-3xl p-7">
                  <Quote className="size-7 text-brand/40" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground">
                    “{t.text}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-lg font-semibold text-brand-foreground"
                    >
                      {t.name.charAt(0)}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-semibold">{t.name}</span>
                      <span className="block truncate text-sm text-muted-foreground">{t.role}</span>
                    </span>
                    <span className="ml-auto shrink-0">
                      <Stars />
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
