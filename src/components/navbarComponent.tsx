import React from "react";

const NavbarComponent = () => {
  return (
    <div className="relative flex justify-center items-center h-34 w-full bg-[#EDEDED] border-b-[1px] border-[#1e2c20]">
      <div className="absolute rounded-md bg-[#B73A2A] py-2 px-5 left-26 cursor-pointer">
        <img src="./assets/Icons/pot.png" alt="pot icon" />
      </div>
      <div className="flex gap-10 text-[22px] font-medium">
        <h1 className="text-[#282929] hover:underline hover:text-[#982A1C] cursor-pointer">COOKWARE</h1>
        <h1 className="text-[#282929] hover:underline hover:text-[#982A1C] cursor-pointer">BAKEWARE</h1>
        <h1 className="text-[#282929] hover:underline hover:text-[#982A1C] cursor-pointer">ACCESSORIES</h1>
        <h1 className="text-[#B73A2A] hover:underline hover:text-[#982A1C] cursor-pointer">SALE</h1>
      </div>
    </div>
  );
};

export default NavbarComponent;
