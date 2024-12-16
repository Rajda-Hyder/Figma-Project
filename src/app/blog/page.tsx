import Image from "next/image"
import blog1 from "../../../public/assets/blogpic/blog1.png";
import blog2 from "../../../public/assets/blogpic/blog2.png";
import blog3 from "../../../public/assets/blogpic/blog3.png";
import date from "../../../public/assets/blogpic/date.png";
import date1 from "../../../public/assets/blogpic/date1.png";
import line from "../../../public/assets/blogpic/Line 13.png";
import search from "../../../public/assets/blogpic/icons_search.png";
import spic from "../../../public/assets/blogpic/Group 182.png";
import spic1 from "../../../public/assets/blogpic/Group 181.png";
import spic2 from "../../../public/assets/blogpic/Group 180.png";
import spic3 from "../../../public/assets/blogpic/Group 179.png";
import spic4 from "../../../public/assets/blogpic/Group 178.png";
import Link from "next/link";
import Foot from "../foot/page";


export default function Blog (){
    return (
        <div>
        <div className="flex font-poppins">
           <div className="m-8 p-8">
            <Image src={blog1} alt="blog1" className="mb-4"/>
            <Image src={date1} alt="date1"/>
            <h1 className="font-medium text-[30px] leading-[45px] my-4">Exploring new ways of decorating</h1>
            <p className="font-normal text-[15px] text-justify leading-[22.5px] w-[817px] h-[115px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                 dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero Pellentesque
             elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
             <h3 className="my-6"> <Link href="/blog">
             Read more
             </Link>
             <span><Image src={line} alt="line" /></span>
             </h3>
            <Image src={blog2} alt="blog2" className="mb-4"/>
            <Image src={date} alt="date"/>
            <h1 className="font-medium text-[30px] leading-[45px] my-4">Exploring new ways of decorating</h1>
            <p className="font-normal text-[15px] text-justify leading-[22.5px] w-[817px] h-[115px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                 dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero Pellentesque
             elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
             <h3 className="my-6"> <Link href="/blog">
             Read more
             </Link>
             <span><Image src={line} alt="line" /></span>
             </h3>
            <Image src={blog3} alt="blog3" className="mb-4"/>
            <Image src={date1} alt="date1"/>
            <h1 className="font-medium text-[30px] leading-[45px] my-4">Exploring new ways of decorating</h1>
            <p className="font-normal text-[15px] text-justify leading-[22.5px] w-[817px] h-[115px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                 dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin
                aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus
                turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero Pellentesque
             elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
             <h3 className="my-6"> <Link href="/blog">
             Read more
             </Link>
             <span><Image src={line} alt="line" /></span>
             </h3>
              </div>
              <section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto font-poppins">

    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        
        <div className="p-2 w-1/2">
          <div className="relative">
                       <input
              type="search"
              id="search"
              name="search"
              className="w-[311px] h-[58px] bg-white bg-opacity-50 rounded border border-black focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
              <Image
    src={search}
    alt="Search"
    className="absolute top-1/2 -right-52 transform -translate-y-1/2 w-6 h-6"
  />    </div>
        </div>
    </div>
    </div>
    <h1 className="font-medium text-[24px] leading-[36px] text-black my-[39.4px] pl-32">Categories</h1>
    <div className="flex gap-40 pl-32">
    <ul>
        <li >Crafts</li>
        <li className="my-[39.4px]">Design</li>
        <li>Handmade</li>
        <li className="my-[39.4px]">Interior</li>
        <li>Wood</li>
    </ul>
<ul>
    <li>2</li>
    <li className="my-[39.4px]">8</li>
    <li>7</li>
    <li className="my-[39.4px]">1</li>
    <li>6</li>
</ul>
    </div>
    <div className="pl-32">
        <h1 className="font-medium text-black text-[24px] leading-[36px] pb-10 pt-20">Recent Posts</h1>
        <ul>
            <li><Image src={spic} alt="spic" /></li>
            <li><Image src={spic1} alt="spic1" className="py-10" /></li>
            <li><Image src={spic2} alt="spic2" /></li>
            <li><Image src={spic3} alt="spic3" className="py-10" /></li>
            <li><Image src={spic4} alt="spic4" /></li>
        </ul>
        
    </div>
  </div>
       </section>
       
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
     {/* foot */}
     <Foot/>

  </div>

        
    )
}
