"use client";

import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border text-center">
        <h3 className="text-2xl font-bold mb-3">🎉 Thanks for subscribing!</h3>
        <p className="text-muted-foreground">
          We'll send you the weekly AI coding tools roundup soon. No spam, ever.
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border text-center">
      <h3 className="text-2xl font-bold mb-3">🚀 Never Miss a New AI Coding Tool</h3>
      <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
        Join 1,000+ developers getting our weekly roundup: new AI tools, student free tiers, exclusive discounts, and side project deals. No spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-xl border bg-card focus:outline-none focus:ring-2 focus:ring-purple-500/50"
        />
        <button type="submit" disabled={loading} className="px-6 py-3 rounded-xl bg-purple-600 text-white font-medium hover:bg-purple-700 whitespace-nowrap disabled:opacity-50">
          {loading ? "Submitting..." : "Get My Free Weekly Roundup"}
        </button>
      </form>
    </div>
  );
}
