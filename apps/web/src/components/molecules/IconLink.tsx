import Link from "next/link";
import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/atoms/Icon";
import { cn } from "@/lib/cn";

export type IconLinkProps = {
  href: string;
  icon: IconName | (string & {});
  /** `inverted` for links on the navy/orange surfaces. */
  tone?: "default" | "inverted";
  className?: string;
  children: ReactNode;
};

/** Icon + label link — the header's "Cadastro" and "Login" entries. */
export function IconLink({
  href,
  icon,
  tone = "default",
  className,
  children,
}: IconLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 font-sans text-body-md",
        "hover:text-brand-primary-dark",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
        tone === "inverted" ? "text-neutral-white" : "text-neutral-text",
        className,
      )}
    >
      <Icon name={icon} size={16} />
      {children}
    </Link>
  );
}
