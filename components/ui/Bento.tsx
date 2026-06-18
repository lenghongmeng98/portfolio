import type { ReactNode } from "react";
import { cardClasses } from "@/components/ui/Card";

type Span = 4 | 5 | 6 | 7 | 8 | 12;

const spanMap: Record<Span, string> = {
  4: "col-span-12 sm:col-span-6 lg:col-span-4",
  5: "col-span-12 sm:col-span-6 lg:col-span-5",
  6: "col-span-12 sm:col-span-6 lg:col-span-6",
  7: "col-span-12 lg:col-span-7",
  8: "col-span-12 lg:col-span-8",
  12: "col-span-12",
};

type GridProps = {
  children: ReactNode;
  className?: string;
};

export function BentoGrid({ children, className = "" }: GridProps) {
  return <div className={["bento-grid", className].filter(Boolean).join(" ")}>{children}</div>;
}

type CellProps = {
  children: ReactNode;
  span?: Span;
  className?: string;
  interactive?: boolean;
  shine?: boolean;
  as?: "div" | "article" | "li";
  /** When false, omit grid column classes (use on a parent grid item). */
  inset?: boolean;
};

export function BentoCell({
  children,
  span = 12,
  className = "",
  interactive = false,
  shine = false,
  as: Tag = "div",
  inset = false,
}: CellProps) {
  return (
    <Tag
      className={cardClasses({
        glass: true,
        interactive,
        shine,
        className: [inset ? "" : spanMap[span], "bento-cell", className].filter(Boolean).join(" "),
      })}
    >
      {children}
    </Tag>
  );
}
