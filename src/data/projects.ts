import type { Project, ProjectSlot } from "@/types";

/**
 * Add your real projects here. Each project automatically gets a page at /portfolio/<slug>.
 * Only fill in what is true. Optional fields (results, links, tools, image) are hidden when empty.
 *
 * Example (copy, remove the comment markers and edit):
 * {
 *   slug: "my-first-project",
 *   title: "Project title",
 *   category: "AI Video",
 *   summary: "One or two sentences.",
 *   role: "What you did",
 *   tools: ["HeyGen", "CapCut"],
 *   problem: "What the client needed.",
 *   approach: "How you solved it.",
 *   outcome: "What happened.",
 *   image: "/images/projects/my-first-project.jpg",
 *   featured: true,
 * },
 */
export const projects: Project[] = [];

/** Category filter buttons on /portfolio. Only categories used by a project are shown once you add some. */
export const projectCategories: string[] = [
  "AI Video",
  "Video Editing",
  "Automation",
  "Social Media",
];

/** Shown only while the projects list above is empty, so the section still looks finished. */
export const projectSlots: ProjectSlot[] = [
  {
    title: "AI video creation",
    category: "AI Video",
    note: "Case study in preparation",
    icon: "video",
  },
  {
    title: "Content workflow automation",
    category: "Automation",
    note: "Case study in preparation",
    icon: "workflow",
  },
  {
    title: "Social media publishing system",
    category: "Social Media",
    note: "Case study in preparation",
    icon: "send",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
