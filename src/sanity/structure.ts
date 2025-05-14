import { DocumentsIcon, TagsIcon, UsersIcon } from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "page",
        title: "Pages",
        icon: DocumentsIcon,
        S,
        context,
      }),
      S.listItem()
        .title("Posts")
        .schemaType("post")
        .icon(DocumentsIcon)
        .child(
          S.documentTypeList("post")
            .title("Post")
            .defaultOrdering([{ field: "_createdAt", direction: "desc" }]), // Default ordering
        ),
      orderableDocumentListDeskItem({
        type: "category",
        title: "Categories",
        icon: TagsIcon,
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: "author",
        title: "Authors",
        icon: UsersIcon,
        S,
        context,
      }),
    ]);
