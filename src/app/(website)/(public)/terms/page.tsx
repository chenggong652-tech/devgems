import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description: "DevGems terms of service",
  canonicalUrl: `${siteConfig.url}/terms`,
});

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="prose dark:prose-invert">
        <p className="text-muted-foreground mb-4">Last updated: October 28, 2026</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Use of Our Website</h2>
        <p className="text-muted-foreground mb-4">
          DevGems provides a curated directory of AI development tools. You may use our website for personal, non-commercial purposes only.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Accuracy of Information</h2>
        <p className="text-muted-foreground mb-4">
          We strive to keep all tool information up to date, but we do not guarantee that all prices, features, and details are 100% accurate. Please verify all information on the official tool website before making a purchase.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. External Links</h2>
        <p className="text-muted-foreground mb-4">
          Our website links to third-party websites. We are not responsible for the content, privacy policies, or practices of these external sites.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Changes to Terms</h2>
        <p className="text-muted-foreground mb-4">
          We reserve the right to update these terms at any time. Your continued use of the website after changes are posted constitutes acceptance of the new terms.
        </p>
      </div>
    </div>
  );
}
