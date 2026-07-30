import { BadgeCheck, Check, Gift, Lock, ShieldCheck } from "lucide-react";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";

const included = [
  "The complete guide with 18 essential questions",
  "Questions organised by trimester and by theme",
  "Plain-language explanation of why each question matters",
  "Mobile version + print-ready version",
  "Lifetime access, including future updates",
];

const bonuses = [
  { name: "Printable Checklist", value: "R$37", text: "One page to fold into your prenatal folder." },
  { name: "Consultation Notes Template", value: "R$29", text: "Record answers so nothing is lost." },
  { name: "Hospital Bag Checklist", value: "R$24", text: "Everything for mum and baby, nothing forgotten." },
];

export function Offer() {
  return (
    <section id="offer" className="scroll-mt-8 bg-soft-glow py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold leading-tight sm:text-[2.5rem]">
            Everything you get today
          </h2>
          <p className="mt-4 text-center text-base text-muted-foreground sm:text-lg">
            Less than the cost of a parking ticket at the clinic.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-brand/15 bg-card shadow-lift">
            <div className="bg-brand-gradient px-6 py-5 text-center text-brand-foreground">
              <p className="text-xs font-bold uppercase tracking-[0.22em]">Limited launch price</p>
            </div>

            <div className="px-6 py-8 sm:px-10 sm:py-10">
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-0.5 size-5 shrink-0 text-success" aria-hidden="true" />
                    <span className="text-sm font-medium sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-3">
                {bonuses.map((b) => (
                  <div
                    key={b.name}
                    className="flex items-start gap-3 rounded-2xl bg-brand-soft p-4"
                  >
                    <Gift className="mt-0.5 size-5 shrink-0 text-brand-accent" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold uppercase tracking-wide text-brand-accent">
                        Bonus · {b.name}
                      </p>
                      <p className="mt-1 text-sm text-secondary-foreground">{b.text}</p>
                    </div>
                    <span className="shrink-0 text-sm font-semibold line-through opacity-60">
                      {b.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-9 text-center">
                <p className="text-sm font-medium text-muted-foreground">
                  Total real value: <span className="line-through">R$187</span> · Regular price{" "}
                  <span className="line-through">R$97</span>
                </p>
                <p className="mt-2 font-display text-6xl font-semibold text-gradient-brand sm:text-7xl">
                  R$27
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  One-time payment · instant access
                </p>

                <div className="mt-7 flex justify-center">
                  <CtaButton />
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Lock className="size-4 text-success" aria-hidden="true" /> Secure checkout
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BadgeCheck className="size-4 text-success" aria-hidden="true" /> Instant
                    delivery
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-card mt-10 flex flex-col items-center gap-6 rounded-[2rem] p-8 text-center sm:flex-row sm:text-left">
            <span className="relative inline-flex size-28 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-brand-foreground shadow-lift">
              <span className="absolute inset-1.5 rounded-full border-2 border-dashed border-[oklch(1_0_0/0.6)]" />
              <span className="relative text-center leading-tight">
                <ShieldCheck className="mx-auto size-7" aria-hidden="true" />
                <span className="mt-1 block font-display text-xl font-bold">7 days</span>
                <span className="block text-[0.6rem] font-bold uppercase tracking-widest">
                  Guarantee
                </span>
              </span>
            </span>
            <div>
              <h3 className="text-2xl font-semibold">Zero-risk, 7-day money-back guarantee</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Read every question, print the checklist, take it to your appointment. If it doesn't
                make you feel more prepared, send one email within 7 days and get 100% of your money
                back. You keep the bonuses.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
