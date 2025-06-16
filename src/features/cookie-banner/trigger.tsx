"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function CookieBannerTrigger() {
  function triggerCookieBanner() {
    try {
      window.CookieScript.instance.show();
    } catch (error) {
      console.warn(error);
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
