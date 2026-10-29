import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DevGems</h3>
            <p className="text-sm text-muted-foreground">
              Curated directory of the best AI coding tools for developers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/category/ai-code-editors" className="hover:text-foreground">AI Code Editors</Link></li>
              <li><Link href="/category/ai-pair-programmers" className="hover:text-foreground">AI Pair Programmers</Link></li>
              <li><Link href="/category/llm-apis" className="hover:text-foreground">LLM APIs</Link></li>
              <li><Link href="/category/ai-app-builders" className="hover:text-foreground">AI App Builders</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/deals" className="hover:text-foreground">🎓 Student Deals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} DevGems. Curated for developers.</p>
          <p className="text-[10px] text-gray-400 mt-2 md:mt-0">
            *This site may earn affiliate commissions from qualifying purchases at no extra cost to you.
          </p>
        </div>
      </div>
    </footer>
  );
}
