import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/sections/PageHeader";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { Process } from "@/components/sections/Process";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "AI video creation, AI video editing, content automation, social media video automation, AI content workflows and automated publishing.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services for people who make a lot of video"
        description="From a single AI-generated clip to a full workflow that prepares and publishes your content. Pick one service or combine them."
      />
      <ServicesBento showHeading={false} />
      <Process />
      <FAQ />
      <CTABand />
    </>
  );
}
