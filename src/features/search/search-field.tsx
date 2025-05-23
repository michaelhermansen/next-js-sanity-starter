"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormEvent } from "react";

export function SearchField(props: { resultPathname: string }) {
  const { handleSubmit, defaultValue } = useSearchField({
    fieldName: "query",
    resultPathname: props.resultPathname,
  });

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <label className="flex-1">
        <span className="sr-only">Søk</span>
        <input
          name="query"
          type="search"
          className="bg-background h-9 w-full rounded rounded-r-none border pr-2 pl-3 shadow-xs"
          placeholder="Søk"
          defaultValue={defaultValue}
        />
      </label>
      <Button
        size="icon"
        variant="outline"
        type="submit"
        className="rounded-l-none border-l-0"
      >
        <AccessibleIcon label="Søk">
          <Search size="1rem" />
        </AccessibleIcon>
      </Button>
    </form>
  );
}

export function useSearchField(options: {
  fieldName: string;
  resultPathname: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query");
    if (!query) return;
    router.push(`${options.resultPathname}?q=${query}`);
  }

  const defaultValue =
    options.resultPathname === pathname
      ? searchParams.get("q")?.toString()
      : "";

  return {
    handleSubmit,
    defaultValue,
  };
}
