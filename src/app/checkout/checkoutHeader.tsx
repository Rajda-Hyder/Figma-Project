// components/CheckoutHeader.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import shop from "../../../public/assets/shopimages/shop1pic.png";
import logo from "../../../public/assets/checkout/checkoutlogo.png";
import small from "../../../public/assets/shopimages/shopSlogo.png";

const CheckoutHeader = () => {
  return (
    <div className="relative bg-white w-full pt-10">
      <Image src={shop} alt="shop" className="h-[316px] w-full" />
      <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <li>
          <Image src={logo} alt="logo" />
        </li>
        <li className="flex font-poppins pb-20 ml-14">
          <Link href="/">
            <span className="font-medium text-[16px] leading-[24px]">Home</span>
          </Link>
          <Image src={small} alt="small" className="w-[14px] h-[8px] m-2" />
          <Link href="/Shop">
            <span className="font-light text-[16px] leading-[24px]">Shop</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default CheckoutHeader;
