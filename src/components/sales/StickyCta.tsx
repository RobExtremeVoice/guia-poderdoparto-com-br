import { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { CtaButton } from "./CtaButton";

/** Floating buy bar that appears after the hero and stays visible while scrolling. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0"
      }`}
    >
      <div className="glass-card mx-auto mb-3 flex max-w-3xl items-center gap-4 rounded-3xl px-4 py-3 sm:px-6">
        <div className="hidden min-w-0 flex-1 sm:block">
          <p className="truncate font-display text-lg font-semibold">18 Essential Questions</p>
          <p className="text-sm text-muted-foreground">
            <span className="line-through">R$97</span>{" "}
            <span className="font-bold text-brand-accent">R$27</span> · instant access
          </p>
        </div>
        <CtaButton
          size="md"
          className="max-w-none flex-1 sm:max-w-xs"
          label="Buy the guide now for R$27"
        >
          GET MY GUIDE — R$27
        </CtaButton>
        <Lock className="hidden size-5 shrink-0 text-success sm:block" aria-hidden="true" />
      </div>
    </div>
  );
}
