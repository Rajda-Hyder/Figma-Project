import Image from "next/image";
import rocket from "../../../../public/assets/Rocket single seater 1.png";
import table from "../../../../public/assets/side table 1.png";
import sofa from "../../../../public/assets/sofa.png";
import Link from "next/link";

export default function Section1() {
  return (
    <div className="bg-[#FBEBB5] font-poppins">
      <div className="flex flex-col lg:flex-row items-center w-full">
      {/* text section */}
      <div className="-mr-12">
     <h1 className="font-medium text-[64px] leading-[96px] ml-5 px-4 text-justify">Rocket single seater</h1>
    <Link href="/cart" > <h2 className="font-medium text-[24px] leading-[36px] ml-10 mt-10 underline underline-offset-8">Shop Now</h2></Link>
      </div>
      {/* image Section */}
      <div className="relative w-full mt-8 lg:mt-0">
        <Image
          src={rocket}
          alt="rocket"
          className="w-full h-auto object-cover ml-10"
          priority
        />
             </div>
             </div>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row bg-[#FAF4F4] justify-around items-center py-10 px-4 md:px-12 lg:px-20">
        {/* Side Table */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-0">
          <Image
            src={table}
            alt="Side Table"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[605px] h-auto object-contain"
          />
          <div className="mt-6">
            <h2 className="font-poppins font-semibold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.4] mb-2">
              Side Table
            </h2>
            <Link href="#" aria-label="View More about Side Table">
              <span className="font-poppins text-[16px] sm:text-[20px] md:text-[24px] underline underline-offset-8 hover:opacity-75 cursor-pointer">
                View More
              </span>
            </Link>
          </div>
        </div>

        {/* Sofa */}
        <div className="flex flex-col items-center text-center">
          <Image
            src={sofa}
            alt="Sofa"
            className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[605px] h-auto object-contain"
          />
          <div className="mt-6">
            <h2 className="font-poppins font-semibold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.4] mb-2">
              Sofa
            </h2>
            <Link href="#" aria-label="View More about Sofa">
              <span className="font-poppins text-[16px] sm:text-[20px] md:text-[24px] underline underline-offset-8 hover:opacity-75 cursor-pointer">
                View More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
