'use client'

import React, { useState } from "react";

const ColorSelectionComponent = () => {
    const [color, setColor] = useState<string>("Apple Cinnamon")

  return (
    <div className="flex flex-col items-start">
      <div className="flex">
        <h2>Color: </h2>
        <p className="font-bold">{color}</p>
      </div>
      <div className="flex">
        <div
          className={`bg-[#ea2d2c] rounded-full h-5.5 w-5.5 ${color == "Apple Cinnamon" ? `border-1` : ``}`}
          onClick={() => setColor("Apple Cinnamon")}
        />
        <div 
        className={`bg-[#fb5108] rounded-full h-5.5 w-5.5 ${color == "Orange Mango" ? `border-1` : ``}`}
        onClick={() => setColor("Orange Mango")}
        />
        <div 
        className={`bg-[#d29d12] rounded-full h-5.5 w-5.5 ${color == "Lemon Meringue" ? `border-1` : ``}`}
        onClick={() => setColor("Lemon Meringue")}
        />
        <div 
        className={`bg-[#353535] rounded-full h-5.5 w-5.5 ${color == "Black" ? `border-1` : ``}`}
        onClick={() => setColor("Black")}
        />
      </div>
    </div>
  );
};

export default ColorSelectionComponent;
