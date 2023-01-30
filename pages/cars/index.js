import React, { useState } from "react";
import SelectBox from "../../common/SelectBox";
import CarCart from "../../components/CarCart";
import SearchCar from "../../components/SearchCar";
import Slider from "@mui/material/Slider";
import GetLowHighPrice from "../../common/GetLowHighPrice";

function index() {
  //   const repetitiveItem = (item) => {
  //     let counter = [];

  //     carItems.forEach(function (obj) {
  //       var key = JSON.stringify(obj[item]);
  //       counter[key] = (counter[key] || 0) + 1;
  //     });
  //     return counter;
  //   };
  const [value, setValue] = useState([0, GetLowHighPrice().max]);
  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="grid grid-cols-5 gap-5">
      <div className="hidden lg:block bg-white p-8 col-span-1 shadow-sm">
        <div>
          <p className="mb-3 text-gray-400">TYPE</p>
          <SelectBox title="Sport" quantity={2} />
          <SelectBox title="Sedan" quantity={1} />
          <SelectBox title="SUV" quantity={4} />
          <SelectBox title="Hatchback" quantity={1} />
          {/* {categories?.map((cat) => {
            return (
              <SelectBox
                key={cat.id}
                title={cat.category}
                quantity={cat.quantity}
              />
            );
          })} */}
          <p className="mb-3 mt-8 text-gray-400">CAPACITY</p>
          <SelectBox title="4 People" quantity={2} />
          <SelectBox title="2 People" quantity={2} />
          <SelectBox title="6 People" quantity={4} />
        </div>
        <p className="mb-12 mt-10 text-gray-400">Select your Price Range :</p>

        <Slider
          value={value}
          onChange={rangeSelector}
          valueLabelDisplay="on"
          step={5}
          
          max={GetLowHighPrice().max}
        />
        <p className="text-sm">Start Price : {value[0]} $</p>
        <p className="text-sm my-2">Final Price : {value[1]} $</p>
        <button
          className="bg-[#3563E9] w-full text-sm rounded-md border-2 border-[#3563E9] text-white p-1 hover:bg-white hover:text-[#3563E9] transition-all duration-200"
        >
          SUBMIT
        </button>
      </div>

      <div className="pr-3 lg:col-span-4 col-span-5">
        <SearchCar />
        <div className="container mx-auto xl:max-w-screen-2xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <CarCart />
        </div>
      </div>
    </div>
  );
}

export default index;
