import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps, ReactNode } from "react";

export type TypographyProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
} & (ComponentProps<"h1"> | ComponentProps<"p">);

export function TypographyP(props: TypographyProps) {
  const { className, asChild, ...restProps } = props;
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      className={cn("mb-4 text-lg last:mb-0 sm:text-xl", className)}
      {...restProps}
    />
  );
}

export function TypographyH1(props: TypographyProps) {
  const { className, asChild, ...restProps } = props;
  const Comp = asChild ? Slot : "h1";

  return (
    <Comp
      className={cn(
        "mt-6 mb-4 font-serif text-5xl leading-[1.1] font-medium first:mt-0 last:mb-0 sm:text-6xl md:text-7xl",
        className,
      )}
      {...restProps}
    />
  );
}

export function TypographyH2(props: TypographyProps) {
  const { className, asChild, ...restProps } = props;
  const Comp = asChild ? Slot : "h2";

  return (
    <Comp
      className={cn(
        "mt-6 mb-4 text-3xl leading-tight font-semibold first:mt-0 last:mb-0 sm:text-4xl",
        className,
      )}
      {...restProps}
    />
  );
}
export function TypographyH3(props: TypographyProps) {
  const { className, asChild, ...restProps } = props;
  const Comp = asChild ? Slot : "h3";

  return (
    <Comp
      className={cn(
        "mt-6 mb-4 text-xl leading-tight font-semibold first:mt-0 last:mb-0 sm:text-2xl",
        className,
      )}
      {...restProps}
    />
  );
}
