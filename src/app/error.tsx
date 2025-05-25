"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error(props: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(props.error);
  }, [props.error]);

  return (
    <div className="container grid h-svh place-items-center">
      <div className="max-w-xl text-center">
        <h1 className="pb-4 text-4xl font-semibold">Uff da …</h1>

        <p className="text-xl text-balance">
          Det har oppstått en feil. Prøv igjen eller ta kontakt med oss dersom
          problemet vedvarer.
        </p>

        <div className="pt-8">
          <Button size="lg" onClick={props.reset}>
            <RefreshCw />
            Prøv igjen
          </Button>
        </div>
      </div>
    </div>
  );
}
