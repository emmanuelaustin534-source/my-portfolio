import { site } from "@/data/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

/** Logo slot. Replace the SVG below, or edit public/images/logo-*.svg for other uses. */
export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <defs>
          <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--brand-400)" />
            <stop offset="1" stopColor="var(--brand-700)" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#logo-grad)" />
        <path d="M13 11h15v4.5H18v3h8.5v4.5H18v3h10V30H13z" fill="#fff" />
      </svg>
      {showText ? (
        <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
          {site.name}
        </span>
      ) : null}
      <span className="sr-only">{showText ? "" : site.name}</span>
    </span>
  );
}
