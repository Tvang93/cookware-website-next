import React from "react";
import NavbarComponent from "@/components/navbarComponent";
import ColorSelectionComponent from "@/components/ColorSelectionComponent";

const page = () => {
  const startCookingCards = (num: number, text: string) => {
    return (
      <div className="flex flex-col">
        <div className="overflow-hidden rounded-lg h-87 w-68 hover:cursor-pointer">
          <img
            className="h-full hover:scale-125"
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
      {/* Start Cooking */}
      <div className="flex flex-col items-center bg-[#ededed]">
        <h1 className="text-6xl mt-28 mb-13 font-bold">Start Cooking</h1>
        <div className="flex gap-12">
          {startCookingCards(1, "Cast Iron Pot")}
          {startCookingCards(2, "Stock Pot")}
          {startCookingCards(3, "Sauce Pan")}
          {startCookingCards(4, "Accessories")}
        </div>
      </div>
      {/* New Arrivals */}
      <div className="flex flex-col items-center bg-[#ededed]">
        <h1 className="text-6xl mt-28 mb-13 font-bold">New Arrivals</h1>
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-start">
            <div className="">
              <img src="/assets/NewArrivals1.jpg" alt="placing crock pot in oven" />
            </div>
            <h1 className="text-4xl">Fall Collection</h1>
            <p>
              Our 2023 Fall Collection just came out with beautiful autumn color
              cookware.
            </p>
            <div>
              <ColorSelectionComponent />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div>
              <img src="/assets/NewArrivals2.jpg" alt="wok with food" />
            </div>
            <h1 className="text-4xl">Nonstick Wok 14 inch</h1>
            <p>
              The nonstick wok is one of our most popular cookware. Perfect for everyday stir fry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
