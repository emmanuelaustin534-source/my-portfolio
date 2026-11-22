import { site } from "@/data/site";
import { projects, projectSlots } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Stats } from "@/components/sections/Stats";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { FeaturedShowcase, type ShowcaseItem } from "@/components/sections/FeaturedShowcase";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = buildMetadata({
  title: site.role,
  description: site.description,
  path: "/",
});

function getShowcaseItems(): ShowcaseItem[] {
  if (projects.length === 0) {
    return projectSlots.map((slot) => ({
      title: slot.title,
      category: slot.category,
      summary: slot.note,
      icon: slot.icon,
    }));
  }
  const featured = projects.filter((project) => project.featured);
  const chosen = featured.length > 0 ? featured : projects.slice(0, 6);
  return chosen.map((project) => ({
    title: project.title,
    category: project.category,
    summary: project.summary,
    href: `/portfolio/${project.slug}`,
    image: project.image,
    icon: "video",
  }));
}

export default function HomePage() {
  const hasProjects = projects.length > 0;
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ServicesBento />
      <FeaturedShowcase
        items={getShowcaseItems()}
        title={hasProjects ? "Selected work" : "Work on the way"}
        description={
          hasProjects
            ? "A look at recent projects, from AI video to automated publishing."
            : "Case studies are being prepared. Here is the kind of work they will cover."
        }
      />
      <Process />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}
