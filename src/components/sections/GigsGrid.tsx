import { ArrowUpRight, Check } from "lucide-react";
import { gigs, gigSlots } from "@/data/gigs";
import { Media } from "@/components/ui/Media";
import { ButtonLink } from "@/components/ui/Button";

export function GigsGrid() {
  if (gigs.length === 0) {
    return (
      <div>
        <ul className="grid gap-6 md:grid-cols-2">
          {gigSlots.map((slot) => (
            <li key={slot.platform} className="relative overflow-hidden rounded-3xl border border-line bg-card p-8 sm:p-10">
              <div className="mesh absolute inset-0 opacity-60" aria-hidden="true" />
              <div className="relative">
                <h2 className="text-3xl font-semibold">{slot.platform}</h2>
                <p className="mt-3 text-mute">{slot.note}</p>
                <span className="mt-8 inline-flex rounded-full border border-line bg-canvas-2 px-4 py-1.5 text-sm text-mute">
                  Coming soon
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12 rounded-3xl border border-line bg-card p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold sm:text-3xl">Need something before the listings go live?</h2>
          <p className="mx-auto mt-3 max-w-xl text-mute">
            You can message me directly. Tell me what you need and I will reply with how I can help and what it would involve.
          </p>
          <div className="mt-7">
            <ButtonLink href="/contact" magnetic>
              Contact me
            </ButtonLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {gigs.map((gig) => (
        <li key={gig.url} className="flex">
          <article className="flex w-full flex-col overflow-hidden rounded-3xl border border-line bg-card">
            <Media
              src={gig.image}
              alt={gig.title}
              icon="film"
              label={gig.title}
              sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
              className="aspect-[16/10] w-full"
            />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm text-accent">{gig.platform}</p>
              <h2 className="mt-1 text-xl font-semibold">{gig.title}</h2>
              <p className="mt-3 text-mute">{gig.description}</p>
              {gig.features && gig.features.length > 0 ? (
                <ul className="mt-5 space-y-2 text-sm">
                  {gig.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-auto flex items-center justify-between gap-3 pt-7">
                <p className="text-sm text-mute">
                  {[gig.price, gig.delivery].filter(Boolean).join(" · ")}
                </p>
                <a
                  href={gig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
                >
                  View on {gig.platform}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
