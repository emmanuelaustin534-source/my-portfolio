import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CTABand() {
  return (
    <section className="pb-24 pt-8 sm:pb-32" aria-labelledby="cta-heading">
      <Container>
        <Reveal>
          <div className="grain relative isolate overflow-hidden rounded-[2rem] border border-line bg-canvas-2 px-6 py-14 text-center sm:px-14 sm:py-20">
            <div className="mesh absolute inset-0 -z-10" aria-hidden="true" />
            <h2 id="cta-heading" className="mx-auto max-w-3xl text-balance text-3xl font-semibold sm:text-5xl">
              {site.cta.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-mute sm:text-lg">{site.cta.body}</p>
            <div className="mt-9">
              <ButtonLink href={site.cta.href} size="lg" magnetic>
                {site.cta.label}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
