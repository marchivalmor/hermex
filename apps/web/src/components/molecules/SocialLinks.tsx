import { SocialIcon, type SocialNetwork } from "@/components/atoms/SocialIcon";
import { cn } from "@/lib/cn";

export type SocialLink = {
  network: SocialNetwork;
  href: string;
};

export type SocialLinksProps = {
  links: SocialLink[];
  /** Icon size in pixels. */
  size?: number;
  className?: string;
};

const LABELS: Record<SocialNetwork, string> = {
  whatsapp: "WhatsApp",
  instagram: "Instagram",
  tiktok: "TikTok",
};

/** Row of social network links — the footer's "Siga nossas redes". */
export function SocialLinks({ links, size = 32, className }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-start gap-2", className)}>
      {links.map((link) => (
        <li key={link.network}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={LABELS[link.network]}
            className="inline-flex rounded-sm transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-white"
          >
            <SocialIcon network={link.network} size={size} />
          </a>
        </li>
      ))}
    </ul>
  );
}
