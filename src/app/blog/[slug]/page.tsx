import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/sections/PageHeader";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  if (!site.features.blog) return [];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post || !site.features.blog) return {};
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!site.features.blog || !post) notFound();

  return (
    <>
      <PageHeader title={post.title} description={post.date} />
      <article className="pb-24 pt-12 sm:pt-16">
        <Container className="max-w-3xl space-y-6 text-lg text-mute">
          {post.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Container>
      </article>
    </>
  );
}
