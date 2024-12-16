import Image from "next/image";
import Link from "next/link";
import shop from "../../../public/assets/shopimages/shop1pic.png";
import logo from "../../../public/assets/contact/contactlogo.png";
import small from "../../../public/assets/shopimages/shopSlogo.png";
import panel from "../../../public/assets/shopimages/Group 63.png";
import address from "../../../public/assets/contact/address.png";
import phone from "../../../public/assets/contact/phone.png";
import clock from "../../../public/assets/contact/clock.png";
import Foot from "../foot/page";

export default function Contact () {
    return(
        <div>
            {/* contact Header */}
      <div className="relative bg-white w-full font-poppins">
        <Image src={shop} alt="shop" className="h-[316px] w-full" />
        <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <li>
            <Image src={logo} alt="logo" className="-mt-20" />
          </li>
          <li className="flex font-poppins pb-20 ml-10">
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
      <div className="font-poppins">
        <h1 className="font-semibold text-[36px] leading-[54px] text-center mt-6">Get In Touch With Us</h1>
        <h4 className="font-normal text-[16px] leading-[24px] text-center text-[#9F9F9F]">For More Information About Our Product & Services. Please Feel Free To Drop Us <br/>An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</h4>
      </div>
      <div className="flex text-black gap-10 items-center justify-center">
      <div className="flex flex-col gap-8 md:flex-row">
  <ul className="flex flex-col gap-6 -mt-[355px]">
    {/* Icon List */}
    <li className="flex items-center gap-10">
      <Image src={address} alt="address" className="w-[22px] h-[28px] mb-14" />
      <div>
        <h3 className="font-medium text-[24px] leading-[36px]">Address</h3>
        <p className="font-normal text-[16px] leading-[24px]">
          236 5th SE Avenue, New<br />
          York NY10000, United<br />
          States
        </p>
      </div>
    </li>

    <li className="flex items-center gap-10">
      <Image src={phone} alt="phone" className="w-[30px] h-[30px] mb-12" />
      <div>
        <h3 className="font-medium text-[24px] leading-[36px]">Phone</h3>
        <p className="font-normal text-[16px] leading-[24px]">
          Mobile: +(84) 546-6789<br />
          Hotline: +(84) 456-6789
        </p>
      </div>
    </li>

    <li className="flex items-center gap-10">
      <Image src={clock} alt="clock" className="w-[23px] h-[23px] mb-12" />
      <div>
        <h3 className="font-medium text-[24px] leading-[36px]">Working Time</h3>
        <p className="font-normal text-[16px] leading-[24px]">
          Monday-Friday: 9:00 - 22:00<br />
          Saturday-Sunday: 9:00 - 21:00
        </p>
      </div>
    </li>
  </ul>
</div>

            <form className="flex flex-col space-y-14 ml-40 mb-20 mt-20 font-poppins">
                {/* Username*/}
                <div>
                  <label htmlFor="username" className="block text-[16px] font-medium text-black mb-2">
                  Your name
                  </label>
                  <input
                    type="text"
                    id="username"
                    className="w-[528.75px] h-[75px] font-normal border border-[#9F9F9F] rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Abc"
                    aria-label="Enter your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="password" className="block text-[16px] font-medium text-black mb-2">
                  Email address
                  </label>
                  <input
                    type="Email address"
                    id="Email address"
                    className="w-[528.75px] h-[75px] font-normal border border-[#9F9F9F] rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Abc@def.com"
                    aria-label="Enter your Email"
                  />
                </div>
                {/* Subject */}
                <div>
                  <label htmlFor="password" className="block text-[16px] font-medium text-black mb-2">
                  Subject                  </label>
                  <input
                    type="Subject"
                    id="Subject"
                    className="w-[528.75px] h-[75px] font-normal border border-[#9F9F9F] rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="This is an optional"
                    aria-label="Enter your subject"
                  />
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="password" className="block text-[16px] font-medium text-black mb-2">
                  Message
                  </label>
                  <input
                    type="Message"
                    id="Message"
                    className="w-[527px] h-[120px] font-normal border border-[#9F9F9F] rounded-md px-4 py-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Hi! i’d like to ask about"
                    aria-label="Enter your Message"
                  />
                </div>
                 {/* submit Button */}
                 <button
                    type="submit"
                    className="mr-80 p-3 sm:w-auto text-black font-normal rounded-2xl hover:bg-blue-400 outline-[1px] outline outline-black"
                  >
                   Sbumit                  
                   </button>

                </form>

        </div>
         {/* Foot */}
         <Foot />
      </div>
    )
}