import { config } from "@/lib/config";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex justify-between gap-8 py-8">
        <Link className="font-semibold" href="/">
          {config.siteName}
        </Link>

        <span>
          Laget av{" "}
          <Link
            href="https://netlife.com"
            className="underline hover:no-underline"
          >
            Netlife
          </Link>
        </span>
      </div>
    </footer>
  );
}
