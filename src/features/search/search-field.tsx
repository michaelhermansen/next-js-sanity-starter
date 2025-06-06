"use client";

import { Button } from "@/components/ui/button";
import { AccessibleIcon } from "@radix-ui/react-accessible-icon";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchField(props: {
  resultPathname: string;
  className?: string;
  onSearch?: () => void;
}) {
  const { handleSubmit, defaultValue } = useSearchField({
    fieldName: "query",
    resultPathname: props.resultPathname,
  });

  return (
    <search className={props.className}>
      <form
        onSubmit={(e) => {
          if (props.onSearch) props.onSearch();
          handleSubmit(e);
        }}
        className="flex w-full rounded-sm ring-offset-2 focus-within:ring-2"
      >
        <input
          required
          name="query"
          type="search"
          className="bg-background border-input focus:bg-card h-9 w-full rounded-sm rounded-r-none border border-r-0 pr-2 pl-0 indent-3 shadow-xs transition-colors focus:ring-0 focus:ring-offset-0"
          placeholder="Søk"
          defaultValue={defaultValue}
        />

        <Button
          size="icon"
          variant="outline"
          type="submit"
          className="rounded-l-none"
          tabIndex={-1}
        >
          <AccessibleIcon label="Søk">
            <Search size="1rem" />
          </AccessibleIcon>
        </Button>
      </form>
    </search>
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
