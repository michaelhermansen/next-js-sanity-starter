"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { AlignRight } from "lucide-react";
import { config } from "@/lib/config";
import { NavItem } from "./types";

export default function MobileNav(props: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button aria-label="Open Menu" variant="ghost" size="icon">
          <AlignRight className="dark:text-white" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="mx-auto font-semibold">{config.siteName}</div>
          <div className="sr-only">
            <SheetTitle>Main Navigation</SheetTitle>
            <SheetDescription>Navigate to the website pages</SheetDescription>
          </div>
        </SheetHeader>
        <div className="pt-10 pb-20">
          <div className="container">
            <ul className="list-none space-y-3 text-center">
              <>
                {props.navItems.map((navItem) => (
                  <li key={navItem.label}>
                    <Link
                      onClick={() => setOpen(false)}
                      href={navItem.href}
                      className="hover:text-decoration-none text-lg hover:opacity-50"
                    >
                      {navItem.label}
                    </Link>
                  </li>
                ))}
              </>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
