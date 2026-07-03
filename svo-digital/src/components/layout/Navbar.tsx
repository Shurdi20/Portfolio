"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const links = [
  { label: "Diensten", href: "#services" },
  { label: "Werk", href: "#work" },
  { label: "Werkwijze", href: "#process" },
  { label: "Over ons", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-[100]"
      >
        <div
          className={cn(
            "container-site transition-all duration-500",
            scrolled ? "py-3" : "py-6"
          )}
        >
          <nav
            className={cn(
              "flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500",
              scrolled ? "glass shadow-[0_16px_50px_-20px_rgba(0,0,0,0.8)]" : ""
            )}
            aria-label="Hoofdnavigatie"
          >
            <a
              href="#top"
              className="font-display text-lg font-semibold tracking-tight"
            >
              SVO<span className="text-accent">.</span>Digital
            </a>

            <ul className="hidden items-center gap-1 lg:flex">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group relative rounded-full px-4 py-2 text-sm text-secondary transition-colors duration-300 hover:text-primary"
                  >
                    {link.label}
                    <span className="absolute inset-x-4 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="hidden lg:block">
              <Button href="#contact" size="md" withArrow>
                Plan een strategiegesprek
              </Button>
            </div>

            <button
              className="rounded-full border border-line p-2.5 text-primary transition-colors hover:border-white/25 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Menu sluiten" : "Menu openen"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[95] bg-background/95 backdrop-blur-xl lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav
              className="container-site flex h-full flex-col justify-center gap-2"
              aria-label="Mobiele navigatie"
            >
              {links.map((link, i) => (
                <div key={link.href} className="overflow-hidden">
                  <motion.a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-4xl font-semibold tracking-tight text-primary"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    exit={{ y: "110%" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {link.label}
                  </motion.a>
                </div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8"
              >
                <Button
                  href="#contact"
                  size="lg"
                  withArrow
                  magnetic={false}
                  onClick={() => setOpen(false)}
                >
                  Plan een gratis strategiegesprek
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
