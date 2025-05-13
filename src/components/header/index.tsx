import DesktopNav from "@/components/header/desktop-nav";
import MobileNav from "@/components/header/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { config } from "@/lib/config";
import Link from "next/link";

const navItems = [
  {
    label: "Home",
    href: "/",
    target: false,
  },
  {
    label: "Blog",
    href: "/blog",
    target: false,
  },
  {
    label: "About",
    href: "/about",
    target: false,
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 w-full border-border/40 bg-background/95 z-50">
      <div className="container flex items-center justify-between h-14">
        <Link href="/" aria-label="Hjem" className="font-semibold">
          {config.siteName}
        </Link>
        <div className="hidden xl:flex gap-7 items-center justify-between">
          <DesktopNav navItems={navItems} />
          <ThemeToggle />
        </div>
        <div className="flex items-center xl:hidden">
          <ThemeToggle />
          <MobileNav navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
