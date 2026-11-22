import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["/", "/about", "/services", "/portfolio", "/gigs", "/contact", "/privacy"];
  if (site.features.blog) staticPaths.push("/blog");

  const entries: MetadataRoute.Sitemap = staticPaths.map((path): MetadataRoute.Sitemap[number] => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  services.forEach((service) =>
    entries.push({ url: absoluteUrl(`/services/${service.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.8 }),
  );
  projects.forEach((project) =>
    entries.push({ url: absoluteUrl(`/portfolio/${project.slug}`), lastModified: now, changeFrequency: "monthly", priority: 0.6 }),
  );
  if (site.features.blog) {
    posts.forEach((post) =>
      entries.push({ url: absoluteUrl(`/blog/${post.slug}`), lastModified: new Date(post.date), changeFrequency: "yearly", priority: 0.5 }),
    );
  }
  return entries;
}
