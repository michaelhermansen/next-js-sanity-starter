"use client";

import { useSearchParamsState } from "@/hooks/use-search-params-state";
import { MultipleCategoriesQueryResult } from "@/sanity/sanity.types";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { X } from "lucide-react";
import { sift } from "radash";

export default function ArticlesFilter(props: {
  categories: MultipleCategoriesQueryResult;
}) {
  const { value, setValue } = useSearchParamsState("c");

  return (
    <div>
      <fieldset>
        <legend className="mb-2 text-lg font-medium">Kategorier</legend>
        <ToggleGroup
          type="multiple"
          className="flex flex-wrap gap-1.5"
          value={sift(value.split(","))}
          onValueChange={(newValue) => setValue(newValue.join(","))}
        >
          {props.categories.map((category) => {
            if (!category.slug?.current || !category.title) return null;

            return (
              <ToggleGroupItem
                key={category.slug.current}
                value={category.slug.current}
                className="group data-[state=on]:bg-primary data-[state=on]:text-primary-foreground bg-card flex items-center gap-1 rounded border px-4 py-2 font-medium transition-all duration-300"
              >
                <X
                  aria-hidden
                  size="1em"
                  className="-mr-5 scale-0 opacity-0 transition-all duration-300 group-data-[state=on]:mr-0 group-data-[state=on]:scale-100 group-data-[state=on]:opacity-100"
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
