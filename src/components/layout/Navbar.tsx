"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNav, site } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ButtonLink } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const items = getNav();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (wasOpen.current && !open) menuButtonRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled ? "glass border-line" : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <Link href="/" aria-label={`${site.brand} home`} className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {items.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active ? "text-ink" : "text-mute hover:text-ink",
                  )}
                >
                  {item.label}
                  {active ? (
                    <span className="absolute inset-x-4 -bottom-0.5 h-px bg-brand-400" aria-hidden="true" />
                  ) : null}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <span className="hidden sm:block">
              <ButtonLink href={site.cta.href} magnetic>
                Start a project
              </ButtonLink>
            </span>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card lg:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={close} items={items} pathname={pathname} />
    </>
  );
}
