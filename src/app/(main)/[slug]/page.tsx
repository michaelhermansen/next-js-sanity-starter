import { ModulesRenderer } from "@/components/modules";
import { fetchSanityPageBySlug } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { PageSearchParams } from "@/lib/types";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const page = await fetchSanityPageBySlug({ slug: params.slug });
  if (!page) notFound();

  return generatePageMetadata({ page, slug: params.slug });
}

export default async function Page(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<PageSearchParams>;
}) {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const page = await fetchSanityPageBySlug({ slug: params.slug });
  if (!page) notFound();

  console.log(searchParams);

  return (
    <ModulesRenderer modules={page.modules ?? []} searchParams={searchParams} />
  );
}
