import MobileMenu from "@/components/nav/MobileMenu";
import AppHeader from "@/components/common/AppHeader";

export default function TopNavBar() {
  return (
    <div className=" flex  p-2 w-full bg-gray-200  align-middle items-center">
      <MobileMenu />

      <AppHeader />
    </div>
  );
}
