"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Focus management + keyboard trap for the mobile menu overlay.
  useEffect(() => {
    if (!menuOpen) return;

    const menuEl = menuRef.current;
    const firstFocusable = menuEl?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuEl) return;

      const focusable = Array.from(menuEl.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR));
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const triggerButton = menuButtonRef.current;
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      triggerButton?.focus();
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "transition-all duration-500",
          scrolled ? "glass border-b border-white/[0.08] py-3" : "border-b border-transparent py-6"
        )}
      >
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-16">
          <Link href="#top">
            <Logo />
          </Link>

          <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" size="sm">
              {SITE.calendlyLabel}
            </Button>
          </div>

          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(true)}
            aria-label="Menu openen"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex size-11 items-center justify-center rounded-full border border-white/10 text-foreground md:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigatiemenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-background/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <Logo />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Menu sluiten"
                className="flex size-11 items-center justify-center rounded-full border border-white/10"
              >
                <X className="size-5" />
              </button>
            </div>

            <nav aria-label="Mobiele navigatie" className="flex flex-1 flex-col justify-center gap-2 px-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block border-b border-white/[0.06] py-4 font-display text-3xl font-medium tracking-tight"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="px-8 pb-10">
              <Button href="#contact" size="lg" className="w-full" onClick={() => setMenuOpen(false)}>
                {SITE.calendlyLabel}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
