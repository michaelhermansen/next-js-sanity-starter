import { DocumentType, getSearchResults } from "./get-search-results";
import { SearchResultItem } from "./search-result-item";

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
