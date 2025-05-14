import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { ChevronRight } from "lucide-react";
import { POSTS_QUERYResult } from "../../sanity/sanity.types";

type PostCard = NonNullable<POSTS_QUERYResult[number]>;

interface PostCardProps extends Omit<PostCard, "slug"> {
  className?: string;
}

export default function PostCard({
  className,
  title,
  excerpt,
  image,
}: PostCardProps) {
  return (
    <div
      className={cn(
        "group hover:border-primary flex w-full flex-col justify-between overflow-hidden rounded-3xl border p-4 transition ease-in-out",
        className,
      )}
    >
      <div className="flex flex-col">
        {image && image.asset?._id && (
          <div className="relative mb-4 h-[15rem] overflow-hidden rounded-2xl sm:h-[20rem] md:h-[25rem] lg:h-[9.5rem] xl:h-[12rem]">
            <Image
              src={urlFor(image).url()}
              alt={image.alt || ""}
              placeholder={image?.asset?.metadata?.lqip ? "blur" : undefined}
              blurDataURL={image?.asset?.metadata?.lqip || ""}
              fill
              style={{
                objectFit: "cover",
              }}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              quality={100}
            />
          </div>
        )}
        {title && (
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-[1.5rem] leading-[1.2] font-bold">{title}</h3>
          </div>
        )}
        {excerpt && <p>{excerpt}</p>}
      </div>
      <div className="group-hover:border-primary mt-3 flex h-10 w-10 items-center justify-center rounded-full border xl:mt-6">
        <ChevronRight
          className="text-border group-hover:text-primary"
          size={24}
        />
      </div>
    </div>
  );
}
