import type { Metadata } from "next";
import { site, getSocialLinks } from "@/data/site";

interface PageMeta {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

export function absoluteUrl(path: string): string {
  return `${site.url}${path === "/" ? "" : path}`;
}

export function buildMetadata({ title, description, path, noIndex }: PageMeta): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = `${title} | ${site.name}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      url,
      title: fullTitle,
      description,
      siteName: site.brand,
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function personJsonLd(): Record<string, unknown> {
  const sameAs = getSocialLinks().map((link) => link.href);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url: site.url,
    ...(site.contact.email ? { email: site.contact.email } : {}),
    ...(sameAs.length > 0 ? { sameAs } : {}),
    knowsAbout: site.keywords,
  };
}
