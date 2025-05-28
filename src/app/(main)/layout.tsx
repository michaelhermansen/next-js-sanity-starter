import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { QueryProvider } from "@/components/query-provider";
import { SkipLink } from "@/components/skip-link";
import { DisableDraftMode } from "@/features/draft-mode/disable-draft-mode";
import { env } from "@/lib/env";
import { SanityLive } from "@/sanity/lib/live";
import { GoogleTagManager } from "@next/third-parties/google";
import { VisualEditing } from "next-sanity";
import { draftMode } from "next/headers";

const gtmId = env.NEXT_PUBLIC_GTM_ID;

export default async function MainLayout(props: { children: React.ReactNode }) {
  return (
    <>
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <SkipLink />

      <QueryProvider>
        <div className="flex min-h-lvh flex-col">
          <Header />
          <main
            tabIndex={-1}
            id="hovedinnhold"
            className="flex flex-1 flex-col"
          >
            {props.children}
          </main>

          <Footer />
        </div>
      </QueryProvider>

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
