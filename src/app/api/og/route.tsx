import { siteConfig } from "@/lib/site-config";
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function GET(req: NextRequest) {
  // Font loading, process.cwd() is Next.js project directory
  const interSemiBold = await readFile(
    join(process.cwd(), "src/assets/Inter-SemiBold.ttf"),
  );

  const params = req.nextUrl.searchParams;
  const title = params.get("title") || siteConfig.name;

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
