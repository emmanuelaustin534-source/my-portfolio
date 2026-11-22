import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import type { Project } from "@/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      className="group block rounded-3xl border border-line bg-card p-3 transition-colors hover:border-brand-400/70"
    >
      <Media
        src={project.image}
        alt={project.imageAlt ?? project.title}
        icon="video"
        label={project.title}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
        className="aspect-[4/3] w-full rounded-2xl"
      />
      <div className="px-3 pb-3 pt-5">
        <p className="text-sm text-accent">{project.category}</p>
        <h3 className="mt-1 flex items-start justify-between gap-3 text-xl font-semibold">
          {project.title}
          <ArrowUpRight
            className="mt-1 h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </h3>
        <p className="mt-2 text-mute">{project.summary}</p>
      </div>
    </Link>
  );
}
