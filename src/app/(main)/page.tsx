import { PageBlocksRenderer } from "@/features/page-builder/page-blocks-renderer";
import { generatePageMetadata } from "@/lib/metadata";
import { PageSearchParams } from "@/lib/types";
import { fetchSinglePage } from "@/sanity/queries/page";
import { notFound } from "next/navigation";

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
    <PageBlocksRenderer
      pageBlocks={page.pageBlocks || []}
      searchParams={searchParams}
    />
  );
}
