"use client";

import Link from "next/link";
import logo from "/public/Logo.webp";
import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaAlignJustify } from "react-icons/fa";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <Wrapper>
      <div>
        <div className="flex justify-between items-center px-8 py-10 mb-5">
          <Link href={"/"} className="sm:justify-left">
            <Image src={logo} alt="logo" className="w-33" />
          </Link>

          <ul className="hidden lg:flex md:gap-x-2 lg:gap-x-10">
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

          <div className="flex justify-between">
            {!isSignedIn && (
              <SignInButton mode="modal">
                <button className="bg-black text-white lg:px-4 lg:py-2 p-1 text-xs md:text-sm md:font-semibold">
                  Sign In
                </button>
              </SignInButton>
            )}
            <UserButton afterSignOutUrl="/" />
          </div>

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
