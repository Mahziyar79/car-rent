import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/solid";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import { CogIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../redux/addCars/carSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function CarItem({ carItem, heartIsShow }) {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.carReducer.darkMode);
  const { locale } = useRouter();

  const dispatchAddFavourite = () => {
    dispatch(addLike(carItem.id));
    if (carItem.is_like) {
      {
        locale === "en"
          ? toast.error("successfully deleted!")
          : toast.error("با موفقیت حذف شد!");
      }
    } else {
      {
        locale === "en"
          ? toast.success("successfully added!")
          : toast.success("با موفقیت اضافه شد!");
      }
    }
  };
  
  return (
    <section
      className={`bg-white dark:bg-[#243137] p-5 rounded-lg shadow-sm mx-2 md:mx-0 dark:text-white ${locale==="fa" && "font-iransans"}`}
      key={carItem.id}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-bold text-xl font-sans">{carItem.name}</h4>
          <span className="text-[#90A3BF] text-sm">
            {locale === "en" ? carItem.category : carItem.category_fa}
          </span>
        </div>
        {heartIsShow ? (
          carItem.is_like ? (
            <HeartIconSolid
              onClick={() => dispatchAddFavourite()}
              className="scroll-effect h-6 w-6 text-red-500 cursor-pointer"
            />
          ) : (
            <HeartIcon
              onClick={() => dispatchAddFavourite()}
              className="scroll-effect h-6 w-6 text-[#90A3BF] cursor-pointer"
            />
          )
        ) : (
          ""
        )}
      </div>
      <div className="relative mb-10">
        <Image
          className="mx-auto mt-5 object-cover rounded-lg !h-52"
          src={carItem.img}
          alt="Car1"
        />
        <span
          className={`${
            darkMode ? "cart-shadow-dark" : "cart-shadow"
          } dark:rounded-b-md`}
        ></span>
      </div>
      <div className="flex items-center justify-around">
        <div className="flex items-center gap-x-1">
          <FunnelIcon className="scroll-effect h-6 w-6 text-[#90A3BF] cursor-pointer" />
          <span className="text-[#90A3BF]">
            {locale === "en" ? carItem.gas : carItem.gas_fa}
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <CogIcon className="scroll-effect h-6 w-6 text-[#90A3BF] cursor-pointer" />
          <span className="text-[#90A3BF]">
            {locale === "en" ? carItem.gear : carItem.gear_fa}
          </span>
        </div>
        <div className="flex items-center gap-x-1">
          <UserGroupIcon className="scroll-effect h-6 w-6 text-[#90A3BF] cursor-pointer" />
          <span className="text-[#90A3BF]">
            {locale === "en" ? carItem.passengers : carItem.passengers_fa}
          </span>
        </div>
      </div>
      <div className="flex items-center justify-around mt-6">
        <div className="flex flex-col font-sans">
          <p className="font-bold text-2xl">
            ${carItem.final_price}.00 /{" "}
            <span className={`text-xs text-[#90A3BF] ${locale==="fa" && "!font-iransans"}`}>{locale === "en" ? "day" : "روز"}</span>
          </p>
          {carItem.off_price && (
            <span className="text-sm text-[#90A3BF] line-through	">
              ${carItem.off_price}
            </span>
          )}
        </div>
        <div>
          <Link href={`/cars/${carItem.id}`}>
            <button className={`md:py-2 md:px-4 p-2 bg-[#3563E9] rounded-md text-white text-sm font-sans ${locale==="fa" && "!font-iransans"}`}>
            {locale === "en" ? "Rental Now" : "اجاره کنید"}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CarItem;
