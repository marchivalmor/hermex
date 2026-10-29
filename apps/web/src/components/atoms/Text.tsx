import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type TextSize = "md" | "lg";
export type TextTone = "default" | "muted" | "inverted";

export type TextProps = {
  /** `md` = 16px (body-md). `lg` = 20px (body-lg). */
  size?: TextSize;
  /** `inverted` for text sitting on the orange/navy surfaces. */
  tone?: TextTone;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

const SIZES: Record<TextSize, string> = {
  md: "text-body-md",
  lg: "text-body-lg",
};

const TONES: Record<TextTone, string> = {
  default: "text-black",
  muted: "text-neutral-text",
  inverted: "text-neutral-white",
};

/** Inter Regular — body copy. */
export function Text({
  size = "md",
  tone = "default",
  as: Tag = "p",
  className,
  children,
}: TextProps) {
  return (
    <Tag className={cn("font-sans", SIZES[size], TONES[tone], className)}>
      {children}
    </Tag>
  );
}
