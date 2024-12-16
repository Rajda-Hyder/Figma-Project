import Image from "next/image";
import letter from "../../../public/assets/Newsletter.png";
import uni from "../../../public/assets/400 University.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* Main Footer Content */}
      <div className="max-w-[1240px] mx-auto py-16 px-4 md:px-8 lg:px-0">
        <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
          {/* Newsletter Section */}
          <div className="flex flex-col items-start ml-auto">
            <Image
              src={letter}
              alt="Newsletter Icon"
              className="w-[86px] h-[24px] mb-8"
            />
            {/* Input and Subscribe Button Container */}
            <div className="flex items-center gap-4 w-full max-w-md">
              <div className="relative flex-grow">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="peer w-full border-b-2 border-black bg-transparent py-2 text-gray-800 text-sm placeholder-transparent focus:outline-none focus:border-black"
                />
                <label
                  className="absolute left-0 top-0 text-[#9F9F9F] font-poppins font-normal text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-sm peer-focus:text-black leading-[21px]"
                >
                  Enter Your Email Address
                </label>
              </div>
              <button className="font-poppins font-semibold text-[14px] underline underline-offset-8 mt-2">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Links Section */}
          <nav className="flex flex-wrap gap-8 lg:gap-52">
            {/* Links Column 1 */}
            <ul className="font-poppins font-semibold">
              <li className="text-[#9F9F9F] pb-14">Links</li>
              <li className="pb-16">
                <Link href="/">Home</Link>
              </li>
              <li className="pb-14">
                <Link href="/shop">Shop</Link>
              </li>
              <li className="pb-14">
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
            {/* Links Column 2 */}
            <ul className="font-poppins font-semibold">
              <li className="text-[#9F9F9F] pb-14">Help</li>
              <li className="pb-16">
                <Link href="/payment-options">Payment Options</Link>
              </li>
              <li className="pb-14">
                <Link href="/returns">Returns</Link>
              </li>
              <li>
                <Link href="/privacy-policies">Privacy Policies</Link>
              </li>
            </ul>
          </nav>

          {/* University Logo */}
          <div className="flex-shrink-0 pt-28 pr-0 lg:pr-28">
            <Image src={uni} alt="University Logo" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-[#D9D9D9] w-full">
        <div className="max-w-[1240px] mx-auto py-4 font-poppins font-normal border-t-[1px] text-[16px] text-black">
          2022 Meubel House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
