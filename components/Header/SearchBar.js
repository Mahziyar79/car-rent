import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function SearchBar() {
  return (
    <div className=" relative grow ml-20">
      <div className="border rounded-full	border-[#C3D4E9] max-w-[350px]">
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
