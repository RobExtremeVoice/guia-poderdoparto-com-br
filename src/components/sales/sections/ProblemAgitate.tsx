import { AlertTriangle, Brain, Clock, HeartCrack, ShieldOff, Timer } from "lucide-react";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";

const problems = [
  {
    icon: Clock,
    title: "Appointments are short",
    text: "The average prenatal consultation lasts less than 12 minutes. Blood pressure, belly measurement, a quick look at the exams — and the door is already open again.",
  },
  {
    icon: Brain,
    title: "Everything you wanted to ask disappears",
    text: "You rehearsed the question in the car. Then the doctor asks how you're feeling, you say \"fine\", and you leave the room with the question still inside you.",
  },
  {
    icon: Timer,
    title: "Some things are discovered too late",
    text: "Birth plan, warning signs, hospital routines, breastfeeding support — many mothers only learn what to ask when there's no longer time to change anything.",
  },
];

const agitations = [
  { icon: AlertTriangle, label: "Anxiety between appointments" },
  { icon: HeartCrack, label: "Insecurity about your own body" },
  { icon: ShieldOff, label: "Procedures you never agreed to" },
  { icon: Brain, label: "Decisions made without you" },
];

export function ProblemAgitate() {
  return (
    <>
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold leading-tight sm:text-[2.6rem]">
              Most pregnant women leave their appointments with more questions than answers.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg">
              You waited three weeks for those ten minutes. You sat in the waiting room rehearsing
              what to say. And on the way home you realised: you forgot to ask the one thing that
              had been keeping you awake.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <article className="glass-card h-full rounded-3xl p-7">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand-soft text-brand-accent">
                    <p.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight sm:text-[2.5rem]">
              The problem isn't the question you forgot. It's everything that grows in its place.
            </h2>
            <div className="mx-auto mt-7 max-w-2xl space-y-4 text-base leading-relaxed text-secondary-foreground sm:text-lg">
              <p>
                Silence turns into searching at 2 a.m., where every symptom becomes the worst-case
                scenario. Doubt turns into fear. Fear turns into a woman who nods at everything
                because she doesn't feel entitled to ask.
              </p>
              <p className="font-semibold text-foreground">
                And then the birth happens the way someone else decided.
              </p>
            </div>
          </Reveal>

          <ul className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
            {agitations.map((a, i) => (
              <Reveal as="li" key={a.label} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-2xl bg-background/80 px-5 py-4 text-left shadow-soft backdrop-blur">
                  <a.icon className="size-5 shrink-0 text-brand-accent" aria-hidden="true" />
                  <span className="text-sm font-medium">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <p className="mt-10 font-display text-xl font-semibold sm:text-2xl">
              You don't need to become a doctor. You just need the right questions.
            </p>
            <div className="mt-7 flex justify-center">
              <CtaButton />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
