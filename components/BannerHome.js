import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Ads1 from "../public/images/BgAds1.png";
import Ads2 from "../public/images/BgAds2.png";

function BannerHome() {
  const { locale } = useRouter();
  return (
    <section className={`px-5 ${locale==='fa' && "font-iransans"}`}>
      <div className="container mx-auto xl:max-w-screen-2xl md:flex md:items-center md:justify-between md:gap-x-12 my-7 ">
        <div className="grow relative mb-5 md:mb-0">
          <Image
            className=" bg-[#54a6ff] dark:bg-[#243137] rounded-md w-full lg:h-auto h-[300px] md:h-[250px] object-cover"
            src={Ads1}
            alt="Ads1 Image"
          />
          <div
            className={`text-white absolute top-5 md:top-10 w-2/3 xl:w-1/2 ${
              locale === "en" ? "left-8" : "dir-rtl right-8"
            }`}
          >
            <h2 className="text-xl xl:text-4xl !leading-[1.3em]">
              {locale === "en"
                ? "The Best Platform for Car Rental"
                : "بهترین بستر برای اجاره خودرو"}
            </h2>
            <p className="font-light text-sm md:text-sm lg:text-base my-3 xl:my-8">
              {locale === "en"
                ? "Ease of doing a car rental safely and reliably. Of course at a low price."
                : "سهولت در اجاره خودرو با خیال راحت و قابل اعتماد. البته با قیمت پایین"}
            </p>
            <Link href="/cars">
              <button className="md:py-3 md:px-5 p-2 bg-[#3563E9] rounded-md text-white text-sm">
                {locale === "en" ? "Rental Car" : "اجاره خودرو"}
              </button>
            </Link>
          </div>
        </div>
        <div className="grow relative">
          <Image
            className=" bg-[#3563e9] dark:bg-[#2f4f5e] rounded-md w-full lg:h-auto h-[300px] md:h-[250px] object-cover"
            src={Ads2}
            alt="Ads2 Image"
          />
          <div
            className={`text-white absolute top-5 md:top-10 w-2/3 xl:w-1/2 ${
              locale === "en" ? "left-8" : "dir-rtl right-8"
            }`}
          >
            <h2 className="text-xl xl:text-4xl !leading-[1.3em]">
              {locale === "en"
                ? "Easy way to rent a car at a low price"
                : "روشی آسان برای اجاره ماشین با قیمت پایین"}
            </h2>
            <p className="font-light text-sm md:text-sm lg:text-base my-3 xl:my-8">
              {locale === "en"
                ? "Providing cheap car rental services and safe and comfortable facilities."
                : "ارائه خدمات اجاره خودرو ارزان و امکانات امن و راحت."}
            </p>
            <Link href="/cars">
              <button className="md:py-3 md:px-5 p-2 bg-[#54A6FF] rounded-md text-white text-sm">
                {locale === "en" ? "Rental Car" : "اجاره خودرو"}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerHome;
