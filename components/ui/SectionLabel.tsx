import type { ReactNode } from "react";
import type { UIIconName } from "@/components/icons/UIIcon";
import { UIIcon } from "@/components/icons/UIIcon";
import { IconBox } from "@/components/ui/IconBox";

type Props = {
  children: ReactNode;
  icon?: UIIconName;
  className?: string;
};

export function SectionLabel({ children, icon, className = "" }: Props) {
  return (
    <div className={["flex items-center gap-2.5", className].filter(Boolean).join(" ")}>
      {icon ? (
        <IconBox size="sm">
          <UIIcon name={icon} />
        </IconBox>
      ) : null}
      <p className="text-sm font-medium text-[var(--text-secondary)]">{children}</p>
    </div>
  );
}
