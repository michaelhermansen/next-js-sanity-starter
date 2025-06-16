"use client";

import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";
import {
  ComponentProps,
  createContext,
  RefObject,
  useContext,
  useRef,
} from "react";

const ClickableCardContext = createContext<{
  linkRef?: RefObject<HTMLAnchorElement | null>;
  clickable?: boolean;
}>({});

export function Card(
  props: ComponentProps<"div"> & { clickable?: boolean; asChild?: boolean },
) {
  const { clickable, onClick, asChild, className, ...restProps } = props;
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  const Comp = asChild ? Slot : "div";

  return (
    <ClickableCardContext.Provider value={{ linkRef, clickable }}>
      <Comp
        className={cn(
          "bg-card text-card-foreground overflow-clip rounded border",
          clickable &&
            "cursor-pointer focus-within:ring-2 focus-within:ring-offset-2",
          className,
        )}
        onClick={(e) => {
          if (onClick) onClick(e);
          if (clickable) linkRef.current?.click();
        }}
        {...restProps}
      />
    </ClickableCardContext.Provider>
  );
}

export function CardContent(props: ComponentProps<"div">) {
  const { className, ...restProps } = props;

  return <div className={cn("p-4", className)} {...restProps} />;
}

export function CardLink(props: Omit<ComponentProps<typeof Link>, "ref">) {
  const { className, ...restProps } = props;
  const { linkRef, clickable } = useContext(ClickableCardContext);

  return (
    <Link
      {...restProps}
      className={cn(clickable && "focus:ring-0 focus:ring-offset-0", className)}
      ref={linkRef}
    />
  );
}
