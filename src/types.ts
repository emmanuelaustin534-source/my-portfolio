export type IconName =
  | "video"
  | "clapperboard"
  | "workflow"
  | "share"
  | "sparkles"
  | "send"
  | "bot"
  | "film"
  | "layers"
  | "cpu"
  | "zap"
  | "mail"
  | "message"
  | "pin"
  | "clock"
  | "phone"
  | "graduation"
  | "pen"
  | "megaphone"
  | "code";

export interface NavItem {
  label: string;
  href: string;
  requires?: "blog";
}

export interface Service {
  slug: string;
  title: string;
  icon: IconName;
  short: string;
  description: string;
  bestFor: string[];
  typicalScope: string[];
  honestNote?: string;
}

export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  year?: string;
  client?: string;
  role?: string;
  tools?: string[];
  problem?: string;
  approach?: string;
  outcome?: string;
  results?: ProjectResult[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}

export interface ProjectSlot {
  title: string;
  category: string;
  note: string;
  icon: IconName;
}

export interface Gig {
  title: string;
  platform: "Fiverr" | "Upwork" | "Other";
  url: string;
  description: string;
  price?: string;
  delivery?: string;
  features?: string[];
  image?: string;
}

export interface GigSlot {
  platform: string;
  note: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  isDemo: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ExperienceItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface Skill {
  name: string;
  description: string;
  icon: IconName;
  /** 0 to 100. Only shown when showProgress is true in skills.ts. 0 hides the bar. */
  level: number;
}

export interface ToolItem {
  name: string;
  note: string;
}

export interface ToolGroup {
  title: string;
  description: string;
  items: ToolItem[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
  tags?: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}
