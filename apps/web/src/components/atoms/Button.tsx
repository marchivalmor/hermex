import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  /** `primary` = laranja da marca (Ver detalhes). `secondary` = azul (Buscar). */
  variant?: ButtonVariant;
  /** Stretches the button to the width of its container. */
  fullWidth?: boolean;
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-neutral-white hover:bg-brand-primary-dark",
  secondary: "bg-brand-secondary text-neutral-white hover:bg-brand-secondary-dark",
};

export function Button({
  variant = "primary",
  fullWidth = false,
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm px-4 py-3",
        "font-sans text-body-md transition-colors",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary",
        "disabled:cursor-not-allowed disabled:opacity-50",
        VARIANTS[variant],
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
