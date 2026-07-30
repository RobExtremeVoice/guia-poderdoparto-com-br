import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";
import { FAQS } from "../data";

export function FaqFinal() {
  return (
    <>
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold leading-tight sm:text-[2.5rem]">
              Questions before you start asking questions
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion type="single" collapsible className="mt-12 w-full space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={faq.q}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-card px-5 shadow-soft"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-gradient py-20 text-brand-foreground sm:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight sm:text-[2.7rem]">
              Your next appointment is coming. You get to decide how you walk out of it.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed opacity-95 sm:text-lg">
              With the same ten minutes, the same doctor and the same waiting room — but with 18
              questions in your hand, a checklist in your folder and the certainty that nothing
              important was left unsaid. That's what R$27 buys today.
            </p>
            <div className="mt-10 flex justify-center">
              <CtaButton className="bg-[oklch(1_0_0)] bg-none text-brand-accent" />
            </div>
            <p className="mt-4 text-sm opacity-90">
              Instant access · 7-day guarantee · Read it on your phone today
            </p>
          </Reveal>
        </div>
      </section>

      <footer className="bg-background py-10">
        <div className="mx-auto max-w-3xl px-5 text-center text-xs leading-relaxed text-muted-foreground">
          <p>
            This guide is educational material and does not replace medical consultation, diagnosis
            or treatment. Always follow the guidance of your obstetrician.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} 18 Essential Questions · All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
