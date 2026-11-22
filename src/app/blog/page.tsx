import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";

export function generateMetadata(): Metadata {
  return buildMetadata({
    title: "Blog",
    description: "Notes on AI video, automation and content workflows.",
    path: "/blog",
    noIndex: !site.features.blog,
  });
}

export default function BlogPage() {
  if (!site.features.blog) notFound();
  return (
    <>
      <PageHeader title="Blog" description="Notes on AI video, automation and content workflows." />
      <section className="pb-24 pt-12 sm:pt-16">
        <Container>
          {posts.length === 0 ? (
            <p className="text-mute">No posts yet. Check back soon.</p>
          ) : (
            <ul className="grid gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full rounded-3xl border border-line bg-card p-7 transition-colors hover:border-brand-400/70"
                  >
                    <p className="text-sm text-mute">{post.date}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{post.title}</h2>
                    <p className="mt-3 text-mute">{post.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
