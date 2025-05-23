"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import type { ReactNode } from "react";

const queryClient = new QueryClient();

export function QueryProvider(props: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
}
