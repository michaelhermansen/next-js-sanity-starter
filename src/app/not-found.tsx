import type { Metadata } from "next";
import MainLayout from "./(main)/layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <MainLayout>
      <div className="container max-w-xl py-[20lvh] text-center">
        <h1 className="pb-4 text-4xl">Siden finnes ikke</h1>

        <p className="text-xl text-balance">
          Vi kunne ikke finne siden du leter etter. Den kan ha blitt fjernet
          etter flyttet.
        </p>
        <div className="pt-8">
          <Button asChild size="lg">
            <Link href="/">
              <ArrowLeft />
              <span>Tilbake til forsiden</span>
            </Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
