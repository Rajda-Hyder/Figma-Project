import Image from "next/image";
import pic from "../../../../public/assets/Rectangle 13.png";
import pic1 from "../../../../public/assets/Rectangle 14.png";
import pic2 from "../../../../public/assets/Rectangle 15.png";
import time from "../../../../public/assets/timedate.png";
import Link from "next/link";

export default function Group54() {
  return (
    <div className="bg-white pt-10 pb-16 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Title Section */}
      <div className="text-center font-poppins font-semibold mb-10">
        <h1 className="text-[24px] sm:text-[28px] md:text-[36px] leading-tight">
          Our Blogs
        </h1>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] mt-2 text-gray-600">
          Find a bright idea to suit your taste with our great selection.
        </p>
      </div>

      {/* Blog Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        {/* Blog 1 */}
        <article className="flex flex-col items-center">
          <Image src={pic} alt="Blog Post 1" className="w-full h-auto rounded-lg shadow-md" />
          <div className="text-center mt-4">
            <h2 className="font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-tight">
              Going all-in with millennial design
            </h2>
            <Link href="#" aria-label="Read more about Blog Post 1">
              <span className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] underline underline-offset-8 hover:opacity-75 block mt-4">
                Read More
              </span>
            </Link>
            <div className="flex justify-center mt-4">
              <Image src={time} alt="Posted Time" className="w-[24px] h-auto" />
            </div>
          </div>
        </article>

        {/* Blog 2 */}
        <article className="flex flex-col items-center">
          <Image src={pic1} alt="Blog Post 2" className="w-full h-auto rounded-lg shadow-md" />
          <div className="text-center mt-4">
            <h2 className="font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-tight">
              Going all-in with millennial design
            </h2>
            <Link href="#" aria-label="Read more about Blog Post 2">
              <span className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] underline underline-offset-8 hover:opacity-75 block mt-4">
                Read More
              </span>
            </Link>
            <div className="flex justify-center mt-4">
              <Image src={time} alt="Posted Time" className="w-[24px] h-auto" />
            </div>
          </div>
        </article>

        {/* Blog 3 */}
        <article className="flex flex-col items-center">
          <Image src={pic2} alt="Blog Post 3" className="w-full h-auto rounded-lg shadow-md" />
          <div className="text-center mt-4">
            <h2 className="font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-tight">
              Going all-in with millennial design
            </h2>
            <Link href="#" aria-label="Read more about Blog Post 3">
              <span className="font-semibold text-[16px] sm:text-[18px] md:text-[20px] underline underline-offset-8 hover:opacity-75 block mt-4">
                Read More
              </span>
            </Link>
            <div className="flex justify-center mt-4">
              <Image src={time} alt="Posted Time" className="w-[24px] h-auto" />
            </div>
          </div>
        </article>
      </div>

      {/* View All Posts Button */}
      <div className="flex justify-center mt-10">
        <Link href="#" aria-label="View all blog posts">
          <button className="font-poppins font-semibold text-[16px] sm:text-[18px] md:text-[20px] underline underline-offset-8 hover:opacity-75 focus:outline-none">
            View All Posts
          </button>
        </Link>
      </div>
    </div>
  );
}
