"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = (props: ToasterProps) => {
  return (
    <Sonner
      className="toaster group select-none"
      closeButton
      toastOptions={{
        unstyled: true,
        classNames: {
          toast:
            "bg-card focus-visible:shadow-none! rounded-sm p-3 border w-sm flex items-center flex-row-reverse justify-between gap-3 shadow-xs",
          title: "text-md font-medium",
          description: "text-base text-muted-foreground",
          closeButton:
            "size-10 grid rounded-full opacity-50 focus-visible:opacity-100 hover:opacity-100 place-items-center [&>svg]:size-4",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
