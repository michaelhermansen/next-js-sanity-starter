"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItemProps } from "./types";

export function DesktopNav(props: { navItems: NavItemProps[] }) {
  return (
    <div className="text-primary hidden items-center gap-7 xl:flex">
      {props.navItems.map((navItem) => (
        <NavItem key={navItem.href} label={navItem.label} href={navItem.href} />
      ))}
    </div>
  );
}

function NavItem(props: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(props.href);

  return (
    <Link
      key={props.label}
      href={props.href}
      className={cn("py-2 whitespace-nowrap hover:underline", {
        underline: isActive,
      })}
    >
      {props.label}
    </Link>
  );
}
