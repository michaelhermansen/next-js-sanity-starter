import type { PreviewProps } from "sanity";
import { Flex, Text } from "@sanity/ui";
import { VideoPlayer } from "@/components/video-player";

export function VideoPreview(props: PreviewProps) {
  return (
    <Flex padding={3} align="center" justify="center">
      {typeof props.title === "string" ? (
        <div className="aspect-video w-full overflow-clip rounded-[2px]">
          <VideoPlayer url={props.title} />
        </div>
      ) : (
        <Flex align="center" justify="center">
          <Text>Oppgi en video-URL</Text>
        </Flex>
      )}
    </Flex>
  );
}
