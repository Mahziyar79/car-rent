import Image from "next/image";
import Link from "next/link";
import React from "react";
import NotFoundImage from "../public/images/404.png";

function NotFoundPage() {
  return (
    <div className="container mx-auto xl:max-w-screen-2xl flex flex-col items-center justify-center mt-10">
      <Image
        className="rounded-md w-1/2"
        src={NotFoundImage}
        alt="Car_Detail1 Image"
      />
      <Link href="/">
        <button className="md:py-4 md:px-6 p-2 bg-[#3563E9] rounded-md text-white text-lg mt-5">
          Back to Homepage
        </button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
