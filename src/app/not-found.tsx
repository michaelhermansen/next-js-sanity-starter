import Header from "@/components/header";
import Footer from "@/components/footer";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <div className="relative z-20 flex min-h-[80vh] items-center justify-center">
        <div className="relative mx-auto px-8 py-[4rem] sm:max-w-[37.5rem] sm:py-[5rem] md:max-w-[40.625rem] md:px-0 md:py-[6.25rem] lg:max-w-[53.125rem] xl:max-w-[70rem]">
          <h1 className="text-[9.9vw] leading-[1.12] font-bold sm:text-[3.4375rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[8rem]">
            Page not found
          </h1>
          <div className="mt-5 text-center">
            <Button size="lg" asChild>
              <Link href="/">Back to Home page</Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
