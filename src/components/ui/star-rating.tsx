import { Star, StarHalf } from "lucide-react";
import { cn } from "@/lib/utils";

export function StarRating({
  size = "sm",
  rating,
}: {
  size?: "sm" | "lg";
  rating: number;
}) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return (
            <Star
              key={i}
              className={cn(
                "h-4 w-4 fill-yellow-400 text-yellow-400",
                size === "lg" && "h-8 w-8",
              )}
            />
          );
        }
        if (i === fullStars && hasHalfStar) {
          return (
            <StarHalf
              key={i}
              className={cn(
                "h-4 w-4 fill-yellow-400 text-yellow-400",
                size === "lg" && "h-8 w-8",
              )}
            />
          );
        }
        return <Star key={i} className="h-4 w-4 text-gray-300" />;
      })}
    </div>
  );
}
