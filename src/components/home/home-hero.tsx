import { Icons } from "@/components/icons/icons";
import { buttonVariants } from "@/components/ui/button";
import { heroConfig } from "@/config/hero";
import { cn } from "@/lib/utils";
import Link from "next/link";
import HomeSearchBox from "./home-search-box";

export default function HomeHero() {
  const LabelIcon = Icons[heroConfig.label.icon];
  return (
    <div 
      className="flex flex-col items-center justify-center py-16 sm:py-24"
      style={{
        backgroundImage: `
          linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    >
      <div className="max-w-5xl flex flex-col items-center text-center gap-8">
        <Link
          href={heroConfig.label.href}
          target="_blank"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "px-4 rounded-full",
          )}
        >
          <span className="mr-2">🎉</span>
          <span>{heroConfig.label.text}</span>
          <LabelIcon className="size-4" />
        </Link>

        {/* maybe font-sourceSans is better */}
        <h1 className="max-w-5xl font-bold text-balance text-3xl sm:text-4xl md:text-5xl">
          {heroConfig.title.first}{" "}
          <span className="text-gradient_indigo-purple font-bold">
            {heroConfig.title.second}
          </span>
        </h1>

        <p className="max-w-4xl text-balance text-muted-foreground sm:text-xl">
          {heroConfig.subtitle}
        </p>

        {/* 统计数字 */}
        <p className="text-base text-muted-foreground">
          <span className="font-semibold text-primary">200+</span> Handpicked AI Coding Tools ·{" "}
          <span className="font-semibold text-primary">200+</span> Curated Tools ·{" "}
          <span className="font-semibold text-primary">4</span> Categories ·{" "}
          <span className="font-semibold text-primary">13</span> Student Deals ·{" "}
          <span className="font-semibold text-primary">Free & Open Source Options</span>
        </p>

        <div className="w-full">
          <HomeSearchBox urlPrefix="/" />
        </div>
      </div>
    </div>
  );
}
