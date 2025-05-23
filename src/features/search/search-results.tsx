"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useRef } from "react";
import { DocumentType, getSearchResults } from "./get-search-results";

export function SearchResults(props: {
  maxResults: number;
  types?: DocumentType[];
}) {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data, isPending, isError } = useQuery({
    queryKey: ["getSearchResults", query, props.maxResults],
    queryFn: async () => {
      return getSearchResults({
        query,
        maxResults: props.maxResults,
        types: props.types,
      });
    },
  });

  if (isPending) return <p>Laster ...</p>;
  if (isError) return <p>Noe gikk galt</p>;
  if (!data.length) return <p>Ingen resultater</p>;

  return (
    <ul className="max-w-4xl divide-y">
      {data.map((result) => {
        const href = `${result._type === "article" ? "/artikler/" : "/"}${result.slug?.current}`;

        return (
          <SearchResultItem
            key={result._id}
            href={href}
            title={result.title || ""}
            excerpt={result.excerpt || undefined}
          />
        );
      })}
    </ul>
  );
}

function SearchResultItem(props: {
  href: string;
  title: string;
  excerpt?: string;
}) {
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  return (
    <li
      className="group cursor-pointer space-y-1 py-4"
      onClick={() => linkRef.current?.click()}
    >
      <Link
        href={props.href}
        className="flex items-center gap-2 text-xl font-medium group-hover:underline"
        ref={linkRef}
      >
        {props.title}
      </Link>
      {props.excerpt && (
        <p className="text-muted-foreground line-clamp-1">{props.excerpt}</p>
      )}
    </li>
  );
}
