import Link from "next/link";
import { NavItem } from "./types";

export default function DesktopNav(props: { navItems: NavItem[] }) {
  return (
    <div className="text-primary hidden items-center gap-7 xl:flex">
      {props.navItems.map((navItem) => (
        <Link
          key={navItem.label}
          href={navItem.href}
          className="hover:underline"
        >
          {navItem.label}
        </Link>
      ))}
    </div>
  );
}
