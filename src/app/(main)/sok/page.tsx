import { SearchField, SearchResults, SearchText } from "@/features/search";

export default function Page() {
  return (
    <div className="container py-12">
      <h1 className="mb-10 text-4xl font-semibold">
        Søkeresultater for{" "}
        <q>
          <SearchText />
        </q>
      </h1>

      <SearchResults maxResults={10} types={["article"]} />
    </div>
  );
}
