import type { AnchorHTMLAttributes } from "react";

type ButtonOutlineProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonOutline({ className = "", children, ...rest }: ButtonOutlineProps) {
  return (
    <a
      className={`inline-block rounded-sm border border-accent text-accent font-display font-bold text-[0.72rem] tracking-[0.12em] uppercase px-6 py-3 transition-colors hover:bg-accent hover:text-bg focus-visible:bg-accent focus-visible:text-bg ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
