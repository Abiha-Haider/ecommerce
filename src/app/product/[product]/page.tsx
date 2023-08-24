import React from "react";
import getProductData from "../../../../sanity/getproductdata";
import { ProductDetails } from "@/components/ProductDetails"

export default async function page({ params }: { params: any}) {
    
    const data = await getProductData();
  const filteredData = data.find(
    (item: any) =>
      
            item._id == params.product
   
);
  return (
   <ProductDetails filteredData={filteredData}/>
    // <div className="grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(3,auto)] justify-center md:gap-x-5 lg:gap-x-10">
    //   {data.map((item, i) => (
    //     <div key={i + 1}>
    //       <Link href={`/product/${item._id}`}>
    //         <Image
    //           width={300}
    //           height={300}
    //           src={urlForImage(item.image).url()}
    //           alt="product"
    //         />

    //         <h1 className="bold font-mono"> {item.title}</h1>
    //         <h3> ${item.price}</h3>

    //         <button className="border my-3 w-26 text-sm  py-1.5 px-4 rounded bg-black text-white">
    //           Add to Cart
    //         </button>
    //       </Link>
    //     </div>
    //   ))}
    // </div>
  );
}
