import Head from "next/head";
import BannerHome from "../components/BannerHome";
import CarCart from "../components/CarCart";
import SearchCar from "../components/SearchCar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rent Car Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerHome />
      <SearchCar />
      <div className="container mx-auto xl:max-w-screen-2xl">
        <div className="flex items-center justify-between md:px-0 px-2">
          <p className="text-[#90A3BF]">Popular Car</p>
          <Link href="/cars" className="text-[#3563E9]">View All</Link>
        </div>
        <div className=" grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4">
          <CarCart />
        </div>
      </div>
    </>
  );
}
