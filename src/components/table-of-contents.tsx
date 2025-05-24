import { ResolvedHeading } from "@/features/portable-text/headings";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { isEmpty } from "radash";
import { useId } from "react";

export default function TableOfContents(props: {
  headings: ResolvedHeading[];
  className?: string;
}) {
  const id = useId();
  if (isEmpty(props.headings)) return null;

  return (
    <nav className={props.className} aria-labelledby={id}>
      <h2 id={id} className="mb-4 text-xl font-semibold">
        På denne siden
      </h2>
      <ul>
        {props.headings.map((heading, i) => {
          return (
            <li
              key={`${heading.style}-${heading.text}`}
              className={cn("w-fit hover:underline", {
                "mt-4 mb-1 text-lg": heading.style === "h2",
                "text-muted-foreground ml-3 border-l pb-0.5 pl-7 text-lg":
                  heading.style === "h3",
              })}
            >
              <Link href={`#${heading.id}`}>
                {heading.style === "h2" && (
                  <span className="text-muted-foreground inline-block w-10">
                    {i < 9 ? "0" : ""}
                    {i + 1}.{" "}
                  </span>
                )}
                <span className="font-medium">{heading.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
