import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="fade-in animate-in grid h-svh place-items-center duration-300">
      <Loader className="animate-spin" />
    </div>
  );
}
