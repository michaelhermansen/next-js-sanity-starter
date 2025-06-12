"use client";

import { env } from "@/lib/env";
import { DeepNullable } from "@/lib/types";
import { shake } from "radash";
import { SanityImage, SanityImageProps } from "sanity-image";

type BasicCmsImageMetadata = DeepNullable<{
  lqip?: string;
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
  const preview = image.asset?.metadata?.lqip || undefined;
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
      sizes={generateSizes(props.width)}
      {...restProps}
      style={{
        backgroundImage: `url(${preview})`,
        backgroundSize: props.mode || "cover",
        ...props.style,
      }}
    />
  );
}

// Generate responsive sizes string based on image width
const generateSizes = (width?: number): string => {
  if (!width) return "";

  // For small images (less than 400px), don't bother with responsive sizes
  if (width < 400) {
    return `${width}px`;
  }

  // For medium images (400px - 800px), use simple responsive approach
  if (width <= 800) {
    return `(max-width: 640px) 100vw, ${width}px`;
  }

  // For large images, use comprehensive responsive sizes
  // This covers typical breakpoints: mobile, tablet, desktop
  return [
    `(max-width: 640px) 100vw`,
    `(max-width: 768px) ${Math.min(width, 768)}px`,
    `(max-width: 1024px) ${Math.min(width, 1024)}px`,
    `${width}px`,
  ].join(", ");
};
