"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = (props: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group select-none"
      closeButton
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "bg-card rounded-sm p-3 border w-sm flex items-center flex-row-reverse justify-between gap-3 shadow-xs",
          title: "text-md font-medium",
          description: "text-base text-muted-foreground",
          closeButton:
            "size-6 hover:bg-muted grid place-items-center rounded-full transition-colors",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
