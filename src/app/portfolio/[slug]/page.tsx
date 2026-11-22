import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Media } from "@/components/ui/Media";
import { PageHeader } from "@/components/sections/PageHeader";
import { CTABand } from "@/components/sections/CTABand";
import { ButtonLink } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.title,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const sections = [
    { title: "The challenge", body: project.problem },
    { title: "The approach", body: project.approach },
    { title: "The outcome", body: project.outcome },
  ].filter((section): section is { title: string; body: string } => Boolean(section.body));

  const facts = [
    { label: "Category", value: project.category },
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "My role", value: project.role },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value));

  return (
    <>
      <PageHeader title={project.title} description={project.summary} />
      <section className="pb-20 pt-12 sm:pb-28 sm:pt-16">
        <Container>
          <Media
            src={project.image}
            alt={project.imageAlt ?? project.title}
            icon="video"
            label={project.title}
            priority
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="aspect-[16/9] w-full rounded-[2rem] border border-line"
          />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.4fr_0.8fr] lg:gap-16">
            <div className="space-y-10">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                  <p className="mt-3 text-lg text-mute">{section.body}</p>
                </div>
              ))}

              {project.results && project.results.length > 0 ? (
                <dl className="grid gap-4 sm:grid-cols-2">
                  {project.results.map((result) => (
                    <div key={result.label} className="rounded-2xl border border-line bg-card p-5">
                      <dd className="font-display text-3xl font-semibold">{result.value}</dd>
                      <dt className="mt-1 text-sm text-mute">{result.label}</dt>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>

            <aside className="space-y-6">
              {facts.length > 0 ? (
                <dl className="space-y-4 rounded-3xl border border-line bg-card p-7">
                  {facts.map((fact) => (
                    <div key={fact.label}>
                      <dt className="text-sm text-mute">{fact.label}</dt>
                      <dd className="font-semibold">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {project.tools && project.tools.length > 0 ? (
                <div className="rounded-3xl border border-line bg-card p-7">
                  <h2 className="text-lg font-semibold">Tools used</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-full border border-line bg-canvas-2 px-3 py-1 text-sm"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.liveUrl || project.videoUrl ? (
                <div className="flex flex-col gap-3">
                  {project.liveUrl ? (
                    <ButtonLink href={project.liveUrl} variant="secondary">
                      View live project
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                  ) : null}
                  {project.videoUrl ? (
                    <ButtonLink href={project.videoUrl} variant="secondary">
                      Watch the video
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </ButtonLink>
                  ) : null}
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
