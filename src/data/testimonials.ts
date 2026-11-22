import type { Testimonial } from "@/types";

/**
 * DEMO CONTENT. These are sample testimonials that show how the section looks.
 * They are not real client feedback. Replace them with genuine testimonials and set isDemo to false.
 * The "Sample testimonials" label disappears automatically once every item has isDemo: false.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our video process used to depend on a dozen small manual steps. Now it runs as a routine and we spend our time on the creative side.",
    name: "Sample Client",
    role: "Brand founder (demo)",
    isDemo: true,
  },
  {
    quote:
      "The videos looked polished and on-brand, and the explanations were clear even though I'm not technical.",
    name: "Sample Client",
    role: "Marketing lead (demo)",
    isDemo: true,
  },
  {
    quote:
      "I wanted to post more consistently without living in my scheduling apps. The workflow made that realistic.",
    name: "Sample Client",
    role: "Content creator (demo)",
    isDemo: true,
  },
];
