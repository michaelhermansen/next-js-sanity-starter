import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export type BreadcrumbLinkType = {
  label: string;
  href: string;
};

function BreadcrumbCustomItem(
  props: BreadcrumbLinkType & { isCurrent?: boolean },
) {
  return (
    <>
      <BreadcrumbItem className="text-primary font-bold">
        {!props.isCurrent ? (
          <BreadcrumbLink className="hover:text-primary/70" asChild>
            <Link href={props.href}>{props.label}</Link>
          </BreadcrumbLink>
        ) : (
          <BreadcrumbPage>{props.label}</BreadcrumbPage>
        )}
      </BreadcrumbItem>
      {!props.isCurrent && <BreadcrumbSeparator className="text-primary" />}
    </>
  );
}

export default function Breadcrumbs(props: { links: BreadcrumbLinkType[] }) {
  return (
    <Breadcrumb className="mb-3 lg:mb-6">
      <BreadcrumbList>
        {props.links.map((link, index) => (
          <BreadcrumbCustomItem
            key={link.label}
            {...link}
            isCurrent={index === props.links.length - 1}
          />
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
