import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  if (testimonials.length === 0) return null;
  const hasDemo = testimonials.some((item) => item.isDemo);

  return (
    <section className="py-20 sm:py-28" aria-labelledby="testimonials-heading">
      <Container>
        <Reveal>
          <div id="testimonials-heading">
            <SectionHeading
              title="What working together can feel like"
              description={
                hasDemo
                  ? "These are sample testimonials that show how this section will look. They are not real client feedback."
                  : "Feedback from people I have worked with."
              }
            />
          </div>
        </Reveal>
        <ul className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <li key={`${item.role}-${index}`}>
              <Reveal delay={index * 0.08} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-line bg-card p-7">
                  <div>
                    <div className="flex items-center justify-between">
                      <Quote className="h-8 w-8 text-brand-500" aria-hidden="true" />
                      {item.isDemo ? (
                        <span className="rounded-full border border-brand-400/50 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-accent">
                          Demo testimonial
                        </span>
                      ) : null}
                    </div>
                    <blockquote className="mt-5 text-lg leading-relaxed">{item.quote}</blockquote>
                  </div>
                  <figcaption className="mt-8 border-t border-line pt-5 text-sm">
                    <span className="block font-semibold">{item.name}</span>
                    <span className="text-mute">{item.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
