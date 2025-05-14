"use client";
import SectionContainer from "@/components/ui/section-container";
import { stegaClean } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Fragment } from "react";
import { motion } from "motion/react";
import { PAGE_QUERYResult } from "../../../sanity/sanity.types";

type LogoCloud1Props = Extract<
  NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number],
  { _type: "logo-cloud-1" }
>;

export default function LogoCloud1({
  padding,
  colorVariant,
  title,
  images,
}: LogoCloud1Props) {
  const color = stegaClean(colorVariant);

  return (
    <SectionContainer
      color={color}
      padding={padding}
      className="overflow-hidden"
    >
      {title && (
        <h2 className="animate-fade-up mb-4 text-center text-lg font-medium tracking-tighter opacity-0 [animation-delay:100ms]">
          {title}
        </h2>
      )}
      <div className="before:from-background after:from-background relative flex overflow-hidden before:absolute before:top-0 before:left-0 before:z-10 before:h-full before:w-10 before:bg-linear-to-r before:to-transparent before:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-10 after:bg-linear-to-l after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          animate={{
            x: ["0%", "-50%"],
          }}
          className="flex w-max gap-24 pr-24"
        >
          {[...new Array(2)].map((_, arrayIndex) => (
            <Fragment key={arrayIndex}>
              {images?.map((image, index) => (
                <div
                  key={`${image.asset?._id}-${arrayIndex}-${index}`}
                  className="flex h-24 w-24 shrink-0 items-center justify-center"
                >
                  <Image
                    src={urlFor(image).url()}
                    alt={image.alt || ""}
                    priority={arrayIndex === 0 && index < 3}
                    placeholder={
                      image?.asset?.metadata?.lqip &&
                      image?.asset?.mimeType !== "image/svg+xml"
                        ? "blur"
                        : undefined
                    }
                    blurDataURL={image?.asset?.metadata?.lqip || ""}
                    width={image.asset?.metadata?.dimensions?.width || 220}
                    height={image?.asset?.metadata?.dimensions?.height || 90}
                  />
                </div>
              ))}
            </Fragment>
          ))}
        </motion.div>
      </div>
    </SectionContainer>
  );
}
