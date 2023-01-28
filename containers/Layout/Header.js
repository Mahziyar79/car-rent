import Image from "next/image";
import React from "react";
import LogoImage from "../../public/images/Logo.png";
import ProfileImage from "../../public/images/image-profile.png";
import Notifications from "../../components/Header/Notifications";
import SearchBar from "../../components/Header/SearchBar";

function Header() {
  return (
    <div className=" bg-white p-5 shadow-sm">
      <div className="container mx-auto xl:max-w-screen-2xl flex md:flex-row flex-col items-center justify-between">
        <div className="md:w-fit w-full">
          <div className="flex justify-between items-center ">
            <Image src={LogoImage} alt="Logo Image" width={150} height={150} />
            <Image className="md:hidden" src={ProfileImage} alt="Profile Image" width={28} height={28} />

          </div>
        </div>
        <SearchBar />
        <Notifications />
      </div>
    </div>
  );
}

export default Header;
