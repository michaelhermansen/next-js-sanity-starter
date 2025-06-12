import "@/app/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/features/theme/theme-provider";
import { rootLayoutMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const metadata = rootLayoutMetadata;

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const fontSerif = localFont({
  variable: "--font-newsreader",
  src: [
    {
      path: "../assets/Newsreader-Variable.ttf",
      style: "normal",
    },
    {
      path: "../assets/Newsreader-Italic-Variable.ttf",
      style: "italic",
    },
  ],
  adjustFontFallback: "Times New Roman",
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang={siteConfig.locales[0]} suppressHydrationWarning>
      <link rel="icon" href="/favicon.ico" />
      <body className={cn(fontSans.variable, fontSerif.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {props.children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
