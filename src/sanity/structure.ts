import { DocumentsIcon, TagsIcon, UsersIcon } from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "page",
        title: "Sider",
        icon: DocumentsIcon,
        S,
        context,
      }),
      S.listItem()
        .title("Artikler")
        .schemaType("article")
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList("article")
            .title("article")
            .defaultOrdering([{ field: "_createdAt", direction: "desc" }]), // Default ordering
        ),
      orderableDocumentListDeskItem({
        type: "category",
        title: "Kategorier",
        icon: TagsIcon,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "author",
        title: "Forfattere",
        icon: UsersIcon,
        S,
        context,
      }),
    ]);
