import { site } from "@/data/site";

export function Marquee() {
  const items = site.marquee;
  return (
    <section aria-label="Tools and capabilities" className="border-y border-line py-6">
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
              {items.map((item) => (
                <li key={`${copy}-${item}`} className="flex items-center">
                  <span className="px-8 font-display text-xl font-medium text-mute sm:text-2xl">{item}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-brand-500" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
