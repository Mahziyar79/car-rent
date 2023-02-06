import React from "react";
import { ArrowsUpDownIcon } from "@heroicons/react/24/outline";

function SearchCar() {
  return (
    <section className="px-5">
      <div className="container mx-auto xl:max-w-screen-2xl md:flex lg:flex-row flex-col items-center justify-between my-12 gap-y-4 block">
        <div className="flex items-center justify-between dark:bg-[#243137] dark:text-white bg-white p-4 md:w-full lg:w-[45%] rounded-lg shadow-sm">
          <div className="border-r border-gray-200 px-2 lg:px-6 w-[33%]">
            <h2 className="text-base md:text-lg">Locations</h2>

            <select className="py-2.5 px-0 w-full text-sm text-[#90A3BF] bg-transparent border-0 focus:outline-none focus:ring-0 focus:border-gray-200">
              <option selected>Select your city</option>
              <option value="FL">Florida</option>
              <option value="TO">Toronto</option>
              <option value="VA">Vancouver</option>
              <option value="BE">Berlin</option>
            </select>
          </div>
          <div className="border-r border-gray-200 px-2 lg:px-6 w-[33%]">
            <h2 className="text-base md:text-lg">Date</h2>
            <input
              type="date"
              className="py-2.5 px-0 w-full text-sm text-[#90A3BF] bg-transparent border-0 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>
          <div className="w-[33%] px-4">
            <h2 className="text-base md:text-lg">Time</h2>
            <input
              type="time"
              className="py-2.5 px-0 w-full text-sm text-[#90A3BF] bg-transparent border-0 focus:outline-none focus:ring-0 focus:border-gray-200"
              min="09:00"
              max="24:00"
            />
          </div>
        </div>
        <div>
          <ArrowsUpDownIcon className="my-4 mx-auto table md:my-0 scroll-effect cursor-pointer h-16 w-16 bg-[#3563E9] text-white p-4 rounded-xl" />
        </div>
        <div className="flex items-center justify-between dark:bg-[#243137] dark:text-white bg-white p-4 md:w-full lg:w-[45%] rounded-lg shadow-sm">
          <div className="border-r border-gray-200 px-2 lg:px-6 w-[33%]">
            <h2 className="text-base md:text-lg">Locations</h2>

            <select className="py-2.5 px-0 w-full text-sm text-[#90A3BF] bg-transparent border-0 focus:outline-none focus:ring-0 focus:border-gray-200">
              <option selected>Select your city</option>
              <option value="FL">Florida</option>
              <option value="TO">Toronto</option>
              <option value="VA">Vancouver</option>
              <option value="BE">Berlin</option>
            </select>
          </div>
          <div className="border-r border-gray-200 px-2 lg:px-6 w-[33%]">
            <h2 className="text-base md:text-lg">Date</h2>
            <input
              type="date"
              className="py-2.5 px-0 w-full text-sm text-[#90A3BF] bg-transparent border-0 focus:outline-none focus:ring-0 focus:border-gray-200"
            />
          </div>
          <div className="w-[33%] px-4">
            <h2 className="text-base md:text-lg">Time</h2>
            <input
              type="time"
              className="py-2.5 px-0 w-full text-sm text-[#90A3BF] bg-transparent border-0 focus:outline-none focus:ring-0 focus:border-gray-200"
              min="09:00"
              max="24:00"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchCar;
