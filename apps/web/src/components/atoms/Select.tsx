import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import type { FieldTone } from "./Input";

export type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  tone?: FieldTone;
};

const TONES: Record<FieldTone, string> = {
  default: "text-brand-secondary",
  inverted: "text-neutral-white",
};

/**
 * Bare native select with the UA arrow removed — the surrounding field
 * (see molecules/IconSelect) draws the box and the chevron.
 */
export function Select({
  tone = "default",
  className,
  children,
  ...props
}: SelectProps) {
  return (
    <select
      className={cn(
        "w-full min-w-0 cursor-pointer appearance-none bg-transparent font-sans text-body-md outline-none",
        "[&>option]:text-neutral-text",
        TONES[tone],
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
