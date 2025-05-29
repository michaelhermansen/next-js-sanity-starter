import { TypographyH2 } from "@/components/typography";
import {
  SearchResults,
  SearchResultsSkeleton,
} from "@/features/search/search-results";

import { Suspense } from "react";

export default async function Page(props: {
  searchParams: Promise<{ q: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q;

  return (
    <div className="py-section container">
      <TypographyH2 className="mb-8" asChild>
        <h1>
          Søkeresultater for <q>{query}</q>
        </h1>
      </TypographyH2>

      <Suspense
        key={query}
        fallback={<SearchResultsSkeleton maxResults={10} />}
      >
        <SearchResults query={query} maxResults={10} types={["article"]} />
      </Suspense>
    </div>
  );
}
