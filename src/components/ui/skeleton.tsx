import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Skeleton(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...restProps } = props;

  return (
    <div
      className={cn("bg-muted animate-pulse rounded-xs", className)}
      {...restProps}
    />
  );
}
