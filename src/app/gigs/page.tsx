import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";
import { GigsGrid } from "@/components/sections/GigsGrid";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = buildMetadata({
  title: "Gigs",
  description: "Ready-to-order AI video and content automation services on freelance marketplaces.",
  path: "/gigs",
});

export default function GigsPage() {
  return (
    <>
      <PageHeader
        title="Gigs and service packages"
        description="Fixed-scope services you can order on freelance platforms. Prefer to talk first? You can always message me directly."
      />
      <section className="pb-26 pt-12 sm:pb-32 sm:pt-18">
        <Container>
          <GigsGrid />
        </Container>
      </section>
      <CTABand />
    </>
  );
}
