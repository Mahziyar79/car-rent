import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImage from "../../public/images/Logo.png";

function Footer() {
  return (
    <footer className="bg-white px-10 py-14 md:py-5 shadow-sm mt-80">
      <div className="container mx-auto xl:max-w-screen-2xl flex md:flex-row flex-col items-center justify-between border-b-2 md:py-10">
        <div className="grow flex flex-col items-center md:items-start mb-10 md:mb-0">
          <Image
            className="scroll-effect mb-5"
            src={LogoImage}
            alt="Logo Image"
            width={140}
            height={140}
          />
          <p className="md:w-80 md:text-left text-center">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex md:flex-row md:flex-nowrap flex-wrap items-center justify-between grow md:w-auto w-full">
          <div className="py-5">
            <h2 className="font-bold text-xl mb-4">About</h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b]">
              <Link href="#">
                <li>How it works</li>
              </Link>
              <Link href="#">
                <li>Featured</li>
              </Link>
              <Link href="#">
                <li>Partnership</li>
              </Link>
              <Link href="#">
                <li>Bussiness Relation</li>
              </Link>
            </ul>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-xl mb-6">Community</h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b]">
              <Link href="#">
                <li>Events</li>
              </Link>
              <Link href="#">
                <li>Blog</li>
              </Link>
              <Link href="#">
                <li>Podcast</li>
              </Link>
              <Link href="#">
                <li>Invite a friend</li>
              </Link>
            </ul>
          </div>
          <div className="py-5">
            <h2 className="font-bold text-xl mb-6">Socials</h2>
            <span className="mb-4 w-7 h-[2px] bg-gray-200 block"></span>
            <ul className="flex flex-col gap-y-5 text-[#4b4b4b]">
              <Link href="#">
                <li>Discord</li>
              </Link>
              <Link href="#">
                <li>Instagram</li>
              </Link>
              <Link href="#">
                <li>Twitter</li>
              </Link>
              <Link href="#">
                <li>Facebook</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto xl:max-w-screen-2xl flex flex-col md:flex-row items-center justify-between pt-10 md:pb-6 font-bold text-center gap-y-10">
        <div>
          <p>©2023 Car Rent Company. All rights reserved</p>
        </div>
        <div className="flex items-center justify-between gap-x-12 flex-col md:flex-row gap-y-4 text-sm">
          <Link href="#">
            <p>Privacy & Policy</p>
          </Link>
          <Link href="#">
            <p>Terms & Condition</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
