import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export function Input({ className, type, ...props }: ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input bg-background focus:bg-card file:text-foreground placeholder:text-muted-foreground aria-invalid:ring-destructive flex h-9 w-full min-w-0 rounded-sm border px-3 py-1 text-base shadow-xs transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:focus-visible:outline-none",
        className,
      )}
      {...props}
    />
  );
}
