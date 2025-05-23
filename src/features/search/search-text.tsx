"use client";

import { useSearchParams } from "next/navigation";

export function SearchText() {
  const searchParams = useSearchParams();
  return <>{searchParams.get("q") || ""}</>;
}
