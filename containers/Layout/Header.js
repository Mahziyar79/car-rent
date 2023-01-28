import Image from "next/image";
import React from "react";
import LogoImage from "../../public/images/Logo.png";
import Notifications from "../../components/Header/Notifications";
import SearchBar from "../../components/Header/SearchBar";


function Header() {
  return (
    <div className=" bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between container mx-auto xl:max-w-screen-2xl">
        <div>
          <Image src={LogoImage} alt="Logo Image" width={150} height={150} />
        </div>
        <SearchBar />
        <Notifications />
      </div>
    </div>
  );
}

export default Header;
