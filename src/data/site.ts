import type { NavItem } from "@/types";
import { services } from "@/data/services";
import { coreSkills, toolGroups } from "@/data/skills";

/**
 * Central site settings. Edit the values below; nothing else needs to change.
 * Empty strings ("") mean "not provided yet" and the related UI is hidden automatically.
 */
export const site = {
  name: "Emmanuel Augustine",
  brand: "Emmanuel's Portfolio",
  role: "AI Video Automation Specialist",
  roles: ["AI Video Automation Specialist", "AI Content Creator", "Video Editing Specialist"],
  tagline:
    "I create AI-powered videos and automate social media content workflows to help businesses, creators and brands produce and publish content more efficiently.",
  description:
    "Emmanuel Augustine is an AI video automation specialist, AI content creator and video editor. He creates AI-powered videos and builds workflows that prepare, schedule and publish social media content.",
  keywords: [
    "AI video creation",
    "AI video editing",
    "social media automation",
    "video automation",
    "n8n workflows",
    "AI content creator",
  ],
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_US",
  years: 6,

  /** Turn the blog on later by setting this to true and adding posts in posts.ts. */
  features: {
    blog: false,
  },

  contact: {
    email: "",
    phone: "",
    whatsapp: "", // digits only with country code, e.g. 2348012345678
    whatsappMessage: "Hello Emmanuel, I found your website and would like to talk about a project.",
    location: "",
    availability: "",
  },

  /** Add full profile URLs. Empty ones are hidden everywhere. */
  socials: {
    GitHub: "",
    LinkedIn: "",
    Fiverr: "",
    Upwork: "",
    Instagram: "",
    YouTube: "",
    TikTok: "",
    X: "",
  } as Record<string, string>,

  /** Paths inside /public. Leave empty to show the built-in placeholder. */
  images: {
    portrait: "/images/emma.jpg", // e.g. "/images/portrait.jpg"
    portraitAlt: "Portrait of Emmanuel Augustine",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Gigs", href: "/gigs" },
    { label: "Blog", href: "/blog", requires: "blog" },
    { label: "Contact", href: "/contact" },
  ] satisfies NavItem[],

  hero: {
    headline: "I make AI videos, then build the system that publishes them.",
    primaryCta: { label: "See what I offer", href: "/services" },
    secondaryCta: { label: "Start a project", href: "/contact" },
    pipeline: ["Idea", "Script", "Generate", "Edit", "Publish"],
  },

  marquee: [
    "Claude Code",
    "Sora",
    "HeyGen",
    "n8n",
    "CapCut",
    "Prompt engineering",
    "AI video generation",
    "Social media automation",
  ],

  about: {
    heading: "A creative who builds systems, and a builder who cares how it looks.",
    paragraphs: [
      "I'm Emmanuel Augustine, an AI video automation specialist and creative technology professional. I've spent six years working in video editing, digital content production and the tools that sit around them. These days my focus is AI: generating video, editing it, and connecting the steps so content gets made and published without the usual manual grind.",
      "My background is a BSc in Computer Science, which shapes how I work. I tend to look at content production as a process with inputs, steps and outputs, then ask which parts need a human eye and which can safely be handed to a tool. The result is video that still feels considered, produced with less repetition.",
      "Most businesses and creators don't need more tools. They need a content routine that holds up week after week. I help with both halves of that: the videos themselves, and the workflow that moves ideas through scripting, editing and publishing.",
      "I try to be direct about what's realistic. Platform rules and account access decide what can be automated, so I'll tell you early what is possible, what needs a manual step, and what I'd leave alone.",
    ],
    principles: [
      {
        title: "Workflow first",
        description:
          "A great video that takes ten manual steps to publish won't get made every week. I design the whole route, not only the final clip.",
      },
      {
        title: "Honest about limits",
        description:
          "AI tools and social platforms change quickly. I explain what works today and where a person still needs to be involved.",
      },
      {
        title: "Plain language",
        description:
          "You shouldn't need to understand the tools to benefit from them. I explain what I'm building and why, without the jargon.",
      },
    ],
  },

  cta: {
    heading: "Have content you'd like to make faster, or publish more consistently?",
    body: "Tell me what you're working on and where the time goes. I'll reply with an honest view of what can be improved.",
    label: "Start a conversation",
    href: "/contact",
  },

  stats: [
    { value: 6, suffix: "+", label: "Years in video and digital content" },
    { value: services.length, suffix: "", label: "Core services" },
    { value: coreSkills.length, suffix: "", label: "Skill areas" },
    {
      value: toolGroups[0]?.items.length ?? 0,
      suffix: "",
      label: "Core AI and automation tools",
    },
  ],

  privacyUpdated: "2026",
};

export function getSocialLinks(): { label: string; href: string }[] {
  return Object.entries(site.socials)
    .filter(([, href]) => href.trim().length > 0)
    .map(([label, href]) => ({ label, href }));
}

export function getNav(): NavItem[] {
  return site.nav.filter((item) => item.requires !== "blog" || site.features.blog);
}

export function whatsappHref(): string {
  const number = site.contact.whatsapp.replace(/\D/g, "");
  if (!number) return "";
  return `https://wa.me/${number}?text=${encodeURIComponent(site.contact.whatsappMessage)}`;
}

export function mailHref(): string {
  return site.contact.email ? `mailto:${site.contact.email}` : "";
}
