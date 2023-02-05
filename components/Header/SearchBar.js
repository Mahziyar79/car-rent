import React, { useState } from "react";
import { MagnifyingGlassIcon , AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();
  const goToSearchPage = () => {
    if (!searchValue) {
      toast.error("Enter Some Data First");
      return;
    } else {
      router.push({
        pathname: "/search",
        query: { search: searchValue },
      });
      setSearchValue("")
    }
  };
  return (
    <div className=" grow mt-6 md:mt-0 md:ml-20 w-full">
      <div className="border rounded-full border-[#C3D4E9] w-full md:max-w-[350px] ring-offset-1 ring-2 ring-gray-200 relative dark:ring-0">
        <input
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className="pl-12 p-2 bg-transparent outline-none font-light"
          placeholder="search somthing here"
        />
        <AdjustmentsHorizontalIcon className="h-6 w-6 absolute top-2 right-3 text-[#9caaba]" />
        <MagnifyingGlassIcon
          onClick={() => goToSearchPage()}
          className="scroll-effect h-6 w-6 absolute top-2 left-2 text-[#C3D4E9]"
        />
      </div>
    </div>
  );
}

export default SearchBar;
