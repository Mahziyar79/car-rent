import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/solid";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { CogIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Car1 from "../public/images/car1.png";
import { carItems } from "../server/cartItems";
import Link from "next/link";

function CarCart() {
  return (
    <>
      {carItems?.map((carItem) => {
        return (
          <section
            className="bg-white p-5 rounded-lg shadow-sm mx-2 md:mx-0"
            key={carItem.id}
          >
            <div className="flex items-start justify-between">
              <div>
                <h4 className="font-bold text-xl">{carItem.name}</h4>
                <span className="text-[#90A3BF] text-sm">
                  {carItem.category}
                </span>
              </div>
              {carItem.is_like ? (
                <HeartIconSolid className="scroll-effect h-6 w-6 text-red-500 cursor-pointer" />
              ) : (
                <HeartIcon className="scroll-effect h-6 w-6 text-[#90A3BF] cursor-pointer" />
              )}
            </div>
            <div className="relative mb-10">
              <Image className="mx-auto mt-14" src={Car1} alt="Car1" />
              <span className="cart-shadow"></span>
            </div>
            <div className="flex items-center justify-around">
              <div className="flex items-center gap-x-1">
                <FunnelIcon className="scroll-effect h-6 w-6 text-[#90A3BF] cursor-pointer" />
                <span className="text-[#90A3BF]">{carItem.gas}</span>
              </div>
              <div className="flex items-center gap-x-1">
                <CogIcon className="scroll-effect h-6 w-6 text-[#90A3BF] cursor-pointer" />
                <span className="text-[#90A3BF]">{carItem.gear}</span>
              </div>
              <div className="flex items-center gap-x-1">
                <UserGroupIcon className="scroll-effect h-6 w-6 text-[#90A3BF] cursor-pointer" />
                <span className="text-[#90A3BF]">{carItem.passengers}</span>
              </div>
            </div>
            <div className="flex items-center justify-around mt-6">
              <div className="flex flex-col">
                <p className="font-bold text-2xl">
                  ${carItem.final_price} /{" "}
                  <span className="text-xs text-[#90A3BF]">day</span>
                </p>
                {carItem.off_price && (
                  <span className="text-sm text-[#90A3BF] line-through	">
                    ${carItem.off_price}
                  </span>
                )}
              </div>
              <div>
                <Link href={`/cars/${carItem.id}`}>
                  <button className="md:py-2 md:px-4 p-2 bg-[#3563E9] rounded-md text-white text-sm">
                    Rental Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default CarCart;
