import NavList from "@/components/nav/NavList";
import AppHeader from "@/components/common/AppHeader";
import Profile from "@/components/profile/Profile";
import { cn } from "@/lib/utils";

interface NavbarLayoutProps {
  className?: string;
}

const SideNavbar = (props: NavbarLayoutProps) => {
  return (
    <div className={cn("sticky top-0", props.className)}>
      <AppHeader />
      <NavList />
      <Profile />
    </div>
  );
};

export default SideNavbar;
