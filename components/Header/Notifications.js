import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ProfileImage from "../../public/images/image-profile.png";
import MenuBar from "./MenuBar";
import Link from "next/link";
import { useSelector } from "react-redux";
import DarkMode from "./DarkMode";

function Notifications() {
  const cars = useSelector((state) => state.carReducer.cars);
  return (
    <div className="hidden md:flex md:gap-x-5 items-center">
        <div>
          <DarkMode />
        </div>
      <div className="relative">
        <Link href="/favourite">
          <HeartIcon className="h-8 w-8 text-gray-600 border border-gray-600 rounded-full p-1 hover:bg-gray-100 cursor-pointer scroll-effect" />
          <span className="bg-red-600 text-white rounded-full text-xs absolute -top-1 -right-2 w-4 h-4 flex items-center justify-center">
            {cars.filter((car) => car.is_like).length}
          </span>
        </Link>
      </div>
      
      <div>
        <Image
          className="max-w-none scroll-effect cursor-pointer"
          src={ProfileImage}
          alt="Profile Image"
          width={31}
          height={31}
        />
      </div>
      <div>
        <MenuBar />
      </div>
    </div>
  );
}

export default Notifications;
