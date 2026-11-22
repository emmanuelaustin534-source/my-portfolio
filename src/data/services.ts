import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "ai-video-creation",
    title: "AI Video Creation",
    icon: "video",
    short:
      "Engaging AI-generated videos for brands, campaigns and social media, built with modern video generation tools.",
    description:
      "I create videos with AI generation tools such as Sora and HeyGen, guided by careful prompting and a clear idea of what the video needs to do. That might be a product explainer, a campaign visual, a presenter-style clip or short-form content for social channels. The goal is video that looks intentional rather than obviously machine-made.",
    bestFor: [
      "Brands that need visual content without a full production crew",
      "Creators who want more videos without more filming days",
      "Marketers testing campaign ideas quickly",
    ],
    typicalScope: [
      "Concept and prompt development",
      "Generating and selecting the strongest clips",
      "Light editing so the clips work together",
      "Formats for the platforms you post on",
    ],
    honestNote:
      "AI video tools have limits on length, consistency and realism. I'll tell you what a tool does well before we commit to an approach.",
  },
  {
    slug: "ai-video-editing",
    title: "AI Video Editing",
    icon: "clapperboard",
    short:
      "Edit, enhance and polish footage with AI-assisted tools, captions, transitions, effects and clear storytelling.",
    description:
      "Good editing is mostly about decisions: what stays, what goes and where the viewer's attention should be. I combine tools like CapCut and other AI-assisted editors with traditional editing judgement to cut footage into clear, watchable videos. Captions, pacing, transitions and visual effects are added where they help the story, not for decoration.",
    bestFor: [
      "Creators with raw footage that needs shaping",
      "Businesses repurposing long videos into short clips",
      "Teams that want a consistent look across all their videos",
    ],
    typicalScope: [
      "Cutting, pacing and structure",
      "Captions and on-screen text",
      "Transitions, effects and colour polish",
      "Exports for each platform you publish on",
    ],
  },
  {
    slug: "ai-video-content-automation",
    title: "AI Video Content Automation",
    icon: "workflow",
    short:
      "Automated workflows that streamline video creation, content preparation and other repetitive production tasks.",
    description:
      "If your video process involves the same manual steps every time, those steps can often be automated. I use tools like n8n to connect the parts of your production routine, so that preparation, file handling and editing-related tasks need less hands-on time. You keep creative control; the repetitive parts get quieter.",
    bestFor: [
      "Teams that publish video on a regular schedule",
      "Creators who lose hours to repetitive preparation",
      "Businesses with a content process that depends on one person's memory",
    ],
    typicalScope: [
      "Mapping your current process step by step",
      "Choosing which steps to automate and which to keep manual",
      "Building and testing the workflow",
      "A walkthrough so you understand how it runs",
    ],
    honestNote:
      "What can be automated depends on the tools and accounts you use. Some steps are better left to a person.",
  },
  {
    slug: "social-media-video-automation",
    title: "Social Media Video Automation",
    icon: "share",
    short:
      "Workflows that prepare, schedule and publish video across supported platforms like TikTok, Instagram and YouTube.",
    description:
      "Posting video across several platforms means different formats, captions and schedules. I build workflows that handle much of that preparation and scheduling, so a finished video can move toward publishing with fewer manual steps. Platforms such as TikTok, Instagram and YouTube are supported where their rules and access allow.",
    bestFor: [
      "Brands posting the same content on multiple platforms",
      "Creators who want a steadier posting rhythm",
      "Small teams without a dedicated social media manager",
    ],
    typicalScope: [
      "Platform-by-platform format preparation",
      "Caption and metadata handling",
      "Scheduling and publishing steps where platforms allow",
      "Testing with your real accounts",
    ],
    honestNote:
      "Each platform decides what third-party tools may do. I'll check what's supported for your accounts before building anything.",
  },
  {
    slug: "ai-content-creation-workflows",
    title: "AI Content Creation Workflows",
    icon: "sparkles",
    short:
      "AI-powered workflows that generate content ideas, scripts, video concepts and other production material.",
    description:
      "Running out of ideas, or spending hours on first drafts, slows everything that comes after. I build workflows that use AI to generate topic ideas, scripts, video concepts and supporting material, shaped by your brand voice and goals. A person still reviews and approves; the workflow simply gets you to a strong starting point faster.",
    bestFor: [
      "Creators who need a steady supply of ideas",
      "Marketing teams producing scripts and concepts at volume",
      "Anyone who wants a repeatable way to start content",
    ],
    typicalScope: [
      "Prompt design around your brand and audience",
      "Idea, script and concept generation steps",
      "A review stage so nothing goes out unchecked",
      "Hand-off into your editing or publishing process",
    ],
  },
  {
    slug: "automated-social-media-publishing",
    title: "Automated Social Media Publishing",
    icon: "send",
    short:
      "Systems that help businesses and creators publish more consistently with less manual work, depending on platform support.",
    description:
      "Consistency matters on social media, and it is hard to keep up when every post is a manual task. I set up publishing systems that take approved content and distribute it on a schedule, so your channels stay active even when you're busy. The setup depends on which platforms you use and the access they provide.",
    bestFor: [
      "Businesses that want a reliable posting schedule",
      "Creators who batch their content and want it released over time",
      "Teams reducing copy-and-paste publishing work",
    ],
    typicalScope: [
      "Reviewing your platforms and account access",
      "Setting up the publishing workflow",
      "Testing a full run before going live",
      "Notes on how to pause, edit or extend it",
    ],
    honestNote:
      "Publishing automation depends on platform support and account permissions. Some channels may still need a manual step.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
