import {
  Breadcrumbs,
  BreadcrumbsCurrentPage,
  BreadcrumbsHomeLink,
  BreadcrumbsLink,
  BreadcrumbsSeparator,
} from "@/components/ui/breadcrumbs";
import { Fragment } from "react";
import { Skeleton } from "./ui/skeleton";

type BreadcrumbLink = { title: string; href: string };

export function PageBreadcrumbs(props: {
  links: BreadcrumbLink[];
  currentPageTitle: string;
}) {
  return (
    <div className="border-b">
      <Breadcrumbs className="container py-4">
        <BreadcrumbsHomeLink />
        <BreadcrumbsSeparator />
        {props.links.map((element) => (
          <Fragment key={element.href}>
            <BreadcrumbsLink href={element.href}>
              {element.title}
            </BreadcrumbsLink>
            <BreadcrumbsSeparator />
          </Fragment>
        ))}
        <BreadcrumbsCurrentPage>
          {props.currentPageTitle}
        </BreadcrumbsCurrentPage>
      </Breadcrumbs>
    </div>
  );
}

export function PageBreadcrumbsSkeleton() {
  return (
    <div className="border-b">
      <div className="container flex py-4">
        <Skeleton className="w-32" />
      </div>
    </div>
  );
}
