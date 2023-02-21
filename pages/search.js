import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import CarItem from "../components/CarItem";

function Search() {
  const router = useRouter();
  const { locale } = useRouter();
  const cars = useSelector((state) => state.carReducer.cars);
  const search = router.query.search;
  const searchItems = cars.filter((car) =>
    car.name.toLowerCase().includes(search?.toLowerCase())
  );

  return (
    <div className={`container mx-auto xl:max-w-screen-2xl mt-8 ${locale==="fa" && "font-iransans"}`}>
      <h2 className="text-center text-2xl mb-4 dark:text-white">
        {locale==="en" ? "You Searched for :" : "واژه سرچ شده :"} <span className="font-bold">{search}</span>
      </h2>

      <div className=" grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
        {searchItems.length ? (
          searchItems?.map((carItem) => {
            return <CarItem key={carItem.id} carItem={carItem} />;
          })
        ) : (
          <div className="flex flex-col items-center justify-center col-span-4 md:min-h-[240px]">
            <h2 className="font-bold text-xl text-center col-span-4 mt-10 dark:text-white">{`${locale === "en" ? "Not Found Any Car" : "خودرویی پیدا نشد "}`}</h2>
            <Link href="/">
              <button className="md:py-3 md:px-4 p-2 bg-[#3563E9] rounded-md text-white mt-5">
              {locale === "en" ? "Back to Homepage" : "بازگشت به صفحه اصلی"}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
