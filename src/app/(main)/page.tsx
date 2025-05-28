import { ModulesRenderer } from "@/components/modules";
import { generatePageMetadata } from "@/lib/metadata";
import { fetchSanityPageBySlug } from "@/sanity/lib/fetch";
import { notFound } from "next/navigation";
import { PageSearchParams } from "@/lib/types";

export async function generateMetadata() {
  const page = await fetchSanityPageBySlug({ slug: "index" });
  return generatePageMetadata({ page, slug: "index" });
}

export default async function IndexPage(props: {
  searchParams: Promise<PageSearchParams>;
}) {
  const searchParams = await props.searchParams;
  const page = await fetchSanityPageBySlug({ slug: "index" });
  if (!page) notFound();

  return (
    <ModulesRenderer modules={page.modules ?? []} searchParams={searchParams} />
  );
}
