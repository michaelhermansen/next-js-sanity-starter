"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SearchField } from "@/features/search/search-field";
import { cn } from "@/lib/utils";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavMenu(props: {
  navItems: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost">
          Meny
          <AlignRight className="dark:text-white" />
        </Button>
      </SheetTrigger>

      <SheetContent className="px-6 sm:px-8">
        <div className="flex h-20 items-center justify-end">
          <SheetHeader className="sr-only">
            <SheetTitle>Hovedmeny</SheetTitle>
            <SheetDescription>Naviger på nettstedet</SheetDescription>
          </SheetHeader>

          <SheetClose asChild>
            <Button variant="ghost">
              Lukk
              <X className="dark:text-white" />
            </Button>
          </SheetClose>
        </div>

        <SearchField
          resultPathname="/sok"
          className="sm:hidden"
          onSearch={() => setOpen(false)}
        />

        <div className="py-6">
          <ul>
            {props.navItems.map((navItem) => (
              <NavItem
                key={navItem.href}
                label={navItem.label}
                href={navItem.href}
                onClick={() => setOpen(false)}
              />
            ))}
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}

function NavItem(props: { label: string; href: string; onClick: () => void }) {
  const pathname = usePathname();

  return (
    <li key={props.label}>
      <Link
        onClick={props.onClick}
        href={props.href}
        className={cn(
          "block py-3 text-2xl underline-offset-6 hover:underline sm:text-3xl",
          { underline: pathname.startsWith(props.href) },
        )}
      >
        {props.label}
      </Link>
    </li>
  );
}
