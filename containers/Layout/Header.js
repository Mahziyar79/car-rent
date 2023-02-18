import Image from "next/image";
import React from "react";
import LogoImage from "../../public/images/Logo.png";
import LogoDarkImage from "../../public/images/LogoDark.png";
import Notifications from "../../components/Header/Notifications";
import SearchBar from "../../components/Header/SearchBar";
import Link from "next/link";
import MenuBar from "../../components/Header/MenuBar";
import { useSelector } from "react-redux";
import DarkMode from "../../components/Header/DarkMode";
import { useRouter } from "next/router";

function Header() {
  const darkMode = useSelector((state) => state.carReducer.darkMode);
  const {locale} = useRouter()
  return (
    <header className={`md:sticky top-0 z-50 ${locale==="fa" && "font-iransans"}`}>
      <div className="p-4 text-center text-white bg-[#263566] dark:bg-[#1a2428]">
        <p>{locale==="en" ? "This site is still under development" : "این سایت همچنان درحال توسعه میباشد"}</p>
      </div>
      <section className="bg-white dark:bg-[#243137] dark:shadow-gray-500/25 p-5 dark:shadow-md shadow-sm">
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
                <div className="md:hidden">
                  <DarkMode />
                </div>
                <div className="md:hidden">
                  <MenuBar />
                </div>
              </div>
            </div>
          </div>
          <SearchBar />
          <Notifications />
        </div>
      </section>
    </header>
  );
}

export default Header;
