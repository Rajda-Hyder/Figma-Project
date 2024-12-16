"use client"
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname for App Router
import Link from "next/link";

import image1 from "../../../public/assets/icons/heart.svg";
import image2 from "../../../public/assets/icons/search.png";
import image3 from "../../../public/assets/icons/account.svg";
import CartDropdown from "../dropdown/page";

export default function Header() {
  const pathname = usePathname(); // Get the current path
  const isHomePage = pathname === "/"; // Check if the current page is Home

  return (
    <div>
      {/* Header Wrapper */}
      <div
        className={`flex flex-row-reverse w-[1440px] pr-44 pt-14  ${
          isHomePage ? "bg-[#FBEBB5]" : "bg-transparent"
        } transition-all duration-300`}
      >
        {/* Navigation Links */}
        <ul className="flex items-center justify-center -ml-20 font-poppins font-medium text-[16px] pt-8 absolute w-[430px] h-[24px] top-[38px] left-[505px] gap-[48px]">
          <Link href="/">
            <li >Home</li>
          </Link>
          <Link href="/Shop">
            <li >Shop</li>
          </Link>
          <Link href="/blog">
            <li >About</li>
          </Link>
          <Link href="/contact">
            <li >Contact</li>
          </Link>
        </ul>

        {/* Icons */}
        <ul className="flex justify-end gap-10 ml-40 left-[45px] pt-1 h-[28px] w-[247px]">
          <li>
            <Link href="/myAccount">
              <Image src={image3} alt="account" />
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <Image src={image2} alt="search" />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <Image src={image1} alt="heart" />
            </Link>
          </li>
          <li>
          
              <CartDropdown />
          
          </li>
        </ul>
      </div>
    </div>
  );
}
