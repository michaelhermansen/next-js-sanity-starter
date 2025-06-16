"use client";

import { Loader } from "lucide-react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
  loading: () => (
    <div className="grid size-full place-items-center bg-black">
      <Loader className="animate-spin text-white" />
    </div>
  ),
});

interface VideoPlayerProps {
  url: string;
  className?: string;
}

export function VideoPlayer({ url, className, ...props }: VideoPlayerProps) {
  return (
    <div className={className || "size-full bg-black"}>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        playing={false}
        {...props}
      />
    </div>
  );
}
