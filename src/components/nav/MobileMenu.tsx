"use client";
import React, { useEffect, useState } from "react";

import Profile from "@/components/profile/Profile";
import NavList from "@/components/nav/NavList";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const MobileMenu = () => {
  const path = usePathname();
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const mobileMenuHandler = () => {
    setShowDropdownMenu(!showDropdownMenu);
  };

  useEffect(() => {
    setShowDropdownMenu(false);
  }, [path]);

  return (
    <div className="flex-col relative ">
      <Menu width={30} onClick={mobileMenuHandler} />
      {showDropdownMenu && <DropDownMenu />}
    </div>
  );
};

const DropDownMenu = () => {
  return (
    <div className="absolute top-8 z-100">
      <NavList />
      <Profile />
    </div>
  );
};

export default MobileMenu;
