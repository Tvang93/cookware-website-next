import React from "react";
import NavbarComponent from "@/components/navbarComponent";
import ColorSelectionComponent from "@/components/ColorSelectionComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SubscriptionComponent from "@/components/SubscriptionComponent";

const page = () => {
  const startCookingCards = (num: number, text: string) => {
    return (
      <div className="flex flex-col">
        <div className="overflow-hidden rounded-lg max-h-100.5 max-w-95 hover:cursor-pointer">
          <img
            className="min-w-85 min-h-85 hover:scale-125"
            src={`/assets/StartCooking${num}.jpeg`}
            alt={text}
          />
        </div>
        <h2 className="text-4xl mt-4.5 font-bold">{text}</h2>
      </div>
    );
  };

  return (
    <div className="relative h-screen">
      {/* Navbar */}
      <div className="fixed w-full top-0 z-1">
        <NavbarComponent />
      </div>
      {/* Hero */}
      <div className="relative pt-34">
        <img src="/assets/hero.jpg" alt="hero img" />
        <div className="absolute bg-[rgba(0,0,0,0.6)] bottom-20 left-28 p-10">
          <p className="text-white text-4xl">Cookware Built To Last</p>
        </div>
      </div>
      {/* Sale Bar */}
      <div className="flex bg-[#1e2c20] justify-center items-center">
        <p className="text-white text-2xl my-8">
          Sale $10 off when you spend $150
        </p>
      </div>
      {/* body */}
      <div className="bg-[#ededed] ps-26 pe-36">
        {/* Start Cooking */}
        <div className="flex flex-col items-center ">
          <h1 className="text-6xl mt-28 mb-13 font-bold">Start Cooking</h1>
          <div className="grid grid-cols-4 gap-12">
            {startCookingCards(1, "Cast Iron Pot")}
            {startCookingCards(2, "Stock Pot")}
            {startCookingCards(3, "Sauce Pan")}
            {startCookingCards(4, "Accessories")}
          </div>
        </div>
        {/* New Arrivals */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl mt-28 mb-13 font-bold">New Arrivals</h1>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col items-start">
              <div className="hover:brightness-75 overflow-hidden lg:h-118 2xl:h-158  @min-[1600px]:w-201">
                <img
                  className="h-full w-full"
                  src="/assets/NewArrivals1.jpg"
                  alt="placing crock pot in oven"
                />
              </div>
              <h1 className="text-4xl font-bold mt-6">Fall Collection</h1>
              <p className="mt-4">
                Our 2023 Fall Collection just came out with beautiful autumn
                color cookware.
              </p>
              <div>
                <ColorSelectionComponent />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="hover:brightness-75 overflow-hidden lg:h-118 2xl:h-158  @min-[1600px]:w-201">
                <img src="/assets/NewArrivals2.jpg" alt="wok with food" />
              </div>
              <h1 className="text-4xl font-bold mt-6">Nonstick Wok 14 inch</h1>
              <p className="mt-4">
                The nonstick wok is one of our most popular cookware. Perfect
                for everyday stir fry.
              </p>
            </div>
          </div>
        </div>
        {/* Best Sellers */}
        <div className="flex flex-col items-center">
          <h1 className="text-6xl mt-28 mb-13 font-bold">Best Sellers</h1>
          <div className="grid grid-cols-3 gap-15">
            <div className="flex flex-col">
              <div className="flex flex-col border-1 rounded-[10px] p-6">
                <div className="rounded-[10px] overflow-hidden max-h-84.5">
                  <img
                    className="rounded-[10px] max-h-84.5 w-full hover:scale-125"
                    src="/assets/BestSeller1.jpg"
                    alt="red stock pot"
                  />
                </div>
                <h1 className="text-4xl font-bold mt-6">Stock Pot</h1>
                <p className="mt-6 max-w-84.5">
                  Our fall bakeware is back again with warm fall colors.Check
                  out our fall line of bakeware from fall colored pots to baking
                  pans.
                </p>
                <button className="border-1 hover:bg-[#1e2c20] hover:text-white py-2 mt-12 w-39">
                  SHOW NOW
                </button>
              </div>
              <div className="grow" />
            </div>
            <div className="flex flex-col border-1 rounded-[10px] p-6">
              <div className="rounded-[10px] overflow-hidden max-h-84.5">
                <img
                  className="rounded-[10px] max-h-84.5 w-full hover:scale-125"
                  src="/assets/BestSeller2.jpg"
                  alt="blue stock pot"
                />
              </div>
              <h1 className="text-4xl font-bold mt-6">Stock Pot</h1>
              <p className="mt-6 max-w-84.5">
                The Stock Pot is a cookware that is revolutionizing the way you
                cook! With its innovative design and advanced materials. The
                Stock Pot is the perfect choice for any kitchen. Its unique
                combination of ceramic and aluminum ensures that your food cooks
                evenly and quickly, while its non-stick coating ensures that
                nothing sticks to the surface. Whether you're cooking for one or
                the whole family, the Stock Pot is the perfect choice!
              </p>
              <button className="border-1 hover:bg-[#1e2c20] hover:text-white py-2 mt-12 w-39">
                SHOW NOW
              </button>
            </div>
            <div className="flex flex-col border-1 rounded-[10px] p-6">
              <div className="rounded-[10px] overflow-hidden max-h-84.5">
                <img
                  className="rounded-[10px] h-84.5 w-full hover:scale-125"
                  src="/assets/BestSeller3.jpg"
                  alt="sauce pan"
                />
              </div>
              <h1 className="text-4xl font-bold mt-6">Sauce Pan</h1>
              <p className="mt-6 max-w-84.5 grow">
                The Sauce Pan is the perfect cookware for making a variety of
                sauces, stews, soups, and more. Its stainless steel construction
                ensures even heat distribution for better and faster cooking. No
                matter what you're cooking, you can count on the Sauce Pan to
                help you cook like a pro.
              </p>
              <button className="border-1 hover:bg-[#1e2c20] hover:text-white py-2 mt-12 w-39">
                SHOW NOW
              </button>
            </div>
          </div>
        </div>
        {/* Reviews */}
        <div></div>
      </div>
      {/* Footer */}
      <div className="bg-[#1e2c20] ps-29 pe-40 pt-23 pb-18.5">
        <div className="flex justify-between">
          <div className="grid lg:grid-cols-3 gap-15">
            <ul className="text-white flex flex-col items-start gap-3.5">
              <h1 className="font-bold text-xl">ABOUT OUR HOME</h1>
              <li className="font-extralight cursor-pointer">ABOUT US</li>
              <li className="font-extralight cursor-pointer">CAREER</li>
              <li className="font-extralight cursor-pointer">PRIVACY</li>
              <li className="font-extralight cursor-pointer">MEDIA RELATION</li>
            </ul>
            <ul className="text-white flex flex-col items-start gap-3.5">
              <h1 className="font-bold text-xl">PRODUCTS</h1>
              <li className="font-extralight cursor-pointer">COOKWARE</li>
              <li className="font-extralight cursor-pointer">BAKEWARE</li>
              <li className="font-extralight cursor-pointer">BEST SELLERS</li>
              <li className="font-extralight cursor-pointer">ACCESSORIES</li>
            </ul>
            <ul className="text-white flex flex-col items-start gap-3.5">
              <h1 className="font-bold text-xl">CUSTOMER SERVICE</h1>
              <li className="font-extralight cursor-pointer">CONTACT US</li>
              <li className="font-extralight cursor-pointer">ORDER STATUS</li>
              <li className="font-extralight cursor-pointer">
                RETURNS & EXCHANGE
              </li>
              <li className="font-extralight cursor-pointer">FAQS</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3.5">
            <p className="text-white w-100">
              Subscribe to our newsletter to be the first to know about new
              products and special events.
            </p>
            <SubscriptionComponent />
            <div className="flex gap-2.5">
              <FontAwesomeIcon
                icon={faFacebookF}
                color="white"
                size="2x"
                className="max-h-8 w-10 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faTwitter}
                color="white"
                size="2x"
                className="max-h-8 w-10 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                size="2x"
                className="max-h-8 w-10 cursor-pointer"
              />
              <FontAwesomeIcon
                icon={faLinkedinIn}
                color="white"
                size="2x"
                className="max-h-8 w-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
