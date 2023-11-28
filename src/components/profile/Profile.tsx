import React from "react";
import Image from "next/image";
import { getUserProfile } from "@/lib/profile";
import Link from "next/link";

interface SidebarProfileProps {
  mobileMenuHandler?: () => void;
}

const Profile = (props: SidebarProfileProps) => {
  const userProfile = getUserProfile();
  return (
    <Link
      onClick={props.mobileMenuHandler}
      className="flex gap-2 bottom-0 p-2 border bg-white w-60 lg:w-60 md:w-14 hover:bg-gray-100 hover:cursor-pointer rounded-br-md md:rounded-none"
      href="/profile"
    >
      <div className="mx-1 ">
        <Image src={userProfile.image} alt="image" width={30} height={30} />
      </div>
      <div className=" w-4/5 mx-3 md:hidden lg:block text-gray-600 text-md">
        {userProfile.name}
      </div>
    </Link>
  );
};

export default Profile;
