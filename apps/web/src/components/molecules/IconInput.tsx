"use client";

import { useId, type InputHTMLAttributes } from "react";
import { Icon, type IconName } from "@/components/atoms/Icon";
import { Input, type FieldTone } from "@/components/atoms/Input";
import { cn } from "@/lib/cn";

export type IconInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** Leading Material Symbols glyph: `search`, `location_on`, `calendar_month`… */
  icon: IconName | (string & {});
  /** `default` on white surfaces, `inverted` on the orange search band. */
  tone?: FieldTone;
  /** Optional visible label above the field. */
  label?: string;
  className?: string;
};

const TONES: Record<FieldTone, string> = {
  default: "border-neutral-details text-neutral-text",
  inverted: "border-neutral-white text-neutral-white",
};

/**
 * Bordered text field with a leading icon. Covers the Figma components
 * "Campo de busca", "Campo de busca localização" and "Campo de data".
 */
export function IconInput({
  icon,
  tone = "default",
  label,
  className,
  id,
  ...props
}: IconInputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className={cn("flex w-full flex-col gap-1", className)}>
      {label ? (
        <label
          htmlFor={inputId}
          className={cn(
            "font-sans text-body-md",
            tone === "inverted" ? "text-neutral-white" : "text-neutral-text",
          )}
        >
          {label}
        </label>
      ) : null}
      <div
        className={cn(
          "flex w-full items-center gap-2 rounded-sm border px-4 py-3",
          "focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-current",
          TONES[tone],
        )}
      >
        <Icon name={icon} size={16} />
        <Input id={inputId} tone={tone} {...props} />
      </div>
    </div>
  );
}
