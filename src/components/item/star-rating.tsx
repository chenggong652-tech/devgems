"use client";

import { useState } from "react";

export default function StarRating({ toolSlug }: { toolSlug: string }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  // 存到本地，用户打过分就记住
  if (typeof window !== "undefined") {
    const savedRating = localStorage.getItem(`rating-${toolSlug}`);
    if (savedRating && rating === 0) setRating(Number(savedRating));
  }

  const handleClick = (value: number) => {
    setRating(value);
    localStorage.setItem(`rating-${toolSlug}`, String(value));
  };

  return (
    <div className="p-6 rounded-2xl border bg-card text-center">
      <h3 className="text-xl font-bold mb-2">⭐ Rate this tool</h3>
      <p className="text-sm text-muted-foreground mb-4">
        How would you rate this tool?
      </p>
      <div className="flex items-center justify-center gap-2">
        {[1,2,3,4,5].map((star) => (
          <button
            key={star}
            onClick={() => handleClick(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="text-3xl transition-transform hover:scale-110 bg-transparent border-0"
          >
            <span className={(hover || rating) >= star ? "text-yellow-400" : "text-gray-300"}>
              ★
            </span>
          </button>
        ))}
      </div>
      {rating > 0 && (
        <p className="text-sm text-muted-foreground mt-3">
          You rated this {rating} out of 5 stars! Thanks for your feedback.
        </p>
      )}
    </div>
  );
}
