import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <div className="relative grow mt-6 md:mt-0 md:ml-20 w-full">
      <div className="border rounded-full border-[#C3D4E9] w-full md:max-w-[350px]">
        <input
          className="pl-12 p-2 bg-transparent outline-none"
          placeholder="search somthing here"
        />
        <MagnifyingGlassIcon className="h-6 w-6 absolute top-2 left-2 text-[#C3D4E9]" />
      </div>
    </div>
  );
}

export default SearchBar;
