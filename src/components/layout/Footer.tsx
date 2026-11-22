import Link from "next/link";
import { getNav, getSocialLinks, mailHref, site, whatsappHref } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const nav = getNav();
  const socials = getSocialLinks();
  const email = mailHref();
  const whatsapp = whatsappHref();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line pb-28 pt-16 md:pb-12">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label={`${site.brand} home`}>
              <Logo />
            </Link>
            <p className="mt-5 text-sm text-mute">{site.tagline}</p>
            {socials.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Social profiles">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-line px-4 py-1.5 text-sm text-mute transition-colors hover:border-brand-400 hover:text-ink"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <nav aria-label="Footer">
            <h2 className="font-display text-base font-semibold">Pages</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-mute">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy" className="hover:text-ink">
                  Privacy
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-base font-semibold">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-mute">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-ink">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            {email || whatsapp ? (
              <div className="mt-6 space-y-1.5 text-sm">
                {email ? (
                  <a href={email} className="block text-ink underline-offset-4 hover:underline">
                    {site.contact.email}
                  </a>
                ) : null}
                {whatsapp ? (
                  <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="block text-ink underline-offset-4 hover:underline">
                    Message on WhatsApp
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-line pt-6 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <p>{site.role}</p>
        </div>
      </Container>
    </footer>
  );
}
