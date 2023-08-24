import React from "react";
import brand1 from "/public/Featured1.webp";
import brand2 from "/public/Featured2.webp";
import brand3 from "/public/Featured3.webp";
import brand4 from "/public/Featured4.webp";
import Image from "next/image";

const Brands = () => {
  return (
    <div className="flex flex-col gap-y-2 items-center mb-8 mt-5 md:flex-row gap-x-5 md:mt-20 justify-between  ">
      <Image src={brand1} alt="brand1" />
      <Image src={brand2} alt="brand2" />
      <Image src={brand3} alt="brand3" />
      <Image src={brand4} alt="brand4" />
    </div>
  );
};

export default Brands;
