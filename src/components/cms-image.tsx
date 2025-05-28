import { env } from "@/lib/env";
import { DeepNullable } from "@/lib/types";
import { SanityImage, SanityImageProps } from "sanity-image";
import { shake } from "radash";

type BasicCmsImageMetadata = DeepNullable<{
  dimensions?: { width?: number; height?: number };
}>;

type BasicCmsImage = DeepNullable<{
  asset?:
    | { _ref: string; _id?: string; metadata?: BasicCmsImageMetadata }
    | { _ref?: string; _id: string; metadata?: BasicCmsImageMetadata };
  hotspot?: { x?: number; y?: number };
  crop?: { top?: number; left?: number; bottom?: number; right?: number };
}>;

export interface CmsImageProps
  extends Omit<SanityImageProps<"img">, "id" | "hotspot" | "crop" | "baseUrl"> {
  image: BasicCmsImage;
  alt: string;
}

export function CmsImage(props: CmsImageProps) {
  const { image, ...restProps } = props;

  // Infer some props from image object
  const id = image.asset?._ref || image.asset?._id;
  const hotspot = { x: 0, y: 0, ...shake(image.hotspot) };
  const crop = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...shake(image.crop),
  };

  if (!id) return null;

  // Automatically set the baseUrl based on the current environment
  const baseUrl = `https://cdn.sanity.io/images/${env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${env.NEXT_PUBLIC_SANITY_DATASET}/`;

  return (
    <SanityImage
      id={id}
      hotspot={hotspot}
      crop={crop}
      baseUrl={baseUrl}
      loading="lazy" // Set default to lazy loading
      mode="cover" // Set default fitting mode to "cover"
      sizes="90vw"
      {...restProps}
    />
  );
}
