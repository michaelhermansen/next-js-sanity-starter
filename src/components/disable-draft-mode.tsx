"use client";
import { Button } from "@/components/ui/button";

import { useDraftModeEnvironment } from "next-sanity/hooks";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }

  return (
    <Button asChild>
      <a href="/api/draft-mode/disable" className="fixed right-4 bottom-4">
        Disable Draft Mode
      </a>
    </Button>
  );
}
