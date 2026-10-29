"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // 看用户之前有没有点过同意
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          We use cookies to analyze website traffic and improve your experience. By continuing to use our site, you agree to our use of cookies.
        </p>
        <button
          onClick={accept}
          className="px-6 py-2 rounded-full bg-purple-600 text-white text-sm font-medium whitespace-nowrap hover:bg-purple-700"
        >
          Got it!
        </button>
      </div>
    </div>
  );
}
