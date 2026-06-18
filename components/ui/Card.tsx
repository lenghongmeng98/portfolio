import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  accent?: boolean;
  glass?: boolean;
  shine?: boolean;
};

export function cardClasses({
  interactive = false,
  accent = false,
  glass = false,
  shine = false,
  className = "",
}: Omit<Props, "children"> = {}) {
  return [
    "card",
    glass ? "glass" : "",
    interactive ? "card-interactive" : "",
    shine ? "card-shine" : "",
    accent ? "card-accent" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Card({ children, className = "", interactive = false, accent = false, glass = false, shine = false }: Props) {
  return <div className={cardClasses({ interactive, accent, glass, shine, className })}>{children}</div>;
}
