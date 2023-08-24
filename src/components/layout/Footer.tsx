import Image from "next/image";
// import { Instagram } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import logo from "/public/Logo.webp";
import Wrapper from "@/components/shared/Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row text-gray justify-around">
        <div className="p-5 text-gray-600">
          <ul>
            <div>
              <p className=" font-semibold text-lg pb-4">Follow Us</p>
              <p className="mb-5">
                <Link href={"/"}>
                  <Image src={logo} alt="logo" className="w-35" />
                </Link>
              </p>
              <div className="flex gap-6 pb-5">
                <FaInstagram className="text-2xl cursor-pointer hover:text-pink-700" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-700" />
                <FaGithub className="text-2xl cursor-pointer hover:text-black" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-700" />
              </div>
            </div>
            <p className="text-xs "> Designed by Sharmeen Fatima</p>
          </ul>
        </div>
        <div className="p-5 text-gray-600">
          <ul>
            <p className=" font-semibold text-lg  pb-4">Navigate</p>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              Home
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              Blog
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              FAQs
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              {" "}
              Media
            </li>
          </ul>
        </div>
        <div className="p-5 text-gray-600">
          <ul>
            <p className=" font-semibold text-lg  pb-4">Company</p>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              About Us
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              Contact Us
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              Store Locator
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
          </ul>
        </div>
        <div className="p-5 text-gray-600">
          <ul>
            <p className=" font-semibold text-lg pb-4 ">Support</p>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              Track Your Order
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              {" "}
              Customer Service
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              Shipping & Handling
            </li>
            <li className=" text-sm pb-2  hover:text-blue-600 cursor-pointer">
              Returns & Exchanges
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

