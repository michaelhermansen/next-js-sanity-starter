"use client";

import { Loader } from "lucide-react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export function VideoPlayer(props: { url: string }) {
  return (
    <div className="size-full bg-black">
      <ReactPlayer
        url={props.url}
        width="100%"
        height="100%"
        controls
        fallback={
          <div className="grid size-full place-items-center">
            <Loader className="animate-spin text-white" />
          </div>
        }
      />
    </div>
  );
}
