import "@/styles/globals.css";

import {
  fontBricolageGrotesque as fontBricolage,
  fontSourceSans,
  fontSourceSerif,
  fontWorkSans,
} from "@/assets/fonts";
import { auth } from "@/auth";
import { Analytics } from "@/components/analytics/analytics";
import CookieConsent from "@/components/layout/cookie-consent";
import BackToTop from "@/components/layout/back-to-top";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { constructMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

export const metadata = constructMetadata();

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  // https://youtu.be/1MTyCvS05V4?t=21464
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* RSS auto-discovery */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="DevGems Blog"
          href="https://devgems.io/rss.xml"
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YSGTWDZXGE"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-YSGTWDZXGE');`,
          }}
        />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "DevGems",
              url: "https://devgems.io",
              description: "The best directory of AI-powered development tools for programmers",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://devgems.io/?search={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          fontBricolage.className,
          // fontSourceSans.className,
          // fontSourceSerif.className,
          // fontWorkSans.className,
          fontSourceSerif.variable,
          fontSourceSans.variable,
          fontWorkSans.variable,
          fontBricolage.variable,
        )}
      >
        <SessionProvider session={session}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}

            {/* https://sonner.emilkowal.ski/toaster */}
            <Toaster richColors position="top-right" offset={64} />

            <TailwindIndicator />

            <Analytics />
            <BackToTop />
            <CookieConsent />
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
