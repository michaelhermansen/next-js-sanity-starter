"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps } from "react";

export function Card(props: ComponentProps<"div"> & { asChild?: boolean }) {
  const { onClick, asChild, className, ...restProps } = props;

  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      className={cn(
        "bg-card text-card-foreground overflow-clip rounded border",
        className,
      )}
      onClick={(e) => {
        if (onClick) onClick(e);
      }}
      {...restProps}
    />
  );
}

export function CardContent(props: ComponentProps<"div">) {
  const { className, ...restProps } = props;

  return <div className={cn("p-4", className)} {...restProps} />;
}
