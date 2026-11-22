import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain relative isolate flex min-h-[80vh] items-center overflow-hidden pt-24">
      <div className="mesh absolute inset-0 -z-10" aria-hidden="true" />
      <Container className="text-center">
        <p className="font-display text-8xl font-semibold text-accent glow-text sm:text-9xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">This page could not be found</h1>
        <p className="mx-auto mt-4 max-w-md text-mute">
          The link may be old or mistyped. Head back to the home page or see what I offer.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" magnetic>
            Back to home
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            View services
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
