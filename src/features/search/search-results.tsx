import { DocumentType, getSearchResults } from "./get-search-results";
import { SearchResultItem } from "./search-result-item";
import { Skeleton } from "@/components/ui/skeleton";
import { range } from "radash";

export async function SearchResults(props: {
  query: string;
  maxResults: number;
  types?: DocumentType[];
}) {
  const data = await getSearchResults({
    query: props.query,
    maxResults: props.maxResults,
    types: props.types,
  });

  if (!data.length) return <p>Ingen resultater</p>;

  return (
    <ul className="max-w-3xl divide-y">
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

export function SearchResultsSkeleton(props: { maxResults: number }) {
  return (
    <div className="max-w-3xl divide-y">
      {[...range(1, props.maxResults)].map((i) => (
        <div key={i} className="group py-4" style={{ opacity: 1 }}>
          <Skeleton className="mb-3 h-6 w-40 group-nth-of-type-[2n]:min-w-64 group-nth-of-type-[3n]:w-28" />
          <Skeleton className="mb-1 h-5 w-full" />
          <Skeleton className="h-5 w-2/3" />
        </div>
      ))}
    </div>
  );
}
