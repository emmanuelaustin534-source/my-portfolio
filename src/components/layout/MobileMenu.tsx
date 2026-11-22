"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { lenisStore } from "@/lib/lenis";
import { getSocialLinks, mailHref, site, whatsappHref } from "@/data/site";
import type { NavItem } from "@/types";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  pathname: string;
}

export function MobileMenu({ open, onClose, items, pathname }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion();
  const socials = getSocialLinks();
  const email = mailHref();
  const whatsapp = whatsappHref();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lenisStore.current?.stop();
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      lenisStore.current?.start();
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-canvas px-6 pb-10 pt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.3 }}
        >
          <div className="mesh pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
          <div className="flex items-center justify-between">
            <span className="font-display text-lg font-semibold">{site.name}</span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-10 flex flex-1 flex-col justify-center gap-1">
            {items.map((item, index) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <motion.div
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.08 + index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "block py-2 font-display text-4xl font-semibold tracking-tight sm:text-5xl",
                      active ? "text-accent" : "text-ink",
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </nav>

          <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 text-sm text-mute">
            {email || whatsapp ? (
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {email ? (
                  <a href={email} className="text-ink underline-offset-4 hover:underline">
                    {site.contact.email}
                  </a>
                ) : null}
                {whatsapp ? (
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="text-ink underline-offset-4 hover:underline">
                    WhatsApp
                  </a>
                ) : null}
              </div>
            ) : null}
            {socials.length > 0 ? (
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
                    {social.label}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
