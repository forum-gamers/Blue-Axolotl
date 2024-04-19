import Loading from "@/components/atoms/loaders/pageLoader";
import type { ChildrenProps } from "@/interfaces";
import { soraSans } from "@/lib/font";
import { Suspense } from "react";
import TopLoader from "nextjs-toploader";
import AppThemeProvider from "@/providers/appTheme.provider";
import { VercelAnalytics } from "@/providers/vercelAnalytics.providers";
import { VercelSpeedInsight } from "@/providers/vercelSpeedInsight.provider";
import "@/styles/globals.css";

export default function MainLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning suppressContentEditableWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>Forum Gamers</title>
      </head>
      <body className={soraSans.className}>
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
      </body>
    </html>
  );
}
