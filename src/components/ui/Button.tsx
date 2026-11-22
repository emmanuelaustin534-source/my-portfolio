import Link from "next/link";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

export function buttonStyles(variant: Variant = "primary", size: Size = "md", className?: string): string {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap",
    "transition-[background-color,border-color,box-shadow] duration-300 disabled:cursor-not-allowed disabled:opacity-60",
    size === "md" ? "px-6 py-3 text-sm" : "px-8 py-4 text-base",
    variant === "primary" &&
      "bg-brand-600 text-white shadow-[0_10px_40px_-12px_var(--brand)] hover:bg-brand-700 hover:shadow-[0_14px_50px_-10px_var(--brand)]",
    variant === "secondary" && "border border-line bg-card text-ink hover:border-brand-400",
    variant === "ghost" && "text-ink hover:bg-card",
    className,
  );
}

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  magnetic?: boolean;
}

export function ButtonLink({ href, children, variant, size, className, magnetic = false }: ButtonLinkProps) {
  const styles = buttonStyles(variant, size, className);
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);

  const link = isExternal ? (
    <a
      href={href}
      className={styles}
      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );

  return magnetic ? <Magnetic>{link}</Magnetic> : link;
}
