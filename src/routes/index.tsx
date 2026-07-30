import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sales/sections/Hero";
import { ProblemAgitate } from "@/components/sales/sections/ProblemAgitate";
import { SolutionInside } from "@/components/sales/sections/SolutionInside";
import { AuthorityTestimonials } from "@/components/sales/sections/AuthorityTestimonials";
import { Offer } from "@/components/sales/sections/Offer";
import { FaqFinal } from "@/components/sales/sections/FaqFinal";
import { StickyCta } from "@/components/sales/StickyCta";
import { FAQS, PRODUCT_NAME } from "@/components/sales/data";

const TITLE = "18 Questions Every Pregnant Woman Must Ask Her Obstetrician";
const DESCRIPTION =
  "A practical guide with the 18 essential questions to ask at every prenatal appointment. Feel prepared, confident and informed. Instant digital access for R$27.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: PRODUCT_NAME,
          description: DESCRIPTION,
          brand: { "@type": "Brand", name: "18 Perguntas" },
          offers: {
            "@type": "Offer",
            price: "27.00",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "3712",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: SalesPage,
});

function SalesPage() {
  return (
    <>
      <main className="pb-24">
        <Hero />
        <ProblemAgitate />
        <SolutionInside />
        <AuthorityTestimonials />
        <Offer />
        <FaqFinal />
      </main>
      <StickyCta />
    </>
  );
}
