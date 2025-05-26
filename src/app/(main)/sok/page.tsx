import { SearchResults } from "@/features/search";
import { Suspense } from "react";

export default async function Page(props: {
  searchParams: Promise<{ q: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q;

  return (
    <div className="py-section container">
      <h1 className="mb-8 text-4xl font-semibold">
        Søkeresultater for <q>{query}</q>
      </h1>

      <Suspense key={query} fallback={<p>Søker ...</p>}>
        <SearchResults query={query} maxResults={10} types={["article"]} />
      </Suspense>
    </div>
  );
}
