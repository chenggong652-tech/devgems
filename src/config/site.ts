import type { SiteConfig } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "DevGems",
  tagline:
    "Curated AI Coding Tools & Gems for Developers",
  description:
    "DevGems is a curated directory of the best AI coding tools, LLMs, prompts, and developer utilities. Find, compare, and bookmark the gems that boost your programming workflow.",
  keywords: [
    "AI coding tools",
    "AI developer tools",
    "LLM directory",
    "AI prompts",
    "Next.js",
    "Cursor",
    "v0",
    "AI code assistant",
    "developer tools",
    "programming gems",
  ],
  author: "DevGems",
  url: SITE_URL,
  logo: "/logo.png",
  // set the logoDark if you have put the logo-dark.png in the public folder
  // logoDark: "/logo-dark.png",
  // please increase the version number when you update the image
  image: `${SITE_URL}/og.png?v=1`,
  mail: "chenggong652@gmail.com",
  utm: {
    source: "devgems.io",
    medium: "referral",
    campaign: "navigation",
  },
  links: {
    // leave it blank if you don't want to show the link (don't delete)
    twitter: "",
    github: "",
    youtube: "",
  },
};
