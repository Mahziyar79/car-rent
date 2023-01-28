import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BellAlertIcon } from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";

function Notifications() {
  return (
    <div className="hidden md:flex md:gap-x-5">
      <HeartIcon className="h-8 w-8 text-gray-600 border border-gray-600 rounded-full p-1" />
      <div className="relative">
        <BellAlertIcon className="h-8 w-8 text-gray-600 border border-gray-600 rounded-full p-1" />
        <span className="bg-red-600 text-white rounded-full text-xs absolute -top-1 -right-2 w-4 h-4 flex items-center justify-center">
          1
        </span>
      </div>
      <Cog6ToothIcon className="h-8 w-8 text-gray-600 border border-gray-600 rounded-full p-1" />
    </div>
  );
}

export default Notifications;
