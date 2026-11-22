"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/sections/ProjectCard";
import type { Project } from "@/types";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const categories = useMemo(() => ["All", ...Array.from(new Set(projects.map((project) => project.category)))], [projects]);
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <div>
      {categories.length > 2 ? (
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors",
                active === category
                  ? "border-brand-500 bg-brand-600 text-white"
                  : "border-line bg-card text-mute hover:border-brand-400 hover:text-ink",
              )}
            >
              {category}
            </button>
          ))}
        </div>
      ) : null}
      <ul className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", categories.length > 2 && "mt-10")}>
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
