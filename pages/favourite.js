import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import CarItem from "../components/CarItem";

function Favourite() {
  const cars = useSelector((state) => state.carReducer.cars);
  const { locale } = useRouter();

  const isLikedItems = cars?.filter((car) => car.is_like);
  if (!isLikedItems.length) {
    return (
      <>
        <Head>
          <title>Rent Car Website / favourite </title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={`container mx-auto xl:max-w-screen-2xl flex flex-col gap-y-6 items-center justify-center mt-10 min-h-[300px] p-4 ${locale==="fa" && "font-iransans"}`}>
          <h2 className="font-bold text-2xl text-center dark:text-white">
            {locale === "en"
              ? "You Have not Added Any Cars to your Favorites List"
              : "شما هیچ خودرویی را به لیست علاقه مندی های خود اضافه نکرده اید"}
          </h2>
          <Link href="/">
            <button className="md:py-3 md:px-6 p-2 bg-[#3563E9] rounded-md text-white text-lg">
              {locale === "en" ? "Back to Homepage" : "بازگشت به صفحه اصلی"}
            </button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="container mx-auto xl:max-w-screen-2xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
      {isLikedItems.map((carItem) => {
        return (
          <CarItem heartIsShow={true} key={carItem.id} carItem={carItem} />
        );
      })}
    </div>
  );
}

export default Favourite;
