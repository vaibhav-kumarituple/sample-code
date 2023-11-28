import {
  CalendarIcon,
  EyeIcon,
  PencilIcon,
  PlusCircle,
  Search,
  Trash2,
  X,
  XSquare,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { SkillsTooltip } from "./SkillsTooltip";

interface IIcons {
  [key: string]: (
    className?: string,
    onClick?: () => void,
    props?: any
  ) => JSX.Element;
}

export default function Icons({
  iconName,
  className,
  onClick,
}: {
  iconName: string;
  className?: string;
  onClick?: () => void;
}) {
  return icons[iconName](className, onClick);
}

const mainThemeColor = "text-purple-500";

const icons: IIcons = {
  eye: (className?: string, onClick?: () => void) => (
    <SkillsTooltip text="View Details">
      <EyeIcon
        className={cn("w-6 h-6  mx-auto", mainThemeColor, className)}
        onClick={onClick}
      />
    </SkillsTooltip>
  ),
  edit: (className?: string, onClick?: () => void) => (
    <SkillsTooltip text="Edit">
      <PencilIcon
        className={cn("w-5 h-5 mx-auto", mainThemeColor, className)}
        onClick={onClick}
      />
    </SkillsTooltip>
  ),
  add: (className?: string, onClick?: () => void) => (
    <PlusCircle
      className={cn(
        "w-6 h-6 text-purple-500 mx-auto",
        mainThemeColor,
        className
      )}
      onClick={onClick}
    />
  ),
  delete: (className?: string, onClick?: () => void) => (
    <SkillsTooltip text="Delete">
      <Trash2
        className={cn("w-5 h-5 text-red-500 mx-auto", className)}
        onClick={onClick}
      />
    </SkillsTooltip>
  ),
  calender: (className?: string) => (
    <SkillsTooltip text="Select a Date Range">
      <CalendarIcon
        className={cn(
          "w-5 h-5 text-purple-500 mx-auto",
          mainThemeColor,
          className
        )}
      />
    </SkillsTooltip>
  ),
  close: (className?: string, onClick?: () => void) => (
    <XSquare
      className={cn("w-6 h-6 text-slate-600 ", className, mainThemeColor)}
      onClick={onClick}
    />
  ),

  search: (className?: string, onClick?: () => void) => {
    return (
      <Search
        className={cn(
          "p-2 h-9 w-9 text-purple-500 cursor-pointer hover:",
          className,
          mainThemeColor
        )}
        onClick={onClick}
      />
    );
  },
  X: (className?: string, onClick?: () => void) => {
    return (
      <X
        className={cn(
          "h-5 w-5 text-purple-600 cursor-pointer",
          className,
          mainThemeColor
        )}
        onClick={onClick}
      />
    );
  },
};
