import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import LogoImage from "../../public/images/Logo.png";
import LogoDarkImage from "../../public/images/LogoDark.png";

function Footer() {
  const darkMode = useSelector((state) => state.carReducer.darkMode);
  const { locale } = useRouter();

  return (
    <footer className="bg-white dark:bg-[#243137] dark:text-white px-10 py-14 md:py-5 shadow-sm mt-20 ">
      <div className={`container mx-auto xl:max-w-screen-2xl flex md:flex-row flex-col items-center justify-between border-b-2 md:py-10 ${locale ==="fa" && "font-iransans dir-rtl"}`}>
        <div className="grow flex flex-col items-center md:items-start mb-10 md:mb-0">
          {darkMode ? (
            <Image
              className="scroll-effect mb-5"
              src={LogoDarkImage}
              alt="Logo Image"
              width={140}
              height={140}
            />
          ) : (
            <Image
              className="scroll-effect mb-5"
              src={LogoImage}
              alt="Logo Image"
              width={140}
              height={140}
            />
          )}

          <p className={`md:w-80 text-center ${locale==="fa" ? "md:text-right" : "md:text-left"}`}>
            {locale === "en"
              ? "Our vision is to provide convenience and help increase your sales business."
              : "چشم انداز ما ارائه راحتی و کمک به افزایش تجارت شماست."}
          </p>
        </div>
        <div className="flex md:flex-row md:flex-nowrap flex-wrap items-center justify-between grow md:w-auto w-full">
          <div className="py-5">
            <h2 className="font-bold text-xl mb-4">
              {locale === "en" ? "About" : "درباره ما"}
            </h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b] dark:text-white">
              <Link href="#">
                <li>{locale === "en" ? "How it works" : "چگونه کار می کند"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Featured" : "قابلیت ها"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Partnership" : "شرکا"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Bussiness Relation" : "رابطه تجاری"}</li>
              </Link>
            </ul>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-xl mb-6">{locale === "en" ? "Community" : "انجمن"}</h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b] dark:text-white">
              <Link href="#">
                <li>{locale === "en" ? "Events" : "رویداد ها"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Blog" : "مقالات"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Podcast" : "پادکست"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Invite a friend" : "دعوت دوست"}</li>
              </Link>
            </ul>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-xl mb-6">{locale === "en" ? "Socials" : "شبکه های اجتماعی"}</h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b] dark:text-white">
              <Link href="#">
                <li>{locale === "en" ? "Discord" : "دیسکورد"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Instagram" : "اینستاگرام"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Twitter" : "توییتر"}</li>
              </Link>
              <Link href="#">
                <li>{locale === "en" ? "Facebook" : "فیسبوک"}</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className={`container mx-auto xl:max-w-screen-2xl flex flex-col md:flex-row items-center justify-between pt-10 md:pb-6 font-bold text-center gap-y-10 ${locale==="fa" && "font-iransans dir-rtl"}`}>
        <div>
          <p>{locale==="en" ? "©2023 Car Rent Company. All rights reserved" : "©2023 شرکت اجاره خودرو. تمامی حقوق محفوظ است"}</p>
        </div>
        <div className="flex items-center justify-between gap-x-12 flex-col md:flex-row gap-y-4 text-sm">
          <Link href="#">
            <p>{locale==="en" ? "Privacy & Policy" : "سیاست حفظ حریم خصوصی" }</p>
          </Link>
          <Link href="#">
            <p>{locale==="en" ? "Terms & Condition" : "شرایط و ضوابط"}</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
