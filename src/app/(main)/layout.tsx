import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SkipLink } from "@/components/skip-link";
import { DisableDraftMode } from "@/features/draft-mode/disable-draft-mode";
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

export default async function MainLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <SkipLink />

      <div className="flex min-h-lvh flex-col">
        <Header />
        <main tabIndex={-1} id="hovedinnhold" className="flex flex-1 flex-col">
          {props.children}
        </main>

        <Footer />
      </div>

      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </>
  );
}
