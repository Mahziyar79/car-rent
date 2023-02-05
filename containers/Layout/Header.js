import Image from "next/image";
import React from "react";
import LogoImage from "../../public/images/Logo.png";
import LogoDarkImage from "../../public/images/LogoDark.png";
import ProfileImage from "../../public/images/image-profile.png";
import Notifications from "../../components/Header/Notifications";
import SearchBar from "../../components/Header/SearchBar";
import Link from "next/link";
import MenuBar from "../../components/Header/MenuBar";
import { useSelector } from "react-redux";

function Header() {
  const darkMode = useSelector((state) => state.carReducer.darkMode);

  return (
    <header className=" bg-white dark:bg-[#243137] py-5 px-10 shadow-sm md:sticky top-0 z-50">
      <div className="container mx-auto xl:max-w-screen-2xl flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-fit w-full">
          <div className="flex justify-between items-center ">
            <Link href={"/"}>
              {darkMode ? (
                <Image
                  className="scroll-effect"
                  src={LogoDarkImage}
                  alt="Logo Image"
                  width={150}
                  height={150}
                />
              ) : (
                <Image
                  className="scroll-effect"
                  src={LogoImage}
                  alt="Logo Image"
                  width={150}
                  height={150}
                />
              )}
              
            </Link>
            <div className="flex items-center gap-x-3">
              <Image
                className="md:hidden"
                src={ProfileImage}
                alt="Profile Image"
                width={28}
                height={28}
              />
              <div className="md:hidden">
                <MenuBar />
              </div>
            </div>
          </div>
        </div>
        <SearchBar />
        <Notifications />
      </div>
    </header>
  );
}

export default Header;
