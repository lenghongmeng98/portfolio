import type { ReactNode } from "react";

type Size = "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-8 w-8 rounded-lg [&_svg]:h-3.5 [&_svg]:w-3.5",
  md: "h-10 w-10 rounded-xl [&_svg]:h-4 [&_svg]:w-4",
  lg: "h-12 w-12 rounded-xl [&_svg]:h-5 [&_svg]:w-5",
};

type Props = {
  children: ReactNode;
  size?: Size;
  className?: string;
};

export function IconBox({ children, size = "md", className = "" }: Props) {
  return (
    <span
      className={[
        "inline-flex shrink-0 items-center justify-center border border-[var(--border)] bg-[var(--glass)] text-[var(--accent)] backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-200",
        sizes[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </span>
  );
}
