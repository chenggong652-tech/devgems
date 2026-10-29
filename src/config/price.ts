import { PricePlans } from "@/lib/submission";
import type { PriceConfig } from "@/types";

export const priceConfig: PriceConfig = {
  plans: [
    {
      title: PricePlans.FREE,
      description: "For Casual Visitors",
      benefits: [
        "View up to 10 tool details per day",
        "Browse all categories and tool listings",
        "Read all public blog posts",
        "Use full site search",
      ],
      limitations: [
        "Ads shown on all pages",
        "Cannot access deep comparison reports",
        "No weekly newsletter",
      ],
      price: 0,
      priceSuffix: "",
      stripePriceId: null,
    },
    {
      title: PricePlans.PRO,
      description: "For Professional Developers",
      benefits: [
        "Unlimited access to all 200+ tool details",
        "100% ad-free experience",
        "Downloadable comparison PDFs",
        "Weekly AI tool update newsletter",
        "24h early access to new tools",
        "Priority support",
      ],
      limitations: [],
      price: 4.99,
      priceSuffix: "/month",
      stripePriceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID,
    },
    {
      title: PricePlans.SPONSOR,
      description: "For Tool Makers",
      benefits: [
        "Everything included in Pro plan",
        "Featured placement on homepage for 1 month",
        "Fixed top spot in your category page",
        "1 dedicated review blog post",
        "Newsletter footer ad spot",
        "Only 1 sponsor slot per month",
      ],
      limitations: [],
      price: 199,
      priceSuffix: "/month",
      stripePriceId: process.env.NEXT_PUBLIC_STRIPE_SPONSOR_PRICE_ID,
    },
  ],
};
