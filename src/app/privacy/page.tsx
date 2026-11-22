import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";

export const metadata = buildMetadata({
  title: "Privacy",
  description: "How this website handles your information.",
  path: "/privacy",
});

const sections = [
  {
    title: "What this website collects",
    body: [
      "If you send a message through the contact form, the details you enter (your name, email address, the service you choose and your message) are sent to me so I can reply. They are delivered through Formspree, a third-party form service.",
      "This website does not use advertising trackers.",
    ],
  },
  {
    title: "What is stored in your browser",
    body: [
      "Your choice of dark or light mode is saved in your browser so the site remembers it. A short note that the intro animation has played is saved for the current browser session only. Neither is used to identify you.",
    ],
  },
  {
    title: "How your message is used",
    body: [
      "I use your message only to respond to your enquiry and to discuss the work you asked about. I do not sell your details or add you to a mailing list without asking.",
    ],
  },
  {
    title: "Third-party services",
    body: [
      "Formspree processes form submissions on my behalf, and the site is hosted on Vercel. Each has its own privacy policy that explains how it handles data.",
    ],
  },
  {
    title: "Your choices",
    body: [
      site.contact.email
        ? `You can ask me to delete a message you sent, or ask a question about your data, by emailing ${site.contact.email}.`
        : "You can ask me to delete a message you sent, or ask a question about your data, by using the contact form.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy"
        description={`How ${site.name}'s website handles your information. Last updated ${site.privacyUpdated}.`}
      />
      <article className="pb-24 pt-12 sm:pb-32 sm:pt-16">
        <Container className="max-w-3xl space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-4 text-mute">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </Container>
      </article>
    </>
  );
}
