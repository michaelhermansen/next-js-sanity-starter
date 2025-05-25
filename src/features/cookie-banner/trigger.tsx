"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CookieBannerTrigger() {
  function triggerCookieBanner() {
    try {
      //@ts-expect-error CookieScript is of type any
      window.CookieScript.instance.show();
    } catch (error) {
      toast("Noe gikk galt", {
        description: "Kunne ikke hente dine cookie-preferanser.",
      });
    }
  }

  return (
    <Button variant="ghost" onClick={triggerCookieBanner}>
      Cookie-preferanser
    </Button>
  );
}
