"use client";

import { useId, type SelectHTMLAttributes } from "react";
import { Icon } from "@/components/atoms/Icon";
import { Select } from "@/components/atoms/Select";
import type { FieldTone } from "@/components/atoms/Input";
import { cn } from "@/lib/cn";

export type IconSelectOption = { value: string; label: string };

export type IconSelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children"
> & {
  options: IconSelectOption[];
  /** Shown as a disabled first option, e.g. "Selecione a categoria". */
  placeholder?: string;
  /** `default` = navy outline (filtro). `inverted` = white outline (horário). */
  tone?: FieldTone;
  label?: string;
  className?: string;
};

const TONES: Record<FieldTone, string> = {
  default: "border-brand-secondary text-brand-secondary",
  inverted: "border-neutral-white text-neutral-white",
};

/**
 * Bordered select with a trailing chevron. Covers the Figma components
 * "Filtro" and "Dropdown horário".
 */
export function IconSelect({
  options,
  placeholder,
  tone = "default",
  label,
  className,
  id,
  defaultValue,
  value,
  ...props
}: IconSelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const isControlled = value !== undefined;

  return (
    <div className={cn("flex w-full flex-col gap-1", className)}>
      {label ? (
        <label
          htmlFor={selectId}
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
        <Select
          id={selectId}
          tone={tone}
          value={value}
          defaultValue={isControlled ? undefined : (defaultValue ?? "")}
          {...props}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Icon name="keyboard_arrow_down" size={16} />
      </div>
    </div>
  );
}
