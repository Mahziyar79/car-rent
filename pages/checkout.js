import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Rating from "@mui/material/Rating";
import Car_1 from "../public/images/Car_1.jpg";
import Visa from "../public/images/Visa.png";
import { Divider } from "@mui/material";

function checkout() {
  const router = useRouter();
  const productData = router.query;

  return (
    <div className="container mx-auto xl:max-w-screen-2xl">
      <div className="flex md:flex-row flex-col-reverse  items-start gap-x-7 mt-5 xl:mx-0 mx-3">
        <div className="w-full lg:w-2/3">
          <div className="bg-white p-5 mb-8 rounded-lg">
            <h2 className="text-[#1A202C] font-bold text-lg">Billing Info</h2>
            <p className="text-[#90A3BF] mt-1 font-light">
              Please enter your billing info
            </p>
            <div className="flex flex-wrap items-center justify-between gap-y-4 mt-5">
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="name">Name</label>
                <input
                  name="name"
                  id="name"
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  name="phone_number"
                  id="phone_number"
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                  type="number"
                  placeholder="Phone number"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="address">Address</label>
                <input
                  name="address"
                  id="address"
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="town_city">Town / City</label>
                <input
                  name="town_city"
                  id="town_city"
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                  type="text"
                  placeholder="Town / City"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-5 mb-8 rounded-lg">
            <h2 className="text-[#1A202C] font-bold text-lg">Rental Info</h2>
            <p className="text-[#90A3BF] mt-1 font-light">
              Please select your rental date
            </p>
            <h2 className="text-[#1A202C] font-bold text-lg mt-5 mb-3">
              Pick - Up
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="pick_up_locations">Locations</label>
                <select
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                  id="pick_up_locations"
                  name="pick_up_locations"
                >
                  <option selected>Select your city</option>
                  <option value="FL">Florida</option>
                  <option value="TO">Toronto</option>
                  <option value="VA">Vancouver</option>
                  <option value="BE">Berlin</option>
                </select>
              </div>
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="pick_up_date">Date</label>
                <input
                  id="pick_up_date"
                  name="pick_up_date"
                  type="date"
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="pick_up_time">Time</label>
                <input
                  id="pick_up_time"
                  name="pick_up_time"
                  type="time"
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                  min="09:00"
                  max="24:00"
                />
              </div>
            </div>
            <h2 className="text-[#1A202C] font-bold text-lg mt-5 mb-3">
              Drop - Off
            </h2>
            <div className="flex flex-wrap items-center justify-between gap-y-4">
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="drop_off_locations">Locations</label>
                <select
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                  id="drop_off_locations"
                  name="drop_off_locations"
                >
                  <option selected>Select your city</option>
                  <option value="FL">Florida</option>
                  <option value="TO">Toronto</option>
                  <option value="VA">Vancouver</option>
                  <option value="BE">Berlin</option>
                </select>
              </div>
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="drop_off_date">Date</label>
                <input
                  id="drop_off_date"
                  name="drop_off_date"
                  type="date"
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-y-2 w-[47%]">
                <label htmlFor="drop_off_time">Time</label>
                <input
                  id="drop_off_time"
                  name="drop_off_time"
                  type="time"
                  className="bg-[#F6F7F9] py-3 px-4 outline-none text-sm rounded-lg"
                  min="09:00"
                  max="24:00"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-5 mb-8 rounded-lg">
            <h2 className="text-[#1A202C] font-bold text-lg">Payment Method</h2>
            <p className="text-[#90A3BF] mt-1 font-light">
              Please enter your payment method
            </p>
            <div className=" mt-5 bg-[#F6F7F9] rounded-lg p-5">
              <div className="flex items-center justify-between mb-6">
                <p className="font-bold">Credit Card</p>
                <Image
                  className="rounded-md object-cover"
                  src={Visa}
                  alt="Visa Image"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-y-4">
                <div className="flex flex-col gap-y-2 w-[47%]">
                  <label htmlFor="card_number">Card Number</label>
                  <input
                    name="card_number"
                    id="card_number"
                    className=" py-3 px-4 outline-none text-sm rounded-lg"
                    type="text"
                    placeholder="Card Number"
                  />
                </div>
                <div className="flex flex-col gap-y-2 w-[47%]">
                  <label htmlFor="expire_date">Expration Date</label>
                  <input
                    id="expire_date"
                    name="expire_date"
                    type="date"
                    className="py-3 px-4 outline-none text-sm rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-y-2 w-[47%]">
                  <label htmlFor="card_holder">Card Holder</label>
                  <input
                    name="card_holder"
                    id="card_holder"
                    className=" py-3 px-4 outline-none text-sm rounded-lg"
                    type="text"
                    placeholder="Card Holder"
                  />
                </div>
                <div className="flex flex-col gap-y-2 w-[47%]">
                  <label htmlFor="cvv">CVC</label>
                  <input
                    name="cvv"
                    id="cvv"
                    className=" py-3 px-4 outline-none text-sm rounded-lg"
                    type="text"
                    placeholder="CVC"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-5 mb-8 rounded-lg">
            <h2 className="text-[#1A202C] font-bold text-lg">Confirmation</h2>
            <p className="text-[#90A3BF] mt-1 font-light">
              We are getting to the end. Just few clicks and your rental is
              ready!
            </p>
            <div className="flex flex-wrap items-center justify-between gap-y-4 mt-5">
              <div className="flex gap-x-3 bg-[#F6F7F9] p-5 w-full rounded-lg">
                <input
                  name="agree_form"
                  id="agree_form"
                  className="py-3 px-4 outline-none text-sm rounded-lg"
                  type="checkbox"
                  placeholder="Your name"
                  required
                />
                <label htmlFor="agree_form">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </label>
              </div>
              <div className="flex gap-x-3 bg-[#F6F7F9] p-5 w-full rounded-lg">
                <input
                  name="agree_form1"
                  id="agree_form1"
                  className="py-3 px-4 outline-none text-sm rounded-lg"
                  type="checkbox"
                  placeholder="Your name"
                  required
                />
                <label htmlFor="agree_form1">
                  I agree with our terms and conditions and privacy policy.
                </label>
              </div>
              <button className="md:py-4 md:px-7 px-4 py-2 bg-[#3563E9] rounded-md text-white scroll-effect">
                Rental Now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white w-full lg:w-1/3 p-5 rounded-lg mb-5 md:mb-0">
          <h2 className="text-[#1A202C] font-bold text-lg">Rental Summary</h2>
          <p className="text-[#90A3BF] mt-1 font-light">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>
          <div className="flex items-center gap-x-4 mt-5">
            <Image
              className="rounded-md object-cover"
              src={Car_1}
              alt="Car_1 Image"
              width={150}
              height={150}
            />
            <div>
              <h3 className="text-xl xl:text-2xl font-bold">
                {productData?.name}
              </h3>
              <div className="flex flex-col items-start gap-x-2">
                <div>
                  <Rating value={4.4} readOnly />
                </div>
                <div>
                  <p className="text-sm text-[#596780]">440+ Reviewer</p>
                </div>
              </div>
            </div>
          </div>
          <Divider className="py-5" />
          <div className="mt-5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[#90A3BF]">Total Price : </span>
              <span>
                $
                {productData.off_price
                  ? productData.off_price
                  : productData.final_price}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#90A3BF]">Discount : </span>
              <span>
                $
                {productData.off_price
                  ? productData.off_price - productData.final_price
                  : 0}
                .00
              </span>
            </div>
          </div>
          <div className="bg-[#F6F7F9] py-3 px-6 rounded-lg flex items-center justify-between mt-4">
            <input
              className="bg-transparent outline-none"
              type="text"
              placeholder="Apply promo code"
            />
            <button>Apply now</button>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div>
              <p className="text-[#1A202C] font-bold text-xl mb-1">
                Total Rental Price
              </p>
              <p className="text-[#90A3BF] text-sm font-light">
                Overall price and includes rental discount
              </p>
            </div>
            <p className="text-[#1A202C] font-bold text-2xl">
              $
              {productData.off_price
                ? productData.off_price -
                  (productData.off_price - productData.final_price)
                : productData.final_price}
              .00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
