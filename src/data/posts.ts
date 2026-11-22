import type { Post } from "@/types";

/**
 * Blog posts. The blog is switched off by default (site.features.blog = false in site.ts).
 * To use it: set the flag to true, then add posts below.
 */
export const posts: Post[] = [];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
