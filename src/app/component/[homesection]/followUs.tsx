import Image from "next/image";
import image from "../../../../public/assets/Rectangle-17.png";
import image1 from "../../../../public/assets/button.png";
import Link from "next/link";

export default function FollowUs() {
  return (
    <div className="relative bg-white w-full max-w-screen-xl mx-auto">
      {/* Background Image */}
      <Image src={image} alt="Instagram Background" className="w-full h-auto" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-poppins px-4">
        {/* Title */}
        <h1 className="font-bold text-[36px] sm:text-[48px] md:text-[60px] leading-tight">
          Our Instagram
        </h1>

        {/* Subtitle */}
        <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.5] mt-4">
          Follow our store on Instagram
        </p>

        {/* Button */}
        <Link
          href="#"
          aria-label="Follow us on Instagram"
          className="relative inline-block mt-6 group"
        >
          {/* Button Background Image */}
          <Image
            src={image1}
            alt="Follow Us Button"
            className="w-[200px] sm:w-[255px] h-[50px] sm:h-[64px] object-cover shadow-lg transition-transform duration-300 group-hover:translate-y-[2px] rounded-[50px]"
          />

          {/* Text Overlay */}
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-normal text-[16px] sm:text-[20px] text-black">
            Follow Us
          </span>
        </Link>
      </div>
    </div>
  );
}
