import { SearchResults } from "@/features/search";

export default async function Page(props: {
  searchParams: Promise<{ q: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams.q;

  return (
    <div className="container py-12">
      <h1 className="mb-10 text-4xl font-semibold">
        Søkeresultater for <q>{query}</q>
      </h1>

      <SearchResults maxResults={10} types={["article"]} />
    </div>
  );
}
