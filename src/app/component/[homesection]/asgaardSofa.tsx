import Image from "next/image";
import sofa from "../../../../public/assets/Asgaard-sofa.png";
import button from "../../../../public/assets/Asgaard-button.png";
import Link from "next/link";

export default function Asgaard() {
  return (
    <div className="flex flex-col md:flex-row bg-[#FFF9E5] items-center justify-center gap-6 p-4 md:p-8">
      {/* Sofa Image */}
      <div className="flex-shrink-0 max-w-xs md:max-w-md lg:max-w-lg">
        <Image
          src={sofa}
          alt="Asgaard Sofa"
          className="object-contain w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <p className="font-normal text-[20px] sm:text-[24px] leading-[1.5]">
          New Arrivals
        </p>
        <h1 className="font-bold text-[32px] sm:text-[48px] leading-[1.2]">
          Asgaard Sofa
        </h1>
        <Link href="/shop/sofaDetail" aria-label="Shop Asgaard Sofa">
          <button className="mt-6">
            <Image
              src={button}
              alt="Shop Now Button"
              className="w-32 sm:w-40"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}
