
import Image from "next/image";
import getProductData from "../../../sanity/getproductdata";
//import { client } from "../lib/sanityClient";
import { Image as IImage, Slug } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";

interface IProduct {
  title: string;
  desc: string;
  _id: string;
  category: {
    name: string;
  };
  price: number;
  image: IImage;
  slug: Slug;
}

export default async function Home() {
  const data: IProduct[] = await getProductData();
  console.log(data);
  return (
    <div className="grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(3,auto)] justify-center md:gap-x-5 lg:gap-x-10">
      {data.map((item, i) => (
        <div key={i + 1}>
          <Link href={`/product/${item._id}`}>
            <Image
              width={300}
              height={300}
              src={urlForImage(item.image).url()}
              alt="product"
            />

            <h1 className="bold font-mono"> {item.title}</h1>
            <h3> ${item.price}</h3>

            <button className="border my-3 w-26 text-sm  py-1.5 px-4 rounded bg-black text-white">
              Add to Cart
            </button>
          </Link>
        </div>
      ))}
      
    </div>
  );
}








// import Image from "next/image";
// import getProductData from "../../../sanity/getproductdata";
// //import { client } from "../lib/sanityClient";
// import { Image as IImage, Slug } from "sanity";
// import { urlForImage } from "../../../sanity/lib/image";
// import Link from "next/link";

// interface IProduct {
//   title: string;
//   desc: string;
//   _id: string;
//   category: {
//     name: string;
//   };
//   price: number;
//   image: IImage;
//   slug: Slug;
// }

// export default async function Home() {
//   const data: IProduct[] = await getProductData();
//   console.log(data);
//   return (
//     <div className="grid grid-cols-[repeat(1,auto)] md:grid-cols-[repeat(3,auto)] justify-center md:gap-x-5 lg:gap-x-10">
//       {data.map((item, i) => (
//         <div key={i + 1}>
//           <Link href={`/product/${item._id}`}>
//             <Image
//               width={300}
//               height={300}
//               src={urlForImage(item.image).url()}
//               alt="product"
//             />

//             <h1 className="bold font-mono"> {item.title}</h1>
//             <h3> ${item.price}</h3>

//             <button className="border my-3 w-26 text-sm  py-1.5 px-4 rounded bg-black text-white">
//               Add to Cart
//             </button>
//           </Link>
//         </div>
//       ))}
    
//     </div>
//   );
// }
