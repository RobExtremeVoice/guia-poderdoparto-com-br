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
import capaLivro from "@/assets/capa-livro.jpeg.asset.json";
import { Reveal } from "../Reveal";
import { CtaButton } from "../CtaButton";

const pillars = [
  { icon: ClipboardList, text: "18 perguntas organizadas por trimestre" },
  { icon: Languages, text: "Linguagem simples, sem jargão médico" },
  { icon: FlaskConical, text: "Baseado em evidências e comentado por especialista" },
  { icon: Printer, text: "Versão para imprimir e levar na pasta do pré-natal" },
  { icon: Smartphone, text: "Versão mobile para abrir na sala de espera" },
];

const topics = [
  { icon: BookOpenCheck, title: "Plano de parto", text: "Como montar um plano que a sua equipe realmente respeite." },
  { icon: HeartPulse, title: "Sinais de alerta", text: "Quando ir para a maternidade na hora — e quando não se desesperar." },
  { icon: Baby, title: "Desenvolvimento do bebê", text: "O que acompanhar em cada fase do crescimento." },
  { icon: FlaskConical, title: "Exames", text: "Quais exames importam, quando fazer e o que os resultados dizem." },
  { icon: Apple, title: "Nutrição", text: "Suplementos, ganho de peso e segurança alimentar na gestação." },
  { icon: Building2, title: "Maternidade", text: "Rotinas, políticas de acompanhante e perguntas sobre internação." },
  { icon: Stethoscope, title: "Trabalho de parto", text: "Intervenções, posições e consentimento informado." },
  { icon: Pill, title: "Medicamentos", text: "O que é seguro, o que não é e para quem ligar na dúvida." },
  { icon: Droplets, title: "Amamentação", text: "Apoio na primeira hora dourada e nos dias seguintes." },
];

const benefits = [
  "Entrar em cada consulta com confiança tranquila.",
  "Nunca mais esquecer uma pergunta importante.",
  "Entender o que está acontecendo no seu corpo.",
  "Participar das decisões médicas sobre o seu parto.",
  "Sentir-se mais calma entre uma consulta e outra.",
  "Chegar à maternidade sabendo exatamente o que perguntar.",
];

export function SolutionInside() {
  return (
    <>
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-brand-soft p-4 shadow-lift sm:p-8">
              <img
                src={capaLivro.url}
                alt="Capa do guia 18 perguntas para fazer ao obstetra, de Dra. Mariana Betioli"
                width={1129}
                height={1412}
                loading="lazy"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-brand-accent">
              <Sparkles className="size-3.5" aria-hidden="true" /> A solução
            </span>
            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-[2.6rem]">
              O guia que diz exatamente o que perguntar.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Sem teoria. Sem enciclopédia de 300 páginas sobre gravidez. Só as 18 perguntas que
              mudam a forma como o seu pré-natal acontece — escritas para você abrir no celular e
              perguntar em voz alta.
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
              O que tem dentro do guia
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-secondary-foreground sm:text-lg">
              Nove temas. Dezoito perguntas. Todas escritas para serem feitas em menos de um minuto.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-3">
            {topics.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 0.06}>
                <article className="glass-card h-full rounded-3xl p-4 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                  <span className="inline-flex size-10 items-center justify-center rounded-2xl bg-brand-gradient text-brand-foreground sm:size-12">
                    <t.icon className="size-5 sm:size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold sm:mt-5 sm:text-lg">{t.title}</h3>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-muted-foreground sm:mt-2 sm:text-sm">
                    {t.text}
                  </p>
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
              O que muda de verdade para você
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
