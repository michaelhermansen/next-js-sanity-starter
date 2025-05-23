import DesktopNav from "@/components/header/desktop-nav";
import MobileNav from "@/components/header/mobile-nav";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { config } from "@/lib/config";
import Link from "next/link";

const navItems = [
  {
    label: "Artikler",
    href: "/artikler",
  },
  {
    label: "Eksempelside",
    href: "/eksempelside",
  },
];

export default function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Hjem" className="font-semibold">
          {config.siteName}
        </Link>
        <div className="hidden items-center justify-between gap-7 xl:flex">
          <DesktopNav navItems={navItems} />
          <ThemeToggle />
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          <ThemeToggle />
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
