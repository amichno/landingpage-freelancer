import type { AnchorHTMLAttributes } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: "default" | "small";
}

export function ButtonLink({ size = "default", className = "", children, ...rest }: ButtonLinkProps) {
  const sizeClass = size === "small" ? "text-[0.72rem]" : "text-[0.8rem]";

  return (
    <a
      className={`inline-block font-display font-bold ${sizeClass} tracking-[0.14em] uppercase text-white pb-1.5 border-b-2 border-accent ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
