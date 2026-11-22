import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import type { IconName } from "@/types";

interface MediaProps {
  src?: string;
  alt: string;
  icon?: IconName;
  label?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  imageClassName?: string;
  className?: string;
}

/** Shows a real image when a path is provided, otherwise an elegant built-in placeholder. */
export function Media({
  src,
  alt,
  icon = "video",
  label,
  sizes,
  priority,
  quality,
  imageClassName,
  className,
}: MediaProps) {
  return (
    <div className={cn("relative isolate overflow-hidden bg-canvas-2", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? "(min-width: 1024px) 40vw, 100vw"}
          priority={priority}
          quality={quality ?? 75}
          className={cn("object-cover", imageClassName)}
        />
      ) : (
        <Placeholder icon={icon} label={label} />
      )}
    </div>
  );
}

function Placeholder({ icon, label }: { icon: IconName; label?: string }) {
  return (
    <div className="absolute inset-0" role="img" aria-label={label ?? "Image placeholder"}>
      <div className="absolute inset-0 bg-[linear-gradient(145deg,var(--brand-900),var(--canvas-2)_60%,var(--canvas))]" />
      <div className="mesh absolute inset-0 opacity-70" />
      <svg
        className="absolute inset-x-0 bottom-0 h-1/3 w-full text-brand-400"
        viewBox="0 0 400 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <rect x="16" y="14" width="120" height="14" rx="4" opacity="0.35" />
          <rect x="144" y="14" width="76" height="14" rx="4" opacity="0.2" />
          <rect x="228" y="14" width="150" height="14" rx="4" opacity="0.3" />
          <rect x="16" y="38" width="64" height="14" rx="4" opacity="0.2" />
          <rect x="88" y="38" width="160" height="14" rx="4" opacity="0.35" />
          <rect x="256" y="38" width="92" height="14" rx="4" opacity="0.2" />
          <rect x="16" y="62" width="180" height="14" rx="4" opacity="0.25" />
          <rect x="204" y="62" width="100" height="14" rx="4" opacity="0.35" />
        </g>
        <rect x="170" y="4" width="2" height="92" fill="white" opacity="0.5" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_0_60px_var(--brand)] backdrop-blur">
          <Icon name={icon} className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
}
