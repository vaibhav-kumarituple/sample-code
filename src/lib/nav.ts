interface NavItem {
  title: string;
  icon: string;
  path: string;
}

export const getNavItems = () => {
  const navItems: NavItem[] = [
    {
      title: "Assessment",
      icon: "usermgmt",
      path: "/user-management",
    }

  ];
  return navItems;
};


