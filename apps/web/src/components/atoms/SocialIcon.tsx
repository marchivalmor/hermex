import Image from "next/image";
import { cn } from "@/lib/cn";

export type SocialNetwork = "whatsapp" | "instagram" | "tiktok";

export type SocialIconProps = {
  network: SocialNetwork;
  /** Square size in pixels. */
  size?: number;
  className?: string;
};

const LABELS: Record<SocialNetwork, string> = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  tiktok: "TikTok",
};

/** Brand glyph for the footer social row. */
export function SocialIcon({ network, size = 32, className }: SocialIconProps) {
  return (
    <Image
      src={`/social/${network}.svg`}
      alt={LABELS[network]}
      width={size}
      height={size}
      unoptimized
      className={cn("shrink-0", className)}
    />
  );
}
