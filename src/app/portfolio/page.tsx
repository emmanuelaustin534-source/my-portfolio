import { projects, projectSlots } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/sections/PageHeader";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Selected AI video, video editing and content automation projects by Emmanuel Augustine.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  const hasProjects = projects.length > 0;
  return (
    <>
      <PageHeader
        title="Portfolio"
        description={
          hasProjects
            ? "Projects across AI video, editing and content automation."
            : "Case studies are being prepared. This is the kind of work they will cover."
        }
      />
      <section className="pb-24 pt-12 sm:pb-28 sm:pt-18">
        <Container>
          {hasProjects ? (
            <ProjectGrid projects={projects} />
          ) : (
            <>
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projectSlots.map((slot) => (
                  <li key={slot.title} className="rounded-3xl border border-line bg-card p-3">
                    <Media
                      alt={slot.title}
                      icon={slot.icon}
                      label={slot.title}
                      className="aspect-[4/3] w-full rounded-2xl"
                    />
                    <div className="px-3 pb-3 pt-5">
                      <p className="text-sm text-accent">{slot.category}</p>
                      <h2 className="mt-1 text-xl font-semibold">{slot.title}</h2>
                      <p className="mt-2 text-mute">{slot.note}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-12 flex flex-col items-start gap-5 rounded-3xl border border-line bg-card p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
                <div>
                  <h2 className="text-2xl font-semibold">Want to see something specific?</h2>
                  <p className="mt-2 max-w-xl text-mute">
                    Tell me what you are planning and I will explain how I would approach it.
                  </p>
                </div>
                <ButtonLink href="/contact" magnetic>
                  Get in touch
                </ButtonLink>
              </div>
            </>
          )}
        </Container>
      </section>
      <CTABand />
    </>
  );
}
