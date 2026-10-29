"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  // 输入的时候自动搜索，不用点按钮
  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);
      if (query) {
        params.set("q", query);
      } else {
        params.delete("q");
      }
      router.replace(`/?${params.toString()}#tools`);
    }, 300); // 输入完等300ms再搜索，不会卡
    return () => clearTimeout(timer);
  }, [query, router]);

  return (
    <div className="max-w-2xl mx-auto mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search 200+ AI tools... (e.g. cursor, v0, openai)"
        className="w-full px-6 py-4 rounded-2xl border bg-card shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-lg"
      />
      {/* 快速筛选按钮 */}
      <div className="flex flex-wrap gap-2 mt-4 justify-center">
        {[
          { label: "All", value: "" },
          { label: "Freemium", value: "freemium" },
          { label: "Open Source", value: "open-source" },
          { label: "Paid Only", value: "paid" },
        ].map((btn) => {
          const currentType = searchParams.get("f") || "";
          const isActive = currentType === btn.value;
          return (
            <button
              key={btn.value}
              onClick={() => {
                const params = new URLSearchParams(window.location.search);
                if (btn.value) params.set("f", btn.value);
                else params.delete("f");
                router.replace(`/?${params.toString()}#tools`);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-purple-600 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
