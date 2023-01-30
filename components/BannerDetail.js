import Image from "next/image";
import React from "react";
import Ads1 from "../public/images/BgAds1.png";
import Ads2 from "../public/images/BgAds2.png";

function BannerDetail() {
  return (
    <section>
      <div className="container mx-auto xl:max-w-screen-2xl md:flex md:items-center md:justify-between md:gap-x-12 ">
        <div className="grow relative mb-5 md:mb-0">
          <Image
            className=" bg-[#54a6ff] rounded-md w-full lg:h-auto h-[300px] md:h-[250px] object-cover"
            src={Ads1}
            alt="Ads1 Image"
          />
          <div className="text-white absolute top-5 md:top-10 left-8 w-2/3 xl:w-1/2">
            <h2 className="text-xl xl:text-4xl">
              The Best Platform for Car Rental
            </h2>
            <p className="font-light text-sm md:text-sm lg:text-base my-3 xl:my-8">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default BannerDetail;
