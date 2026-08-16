import type { SocialLink } from "@/types";
import { DribbbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

const ICONS = {
  github: GithubIcon,
  dribbble: DribbbleIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
} as const;

interface SocialLinksProps {
  links: SocialLink[];
  iconSize?: number;
}

export function SocialLinks({ links, iconSize = 20 }: SocialLinksProps) {
  return (
    <ul className="flex gap-5">
      {links.map((link) => {
        const Icon = ICONS[link.icon];
        return (
          <li key={link.icon}>
            <a
              href={link.href}
              aria-label={link.label}
              className="text-muted transition-colors hover:text-accent focus-visible:text-accent"
            >
              <Icon width={iconSize} height={iconSize} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
