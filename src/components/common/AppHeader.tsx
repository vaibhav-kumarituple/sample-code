import Image from "next/image";
import Link from "next/link";

const AppHeader = () => {
  return (
    <a className="flex gap-3 top-0 h-4 md:h-12 items-center p-2 border-r lg:w-60 md:w-14" href="/">
      <div className="flex mx-1">
        <img src="/app_icon.png" alt="Logo" width={30} height={30} />
      </div>
      <p className="font-bold text-gray-700 lg:w-4/5 md:hidden lg:flex">Skill-Up Dashboard</p>
    </a>
  );
};

export default AppHeader;
