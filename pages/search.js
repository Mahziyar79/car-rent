import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import CarItem from "../components/CarItem";

function Search() {
  const router = useRouter();
  const cars = useSelector((state) => state.carReducer.cars);
  const search = router.query.search;
  const searchItems = cars.filter((car) =>
    car.name.toLowerCase().includes(search?.toLowerCase())
  );

  return (
    <div className="container mx-auto xl:max-w-screen-2xl mt-8">
      <h2 className="text-center text-2xl mb-4 dark:text-white">
        You Searched for : <span className="font-bold">{search}</span>
      </h2>

      <div className=" grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
        {searchItems.length ? (
          searchItems?.map((carItem) => {
            return <CarItem key={carItem.id} carItem={carItem} />;
          })
        ) : (
          <div className="flex flex-col items-center justify-center col-span-4 md:min-h-[240px]">
            <h2 className="font-bold text-xl text-center col-span-4 mt-10 dark:text-white">{`Not Found Any Car :(`}</h2>
            <Link href="/">
              <button className="md:py-3 md:px-4 p-2 bg-[#3563E9] rounded-md text-white mt-5">
                Back to Homepage
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
