import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type HeadingSize = "xxl" | "xs";

export type HeadingProps = {
  /** `xxl` = 76px (banner). `xs` = 25px (preço, título de seção). */
  size?: HeadingSize;
  /**
   * Element rendered in the markup; independent from the visual size.
   * Use "span" when the text is styled as a heading but is not one.
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  className?: string;
  children: ReactNode;
};

const SIZES: Record<HeadingSize, string> = {
  xxl: "text-heading-xxl",
  xs: "text-heading-xs",
};

/** Exo 2 Bold — the display face of the brand. */
export function Heading({
  size = "xs",
  as: Tag = "h2",
  className,
  children,
}: HeadingProps) {
  return (
    <Tag className={cn("font-heading font-bold", SIZES[size], className)}>
      {children}
    </Tag>
  );
}
