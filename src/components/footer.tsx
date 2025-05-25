import CookieBannerTrigger from "@/features/cookie-banner/trigger";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container">
        <div className="py-12">
          <Link className="text-2xl font-medium" href="/">
            {siteConfig.name}
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-8 py-8 md:flex-row md:items-center">
          <div className="flex flex-wrap gap-3">
            <ThemeToggle />
            <CookieBannerTrigger />
          </div>

          <div className="text-muted-foreground border-t pt-8 text-right md:border-t-0 md:pt-0">
            Laget av{" "}
            <Link
              href="https://netlife.com"
              className="underline hover:no-underline"
            >
              Netlife
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
