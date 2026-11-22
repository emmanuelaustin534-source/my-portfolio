import { processHeading, processSteps } from "@/data/process";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Process() {
  return (
    <section className="py-20 sm:py-28" aria-labelledby="process-heading">
      <Container>
        <Reveal>
          <div id="process-heading">
            <SectionHeading
              title={processHeading}
              description="A simple four-step route from first message to a finished result. You always know what happens next."
            />
          </div>
        </Reveal>
        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="relative h-full overflow-hidden rounded-3xl border border-line bg-card p-7">
                  <span
                    className="font-display text-6xl font-semibold text-brand-500/30"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">
                    <span className="sr-only">{`Step ${index + 1}: `}</span>
                    {step.title}
                  </h3>
                  <p className="mt-3 text-mute">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
