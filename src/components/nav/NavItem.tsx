"use client";

import {
  KeyRound,
  LockIcon,
  UsersIcon,
  FileTextIcon,
  LucideFileQuestion,
  ScrollText,
  BellPlus,
  ShieldAlert,
  GraduationCap,
  Contact2,
  ClipboardList,
  UserCog
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Label } from "@/components/common/Label";

type IconType = {
  [key: string]: any;
};
const icons: IconType = {



};

const NavItem = ({ icon, title, url }: any) => {
  const pathName = usePathname();

  const isActiveMenu = () => pathName?.includes(url);
  const activeClass = "text-gray-700 bg-violet-50";

  return (
    <li>
      <Link
        href={url}
        className={cn(
          "flex gap-2 text-gray-600 mx-2 py-3 px-1 hover:bg-gray-100 hover:cursor-pointer rounded items-center  font-sans",
          isActiveMenu() ? activeClass : ""
        )}>
        <div className="w-6 h-6 text-sm mr-1">{icons[icon]}</div>
        <div className="lg:w-4/5  md:hidden lg:flex">
          <Label className={cn("hover:cursor-pointer", isActiveMenu() ? activeClass : "")}>{title}</Label>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
