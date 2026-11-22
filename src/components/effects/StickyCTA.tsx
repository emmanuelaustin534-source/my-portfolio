"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

/** Mobile-only bottom bar with a primary call to action. Hidden on the contact page. */
export function StickyCTA() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;
  return (
    <div className="glass fixed inset-x-0 bottom-0 z-40 border-t border-line px-5 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
      <Link
        href={site.cta.href}
        className="flex w-full items-center justify-center rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-12px_var(--brand)]"
      >
        {site.hero.secondaryCta.label}
      </Link>
    </div>
  );
}
