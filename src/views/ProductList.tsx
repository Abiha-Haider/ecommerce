import ProductCard from "@/components/ProductCard";
import product1 from "/public/whiteshirt.png";
import product2 from "/public/blackshirt.png";
import product3 from "/public/bomber.png";
import Image from "next/image";
import React from "react";
import Link from "next/link";
// import Wrapper from "@/components/shared/Wrapper";

const ProductList = () => {
  return (
    <div>
      <div className=" lg:mt-10 lg:p-10 lg:ml-40 lg:mr-40 justify-items-center ">
        <p className="text-md font-semibold lg:pl-60 lg:ml-20 justify-center mt-5">
          {" "}
          PRODUCTS
        </p>
        <p className="text-2xl font-semibold lg:pl-60 text-slate-800 text-left">
          {" "}
          Check What We Have
        </p>
      </div>

      <div className="sm:flex flex-col  lg:flex-row justify-evenly md:mt-5  ">
        <Link
          className="hover:scale-110 transition duration-500 cursor-pointer"
          href={"/"}
        >
          <ProductCard title="Flex Sweatshirt" price={175} img={product1} />
        </Link>
        <Link
          className="hover:scale-110 transition duration-500 cursor-pointer"
          href={"/"}
        >
          <ProductCard
            title="Brushed Raglan Sweatshirt"
            price={195}
            img={product2}
          />{" "}
        </Link>
        <Link
          className="hover:scale-110 transition duration-500 cursor-pointer"
          href={"/"}
        >
          <ProductCard
            title="
Cameryn Sash Tie Dress"
            price={545}
            img={product3}
          />
        </Link>
      </div>
    </div>
  );
};

export default ProductList;
