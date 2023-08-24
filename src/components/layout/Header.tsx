import Link from "next/link";
import logo from "/public/Logo.webp";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaAlignJustify } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <div className="flex justify-between items-center px-8 py-10 mb-5">
          <Link href={"/"} className="sm:justify-left">
            <Image src={logo} alt="logo" className="w-33" />
          </Link>

          <ul className="hidden md:flex md:gap-x-2 lg:gap-x-10">
            <li>
              <Link href={"/"}>Male </Link>{" "}
            </li>

            <li>
              <Link href={"/"}>Female </Link>{" "}
            </li>

            <li>
              <Link href={"/"}>Kids</Link>
            </li>

            <li>
              <Link href={"/allproducts"}>All Products </Link>
            </li>
          </ul>

          <div className="h-10 w-10 rounded-full bg-gray-200 md:flex justify-center items-center hidden ">
            <AiOutlineShoppingCart className="w-6 h-6 " />
          </div>

          <div className="md:hidden ">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <FaAlignJustify />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Male</DropdownMenuItem>
                <DropdownMenuItem>Female</DropdownMenuItem>
                <DropdownMenuItem>Kids</DropdownMenuItem>
                <Link href={"/allproducts"}>
                  <DropdownMenuItem>All Products</DropdownMenuItem>
                </Link>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

