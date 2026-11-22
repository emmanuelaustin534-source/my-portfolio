import type { Skill, ToolGroup } from "@/types";

/**
 * Set to true to show progress bars on the skill cards.
 * If you turn it on, set an honest "level" (0 to 100) for each skill below.
 * A level of 0 hides the bar for that skill.
 */
export const showProgress = false;

export const coreSkills: Skill[] = [
  {
    name: "AI Video Creation",
    description: "Turning ideas into finished video with AI generation tools.",
    icon: "video",
    level: 0,
  },
  {
    name: "AI Video Editing",
    description: "Cutting, captioning and polishing footage with AI-assisted editors.",
    icon: "clapperboard",
    level: 0,
  },
  {
    name: "AI Content Automation",
    description: "Connecting tools so repetitive content tasks run themselves.",
    icon: "bot",
    level: 0,
  },
  {
    name: "Social Media Automation",
    description: "Preparing, scheduling and publishing content across platforms.",
    icon: "share",
    level: 0,
  },
  {
    name: "AI Video Generation Tools",
    description: "Choosing the right generator for the shot, the style and the budget.",
    icon: "film",
    level: 0,
  },
  {
    name: "Prompt Engineering",
    description: "Writing prompts that give consistent, usable results.",
    icon: "code",
    level: 0,
  },
  {
    name: "Content Workflow Development",
    description: "Designing the route from idea to published post.",
    icon: "workflow",
    level: 0,
  },
  {
    name: "Creative Content Production",
    description: "Shaping stories, pacing and visuals so content holds attention.",
    icon: "pen",
    level: 0,
  },
  {
    name: "AI-Powered Marketing Content",
    description: "Campaign videos and social content built with AI in the loop.",
    icon: "megaphone",
    level: 0,
  },
];

export const toolGroups: ToolGroup[] = [
  {
    title: "Core tools",
    description: "The tools I use most and describe with confidence.",
    items: [
      { name: "Claude Code", note: "Building and maintaining automation and scripts" },
      { name: "Sora", note: "AI video generation" },
      { name: "HeyGen", note: "AI presenter and avatar video" },
      { name: "n8n", note: "Workflow automation" },
      { name: "CapCut", note: "Video editing, captions and effects" },
    ],
  },
  {
    title: "Related tools",
    description: "Other tools in the same space. Edit or remove any of these to match your experience.",
    items: [
      { name: "Runway", note: "AI video generation and editing" },
      { name: "Kling", note: "AI video generation" },
      { name: "Creatomate", note: "Automated video rendering" },
      { name: "FFmpeg", note: "Command-line video processing" },
    ],
  },
];
