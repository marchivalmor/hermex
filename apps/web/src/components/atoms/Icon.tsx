import { cn } from "@/lib/cn";

/** Material Symbols glyphs used by the Hermex screens. */
export type IconName =
  | "search"
  | "location_on"
  | "calendar_month"
  | "keyboard_arrow_down"
  | "account_circle"
  | "login";

export type IconProps = {
  /** Material Symbols ligature name, e.g. `search`. */
  name: IconName | (string & {});
  /** Glyph size in pixels. Defaults to the 24px optical size of the font. */
  size?: number;
  className?: string;
};

/**
 * Renders a Material Symbols glyph. Decorative by default — wrap it in a
 * labelled element (Button, IconLink) when it carries meaning.
 */
export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <span
      aria-hidden
      className={cn("material-symbols-outlined shrink-0 select-none", className)}
      style={{ fontSize: size }}
    >
      {name}
    </span>
  );
}
