import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/** Surface the control sits on: white page vs. the orange/navy bands. */
export type FieldTone = "default" | "inverted";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  tone?: FieldTone;
};

const TONES: Record<FieldTone, string> = {
  default: "text-neutral-text placeholder:text-neutral-text",
  inverted: "text-neutral-white placeholder:text-neutral-white",
};

/**
 * Bare text input: no border or padding of its own — the surrounding field
 * (see molecules/IconInput) draws the box.
 */
export function Input({ tone = "default", className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "w-full min-w-0 bg-transparent font-sans text-body-md outline-none",
        TONES[tone],
        className,
      )}
      {...props}
    />
  );
}
