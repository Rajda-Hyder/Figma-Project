import Image from "next/image";
import group from "../../../../public/assets/Group-15.png";
import group1 from "../../../../public/assets/Group-16.png";
import group2 from "../../../../public/assets/Group-17.png";
import group3 from "../../../../public/assets/Group-18.png";
import Link from "next/link";

export default function Group19() {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Text Section */}
      <div className="text-center mb-8">
        <h1 className="font-poppins font-semibold text-[24px] sm:text-[28px] md:text-[36px] leading-[1.5] mb-4">
          Top Picks For You
        </h1>
        <p className="font-poppins text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6] text-gray-600">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>
      </div>

      {/* Image Grid Section */}
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-12">
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
        <Link href= "/shop">  View More  </Link>
        </button>
      </div>
    </div>
  );
}
