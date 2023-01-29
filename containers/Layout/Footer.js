import Image from "next/image";
import React from "react";
import LogoImage from "../../public/images/Logo.png";

function Footer() {
  return (
    <footer className="bg-white px-10 py-14 md:py-5 shadow-sm mt-80">
      <div className="container mx-auto xl:max-w-screen-2xl flex md:flex-row flex-col items-center justify-between border-b-2 md:py-10">
        <div className="grow flex flex-col items-center md:items-start">
          <Image
            className="scroll-effect mb-5"
            src={LogoImage}
            alt="Logo Image"
            width={140}
            height={140}
          />
          <p className="md:w-80 w-72 md:text-left text-center">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-between grow">
          <div className="py-5 w-full">
            <h2 className="font-bold text-xl mb-4">About</h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b]">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Bussiness Relation</li>
            </ul>
          </div>
          <div className="py-5 w-full">
            <h2 className="font-bold text-xl mb-6">Community</h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b]">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>
          <div className="py-5 md:w-auto w-full">
            <h2 className="font-bold text-xl mb-6">Socials</h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b]">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto xl:max-w-screen-2xl flex items-center justify-between pt-10 pb-6 font-bold">
        <div>
          <p>©2023 Car Rent Company. All rights reserved</p>
        </div>
        <div className="flex items-center justify-between gap-x-12">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
