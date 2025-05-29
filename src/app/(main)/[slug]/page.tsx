import { ModulesRenderer } from "@/components/modules";
import { generatePageMetadata as generateDocumentMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { PageSearchParams } from "@/lib/types";
import { fetchSinglePage } from "@/sanity/queries/page";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const { data: page } = await fetchSinglePage({ slug: params.slug });
  if (!page) notFound();

  return generateDocumentMetadata(page);
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<PageSearchParams>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const { data: page } = await fetchSinglePage({ slug: params.slug });
  if (!page) notFound();

  console.log(searchParams);

  return (
    <ModulesRenderer modules={page.modules ?? []} searchParams={searchParams} />
  );
}
