import { site } from "@/data/site";
import { education, experience, experienceIntro } from "@/data/experience";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageHeader } from "@/components/sections/PageHeader";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = buildMetadata({
  title: "About",
  description: `${site.name} is an AI video automation specialist with ${site.years} years of experience in video editing, content production and creative technology.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader title={site.about.heading} />

      <section className="pb-20 pt-12 sm:pb-28 sm:pt-16" aria-label="Biography">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <Media
              src={site.images.portrait}
              alt={site.images.portraitAlt}
              icon="video"
              label={site.images.portraitAlt}
              sizes="(min-width: 1024px) 34vw, 90vw"
              className="aspect-[4/5] w-full rounded-[2rem] border border-line lg:sticky lg:top-28"
            />
          </Reveal>
          <div className="space-y-6 text-lg text-mute">
            {site.about.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <p className={index === 0 ? "text-xl text-ink" : undefined}>{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="principles-heading">
        <Container>
          <Reveal>
            <div id="principles-heading">
              <SectionHeading title="How I work" />
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {site.about.principles.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={index * 0.08} className="h-full">
                  <div className="h-full rounded-3xl border border-line bg-card p-7">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-mute">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="pb-20 sm:pb-28" aria-labelledby="experience-heading">
        <Container>
          <Reveal>
            <div id="experience-heading">
              <SectionHeading
                title={`${site.years} years of experience`}
                description={experienceIntro}
              />
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {experience.map((item, index) => (
              <li key={item.title}>
                <Reveal delay={(index % 3) * 0.06} className="h-full">
                  <div className="h-full rounded-3xl border border-line bg-card p-7">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-accent">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-mute">{item.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
            <li className="sm:col-span-2 lg:col-span-1">
              <Reveal delay={0.1} className="h-full">
                <div className="h-full rounded-3xl border border-brand-400/40 bg-brand-500/10 p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/20 text-accent">
                    <Icon name="graduation" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold">Education</h3>
                  <p className="mt-2 text-sm">{education.degree}</p>
                  <p className="mt-2 text-sm text-mute">{education.note}</p>
                </div>
              </Reveal>
            </li>
          </ul>
        </Container>
      </section>

      <SkillsSection />
      <CTABand />
    </>
  );
}
