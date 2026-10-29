import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "DevGems privacy policy",
  canonicalUrl: `${siteConfig.url}/privacy`,
});

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert">
        <p className="text-muted-foreground mb-4">Last updated: October 28, 2026</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-muted-foreground mb-4">
          We do not collect any personal information unless you voluntarily submit it via our newsletter subscription form. We may collect anonymous usage data such as page views and search queries to improve our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Cookies</h2>
        <p className="text-muted-foreground mb-4">
          We use cookies to analyze website traffic and remember your preferences. You can disable cookies in your browser settings at any time.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Affiliate Disclosure</h2>
        <p className="text-muted-foreground mb-4">
          Some links on our website are affiliate links. This means we may earn a commission if you purchase a product through our link, at no additional cost to you. This does not affect our reviews or recommendations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          If you have any questions about this Privacy Policy, please contact us at support@devgems.io.
        </p>
      </div>
    </div>
  );
}
