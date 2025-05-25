import { ThemeToggle } from "@/features/theme/theme-toggle";
import { config } from "@/lib/config";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container">
        <div className="py-12">
          <Link className="text-2xl font-medium" href="/">
            {config.siteName}
          </Link>
        </div>

        <div className="flex items-center justify-between py-8">
          <div className="flex gap-3">
            <ThemeToggle />
            <Button asChild variant="ghost">
              <Link href="#">Cookie-valg</Link>
            </Button>
          </div>

          <div>
            Laget av{" "}
            <Link
              href="https://netlife.com"
              className="underline hover:no-underline"
            >
              Netlife
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
