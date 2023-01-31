import Image from "next/image";
import React from "react";
import Rating from "@mui/material/Rating";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Car_Detail1 from "../../public/images/Car_Detail1.jpg";
import Car_Detail2 from "../../public/images/Car_Detail2.jpg";
import Car_Detail3 from "../../public/images/Car_Detail3.jpg";
import { carItems } from "../../server/cartItems";
import { useRouter } from "next/router";
import ProfileImage from "../../public/images/image-profile.png";
import ReviewImg from "../../public/images/review-img-2.png";
import Link from "next/link";
import CarCart from "../../components/CarCart";

function carId() {
  const {query} = useRouter();


  const selectedItem = carItems.find((item) => item.id == query.carId);
  console.log(selectedItem);
  return (
    <div className="container mx-auto xl:max-w-screen-2xl ">
      <div className="flex md:flex-row flex-col items-start my-7 gap-x-8 m-4">
        <div className="md:w-1/2 w-full">
          <Image
            className="rounded-md"
            src={selectedItem?.img}
            alt="Car_Detail1 Image"
          />
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
        <div className="bg-white rounded-lg p-8 mt-5 md:mt-0 md:p-10 w-full md:w-1/2">
          {/* title */}
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-2xl md:text-3xl font-bold">
                {selectedItem?.name}
              </h1>
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
            <div className="flex items-center justify-between md:w-[40%] w-[100%]">
              <p className="text-[#90A3BF] font-light">Type Car</p>
              <p className="text-[#596780]">{selectedItem?.category}</p>
            </div>
            <div className="flex items-center justify-between md:w-[40%] w-[100%]">
              <p className="text-[#90A3BF] font-light">Capacity</p>
              <p className="text-[#596780]">{selectedItem?.passengers}</p>
            </div>
            <div className="flex items-center justify-between md:w-[40%] w-[100%]">
              <p className="text-[#90A3BF] font-light">Steering</p>
              <p className="text-[#596780]">{selectedItem?.gear}</p>
            </div>
            <div className="flex items-center justify-between md:w-[40%] w-[100%]">
              <p className="text-[#90A3BF] font-light">Gasoline</p>
              <p className="text-[#596780]">{selectedItem?.gas}</p>
            </div>
          </div>
          {/* price */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex flex-col">
              <p className="font-bold md:text-3xl text-2xl">
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
              {selectedItem && (
                <Link
                  href={{
                    pathname: "/checkout",
                    query: selectedItem,
                  }}
                >
                  <button className="md:py-4 md:px-7 px-4 py-2 bg-[#3563E9] rounded-md text-white scroll-effect">
                    Rental Now
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg">
        <div className="flex items-center gap-x-3 mb-10">
          <p className="text-xl font-bold">Reviews</p>
          <span className="bg-[#3563E9] text-white py-1 px-5 rounded-lg">
            13
          </span>
        </div>
        {/* review item */}
        <div className="flex items-start gap-x-7 mb-8">
          <div className="hidden md:block">
            <Image
              className="scroll-effect"
              src={ProfileImage}
              alt="Logo Image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xl">Alex Stanton</p>
                <p className="text-[#90A3BF]">CEO at Bukalapak</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p>21 July 2022</p>
                <Rating value={4.4} readOnly />
              </div>
            </div>
            <p>
              We are very happy with the service from the MORENT App. Morent has
              a low price and also a large variety of cars with good and
              comfortable facilities. In addition, the service provided by the
              officers is also very friendly and very polite.
            </p>
          </div>
        </div>
        {/* review item */}
        <div className="flex items-start gap-x-7 mb-8">
          <div className="hidden md:block">
            <Image
              className="scroll-effect"
              src={ReviewImg}
              alt="Logo Image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xl">Skylar Dias</p>
                <p className="text-[#90A3BF]">CEO at Amazon</p>
              </div>
              <div className="flex flex-col items-end justify-end">
                <p>20 July 2022</p>
                <Rating value={5} readOnly />
              </div>
            </div>
            <p>
              We are greatly helped by the services of the MORENT Application.
              Morent has low prices and also a wide variety of cars with good
              and comfortable facilities. In addition, the service provided by
              the officers is also very friendly and very polite.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between md:px-0 px-2 mt-14">
        <p className="text-[#90A3BF]">Recomendation Car</p>
        <Link href="/cars" className="text-[#3563E9]">
          View All
        </Link>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
        <CarCart sliceNubmer={4} />
      </div>
    </div>
  );
}

export default carId;
