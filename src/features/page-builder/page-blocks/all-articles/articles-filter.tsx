"use client";

import { useSearchParamsState } from "@/hooks/use-search-params-state";
import { MultipleCategoriesQueryResult } from "@/sanity/sanity.types";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { X } from "lucide-react";
import { useMemo } from "react";

export default function ArticlesFilter(props: {
  categories: MultipleCategoriesQueryResult;
}) {
  const { value, setValue } = useSearchParamsState("c");

  const selectedCategories = useMemo(() => {
    return value ? value.split(",").filter(Boolean) : [];
  }, [value]);

  const handleValueChange = (newValue: string[]) => {
    setValue(newValue.join(","));
  };

  return (
    <div>
      <fieldset>
        <legend className="mb-2 text-lg font-medium">Kategorier</legend>
        <ToggleGroup
          type="multiple"
          className="flex flex-wrap gap-1.5"
          value={selectedCategories}
          onValueChange={handleValueChange}
        >
          {props.categories.map((category) => {
            if (!category.slug?.current || !category.title) return null;

            return (
              <ToggleGroupItem
                key={category.slug.current}
                value={category.slug.current}
                className="group data-[state=on]:bg-primary data-[state=on]:text-primary-foreground bg-card flex items-center gap-1 rounded border px-4 py-2 font-medium transition-all duration-200"
              >
                <X
                  aria-hidden="true"
                  size="1em"
                  className="-mr-5 scale-0 opacity-0 transition-all duration-200 group-data-[state=on]:mr-0 group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
                />
                {category.title}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </fieldset>
    </div>
  );
}
