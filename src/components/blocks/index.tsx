import { PAGE_QUERYResult } from "../../sanity/sanity.types";
import AllPosts from "./all-posts";
import Cta1 from "./cta-1";
import Hero1 from "./hero-1";
import Hero2 from "./hero-2";
import SectionHeader from "./section-header";

type Block = NonNullable<NonNullable<PAGE_QUERYResult>["blocks"]>[number];

const componentMap: {
  [K in Block["_type"]]: React.ComponentType<Extract<Block, { _type: K }>>;
} = {
  "hero-1": Hero1,
  "hero-2": Hero2,
  "section-header": SectionHeader,
  "cta-1": Cta1,
  "all-posts": AllPosts,
};

export default function Blocks(props: { blocks: Block[] }) {
  return (
    <>
      {props.blocks?.map((block) => {
        const Component = componentMap[block._type];
        if (!Component) {
          // Fallback for development/debugging of new component types
          console.warn(
            `No component implemented for block type: ${block._type}`,
          );
          return <div data-type={block._type} key={block._key} />;
        }
        return <Component {...(block as any)} key={block._key} />;
      })}
    </>
  );
}
