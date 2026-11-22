import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <header className="grain relative isolate overflow-hidden pb-14 pt-32 sm:pb-20 sm:pt-40">
      <div className="mesh absolute inset-0 -z-10" aria-hidden="true" />
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden="true" />
      <Container>
        <SectionHeading as="h1" title={title} description={description} />
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </header>
  );
}
