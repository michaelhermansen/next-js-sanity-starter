import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MainLayout from "./(main)/layout";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <MainLayout>
      <div className="container grid flex-1 place-items-center">
        <div className="max-w-xl text-center">
          <h1 className="pb-4 text-4xl font-semibold">Siden finnes ikke</h1>

          <p className="text-xl text-balance">
            Vi kunne ikke finne siden du leter etter. Den kan ha blitt fjernet
            etter flyttet.
          </p>

          <div className="pt-8">
            <Button asChild size="lg">
              <Link href="/">
                <ArrowLeft />
                Tilbake til forsiden
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
