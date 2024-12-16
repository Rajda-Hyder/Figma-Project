import Image from "next/image";
import Link from "next/link";
import shop from "../../../public/assets/shopimages/shop1pic.png";
import logo from "../../../public/assets/shopimages/shoplogo.png";
import small from "../../../public/assets/shopimages/shopSlogo.png";
import panel from "../../../public/assets/shopimages/Group 63.png";
import Catlog from "../shopcatlog/page";
import Foot from "../foot/page";


export default function Shop() {
  return (
    <div>
      {/* Shop Header */}
      <div className="relative bg-white w-full">
        <Image src={shop} alt="shop" className="h-[316px] w-full" />
        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <li>
            <Image src={logo} alt="logo" className="-mt-20" />
          </li>
          <li className="flex font-poppins pb-20">
            <Link href="/">
              <span className="font-medium text-[16px] leading-[24px]">Home</span>
            </Link>
            <Image src={small} alt="small" className="w-[14px] h-[8px] m-2" />
            <Link href="/Shop">
              <span className="font-light text-[16px] leading-[24px]">Shop</span>
            </Link>
          </li>
        </ul>
        <Image src={panel} alt="panel" className="w-full h-[100px] my-10" />
      </div>

      {/* Shop Items */}
      <div className="items-center ml-20">
        <Catlog />
              </div>

      {/* Pagination */}
      <div className="flex flex-row justify-center py-28 gap-[38px]">
        {/* Button 1 */}
        <Link href="#">
          <button className="w-[60px] h-[60px] bg-[#FFF9E5] text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out">
            1
          </button>
        </Link>

        {/* Button 2 */}
        <Link href="#">
          <button className="w-[60px] h-[60px] bg-[#FFF9E5] text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out">
            2
          </button>
        </Link>

        {/* Button 3 */}
        <Link href="#">
          <button className="w-[60px] h-[60px] bg-[#FFF9E5] text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out">
            3
          </button>
        </Link>

        {/* Next Button */}
        <Link href="#">
          <button className="w-[98px] h-[60px] bg-[#FFF9E5] text-black rounded-lg flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out">
            Next
          </button>
        </Link>
      </div>

     {/* Foot */}
    <Foot /> 
    </div>
  );
}
