import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import Wrapper from "@/components/shared/Wrapper";
import heroImage from "/public/girlheader.png";
import Image from "next/image";
import Brands from "./Brands";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row lg:ml-20 lg:gap-x-40 ">
      {/* left herosection */}
      <div className="flex-1">
        <Badge className="py-3  rounded-lg bg-blue-300 text-blue-700">
          70% Sale
        </Badge>
        <h1 className="mt-6 text-4xl font-extrabold  lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link href={"/app/allproducts/page.tsx"}>
          <Button className="bg-black  h-12 mt-4 ">Start Shopping</Button>
        </Link>

        <Brands />
      </div>
      {/* right herosection */}
      <div className="flex-1 shrink-0">
        <Image src={heroImage} alt="headerimage" width={500} height={500} />
      </div>
    </section>
  );
};

export default Hero;

