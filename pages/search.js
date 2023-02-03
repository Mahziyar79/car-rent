import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import CarItem from "../components/CarItem";

function search() {
  const router = useRouter();
  const cars = useSelector((state) => state.carReducer.cars);
  const search = router.query.search;
  const searchItems = cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchItems);
  return (
    <div className="container mx-auto xl:max-w-screen-2xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
      {searchItems ? (
        searchItems?.map((carItem) => {
          return <CarItem key={carItem.id} carItem={carItem} />;
        })
      ) : (
        <h2 className="font-bold text-xl">Not Found Any Car</h2>
      )}
    </div>
  );
}

export default search;
