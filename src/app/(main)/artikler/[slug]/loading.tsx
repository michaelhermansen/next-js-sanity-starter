import { PageBreadcrumbsSkeleton } from "@/components/page-breadcrumbs";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div>
      <PageBreadcrumbsSkeleton />

      <div className="py-section container">
        <Skeleton className="mb-8 h-16 w-80" />
        <Skeleton className="mb-2 w-full max-w-4xl" />
        <Skeleton className="mb-2 w-full max-w-4xl" />
        <Skeleton className="w-full max-w-xl" />
      </div>
    </div>
  );
}
