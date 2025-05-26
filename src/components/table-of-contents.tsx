import { ResolvedHeading } from "@/features/portable-text/headings";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { isArray, isEmpty } from "radash";
import { useId } from "react";

type NestedLinks = (
  | { text: string; id: string }
  | { text: string; id: string }[]
)[];

export function TableOfContents(props: {
  headings: ResolvedHeading[];
  className?: string;
}) {
  const id = useId();
  if (isEmpty(props.headings)) return null;

  const links: NestedLinks = [];

  props.headings.forEach((heading) => {
    if (heading.style === "h2") {
      links.push({ text: heading.text, id: heading.id });
      return;
    }

    const lastItem = links[links.length - 1];

    if (!isArray(lastItem)) {
      links.push([{ text: heading.text, id: heading.id }]);
      return;
    }

    if (isArray(lastItem)) {
      lastItem.push({ text: heading.text, id: heading.id });
    }
  });

  return (
    <nav className={props.className} aria-labelledby={id}>
      <h2 id={id} className="mb-4 text-2xl font-semibold">
        På denne siden
      </h2>

      <RecursiveLinks links={links} />
    </nav>
  );
}

function RecursiveLinks(props: { links: NestedLinks; isSubList?: boolean }) {
  return (
    <ol
      className={cn({
        "text-lg": !props.isSubList,
        "pl-6 text-base": props.isSubList,
      })}
    >
      {props.links.map((item) => {
        if (!isArray(item))
          return (
            <li
              key={item.id}
              className={cn({
                "mt-3 first:mt-0": !props.isSubList,
                "text-muted-foreground mt-1": props.isSubList,
              })}
            >
              <Link
                href={`#${item.id}`}
                className="group flex items-center gap-2 hover:underline"
                title={item.text}
              >
                {!props.isSubList && (
                  <ChevronRight
                    size="1rem"
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                )}
                {item.text}
              </Link>
            </li>
          );

        const listKey = item
          .reduce((acc: string[], current) => [...acc, current.id], [])
          .join("-");

        return <RecursiveLinks isSubList key={listKey} links={item} />;
      })}
    </ol>
  );
}
