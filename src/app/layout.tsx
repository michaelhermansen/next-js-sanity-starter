import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { rootLayoutMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = rootLayoutMetadata;

const fontSans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.locales[0]} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body className={cn("bg-background min-h-screen", fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
        </ThemeProvider>
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
