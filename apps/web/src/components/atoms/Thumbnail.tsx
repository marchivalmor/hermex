import Image from "next/image";
import { cn } from "@/lib/cn";

export type ThumbnailProps = {
  src: string;
  alt: string;
  /** Box width in pixels. Defaults to the 280 × 160 slot used by the card. */
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Vehicle photo on the neutral-details backdrop, letterboxed so cars of
 * different proportions keep a consistent frame.
 */
export function Thumbnail({
  src,
  alt,
  width = 280,
  height = 160,
  className,
}: ThumbnailProps) {
  return (
    <div
      className={cn("relative shrink-0 bg-neutral-details", className)}
      style={{ width, height }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${width}px`}
        className="object-contain p-2"
      />
    </div>
  );
}
