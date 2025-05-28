"use client";

import { useOptimistic, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { env } from "@/lib/env";

export function useSearchParamsState(paramKey: string) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const currentValue = searchParams.get(paramKey) || "";

  const [optimisticValue, setOptimisticValue] = useOptimistic(
    currentValue,
    (_state: string, newValue: string) => newValue,
  );

  function setValue(value: string) {
    startTransition(() => {
      setOptimisticValue(value);
      const newUrl = new URL(pathname, env.NEXT_PUBLIC_SITE_URL);

      if (!value) {
        newUrl.searchParams.delete(paramKey);
      } else {
        newUrl.searchParams.set(paramKey, value);
      }

      router.replace(newUrl.toString(), { scroll: false });
    });
  }

  return {
    value: optimisticValue,
    setValue,
    isPending,
  };
}
