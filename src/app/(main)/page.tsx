import { ModulesRenderer } from "@/components/modules";
import { fetchSanityPageBySlug } from "@/sanity/lib/fetch";
import { generatePageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { sleep } from "@/lib/utils";

export async function generateMetadata() {
  const page = await fetchSanityPageBySlug({ slug: "index" });
  return generatePageMetadata({ page, slug: "index" });
}

export default async function IndexPage() {
  const page = await fetchSanityPageBySlug({ slug: "index" });
  if (!page) notFound();

  return <ModulesRenderer modules={page.modules ?? []} />;
}
