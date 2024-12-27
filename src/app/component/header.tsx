"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

import image1 from "../../../public/assets/icons/heart.svg";
import image2 from "../../../public/assets/icons/search.png";
import image3 from "../../../public/assets/icons/account.svg";
import CartDropdown from "../dropdown/page";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header>
      {/* Header Wrapper */}
      <div
        className={`flex flex-row-reverse w-full md:w-[1440px] md:pr-44 md:pt-14 ${
          isHomePage ? "bg-[#FBEBB5]" : "bg-transparent"
        } transition-all duration-300`}
      >
        {/* Navigation Links */}
        <ul
          className={`flex items-center justify-center font-poppins font-medium text-[16px] ${
            isHomePage ? "absolute top-[38px] left-[50%] translate-x-[-50%]" : ""
          } md:-ml-20 md:w-[430px] md:h-[24px] md:gap-[48px] ${
            isHomePage ? "hidden md:flex" : "flex flex-col gap-4 md:flex-row"
          }`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/Shop">Shop</Link>
          </li>
          <li>
            <Link href="/blog">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Icons */}
        <ul className="flex justify-end gap-4 md:gap-10 ml-4 md:ml-40 pt-1 h-[28px] w-auto md:w-[247px]">
          <li>
            <Link href="/myAccount">
              <Image src={image3} alt="account" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="/shop">
              <Image src={image2} alt="search" width={24} height={24} />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <Image src={image1} alt="heart" width={24} height={24} />
            </Link>
          </li>
          <li>
            <CartDropdown />
          </li>
        </ul>
      </div>
    </header>
  );
}
