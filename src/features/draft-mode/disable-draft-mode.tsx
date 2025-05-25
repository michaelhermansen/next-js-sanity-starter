"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useDraftModeEnvironment } from "next-sanity/hooks";
import { useCallback, useState } from "react";

export function DisableDraftMode() {
  const environment = useDraftModeEnvironment();
  const [isClicked, setIsClicked] = useState(false);

  const handleDisableDraftMode = useCallback(() => {
    setIsClicked(true);
    location.href = "/api/draft-mode/disable";
  }, []);

  // Only show the disable draft mode button when outside of Presentation Tool
  if (environment !== "live" && environment !== "unknown") {
    return null;
  }
  return (
    <Button
      className="fixed right-4 bottom-4"
      onClick={handleDisableDraftMode}
      disabled={isClicked}
    >
      {isClicked && <Loader className="animate-spin" />}
      {!isClicked ? "Avslutt redigering" : "Avslutter"}
    </Button>
  );
}
