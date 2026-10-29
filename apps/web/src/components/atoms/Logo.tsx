import Image from "next/image";
import { cn } from "@/lib/cn";

export type LogoVariant = "default" | "inverted";

export type LogoProps = {
  /** `default` for light surfaces, `inverted` for the navy footer. */
  variant?: LogoVariant;
  /** Rendered width in pixels; height follows the 180 × 60.472 artwork ratio. */
  width?: number;
  className?: string;
};

const SOURCES: Record<LogoVariant, { wordmark: string; tagline: string }> = {
  default: {
    wordmark: "/brand/hermex-wordmark.svg",
    tagline: "/brand/hermex-tagline.svg",
  },
  inverted: {
    wordmark: "/brand/hermex-wordmark-inverted.svg",
    tagline: "/brand/hermex-tagline-inverted.svg",
  },
};

/**
 * Hermex lockup: the "hermex" wordmark with the "locadora" tagline beneath it.
 * Layer insets mirror the Figma frame so the two pieces stay aligned at any width.
 */
export function Logo({
  variant = "default",
  width = 180,
  className,
}: LogoProps) {
  const { wordmark, tagline } = SOURCES[variant];

  return (
    <div
      role="img"
      aria-label="Hermex locadora"
      className={cn("relative shrink-0 overflow-hidden", className)}
      style={{ width, aspectRatio: "180 / 60.472" }}
    >
      <div className="absolute inset-[9.94%_7.95%_41.59%_7.95%]">
        <Image src={wordmark} alt="" fill unoptimized className="object-fill" />
      </div>
      <div className="absolute inset-[65.71%_8.64%_16.45%_48.32%]">
        <Image src={tagline} alt="" fill unoptimized className="object-fill" />
      </div>
    </div>
  );
}
