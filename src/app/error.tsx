"use client";

import { Container } from "@/components/ui/Container";
import { buttonStyles } from "@/components/ui/Button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorProps) {
  return (
    <section className="flex min-h-[80vh] items-center pt-24">
      <Container className="text-center">
        <h1 className="text-3xl font-semibold sm:text-4xl">Something went wrong</h1>
        <p className="mx-auto mt-4 max-w-md text-mute">
          The page ran into a problem. Trying again usually fixes it.
        </p>
        <div className="mt-8">
          <button type="button" onClick={reset} className={buttonStyles("primary", "md")}>
            Try again
          </button>
        </div>
      </Container>
    </section>
  );
}
