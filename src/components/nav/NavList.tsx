import { getNavItems } from "@/lib/nav";
import NavItem from "@/components/nav/NavItem";

const NavList = () => {
  const navItems = getNavItems();

  return (
    <section
      className="sticky left-0  border w-60 md:w-14 lg:w-60 
     transform transition-transform duration-1000 ease-in-out flex-grow bg-white">
      <ul className="flex flex-col mt-2">
        {navItems.map((item: any) => (
          <NavItem title={item.title} icon={item.icon} key={item.title} url={item.path} />
        ))}
      </ul>
    </section>
  );
};

export default NavList;
