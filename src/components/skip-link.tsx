import Link from "next/link";
import { Button } from "./ui/button";

export function SkipLink() {
  return (
    <Button
      asChild
      size="lg"
      className="pointer-events-none absolute top-2 left-2 -translate-y-2 opacity-0 transition-all focus:pointer-events-auto focus:translate-y-0 focus:opacity-100"
    >
      <Link href={"#hovedinnhold"}>Hopp til hovedinnhold</Link>
    </Button>
  );
}
