import { Mail, MessageCircle } from "lucide-react";
import { getSocialLinks, mailHref, site, whatsappHref } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { PageHeader } from "@/components/sections/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import type { IconName } from "@/types";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Tell Emmanuel Augustine about your AI video, editing or content automation project.",
  path: "/contact",
});

export default function ContactPage() {
  const email = mailHref();
  const whatsapp = whatsappHref();
  const socials = getSocialLinks();

  const allDetails: { icon: IconName; label: string; value: string; href?: string }[] = [
    { icon: "mail", label: "Email", value: site.contact.email, href: email },
    {
      icon: "phone",
      label: "Phone",
      value: site.contact.phone,
      href: site.contact.phone ? `tel:${site.contact.phone.replace(/\s/g, "")}` : "",
    },
    { icon: "pin", label: "Location", value: site.contact.location },
    { icon: "clock", label: "Availability", value: site.contact.availability },
  ];
  const details = allDetails.filter((item) => item.value.trim().length > 0);

  return (
    <>
      <PageHeader
        title="Let's talk about your content"
        description="Tell me what you are making, where you publish and what takes the most time. I will reply with an honest view of how I can help."
      >
        {email || whatsapp ? (
          <div className="flex flex-wrap gap-3">
            {email ? (
              <ButtonLink href={email} variant="secondary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email me
              </ButtonLink>
            ) : null}
            {whatsapp ? (
              <ButtonLink href={whatsapp} variant="secondary">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </ButtonLink>
            ) : null}
          </div>
        ) : null}
      </PageHeader>

      <section className="pb-26 pt-14 sm:pb-32 sm:pt-20">
        <Container className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
          <ContactForm />

          <aside className="space-y-6">
            {details.length > 0 ? (
              <ul className="space-y-4 rounded-3xl border border-line bg-card p-7">
                {details.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-accent">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm text-mute">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-semibold underline-offset-4 hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="rounded-3xl border border-line bg-card p-7">
              <h2 className="text-lg font-semibold">What happens next</h2>
              <p className="mt-2 text-sm text-mute">
                I read every message myself. You will get a reply with questions, ideas or a
                suggested next step. Nothing is agreed or charged until we have talked it through.
              </p>
            </div>

            {socials.length > 0 ? (
              <div className="rounded-3xl border border-line bg-card p-7">
                <h2 className="text-lg font-semibold">Find me elsewhere</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
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
              </div>
            ) : null}
          </aside>
        </Container>
      </section>
    </>
  );
}
