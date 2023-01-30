import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import BannerDetail from "../../components/BannerDetail";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Car_Detail1 from "../../public/images/Car_Detail1.png";
import Car_Detail2 from "../../public/images/Car_Detail2.png";
import Car_Detail3 from "../../public/images/Car_Detail3.png";
import { carItems } from "../../server/cartItems";
import { useRouter } from "next/router";

function carId() {
  const { query } = useRouter();
  const selectedItem = carItems.find((item) => item.id == query.carId);
  return (
    <div className="container mx-auto xl:max-w-screen-2xl ">
      <div className="flex items-start my-7 gap-x-8">
        <div className="w-1/2">
          <BannerDetail />
          <div className="flex items-center justify-between mt-4">
            <Image
              className="rounded-md  object-cover w-[31%]"
              src={Car_Detail1}
              alt="Car_Detail1 Image"
            />
            <Image
              className="rounded-md  object-cover w-[31%]"
              src={Car_Detail2}
              alt="Car_Detail2 Image"
            />
            <Image
              className="rounded-md  object-cover w-[31%]"
              src={Car_Detail3}
              alt="Car_Detail3 Image"
            />
          </div>
        </div>
        <div className="bg-white rounded-lg p-10  w-1/2">
          {/* title */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl font-bold">{selectedItem?.name}</h1>
              <div className="flex items-center gap-x-2">
                <div>
                  <Rating value={4.4} readOnly />
                </div>
                <div>
                  <p className="text-sm text-[#596780]">440+ Reviewer</p>
                </div>
              </div>
            </div>
            <div>
              <HeartIconSolid className="scroll-effect h-7 w-7 text-red-500 cursor-pointer" />
            </div>
          </div>
          {/* desc */}
          <div>
            <p className="text-[#596780] leading-8 mt-5">
              NISMO has become the embodiment of Nissan's outstanding
              performance, inspired by the most unforgiving proving ground, the
              "race track".
            </p>
          </div>
          {/* Detail */}
          <div className="flex flex-wrap items-center gap-x-32 gap-y-4 mt-7">
            <div className="flex items-center justify-between w-[40%]">
              <p className="text-[#90A3BF] font-light">Type Car</p>
              <p className="text-[#596780]">{selectedItem?.category}</p>
            </div>
            <div className="flex items-center justify-between w-[40%]">
              <p className="text-[#90A3BF] font-light">Capacity</p>
              <p className="text-[#596780]">{selectedItem?.passengers}</p>
            </div>
            <div className="flex items-center justify-between w-[40%]">
              <p className="text-[#90A3BF] font-light">Steering</p>
              <p className="text-[#596780]">{selectedItem?.gear}</p>
            </div>
            <div className="flex items-center justify-between w-[40%]">
              <p className="text-[#90A3BF] font-light">Gasoline</p>
              <p className="text-[#596780]">{selectedItem?.gas}</p>
            </div>
          </div>
          {/* price */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex flex-col">
              <p className="font-bold text-3xl">
                ${selectedItem?.final_price} /{" "}
                <span className="text-sm text-[#90A3BF]">day</span>
              </p>
              {selectedItem?.off_price && (
                <span className="text-[#90A3BF] line-through	">
                  ${selectedItem?.off_price}
                </span>
              )}
            </div>
            <div>
              <button className="md:py-3 md:px-7 p-2 bg-[#3563E9] rounded-md text-white scroll-effect">
                Rental Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default carId;
