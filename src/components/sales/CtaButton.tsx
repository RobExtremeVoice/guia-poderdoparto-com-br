import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  children?: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
  label?: string;
};

export const CHECKOUT_URL = "#offer";

/** Primary conversion button, used on every CTA block. */
export function CtaButton({
  children = (
    <>
      <span className="block text-xs font-bold tracking-[0.22em] opacity-90">YES!</span>
      <span className="block">I WANT MY GUIDE NOW</span>
    </>
  ),
  className,
  size = "lg",
  label = "Get the guide now",
}: CtaButtonProps) {
  return (
    <a
      href={CHECKOUT_URL}
      aria-label={label}
      className={cn(
        "group inline-flex w-full max-w-md items-center justify-center gap-3 rounded-full bg-brand-gradient text-center font-bold uppercase leading-tight text-brand-foreground shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 active:translate-y-0",
        size === "lg" ? "min-h-16 px-8 py-4 text-base sm:text-lg" : "min-h-12 px-6 py-3 text-sm",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowRight className="size-5 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}
