import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { type ComponentProps } from "react";

export function Breadcrumbs({ children, ...props }: ComponentProps<"nav">) {
  return (
    <nav aria-label="Brødsmuler" {...props}>
      <ol className="flex flex-wrap items-center gap-1 break-words sm:gap-2">
        {children}
      </ol>
    </nav>
  );
}

export function BreadcrumbsHomeLink() {
  return (
    <li>
      <Link href="/" className="underline hover:no-underline">
        Forside
      </Link>
    </li>
  );
}

export function BreadcrumbsSeparator(props: ComponentProps<"li">) {
  return (
    <li role="presentation" aria-hidden="true" {...props}>
      <ChevronRight size="1em" />
    </li>
  );
}

export function BreadcrumbsLink(props: { href: string; children: string }) {
  return (
    <li>
      <Link className="underline hover:no-underline" {...props} />
    </li>
  );
}

export function BreadcrumbsCurrentPage({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("font-semibold", className)}
      {...props}
    />
  );
}
