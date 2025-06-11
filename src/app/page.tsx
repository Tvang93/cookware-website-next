import React from "react";
import NavbarComponent from "@/components/navbarComponent";
import ColorSelectionComponent from "@/components/ColorSelectionComponent";

const page = () => {
  const startCookingCards = (num: number, text: string) => {
    return (
      <div className="flex flex-col">
        <div className="overflow-hidden rounded-lg max-h-100.5 max-w-95 hover:cursor-pointer">
          <img
            className="w-85 h- hover:scale-125"
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
      <div className="bg-[#ededed] ps-29 pe-40">
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
          <div>
            <div>cards</div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="bg-[#1e2c20] ps-29 pe-40">
        <div className="flex justify-between">
          <div className="grid lg:grid-cols-3 gap-15">
            <ul className="text-white flex flex-col items-start">
              <h1 className="font-bold text-xl">ABOUT OUR HOME</h1>
              <li className="font-extralight">ABOUT US</li>
              <li className="font-extralight">CAREER</li>
              <li className="font-extralight">PRIVACY</li>
              <li className="font-extralight">MEDIA RELATION</li>
            </ul>
            <ul className="text-white flex flex-col items-start">
              <h1 className="font-bold text-xl">PRODUCTS</h1>
              <li className="font-extralight">COOKWARE</li>
              <li className="font-extralight">BAKEWARE</li>
              <li className="font-extralight">BEST SELLERS</li>
              <li className="font-extralight">ACCESSORIES</li>
            </ul>
            <ul className="text-white flex flex-col items-start">
              <h1 className="font-bold text-xl">CUSTOMER SERVICE</h1>
              <li className="font-extralight">CONTACT US</li>
              <li className="font-extralight">ORDER STATUS</li>
              <li className="font-extralight">RETURNS & EXCHANGE</li>
              <li className="font-extralight">FAQS</li>
            </ul>
          </div>
          <div>
            <p>Subscribe to our newsletter to be the first to know about new products and special events.</p>
            <div>
              <input type="email" placeholder="Enter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
