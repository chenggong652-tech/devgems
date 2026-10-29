"use client";

import { urlForIcon } from "@/lib/image";
import { cn } from "@/lib/utils";
import type { ItemInfo } from "@/types";
import { HashIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Skeleton } from "../ui/skeleton";

type ItemCard2Props = {
  item: ItemInfo;
};

/**
 * ItemCard2 shows item icon
 */
export default function ItemCard2({ item }: { item: any }) {
  const iconProps = item?.icon ? urlForIcon(item.icon) : null;
  const iconBlurDataURL = item?.icon?.blurDataURL || null;
  // console.log(`ItemCard2, iconBlurDataURL:${iconBlurDataURL}`);
  const itemUrlPrefix = "/item";

  return (
    <div
      className={cn(
        "border rounded-2xl flex flex-col justify-between p-5 bg-card",
        "duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all",
        item.featured
          ? "border-purple-300 bg-purple-50/50 dark:bg-purple-950/10"
          : "hover:border-purple-200 dark:hover:border-purple-800",
      )}
    >
      {/* top */}
      <div className="flex flex-col gap-4">
        {/* icon + name */}
        <div className="flex w-full items-center gap-4">
          {item.icon?.asset?.url && (
            <img
              src={item.icon.asset.url}
              alt={item.name}
              width={40}
              height={40}
              className="object-cover rounded-md shrink-0"
            />
          )}

          <Link href={`${itemUrlPrefix}/${item.slug.current}`} className="min-w-0 flex-1">
            <h3
              className={cn(
                "text-xl font-medium truncate overflow-hidden text-ellipsis",
                item.featured && "text-gradient_indigo-purple font-semibold",
              )}
            >
              {item.name}
            </h3>
          </Link>
        </div>

        {/* categories */}
        <div className="flex flex-col gap-2">
          {item.categories && item.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 items-center">
              {item.categories.map((category, index) => (
                <a
                  key={category._id}
                  href={`/category/${category.slug.current}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "px-2 py-1 h-6 rounded-md",
                  )}
                >
                  <span className="text-sm text-muted-foreground">
                    {category.name}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* min-h-[4.5rem] is used for making sure height of the card is the same */}
        <Link
          href={`${itemUrlPrefix}/${item.slug.current}`}
          className="block cursor-pointer"
        >
          <p className="text-sm line-clamp-3 leading-relaxed min-h-[4.5rem]">
            {item.description}
          </p>
        </Link>
      </div>

      {/* bottom */}
      <div className="mt-4 flex justify-end items-center">
        {/* 根据pricingModel显示对应标签，加悬停提示 */}
        {item.pricingModel === "open-source" ? (
          <span title="100% free to use and self-hostable" className="mr-auto px-2 py-1 rounded-md bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium">
            💡 Open Source
          </span>
        ) : item.pricingModel === "paid" ? (
          <span title="Paid tool, no permanent free tier available" className="mr-auto px-2 py-1 rounded-md bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-medium">
            💳 Paid
          </span>
        ) : (
          <span title="Free tier available, paid upgrades for advanced features" className="mr-auto px-2 py-1 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium">
            🌱 Freemium
          </span>
        )}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            {item.tags.slice(0, 5).map((tag, index) => (
              <Link
                key={tag._id}
                href={`/tag/${tag.slug.current}`}
                className="flex items-center justify-center space-x-0.5 group"
              >
                <HashIcon className="w-3 h-3 text-muted-foreground icon-scale" />
                <span className="text-sm text-muted-foreground link-underline">
                  {tag.name}
                </span>
              </Link>
            ))}
            {item.tags.length > 5 && (
              <span className="text-sm text-muted-foreground px-1">
                +{item.tags.length - 5}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function ItemCard2Skeleton() {
  return (
    <div className="border rounded-lg flex flex-col justify-between p-6">
      {/* top */}
      <div className="flex flex-col gap-4">
        {/* icon + name */}
        <div className="flex w-full items-center gap-4">
          <Skeleton className="h-8 w-8 rounded-md" />
          <Skeleton className="h-7 w-48" />
        </div>

        {/* categories */}
        <div className="flex flex-wrap gap-2 items-center">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-6 w-16" />
        </div>

        {/* description */}
        <Skeleton className="h-[4.5rem] w-full" />
      </div>

      {/* bottom */}
      <div className="mt-4 flex justify-end items-center">
        <div className="flex flex-wrap gap-2 items-center">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-14" />
        </div>
      </div>
    </div>
  );
}
