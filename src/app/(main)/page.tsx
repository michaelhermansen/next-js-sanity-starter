import { ModulesRenderer } from "@/components/modules";
import { generatePageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { PageSearchParams } from "@/lib/types";
import { fetchSinglePage } from "@/sanity/queries/page";

export async function generateMetadata() {
  const { data: page } = await fetchSinglePage({ slug: "index" });
  return generatePageMetadata(page);
}

export default async function IndexPage(props: {
  searchParams: Promise<PageSearchParams>;
}) {
  const searchParams = await props.searchParams;
  const { data: page } = await fetchSinglePage({ slug: "index" });
  if (!page) notFound();

  return (
    <ModulesRenderer modules={page.modules ?? []} searchParams={searchParams} />
  );
}
