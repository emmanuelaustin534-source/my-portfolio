import type { Gig, GigSlot } from "@/types";

/**
 * Add your Fiverr, Upwork or other service listings here.
 * Use real links, prices and delivery times only.
 *
 * Example:
 * {
 *   title: "I will create an AI video for your brand",
 *   platform: "Fiverr",
 *   url: "https://www.fiverr.com/your-gig-link",
 *   description: "Short description.",
 *   price: "From $00",
 *   delivery: "3 days",
 *   features: ["Feature one", "Feature two"],
 * },
 */
export const gigs: Gig[] = [];

/** Shown only while the gigs list above is empty. */
export const gigSlots: GigSlot[] = [
  { platform: "Fiverr", note: "Service listings coming soon" },
  { platform: "Upwork", note: "Service listings coming soon" },
];
