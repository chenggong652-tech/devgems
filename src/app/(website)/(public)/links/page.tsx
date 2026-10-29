import { siteConfig } from "@/config/site";
import { constructMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata = constructMetadata({
  title: "Friends & Links",
  description: "We exchange friendly links with other high-quality AI developer tool websites.",
  canonicalUrl: `${siteConfig.url}/links`,
});

export default function LinksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-6">Friends & Links</h1>
      <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
        We love connecting with other high-quality websites in the AI developer space. If you run a website about AI coding tools, developer productivity, or indie hacking, feel free to reach out and we'll exchange friendly links with you.
      </p>

      <div className="bg-muted/30 rounded-xl p-8 border">
        <h2 className="text-2xl font-semibold mb-6">Our Friends</h2>
        <div className="text-center py-12 text-muted-foreground">
          No links added yet. We'll add our partner sites here once link exchanges are confirmed.
        </div>
      </div>

      <div className="mt-12 p-8 border rounded-xl bg-card">
        <h2 className="text-xl font-semibold mb-4">Link Exchange Requirements</h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span>Your website is related to AI development, coding tools, or indie hacking</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span>Your website has original, high-quality content (not a scraper or thin content site)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span>Your site is already live and indexed by Google</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 mt-1">✓</span>
            <span>We will add your link within 48 hours after you add ours</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
          ← Back to DevGems
        </Link>
      </div>
    </div>
  );
}
