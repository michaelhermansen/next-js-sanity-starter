import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { config } from "@/lib/config";
import { size } from "./api/og/route";
import { QueryProvider } from "@/features/tanstack-query/client";

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    template: `%s | ${config.siteName}`,
    default: `Sanity Next.js Website | ${config.siteName}`,
  },
  openGraph: {
    title: config.siteName,
    images: [
      {
        url: `/api/og`,
        width: size.width,
        height: size.height,
      },
    ],
    locale: "nb_NO",
    type: "website",
  },
  robots: !isProduction ? "noindex, nofollow" : "index, follow",
};

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang={config.locales[0]} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body
        className={cn(
          "bg-background min-h-screen font-sans underline-offset-2 antialiased",
          fontSans.variable,
        )}
      >
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {props.children}
          </ThemeProvider>
        </QueryProvider>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
