"use client";
import React, { useState } from "react";

import { TypographyTable } from "@/components/ui/table";
import { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { urlForImage } from "../../sanity/lib/image";
import { useAuth } from "@clerk/clerk-react";

export const ProductDetails = ({ filteredData }: { filteredData: any }) => {
  const { userId} = useAuth();
  const [quantity, setQuantity] = useState(1);

  function handleIncrement() {
    setQuantity(quantity + 1);
  }
  function handleDecrement() {
    setQuantity(quantity - 1);
  }

  async function handleAddToCart() {
    try {
      const res = await fetch("/api/cart", {
        method: "POST",
        body: JSON.stringify({
          user_id: userId,
          product_id: filteredData._id,
          product_title: filteredData.title,
          product_price: filteredData.price * quantity,
          product_quantity: quantity,
          image_url: urlForImage(filteredData.image).url(),
        }),
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="lg:mx-20 ml-10 mr-10">
      <div className="lg:flex lg:flex-row flex-col lg:gap-x-20 mx-auto">
        {/* IMAGE */}
        <div>
          <img
            key={filteredData._id}
            src={urlForImage(filteredData.image).url()}
            alt={filteredData.title}
            width={500}
            height={500}
          />
        </div>

        {/* PRODUCT */}
        <div>
          <h1 className=" font-bold text-xl mt-5"> {filteredData.title}</h1>
          <h4 className="text-gray-500"> {filteredData.category.name} </h4>
          <h1 className="font-semibold mt-3"> ${filteredData.price} </h1>

          {/* <div className="mt-5 lg:col-span-6"> */}
          <div className="flex border w-fit mt-5">
            <button
              onClick={() => handleDecrement()}
              disabled={quantity === 1}
              className={`px-3 py-1 text-center hover:bg-gray-200`}
            >
              -
            </button>
            <div className="px-3 py-1 text-center">{quantity}</div>
            <button
              onClick={() => handleIncrement()}
              className={`px-3 py-1 text-center hover:bg-gray-200`}
            >
              +
            </button>
          </div>
          {/* </div> */}

          <Button onClick={handleAddToCart} className="lg:my-5 my-2">
            Add to Cart
          </Button>
        </div>
      </div>
      {/* PRODUCT DETAILS */}
      <div>
        <h3 className="font-bold lg:my-5 text-xl mt-5">
          {" "}
          Product Information{" "}
        </h3>
        <h3 className="font-bold mt-5 "> Product Details </h3>

        <h3 className="text-sm text-gray-500 mr-5"> {filteredData.desc}</h3>
        <h3 className="font-bold mt-5 "> Product Care </h3>

        <ul className=" lg:ml-3 text-sm list-disc [&>li]:mt-0.5 text-gray-500">
          <li>Hand wash using cold water.</li>
          <li>Do not use bleach.</li>
          <li>Wash light and bright colours separately.</li>
        </ul>
      </div>
      {/* SIZE CHART */}
      <div>
        <div>
          <h1 className=" font-bold text-xl mt-5"> Size Chart</h1>
        </div>
        <TypographyTable></TypographyTable>
      </div>
      
    </div>
  );
};

// "use Client"
// import React, { useState } from "react";
// import { TypographyTable } from "@/components/ui/table";
// import { StaticImageData } from "next/image";
// import { Button } from "@/components/ui/button";
// import { urlForImage } from "../../sanity/lib/image";
// import { Image as IImage, Slug } from "sanity";
// // interface IProduct {
// //   title: string;
// //   desc: string;
// //   _id: string;
// //   category: {
// //     name: string;
// //   };
// //   price: number;
// //   image: IImage;
// //   slug: Slug;
// // }

// export const ProductDetails = ({ filteredData }: { filteredData: any }) => {
//   const [quantity, setQuantity] = useState(1);

//   // console.log("filteredData", filteredData);

//   function handleIncrement() {
//     setQuantity(quantity + 1);
//   }
//   function handleDecrement() {
//     setQuantity(quantity - 1);
//   }
//   async function handleAddToCart() {
//     try {
//       const res = await fetch("/api/cart", {
//         method: "POST",
//         body: JSON.stringify({
//           user_id: "qwertyuiop",
//           product_id: filteredData._id,
//           product_title: filteredData.title,
//           product_price: filteredData.price * quantity,
//           product_quantity: quantity,
//           image_url: urlForImage(filteredData.image).url(),
//         }),
//       });
//     } catch (error) {
//       console.log("error", error);
//     }
//   }
//   return (
//     <div className="mx-20">
//       <div className="flex gap-x-20 mx-auto">
//         {/* IMAGE */}
//         <div>
//           <img
//             key={filteredData._id}
//             src={urlForImage(filteredData.image).url()}
//             alt={filteredData.title}
//             width={500}
//             height={500}
//           />
//         </div>
//         {/* PRODUCT */}
//         <div>
//           <h1 className=" font-bold text-xl mt-5"> {filteredData.title}</h1>
//           {/* <h4 className="text-gray-500"> {filteredData.category.name} </h4> */}
//           <h1 className="font-semibold"> ${filteredData.price} </h1>
//           <div className="mt-5 lg:col-span-6">
//             <div className="flex border w-fit mt-5">
//               <button
//                 onClick={() => handleDecrement()}
//                 disabled={quantity === 1}
//                 className={`px-3 py-1 text-center hover:bg-gray-200`}
//               >
//                 -
//               </button>
//               <div className="px-3 py-1 text-center">{quantity}</div>
//               <button
//                 onClick={() => handleIncrement()}
//                 className={`px-3 py-1 text-center hover:bg-gray-200`}
//               >
//                 +
//               </button>
//             </div>

//           </div>
//           <Button className="my-5"> Add to Cart</Button>
//         </div>
//       </div>
//       {/* PRODUCT DETAILS */}
//       <div>
//         <h3 className="font-bold my-5 text-xl"> Product Information </h3>
//         <h3 className="font-bold "> Product Details </h3>

//         <h3 className="text-sm text-gray-500 "> {filteredData.desc}</h3>
//         <h3 className="font-bold mt-5 "> Product Care </h3>
//         <p>
//           <ul className=" ml-3 text-sm list-disc [&>li]:mt-0.5 text-gray-500">
//             <li>Hand wash using cold water.</li>
//             <li>Do not use bleach.</li>
//             <li>Wash light and bright colours separately.</li>
//           </ul>
//         </p>
//       </div>
//       {/* SIZE CHART */}
//       <div>
//         <div>
//           <h1 className=" font-bold text-xl mt-5"> Size Chart</h1>
//         </div>
//         <TypographyTable></TypographyTable>
//       </div>
//     </div>
//   );
// };
