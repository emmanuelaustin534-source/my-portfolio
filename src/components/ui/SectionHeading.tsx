import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, description, as = "h2", align = "left", className }: SectionHeadingProps) {
  const Tag = as;
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <Tag
        className={cn(
          "text-balance font-semibold",
          as === "h1" ? "text-4xl sm:text-5xl lg:text-6xl" : "text-3xl sm:text-4xl lg:text-5xl",
        )}
      >
        {title}
      </Tag>
      {description ? <p className="mt-5 text-pretty text-base text-mute sm:text-lg">{description}</p> : null}
    </div>
  );
}
