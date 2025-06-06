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
  isSelectingRef?: RefObject<boolean>;
}>({});

export function ClickableCard(
  props: ComponentProps<"div"> & { asChild?: boolean },
) {
  const { onClick, className, asChild, ...restProps } = props;

  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const isSelectingRef = useRef<boolean>(false);

  const Comp = asChild ? Slot : "div";

  return (
    <ClickableCardContext.Provider value={{ linkRef, isSelectingRef }}>
      <Comp
        {...restProps}
        className={cn(
          "cursor-pointer focus-within:ring-2 focus-within:ring-offset-2",
          className,
        )}
        onClick={(e) => {
          if (onClick) onClick(e);
          if (isSelectingRef.current) return;
          linkRef.current?.click();
        }}
      />
    </ClickableCardContext.Provider>
  );
}

export function ClickableCardLink(
  props: Omit<ComponentProps<typeof Link>, "ref">,
) {
  const { className, ...restProps } = props;
  const { linkRef } = useContext(ClickableCardContext);

  return (
    <Link
      {...restProps}
      className={cn("focus:ring-0 focus:ring-offset-0", className)}
      ref={linkRef}
    />
  );
}
