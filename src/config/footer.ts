import type { FooterConfig } from "@/types";

export const footerConfig: FooterConfig = {
  links: [
    {
      title: "Product",
      items: [
        { title: "Search", href: "/search" },
        { title: "Collection", href: "/collection" },
        { title: "Category", href: "/category" },
        { title: "Tag", href: "/tag" },
      ],
    },
    {
      title: "Resources",
      items: [
        { title: "Blog", href: "/blog" },
        { title: "Student Deals", href: "/deals" },
      ],
    },
    {
      title: "Pages",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
        { title: "Sitemap", href: "/sitemap.xml" },
      ],
    },
  ],
};
