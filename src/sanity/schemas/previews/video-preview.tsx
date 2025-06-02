"use client";

import { Button, Flex, Text } from "@sanity/ui";
import { VideoPlayer } from "@/components/video-player";
import { PreviewProps } from "sanity";
import { useRef } from "react";

export function VideoPreview(props: PreviewProps) {
  const videoUrl = props.title?.toString();
  const aspectRatio = props.subtitle?.toString() || "16/9";

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  return (
    <Flex
      padding={3}
      align="flex-start"
      gap={3}
      direction="column"
      ref={wrapperRef}
    >
      {videoUrl && (
        <div
          className="w-full overflow-clip rounded-[2px]"
          style={{ aspectRatio }}
        >
          <VideoPlayer url={videoUrl} />
        </div>
      )}

      {!videoUrl && (
        <Flex align="center" justify="center">
          <Text>Oppgi en video-URL</Text>
        </Flex>
      )}

      <Button
        paddingY={2}
        onClick={(e) => {
          // Simulate double click to trigger the edit dialog
          e.stopPropagation();
          const doubleClick = new MouseEvent("dblclick", { bubbles: true });
          wrapperRef?.current?.dispatchEvent(doubleClick);
        }}
      >
        Endre video
      </Button>
    </Flex>
  );
}
