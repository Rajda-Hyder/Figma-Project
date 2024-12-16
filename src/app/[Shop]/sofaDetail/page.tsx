import Image from "next/image";
import Link from "next/link";
import sofa1 from "../../../../public/assets/detail/detail2.png";
import sofa3 from "../../../../public/assets/detail/detail4.png";
import group from "../../../../public/assets/Group-15.png";
import group1 from "../../../../public/assets/Group-16.png";
import group2 from "../../../../public/assets/Group-17.png";
import group3 from "../../../../public/assets/Group-18.png";
import svg from "../../../../public/assets/icons/star-half-icon.png";
import fb from "../../../../public/assets/icons/fb.png";
import link from "../../../../public/assets/icons/link.png";
import twit from "../../../../public/assets/icons/twit.png";
import rh from "../../../../public/assets/icons/redheart.png";
import plus from "../../../../public/assets/icons/-1+.png";
import add from "../../../../public/assets/icons/add.png";
import arrow from "../../../../public/assets/icons/arrow.png";
import arrow1 from "../../../../public/assets/icons/arrow.png";
import line from "../../../../public/assets/icons/Line5.png";

export default function SofaDetail() {
  return (
    <div className="">
      <div className="p-8 ml-24">

        <ul className="flex font-poppins font-normal gap-8 text-[#9F9F9F]">
          <li>Home</li>
          <li className="font-bold"> <Image src={arrow} alt="arrow" /> </li>
          <li >Shop</li>
          <li className="text-black"><Image src={arrow1} alt="arrow1" /></li>
          <li className="mb-2"><Image src={line} alt="line" className="justify-between" /></li>
          <li className="text-black">Asgaard sofa</li>
        </ul>
      </div>
      <div className="flex flex-row pl-28 gap-20 mb-10">
        <Image src={sofa1} alt="sofa1" className="w-[553px] h-[500px]" />
        <div className="font-poppins font-normal space-y-4 lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">

          <h1 className="text-gray-900 text-3xl title-font font-medium -mt-4">
            Asgaard sofa
          </h1>
          <h3 className="font-poppins font-medium">Rs. 250,000.00</h3>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-[#FFDA5B]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-[#FFDA5B]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-[#FFDA5B]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 text-[#FFDA5B]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>

              < Image src={svg} alt="svg" />

              <span className="flex ml-4 pl-3 py-2 border-l-2 border-[#9F9F9F] space-x-4s">

              </span>
              <span className="text-[#9F9F9F] ml-3">5 Customer Review</span>
            </span>
          </div>
          <p className="absolute leading-[19.5px] w-[424px] h-[80px] text-left text-[13px] font-poppins font-normal">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact,stout-hearted hero with a well-balanced
            audio which boasts a clear midrange and extended highs for a
            sound.
          </p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

            <div className="flex flex-col mt-20 mb-10">
              <span className="font-poppins font-normal text-[14px] mb-4">Size</span>
              <span className="flex flex-row gap-1">
                {/* Button 1 */}
                <Link href="#">
                  <button className="w-[30px] h-[30px] bg-[#FFF9E5] text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out">
                    L
                  </button>
                </Link>

                {/* Button 2 */}
                <Link href="#">
                  <button className="w-[30px] h-[30px] bg-[#FFF9E5] text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out">
                    XL
                  </button>
                </Link>

                {/* Button 3 */}
                <Link href="#">
                  <button className="w-[30px] h-[30px] bg-[#FFF9E5] text-black rounded-sm flex items-center justify-center hover:bg-[#FBEBB5] transition duration-300 ease-in-out">
                    XS
                  </button>
                </Link>
              </span>

              <div className="flex flex-col">
                <span className="mt-4">Color</span>
                <div className="mt-4">

                  <button className="border-2 border-gray-300 bg-[#816DFA] rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-3 bg-black rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-3 bg-[#CDBA7B] rounded-full w-6 h-6 focus:outline-none" />
                </div>
              </div>

              <span>
                <button> <Image src={plus} alt="plus" className="mr-3 mt-4 w-[123px] h-[64px]" /></button>
                <button>  <Image src={add} alt="add" className="w-[215px] h-[64px]" /></button>
              </span>

            </div>

          </div>

          <div className="flex flex-row gap-6 font-poppins font-normal text-[16px] text-[#9F9F9F]">
            <ul className="gap-2">
              <li>SKU</li>
              <li>Category</li>
              <li>Tags</li>
              <li>Share</li>
            </ul>
            <ul className="gap-2 ml-2">
              <li>:</li>
              <li>:</li>
              <li>:</li>
              <li>:</li>
            </ul>
            <ul className="gap-2">
              <li>SS001</li>
              <li>Sofas</li>
              <li>Sofa, Chair, Home, Shop</li>
              <li className="flex gap-4 w-[20px] h-[20px]">
                <Image src={fb} alt="fb" />
                <Image src={link} alt="link" />
                <Image src={twit} alt="twit" />
                <Image src={rh} alt="rh" className="text-[#FF0000] w-[25px] h-[31.21px] ml-40" />
              </li>
            </ul>
          </div>
        </div>

      </div>
      <div className="justify-center">
        <Image src={sofa3} alt="sofa3" />
      </div>
      <div className="bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Text Section */}


        {/* Image Grid Section */}
        <ul className="grid grid-cols-2 md:grid-cols-4 w-[1240px] h-[397px] items-center justify-center gap-4 sm:gap-8 md:gap-12">
          <li>
            <Image
              src={group3}
              alt="Top Pick 1"
              className="w-full h-auto"
              aria-label="Top Pick 1"
            />
          </li>
          <li>
            <Image
              src={group}
              alt="Top Pick 2"
              className="w-full h-auto"
              aria-label="Top Pick 2"
            />
          </li>
          <li>
            <Image
              src={group1}
              alt="Top Pick 3"
              className="w-full h-auto"
              aria-label="Top Pick 3"
            />
          </li>
          <li>
            <Image
              src={group2}
              alt="Top Pick 4"
              className="w-full h-auto"
              aria-label="Top Pick 4"
            />
          </li>
        </ul>

        {/* View More Button */}
        <div className="flex justify-center mt-10">
          <button className="font-poppins font-semibold text-[14px] sm:text-[16px] md:text-[18px] underline underline-offset-8 hover:opacity-80 focus:outline-none">
            <Link href="/shop">  View More  </Link>
          </button>
        </div>
      </div>

    </div>
  )
}