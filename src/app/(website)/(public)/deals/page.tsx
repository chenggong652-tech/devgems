import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/config/site";

export const metadata = constructMetadata({
  title: "Student Deals & Free Credits",
  description: "Free AI coding tools for students, free credits for new users, and discount codes",
  canonicalUrl: `${siteConfig.url}/deals`,
});

const deals = [
  {
    tool: "GitHub Copilot",
    type: "Student Free",
    description: "Free for verified students, teachers, and maintainers",
    link: "https://education.github.com/",
  },
  {
    tool: "Cursor",
    type: "Student Free",
    description: "Pro tier free for students with verified academic email",
    link: "https://cursor.sh/education",
  },
  {
    tool: "OpenAI API",
    type: "Free Credits",
    description: "$5 free credit for new API users",
    link: "https://platform.openai.com/",
  },
  {
    tool: "Anthropic API",
    type: "Free Credits",
    description: "$5 free credit for new API users",
    link: "https://console.anthropic.com/",
  },
  {
    tool: "v0 by Vercel",
    type: "Free Tier",
    description: "Unlimited free generations for non-commercial use",
    link: "https://v0.dev/",
  },
  {
    tool: "Bolt.new",
    type: "Free Tier",
    description: "Free for hobby projects, 3 projects per month",
    link: "https://bolt.new/",
  },
  {
    tool: "Windsurf",
    type: "Student Free",
    description: "Pro tier free for students and educators",
    link: "https://codeium.com/",
  },
  {
    tool: "Replit",
    type: "Student Free",
    description: "Replit Pro free for verified students",
    link: "https://replit.com/students",
  },
  {
    tool: "GitHub Student Pack",
    type: "Student Free",
    description: "Free access to 100+ developer tools and enterprise plans for students",
    link: "https://education.github.com/pack",
  },
  {
    tool: "JetBrains",
    type: "Student Free",
    description: "All JetBrains IDEs (IntelliJ, PyCharm) free for students",
    link: "https://www.jetbrains.com/student/",
  },
  {
    tool: "Datacamp",
    type: "Student Free",
    description: "Free 3-month DataCamp Premium for verified students",
    link: "https://www.datacamp.com/donorschoose",
  },
  {
    tool: "Microsoft Azure",
    type: "Free Credits",
    description: "$100 free Azure credit for students + free developer tools",
    link: "https://azure.microsoft.com/en-us/free/students/",
  },
  {
    tool: "Namecheap",
    type: "Student Free",
    description: "Free .me domain for 1 year for students",
    link: "https://www.namecheap.com/promotions/for-students/",
  },
];

export default function DealsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4 text-center">🎓 Student Deals & Free Credits</h1>
      <p className="text-lg text-muted-foreground text-center mb-12">
        Free AI coding tools for students, free credits for new users, and student discounts
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deals.map((deal) => (
          <a
            key={deal.tool}
            href={deal.link}
            target="_blank"
            rel="noopener noreferrer"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl border bg-card hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-semibold">{deal.tool}</h3>
              <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium">
                {deal.type}
              </span>
            </div>
            <p className="text-muted-foreground">{deal.description}</p>
          </a>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-12">
        We update this page regularly. If you know a student discount or free credit we missed, contact us!
      </p>
    </div>
  );
}
