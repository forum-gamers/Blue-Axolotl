import Loading from "@/components/atoms/loaders/pageLoader";
import type { ChildrenProps, Language } from "@/interfaces";
import { soraSans } from "@/lib/font";
import AppThemeProvider from "@/providers/appTheme.provider";
import { SessionProvider } from "@/providers/session.provider";
import { VercelAnalytics } from "@/providers/vercelAnalytics.providers";
import { VercelSpeedInsight } from "@/providers/vercelSpeedInsight.provider";
import "@/styles/globals.css";
import "aos/dist/aos.css";
import TopLoader from "nextjs-toploader";
import { Suspense } from "react";

export interface MainLayoutProps extends ChildrenProps {
  lang?: Language;
}

export default function MainLayout({ children, lang }: MainLayoutProps) {
  const language = (() => {
    switch (lang) {
      case "id-ID":
        return "id";
      case "en-US":
      default:
        return "en";
    }
  })();

  return (
    <html
      lang={language}
      suppressHydrationWarning
      suppressContentEditableWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Forum Gamers</title>
      </head>
      <body
        className={`${soraSans.className} bg-xl-blue dark:bg-d-xl-blue min-h-screen text-neutral-800 dark:text-neutral-300`}
      >
        <SessionProvider>
          <Suspense fallback={<Loading />}>
            <TopLoader
              color="#05b6d3"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={true}
              easing="ease"
              speed={200}
              shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
            />
            <AppThemeProvider>{children}</AppThemeProvider>
            <VercelAnalytics />
            <VercelSpeedInsight />
          </Suspense>
        </SessionProvider>
      </body>
    </html>
  );
}
