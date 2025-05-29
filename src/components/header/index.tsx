import { NavMenu } from "@/components/header/nav-menu";
import { SearchField } from "@/features/search/search-field";
import { siteConfig } from "@/lib/site-config";
import Link from "next/link";

const navItems = [
  {
    label: "Artikler",
    href: "/artikler",
  },
  {
    label: "Kontakt oss",
    href: "/kontakt-oss",
  },
];

export function Header() {
  return (
    <header className="bg-background border-b">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Hjem" className="text-xl font-medium">
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-3">
          <SearchField resultPathname="/sok" className="hidden sm:block" />
          <NavMenu navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
